function chamada() {
    
    var alunos = [];
    var nome = " ";
    
    while (nome !== "") {
        
        nome = prompt("Nome do aluno:");
        
        if( nome !== ""){
            
            alunos.push(nome);

        }

    }

    console.log(alunos);

}

chamada();

