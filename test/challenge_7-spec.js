// import challenge 7

// describe the class PrimeFinder

// write your tests here

var PrimeFinder = require("../challenge_7.js");
var chai = require('chai');
var expect = chai.expect;
chai.should();

describe('PrimeFinder', function(){

  var myPF;

  beforeEach(function(){
    myPF = new PrimeFinder();
  });

  it('should be a class', function(){
    expect(PrimeFinder).to.exist;
    expect( myPF instanceof PrimeFinder ).to.equal(true);
  });

});

describe('getPrimeNumber', function() {

  var myPF;

  beforeEach(function(){
    myPF = new PrimeFinder();
  });

  it('should be an instance method of PrimeFinder', function(){
    expect(myPF.getPrimeNumber).to.exist;
    expect(myPF.getPrimeNumber).to.be.a('function');
  });

  it('should not be a member of the class PrimeFinder', function(){
    expect( myPF.getPrimeNumber instanceof PrimeFinder ).to.equal(false);
  });


  it('should not be inheritable', function(){
    expect (PrimeFinder.prototype.hasOwnProperty("getPrimeNumber")).to.be.false;
  });

  it('should take a number as an argument and return a number', function(){
    expect( myPF.getPrimeNumber(5) ).to.be.a('number');
  });

  it('should return the nth prime number when given n as an argument', function(){
    expect( myPF.getPrimeNumber(1) ).to.equal(2);
    expect( myPF.getPrimeNumber(2) ).to.equal(3);
    expect( myPF.getPrimeNumber(3) ).to.equal(5);
    expect( myPF.getPrimeNumber(4) ).to.equal(7);
    expect( myPF.getPrimeNumber(5) ).to.equal(11);
    expect( myPF.getPrimeNumber(6) ).to.equal(13);
    expect( myPF.getPrimeNumber(7) ).to.equal(17);
    expect( myPF.getPrimeNumber(10001) ).to.equal(104743);
  });

});

