//for delivery
function select(button){
    if(button==1){
        document.getElementById('innercircle1').style.display = 'block'; //show button 1
        document.getElementById('innercircle2').style.display = 'none'; //hide button 2
    }else{
        document.getElementById('innercircle2').style.display = 'block'; //show button 2
        document.getElementById('innercircle1').style.display = 'none'; //hide button 1
    }
}

//for payments
function selectpay(button){
    if(button==1){
        document.getElementById('innercircle3').style.display = 'block'; //show button 3
        document.getElementById('innercircle4').style.display = 'none'; //hide button 4
    }else{
        document.getElementById('innercircle4').style.display = 'block'; //show button 4
        document.getElementById('innercircle3').style.display = 'none'; //hide button 3
    }
}

//agree tick
function agree(){
        document.getElementById('innercircle5').style.display = 'block'; //show button 5


}