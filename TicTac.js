

$(function(){

$('table').hide();


$( "#dialog" ).dialog({

    dialogClass: "no-close",
      width: 250,
      height: 75
  


  
});





$('.cell').click(function(){

$(this).text('X');

});


$("#dialog").click(function(){

$(this).dialog( "close");
$('table').show();

});











});


