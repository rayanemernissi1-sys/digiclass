// ================================
// OUVRIR LA FENÊTRE
// ================================

function openQuestion() {

    document.getElementById("questionModal").style.display = "flex";

}


// ================================
// FERMER LA FENÊTRE
// ================================

function closeQuestion() {

    document.getElementById("questionModal").style.display = "none";

}


// ================================
// ALLER AUX QUESTIONS
// ================================

function scrollToQuestions() {

    document.getElementById("questions").scrollIntoView({
        behavior: "smooth"
    });

}


// ================================
// CLIQUER SUR UN COURS
// ================================

function courseClicked(courseName) {

    alert("Vous avez sélectionné : " + courseName);

}


// ================================
// RECHERCHE DES QUESTIONS
// ================================

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


// ================================
// VOTER
// ================================

function vote(button, value) {

    const voteBox = button.parentElement;

    const score = voteBox.querySelector("strong");

    let number = parseInt(score.innerText);


    number = number + value;


    score.innerText = number;

}


// ================================
// PUBLIER UNE QUESTION
// ================================

function publishQuestion() {


    // Récupérer les valeurs

    const category =
        document.getElementById("questionCategory").value;


    const title =
        document.getElementById("questionTitle").value.trim();


    const text =
        document.getElementById("questionText").value.trim();



    // Vérifier que les champs sont remplis

    if (title === "" || text === "") {

        alert("Veuillez remplir tous les champs.");

        return;

    }



    // Créer la nouvelle question

    const question = document.createElement("article");

    question.className = "question-card";


    question.innerHTML = `

        <div class="question-main">

            <span class="category">
                ${category}
            </span>

            <h3>
                ${title}
            </h3>

            <p>
                ${text}
            </p>

            <div class="question-info">

                👤 Vous
                &nbsp; • &nbsp;

                🕐 À l'instant
                &nbsp; • &nbsp;

                💬 0 réponses

            </div>

        </div>


        <div class="vote">

            <button onclick="vote(this, 1)">
                ▲
            </button>

            <strong>
                0
            </strong>

            <button onclick="vote(this, -1)">
                ▼
            </button>

        </div>

    `;



    // Ajouter la question en haut

    const questionList =
        document.getElementById("questionList");


    questionList.prepend(question);



    // Fermer la fenêtre

    closeQuestion();



    // Vider les champs

    document.getElementById("questionTitle").value = "";

    document.getElementById("questionText").value = "";



    // Aller vers les questions

    document.getElementById("questions").scrollIntoView({
        behavior: "smooth"
    });

}


// ================================
// FERMER LE MODAL EN CLIQUANT DEHORS
// ================================

window.onclick = function(event) {

    const modal =
        document.getElementById("questionModal");


    if (event.target === modal) {

        closeQuestion();

    }

};
