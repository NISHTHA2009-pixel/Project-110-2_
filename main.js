
Webcam.set({
    width:350,
    height:300,
    image_format:90
});

camera = document.getElementById("camera");

Webcam.attach( '#camera' );

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'""/>"'
    });

}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/U3oolb1GZ/.model.json',modelLoaded);

function modelLoaded() {
console.log('Model Loaded!');

}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is" + prediction_1;
    var utterThis = new SpeechSynthesisisUtterance(speak_data_1);
    synth.speak(utterThis);
}
