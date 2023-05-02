function notifySelectCake(){
    var getSelectCake = document.getElementById("order-list-cake").value ;
    console.log(getSelectCake);
    var checkSelectCake = document.getElementById("checkSelectCake");
    if (getSelectCake =="") {
        checkSelectCake.innerHTML = "Please select our product.";
        checkSelectCake.style.color = 'red';
    } else {
        checkSelectCake.innerHTML = "";
    }
}
function takevalue(){
    const regexName2 =/^[a-zA-Z ]{0,100}$/
    var getName = document.getElementById("youname").value
    var checkName = document.getElementById("checkName");
    if (getName !=""){
        checkName.innerHTML = "";
        if (getName.match(regexName2)){
            checkName.innerHTML = "";
        } else {
            checkName.innerHTML = " Your name should not exceed 100 characters."
            checkName.style.color = 'red';
        }
    } else {
        checkName.innerHTML = " Please fill out your name."
        checkName.style.color = '#EE0000';
    }  
}
function notifyMessage(){
    const regexMessage = /^.{30,}$/;
    var getMessage = document.getElementById("message").value ;
    var checkMessage = document.getElementById("checkMessage");
        if(getMessage.match(regexMessage)){
            checkMessage.innerHTML = "Message should not exceed 30 characters.";
            checkMessage.style.color = 'red';
        }else {
            checkMessage.innerHTML = "";
        }

 }
 function deliverDate(){
        var checkDate = document.getElementById("checkDate");
        var getDate = document.getElementById("date").value;
        var oderDate = new Date(getDate).getTime();
        var nowDate = new Date().getTime();
        if (getDate !=""){
            if( oderDate - nowDate > 0 ){
                checkDate.innerHTML = "";
            } else {
                checkDate.innerHTML = "Can't enter past date.Please enter another date";
                checkDate.style.color = "red"
            }
        } else{
            checkDate.innerHTML = "Please fill out the deliver date";
            checkDate.style.color = 'red';
        }
 }
 function deliverTo(){
    const regexDateto = /^.{500,}$/;
    var getDateto = document.getElementById("dateto").value ;
    var checkDateto = document.getElementById("checkDateto");
    if (getDateto != ""){
        if(getDateto.match(regexDateto)){
            checkDateto.innerHTML = "Address should not exceed 500 characters.";
        }else {
            checkDateto.innerHTML = "";
        }
    }else {
        checkDateto.innerHTML ="Please fill out the address.";
        checkDateto.style.color = 'red';
    }
 }
 function submitOrder() {
    notifySelectCake();
    takevalue();
    notifyMessage();
    deliverDate();
    deliverTo();
 }
 
