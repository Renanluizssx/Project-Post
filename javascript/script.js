const button = document.getElementById("button");
button.addEventListener("click", addLink);
function addLink() {
  let url = "paginas/addpost.html";
  window.open(url, "_self");
}
