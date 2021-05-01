const container = document.querySelector(".container");

fetch("http://jsonplaceholder.typicode.com/users")
  .then((data) => {
    return data.text();
    // return data.json();
    // console.log ka example
  })
  .then((result) => {
    console.log(JSON.parse(result));
    const array = JSON.parse(result);
    array.map((obj, index) => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `<div class="name">Name</div><div class="name-content">${obj.username}</div><div class="email">Email</div><div class="email-content">${obj.email}</div>`;
      container.appendChild(card);
    });
  });
