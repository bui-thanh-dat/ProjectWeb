function takevalue(){
    const regexName =/^[a-zA-Z ]{0,100}$/
    var getName = document.getElementById("name").value
    var checkName = document.getElementById("checkName");
    if (getName !=""){
        checkName.innerHTML = "";
        if (getName.match(regexName)){
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

function takevalue2(){
    const regexMail2 = /^[\w-\.]{0,50}@([\w-]+\.)+[\w-]{2,4}$/
    var getEmail = document.getElementById("email").value 
    var checkEmail = document.getElementById("checkEmail");
    if (getEmail != ""){
        if (getEmail.match(regexMail2)){
            checkEmail.innerHTML = "";
        } else {
            checkEmail.innerHTML = "Your email should not exceed 100 characters";
            checkEmail.style.color = 'red';
        }
    } else {
        checkEmail.innerHTML = "Please fill out your email.";
        checkEmail.style.color = 'red';
    } 
    
}
function takevalue3(){
    const regexSubject = /^.{0,50}$/ ;
    const regexSubject2 = /^.{250,}$/ ;
    var getSubject = document.getElementById("subject").value 
    var checkSubject = document.getElementById("checkSubject");
    if (getSubject != "") {
        if(getSubject.match(regexSubject)){
            checkSubject.innerHTML = "Subject should not shorter than 50 characters."
        } else {
            checkSubject.innerHTML="";
        }
        if(getSubject.match(regexSubject2)){
            checkSubject.innerHTML = "Subject should not exceed 250 characters."
        } else {
            checkSubject.innerHTML="";
        }
    }else {
        checkSubject.innerHTML = "Please fill out the subject";
        checkSubject.style.color = 'red';
    }
}
     function takevalue4(){
        const regexMessage = /^.{500,}$/;
        var getMessage = document.getElementById("message").value ;
        var checkMessage = document.getElementById("checkMessage");
        if (getMessage != ""){
            if(getMessage.match(regexMessage)){
                checkMessage.innerHTML = "Message should not exceed 500 characters";
            }else {
                checkMessage.innerHTML = "";
            }
        }else {
            checkMessage.innerHTML ="Please fill out the message.";
            checkMessage.style.color = 'red';
        }
     }

function submitValidate(){
    takevalue();
    takevalue2();
    takevalue3();
    takevalue4();
}