const date = new Date(); 
const current_time = date.getHours();
console.log(current_time)
  

window.addEventListener('load', () => {
    const textArea = document.querySelectorAll(".time-block");   
    
    const timeBlock = textArea[0]

    for (let i = 0; i < textArea.length; i++) { 
        let hourEl = textArea[i]
        console.log(hourEl);
        const hourString = hourEl.getAttribute("id")
        console.log(hourString, "what's this?");
        const hour = parseInt(hourString)
        if(hour > current_time) {
        let timeBlock = document.getElementsByClassName(".time-block");
        timeBlock[i].classList.add("future")
        }
        
        
                
    
    
    }
            
})
                    // if (nineAm > current_time) {
//     timeBlock.style.backgroundColor = 'red';
// } else {
//     timeBlock.style.backgroundColor = 'green';
// }console.log(timeColor); 

            // block.classList.add('past')
            // block.classList.add('present')
            // block.classList.add('future')
            // document.getElementById(a).value = localStorage.getItem(a)     
        
        
    

    const taskRows = document.querySelector(".code-rows");
    const containerDiv = document.querySelector(".container");
    
    containerDiv.addEventListener('submit', (e) => {
        

        const tasks = input.value;

        if (!tasks) {
            alert("You must enter a task");
        }
    })



document.getElementById('save-task1').addEventListener("click", function() {
    localStorage.setItem('9', document.getElementById('9').value)
})
document.getElementById('save-task2').addEventListener("click", function() {
    localStorage.setItem('10', document.getElementById('10').value)
})
document.getElementById('save-task3').addEventListener("click", function() {
    localStorage.setItem('11', document.getElementById('11').value)
})
document.getElementById('save-task4').addEventListener("click", function() {
    localStorage.setItem('12', document.getElementById('12').value)
})
document.getElementById('save-task5').addEventListener("click", function() {
    localStorage.setItem('13', document.getElementById('13').value)
})
document.getElementById('save-task6').addEventListener("click", function() {
    localStorage.setItem('14', document.getElementById('14').value)
})
document.getElementById('save-task7').addEventListener("click", function() {
    localStorage.setItem('15', document.getElementById('15').value)
})
document.getElementById('save-task8').addEventListener("click", function() {
    localStorage.setItem('16', document.getElementById('16').value)
})
document.getElementById('save-task9').addEventListener("click", function() {
    localStorage.setItem('17', document.getElementById('17').value)
})



// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// getInfo();

// time element example
// var nineAm = document.getElementById('.time-block');
const nine = new Date('June 6, 2022 09:00:00');
const today = new Date();

const ten = new Date(`${today.toDateString()} 10:00:00`);
console.log(today.toDateString());

const eleven = new Date(`${today.toDateString()} 11:00:00`);
console.log(today.toDateString());

const twelve = new Date(`${today.toDateString()} 12:00:00`);
console.log(today.toDateString());

const one = new Date(`${today.toDateString()} 13:00:00`);
console.log(today.toDateString());

const two = new Date(`${today.toDateString()} 14:00:00`);
console.log(today.toDateString());

const three = new Date(`${today.toDateString()} 15:00:00`);
console.log(today.toDateString());

const four = new Date(`${today.toDateString()} 16:00:00`);
console.log(today.toDateString());

const five = new Date(`${today.toDateString()} 17:00:00`);
console.log(today.toDateString());


// function timeColor() {
//     const timeBlock = document.querySelectorAll(".time-block");  
// if (nineAm > current_time) {
//     timeBlock.style.backgroundColor = 'red';
// } else {
//     timeBlock.style.backgroundColor = 'green';
// }console.log(timeColor); 
// }
// if (tenAm > current_time) {
//     timeBlock.style.backgroundColor = 'red';
// } else {
//     timeBlock.style.backgroundColor = 'green';
// }console.log(timeColor);
// if (eleven > current_time) {
//     timeBlock.style.backgroundColor = 'red';
// } else {
//     timeBlock.style.backgroundColor = 'green';
// }console.log(timeColor);

// timeColor();

// .past {
//     background-color: #d3d3d3;
//     color:  rgb(50, 50, 50);
//   }
  
//   .present {
//     background-color: #ff6961;
//     color: rgb(50, 50, 50);
//   } 
  
  
//   .future {
//     background-color: #77dd77;
//     color: rgb(50, 50, 50);

// function getInfo() {
//     for (let i = 9; i <= 17; i++) { 
//         let a = i.toString()  
//         document.getElementById(a).value = localStorage.getItem(a)     
//     }
// }
// function timeColor(){
//     el = document.getElementById(".time-block");
//   if(el.style.color === 'crimson'){
//     el.style.color = 'white';
//   } else {
//     el.style.color = 'crimson';
//   }
//  }

// console.log(Date.now() < nineAm); 

// const changeBox = function(){
//     const box = document.querySelector
// }