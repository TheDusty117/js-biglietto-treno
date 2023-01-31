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


//2.1 minore 18 anni

let boyDiscount = (finalPrice/100*20) 

let grandPasDiscount = (finalPrice/100*40)

//2.2 maggiore 65 anni



// finalPrice = finalPrice - 10;

let discountedPrice = finalPrice - 10

console.log(discountedPrice)

//3 applicare sconto 20% se sotto 18 anni

  //3.1 definire che se <18 anni = -20%



//4 applicare sconto 40% se sopra i 65 anni

  //4.1 definire che se =>65 = -40%



//5 prezzo finale scontato