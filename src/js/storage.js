export function saveBooks (books){
    localStorage.setItem("livres", JSON.stringify(books))
}
export function loadBooks (){
    if (localStorage.getItem("livres") === null){
        return [];
    }else{
        return JSON.parse(localStorage.getItem("livres"))
    }
}