const assert = require('chai').assert
let FairDie = require('../src/main.js').FairDie;
let DiceGameParticipant = require('../src/main.js').DiceGameParticipant;


describe("FairDie", () => {

   describe("maxNum",() => {
   	beforeEach(() => {
        FairDie = new FairDie(6);
   	}),
     it("returns",() =>{
        assert.equal(FairDie.max,6);
     }); 
   });

   describe ("die1 and die2",() => {
   	 it("returns",() => {
      assert.equal(typeof(FairDie.die1() && FairDie.die2()), "number")
   });
   	});

   describe("total",() => {
       it ("returns",() => {
          assert.equal(FairDie.total().length, 2)
       });
   });


    describe("thrower",() => {
       it ("returns",() => {
          assert.equal(FairDie.thrower(), "move" + " " +(FairDie.total()[0] + FairDie.total()[1]))
       });

});
});
