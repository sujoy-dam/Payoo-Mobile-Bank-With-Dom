console.log('conneted')
document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();
    const cashOutAmount = document.getElementById('cash-out-amount').value;
    const pin = document.getElementById('cash-out-pin').value;

    if(pin === '1234'){
        const totalBalance = document.getElementById('total-balance').innerText;
        console.log(totalBalance)
        const totalBanlanceNumber = Number(totalBalance);
        const cashOutAmountNumber = Number(cashOutAmount);
        const totalBalanceTotal = totalBanlanceNumber - cashOutAmountNumber;
        document.getElementById('total-balance').innerText = totalBalanceTotal;
    }
    else{
        alert('Girve the right information')
    }
})