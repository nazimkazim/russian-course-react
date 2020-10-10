const tts = window.speechSynthesis;

export const speak = (e, lang) => {
  //console.log(e.target.value)
  //console.log(e.target.value.replace(/<\/?[^>]+(>|$)/g, ""))
  let word = e.target.value.replace(/<\/?[^>]+(>|$)/g, "")
  let toSpeak = new SpeechSynthesisUtterance(word);
  toSpeak.lang = lang;
  tts.speak(toSpeak);
};