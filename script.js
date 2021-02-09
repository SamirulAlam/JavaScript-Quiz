let num=1;
let index=0;
let answer=true;
let score=0;
let checkPressed=false;
let lockPressed=false;
let checked=false;
let locked=false;
let clicked=false;
const winSound=new Audio("./sounds/cash.mp3");
const lossSound=new Audio("./sounds/aww.mp3");
const nextSound=new Audio("./sounds/Kbc.mp3");
const lockSound=new Audio("./sounds/Kbc Option Lock Tune.mp3");
const startSound=new Audio("./sounds/Kaun Banega Karodpati.mp3");

window.onload=function(){
    var person = prompt("Please enter your name");
    if (person != null) {
        startSound.play();
    }
}


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
        answer:2
    },
    {
        question:"What is your gender?",
        optionA:"1",
        optionB:"2",
        optionC:"3",
        optionD:"4",
        answer:4
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


let choice =(e)=>{
    if(!locked){
        check(e);
        for(let i=1;i<5;i++){
            document.getElementById(i).classList.remove('btn-secondary');
        }
        document.getElementById(e).classList.add('btn-secondary');
        clicked=true;
    }
}

let check=(e)=>{
    if(num==1 && e==3){
        answer=true;
    }else if(num==2 && e==questions[0].answer){
        answer=true;
    }else if(num==3 && e==questions[1].answer){
        answer=true;
    }else if(num==4 && e==questions[2].answer){
        answer=true;
    }else if(num==5 && e==questions[3].answer){
        answer=true;
    }else{
        answer=false;
    }
}

let showResult=()=>{
    if(locked && !checkPressed){
        checked=true;
        if(answer){
            document.body.style.backgroundColor = "green";
            score++;
            winSound.play();
        }else{
            document.body.style.backgroundColor = "red";
            lossSound.play();
        }

        for(let i=1;i<5;i++){
            document.getElementById(i).classList.add('btn-danger');
        }

        switch(num) {
            case 1:
                document.getElementById(3).classList.remove('btn-danger');
                document.getElementById(3).classList.add("btn-success");
            break;
            case 2:
                document.getElementById(questions[0].answer).classList.remove('btn-danger');
                document.getElementById(questions[0].answer).classList.add('btn-success');
            break;
            case 3:
                document.getElementById(questions[1].answer).classList.remove('btn-danger');
                document.getElementById(questions[1].answer).classList.add('btn-success');
            break;
            case 4:
                document.getElementById(questions[2].answer).classList.remove('btn-danger');
                document.getElementById(questions[2].answer).classList.add('btn-success');
            break;
            case 5:
                document.getElementById(questions[3].answer).classList.remove('btn-danger');
                document.getElementById(questions[3].answer).classList.add('btn-success');
            break;
            default:
                console.log("wrong")
        }
        checkPressed=true;
    }
    
}

let lock=()=>{
    if(clicked && !lockPressed){
        locked=true;
        lockSound.play();
        lockPressed=true;
    }

}

let next=()=>{
    document.body.style.backgroundColor = "white";
    for(let i=1;i<5;i++){
        document.getElementById(i).classList.remove('btn-danger');
        document.getElementById(i).classList.remove('btn-success');
        document.getElementById(i).classList.remove('btn-secondary');
    }
    if(checked && num<=4){
        num++;
        questionNo.innerHTML=num;
        question.innerHTML=questions[index].question;
        question.innerHTML=questions[index].question;
        optionA.innerHTML=questions[index].optionA;
        optionB.innerHTML=questions[index].optionB;
        optionC.innerHTML=questions[index].optionC;
        optionD.innerHTML=questions[index].optionD;
        index++;
        nextSound.play();
    }else if(num==5){
        alert(score);
    }
    checked=false;
    clicked=false;
    locked=false;
    checkPressed=false;
    lockPressed=false;
}