document.getElementById('send-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Получение данных с формы
    const amount = document.getElementById('amount').value;
    const recipient = document.getElementById('recipient').value;

    // Проверка на пустые поля
    if (amount && recipient) {
        // Отображение статус-сообщения
        document.getElementById('status-message').textContent = `Транзакция на сумму ${amount} для адреса ${recipient} отправлена! Ожидайте подтверждения.`;

        // Очистка формы
        document.getElementById('send-form').reset();
    } else {
        // Если форма заполнена неправильно
        document.getElementById('status-message').textContent = 'Пожалуйста, заполните все поля.';
    }
});
