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
        question:"var x = Math.PI; here x=?",
        optionA:"3.141592653589793",
        optionB:"3.14",
        optionC:"3.1416",
        optionD:"3.14159",
        answer:1
    },
    {
        question:'What does 3+4+"7" evaluate to?',
        optionA:"Null",
        optionB:"77",
        optionC:"NaN",
        optionD:"347",
        answer:2
    },
    {
        question:" What is the similarity between var myString = new String('male') and var myStringLiteral = 'male'",
        optionA:"Both are object",
        optionB:"Both are primitive String",
        optionC:"Both can call String constructor function",
        optionD:"None of the above",
        answer:3
    },
    {
        question:"var object1 = { same: 'same' }; var object2 = { same: 'same' }; console.log(object1 === object2); here output is?",
        optionA:"undefined",
        optionB:"NaN",
        optionC:"true",
        optionD:"false",
        answer:4
    },
    {
        question:"Which one is true about this keyword?",
        optionA:"It is a context pointer",
        optionB:"It is a object pointer",
        optionC:"It is related with queue",
        optionD:"All the above",
        answer:1
    },
    {
        question:'In order to convert 4F (of base 16) to integer, the code used will be',
        optionA:"parseInt (4F, 16)",
        optionB:'parseInt ("4F", 16)',
        optionC:'parseInt (16,"4F")',
        optionD:"parseInt (16,4F)",
        answer:2
    },
    {
        question:"Which one is not used in JavaScript?",
        optionA:"Alert",
        optionB:"Confirm",
        optionC:"Prompt",
        optionD:"None of the above",
        answer:4
    },
    {
        question:"How we declare 3 dimension array in JavaScript?",
        optionA:"myArr=[{},{},{}]",
        optionB:"myArr=[][][]",
        optionC:"myArr=[[[]]]",
        optionD:"All are correct",
        answer:3
    },
    {
        question:"How will you get the Checkbox status whether it is checked or not?",
        optionA:"var status = document.getElementById('checkbox1').isChecked();",
        optionB:"var status = document.getElementById('checkbox1').isChecked;",
        optionC:"var status = document.getElementById('checkbox1').checked;",
        optionD:"var status = document.getElementById('checkbox1').checked();",
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
    }else if(num==6 && e==questions[4].answer){
        answer=true;
    }else if(num==7 && e==questions[5].answer){
        answer=true;
    }else if(num==8 && e==questions[6].answer){
        answer=true;
    }else if(num==9 && e==questions[7].answer){
        answer=true;
    }else if(num==10 && e==questions[8].answer){
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
            case 6:
                document.getElementById(questions[4].answer).classList.remove('btn-danger');
                document.getElementById(questions[4].answer).classList.add('btn-success');
            break;
            case 7:
                document.getElementById(questions[5].answer).classList.remove('btn-danger');
                document.getElementById(questions[5].answer).classList.add('btn-success');
            break;
            case 8:
                document.getElementById(questions[6].answer).classList.remove('btn-danger');
                document.getElementById(questions[6].answer).classList.add('btn-success');
            break;
            case 9:
                document.getElementById(questions[7].answer).classList.remove('btn-danger');
                document.getElementById(questions[7].answer).classList.add('btn-success');
            break;
            case 10:
                document.getElementById(questions[8].answer).classList.remove('btn-danger');
                document.getElementById(questions[8].answer).classList.add('btn-success');
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
    if(checked && num<=9){
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
    }else if(num==10){
        alert(score);
    }
    checked=false;
    clicked=false;
    locked=false;
    checkPressed=false;
    lockPressed=false;
}