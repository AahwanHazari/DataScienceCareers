
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});

function changeText(element) {
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
    const randomCareer = careers[Math.floor(Math.random() * careers.length)];
    element.innerText = "Your Career Path: " + randomCareer;
}


window.onscroll = function() {
    const button = document.querySelector('.scroll-to-top');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

document.querySelector('.scroll-to-top').onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};


const modal = document.getElementById('skillModal');
const closeBtn = document.querySelector('.close-btn');


function openModal(title, text) {
    document.getElementById('popup-title').innerText = title;
    document.getElementById('popup-text').innerText = text;
    modal.style.display = "block";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


document.querySelectorAll('.skill-btn').forEach(button => {
    button.addEventListener('click', function() {
        const skillName = button.innerText;
        let skillDescription = '';

        switch (skillName) {
            case 'Python 🐍':
                skillDescription = 'Python is a powerful programming language used for data analysis, machine learning, and automation.';
                break;
            case 'SQL 💾':
                skillDescription = 'SQL is a language used for managing and querying relational databases.';
                break;
            case 'Data Visualization 📊':
                skillDescription = 'Data visualization is the graphical representation of data to help make decisions through charts and graphs.';
                break;
            case 'Machine Learning 🤖':
                skillDescription = 'Machine Learning is a subset of AI that enables computers to learn from data without explicit programming.';
                break;
            case 'Deep Learning 🎭':
                skillDescription = 'Deep Learning is a subset of machine learning that uses neural networks with many layers to analyze data.';
                break;
            case 'Big Data 📡':
                skillDescription = 'Big Data refers to large and complex datasets that require advanced tools to store, analyze, and process.';
                break;
            case 'Cloud Computing ☁️':
                skillDescription = 'Cloud computing allows you to store and process data over the internet, rather than on local servers or personal computers.';
                break;
            case 'Statistics 📈':
                skillDescription = 'Statistics is the study of data collection, analysis, interpretation, and presentation.';
                break;
            case 'AI Ethics ⚖️':
                skillDescription = 'AI Ethics is the study of ethical issues that arise with the use of artificial intelligence and machine learning.';
                break;
            case 'Data Wrangling 🔧':
                skillDescription = 'Data wrangling is the process of cleaning and preparing raw data for analysis.';
                break;
        }

        openModal(skillName, skillDescription);
    });
});


function showPopup(skill) {
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML = `
        <h3>${skill}</h3>
        <p>Here’s some information about <strong>${skill}</strong>:</p>
        <p>
            <strong>Data Analysis:</strong> Involves collecting, cleaning, and analyzing data to extract insights and help make decisions.<br>
            <strong>Machine Learning:</strong> A field of AI that uses algorithms to identify patterns in data and make predictions.<br>
            <strong>Statistics:</strong> Involves interpreting data through probability and statistical models.<br>
            <strong>Python & SQL:</strong> Python is a programming language used for data analysis, while SQL is used for database management.
        </p>
        <button class="popup-close" onclick="closePopup()">Close</button>
    `;
    document.body.appendChild(popup);
    popup.style.display = 'block'; 
}


function closePopup() {
    const popup = document.querySelector('.popup');
    if (popup) {
        popup.style.display = 'none'; 
        popup.remove(); 
    }
}
