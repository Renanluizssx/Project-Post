const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key));
const setLocalStorage = (key, item) =>
  localStorage.setItem(key, JSON.stringify(item));
const imageButton = document.getElementById("image-button");
imageButton.addEventListener("click", openWindow);
document.addEventListener("DOMContentLoaded", () => {
  const object = getLocalStorage("database");
  updateScreen(object);
});

function printPost(object) {
  const index = document.getElementsByClassName("post").length;
  const posts = `<div id="post" class="post">
                <div id="image-${index}" onclick="openClickedPost(${index})" class="image">
                    <img src="${object.url}">
                </div>
                <div id="title-post-${index}" class="title-post">
                    <h2>${object.title}</h2>
                </div>
                <div id="text-${index}" class="text">
                    <p>${object.text}</p>
                </div>
            </div>
            `;
  const content = document.getElementById("content");
  content.innerHTML += posts;
}

function openClickedPost(index) {
  const image = document.getElementById(`image-${index}`);
  image.addEventListener("click", () => {
    const url = "../paginas/clickpost.html";
    window.open(url, "_self");
    setLocalStorage("index", index);
  });
}
function openWindow() {
  const url = "../paginas/addpost.html";
  window.open(url, "_self");
}
function updateScreen(dataBase) {
  if (dataBase.length === 0) {
    const url = "../index.html";
    return window.open(url, "_self");
  }
  dataBase.forEach(printPost);
}
