console.log("working!")


//1 chiedere all'utente numero km da percorrere

let askDistance = prompt ("distanza")

console.log(askDistance)





//1.1 definire quanto costa 1 km 


let pricePerKm = 0.21;

let finalPrice = askDistance * pricePerKm;


console.log(finalPrice)

//2 chiedere all'utente eta'

let askAge = prompt ("quanti anni hai?")

console.log(askAge)





//2.1 minore 18 anni----------------------------

//definisco che boysDiscount equivale a (finalPrice/100*20)
//ovvero l'importo da sottrarre a sua volta sempre a finalPrice

let boysDiscount = (finalPrice/100*20) 

// prezzo scontato under 18

// definisco che discountedBoys equivale a finalPrice - boysDiscount
// e quindi ad un 20%

let discountedBoys = (finalPrice - boysDiscount)

console.log(discountedBoys)




//2.2 maggiore 65 anni-------------------------

//definisco che grandPasDiscount equivale a (finalPrice/100*40)
//ovvero l'importo da sottrarre a sua volta sempre a finalPrice

let grandPasDiscount = (finalPrice/100*40)

// prezzo scontato over 65

// definisco che discountedBoys equivale a finalPrice - grandPasDiscount
// e quindi ad un 40%

let discountedGrandPas = (finalPrice - grandPasDiscount)

console.log(discountedGrandPas)



// se scelgo minore di 18 anni allora


if (askAge < 18) {
  finalPrice = discountedBoys
}

console.log(finalPrice)


// se scelgo maggiore di 65 anni allora



if (askAge > 65) {
  finalPrice = discountedGrandPas
}

console.log(finalPrice)

















// finalPrice = finalPrice - 10;

//  importante  ///////////

// let discountedPrice = finalPrice - 10

// console.log(discountedPrice)




//3 applicare sconto 20% se sotto 18 anni

  //3.1 definire che se <18 anni = -20%



//4 applicare sconto 40% se sopra i 65 anni

  //4.1 definire che se =>65 = -40%



//5 prezzo finale scontato