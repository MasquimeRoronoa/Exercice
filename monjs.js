var a, b, c;

a = 9;
b = 12;
c = 2;

function calcul () {

  if (a == 0) {console.log ("valeur de a =0, veuillez recommencer")}

  D = (b*b) - (4*a*c);

  if (D == 0) {console.log ("La solutoon est :", (-b/(2*a)))}

  if (D > 0 ) {console.log ("Les 2 solutions sont x-",((-b - Math.sqrt(D))/(2*a)), "et x-", ((-b + Math.sqrt(D))/(2*a)))}

  if (D < 0) {console.log ("Il n'y a pas de solution")}
}
