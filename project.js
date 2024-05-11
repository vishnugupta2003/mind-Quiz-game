const questions = [{
    'que': 'which of the following is a markup language?',
    'a': 'HTML',
    'b': 'CSS',
    'c': 'Javascript',
    'd': 'PHP',
    'correct': 'a'
},
{ 
    'que': 'what year was Javascript launched?',
    'a':"1996",
    'b': "1995",
    'c': "1994",
    'd':"none of the above",
    'correct': "b"
},
{
    'que': 'how many properties are in flex box?',
    'a': "3",
    'b': "2",
    'c': "5",
    'd': "none of the above",
    'correct':'a',
}
]
let index = 0;
let total = questions.length;
let right =0,
wrong = 0;
const quesBox = document.getElementById("quesBox");
const optionInputs =document.querySelectorAll('.options')
const loadQuestion = () => {
    if(index === total){
        return endQuiz();
    }
    reset();
    const data = questions[index]
    
    quesBox.innerText = `${index +1})${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}
const submitquiz = ()=>{
    const data = questions[index];
    const ans = getAnswer()
    if(ans == data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}
const getAnswer =() => {
    let Answer;
    optionInputs.forEach(
        (input)=>{
            if (input.checked){
                Answer =  input.value;
            
                    
            }
        }
    )
    return Answer;
 }
const reset =() => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}
const endQuiz =() => {
    document.getElementById("box").innerHTML =`
    <h3>Thank you for playing the quiz<h3/>
    <h2> ${right} / ${total} are correct<h2/>`
}
loadQuestion();