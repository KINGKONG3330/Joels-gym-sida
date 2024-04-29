//*här har jag gjort en knapp till min sida som gör så att man kan byta stil//
document.getElementById("font").addEventListener('click', yes);

let color1=0;

function yes()
{
  if(color1==0) {
    document.getElementById("joel").style.fontFamily="Cursive";
    color1 = 1;
  }
  else if(color1==1){
    document.getElementById("joel").style.fontFamily="Verdana";
    color1 = 0;
  }
}