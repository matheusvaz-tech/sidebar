let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search-alt-2");

btn.onclick = function () {
  sidebar.classList.toggle("active");
};

searchBtn.onclick = function () {
  sidebar.classList.toggle("active");
};