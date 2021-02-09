let num=1;
let index=0;
let answer=true;
let score=0;
let selected=true;
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

let lock=(e)=>{
    check(e);
    for(let i=1;i<5;i++){
        document.getElementById(i).classList.remove('btn-secondary');
    }
    document.getElementById(e).classList.add('btn-secondary');
}

let check=(e)=>{
    if(num==1 && e==3){
        answer=true;
        return e;
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
    if(answer){
        score++;
    }
    switch(num) {
        case 1:
            document.getElementById(3).classList.add("btn-success");
          break;
        case 2:
            document.getElementById(questions[0].answer).classList.add('btn-success');
          break;
        case 3:
            document.getElementById(questions[1].answer).classList.add('btn-success');
          break;
        case 4:
            document.getElementById(questions[2].answer).classList.add('btn-success');
          break;
        case 5:
            document.getElementById(questions[3].answer).classList.add('btn-success');
          break;
        default:
          console.log("wrong")
      }
    
}