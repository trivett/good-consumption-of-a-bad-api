document.querySelector("#username-search").addEventListener("submit", function(e) {
  e.preventDefault();

  let query = this.query.value;
  fetch('https://worst-api-ever.herokuapp.com/users/')
    .then((response) => {
      return response.json();
    })
    .then((users)=> {
      let user = users.find(user => {
        return user.screenname == query;
      });
      return user;
    })
    .then((user)=> {
      fetch(user.url)
        .then((response)=> {
          return response.json();
        })
        .then((user_data)=> {
          let ids = user_data.message_ids;
          document.getElementById('screenname').innerHTML = user_data.screenname;          
          document.getElementById('messages-headline').style.display = 'block';
          Promise.all(ids.map(id =>
            fetch(`https://worst-api-ever.herokuapp.com/users/${user_data.id}/messages/${id}`)
              .then(r => r.json())
              .then(message => message.body)
              .then((messageText) => insertMessage(messageText))))
              .then(() => {
                let finishedText = document.getElementById('finished-text');
                finishedText.style.display = 'block';
              });
        });
          
    });
});



 let insertMessage = (message) => {
  let ul = document.getElementById('messages-conatiner');
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(message));
  ul.appendChild(li);
}
