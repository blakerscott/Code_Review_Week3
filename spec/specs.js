
describe('pingPong', function() {

  it("to count from one to the number specified", function() {
    expect(countUp()).to.eql([1,2,3,4,5,6,7,8,9,10]);
  });

  it("will replace multiples of 3 with the word PING", function() {
    expect(countUp()).to.eql([1,2,"PING",4,5,"PING",7,8,"PING",10]);
  });
});
