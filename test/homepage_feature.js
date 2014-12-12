describe('homepage', function(){
  
  beforeEach(function(){
    casper.start('http://localhost:3000/');
  });

  it('has a title', function(){
    casper.then(function(){
      expect('body').to.contain.text("President Business Chat Page");
    });
  });

  it('adds the user to the chat room', function() {
    casper.then(function() {
      casper.fill('#username', {
        usertext: 'Lord Vader',
      });
      casper.click('#startchat');
      casper.then(function() {
        expect('#messages').to.contain.text('Lord Vader has entered the room');
      });
    });
  });

  // it('can post message', function(){
  //   casper.then(function(){
  //     casper.fill('#messagesend', {
  //       messagetext: 'yeah',
  //     });
  //     casper.click('#sendbutton');
  //     casper.then(function() {
  //       expect('#messages').to.contain.text('yeah');
  //     });
  //   });
  // });

});