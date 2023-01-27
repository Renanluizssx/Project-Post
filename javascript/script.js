let button = document.getElementById("button");
button.addEventListener("click", addlink)
function addlink() {
    let url = "../paginas/addpost.html";
    window.open(url, "_self");
}