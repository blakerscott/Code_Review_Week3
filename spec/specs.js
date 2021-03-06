
describe('pingPong', function() {

  it("to count from one to the number specified", function() {
    expect(gamePlay(10)).to.eql([1,2,3,4,5,6,7,8,9,10]);
  });

  it("will replace multiples of 3 with the word PING", function() {
    expect(gamePlay(10)).to.eql([1,2,"PING",4,5,"PING",7,8,"PING",10]);
  });

  it("will replace multiples of 3 with the word PING and multiples of 5 with PONG", function() {
    expect(gamePlay(10)).to.eql([1,2,"PING",4,"PONG","PING",7,8,"PING","PONG"]);
  });

  it("will replace multiples of 3 with the word PING,multiples of 5 with PONG, and multiples of 15 with the word PINGPONG", function() {
    expect(gamePlay(17)).to.eql([1,2,"PING",4,"PONG","PING",7,8,"PING","PONG",11,"PING",13,14,"PINGPONG",16, 17]);
  });

});
