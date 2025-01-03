let inp = document.querySelector("input");
let btn = document.querySelector(".add");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
    let task = inp.value;
    if(task == ""){
        return;
    }
    else{
        let newTask = document.createElement("li");
        newTask.innerText = task;

        let delbtn = document.createElement("button");
        delbtn.innerHTML = "Done";
        delbtn.classList.add("del");

        newTask.appendChild(delbtn);
        ul.append(newTask);
        
        inp.value = "";
    }
})

inp.addEventListener("keydown", function (e) {
    let task = inp.value;
    if(e.key === "Enter"){
        if(task === ""){
            return;
        }
        else{
            let newTask = document.createElement("li");
            newTask.innerText = task;
    
            let delbtn = document.createElement("button");
            delbtn.innerHTML = "Done";
            delbtn.classList.add("del");
    
            newTask.appendChild(delbtn);
            ul.append(newTask);
            
            inp.value = "";
        }
    }
    
});


ul.addEventListener("click", function(e){
    if(e.target.nodeName == "BUTTON"){
        let listItem = e.target.parentElement;
        listItem.classList.toggle("Completed");
        // listItem.remove();
    }
});

