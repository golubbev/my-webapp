document.getElementById('send-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const recipient = document.getElementById('recipient').value;
    const amount = document.getElementById('amount').value;
    const currency = document.getElementById('currency').value;

    if (!recipient || !amount || !currency) {
        alert("Please fill all fields");
        return;
    }

    alert(`Sending ${amount} ${currency.toUpperCase()} to ${recipient}`);
});
