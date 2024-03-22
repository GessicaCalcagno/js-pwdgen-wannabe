//Test
// alert("Ciao")


// BLOCCO RACCOLTA DEI DATI E DICHIARAZIONE DI INFO CONOSCIUTE
//Chiediamo all'utente come si chiama

let userName = prompt("Ciao! Qual è il tuo nome?"); //String
console.log(userName, typeof userName)

let surName = prompt("Ed il tuo cognome?"); //String
console.log(surName, typeof surName)

let preferColor = prompt("Qual è il tuo colore preferito?"); //String
console.log(preferColor, typeof preferColor)

// PARTE LOGICA
// - sommo Nome Cognome e colore
const password = userName + surName + preferColor; // String
console.log(password, typeof password);

// STAMPA DEL OUTPUT

// Preparo il messaggio
const resultMessage = `Ho calcolato la tua password ed è:ge ${password}`; // String
console.log(resultMessage);

// Stampo il risultato della somma in pagina
document.getElementById("password").innerHTML = resultMessage



