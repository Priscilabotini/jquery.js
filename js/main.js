$(function(){
    $("#botao").click(inserirTarefa);
});

function inserirTarefa(){
    var tabela = $(".tarefas").find("tbody");
    var campoTitulo = $(".campoTitulo").val();
    var campo0bs = $(".campo0bs").val();
    var campoDataHora = $(".campoDataHora").val();

    var linha = funLinha(campoTitulo, campo0bs, campoDataHora);
    var horario = $(".campoHora").val();
    linha.find(".botaoDeletar").click(deleteLinha );
    tabela.append(linha);
}

setInterval(function(){
    // verificar horário
    audio.play();
}, 1000);
    if (agora === horarioDaTarefa) {
    audio.play();
}
    

function funLinha(campoTitulo, campo0bs, campoDataHora){ // função com parametro.
    var linha = $("<tr>");
    var colunaTarefa = $("<td>").text(campoTitulo);
    var colunaObs = $("<td>").text(campo0bs);
    var colunaDataHora = $("<td>").text(campoDataHora);
    var colunaDelete = $("<td>");

    var bDeletar = $("<a>").addClass("botaoDeletar").attr("href", "#");
    var icone = $("<i>").addClass("material-icons").text("delete");
    bDeletar.append(icone);
    colunaDelete.append(bDeletar);

    linha.append(colunaTarefa); // anexa mais código
    linha.append(colunaObs);
    linha.append(colunaDataHora);
    linha.append(colunaDelete);

    return linha;
}   

function deleteLinha(){
    Event.preventDefault(); // tira o padrão
    $(this).parent().parent().parent().remove();
}
