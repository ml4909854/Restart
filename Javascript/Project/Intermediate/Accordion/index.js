 const questions = [
            {
                question: "What is HTML?",
                answer: "HTML is the standard language used to create web pages."
            },
            {
                question: "What is CSS?",
                answer: "CSS is used to style and design web pages."
            },
            {
                question: "What is JavaScript?",
                answer: "JavaScript is a programming language used to add interactivity to websites."
            },
            {
                question: "What is DOM?",
                answer: "DOM stands for Document Object Model. It allows JavaScript to interact with HTML elements."
            },
            {
                question: "What is localStorage?",
                answer: "localStorage allows you to store data in the browser even after page reload."
            },
            {
                question: "What is an API?",
                answer: "API is a way for applications to communicate with each other."
            }
        ];

const container = document.getElementById("container");

function Accordion(){
    container.innerHTML = "";

    questions.forEach((ele)=>{

        const box = document.createElement("div");

        const button = document.createElement("button");
        button.innerText = ele.question;

        const answer = document.createElement("p");
        answer.innerText = ele.answer;
        answer.style.display = "none";

        button.addEventListener("click", ()=>{
            answer.style.display =
                answer.style.display === "none" ? "block" : "none";
        });

        box.append(button, answer);
        container.append(box);
    });
}

Accordion();