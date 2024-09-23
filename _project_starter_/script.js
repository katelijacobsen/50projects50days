//DOM - laver en variabel, der ikke ændres
// const cards = document.querySelectorAll(".card");


// //giver hver element en funktion
// cards.forEach((card) => {
//   //giver den en eventlistener, så den lytter til brugeren. loop.
//   card.addEventListener("click", () => {
//     //kalder min funktion for at fjerne klassen
//     removeActiveClasses();
//     //tilføjer klasse active til card
//     card.classList.add('open');
//   });
// });

// function removeActiveClasses(){
//     cards.forEach(card => {
//     // Den første brik er vores parameter.
//     //Derefter kommer vores property classList (tillader os at manipulere vores DOM).
//     //Hvad for en metode vil vi bruge til at manipulere vores dom med?
//     //Her for eksempel vil vi fjerne vores klasse active.
//         card.classList.remove('open');
//     })
// }

const numb = [0,1,2,3,4,5,6,7,8,9];

const monsters = [
    { 
      name: "Mike",
      scary: false,
      fat: true,
      ugly: true,
      handsome: false,
      height: 0.5,
    },
    {
      name: "Solimon",
      scary: true,
      fat: true,
      ugly: false,
      handsome: false,
      height: 2.5,
    },
    {
      name: "Randall",
      scary: true,
      fat: false,
      ugly: true,
      handsome: false,
      height: 2,

    },
    {
      name: "Boo",
      scary: false,
      fat: false,
      ugly: false,
      handsome: false,
      height: .3,
      cuteness: 10

    },

];

// monsters.forEach(monster => {
//   if (monster.scary == true) { // Hvis scary of filtrer navne
//     console.log(monster.name);
    
//   } 
// })
// Lidt om filter :3
let scaryMonsters = monsters.filter(monster => {
    if (monster.scary == true && monster.height > 0.5){
      return false;
    }
    else {
      return true;
    }
})
console.log(scaryMonsters);

