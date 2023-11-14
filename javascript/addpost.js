const button = document.getElementById("button");
button.addEventListener("click", prepareSend);
const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key)) ?? [];
const setLocalStorage = (key, item) =>
  localStorage.setItem(key, JSON.stringify(item));
function prepareSend() {
  if (!checkFields()) {
    return null;
  }
  const url = "../paginas/posts.html";
  openWindow(url);
}

function checkFields() {
  const form = document.getElementById("form");
  return form.reportValidity();
}
function openWindow(url) {
  window.open(url, "_self");

  addPost();
}
function addPost() {
  const title = document.getElementById("text-title");
  const name = document.getElementById("name");
  const text = document.getElementById("text");
  const url = document.getElementById("url");
  const date = new Date();
  const meses = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];
  const dateA = `${date.getDate()} ${
    meses[date.getMonth()]
  } ${date.getFullYear()}`;

  const dataBase = {
    title: title.value,
    name: name.value,
    text: text.value,
    url: url.value,
    date: dateA,
  };
  createPost(dataBase);
}
function createPost(dataBase) {
  const dados = getLocalStorage("database");
  setLocalStorage("database", [...dados, dataBase]);
}
