// ===== OMNORA STUDENT AI - SMART RESPONSES =====

function askAI() {
    // Get the question from the input field
    let question = document.getElementById("userQuestion").value.trim().toLowerCase();
    let response = document.getElementById("responseText");

    // If no question is asked
    if (question === "") {
        response.innerHTML = "Please type a question to get started. 🧠";
        return;
    }

    let answer = "";

    // ===== SUBJECT-BASED RESPONSES =====

    // BUSINESS & ECONOMICS
    if (question.includes("business") || question.includes("economy") || question.includes("profit") || question.includes("market")) {
        answer = "Business is the activity of buying and selling goods or services to earn profit. In economics, businesses play a key role in creating value, generating employment, and driving innovation in the market.";
    }

    // HTML
    else if (question.includes("html") || question.includes("hypertext") || question.includes("markup") || question.includes("web structure")) {
        answer = "HTML stands for HyperText Markup Language. It is the standard language used to create and structure content on the web. HTML uses elements like headings, paragraphs, links, and images to build web pages.";
    }

    // CSS
    else if (question.includes("css") || question.includes("cascading") || question.includes("style") || question.includes("design") || question.includes("website design")) {
        answer = "CSS stands for Cascading Style Sheets. It is used to control the presentation and layout of web pages. With CSS, you can change colors, fonts, spacing, and create responsive designs for different screen sizes.";
    }

    // JAVASCRIPT
    else if (question.includes("javascript") || question.includes("js") || question.includes("interactive") || question.includes("dynamic website")) {
        answer = "JavaScript is a powerful programming language that makes websites interactive and dynamic. It allows developers to add features like animations, form validation, real-time updates, and much more. JavaScript runs in the browser and is essential for modern web development.";
    }

    // ARTIFICIAL INTELLIGENCE
    else if (question.includes("artificial intelligence") || question.includes("ai") || question.includes("machine learning") || question.includes("deep learning") || question.includes("neural network")) {
        answer = "Artificial Intelligence (AI) is a field of computer science that enables machines to simulate human intelligence. AI includes technologies like machine learning, natural language processing, computer vision, and robotics. AI is transforming industries from healthcare to education, and it's the core technology behind Omnora Student AI!";
    }

    // PHOTOSYNTHESIS
    else if (question.includes("photosynthesis") || question.includes("plant") || question.includes("sunlight") || question.includes("chlorophyll")) {
        answer = "Photosynthesis is the process by which plants, algae, and some bacteria convert sunlight, water, and carbon dioxide into glucose (food) and oxygen. This process is essential for life on Earth as it produces oxygen and serves as the foundation of the food chain.";
    }

    // COMPUTER
    else if (question.includes("computer") || question.includes("cpu") || question.includes("processor") || question.includes("hardware")) {
        answer = "A computer is an electronic device that processes data and performs tasks according to programmed instructions. It consists of hardware (physical components like CPU, memory, and storage) and software (programs and operating systems). Computers are used in almost every field today.";
    }

    // INTERNET
    else if (question.includes("internet") || question.includes("web") || question.includes("online") || question.includes("network") || question.includes("www")) {
        answer = "The Internet is a global network of interconnected computers and servers that communicate using standardized protocols. It enables billions of people worldwide to access information, communicate, and share data. The World Wide Web (WWW) is a service that runs on the Internet, providing websites and web applications.";
    }

    // MATHEMATICS
    else if (question.includes("mathematics") || question.includes("math") || question.includes("algebra") || question.includes("geometry") || question.includes("calculus") || question.includes("number")) {
        answer = "Mathematics is the study of numbers, quantities, shapes, patterns, and their relationships. It includes branches like algebra (equations and variables), geometry (shapes and spaces), calculus (change and motion), and statistics (data analysis). Mathematics is the language of science and technology.";
    }

    // SCIENCE (general)
    else if (question.includes("science") || question.includes("physics") || question.includes("chemistry") || question.includes("biology") || question.includes("experiment")) {
        answer = "Science is the systematic study of the natural world through observation, experimentation, and reasoning. It includes branches like Physics (matter and energy), Chemistry (substances and reactions), and Biology (living organisms). Scientific discoveries have shaped modern civilization and continue to solve global challenges.";
    }

    // HISTORY
    else if (question.includes("history") || question.includes("past") || question.includes("ancient") || question.includes("civilization") || question.includes("world war")) {
        answer = "History is the study of past events, societies, and civilizations. It helps us understand how human societies have evolved, the causes and consequences of major events, and how our present world has been shaped by the past. Key areas include ancient civilizations, world wars, and social movements.";
    }

    // GEOGRAPHY
    else if (question.includes("geography") || question.includes("map") || question.includes("country") || question.includes("continent") || question.includes("ocean") || question.includes("climate")) {
        answer = "Geography is the study of Earth's landscapes, environments, and the relationships between people and their environments. It includes physical geography (landforms, climate, ecosystems) and human geography (population, culture, economics). Geography helps us understand global connections and environmental challenges.";
    }

    // LITERATURE
    else if (question.includes("literature") || question.includes("book") || question.includes("novel") || question.includes("poetry") || question.includes("author") || question.includes("writing")) {
        answer = "Literature is the art of written works, including fiction, non-fiction, poetry, and drama. It reflects human experiences, ideas, and emotions across cultures and time periods. Studying literature develops critical thinking, empathy, and an appreciation for language and storytelling.";
    }

    // PROGRAMMING (general)
    else if (question.includes("programming") || question.includes("coding") || question.includes("software") || question.includes("developer") || question.includes("algorithm")) {
        answer = "Programming is the process of creating instructions for computers to execute. It involves writing code in programming languages like Python, Java, C++, and JavaScript. Programming is used to build websites, apps, games, AI systems, and much more. It requires problem-solving skills, logical thinking, and creativity.";
    }

    // STUDY TIPS
    else if (question.includes("study") || question.includes("exam") || question.includes("test") || question.includes("revision") || question.includes("prepare")) {
        answer = "Here are some effective study tips: 1) Set clear goals and break them into smaller tasks. 2) Use active recall and spaced repetition to improve memory. 3) Create a quiet, organized study environment. 4) Take regular breaks using the Pomodoro technique (25 mins study, 5 mins break). 5) Practice with quizzes and past exam papers. 6) Get enough sleep and stay hydrated. Remember, consistency is key!";
    }

    // GREETINGS
    else if (question.includes("hello") || question.includes("hi") || question.includes("hey") || question.includes("good morning") || question.includes("good afternoon") || question.includes("good evening")) {
        answer = "Hello! 👋 Welcome to Omnora Student AI. I'm here to help you learn faster and understand deeper. What subject or topic would you like to explore today?";
    }

    // THANK YOU
    else if (question.includes("thank") || question.includes("thanks") || question.includes("appreciate") || question.includes("grateful")) {
        answer = "You're welcome! 😊 I'm glad I could help. If you have more questions, feel free to ask anytime. Happy learning with Omnora Student AI! 🚀";
    }

    // DEFAULT RESPONSE
    else {
        answer = "Sorry, I don't know the answer yet. 😅 Omnora Student AI is still learning new topics every day. Try asking about subjects like Business, HTML, CSS, JavaScript, AI, Photosynthesis, Computer, Internet, Mathematics, Science, History, Geography, or Literature. Or ask for study tips! 🧠";
    }

    // Display the answer
    response.innerHTML = answer;
}

// ===== AUTOMATIC RESPONSE ON ENTER KEY =====
document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("userQuestion");
    const askBtn = document.getElementById("askBtn");

    if (input) {
        input.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                askAI();
            }
        });
    }

    if (askBtn) {
        askBtn.addEventListener("click", function(event) {
            event.preventDefault();
            askAI();
        });
    }
});
