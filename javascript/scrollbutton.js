// function to scroll items horizontally
function scrollcat(dist){
    let category = document.getElementById("categoryscroll");
    // scroll by variable dist and make it smooth
    category.scrollBy({left: dist, behavior: "smooth"})
}

function scrollproduct(dist){
    let category = document.getElementById("productscroll");
    // scroll by variable dist and make it smooth
    category.scrollBy({left: dist, behavior: "smooth"})
}

