

// upon submit on the form do a fetch on https://worst-api-ever.herokuapp.com/users/

// then a function that grabs the object in that array of users to find the one the user searched for

// then (yup) you will find a url for the user's page which you can also fetch

// then you have an array of message IDs

// for each of those message ids do another fetch to https://worst-api-ever.herokuapp.com/users/:id/messages/:message_id

// be a good sport and don't look at https://worst-api-ever.herokuapp.com/users/:id/messages, that makes it too easy.

// now you have the text for each of those messages, display them as <li>s in the html however you choose. Extra credit if you make the UI nice.

document.querySelector("#username-search").addEventListener("submit", function(e) {
  e.preventDefault();

});
