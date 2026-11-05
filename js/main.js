$(function(){
    $("#botao").click(inserirTarefa);
});

function inserirTarefa(){
    var tabela = $(".tarefas").find("tbody");
    var campoTitulo = $(".campoTitulo").val();
    var campo0bs = $(".campo0bs").val();
    var campoMedicamento = $(".campoMedicamento").val();
    var campoDataHora = $(".campoDataHora").val();
    var campoPrioridade = $(".campoPrioridade").val();

    var linha = funLinha(campoTitulo, campo0bs, campoMedicamento, campoDataHora, campoPrioridade);
    
    linha.find(".botaoDeletar").click(deleteLinha );
    tabela.append(linha);
}



function funLinha(campoTitulo, campo0bs, campoMedicamento, campoDataHora, campoPrioridade){ // função com parametro.
    var linha = $("<tr>");
    var colunaTarefa = $("<td>").text(campoTitulo);
    var colunaObs = $("<td>").text(campo0bs);
    var colunaMedicamento = $("<td>").text(campoMedicamento);
    var colunaDataHora = $("<td>").text(campoDataHora);
    var colunaPrioridade = $("<td>").text(campoPrioridade);
    var colunaDelete = $("<td>");

        // Não permite adicionar tarefa em branco
   if (campoTitulo === "" || campo0bs === "" || campoMedicamento === "" || campoDataHora === "" || campoPrioridade === "") {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    var bDeletar = $("<a>").addClass("botaoDeletar").attr("href", "#");
    var icone = $("<i>").addClass("material-icons").text("delete");
    bDeletar.append(icone);
    colunaDelete.append(bDeletar);

    // anexa mais código
    linha.append(colunaTarefa);
    linha.append(colunaObs);
    linha.append(colunaMedicamento);
    linha.append(colunaDataHora);
    linha.append(colunaPrioridade);
    linha.append(colunaDelete);

    return linha;
}   

function deleteLinha(){
    Event.preventDefault(); // tira o padrão
    $(this).parent().parent().parent().parent().remove();
}
// Excluir tarefa
$(document).on("click", ".botaoDeletar", function(event) {
    event.preventDefault();
    $(this).closest("tr").remove();
});
