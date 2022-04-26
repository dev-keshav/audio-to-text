class SpeechRecognitionApi{
    constructor(options){
        const SpeechToText = window.SpeechRecognition || window.webkitSpeechRecognition;
        this.SpeechApi = new SpeechToText();
        this.output = options.output ? options.output : document.createElement("div");
        this.SpeechApi.continous = true;
        this.SpeechApi.interimResult = false;
        this.SpeechApi.onresult = (event) => {
            var resultIndex = event.resultIndex;
            var transcript = event.results[resultIndex][0].transcript;
            this.output.textContent = transcript;
            console.log(this.output)
        }
    }
    init(){
        this.SpeechApi.start();

    }
    stop(){
        this.SpeechApi.stop();
    }
}
window.onload = function () {
    var speech = new SpeechRecognitionApi({
        output: document.querySelector(".output")
    })

    document.querySelector(".btn-start").addEventListener("click", () => {
        speech.init();
    })
    document.querySelector(".btn-end").addEventListener("click", () => {
        speech.stop();
    })
}