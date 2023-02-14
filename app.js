let currentDepositeAmount = 0;
let currentWithdrawAmount = 0;
let currentBalance = parseFloat(
  document.getElementById("balance-span").innerText
);

let updateDeposite = document.getElementById("deposite-span");
let getDepositeAmount = document.getElementById("deposite-input");
let updateBalance = document.getElementById("balance-span");

let addDepositeAmount = document
  .getElementById("deposite-btn")
  .addEventListener("click", function () {
    currentDepositeAmount =
      currentDepositeAmount + parseFloat(getDepositeAmount.value);
    updateDeposite.innerText = currentDepositeAmount;
    currentBalance = currentBalance + parseFloat(getDepositeAmount.value);
    updateBalance.innerText = currentBalance;
  });

let updateWithdraw = document.getElementById("withdraw-span");
let getWithdrawAmount = document.getElementById("withdraw-input");
let addWithdrawAmount = document
  .getElementById("withdraw-btn")
  .addEventListener("click", function () {
    currentDepositeAmount =
      currentDepositeAmount + parseFloat(getWithdrawAmount.value);
    updateWithdraw.innerText = currentDepositeAmount;
    currentBalance = currentBalance - parseFloat(getWithdrawAmount.value);
    updateBalance.innerText = currentBalance;
  });
