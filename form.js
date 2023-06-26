let userName = document.querySelector('.username')
let password = document.querySelector('.password')
let modal = document.querySelector('.correctbox')
let btn = document.querySelector('.btn')
let usernameValidation = document.querySelector('.usernameValidation')
let passwordValidation = document.querySelector('.passwordValidation')
btn.addEventListener('click', function(){
    let usernameValue = userName.value
    let passwordValue = password.value
    
    if(usernameValue < 12 || passwordValue < 8){
        modal.style.background = 'red'
        modal.innerHTML = "اطلاعات را به درستی وارد نمایید"
        modal.style.display = 'inline'
    }else{
        modal.style.background = 'green'
        modal.innerHTML = 'اطلاعات به درستی وارد شد'
        modal.style.display = 'inline'
    }

    setTimeout(function(){
        modal.style.display = 'none'
    }, 3000)
})

userName.addEventListener('blur', function(){
    let usernameValue = userName.value
    if(usernameValue.length < 12){
        usernameValidation.style.color = 'red';
        usernameValidation.innerHTML = 'must contain 12 character'
        usernameValidation.style.display = 'block';
    }else {
        usernameValidation.style.color = 'green';
        usernameValidation.innerHTML = 'it is ok:)'
        usernameValidation.style.display = 'block';
        setTimeout(function(){
            passwordValidation.style.display = 'none';
        },3000)
    }
})

password.addEventListener('blur', function(){
    let passwordValue = password.value
    if(passwordValue.length < 12){
        passwordValidation.style.color = 'red';
        passwordValidation.innerHTML = 'must contain 12 character'
        passwordValidation.style.display = 'block';
    }else {
        passwordValidation.style.color = 'green';
        passwordValidation.innerHTML = 'it is ok:)'
        passwordValidation.style.display = 'block';
        setTimeout(function(){
            passwordValidation.style.display = 'none';
        },3000)
    }

    
})