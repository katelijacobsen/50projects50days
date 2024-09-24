const todoForm = document.querySelector("#form");
const todoInput = document.querySelector(".input");
const toDos = document.querySelector(".todos");

// Prevent form from default
todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    //Former Data/ tilføjer data i vores input-felt
    //Object
    const data = new FormData(todoForm);
    const text = data.get("todo")

    //tilføjer indhold inden i elementet <li>
    const textNode = document.createTextNode(text); 
    //tilføjer nyt element i vores HTML
    const li = document.createElement("li");
    li.appendChild(textNode);
    
    li.addEventListener("click", () => {
        li.classList.toggle("completed")
    });
    
    li.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        console.log(e.button)
        li.remove();

    });
    //modsat til appendChild
    toDos.prepend(li);
    
    todoForm.reset();
});