
//Zadanie1

//klucz                       wartość            typ danych        
//name                         Josh              string
//weight                       175               number
//age                          30                number
//eyecolor                     brown             string
//isHappy                      true              boolean
//cars                     Chevy & Honda         tabela - string
//favoriteBook.title      The Last Kingdom       string
//favoriteBook.author     Bernard Cornwell       string
//favoriteBook.rating          8.38              number

//Dane JSON są zapisywane w parach klucz/wartość z kluczem po lewej i wartością po prawej stronie.
//Klucz i wartość są oddzielone dwukropkiem (:) w środku. 
//Różne pary klucz/wartość są oddzielone przecinkiem (,). 
//Kluczem jest ciąg ujęty w podwójne cudzysłowy, na przykład "name".
//Wartościami właściwości mogą być typu string, number, object, array, boolean i null.

//Zadanie2

const json = '{"name":"Mango","age":3,"isHappy":true}'

//przekonwertowanir ciągu na obiekt JavaScript
const user = JSON.parse(json);

//wartości wyświetlają się w porządku alfabetycznym
console.log(user)

// Zadanie3

// Przeprowadź próbę parsowania nieprawidłowego ciągu JSON.
// Zastosuj konstrukcję try...catch do obsługi ewentualnego błędu.
// Wydrukuj szczegóły błędu, włączając w to rodzaj błędu (name) oraz wiadomość (message).
// Upewnij się, że skrypt działa poprawnie nawet w przypadku wystąpienia błędu.


const test = '{"name:"Mango"}'

try {
        const check = JSON.parse(test);
    
    } catch (error) {
        // wylapywanie bledow
        console.error(error);
    }
    
    


// const pies = {
//     imie: "Azor",
//     wiek: 11,
//     czySzczeka: true,
//     szczeka() {
//         console.log("hauhau");
//     }
// }

// pies.imie = "aaa"

// console.log(pies)

// const piesJSON = JSON.stringify(pies);
// console.log(piesJSON)




// console.log(JSON.stringify(() => console.log("test")))




// const json = '{"imie":"Azor","wiek":10,"czySzczeka":true}';

// const pies = JSON.parse(json);
// console.log(pies);
// console.log(pies.imie);






// try {
//     // kod ktory powinien sie wykonac bez bledow
//     const dane = JSON.parse("Jakis, dziwny format json");

// } catch (error) {
//     // wylapywanie bledow
//     console.error(error);
// }


// console.log("Testowy log 2");



// let dane
// let zewnetrznySerwis = '{"Jakis, dziwny format json"}';

// try {
//     // kod ktory powinien sie wykonac bez bledow
//     dane = JSON.parse(zewnetrznySerwis);

// } catch (error) {
//     // wylapywanie bledow
//     console.error(error);
//     dane = '{"imie":"","wiek":,"czySzczeka":}'
// }


// console.log(dane);





