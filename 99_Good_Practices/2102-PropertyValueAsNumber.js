// Cuando queremos convertir el input
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const btnLoan = document.querySelector(".form__btn--loan");

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  const amountText = inputLoanAmount.value; //Texto
  const amountNumber = Number(inputLoanAmount.value); //Numero
  const amountNumber2 = parseInt(inputLoanAmount.value); //Numero
  const amountNumber3 = inputLoanAmount.valueAsNumber; //Numero
  const amountNumber4 = ~~inputLoanAmount.value; //Numero
  const amountNumber5 = +inputLoanAmount.value; //Numero
  console.log(amountText);
  console.log(amountNumber);
  console.log(amountNumber2);
  console.log(amountNumber3);
  console.log(amountNumber4);
  console.log(amountNumber5);
});
