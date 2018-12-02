alert('Hello');
var name = prompt('type your name');
var ret = confirm('are you ok??');

console.log('log');
console.info('log');
console.warn('log');
console.error('log');

function displayTime() {
  var d = new Date();
  console.log("time is" + d.toLocalSrting());
}

/*================
stop watch
=================*/
//windowオブジェクトのonloadプロパティに指定
window.onload = function(){
  // var button = document.getElementById('btn');
  // btn.onclick = displayTime;

  var startButton = document.getElementById('start');
  var stopButton  = document.getElementById('stop');
  var display     = document.getElementById('display');
  var startTime, timer;

  startButton.onclick = start;

  function start() {
    startButton.onclick = null;
    stopButton.onclick  = stop;

    startTime = new Date();

    timer = setInterval(function () {
      var now = new Date();
      display.innerHTML = ((now - startTime)/1000).toFixed(2);
    }, 10);
  }
  function stop() {
    clearInterval(timer);
    startButton.onclick = start;
  }
};

// var timer = setTimeout(function(){
//   console.log(new Date());
// },2000);
//
// clearTimeout(timer);
//
// var intervalTimer = setInterval(function(){
//   console.log(new Date());
// },2600);
//
// clearInterval(intervalTimer);

/*==============
BMI
================*/
window.onload = function() {
  document.getElementById('calc').onclick = function(){
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);
    var bmi = document.getElementById('bmi');
    bmi.innerHTML = (weight/height/height).toFixed(1);
  };
}
