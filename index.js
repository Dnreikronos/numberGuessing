const minNum = 1;
const maxNum = 100;
const correctAnswer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
const submitBtn = document.getElementById("submitBtn")
let attempts = 0;

let myLabel = document.getElementById("myLabel");


let myH3 = document.getElementById("myH3");
let running ;



submitBtn.onclick =  function() {
    let myNumber = document.getElementById("myNumber").value;
    running = true;

    console.log(correctAnswer);

    while(running){

        if (myNumber < minNum || myNumber > maxNum) {
            window.alert("Please enter a valid number!");
        }
        else{
            attempts ++;
            if(myNumber < correctAnswer){
                myH3.innerHTML = (`TO LOW! TRY AGAIN`);
                document.reset();
                
            }
            else if(myNumber > correctAnswer){
                myH3.innerHTML = (`TO HIGH! TRY AGAIN`);
                document.reset();
            }
            else{
                myH3.innerHTML = (`CORRECT! The answer was ${correctAnswer}. It took you ${attempts} attempts.`)
                running = false;
            }
        }
    }
}
