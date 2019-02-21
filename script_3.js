let v = prompt("Combien d'etage boss?")
function pyramid(n) {
 
  for(let i=1; i<= n; i++){
    let str = ' '.repeat(4*(n-i));
    let str2 = '#'. repeat(i*2 -1)
 
    console.log(str + str2);
  }
}
pyramid(v)