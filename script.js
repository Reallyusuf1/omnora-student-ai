function askAI() {

  let question = document.getElementById("userInput").value.toLowerCase();
  let response = document.getElementById("response");

  let answer = "";

  if (question.includes("business")) {
    answer = "Business is the activity of buying and selling goods or services to earn profit.";
  }

  else if (question.includes("html")) {
    answer = "HTML stands for HyperText Markup Language. It is used to create the structure of websites.";
  }

  else if (question.includes("css")) {
    answer = "CSS stands for Cascading Style Sheets. It is used to style and design websites.";
  }

  else if (question.includes("javascript")) {
    answer = "JavaScript is a programming language used to make websites interactive and dynamic.";
  }

  else if (question.includes("artificial intelligence") || question.includes("ai")) {
    answer = "Artificial Intelligence (AI) is technology that enables computers to learn, reason, and solve problems like humans.";
  }

  else if (question.includes("photosynthesis")) {
    answer = "Photosynthesis is the process by which plants use sunlight, water, and carbon dioxide to make food.";
  }

  else if (question.includes("computer")) {
    answer = "A computer is an electronic device that processes data and performs tasks according to instructions.";
  }

  else if (question.includes("internet")) {
    answer = "The Internet is a global network that connects computers and devices around the world.";
  }

  else if (question.includes("mathematics") || question.includes("math")) {
    answer = "Mathematics is the study of numbers, quantities, shapes, and patterns.";
  }

  else {
    answer = "Sorry, I don't know the answer yet. Omnora Student AI is still learning.";
  }

  response.innerHTML = answer;
}
