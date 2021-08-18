// handle deposit button event

document.getElementById('deposit-btn').addEventListener('click',function(){
      /* // get the amount deposited
      const depositInput = document.getElementById('deposit-field');
      const depositAmount = depositInput.value;

      const depositTotal = document.getElementById('deposit-balence');
      depositTotal.innerText = depositAmount;

      // clear the input field
      depositInput.value = ''; */

      // get the amount deposited
      const depositInput = document.getElementById('deposit-field');
      const newDepositAmount = depositInput.value;

      // set deposit amount in balance
      const depositBalance = document.getElementById('deposit-balence'); 
      const previusDepositAmount = depositBalance.innerText;
      const totalDepositBalance = parseFloat(previusDepositAmount) + parseFloat(newDepositAmount);
      depositBalance.innerText = totalDepositBalance;

      // update Account Balance Total
      const balanceTotal = document.getElementById('balance-total');
      const balanceTotalText = balanceTotal.innerText;
      const previousBalanceTotal = parseFloat(balanceTotalText);
      const newBalanceTotal = previousBalanceTotal + parseFloat(newDepositAmount);
      balanceTotal.innerText = newBalanceTotal;

      // clear 
      depositInput.value = '';
})

// handle withdraw event handler

document.getElementById('withdraw-btn').addEventListener('click', function(){

      //withdraw input field handler
      const withdrawInput = document.getElementById('withdraw-field');
      const newWithdrawAmountText = withdrawInput.value;
      const newWithdrawAmount = parseFloat(newWithdrawAmountText);

      // withdraw balance hadler
      const withdrawTotal = document.getElementById('withdraw-balance');
      const previousWithdrawText = withdrawTotal.innerText;
      const previousWithdrawTotal = parseFloat(previousWithdrawText);

      const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
      withdrawTotal.innerText = newWithdrawTotal;

      // Clear 
      withdrawInput.value = '';



      // update balance

      const balanceTotal = document.getElementById('balance-total');
      const balanceTotalText = balanceTotal.innerText;
      const previouseBalanceTotal = parseFloat(balanceTotalText);
      const newBlanaceTotal = previouseBalanceTotal - newWithdrawAmount;

      balanceTotal.innerText = newBlanaceTotal;



})