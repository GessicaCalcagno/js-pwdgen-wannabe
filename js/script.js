//Test
// alert("Ciao")


// BLOCCO RACCOLTA DEI DATI E DICHIARAZIONE DI INFO CONOSCIUTE
//Chiediamo all'utente come si chiama

const userName = prompt("Ciao! Qual è il tuo nome?"); //String | null
console.log(userName, typeof userName)

//Chiediamo all'utente il cognome
const surName = prompt("Ed il tuo cognome?"); //String | null
console.log(surName, typeof surName)

//Chiediamo all'utente il suo colore preferito
const preferColor = prompt("Qual è il tuo colore preferito?"); //String | null
console.log(preferColor, typeof preferColor)

// Crea un numero random da 0 a 99
// Con Math.floor= pavimento, cioè se è 9.9 scriverà 9 e non 10. Prende il valore più piccolo ed hai le stesse probabilità per ogni numero e con la stessa probabilità di generare lo zero. (Con round ad es. hai meno probabilità di trovare lo zero).
let randomNumb = Math.floor(Math.random() * 100); //Number
console.log(randomNumb, typeof randomNumb)

// PARTE LOGICA
// - Sommo Nome, Cognome, colore e numero random da 0 a 99
let password = userName + surName + preferColor + randomNumb; // String
console.log(password, typeof password);

// STAMPA DEL OUTPUT
// Preparo il messaggio
const resultMessage = `Ho calcolato la tua password ed è: ${password}`; // String
//Se faccio annulla e annula e annulla il risutato finale sarà un numero perchè le stringhe senza nulla/valore valgono 0
console.log(resultMessage);

// Stampo il risultato della somma in pagina
document.getElementById("password").innerHTML = resultMessage



