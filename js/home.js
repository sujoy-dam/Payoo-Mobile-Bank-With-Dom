console.log('connected')
document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
    const amount = document.getElementById('add-money-amount').value;
    const pin = document.getElementById('add-money-pin').value;

    if(pin === '1234'){
        const totalBalance = document.getElementById('total-balance').innerText;
        console.log(totalBalance)
        const totalBanlanceNumber = Number(totalBalance);
        const amountNumber = Number(amount);
        const totalBalanceTotal = totalBanlanceNumber + amountNumber;
        document.getElementById('total-balance').innerText = totalBalanceTotal;
    }
    else{
        alert('Girve the right information')
    }
})