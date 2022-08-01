class Timer {
    constructor(inputDuration, startButton, pauseButton, callbacks) {
        this.inputDuration = inputDuration;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        if(callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }
        this.startButton.addEventListener("click", this.start);
        this.pauseButton.addEventListener("click", this.pause);
    }

    start = () => {
        if(this.onStart) {
            this.onStart(this.timeRemaining);
        }
        this.tick();
        this.intervalId = setInterval(this.tick, 10);
    };

    pause = () => {
        clearInterval(this.intervalId);
    };

    tick = () => {
        if(this.timeRemaining > 0) {
            this.timeRemaining = this.timeRemaining - 0.01;
            if(this.onTick) {
                this.onTick(this.timeRemaining);
            }
        }
        else {
            this.pause();
            if(this.onComplete) {
                this.onComplete();
            }
        }
    };

    get timeRemaining() {
        return parseFloat(this.inputDuration.value);
    }

    set timeRemaining(time) {
        this.inputDuration.value = time.toFixed(2);
    }
}