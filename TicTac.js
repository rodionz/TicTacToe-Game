

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





function VictoryCheck(){

if((cells[0].checked && cells[1].checked && cells[2].checked) && 
cells[0].checkedby == cells[1].checkedby == cells[2].checkedby){

   
  
}

else if((cells[3].checked && cells[4].checked && cells[5].checked) && 
cells[3].checkedby == cells[4].checkedby == cells[5].checkedby){
  return true;
}

else if((cells[6].checked && cells[7].checked && cells[8].checked) && 
cells[6].checkedby == cells[7].checkedby == cells[8].checkedby){
  return true;
}

else if((cells[0].checked && cells[3].checked && cells[6].checked) &&
 cells[0].checkedby == cells[3].checkedby == cells[6].checkedby)
{
  return true;
}


else if((cells[1].checked && cells[4].checked && cells[7].checked) && 
cells[1].checkedby == cells[4].checkedby == cells[7].checkedby){

}

else if((cells[2].checked && cells[5].checked && cells[8].checked) && 
 cells[2].checkedby == cells[5].checkedby == cells[8].checkedby){


}


else if((cells[0].checked && cells[4].checked && cells[8].checked) && 
cells[0].checkedby == cells[4].checkedby == cells[8].checkedby){


}





else if ((cells[2].checked && cells[4].checked && cells[6].checked) && 
cells[2].checkedby == cells[4].checkedby == cells[6].checkedby){

}

else{
  return false;
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


