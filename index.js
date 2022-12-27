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

//The sprite sheet has frames in it, and is divided into row and columns.
//we need to navigate through each image in it. We can call each image one frame.
//so width of one frame = length of sheet / number of frames it has
//so height of one frame = height of sheet / number of frames it has

const frameWidth = 575;
const frameHeight = 523;
let currentFrameX = 0;
let currentFrameY = 0;

let gameFrame = 0;
const staggerFrame = 5;
// we will pass multiples of the frames to the drawImage method to animate these.
const animationLogic = () => {
  //if seeing that image is blinking , check => are you rendering any empty frames?
  //how to slow down the animation?
  //IDEA: if we just keep on increasing the current frames by 1  everytime the animation loop runs ,
  // its too fast. What if we update the current frames on every 5 renders => it gets slower.
  //use GAME_FRAME (an always increasing number)and STAGGER_FRAMES(a fixed number)
  // we only update the current frame if GAME_FRAME % STAGGER_FRAME === 0.
  if (gameFrame % staggerFrame === 0) {
    //update frame
    if (currentFrameX < 6) currentFrameX++;
    else currentFrameX = 0;
  }
  gameFrame++;
};

//
//the drawImage method has 3 modes => 1 where it takes 3 , second where it takes 5 and third where it takes 9 arguments
//the first argument is the image , next 4 arguments are the "cut-out" part of the image : source x , source y , source width , source height
//the next 4 are destination parameters, where you want to place the cut out part on the canvas : x , y , width , height
const drawImage = () =>
  context.drawImage(
    playerImage,
    currentFrameX * frameWidth,
    currentFrameY * frameHeight,
    frameWidth,
    frameHeight,
    0,
    0,
    frameWidth, //setting these to Canvas_width and canvas_Height will make the image stretched out!
    frameHeight //better set these to frameWidth, frameHeight
  );

const animate = () => {
  //this is an ANIMATION LOOP -> core concept!
  context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT); //builtin function => takes st and end coordinates and clears those
  drawImage();
  animationLogic();
  requestAnimationFrame(animate);
  //this requests the browser to call the animate function before the next repaint.
  //The animate function will continue to be called by the browser
  //at a rate determined by the browser's refresh rate,
  //and the code inside the function will be executed repeatedly, creating an animation loop.
};
animate();
