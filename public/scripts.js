// Matrix rain effect
class MatrixRain {
    constructor() {
        this.canvas = document.getElementById('matrixCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
        this.fontSize = 10;
        this.columns = this.canvas.width/this.fontSize;
        this.drops = [];
        
        for(let x = 0; x < this.columns; x++)
            this.drops[x] = 1;
    }

    draw() {
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.ctx.fillStyle = '#0F0';
        this.ctx.font = this.fontSize + 'px monospace';

        for(let i = 0; i < this.drops.length; i++) {
            const text = this.characters.charAt(Math.floor(Math.random() * this.characters.length));
            this.ctx.fillText(text, i*this.fontSize, this.drops[i]*this.fontSize);
            
            if(this.drops[i]*this.fontSize > this.canvas.height && Math.random() > 0.975)
                this.drops[i] = 0;
            
            this.drops[i]++;
        }
    }
}

// Initialize matrix effect
const matrix = new MatrixRain();
setInterval(() => matrix.draw(), 33);

// Fake mining stats updates
function updateMiningStats() {
    const hashRate = document.getElementById('hashRate');
    const difficulty = document.getElementById('difficulty');
    const blocks = document.getElementById('blocks');
    
    setInterval(() => {
        hashRate.textContent = (140 + Math.random() * 15).toFixed(1) + ' MH/s';
        difficulty.textContent = (8.45 + Math.random() * 0.1).toFixed(2) + 'e+12';
        blocks.textContent = (parseInt(blocks.textContent.replace(',', '')) + 1).toLocaleString();
    }, 2000);
}

// System logs
const logMessages = [
    'Initializing mining protocols...',
    'Connecting to mining pool...',
    'GPU optimization in progress...',
    'Analyzing network difficulty...',
    'Block verification complete',
    'New block found!',
    'Updating blockchain...',
    'Memory optimization complete',
    'Network latency: 24ms'
];

function addSystemLog() {
    const logs = document.getElementById('systemLogs');
    const timestamp = new Date().toLocaleTimeString();
    const message = logMessages[Math.floor(Math.random() * logMessages.length)];
    const log = `[${timestamp}] ${message}`;
    
    const div = document.createElement('div');
    div.textContent = log;
    div.style.color = '#00ff00';
    logs.appendChild(div);
    
    if(logs.children.length > 8) {
        logs.removeChild(logs.children[0]);
    }
    
    logs.scrollTop = logs.scrollHeight;
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    updateMiningStats();
    setInterval(addSystemLog, 3000);
}); 