'use strict';
 
  class FairDie {

  constructor (maxNum){
  this.number1;
  this.number2
  this.scores = [];
  if(maxNum){
    this.max = maxNum;
  }
  else{
    this.max = 6; //initial value, in this case a 6 sided dice and participants do not set a maximum number
  }
  this.die1= function () {
    this.number1 = Math.round(Math.random()*(this.max)); //first dice
    return this.number1;
  }
  this.die2= function () {
    this.number2 = Math.round(Math.random()*(this.max)); // second dice
    return this.number2;
  }
  }

  total(){
       this.scores.push(this.die1());
       this.scores.push(this.die2());
       return this.scores
  }

  thrower(){
       if (this.die1()==6 && this.die2() == 6) {
           return "Great, play a double six and roll again"
       }
       else{
        return "move" + " " + (this.total()[0] +  this.total()[1])
       } 
  }
}

var timesLost = Symbol()
class DiceGameParticipant extends FairDie{
  constructor(maxNum){
    super(maxNum);
    this.timesLost;
  }
  
  get failureTimes(){
    return this.timesLost
  }
  
  set failureTimes(value){
    if(value > 0){
      return "Kudos"
    }
    this.timesLost = value
  }
  failureSummary(){
    return "And i have lost " + this.timesLost + " times"
  }
}

module.exports = {FairDie, DiceGameParticipant};




