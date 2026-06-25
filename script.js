function askAI() {
  let question = document.getElementById("userInput").value;

  if (question.trim() === "") {
    document.getElementById("response").innerHTML =
      "Please enter a question.";
    return;
  }

  document.getElementById("response").innerHTML =
    "You asked: " + question +
    "<br><br>Omnora Student AI is still under development. Real AI responses will be added soon.";
}
