    document.addEventListener("DOMContentLoaded", takeEspecificInformation)
    const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key))
    const setLocalStorage = (key, item) => localStorage.setItem(key, JSON.stringify(item))
    const modalDelete = document.getElementById("modal-delete");
    const modalNo = document.getElementById("modal-no");
    const newButton = document.getElementById("new-button");
    const editButton = document.getElementById("edit-button");
    const deleteButton = document.getElementById("delete-button");
    editButton.addEventListener("click", () => {
        const url = "../paginas/edit.html";
        window.open(url, "_self")
    })
    deleteButton.addEventListener("click", openModal)
    modalNo.addEventListener("click", closeModal)
    modalDelete.addEventListener("click", deletePost)
    const post = document.getElementById("content-post");

    newButton.addEventListener("click", () => {
        const url = "../paginas/addpost.html";
            window.open(url, "_self")
    })

    function takeEspecificInformation() {
        const index = getLocalStorage("index");
        const dataBase = getLocalStorage("database")[index];
        printPost(dataBase)
        
    }
    function printPost(dataBase) {
    const postText = `<div id="post" class="post">
            <div id="image" class="image">
                <img src="${dataBase.url}">
            </div>
            <div id ="content-two" class="content-two">
                <div id="information" class="information">
                    <div id="name-and-date" class="name-and-date">
                        ${dataBase.name } | ${dataBase.date}
                    </div>
                        <div id="title-post" class="title-post">
                            <h2>${dataBase.title}</h2>
                        </div>
                            <div id="text" class="text">
                        <p>${dataBase.text}</p>
                    </div>
                </div>
            </div>
        </div>
        ` 
        post.innerHTML += postText
    }
    function openModal() {    
        const modal = document.getElementById("modal");
        modal.classList.add("open-modal");
    }
    function closeModal() {
        const modal = document.getElementById("modal");
        modal.classList.remove("open-modal")
    }
    function deletePost () {
        const dataBase = getLocalStorage("database");
        const index = getLocalStorage("index");
        dataBase.splice(index, 1);
        setLocalStorage("database", dataBase);
        const url = "../paginas/posts.html";
        window.open(url, "_self");

    }