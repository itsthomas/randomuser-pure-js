// Defining Helper functions
const createNode = element => document.createElement(element);
const append = (parent, el) => parent.appendChild(el);

const ul = document.querySelector("#users");

const config = {
  url: "https://api.randomuser.me",
  gender: "male",
  numberCards: 12
};

// Call API to get cards
fetch(`${config.url}?gender=${config.gender}&results=${config.numberCards}`)
  .then(function(response) {
    return response.json();
  })
  .then(function(apiResponse) {
    // Output API response to console to view.
    console.log(apiResponse.results);
    const users = apiResponse.results;
    const men = users.map(user => user);
    console.log("Men: ", men);

    return men.map(man => {
      // Creating DOM elements
      let li = createNode("li"),
        div = createNode("div"),
        img = createNode("img"),
        h2 = createNode("h2"),
        button = createNode("button");

      // Adding BEM classes
      li.classList.add("card");
      div.classList.add("card__item");
      img.classList.add("card__image");
      h2.classList.add("card__title");
      button.classList.add("card__cta");

      // Accessing the data
      img.src = man.picture.large;
      h2.innerHTML = `${man.name.first} ${man.name.last}`;
      button.innerHTML = "Call";

      // Building cards
      append(li, div);
      append(div, img);
      append(div, h2);
      append(div, button);
      append(ul, li);
    });
  })
  .catch(function(error) {
    console.log(error);
  });
