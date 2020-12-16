const horoscopeGenerator =  {
        _zodiac: [],
        _dayMessage: [],
        _futureMessage: [],
        randomSelector(array) {
            const randomIndex = Math.floor(Math.random() * array.length);
            return array[randomIndex];
        },
        get zodiac() {
            return this.randomSelector(this._zodiac);      
        },
        get dayMessage() {
            return this.randomSelector(this._dayMessage);     
        },
        get futureMessage() {
            return this.randomSelector(this._futureMessage);  
        },
        addZodiac(...params) {
            for(let i=0; i<params.length; i++) {
                this._zodiac.push(params[i]);
            };
        },
        addDayMessage(...params) {
            for(let i=0; i<params.length; i++) {
                this._dayMessage.push(params[i]);
            };
        },
        addFutureMessage(...params) {
            for(let i=0; i<params.length; i++) {
                this._futureMessage.push(params[i]);
            };
        },
        randomMessage() {
            console.log(`Your horoscope for today is ...... ${this.zodiac}`);
            console.log(`Your reading today is: ${this.dayMessage}`);
            console.log(`Your future fortells as follows.... ${this.futureMessage}`);
        }
    };

//import data
horoscopeGenerator.addZodiac('Aries');
horoscopeGenerator.addDayMessage("Today's message", "tomorrow's message");
horoscopeGenerator.addFutureMessage('Future message');

console.log('Welcome to your horoscope reading!');
console.log('Would you dare to know your fate today, and tomorrow???')
horoscopeGenerator.randomMessage();