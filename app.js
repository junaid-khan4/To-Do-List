document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("addbtn");
    const inputField = document.getElementById("writing");
    const boxesContainer = document.querySelectorAll(".box");  

    addButton.addEventListener("click", function () {
        const taskText = inputField.value.trim();

        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        let boxUpdated = false;

        
        boxesContainer.forEach(function (box) {
            const taskSpan = box.querySelector(".task");
            
            if (taskSpan.textContent === "" && !boxUpdated) {  
                taskSpan.textContent = taskText;  
                boxUpdated = true;
            }
        });

        if (!boxUpdated) {
            alert("No empty boxes available!"); 
        }

        inputField.value = ""; 
    });

    boxesContainer.forEach(function (box) {
        const deleteButton = box.querySelector(".deletebtn");
        deleteButton.addEventListener("click", function () {
            const taskSpan = box.querySelector(".task");
            taskSpan.textContent = ""; 
        });
    });
});
