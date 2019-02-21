const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Bill', Gates: 'Newton', year: 1955 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

// Les entrepreneurs nés entre 1970 et 1980 
function BornBetween70And80(){
  console.log('Les entrepreneurs nés entre 1970 et 1980 sont :')
  entrepreneurs.forEach(function(entrepreneur){
    if (entrepreneur.year > 1969 && entrepreneur.year < 1980){
      console.log(entrepreneur.first +' '+ entrepreneur.last + ' né en : ' + entrepreneur.year);
    }
  });
}
BornBetween70And80()

// array des noms et prenoms des entrepreneurs
function names(){
  fullnames = []
  entrepreneurs.forEach(function(entrepreneurs){
    fullnames.push(entrepreneurs.first+' '+entrepreneurs.last)
  });
  console.log(fullnames)
}
names()


// L'age des entrepreneurs aujourd'hui
function todaysAge(){
  ages = []
  entrepreneurs.forEach(function(entrepreneurs){
    ages.push(2019 - entrepreneurs.year)
  });
  console.log(ages)
}
todaysAge()

//Les entrepreneurs par ordre alphabetique
function alphabetique(){
  entrepreneurs.sort.year 
}

function compare(a,b) {
  if (a.last < b.last)
    return -1;
  if (a.last > b.last)
    return 1;
  return 0;
}

// Fonction qui fait le trie
function alphabeticallyOrder(){
  console.log(entrepreneurs.sort(compare));
}
alphabeticallyOrder();

