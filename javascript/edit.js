let getLocalStorage = (key) => JSON.parse(localStorage.getItem(key))
let setLocalStorage = (key, item) => localStorage.setItem(key, JSON.stringify(item))
document.addEventListener("DOMContentLoaded", fillfields)

function verificarcampos() {
    let form = document.getElementById("form");
    return form.reportValidity();
}
let updadepost = document.getElementById("button");
    updadepost.addEventListener("click", edit)
    function fillfields() {
    database = getLocalStorage("database");
    index = getLocalStorage("index");
    document.getElementById("texttitle").value = database[index].title;
    document.getElementById("name").value = database[index].name;
    document.getElementById("text").value = database[index].text;
    document.getElementById("url").value = database[index].url;
}


function edit() {
    if (!verificarcampos()) {
        return null;
    }
    //fillfields(database)
   let name =  document.getElementById("name");
    let text = document.getElementById("text");
   let title = document.getElementById("texttitle");
   let url = document.getElementById("url");
   date = new Date()
   let meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
   datea = `${date.getDate()} ${meses[date.getMonth()]} ${date.getFullYear()}`;
    
    let newdatabase = {
        title:title.value,
        name:name.value,
        text:text.value,
        url:url.value,
        date:datea
    }
    //quando coloco um novo valor no array, o array original não muda
    database[index] = newdatabase;
    localStorage.setItem("database", JSON.stringify(database))
    url = "../paginas/posts.html";
    window.open(url, "_self")
}
