document.addEventListener("DOMContentLoaded", takeespecificinformation)
let getLocalStorage = (key) => JSON.parse(localStorage.getItem(key))
let setLocalStorage = (key, item) => localStorage.setItem(key, JSON.stringify(item))
let modaldelete = document.getElementById("modaldelete");
let modalno = document.getElementById("modalno");
let newbutton = document.getElementById("newbutton");
let editbutton = document.getElementById("editbutton");
let deletebutton = document.getElementById("deletebutton");
editbutton.addEventListener("click", () => {
    url = "../paginas/edit.html";
    window.open(url, "_self")
})
deletebutton.addEventListener("click", openmodal)
modalno.addEventListener("click", closemodal)
modaldelete.addEventListener("click", deletepost)
post = document.getElementById("contentpost");
//só colocar a função no eventListener ele não identifica o parâmetro?
newbutton.addEventListener("click", () => {
    url = "../paginas/addpost.html";
         window.open(url, "_self")
})

function takeespecificinformation() {
    index = getLocalStorage("index");
    database = getLocalStorage("database")[index];
    printpost(database)
    
}
function printpost(database) {
 posttext = `<div id="post" class="post">
        <div id="image" class="image">
            <img src="${database.url}">
        </div>
        <div id ="contenttwo" class="contenttwo">
            <div id="information" class="information">
                <div id="nameanddate" class="nameanddate">
                    ${database.name } | ${database.date}
                </div>
                    <div id="titlepost" class="titlepost">
                        <h2>${database.title}</h2>
                    </div>
                        <div id="text" class="text">
                    <p>${database.text}</p>
                </div>
            </div>
        </div>
    </div>
    ` 
    post.innerHTML += posttext
}
function openmodal() {    
    let modal = document.getElementById("modal");
    modal.classList.add("openmodal");
}
function closemodal() {
    let modal = document.getElementById("modal");
    modal.classList.remove("openmodal")
}
function deletepost () {
    database = getLocalStorage("database");
    index = getLocalStorage("index");
    database.splice(index, 1);
    setLocalStorage("database", database);
    url = "../paginas/posts.html";
    window.open(url, "_self");

}