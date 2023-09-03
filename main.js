song = "";

function preload()
{
    song = loadSound("Harry.mp3");
}
function setup() {
    canvas = createCanvas(500, 300);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video, 0, 0, 600, 500);
}

function play()
{
    song.play();
}