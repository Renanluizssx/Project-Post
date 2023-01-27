//javascript não imprime objeto?
let getLocalStorage = (key) => JSON.parse(localStorage.getItem(key))
let setLocalStorage = (key, item) => localStorage.setItem(key, JSON.stringify(item))
imagebutton = document.getElementById("imagebutton");
imagebutton.addEventListener("click", openwindow);
document.addEventListener("DOMContentLoaded", () => {
    object = getLocalStorage("database");
    updatescreen(object)
})


function printpost(object) {
        index = document.getElementsByClassName("post").length;   
posts = `<div id="post" class="post">
            <div id="image${index}" onclick="openclickedpost(${index})" class="image">
                <img src="${object.url}">
            </div>
            <div id="titlepost${index}" class="titlepost">
                <h2>${object.title}</h2>
            </div>
            <div id="text${index}" class="text">
                <p>${object.text}</p>
            </div>
        </div>
        `; 
        content = document.getElementById("content");
        content.innerHTML += posts
        
        
}

function openclickedpost(index) {
    image = document.getElementById(`image${index}`)
    image.addEventListener("click", () => {
        //window.open e window.location só abre endereço?
    url = "../paginas/clickpost.html"
     window.open(url, "_self") 
     setLocalStorage("index", index)
     
    })
}
function openwindow() {
    url = "../paginas/addpost.html"
        window.open(url, "_self")
}
function updatescreen (database) {
    if (database.length === 0) {
        url = "../index.html"
        return window.open(url, "_self")
    }
    database.forEach(printpost)

    }


   
