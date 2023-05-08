// SET GREETING MESSAGE //
const greetingMessageElement = document.getElementById("greeting-message");

const d = new Date();
const hour = d.getHours();
const greetingMessage = (() => {
  if (hour >= 21) return "Nos da";
  else if (hour >= 17) return "Noswaith dda";
  else if (hour >= 12) return "Prynhawn da";
  else return "Bore da";
})();

greetingMessageElement.innerText = greetingMessage;
