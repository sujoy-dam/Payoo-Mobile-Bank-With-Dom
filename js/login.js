console.log('connected')
document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    const mobileNumber = document.getElementById("mobile-number").value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(mobileNumber, pinNumber)
    if(mobileNumber === '5' && pinNumber === '1234'){
        window.location.href = './home.html'
    }
    else{
        alert('Give right login information')
    }
})