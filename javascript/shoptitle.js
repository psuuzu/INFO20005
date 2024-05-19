

function shoptitle(name){
    localStorage.setItem('pageTitle', name); // Store the title in localStorage
}

function changetitle(){
    let newtitle = document.getElementById('title'); 
    let storedTitle = localStorage.getItem('pageTitle'); // Retrieve the title from localStorage
    newtitle.textContent = storedTitle; // Update the title if it exists in localStorage
}