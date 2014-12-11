describe('homepage', function(){
  
  beforeEach(function(){
    casper.start('http://localhost:3000/sockets');
  });

  it('has a title', function(){
    casper.then(function(){
      expect('body').to.contain.text("President Business Chat Page");
    });
  });

  it('can post message', function(){
    casper.then(function(){
      casper.fill('#messagesend', {
        messagetext: 'yeah',
      });
      casper.click('#sendbutton');
      casper.then(function() {
        expect('#messages').to.contain.text('yeah');
      });
    });
  });

});