document.getElementById('loan-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    var level = document.getElementById('level').value;
    var amount = parseFloat(document.getElementById('amount').value);

    var minAmount = 500000;
    var maxAmount = (level === 'classic') ? 1000000 :
                    (level === 'silver') ? 2000000 :
                    3000000;

    if (amount < minAmount || amount > maxAmount) {
        alert('Jumlah pinjaman tidak sesuai dengan level nasabah.');
    } else {
        var bunga = amount * 0.21;
        var cicilan = amount / 11;
        var denda = amount * 0.02;

        document.getElementById('loan-amount').textContent = Rp ${amount.toLocaleString()};
        // Kirim data pinjaman ke halaman konfirmasi
    }
});
