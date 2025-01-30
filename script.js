document.getElementById('sendMoney').addEventListener('click', function() {
    const recipient = document.getElementById('recipient').value;
    const amount = document.getElementById('amount').value;

    if (!recipient || !amount) {
        alert('Please fill in all fields.');
        return;
    }

    document.querySelector('.container').classList.add('hidden');
    document.getElementById('success').classList.remove('hidden');
    document.getElementById('successAmount').textContent = `$${amount}`;
    document.getElementById('successRecipient').textContent = recipient;
});

document.getElementById('returnBack').addEventListener('click', function() {
    document.getElementById('success').classList.add('hidden');
    document.querySelector('.container').classList.remove('hidden');
});