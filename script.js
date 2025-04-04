// Фейковые данные (можно заменить на реальные API)
const userBalances = {
  btc: 0.003,
  eth: 0.06,
  usdt: 120.5,
  tcn: 5000
};

const exchangeRates = {
  usd: {
    btc: 65000,
    eth: 3300,
    usdt: 1,
    tcn: 0.05
  },
  rub: {
    btc: 6300000,
    eth: 320000,
    usdt: 95,
    tcn: 4.5
  }
};

let currentCurrency = "usd";

// ===== Темная тема =====
function toggleTheme() {
  document.body.classList.toggle("dark");
}

// ===== Настройки =====
function toggleSettings() {
  const panel = document.getElementById("settingsPanel");
  panel.style.display = panel.style.display === "flex" ? "none" : "flex";
}

// ===== Валюта (usd/rub) =====
function changeCurrency() {
  const selector = document.getElementById("currencySelector");
  currentCurrency = selector.value;
  updateBalances();
}

// ===== Обновление баланса =====
function updateBalances() {
  const rates = exchangeRates[currentCurrency];
  const btc = userBalances.btc * rates.btc;
  const eth = userBalances.eth * rates.eth;
  const usdt = userBalances.usdt * rates.usdt;
  const tcn = userBalances.tcn * rates.tcn;

  const total = btc + eth + usdt + tcn;

  document.getElementById("btcBalance").innerText = userBalances.btc.toFixed(4);
  document.getElementById("ethBalance").innerText = userBalances.eth.toFixed(4);
  document.getElementById("usdtBalance").innerText = userBalances.usdt.toFixed(2);
  document.getElementById("tcnBalance").innerText = userBalances.tcn.toFixed(2);

  const symbol = currentCurrency === "usd" ? "$" : "₽";
  document.getElementById("totalBalance").innerText = `${symbol}${total.toFixed(2)}`;
}

// ===== Инициализация =====
window.addEventListener("DOMContentLoaded", () => {
  updateBalances();
});
