let submit = document.getElementById('login-btn');

submit.addEventListener('click', function(){
    let myForm = document.getElementById('my-form');
    myForm.submit();
    console.log('Submitted Successfully! ');
    
})