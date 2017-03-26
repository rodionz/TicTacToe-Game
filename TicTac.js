

$(function(){

$('table').hide();

var XorO = "";


$( "#dialog" ).dialog({

    dialogClass: "no-close",
      width: 350,
      height: 115,
      title: "TicTacToe.js"  
});





$('.cell').click(function()

{

$(this).text(XorO);

});



$(".btn").click(function()

{
XorO = $(this).text();
$("#dialog").dialog( "close");
$('table').show();

console.log(XorO);
});











});


