document.getElementById("btn-deposit").addEventListener('click',function(){
    const depositField = document.getElementById("deposit-filed");
    const newDepositAmountString = depositField.value;

    const newDepositAmount = parseFloat(newDepositAmountString);

    depositField.value = "";
    


    const depositTotalElement = document.getElementById("deposit-total");
    const previousDepositTotalString = depositTotalElement.innerText;

    const previousDepositTotal = parseFloat(previousDepositTotalString);

const currentDepositTotal = previousDepositTotal + newDepositAmount ;
    depositTotalElement.innerText = currentDepositTotal;

    // total balace 

    const balanceTotalElement = document.getElementById("balance-total");

    const balanceTotalString = balanceTotalElement.innerText;

    const balanceTotalAmount = parseFloat(balanceTotalString);

    const currentBlanceTotal = newDepositAmount + balanceTotalAmount;

  balanceTotalElement.innerText = currentBlanceTotal;





})