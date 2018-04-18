require('winter-test-setup')

var jsonSafeParse = require('./index.js');

describe('jsonSafeParse', function(){
  it('exists', function(){
    jsonSafeParse.should.exist;
  })

  it('returns a function', function(){
    jsonSafeParse.should.be.a('function');
  })

  describe('when a valid JSON string is passed', function(){
    const input = '{ "a": "b", "c": 1 }';
    const expectedOutput = {
      a: "b",
      c: 1
    };

    it('sets success to true in response', function(){
      jsonSafeParse(input).success.should.be.true;
    })

    it('returns the correct JSON document representation', function(){
      jsonSafeParse(input).res.should.deep.equal(expectedOutput);
    })

    it('returns the raw input in the response', function(){
      jsonSafeParse(input).raw.should.equal(input);
    })
  })

  describe('when an invalid JSON string is passed', function(){
    const input = 'NOT_JSON';

    it('sets success to false in response', function(){
      jsonSafeParse(input).success.should.be.false;
    })

    it('returns the error in the response', function(){
      jsonSafeParse(input).err.toString().should.equal('SyntaxError: Unexpected token N in JSON at position 0');
    })

    it('returns the raw input in the repsonse', function(){
      jsonSafeParse(input).raw.should.equal(input);
    })
  })
})
