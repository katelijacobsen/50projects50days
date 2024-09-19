//DOM - laver en variabel, der ikke ændres
const cards = document.querySelectorAll(".card");


//giver hver element en funktion
cards.forEach((card) => {
  //giver den en eventlistener, så den lytter til brugeren. loop.
  card.addEventListener("click", () => {
    //kalder min funktion for at fjerne klassen
    removeActiveClasses();
    //tilføjer klasse active til card
    card.classList.add('open');
  });
});

function removeActiveClasses(){
    cards.forEach(card => {
    // Den første brik er vores parameter.
    //Derefter kommer vores property classList (tillader os at manipulere vores DOM).
    //Hvad for en metode vil vi bruge til at manipulere vores dom med?
    //Her for eksempel vil vi fjerne vores klasse active.
        card.classList.remove('open');
    })
}