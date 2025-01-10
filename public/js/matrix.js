class MatrixRain {
    constructor(canvasId) {
        this.canvas = document.createElement('canvas');
        this.canvas.id = canvasId;
        this.ctx = this.canvas.getContext('2d');
        this.setupCanvas();
        this.initialize();
    }

    setupCanvas() {
        this.canvas.style.position = 'absolute';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.zIndex = '-1';
        document.body.appendChild(this.canvas);
    }

    // ... rest of the matrix code
} 