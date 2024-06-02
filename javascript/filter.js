//Script for changing button colours and filtering
// define the buttons

//key: state 0 = not selected, state 1 = selected
let state=[
    {
        buttonid: 'nintendo',
        state: 0,
        originalclass: 'categories',
        clickedclass:'categoriesclick',
    },{
        buttonid: 'xbox',
        state: 0,
        originalclass: 'categories',
        clickedclass:'categoriesclick',
    },{
        buttonid: 'ps',
        state: 0,
        originalclass: 'categories',
        clickedclass:'categoriesclick',
    },{
        buttonid: 'pokemon',
        state:0,
        originalclass: 'categories',
        clickedclass:'categoriesclick',
    },{
        buttonid: 'mario',
        state:0,
        originalclass: 'categories',
        clickedclass:'categoriesclick',
    },{
        buttonid: 'tagp',
        state:0,
        class:'pop',
        originalclass: 'tagp',
        clickedclass:'tagpclick',
    },{
        buttonid:'tagf',
        state:0,
        class:'ft',
        originalclass: 'tagf',
        clickedclass:'tagfclick',
    },{
        buttonid: 'tagn',
        state:0,
        class:'nr',
        originalclass: 'tagn',
        clickedclass:'tagnclick',
    },
]

//change button style and change state
function categorychange(id,index){
    state[index].buttonid=id //save button id since mobile version and desktop have different ids
    // if button is not clicked, change state to clicked (state 1)
    if(state[index].state==0){
        let category = document.getElementById(id)
        category.className=state[index].clickedclass
        state[index].state=1
    // if button is clicked, change state to unclicked (state 0)
    }else{
        let category = document.getElementById(id)
        category.className=state[index].originalclass
        state[index].state=0
    }
}

//remove all hide classes when filter cleared
function clearfilter(){
    // remove filters
    let allproducts = document.getElementsByClassName('card');
    for (let i = 0; i < allproducts.length; i++) {
        allproducts[i].classList.remove('hide');
    }
    // remove clicked buttons styling
    for(let i=0; i< state.length; i++){
        state[i].state=0;
        let buttons = document.getElementById(state[i].buttonid)
        buttons.className=state[i].originalclass
    }
    document.querySelector('.dropdown-contentleft').style.display = 'none'; //hides filter dropdown
}

function apply() {
    //remove all products first
    let allproducts = document.getElementsByClassName('card');
    for (let n = 0; n < allproducts.length; n++) {
        allproducts[n].classList.add('hide');
    }
    //show products that have state 1
    for(let i=0; i< state.length; i++){
        let showproduct = document.getElementsByClassName(state[i].class) //get all products with their class
        if(state[i].state==1){
            for (let f = 0; f < showproduct.length; f++) {  //for every state 1 class, remove hide
                showproduct[f].classList.remove('hide');
            }
        }
    }
    document.querySelector('.dropdown-contentleft').style.display = 'none'; //hides the filter dropdown
}

//function for opening filter dropdown content
function openfilter(){
    document.querySelector('.dropdown-contentleft').style.display = 'block'; //open the filter dropdown
    document.querySelector('.dropdown-contentright').style.display = 'none'; //close the sort dropdown
}

function opensort(){
    document.querySelector('.dropdown-contentright').style.display = 'block'; //open the sort dropdown
    document.querySelector('.dropdown-contentleft').style.display = 'none'; //close the filter dropdown
}

// function to close sort when an option is selected
function closesort(){
    document.querySelector('.dropdown-contentright').style.display = 'none'; //close the filter dropdown
}