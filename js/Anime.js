function isDefined(foo) {
    return typeof (foo) !== 'undefined';
}
export class Anime {
    constructor(repeat = false, duration = 1000) {
        this.repeat = repeat;
        this.duration = duration;
    }
    setRepeat(repeat) {
        this.repeat = repeat;
        return this;
    }
    setDuration(duration) {
        this.duration = duration;
        return this;
    }
    setTiming(timingF) {
        this.timing = timingF;
        return this;
    }
    setDraw(drawF) {
        this.draw = drawF;
        return this;
    }
    setOnAnimeFinished(callback) {
        this.onAnimeFinished = callback;
        return this;
    }
    start() {
        if (!isDefined(this.timing))
            throw new ReferenceError("Timing function in not defined!");
        if (!isDefined(this.draw))
            throw new ReferenceError("Draw function in not defined!");
        console.log("Animation was started successfully!");
        // animate({
        //     timing: this.timing,
        //     draw: this.draw,
        //     duration: this.duration,
        //     repeat: this.repeat
        // })
        this.startAnimeIteration();
        return this;
    }
    startAnimeIteration() {
        console.log("Anime iteration ws started!");
        const start = performance.now();
        const animeFrame = (time) => {
            let timeFraction = (time - start) / this.duration; // timeFraction изменяется от 0 до 1
            if (timeFraction > 1) {
                if (!this.repeat) {
                    timeFraction = 1;
                }
                else {
                    this.startAnimeIteration();
                }
            }
            let progress = this.timing(timeFraction); // вычисление текущего состояния анимации
            this.draw(progress); // отрисовать её
            if (timeFraction < 1) {
                requestAnimationFrame(animeFrame);
            }
            else if (isDefined(this.onAnimeFinished))
                this.onAnimeFinished();
        };
        requestAnimationFrame(animeFrame);
    }
}
//# sourceMappingURL=Anime.js.map