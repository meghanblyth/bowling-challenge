const BowlingScore = require('./bowlingscore'); 

describe('Bowlingscore', () => {
  describe('roll', () => {
    it('returns 5 if you roll 5', () => {
      bowling = new BowlingScore; 
      expect(bowling.roll()).toEqual(5);
    }) 

    it('adds a pin to the score total', () => {
      bowling = new BowlingScore;
      expect(bowling.roll(this.total)).toBe(5) 
    })
  })
})

