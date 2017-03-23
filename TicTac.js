

$(function(){

$('table').hide();


$( "#dialog" ).dialog({

    dialogClass: "no-close"
});





$('.cell').click(function(){

$(this).text('X');

});


$("#dialog").click(function(){

$(this).dialog( "close");
$('table').show();

});











});


