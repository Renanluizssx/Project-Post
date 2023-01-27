//localStorage.setItem("dado", "dado")
button = document.getElementById("button");
button.addEventListener("click", preparesend);
let getLocalStorage = (key) => JSON.parse(localStorage.getItem(key)) ?? []
let setLocalStorage = (key, item) => localStorage.setItem(key, JSON.stringify(item));
function preparesend() {
    if (!verificarcampos()) {
        return null
    }
    url = "../paginas/posts.html"
    openwindow(url);
};
function verificarcampos() {
    //tirando o return
    form = document.getElementById("form")
 return form.reportValidity()
};
function openwindow(url) {
window.open(url, "_self");

    addpost();
}
function addpost () {
    let title = document.getElementById("texttitle");
    let name = document.getElementById("name");
    let text = document.getElementById("textarea");
    let url = document.getElementById("url");
    let date = new Date();
    let meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
    datea = `${date.getDate()} ${meses[date.getMonth()]} ${date.getFullYear()}`;

    let database = {
        title:title.value,
        name:name.value,
        text:text.value,
        url:url.value,
        date:datea
    }
    createpost(database)
}
function createpost(database) {
        dados = getLocalStorage("database")
        //spread é tudo que for colocado depois da vírgula será colocado dentro do array
        setLocalStorage ("database", [...dados, database])
}