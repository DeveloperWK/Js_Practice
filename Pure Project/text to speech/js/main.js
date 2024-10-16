//Init SpeechSynth API
const synth = window.speechSynthesis;
// DOM Elements
const textForm = document.querySelector("form");
const textInput = document.querySelector("#text-input");
const voiceSelect = document.querySelector("#voice-select");
const rate = document.querySelector("#rate");
const rateValue = document.querySelector("#rate-value");
const pitch = document.querySelector("#pitch");
const pitchValue = document.querySelector("#pitch-value");
const body = document.querySelector("body");

//Init voices array

let voices = [];

const getVoices = () => {
  voices = synth.getVoices();
  // Loop through Voices and create an option for each one
  voices.forEach((voice) => {
    // Create Option Element
    const option = document.createElement("option");
    // Fill Option with voice and Language
    option.textContent = voice.name + "(" + voice.lang + ")";
    // set needed option attributes
    option.setAttribute("data-lang", voice.lang);
    option.setAttribute("data-name", voice.name);
    voiceSelect.appendChild(option);
  });
};

getVoices();

if (synth.onvoiceschanged !== undefined) {
  synth.onvoiceschanged = getVoices;
}

// Speak
const speak = () => {
  // Check if Speaking
  if (synth.speaking) {
    console.error("Already speaking...");
    return;
  }
  if (textInput.value !== "") {
    // Add Background Animation
    body.style.background = "#141414 url(../img/wave.gif)";
    body.style.backgroundRepeat = "repeat-x";
    body.style.backgroundSize = "100% 100%";
    // Get Speak Text
    const speakText = new SpeechSynthesisUtterance(textInput.value);
    // Speak end
    speakText.onend = (e) => {
      console.log("Done Speaking...");
      body.style.background = "#343a40";
    };

    // Speak error
    speakText.onerror = (e) => {
      console.error("Something went wrong ");
    };
    // Selected Voice
    const selectedVoice =
      voiceSelect.selectedOptions[0].getAttribute("data-name");

    // Loop through Voices
    voices.forEach((voice) => {
      if (voice.name === selectedVoice) {
        speakText.voice = voice;
      }
    });

    // Set pitch and rate
    speakText.rate = rate.value;
    speakText.pitch = pitch.value;
    // Speak
    synth.speak(speakText);
  }
};
// EVENT LISTENERS

// Text form submit
textForm.addEventListener("submit", (e) => {
  e.preventDefault();
  speak();
  textInput.blur();
});

// Rate Value Change
rate.addEventListener("change", (e) => (rateValue.textContent = rate.value));
// Pitch Value Change
rate.addEventListener("change", (e) => (pitchValue.textContent = pitch.value));

// Voice Select Change

voiceSelect.addEventListener("change", (e) => speak());
