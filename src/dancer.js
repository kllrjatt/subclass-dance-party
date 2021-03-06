// // // Creates and returns a new dancer object that can step
// var makeDancer = function(top, left, timeBetweenSteps) {

//   var dancer = {};

//   // use jQuery to create an HTML <span> tag
//   dancer.$node = $('<span class="dancer"></span>');

//   dancer.step = function() {
//     // the basic dancer doesn't do anything interesting at all on each step,
//     // it just schedules the next step
//     setTimeout(dancer.step, timeBetweenSteps);
//   };
//   dancer.step();

//   dancer.setPosition = function(top, left) {
//     // Use css top and left properties to position our <span> tag
//     // where it belongs on the page. See http://api.jquery.com/css/
//     //
//     var styleSettings = {
//       top: top,
//       left: left
//     };
//     dancer.$node.css(styleSettings);
//   };

//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   dancer.setPosition(top, left);

//   return dancer;
// };

var Dancer = function (top, left, timeBetweenSteps) {
  // add this.$node 

  // use timeBetweenSteps as a key value pair 
  this.timeBetweenSteps = timeBetweenSteps;
  // invoke step function 
  this.step();
  // set position on page
  this.setPosition(top, left);
};

Dancer.prototype.step = function () {
  // add step function 
  // use bind in setTimeOut for correct binding , 
  // use timebetween steps for passing in setTImeout Function 
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function (top, left) {
  // add style settings 
  var styleSettings = {
    top: top,
    left: left
  };
  // apply style settings to node 
  this.$node.animate(styleSettings, Math.floor(Math.random() * 500));
};
