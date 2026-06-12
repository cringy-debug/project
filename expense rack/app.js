const form = document.getElementById("transaction-form");

const nameInput = document.getElementById("name-input-box");
const amountInput = document.getElementById("amount-input-box");
const typeInput = document.getElementById("type");

const balanceEl = document.getElementById("balance");
const incomeEl = document.getElementById("income");
const expenseEl = document.getElementById("expense");

const list = document.getElementById("transaction-list");
const countEl = document.getElementById("transaction-count");

let balance = 0;
let income = 0;
let expense = 0;
let transactionCount = 0;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  addTransaction();
});

function addTransaction() {
  const name = nameInput.value;
  const amount = Number(amountInput.value);
  const type = typeInput.value;

  if (name === "" || amount === "") {
    alert("please fill in the fields");
    return;
  }
  const li = document.createElement("li");

  if (type === "income") {
    income += amount;
    balance += amount;

    li.textContent = `+ KSH ${amount} - ${name}`;
    li.style.color = "#16a34a";
  } else {
    expense += amount;
    balance -= amount;

    li.textContent = `- KSH${amount} - ${name}`;
    li.style.color = "#dc2626";
  }
  list.appendChild(li);

  balanceEl.textContent = `KSH ${balance.toLocaleString()}`;
  incomeEl.textContent = `KSH ${income.toLocaleString()}`;
  expenseEl.textContent = `KSH ${expense.toLocaleString()}`;

  transactionCount++;
  countEl.textContent = `Transactions: ${transactionCount}`;

  nameInput.value = "";
  amountInput.value = "";
}
