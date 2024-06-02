let images = ["files/Promo/promo1.jpg", "files/Promo/promo2.jpg", "files/Promo/promo3.jpg", "files/Promo/promo4.jpg", "files/Promo/promo5.jpg",]
//first image starts with first source of the array, second starts with the second...
let firstimage=0
let secondimage=1
let thirdimage=2

function imagecycle(){
    firstimage = (firstimage+1)%images.length //increase array index
    secondimage = (secondimage+1)%images.length
    thirdimage = (thirdimage+1)%images.length

    let imageElement1 = document.getElementById("promo1") //get elements
    let imageElement2 = document.getElementById("promo2")
    let imageElement3 = document.getElementById("promo3")

    imageElement1.src = images[firstimage]   //change image source
    imageElement2.src = images[secondimage]
    imageElement3.src = images[thirdimage]
}

