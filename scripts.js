function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.querySelector("#users");

const config = {
  url: "https://api.randomuser.me",
  numberCards: 24
};

// Call API to get cards
fetch(`${config.url}?results=${config.numberCards}`)
  .then(function(response) {
    return response.json();
  })
  .then(function(apiResponse) {
    // Output API response to console to view.
    console.log(apiResponse.results);
    const users = apiResponse.results;
    const men = users.filter(user => user.gender === "male");
    console.log("Men: ", men);

    return men.map(man => {
      let li = createNode("li"),
        img = createNode("img"),
        h2 = createNode("h2");
      img.classList.add("card__image");
      li.classList.add("card__item");
      h2.classList.add("card__title");
      img.src = man.picture.large;
      h2.innerHTML = `${man.name.first} ${man.name.last}`;
      append(li, img);
      append(li, h2);
      append(ul, li);
    });
  })
  .catch(function(error) {
    console.log(error);
  });
