const cashOutDiv = document.getElementById('cash-out-div')
const addMoneyDiv = document.getElementById('add-money-div');
document.getElementById('cash-out-toggole-btn').addEventListener('click', function(){
    console.log('connected')

    cashOutDiv.classList.remove('hidden')
    addMoneyDiv.classList.add('hidden');
})
document.getElementById('add-money-toggole-btn').addEventListener('click', function(){
    console.log('connected')
    // const cashOutDiv = document.getElementById('cash-out-div')
    // const addMoneyDiv = document.getElementById('add-money-div');

    cashOutDiv.classList.add('hidden');
    addMoneyDiv.classList.remove('hidden')
})