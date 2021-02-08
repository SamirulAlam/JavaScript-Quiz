let num=1;
let index=0;
let questions=[
    {
        question:"What is your name?",
        optionA:"Samir",
        optionB:"Amir",
        optionC:"Tamir",
        optionD:"Zamir",
        answer:1
    },
    {
        question:"What is your age?",
        optionA:"1",
        optionB:"2",
        optionC:"3",
        optionD:"4",
        answer:3
    },
    {
        question:"What is your gender?",
        optionA:"1",
        optionB:"2",
        optionC:"3",
        optionD:"4",
        answer:3
    },
    {
        question:"What is your casa?",
        optionA:"1",
        optionB:"2",
        optionC:"3",
        optionD:"4",
        answer:3
    }
]
let questionNo=document.getElementById("questionNo");
let question=document.getElementById("question");
let optionA=document.getElementById("1");
let optionB=document.getElementById("2");
let optionC=document.getElementById("3");
let optionD=document.getElementById("4");
let next=()=>{
    if(num<=4){
        num++;
        questionNo.innerHTML=num;
        question.innerHTML=questions[index].question;
        question.innerHTML=questions[index].question;
        optionA.innerHTML=questions[index].optionA;
        optionB.innerHTML=questions[index].optionB;
        optionC.innerHTML=questions[index].optionC;
        optionD.innerHTML=questions[index].optionD;
        index++;
    }
}