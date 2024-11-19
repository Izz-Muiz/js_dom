function changeColor() {
  const p3 = document.querySelector("#a .p3");
  p3.style.color = "blue"; // Changes the text color of paragraf 3 to blue
  p3.style.fontWeight = "bold"; // Makes the text bold
}
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("judul").textContent = "Welcome to DOM Events!";
});
document.querySelectorAll("#b ul li").forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.backgroundColor = "#f0f0f0";
  });
  item.addEventListener("mouseout", () => {
    item.style.backgroundColor = "";
  });
});
document.getElementById("container").addEventListener("dblclick", () => {
  const sectionA = document.getElementById("a");
  sectionA.style.display = sectionA.style.display === "none" ? "block" : "none";
});
