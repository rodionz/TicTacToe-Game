

$(function(){

$('table').hide();


$( "#dialog" ).dialog();





$('.cell').click(function(){

$(this).text('X');

});


$("#dialog").click(function(){

$(this).close();
$('table').show();

});











});


