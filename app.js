const question = [
    {
        question: "Which is largest animal in the world?",
        answer :  [
            {
                Text:"shark", correct:false
            },
            {
                Text:"Blue wheel", correct:true
            },
            {
                Text:"Elephant", correct:false
            },
            {
                Text:"Giraffe", correct:false
            },
        ]
    },



        {
            question: "Which is the smallest country in the world?",
            answer:[
                {
                    Text:"Vatican city", correct:true
                },
                {
                    Text:"Bhuttan", correct:false
                },
                {
                    Text:"Nipal", correct:false
                },
                {
                    Text:"Siri lanka", correct:false
                },
            ]
        },


        {
            question: "Which is largest DESERT in the world?",
            answer:[
                {
                    Text:"Kalahari", correct:false
                },
                {
                    Text:"Ghobi", correct:false
                },
                {
                    Text:"Sahara", correct:false
                },
                {
                    Text:"Antarctica", correct:true
                },
            ]
        },



        {
            question: "Which is smallest continent in the world?",
            answer:[
                {
                    Text:"Asia", correct:false
                },
                {
                    Text:"Australia", correct:true
                },
                {
                    Text:"Arctic", correct:false
                },
                {
                    Text:"Africa", correct:false
                },
            ]
        },

        
        {
            question: "What is the capital city of Australia?",
            answer:[
                {
                    Text:"Sydney", correct:false
                },
                {
                    Text:"Perth", correct:false
                },
                {
                    Text:"Canberra", correct:true
                },
                {
                    Text:"Malbourne", correct:false
                },
            ]
        }

];





const questionElement=document.getElementById("question");
const answerbutton =document.getElementById("answer-button");
const nextbutton=document.getElementById("next-btn");


let currentQuestionIndex=0;
let Score=0;

function startQuiz(){
    currentQuestionIndex=0;
    Score=0;
    nextbutton.innerHTML="Next";
    showQuestion();
}


function showQuestion(){
    resetState();
    let currentQuestion= question[currentQuestionIndex];
    let questionNo=currentQuestionIndex + 1 ;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;


    currentQuestion.answer.forEach(answer => {
        const button= document.createElement("button");
        button.innerHTML=answer.Text;
        button.classList.add("btn");
        answerbutton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click" , selectAnswer);
    });
}



function resetState(){
 nextbutton.style.display = "none";
 while(answerbutton.firstChild){
    answerbutton.removeChild(answerbutton.firstChild);
 }
}
 
function selectAnswer(e){
    const selectedBtn = e.target;
    const iscorrect = selectedBtn.dataset.correct ==="true";
    if(iscorrect){
        selectedBtn.classList.add("correct");
        Score++;
    } 
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerbutton.children).forEach(button =>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextbutton.style.display="block";
}


 function showScore(){
    resetState();
    questionElement.innerHTML = `your scored ${Score} out of ${question.length}!`;
    nextbutton.innerHTML ="play again";
    nextbutton.style.display= "block";
 }


function handleNextbutton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < question.length){
        showQuestion();
    } else{
        showScore();
    }
}



nextbutton.addEventListener("click" , () =>
{
    if(currentQuestionIndex < question.length){
        handleNextbutton();
    }
    else{
        startQuiz();
    }
});


startQuiz();