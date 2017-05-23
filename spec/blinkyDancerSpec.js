describe('teddy', function () {

  var teddy, clock;
  var timeBetweenSteps = 100;

  beforeEach(function () {
    clock = sinon.useFakeTimers();
    // fix test line to use NEW keywork to create a instance of teddy
    teddy = new Teddy(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function () {
    expect(teddy.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function () {
    sinon.spy(teddy.$node, 'toggle');
    teddy.step();
    expect(teddy.$node.toggle.called).to.be.true;
  });

  describe('dance', function () {
    it('should call step at least once per second', function () {
      sinon.spy(teddy, 'step');
      expect(teddy.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(teddy.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(teddy.step.callCount).to.be.equal(2);
    });
  });
});

describe('carlton', function () {

  var carlton, clock;
  var timeBetweenSteps = 100;

  beforeEach(function () {
    clock = sinon.useFakeTimers();
    // fix test line to use NEW keywork to create a instance of carlton
    carlton = new Carlton(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function () {
    expect(carlton.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function () {
    sinon.spy(carlton.$node, 'toggle');
    carlton.step();
    expect(carlton.$node.toggle.called).to.be.true;
  });

  describe('dance', function () {
    it('should call step at least once per second', function () {
      sinon.spy(carlton, 'step');
      expect(carlton.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(carlton.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(carlton.step.callCount).to.be.equal(2);
    });
  });
});

describe('dean', function () {

  var dean, clock;
  var timeBetweenSteps = 100;

  beforeEach(function () {
    clock = sinon.useFakeTimers();
    // fix test line to use NEW keywork to create a instance of dean
    dean = new Dean(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function () {
    expect(dean.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function () {
    sinon.spy(dean.$node, 'toggle');
    dean.step();
    expect(dean.$node.toggle.called).to.be.true;
  });

  describe('dance', function () {
    it('should call step at least once per second', function () {
      sinon.spy(dean, 'step');
      expect(dean.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(dean.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(dean.step.callCount).to.be.equal(2);
    });
  });
});

describe('bender', function () {

  var bender, clock;
  var timeBetweenSteps = 100;

  beforeEach(function () {
    clock = sinon.useFakeTimers();
    // fix test line to use NEW keywork to create a instance of bender
    bender = new Bender(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function () {
    expect(bender.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function () {
    sinon.spy(bender.$node, 'toggle');
    bender.step();
    expect(bender.$node.toggle.called).to.be.true;
  });

  describe('dance', function () {
    it('should call step at least once per second', function () {
      sinon.spy(bender, 'step');
      expect(bender.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(bender.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(bender.step.callCount).to.be.equal(2);
    });
  });
});