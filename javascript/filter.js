//Script for changing button colours and filtering
// define the buttons
let state=[
    {
        button: 'nintendo',
        state: 0,
    },{
        button: 'xbox',
        state: 0,
    },{
        button: 'ps',
        state: 0,
    },{
        button: 'pokemon',
        state:0,
    },{
        button: 'mario',
        state:0,
    },{
        button: 'tagp',
        state:0,
        class:'pop',
    },{
        button: 'tagf',
        state:0,
        class:'ft',
    },{
        button: 'tagn',
        state:0,
        class:'nr',
    },
]

function categorychange(id,index,original,clicked){
    if(state[index].state==0){
        let category = document.getElementById(id)
        category.className=clicked
        state[index].state=1
    }else{
        let category = document.getElementById(id)
        category.className=original
        state[index].state=0
    }
}

//remove all hide classes when filter cleared
function clearfilter(){
    let allproducts = document.getElementsByClassName('card');
    for (let i = 0; i < allproducts.length; i++) {
        allproducts[i].classList.remove('hide');
    }
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
}

