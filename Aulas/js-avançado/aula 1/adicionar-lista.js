

var cores = ['cor-1', 'cor-2'];

var iCor = 0;


function adicionar() {
    
    var item = document.getElementById("input").value;

    var colocar = document.createElement("li");
    colocar.innerText = item;

    
    colocar.classList.add(cores[iCor]);

    iCor = (iCor + 1) % cores.length;


    document.getElementById("ol").appendChild(colocar);

     
    document.getElementById("input").value = '';
    
}





//---------------------------------------------------------------------------------------------------//

//Professora fez assim:




function adicionar1() {
    
    var item = document.getElementById("input1").value;

    var colocar = document.createElement("li");
    colocar.textContent = item;

    
    if (document.getElementById("ol1").children.length % 2 === 0) {

        colocar.style.backgroundColor = "#6333ff";

    } else {

        colocar.style.backgroundColor = "#33FF57";

    }

    document.getElementById("ol1").appendChild(colocar);

     
    document.getElementById("input1").value = '';
    
}

