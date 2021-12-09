"https://teachablemachine.withgoogle.com/models/WMbJiBTiK/"

function Start() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/WMbJiBTiK/model.json", modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    console.log('Got Result');
}