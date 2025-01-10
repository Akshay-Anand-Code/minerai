class TerminalOutput {
    constructor() {
        console.log("Terminal initialized"); // Debug log
        this.terminalContent = document.querySelector('.terminal-content');
        if (!this.terminalContent) {
            console.error("Terminal content element not found!");
            return;
        }
        this.initializeTerminal();
        this.startTerminalOutput();
    }

    initializeTerminal() {
        // Preserve the original content and add our container
        const originalContent = this.terminalContent.innerHTML;
        this.terminalContent.innerHTML = `
            ${originalContent}
            <div id="terminal-lines"></div>
        `;
        this.outputElement = document.getElementById('terminal-lines');
    }

    async startTerminalOutput() {
        const dependencies = [
            "Installing TensorFlow CUDA 12.2...",
            "Configuring PyTorch with GPU support...",
            "Loading NVIDIA CUDNN libraries...",
            "Initializing OpenCL runtime...",
            "Setting up neural network frameworks...",
            "Loading pre-trained models...",
            "Configuring distributed training nodes...",
            "Initializing GPU memory buffers...",
            "Loading AI optimization algorithms...",
            "Setting up parallel processing pipelines..."
        ];

        const analysisSteps = [
            "Analyzing network topology...",
            "Optimizing GPU memory allocation...",
            "Calibrating neural pathways...",
            "Processing training datasets...",
            "Computing gradient distributions...",
            "Validating model architectures...",
            "Synchronizing distributed nodes...",
            "Evaluating system performance...",
            "Optimizing tensor operations...",
            "Configuring batch normalization..."
        ];

        const processingSteps = [
            "Processing batch vectors: 0x7ff8a3e21500",
            "Allocating VRAM blocks: 0x9aa12b4d8000",
            "Computing gradients: 0x3f7d1c8e4200",
            "Optimizing weights: 0x6b9f4a2d7800",
            "Training epoch 1/∞: 0x5c8e2f9a6100",
            "Analyzing data patterns: 0x4d7b3e8c5900",
            "Validating neural paths: 0x8e2c1f9d4300",
            "Processing input tensors: 0x2f9c4b8a7600",
            "Computing loss functions: 0x7a3d5c8b2400",
            "Optimizing network topology: 0x9c4f2e8d5700"
        ];

        // Show initial system message
        this.addLine("Initializing AI containment system...", "system");
        await this.delay(1000);

        // Install dependencies
        for (let dep of dependencies) {
            this.addLine(`> ${dep}`, "install");
            await this.delay(200);
            this.addLine(`✓ ${dep.replace("...", "")} [DONE]`, "success");
            await this.delay(100);
        }

        // Show analysis progress
        while (true) {
            for (let step of [...analysisSteps, ...processingSteps]) {
                this.addLine(`> ${step}`, "process");
                await this.delay(300);

                // Add random hex output
                if (Math.random() > 0.5) {
                    this.addLine(this.generateHexOutput(), "hex");
                }

                // Occasionally show memory usage
                if (Math.random() > 0.7) {
                    this.addLine(this.generateMemoryStatus(), "memory");
                }
            }
        }
    }

    generateHexOutput() {
        const hex = "0123456789ABCDEF";
        let output = "";
        for (let i = 0; i < 4; i++) {
            output += "0x";
            for (let j = 0; j < 8; j++) {
                output += hex[Math.floor(Math.random() * 16)];
            }
            output += " ";
        }
        return output;
    }

    generateMemoryStatus() {
        const total = 24576; // 24GB
        const used = Math.floor(Math.random() * 8000 + 14000);
        const percent = ((used / total) * 100).toFixed(1);
        return `[MEM] ${used}MB/${total}MB (${percent}%) | GPU Util: ${Math.floor(Math.random() * 20 + 80)}%`;
    }

    addLine(text, type = "text") {
        const line = document.createElement('div');
        line.className = `terminal-line ${type}`;
        line.textContent = text;
        this.outputElement.appendChild(line);
        this.outputElement.scrollTop = this.outputElement.scrollHeight;

        // Keep only last 20 lines
        while (this.outputElement.children.length > 20) {
            this.outputElement.removeChild(this.outputElement.firstChild);
        }
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Add this to your CSS
const style = document.createElement('style');
style.textContent = `
    .terminal-content {
        font-family: monospace;
        color: #00ff00;
        overflow: hidden;
    }

    .terminal-line {
        margin: 2px 0;
        opacity: 0.9;
    }

    .terminal-line.system {
        color: #00ff00;
        font-weight: bold;
    }

    .terminal-line.install {
        color: #00ccff;
    }

    .terminal-line.success {
        color: #00ff00;
        opacity: 0.7;
    }

    .terminal-line.process {
        color: #ffcc00;
    }

    .terminal-line.hex {
        color: #666;
        font-size: 0.9em;
    }

    .terminal-line.memory {
        color: #ff3366;
        font-size: 0.9em;
    }
`;
document.head.appendChild(style);

// Make sure the script runs
console.log("Terminal script loaded");
new TerminalOutput();

// Also initialize on DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM loaded, initializing terminal");
    new TerminalOutput();
}); 