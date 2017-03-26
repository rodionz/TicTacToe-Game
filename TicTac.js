

$(function(){

$('table').hide();




$( "#dialog" ).dialog({

    dialogClass: "no-close",
      width: 350,
      height: 110,
      title: "TicTacToe.js"
  


  
});





$('.cell').click(function(){

$(this).text('X');

});


$("#dialog").click(function(){

$(this).dialog( "close");
$('table').show();

});











});


