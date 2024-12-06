// Audio Reader Variables
const playButtonIcon = document.querySelector('#playButton i[class="fa fa-play"]');
const textBanner = document.querySelector('#resumoTexto, #index-banner p').textContent;

// Create a SpeechSynthesisUtterance
const utterance = new SpeechSynthesisUtterance(textBanner)

function speak() {
    speechSynthesis.speak(utterance);

    //Change button icon and speak
    if (playButtonIcon.classList.contains('fa-play')) {
        playButtonIcon.classList.remove('fa-play');
        playButtonIcon.classList.add('fa-pause');

        speechSynthesis.resume();
    }
    else {
        playButtonIcon.classList.remove('fa-pause');
        playButtonIcon.classList.add('fa-play');

        speechSynthesis.pause();
    }

};

utterance.onend = ()=> {
    speechSynthesis.cancel();
    playButtonIcon.classList.remove('fa-pause');
    playButtonIcon.classList.add('fa-play');
};

window.addEventListener('beforeunload', function () {
    window.speechSynthesis.cancel();  // This stops any ongoing speech synthesis
});

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause reading when the page becomes hidden
        speechSynthesis.pause();
    } else {
        // Resume reading when the page becomes visible again
        speechSynthesis.resume(utterance);
    }
});

// Goes back a page
function goBack() {
    history.back();
}

