//function to open the menu when clicked and closes menu when clicked agian
let showmenu = false

function openmenu() {
    let menu = document.getElementById("menu");
    if (showmenu==false) {
        menu.style.animationName = "slidein"
        showmenu=true
    } else {
        menu.style.animationName = "slideout"
        showmenu=false
    }
}
