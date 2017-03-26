

$(function(){

$('table').hide();

var playerXorO = "";

var computerXorO = "";

var cells = [];

$('table tr').each(function(){
    $(this).find('td').each(function(){
        var _name = $(this).attr("id");
        cells.push({ cell: _name,  checked : false, checkedby : null, letter : null});
    })
})

console.log(cells);

$( "#dialog" ).dialog({

    dialogClass: "no-close",
      width: 350,
      height: 115,
      title: "TicTacToe.js"  
});





function checkVictory(){


}


function computerMove(){

  
}




$('.cell').click(function()

{

$(this).text(playerXorO);

});



$(".btn").click(function(){

if( $(this).text()=="X"){
  playerXorO = "X";
  computerXorO = "O"
}

else{
  playerXorO = "O";
  computerXorO = "X";
}
$("#dialog").dialog( "close");
$('table').show();

console.log(playerXorO);

});











});


