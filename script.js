// // Selecting an element by ID
// const title = document.getElementById("judul");
// console.log(title); // Logs the <h1> element with id="judul"

// // Selecting elements by tag name (returns an HTMLCollection)
// const paragraphs = document.getElementsByTagName("p");
// console.log(paragraphs); // Logs an HTMLCollection of all <p> elements
// console.log(paragraphs[0]); // Access the first <p> element from the collection

// // Selecting elements by class name (returns an HTMLCollection)
// const pClass1 = document.getElementsByClassName("p1");
// console.log(pClass1); // Logs an HTMLCollection of elements with class="p1"
// console.log(pClass1[0]); // Access the first (and only) element with class="p1"

// // Selecting a single element using querySelector (returns the first match)
// const firstSection = document.querySelector("#a"); // Selects the <section> with id="a"
// console.log(firstSection); // Logs the <section> element

// const firstLink = document.querySelector("a"); // Selects the first <a> element in the document
// console.log(firstLink); // Logs the <a> element

// // Selecting multiple elements using querySelectorAll (returns a NodeList)
// const allParagraphs = document.querySelectorAll("p");
// console.log(allParagraphs); // Logs a NodeList of all <p> elements
// console.log(allParagraphs[1]); // Access the second <p> element from the NodeList

// const pClass2 = document.querySelectorAll(".p2"); // Selects all elements with class="p2"
// console.log(pClass2); // Logs a NodeList of elements with class="p2"

// // Accessing elements in the NodeList using a loop
// allParagraphs.forEach((paragraph, index) => {
//   console.log(`Paragraph ${index + 1}:`, paragraph.textContent);
// });

// // Accessing elements in the HTMLCollection using a for loop
// for (let i = 0; i < paragraphs.length; i++) {
//   console.log(`HTMLCollection Paragraph ${i + 1}:`, paragraphs[i].textContent);
// }

// Selecting an element by ID and styling it
const title = document.getElementById("judul");
title.style.color = "blue"; // Change the text color to blue
title.style.textAlign = "center"; // Align the text to the center
title.style.fontSize = "2em"; // Increase font size

// Selecting elements by tag name and styling them
const paragraphs = document.getElementsByTagName("p");
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.backgroundColor = "#f0f0f0"; // Add a light gray background
  paragraphs[i].style.padding = "10px"; // Add padding
  paragraphs[i].style.borderRadius = "5px"; // Round the corners
}

// Selecting elements by class name and styling them
const pClass1 = document.getElementsByClassName("p1");
for (let i = 0; i < pClass1.length; i++) {
  pClass1[i].style.fontWeight = "bold"; // Make text bold
  pClass1[i].style.border = "2px solid green"; // Add a green border
}

// Selecting a single element using querySelector and styling it
const firstLink = document.querySelector("a");
firstLink.style.color = "red"; // Change the link text color to red
firstLink.style.textDecoration = "none"; // Remove underline from the link
firstLink.style.fontStyle = "italic"; // Make text italic

// Selecting multiple elements using querySelectorAll and styling them
const allParagraphs = document.querySelectorAll("p");
allParagraphs.forEach((paragraph, index) => {
  if (index % 2 === 0) {
    paragraph.style.backgroundColor = "#e0ffe0"; // Light green background for even paragraphs
  } else {
    paragraph.style.backgroundColor = "#ffe0e0"; // Light red background for odd paragraphs
  }
  paragraph.style.marginLeft = `${index * 10}px`; // Add a progressive left margin
});
