export const showForm = document.getElementById("ajouter-btn");
export const form = document.getElementById("form-ajout");
export const saveBook = document.getElementById("submit-button");
export const collection = document.getElementById("empty-state")
 const titre=document.getElementById('titleInput')
const titreinput=document.getElementById('')


showForm.addEventListener("click", (e) => {
    form.classList.toggle("hidden");
});