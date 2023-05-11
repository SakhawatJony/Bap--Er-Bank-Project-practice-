document.getElementById("btn-withdraw").addEventListener("click",function(){

    const withdrawFiled = document.getElementById("withdraw-field");
    const newWithdrawTotalString = withdrawFiled.value;
    const newWithdrawTotal = parseFloat(newWithdrawTotalString) 


    const withdrawTotalElement = document.getElementById("withdraw-total");
    const withdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(withdrawTotalString);

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawTotal;


    withdrawTotalElement.innerText= currentWithdrawTotal;

    const totalBalanceElement = document.getElementById("balance-total");

    const totalBalanceString = totalBalanceElement.innerText;

    const totalBalanceAmount =parseFloat(totalBalanceString);


    const currentTotalBalance = newWithdrawTotal - totalBalanceAmount;

    totalBalanceElement.innerText = currentTotalBalance;






    withdrawFiled.value= "";













})