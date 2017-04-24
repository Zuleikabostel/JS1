var puck = document.getElementById('puck');
var puck_y = 0;
var puck_x =350;

document.getElementById('down').addEventListener('click', function() {
  if (puck_y < 550) {

  puck_y += 50;
puck.style.top = puck_y + 'px';
}
});

document.getElementById('up').addEventListener('click', function() {
if (puck_y > 0) {

  puck_y -= 50;
puck.style.top = puck_y + 'px';
}
});

document.getElementById('left').addEventListener('click', function() {
if (puck_x > 0) {

  puck_x -= 50;
puck.style.left = puck_x + 'px';
}
});

document.getElementById('right').addEventListener('click', function() {
if (puck_x < 750) {

  puck_x += 50;
puck.style.left = puck_x + 'px';
}
});
