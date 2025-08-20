export function Voice(){

    const micBtn = document.getElementById('micBtn');
    const textBox = document.getElementById('prompt');

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechrecognition;
    if(!SpeechRecognition) {
        alert("Sorry, your browser doesn't supptor Speech Recognition");
    }
    else{
        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = 'en-US';

        let listening = false;

        micBtn.addEventListener('click', () => {
            if(!listening) {
                recognition.start();
                listening = true;
            }
            else{
                recognition.stop();
                listening = false;
            }
        });
        recognition.onresult = (event) => {
            let transcript = '';
            for(let i=0; i<event.result.length; i++){
                transcript += event.result[i][0].transcript;
            }
            textBox.placeholder = transcript;
            textBox.value = transcript;
        };

        recognition.onerror = (event) => {
            console.error('Speech recognition error : ', event.error);
        }
    }
}