class MiningStats {
    constructor() {
        this.stats = {
            hashRate: document.getElementById('hashRate'),
            difficulty: document.getElementById('difficulty'),
            blocks: document.getElementById('blocks'),
            uptime: document.getElementById('uptime')
        };
        this.startUpdates();
    }

    startUpdates() {
        setInterval(() => this.updateStats(), 2000);
        setInterval(() => this.updateUptime(), 1000);
    }

    // ... rest of the mining stats code
} 