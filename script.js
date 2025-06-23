let totalIncome = 0;
let totalExpenses = 0;

function addTransaction() {
  const desc = document.getElementById('description').value;
  const amt = parseFloat(document.getElementById('amount').value);
  const type = document.getElementById('type').value;

  if (!desc || isNaN(amt) || amt <= 0) {
    alert("Please enter valid description and amount.");
    return;
  }

  const listItem = document.createElement('li');
  listItem.textContent = `${desc}: ₹${amt}`;
  listItem.classList.add(type === 'income' ? 'income-item' : 'expense-item');

  document.getElementById('transaction-list').appendChild(listItem);

  if (type === 'income') {
    totalIncome += amt;
  } else {
    totalExpenses += amt;
  }

  updateSummary();
  clearInputs();
}

function updateSummary() {
  document.getElementById('total-income').textContent = totalIncome.toFixed(2);
  document.getElementById('total-expenses').textContent = totalExpenses.toFixed(2);
  document.getElementById('balance').textContent = (totalIncome - totalExpenses).toFixed(2);
}

function clearInputs() {
  document.getElementById('description').value = '';
  document.getElementById('amount').value = '';
  document.getElementById('type').value = 'income';
}