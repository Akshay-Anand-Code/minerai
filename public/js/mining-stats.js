class MiningStats {
    constructor() {
        console.log("MiningStats initialized"); // Debug
        this.startMetricUpdates();
    }

    startMetricUpdates() {
        // Simple test update every 100ms
        setInterval(() => {
            // Total Hashrate (fluctuating between 1000-1500)
            const hashrate = 1250 + Math.sin(Date.now() / 1000) * 250 + (Math.random() - 0.5) * 100;
            document.getElementById('totalHashrate').textContent = `${hashrate.toFixed(1)} MH/s`;

            // Network Difficulty (fluctuating exponential)
            const difficulty = (8.45e12 + Math.random() * 1e11).toExponential(2);
            document.getElementById('networkDifficulty').textContent = difficulty;

            // Power Consumption (fluctuating between 3000-4000)
            const power = 3500 + Math.sin(Date.now() / 800) * 300 + (Math.random() - 0.5) * 200;
            document.getElementById('powerConsumption').textContent = `${Math.round(power)} W`;

        }, 100);
    }
}

// Initialize immediately
new MiningStats();

// Also initialize on DOM content loaded just in case
document.addEventListener('DOMContentLoaded', () => {
    new MiningStats();
}); 