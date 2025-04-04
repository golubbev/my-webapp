// Функция для получения баланса из Firebase
async function fetchUserBalance(userId) {
  const balance = await getBalance(userId);

  // Обновляем UI с данными из базы
  document.getElementById("btcBalance").textContent = balance.btc || "0.0000";
  document.getElementById("ethBalance").textContent = balance.eth || "0.0000";
  document.getElementById("usdtBalance").textContent = balance.usdt || "0.00";
  document.getElementById("tcnBalance").textContent = balance.tcn || "0.00";

  const totalBalance = (balance.btc * 60000) + (balance.eth * 3000) + (balance.usdt * 1) + (balance.tcn * 10); // Пример расчета общей суммы
  document.getElementById("totalBalance").textContent = `$${totalBalance.toFixed(2)}`;
}

// Стартовые данные пользователя
const userId = 123456789; // Замените на актуальный user_id
fetchUserBalance(userId);

// Функция для переключения темы
function toggleTheme() {
  document.body.classList.toggle('dark-theme');
}

// Функция для изменения валюты
function changeCurrency() {
  const currency = document.getElementById("currencySelector").value;
  console.log("Изменена валюта на: " + currency);
}

// Функция для переключения отображения панели настроек
function toggleSettings() {
  const settingsPanel = document.getElementById("settingsPanel");
  settingsPanel.style.display = settingsPanel.style.display === "none" ? "block" : "none";
}
