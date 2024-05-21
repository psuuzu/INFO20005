// function to scroll items horizontally
function scrollcat(dist){
    let category = document.getElementById("categoryscroll");
    // scroll by variable dist and make it smooth
    category.scrollBy({left: dist, behavior: "smooth"})
}

function scrollproduct(dist, id){
    let category = document.getElementById(id);
    // scroll by variable dist and make it smooth
    category.scrollBy({left: dist, behavior: "smooth"})
}

