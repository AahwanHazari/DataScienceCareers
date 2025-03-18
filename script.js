
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
            case 'Data Visualization 📊':
                skillDescription = 'Data visualization is the graphical representation of information and data using visual elements such as charts, graphs, heatmaps, and dashboards. It is an approach to turn structured and unstructured data into graphical formats that make analysis accessible through better interpretation.';
                break;
            case 'Deep Learning 🎭':
                skillDescription = 'Deep Learning is transforming the way machines understand, learn, and interact with complex data. Deep learning mimics neural networks of the human brain, it enables computers to autonomously uncover patterns and make informed decisions from vast amounts of unstructured data.';
                break;
            case 'Big Data 📡':
                skillDescription = 'Huge amounts of structured, semi-structured, and unstructured data to extract insight meaning, from which one pattern can be designed that will be useful to take a decision for grabbing the new business opportunity, the betterment of product/service, and ultimately business growth. Data science process to make sense of Big data/huge amount of data that is used in business.';
                break;
            case 'Cloud Computing ☁️':
                skillDescription = 'Cloud computing refers to the on-demand availability of computer system resources, including data storage and computing power, without direct active management by the user. It allows individuals and businesses to access computing services over the internet, eliminating the need for self-managing physical resources.';
                break;
            case 'AI Ethics ⚖️':
                skillDescription = 'AI Ethics is a multidisciplinary field that focuses on the ethical implications of developing and using artificial intelligence (AI) systems. It aims to optimize the beneficial impact of AI while minimizing risks and adverse outcomes.';
                break;
            case 'Data Wrangling 🔧':
                skillDescription = 'Data wrangling, also known as data munging, is the process of transforming and mapping raw data into a more usable format. This process is essential for ensuring that data is reliable, complete, and ready for analysis. Data wrangling involves several steps, each aimed at improving the quality and usability of the data.';
                break;
        }

        openModal(skillName, skillDescription);
    });
});


function showPopup(skill) {
    const skillInfo = {
        "Data Analysis": "Data analysis refers to the practice of examining datasets to draw conclusions about the information they contain. It involves organizing, cleaning, and studying the data to understand patterns or trends. Data analysis helps to answer questions like “What is happening” or “Why is this happening”. It’s widely applied across various industries such as business, healthcare, marketing, finance, and scientific research to gain insights and solve.",
        "Machine Learning": "Machine learning is a subfield of artificial intelligence that uses algorithms trained on data sets to create models that enable machines to perform tasks that would otherwise only be possible for humans. It is a method of data analysis that automates analytical model building.",
        "Statistics": "Statistics is the study of data, including ways to gather, review, analyze, and draw conclusions from data. It is a mathematical discipline that involves the collection, analysis, interpretation, presentation, and organization of data. The two major areas of statistics are descriptive and inferential statistics.",
        "Python & SQL": "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Structured Query Language (SQL) is a domain-specific language used to manage data, especially in a relational database management system."
    };
    
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML = `
        <h3>${skill}</h3>
        <p>Here’s some information about <strong>${skill}</strong>:</p>
        <p>${skillInfo[skill]}</p>
        <button class="popup-close" onclick="closePopup()">Close</button>
    `;
    
    document.body.appendChild(popup);
    popup.style.display = 'block'; 
}

function closePopup() {
    const popup = document.querySelector('.popup');
    if (popup) {
        popup.remove();
    }
}


function closePopup() {
    const popup = document.querySelector('.popup');
    if (popup) {
        popup.style.display = 'none'; 
        popup.remove(); 
    }
}
