

function newElement () {
    const taskInput = document.getElementById("task");
    var text = taskInput.value;
    if (text==""){
        alert("Lütfen alanı boş bırakmayın!");
        return;
    }
    else{
        var ul = document.getElementById("list");
        ul.innerHTML += `<li class='checked::before' onClick=changeChecked()> ${text} <button class='btn btn-secondary float-right' id='delete' onclick='clearItem()'>x</button></li>`;

        
    }

};

function clearItem() {
    event.currentTarget.parentElement.remove();
}
function mouseOver (){
    document.getElementById("List").className= "ul li:hover";
}

function changeChecked() {
    if (event.currentTarget.className==='checked::before'){
        event.currentTarget.className= 'checked';
    }
    else{
        event.currentTarget.className= 'checked::before';
    }
    
    
}

