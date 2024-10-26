function calculateRevenue() {
    const traffic = parseFloat(document.getElementById('traffic').value) || 0;
    const conversionRate = parseFloat(document.getElementById('conversion-rate').value) || 0;
    const avgOrderValue = parseFloat(document.getElementById('avg-order-value').value) || 0;
    const costPerItem = parseFloat(document.getElementById('cost').value) || 0;
    const profitMargin = parseFloat(document.getElementById('profit-margin').value) || 0;

    // Calculate number of conversions
    const conversions = (traffic * conversionRate) / 100;
    
    // Revenue calculation
    const revenue = conversions * avgOrderValue;
    
    // Profit calculation
    const profit = revenue * (profitMargin / 100);

    // Update HTML elements with results
    document.getElementById('revenue').innerText = `Projected Monthly Revenue: $${revenue.toFixed(2)}`;
    document.getElementById('profit').innerText = `Projected Monthly Profit: $${profit.toFixed(2)}`;
}