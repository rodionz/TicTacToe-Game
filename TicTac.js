

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



$( "#dialog" ).dialog({

    dialogClass: "no-close",
      width: 350,
      height: 115,
      title: "TicTacToe.js"  
});





function checkVictory(){

if(cells[0].checked && cells[1].checked && cells[2].checked){

  return true;
}

else if(cells[3].checked && cells[4].checked && cells[5].checked){
  return true;
}

else if(cells[6].checked && cells[7].checked && cells[8].checked){
  return true;
}

else if(cells[0].checked && cells[3].checked && cells[6].checked)
{
  return true;
}


}












function computerMove(){

  
}




$('.cell').click(function(){

console.log(cells);

let currentID = $(this).attr("id");

let currentCell = cells.find(function(x){return x.cell == currentID});

currentCell.checked = true;

currentCell.checkedby = "player";

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


