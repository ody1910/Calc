function calculateRevenue() {
    const price = parseFloat(document.getElementById('price').value) || 0;
    const quantity = parseFloat(document.getElementById('quantity').value) || 0;
    const cost = parseFloat(document.getElementById('cost').value) || 0;

    const revenue = price * quantity;
    const profit = revenue - (cost * quantity);

    document.getElementById('revenue').innerText = `Revenue: $${revenue.toFixed(2)}`;
    document.getElementById('profit').innerText = `Profit: $${profit.toFixed(2)}`;
}