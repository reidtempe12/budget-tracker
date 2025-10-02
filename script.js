const balanceEl = document.getElementById("balance");
const transactionsEl = document.getElementById("transactions");
const descEl = document.getElementById("desc");
const amountEl = document.getElementById("amount");
const addBtn = document.getElementById("add");

// Initialize balance from the DOM (if present) or default to 0
let balance = Number(balanceEl.textContent) || 0;

addBtn.addEventListener("click", () => {
  const desc = descEl.value.trim();
  const amount = Number(amountEl.value);

  if (desc === "" || amount === 0) {
    alert("Please enter a valid description and amount!");
    return;
  }

  balance += amount;
  balanceEl.textContent = balance.toFixed(2);

  const li = document.createElement("li");
  li.innerHTML = `${desc} <span>$${amount.toFixed(2)}</span>`;
  transactionsEl.appendChild(li);

  // Reset inputs
  descEl.value = "";
  amountEl.value = "";
});
