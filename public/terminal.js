class Terminal {
    constructor(elementId) {
        console.log('Initializing terminal for element:', elementId);
        this.terminal = document.getElementById(elementId);
        if (!this.terminal) {
            throw new Error(`Terminal element not found: ${elementId}`);
        }
        
        this.inputField = this.terminal.querySelector('.terminal-input-field');
        if (!this.inputField) {
            throw new Error('Input field not found');
        }
        
        this.outputDiv = this.terminal.querySelector('.terminal-output');
        if (!this.outputDiv) {
            throw new Error('Output div not found');
        }

        this.history = [];
        this.historyIndex = -1;
        
        this.setupEventListeners();
        this.displayWelcomeMessage();
    }

    setupEventListeners() {
        this.inputField.addEventListener('keypress', this.handleKeyPress.bind(this));
        this.inputField.addEventListener('keydown', this.handleSpecialKeys.bind(this));
    }

    displayWelcomeMessage() {
        this.appendOutput('Welcome to RISE AI Terminal. How can I help you today?', 'system-message');
    }

    handleKeyPress(event) {
        if (event.key === 'Enter') {
            const message = this.inputField.value.trim();
            if (message) {
                this.processMessage(message);
            }
        }
    }

    async processMessage(message) {
        try {
            // Display user message
            this.appendOutput(`> ${message}`, 'user-input');
            
            // Clear input field
            this.inputField.value = '';
            
            // Add to history
            this.history.push(message);
            this.historyIndex = this.history.length;

            // Show loading indicator
            const loadingId = this.appendOutput('Processing...', 'loading');

            // Send to server
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message })
            });

            // Remove loading indicator
            this.removeOutput(loadingId);

            if (!response.ok) {
                throw new Error(`Server responded with ${response.status}`);
            }

            const data = await response.json();
            this.appendOutput(data.response, 'ai-response');

        } catch (error) {
            console.error('Error processing message:', error);
            this.appendOutput('Error: Unable to process your request', 'error');
        }
    }

    appendOutput(content, className = '') {
        const div = document.createElement('div');
        div.textContent = content;
        div.className = className;
        const id = Date.now().toString();
        div.dataset.id = id;
        this.outputDiv.appendChild(div);
        this.outputDiv.scrollTop = this.outputDiv.scrollHeight;
        return id;
    }

    removeOutput(id) {
        const element = this.outputDiv.querySelector(`[data-id="${id}"]`);
        if (element) {
            element.remove();
        }
    }

    handleSpecialKeys(event) {
        if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
            event.preventDefault();
            this.navigateHistory(event.key === 'ArrowUp' ? -1 : 1);
        }
    }

    navigateHistory(direction) {
        if (this.history.length === 0) return;
        
        this.historyIndex += direction;
        if (this.historyIndex >= this.history.length) {
            this.historyIndex = this.history.length - 1;
        } else if (this.historyIndex < 0) {
            this.historyIndex = 0;
        }
        
        this.inputField.value = this.history[this.historyIndex];
    }
}
