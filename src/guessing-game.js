class GuessingGame {
    constructor() {}
arr=[];

    setRange(min, max) {
        for(var i=min;i<=max;i++){
            this.arr.push(i)
        }
    }

    guess() {
        //console.log("min is "+ this.arr[0]+"  max is "+this.arr[this.arr.length-1])
        //console.log("Mid is"+ this.arr[Math.ceil((this.arr.length-1)/2)])
        return this.arr[Math.ceil((this.arr.length-1)/2)];
    }

    lower() {
        this.arr = this.arr.slice(0,Math.ceil((this.arr.length-1)/2)+1)
    }

    greater() {
        this.arr = this.arr.slice(Math.ceil((this.arr.length-1)/2), this.arr.length)
    }
}

module.exports = GuessingGame;
