document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Change career path text
    const careers = [
        "Data Analyst 📊",
        "Machine Learning Engineer 🤖",
        "AI Researcher 🧠",
        "Data Scientist 🔬",
        "Business Intelligence Developer 📈",
        "Big Data Engineer 🏗️",
        "Data Architect 🏛️",
        "Deep Learning Specialist 🎭",
        "Natural Language Processing Expert 🗣️",
        "Robotics Scientist 🤖",
        "Cloud Data Engineer ☁️",
        "Cybersecurity Data Analyst 🔐"
    ];

    window.changeText = (element) => {
        element.innerText = `Your Career Path: ${careers[Math.floor(Math.random() * careers.length)]}`;
    };

    // Scroll-to-top button
    const scrollToTopBtn = document.querySelector(".scroll-to-top");
    if (scrollToTopBtn) {
        window.onscroll = () => {
            scrollToTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
        };

        scrollToTopBtn.onclick = () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        };
    }

    // Modal handling
    const modal = document.getElementById("skillModal");
    if (modal) {
        const closeBtn = modal.querySelector(".close-btn");
        window.openModal = (title, text) => {
            document.getElementById("popup-title").innerText = title;
            document.getElementById("popup-text").innerText = text;
            modal.style.display = "block";
        };

        closeBtn.onclick = () => modal.style.display = "none";
        window.onclick = (event) => {
            if (event.target === modal) modal.style.display = "none";
        };
    }

    // Skill descriptions
    const skillDescriptions = {
        "Data Visualization 📊": "Data visualization is the graphical representation of information and data using visual elements such as charts, graphs, heatmaps, and dashboards. It is an approach to turn structured and unstructured data into graphical formats that make analysis accessible through better interpretation.",
        "Deep Learning 🎭": "Deep Learning is transforming the way machines understand, learn, and interact with complex data. Deep learning mimics neural networks of the human brain, enabling computers to autonomously uncover patterns and make informed decisions from vast amounts of unstructured data.",
        "Big Data 📡": "Huge amounts of structured, semi-structured, and unstructured data to extract insight meaning, from which one pattern can be designed that will be useful to take a decision for grabbing the new business opportunity, the betterment of product/service, and ultimately business growth. Data science process to make sense of Big data/huge amount of data that is used in business.",
        "Cloud Computing ☁️": "Cloud computing refers to the on-demand availability of computer system resources, including data storage and computing power, without direct active management by the user. It allows individuals and businesses to access computing services over the internet, eliminating the need for self-managing physical resources.",
        "AI Ethics ⚖️": "AI Ethics is a multidisciplinary field that focuses on the ethical implications of developing and using artificial intelligence (AI) systems. It aims to optimize the beneficial impact of AI while minimizing risks and adverse outcomes.",
        "Data Wrangling 🔧": "Data wrangling, also known as data munging, is the process of transforming and mapping raw data into a more usable format. This process is essential for ensuring that data is reliable, complete, and ready for analysis. Data wrangling involves several steps, each aimed at improving the quality and usability of the data."
    };

    // Skill buttons event delegation
    document.body.addEventListener("click", (event) => {
        if (event.target.classList.contains("skill-btn")) {
            const skillName = event.target.innerText;
            openModal(skillName, skillDescriptions[skillName] || "No description available.");
        }
    });

    // Skill popups
    const skillInfo = {
        "Data Analysis": "Data analysis refers to the practice of examining datasets to draw conclusions about the information they contain. It involves organizing, cleaning, and studying the data to understand patterns or trends. Data analysis helps to answer questions like 'What is happening' or 'Why is this happening'. It’s widely applied across various industries such as business, healthcare, marketing, finance, and scientific research to gain insights and solve problems.",
        "Machine Learning": "Machine learning is a subfield of artificial intelligence that uses algorithms trained on data sets to create models that enable machines to perform tasks that would otherwise only be possible for humans. It is a method of data analysis that automates analytical model building.",
        "Statistics": "Statistics is the study of data, including ways to gather, review, analyze, and draw conclusions from data. It is a mathematical discipline that involves the collection, analysis, interpretation, presentation, and organization of data. The two major areas of statistics are descriptive and inferential statistics.",
        "Python & SQL": "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Structured Query Language (SQL) is a domain-specific language used to manage data, especially in a relational database management system."
    };

    window.showPopup = (skill) => {
        const popup = document.createElement("div");
        popup.classList.add("popup");
        popup.innerHTML = `
            <h3>${skill}</h3>
            <p>Here’s some information about <strong>${skill}</strong>:</p>
            <p>${skillInfo[skill] || "No details available."}</p>
            <button class="popup-close">Close</button>
        `;
        document.body.appendChild(popup);
        popup.style.display = "block";

        popup.querySelector(".popup-close").onclick = () => popup.remove();
    };
});

document.addEventListener("DOMContentLoaded", () => {
    // FAQ data
    const faqData = {
        "What is Data Science?": "Data Science is an interdisciplinary field that uses statistics, machine learning, and data analysis to extract insights and knowledge from data.",
        "How does AI learn?": "AI learns by analyzing patterns in data, using algorithms to improve over time. Machine Learning is a common method for training AI models.",
        "What is the role of Python in data analysis?": "Python is widely used for data analysis due to its powerful libraries like Pandas, NumPy, and Scikit-learn, which simplify data processing.",
        "Is Cloud Computing necessary for AI?": "Cloud computing provides scalable storage and processing power, making it essential for training large AI models and handling big data efficiently.",
        "How do I start learning Machine Learning?": "Start with Python, learn the basics of statistics, then move on to machine learning libraries like TensorFlow, Scikit-learn, and PyTorch."
    };

    // Add FAQs section dynamically
    const faqSection = document.createElement("section");
    faqSection.innerHTML = `
        <h2>Frequently Asked Questions (FAQs)</h2>
        <div id="faq-container"></div>
    `;
    document.body.appendChild(faqSection);

    const faqContainer = document.getElementById("faq-container");

    // Create FAQ buttons
    Object.keys(faqData).forEach(question => {
        const button = document.createElement("button");
        button.classList.add("faq-btn"); // Keeping the style similar to skill buttons
        button.innerText = question;
        button.addEventListener("click", () => showPopup(question, faqData[question]));
        faqContainer.appendChild(button);
    });

    // FAQ popups
    function showPopup(title, text) {
        const popup = document.createElement("div");
        popup.classList.add("popup");
        popup.innerHTML = `
            <h3>${title}</h3>
            <p>${text}</p>
            <button class="popup-close">Close</button>
        `;
        document.body.appendChild(popup);
        popup.style.display = "block";

        popup.querySelector(".popup-close").onclick = () => popup.remove();
    }
});

document.addEventListener("DOMContentLoaded", function () {
    let timeLeft = 60; // Timer in seconds
    let timerDisplay = document.getElementById("timer");
    let quizContainer = document.getElementById("quizContainer");
    let submitBtn = document.getElementById("submitQuiz");
    let resultPopup = document.getElementById("quizResultPopup");
    let resultText = document.getElementById("quizResultText");
    let closePopupBtn = document.getElementById("closeQuizPopup");

    const correctAnswers = {
        q1: "A",
        q2: "B",
        q3: "C",
        q4: "D",
        q5: "A"
    };

    // Timer Function
    function startTimer() {
        let timer = setInterval(function () {
            if (timeLeft <= 0) {
                clearInterval(timer);
                submitQuiz(); // Auto-submit when time is up
            }
            timerDisplay.innerText = `Time Left: ${timeLeft}s`;
            timeLeft--;
        }, 1000);
    }

    // Start the timer when the page loads
    startTimer();

    // Quiz Submission Function
    function submitQuiz() {
        let score = 0;
        document.querySelectorAll(".quiz-question").forEach((question, index) => {
            let selectedOption = question.querySelector("input:checked");
            if (selectedOption) {
                let questionId = `q${index + 1}`;
                if (selectedOption.value === correctAnswers[questionId]) {
                    score++;
                }
            }
        });

        // Show Result in Popup
        resultText.innerText = `You scored ${score} out of 5!`;
        resultPopup.style.display = "block";
        document.getElementById('quiz-result').style.display = 'block';
        document.getElementById('quiz-result').style.display = 'flex';


    }

    // Submit Button Click Event
    submitBtn.addEventListener("click", submitQuiz);

    // Close Popup Button
    closePopupBtn.addEventListener("click", function () {
        resultPopup.style.display = "none";
    });

    // Close Popup on Outside Click
    window.addEventListener("click", function (event) {
        if (event.target === resultPopup) {
            resultPopup.style.display = "none";
        }
    });
});
