var ques=document.getElementById("ques");
var anss=document.querySelectorAll("label");
var currques=0;
var anschck=document.querySelectorAll("input");
var Ques=[[
    "Which type of JavaScript language is ___",
    "Object-Oriented",
    "Object-Based",
    "Assembly-language",
    "High-level",
    "Object-Based"
],[
    "Which of the following variables takes precedence over the others if the names are the same?",
    "Global variable",
    "The local element",
    "The two of the above",
    "None of the above",
    "The local element",
],[
    "Which of the following type of a variable is volatile?",
    "Mutable variable",
    "Dynamic variable",
    "Volatile variable",
    "Immutable variable",
    "Mutable variable",
]];

function chngeques(){
    ques.innerText=Ques[currques][0];
    for(let i=0;i<anss.length;i++){
        anss[i].innerText=Ques[currques][i+1];
    }
}
chngeques();
document.getElementById("submitt").addEventListener("click",function(){
    if(document.getElementById("submitt").innerText=="Next"){
        if(currques<Ques.length-1){
        currques++;
        chngeques();
        }
        else{
            document.getElementById("card").hidden=true;
            document.getElementById("submitt").hidden=true;
            let finish=document.createElement("h2");
            finish.innerText="Thank You ! You have done amazing."
            finish.align="center";
            document.body.appendChild(finish);
        }
        document.getElementById("show").hidden=true;
        for(let i=0;i<anss.length;i++){
            anschck[i].checked=false;
        }
        document.getElementById("submitt").innerText="Submit";
            document.getElementById("submitt").style.color="black";
            document.getElementById("submitt").style.backgroundColor="gold";
    }else{
        for(let i=0;i<anss.length;i++){
            if(anschck[i].checked&&anss[i].textContent==Ques[currques][5]){
                document.getElementById("show").innerText="Hooray! Correct answer.";
                document.getElementById("show").style.color="rgb(75, 116, 75)";
                document.getElementById("show").style.backgroundColor="rgba(100, 255, 100, 0.5)";
                document.getElementById("show").hidden=false;
                document.getElementById("submitt").innerText="Next";
                document.getElementById("submitt").style.color="white";
                document.getElementById("submitt").style.backgroundColor="rgb(75, 116, 75)";
            }
            else if(anschck[i].checked&&anss[i].textContent!=Ques[currques][5]){
                document.getElementById("show").innerText="Gosh! Incorrect answer.";
                document.getElementById("show").style.color="#A11727";
                document.getElementById("show").style.backgroundColor="#F7C9CF";
                document.getElementById("show").hidden=false;
            }
        }
    }
})