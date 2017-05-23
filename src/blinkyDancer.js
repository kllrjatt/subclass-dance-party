// var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = blinkyDancer.step;

//   blinkyDancer.step = function() {
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <div> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };

//   return blinkyDancer;
// };

var Teddy = function (top, left, timeBetweenSteps) {
  this.$node = $('<div class="teddy"></div>');
    // call dancer class
    // pass in correct refrence 
  Dancer.call(this, top, left, timeBetweenSteps);
};

// create object prototype chain 
// add dancer prototype to chain 
// refer consturctor back to blink dancer 

Teddy.prototype = Object.create(Dancer.prototype);
Teddy.prototype.constructor = Teddy;

// write step function 
Teddy.prototype.step = function () {
    // call the older dancer function from dancer prototype 
    // use this to refer to blink dancer 
  Dancer.prototype.step.call(this);
    // toggle node per previours structure 
  this.$node.toggle();
};


var Carlton = function (top, left, timeBetweenSteps) {
  this.$node = $('<div class="carlton"></div>');
    // call dancer class
    // pass in correct refrence 
  Dancer.call(this, top, left, timeBetweenSteps);
};

// create object prototype chain 
// add dancer prototype to chain 
// refer consturctor back to blink dancer 

Carlton.prototype = Object.create(Dancer.prototype);
Carlton.prototype.constructor = Carlton;

// write step function 
Carlton.prototype.step = function () {
    // call the older dancer function from dancer prototype 
    // use this to refer to blink dancer 
  Dancer.prototype.step.call(this);
    // toggle node per previours structure 
  this.$node.toggle();
};


// add left alignment
var leftAlign = function () {
    // pass is static top for first element
  var top = 50;
    // itreate over all dancers 
  window.dancers.forEach(function (dancer) {
        // pass static left location 
    dancer.setPosition(top, 15);
        // add static position for incriment
    top += 20;
  });
};

// add right align 
var rightAlign = function () {
    //pass static top 
  var top = 50;
  window.dancers.forEach(function (dancer) {
        // for all dancers add static left 
    dancer.setPosition(top, '75%');
        //incriment top 
    top += 20;
  });

};

// add top align 
var topAlign = function () {
    //pass static left
  var left = 50;
  window.dancers.forEach(function (dancer) {
        // for all dancers add static top
    dancer.setPosition(50, left);
        //incriment left
    left += 20;
  });
};

// add bottom align 
var bottomAlign = function () {
    // add static left 
  var left = 50;
  window.dancers.forEach(function (dancer) {
        // add static bottom position
    dancer.setPosition('75%', left);
        //incriment left 
    left += 20;
  });

};

var Dean = function (top, left, timeBetweenSteps) {
  this.$node = $('<div class="dean"></div>');
    // call dancer class
    // pass in correct refrence 
  Dancer.call(this, top, left, timeBetweenSteps);
};

// create object prototype chain 
// add dancer prototype to chain 
// refer consturctor back to blink dancer 

Dean.prototype = Object.create(Dancer.prototype);
Dean.prototype.constructor = Dean;

// write step function 
Dean.prototype.step = function () {
    // call the older dancer function from dancer prototype 
    // use this to refer to blink dancer 
  Dancer.prototype.step.call(this);
    // toggle node per previours structure 
  this.$node.toggle();
};

var Bender = function (top, left, timeBetweenSteps) {
  this.$node = $('<div class="bender"></div>');
    // call dancer class
    // pass in correct refrence 
  Dancer.call(this, top, left, timeBetweenSteps);
};

// create object prototype chain 
// add dancer prototype to chain 
// refer consturctor back to blink dancer 

Bender.prototype = Object.create(Dancer.prototype);
Bender.prototype.constructor = Bender;

// write step function 
Bender.prototype.step = function () {
    // call the older dancer function from dancer prototype 
    // use this to refer to blink dancer 
  Dancer.prototype.step.call(this);
    // toggle node per previours structure 
  this.$node.toggle();
};

var horizontalAlign = function () {
  var left1 = 250;
  var left2 = 250;
  for (var i = 0; i < window.dancers.length; i++) {
    if (i % 2 === 0) {
      window.dancers[i].setPosition(150, left1);
      $(window.dancers[i]).addClass('flip');
      left1 += 50;
    } else {
      window.dancers[i].setPosition('65%', left2);
      left2 += 50;
    }
  }
};

var verticalAlign = function () {
  var top1 = 150;
  var top2 = 150;
  for (var i = 0; i < window.dancers.length; i++) {
    if (i % 2 === 0) {
      window.dancers[i].setPosition(top1, 150);
      $(window.dancers[i]).addClass('flip');
      top1 += 50;
    } else {
      window.dancers[i].setPosition(top2, '65%');
      top2 += 50;
    }
  }
};