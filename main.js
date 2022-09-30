leftWristX = 0;
rightWristX = 0;
difference = 0;


function setup(){
    canvas = createCanvas(550, 550);
    canvas.position(650, 200);

    video = createCapture(VIDEO);
    video.size(550, 550);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is initialized!");
}

function draw(){
    background("grey");
    fill("blue");
    textSize(difference); 
    text("Sanvi", 150, 200);
}


function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = leftWristX - rightWristX;
        console.log("Left Wrist X = " + leftWristX  + " , Right Wrist X = " + rightWristX);
        console.log("Difference = " + difference); 
    }
}