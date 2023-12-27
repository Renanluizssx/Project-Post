const button = document.getElementById("button");
button.addEventListener("click", addLink);
function addLink() {
  let url = "paginas/AddPost.html";
  window.open(url, "_self");
}
