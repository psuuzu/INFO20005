let images = ["files/promo/promo1.jpg", "files/promo/promo2.jpg", "files/promo/promo3.jpg", "files/promo/promo4.jpg", "files/promo/promo5.jpg",]

let firstimage=0
let secondimage=1
let thirdimage=2

function imagecycle(){
    firstimage = (firstimage+1)%images.length
    secondimage = (secondimage+1)%images.length
    thirdimage = (thirdimage+1)%images.length

    let imageElement1 = document.getElementById("promo1")
    let imageElement2 = document.getElementById("promo2")
    let imageElement3 = document.getElementById("promo3")

    imageElement1.src = images[firstimage]
    imageElement2.src = images[secondimage]
    imageElement3.src = images[thirdimage]
}

