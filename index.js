//the canvas is just like an empty div, you can call this a container for graphics.
const canvas = document.getElementById("canvas");
// console.log(canvas);
// The canvas element has a method called getContext,
// which is used to get the rendering context of the canvas and to draw on the canvas.
// The getContext method takes a context type as a parameter,
// which specifies the type of rendering context to get.
const context = canvas.getContext("2d");

//you can log this context object , and see the "drawImage" method there.

//setup
const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

const playerImage = new Image();
playerImage.src = "Assets/shadow_dog.png";
let x = 0;
const animate = () => {
  //this is an ANIMATION LOOP -> core concept!
  context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); //builtin function => takes st and end coordinates and clears those
  context.fillRect(x, 50, 100, 100); //this fills rectangle from start to getElementById
  x++;
  requestAnimationFrame(animate);
  //this requests the browser to call the animate function before the next repaint.
  //The animate function will continue to be called by the browser
  //at a rate determined by the browser's refresh rate,
  //and the code inside the function will be executed repeatedly, creating an animation loop.
};
animate();
