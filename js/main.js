$(function(){
    $("#botao").click(inserirTarefa);
});

function inserirTarefa(){
    var tabela = $(".tarefas").find("tbody");
    var campoTitulo = $(".campoTitulo").val();
    var campo0bs = $(".campo0bs").val();

    var linha = funLinha(campoTitulo, campo0bs);
    linha.find(".botaoDeletar").click(deleteLinha );
    tabela.append(linha);
}



function funLinha(campoTitulo, campo0bs){ // função com parametro.
    var linha = $("<tr>");
    var colunaTarefa = $("<td>").text(campoTitulo);
    var colunaObs = $("<td>").text(campo0bs);
    var colunaDelete = $("<td>");

    var bDeletar = $("<a>").addClass("botaoDeletar").attr("href", "#");
    var icone = $("<i>").addClass("material-icons").text("delete");
    bDeletar.append(icone);
    colunaDelete.append(bDeletar);

    linha.append(colunaTarefa); // anexa mais código
    linha.append(colunaObs);
    linha.append(colunaDelete);

    return linha;
}   


function deleteLinha(){
    Event.preventDefault(); // tira o padrão
    $(this).parent().parent().remove();
}
