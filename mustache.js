mustache_x = 0;
mustache_y = 0;
function preload() {
    mustache = modelLoaded("https://i.postimg.cc/5yzvqScq/m.png");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video,0,0,300,300);
    image(mustache, mustache_x, mustache_y, 60, 45);
}

function take_snapshot() {
    save('myFilterImage.pnd');
}

function modelLoaded() {
    console.log("poseNet Is Initlaized")
}

function gotPoses(result) {
    if (result.length > 0) {
        console.log(result)
        console.log("nose x =" + result[0].pose.nose.x);
        mustache_x = result[0].pose.nose.x-30;
        console.log("nose y =" + result[0].pose.nose.y);
        mustache_y = result[0].pose.nose.y;
    }
}

