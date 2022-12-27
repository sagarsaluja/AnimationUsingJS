const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

const playerImage = new Image();
playerImage.src = "Assets/shadow_dog.png";

const frameWidth = 575;
const frameHeight = 523;
let currentFrameX = 0;
let currentFrameY = 0;

let gameFrame = 0;
const staggerFrame = 5;

let currentPlayerState = 0;
const dropDown = document.getElementById("animations");
dropDown.addEventListener("change", (e) => {
  currentPlayerState = Number(e.target.value);
});

const animationLogic = (animationState) => {
  currentFrameY = animationState.index;
  if (gameFrame % staggerFrame === 0) {
    if (currentFrameX < animationState.maxFrame) currentFrameX++;
    else currentFrameX = 0;
  }
  gameFrame++;
};
const animationStates = [
  {
    index: 0,
    type: "idle",
    maxFrame: 6,
  },
  {
    index: 1,
    type: "jump",
    maxFrame: 6,
  },
  {
    index: 2,
    type: "fall",
    maxFrame: 6,
  },
  {
    index: 3,
    type: "run",
    maxFrame: 8,
  },
  {
    index: 4,
    type: "dizzy",
    maxFrame: 10,
  },
  {
    index: 5,
    type: "sit",
    maxFrame: 4,
  },
  {
    index: 6,
    type: "roll",
    maxFrame: 6,
  },
  {
    index: 7,
    type: "bite",
    maxFrame: 6,
  },
  {
    index: 8,
    type: "ko",
    maxFrame: 11,
  },
  {
    index: 9,
    type: "get hit",
    maxFrame: 3,
  },
];

const drawImage = () =>
  context.drawImage(
    playerImage,
    currentFrameX * frameWidth,
    currentFrameY * frameHeight,
    frameWidth,
    frameHeight,
    0,
    0,
    frameWidth,
    frameHeight
  );

const animate = () => {
  context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  animationLogic(animationStates[currentPlayerState]);
  drawImage();
  requestAnimationFrame(animate);
};
animate();
