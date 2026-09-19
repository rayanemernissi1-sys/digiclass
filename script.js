function openQuestion() {
    document.getElementById("questionModal").style.display = "flex";
}

function closeQuestion() {
    document.getElementById("questionModal").style.display = "none";
}

function scrollToQuestions() {
    document.getElementById("questions").scrollIntoView({
        behavior: "smooth"
    });
}

function searchQuestions() {

    const input = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const questions = document.querySelectorAll(".question-card");

    questions.forEach(question => {

        const text = question.innerText.toLowerCase();

        if (text.includes(input)) {
            question.style.display = "flex";
        } else {
            question.style.display = "none";
        }

    });
}

window.onclick = function(event) {

    const modal = document.getElementById("questionModal");

    if (event.target === modal) {
        closeQuestion();
    }

}
