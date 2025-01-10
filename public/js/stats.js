class SystemStats {
    constructor() {
        this.stats = {
            hashRate: { min: 140, max: 180, unit: 'MH/s' },
            bandwidth: { min: 800, max: 1200, unit: 'MB/s' },
            processes: { min: 1000, max: 5000, unit: '' },
            memory: { min: 60, max: 95, unit: '%' },
            cpu: { min: 70, max: 98, unit: '%' }
        };
        
        this.processMessages = [
            'Mining block #',
            'Processing hash ',
            'Verifying block ',
            'Network sync: ',
            'Memory allocation: ',
            'GPU utilization: ',
            'Bandwidth usage: ',
            'Data throughput: '
        ];

        this.initializeDisplays();
        this.startUpdates();

        // Initialize video
        this.initializeVideo();
    }

    initializeDisplays() {
        // Initialize stat bars
        const statsDisplay = document.querySelector('.stats-display');
        Object.keys(this.stats).forEach(stat => {
            const bar = document.createElement('div');
            bar.className = 'stat-bar';
            bar.innerHTML = `
                <div class="bar" id="${stat}-bar"></div>
                <span class="stat-label" id="${stat}-value"></span>
            `;
            statsDisplay.appendChild(bar);
        });

        // Initialize process list
        this.processList = document.querySelector('.process-list');
    }

    updateStats() {
        Object.entries(this.stats).forEach(([stat, range]) => {
            const value = this.generateRandomValue(range.min, range.max);
            const bar = document.getElementById(`${stat}-bar`);
            const label = document.getElementById(`${stat}-value`);
            
            bar.style.height = `${(value - range.min) / (range.max - range.min) * 100}%`;
            label.textContent = `${value}${range.unit}`;
        });
    }

    updateProcesses() {
        const processes = Array(5).fill(0).map(() => {
            const msg = this.processMessages[Math.floor(Math.random() * this.processMessages.length)];
            const value = Math.floor(Math.random() * 1000000).toString(16);
            return `${msg}0x${value}`;
        });

        this.processList.innerHTML = processes.map(p => `<div class="process">${p}</div>`).join('');
    }

    generateRandomValue(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    startUpdates() {
        // Fast updates for stats
        setInterval(() => this.updateStats(), 500);
        
        // Slower updates for processes
        setInterval(() => this.updateProcesses(), 2000);
        
        // Update timer
        setInterval(() => {
            const timer = document.querySelector('.timer');
            const time = new Date();
            timer.textContent = time.toISOString().substr(11, 8);
        }, 1000);
    }

    initializeVideo() {
        const video = document.getElementById('dataVideo');
        if (video) {
            video.play().catch(err => {
                console.log("Video autoplay failed:", err);
            });
            
            // Update loading status when video starts playing
            video.addEventListener('playing', () => {
                const status = video.closest('.panel').querySelector('.status');
                status.textContent = 'ACTIVE';
                status.classList.add('running');
            });
        }
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new SystemStats();
}); 