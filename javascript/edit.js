    const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key))
    const setLocalStorage = (key, item) => localStorage.setItem(key, JSON.stringify(item))
    document.addEventListener("DOMContentLoaded", fillFields)

    function checkFields() {
        const form = document.getElementById("form");
        return form.reportValidity();
    }
    const updatePost = document.getElementById("button");
        updatePost.addEventListener("click", edit)
        function fillFields() {
        const dataBase = getLocalStorage("database");
        const index = getLocalStorage("index");
        document.getElementById("text-title").value = dataBase[index].title;
        document.getElementById("name").value = dataBase[index].name;
        document.getElementById("text").value = dataBase[index].text;
        document.getElementById("url").value = dataBase[index].url;
    }


    function edit() {
        if (!checkFields()) {
            return null;
        }

    const name =  document.getElementById("name");
        const text = document.getElementById("text");
    const title = document.getElementById("text-title");
    const url = document.getElementById("url");
    const date = new Date()
    const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
    const dateA = `${date.getDate()} ${meses[date.getMonth()]} ${date.getFullYear()}`;
        
        const newDataBase = {
            title:title.value,
            name:name.value,
            text:text.value,
            url:url.value,
            date:dateA
        }
        const dataBase = getLocalStorage("database")
        index = getLocalStorage("index");
        dataBase[index] = newDataBase;
        setLocalStorage("database", dataBase)
        const urlwindow = "paginas/posts.html";
        window.open(urlwindow, "_self");
    }
