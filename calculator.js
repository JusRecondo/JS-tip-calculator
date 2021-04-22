const calculator = document.querySelector('#calculator');
const billTotalInput = document.querySelector('#billTotal');
const tipInput = document.querySelector('#tipInput');
const splitInput = document.querySelector('#splitInput');

calculator.addEventListener('input', function() {
  let bill = parseFloat(billTotalInput.value);
  let tipPercent = tipInput.value;
  let split = splitInput.value;
  let billEach = bill / split;
  let tipValue = bill * (tipPercent/100);
  let newBillEach = (bill + tipValue) / split;
  let tipAmountEach = tipValue / split;

  document.querySelector('#billEach').innerHTML = billEach.toFixed(2);
  document.querySelector('#tipOutput').innerHTML = tipPercent + "%";
  document.querySelector('#splitOutput').innerHTML = split;
  document.querySelector('#newBill').innerHTML = " $" + newBillEach.toFixed(2);
  document.querySelector('#tipAmount').innerHTML = " $" + tipAmountEach.toFixed(2);

} );
