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
    if(state[index].state==0){
        let category = document.getElementById(id)
        category.className=state[index].clickedclass
        state[index].buttonid=id
        state[index].state=1
    }else{
        let category = document.getElementById(id)
        category.className=state[index].originalclass
        state[index].state=0
    }
}

//remove all hide classes when filter cleared
function clearfilter(){
    let allproducts = document.getElementsByClassName('card');
    for (let i = 0; i < allproducts.length; i++) {
        allproducts[i].classList.remove('hide');
    }
    for(let i=0; i< state.length; i++){
        state[i].state=0;
        let buttons = document.getElementById(state[i].buttonid)
        buttons.className=state[i].originalclass
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

