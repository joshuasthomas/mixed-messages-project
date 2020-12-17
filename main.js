const horoscopeGenerator =  {
        _zodiac: [],
        _dayMessage: [],
        _futureMessage: [],
        _weirdCharSet: "♠♣♥♦←↑→↓↔«»‹›¡¿€£¤¥¢‰¶‡†§ªºΔΩαβπµð∂∏ÇÐÑÞßßβæçðñøþΑΒ✬৳﹂≭☈☸ΓΔΕΖΗΘΙΚΛΜνξοςσφϒω",
        randomSelector(array) {
            //Use Math.random to return a random array value
            const randomIndex = Math.floor(Math.random() * array.length);
            return array[randomIndex];
        },
        get zodiac() {
            //Gets a random zodiac value
            return this.randomSelector(this._zodiac);      
        },
        get dayMessage() {
            //Gets a random day's message
            return this.randomSelector(this._dayMessage);     
        },
        get futureMessage() {
            //Gets a random future message
            return this.randomSelector(this._futureMessage);  
        },
        addZodiac(...params) {
            //Adds one or more new zodiac values
            for(let i=0; i<params.length; i++) {
                this._zodiac.push(params[i]);
            };
        },
        addDayMessage(...params) {
            //Adds one or more new day's message(s) values
            for(let i=0; i<params.length; i++) {
                this._dayMessage.push(params[i]);
            };
        },
        addFutureMessage(...params) {
            //Adds one or more new future message(s) values
            for(let i=0; i<params.length; i++) {
                this._futureMessage.push(params[i]);
            };
        },
        weirdEnding() {
            //Generates a weird message
            const length = Math.floor(Math.random() * 10); //max length of 10 chars
            let weirdMessage = "";
            for(let i=0; i<= length; i++) {
                weirdMessage += this.randomSelector(this._weirdCharSet);
            }
            return weirdMessage;
        },
        introMessage() {
          return "Welcome to your Horoscope reading! ✬৳﹂≭☈☸\nWould you dare to know your fate today, and tomorrow???\n";
        },
        getReading() {
            //Logs a random horoscope reading to the console
            console.log(this.introMessage());
            console.log(`Your horoscope for today is........ \n\t\t\t\t...${this.zodiac}\t${this.weirdEnding()}`);
            console.log(`Your reading today is.... \n\t\t\t...${this.dayMessage}\t${this.weirdEnding()}`);
            console.log(`Your future fortells as follows.... \n\t\t\t\t...${this.futureMessage}\t${this.weirdEnding()}\n`);
        }
    };

//import data
horoscopeGenerator.addZodiac('Aries',"Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces");
horoscopeGenerator.addDayMessage("You are poised on the brink of some exciting experiences.", "Your thoughts are wandering in every direction except the one you need to concentrate on. Don't make any decisions while you're like this.");
horoscopeGenerator.addDayMessage("You'll put plenty of energy into social activities and do your best to make them a success");
horoscopeGenerator.addDayMessage("You can definitely hook up with a kindred spirit.","This day marks the perfect opportunity to embark on a fresh chapter in your life. ");
horoscopeGenerator.addFutureMessage("Love comes in all shapes and sizes and you won't want to discriminate in any way.", "Some important news is in the wind");
horoscopeGenerator.addFutureMessage("You'll enjoy being with friends, perhaps at a festive gathering or an activity in which you're all involved. ")
horoscopeGenerator.addFutureMessage("You'll enjoy some very extravagant and indulgent in coming weeks.")

//Get a horoscope reading (that's random!)
horoscopeGenerator.getReading();
