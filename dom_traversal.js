// const card = document.querySelector(".card");
// const closeButton = document.querySelector(".close");

// closeButton.addEventListener("click", function () {
//   card.style.display = "none";
// });

//dom traversal
// const closeButton = document.querySelectorAll(".close");

// for (let i = 0; i < closeButton.length; i++) {
//   closeButton[i].addEventListener("click", function (e) {
//     // closeButton[i].parentElement.style.display = "none";
//     e.target.parentElement.style.display = "none";
//   });
// }

// or

// closeButton.forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.target.parentElement.style.display = "none";
//     // prevent default action like a href will go to the link, so we can prevent it from do that with preventDefault();
//     e.preventDefault();
//     // stop event bubbling, like when element parent have event, we can prevent that from happen to this event.
//     e.stopPropagation();
//   });
// });

// const cards = document.querySelectorAll(".card");
// cards.forEach(function (card) {
//   card.addEventListener("click", function () {
//     alert("ok");
//   });
// });

const container = document.querySelector(".container");
container.addEventListener("click", function (e) {
  if (e.target.className == "close") {
    e.target.parentElement.style.display = "none";
    e.preventDefault();
  }
});

// contoh method

// parentNode -> node
// parentElement -> element
// nextSibling -> node
// nextElementSibling -> element
// previousSibling -> node
// previousElementSibling -> element
