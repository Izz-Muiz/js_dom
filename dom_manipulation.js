// Access the <h1> element and change its inner HTML
const title = document.getElementById("judul");
title.innerHTML = "Welcome to DOM Manipulation";

// Change the style of the <h1> element
title.style.color = "blue";
title.style.textAlign = "center";

// Add a class to the <h1> element
title.classList.add("lightblue");

// Access the first paragraph and modify its text
const paragraph1 = document.querySelector("#a .p1");
paragraph1.innerHTML = "This is the updated content of paragraf 1";
paragraph1.style.fontWeight = "bold";

// Add a new class to paragraph 1
paragraph1.classList.add("highlight");

// Set an attribute to the Instagram link
const instagramLink = document.querySelector("#a a");
instagramLink.setAttribute("target", "_blank"); // Open the link in a new tab
instagramLink.innerHTML = "Follow Muizz on Instagram";

// Remove the class from paragraph 3
const paragraph3 = document.querySelector("#a .p3");
paragraph3.classList.remove("p3");
paragraph3.style.color = "red";

// Add a new list item dynamically to the <ul> in section B
const ul = document.querySelector("#b ul");
const newListItem = document.createElement("li");
newListItem.innerHTML = "item 4"; // Adding new content
ul.appendChild(newListItem);

// Remove the second list item from the <ul>
const secondItem = ul.children[1];
ul.removeChild(secondItem);

// Add an inline style to section B
const sectionB = document.getElementById("b");
sectionB.style.backgroundColor = "#f0f0f0";

// Toggle a class on section B when clicked
sectionB.addEventListener("click", function () {
  sectionB.classList.toggle("lightblue");
});

// Add a new paragraph to section A using innerHTML
const sectionA = document.getElementById("a");
sectionA.innerHTML += '<p class="p4">This is a dynamically added paragraph</p>';

// Clone an element and append it to the container
const clonedParagraph = paragraph1.cloneNode(true);
clonedParagraph.innerHTML = "This is a cloned paragraph";
document.getElementById("container").appendChild(clonedParagraph);

// Key Manipulations Covered:
// innerHTML:

// Updating content (e.g., <h1>, <p>).
// Dynamically adding HTML (e.g., a new paragraph in section A).
// style:

// Changing inline styles (e.g., text color, background color).
// setAttribute and getAttribute:

// Setting attributes (e.g., target="_blank" for the Instagram link).
// classList:

// Adding (classList.add), removing (classList.remove), and toggling (classList.toggle) classes.
// appendChild and removeChild:

// Adding and removing elements dynamically (e.g., list items in the <ul>).
// cloneNode:

// Cloning an element and appending it to the DOM.
// Event Listeners:

// Adding interactivity (e.g., toggling a class on click).
