function addActivity(){
    // Lista de Actividades
    const activityList = document.getElementById("lista-actividades");

    // Crear Actividad
    const activityDiv = document.createElement("div");
    const contentDiv = addTask();
    const dateDiv = addDate();
    activityDiv.className = "actividad";
    activityDiv.appendChild(contentDiv);
    activityDiv.appendChild(dateDiv);

    // Posicionar actividad
    activityList.appendChild(activityDiv);

    // Limpiar Input
    document.getElementById("act-input").value = "";
}

function addTask(){
    // Extraer el input
    const activityValue = document.getElementById("act-input").value;

    // Crear elementos html
    const newDiv = document.createElement("div");
    const newSpan = document.createElement("span");
    const newCheckbox = document.createElement("input");

    // Asignar clases y valores
    newDiv.className = "form-check";
    newSpan.textContent = activityValue;
    newCheckbox.type = "checkbox";
    newCheckbox.className = "form-check-input";

    // Evento para eliminar al clickear checkbox
    newCheckbox.onclick = clickCheckbox;

    // Guardar en div
    newDiv.appendChild(newSpan);
    newDiv.appendChild(newCheckbox);

    return newDiv;
}

function addDate(){
    // Agregar fecha y formato
    const dateDiv = document.createElement("div");
    const now = new Date();
    const newP = document.createElement("p");

    newP.textContent = "Agregada el " + now.toLocaleString(now);
    newP.className = "fw-lighter";
    dateDiv.appendChild(newP);

    return dateDiv;
}

function clickCheckbox(event){
    const checkbox = event.target; // Captura el elemento clickeado
    const activityDiv = checkbox.closest('.actividad'); // Obtiene el div Actividad más cercano
    const activityList = document.getElementById("lista-actividades"); 
    if (checkbox.checked){
        activityList.removeChild(activityDiv); // Borra de la lista
    }
}