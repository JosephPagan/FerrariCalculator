//create display variable to hold the display HTML
let display = document.getElementById('inputDisplay');
let memory = document.getElementById('history');
//create an array from the button elements in the HTML
let buttons = Array.from(document.getElementsByClassName('button'));
//map function on array
buttons.map( button => {
  //create event listener for any buttons clicked
  button.addEventListener('click', (e) => {
    //create switch statement for the targetted inner text
    switch(e.target.innerText){
      //if CLEAR is selected than the display should be empty
      case 'CLEAR':
        display.innerText = '';
        break;
      //if Back Arrow is selected than the display html should be sliced by One
      case '←':
        //if there is something to remove from display
        if (display.innerText){
          display.innerText = display.innerText.slice(0, -1);
        }
        break;
      case 'CLEAR MEMORY':
        memory.innerText = '';
        break;
      //if equals sign is used then use the JS eval functionality to calculate
      case '=':
        //if there is a valid equation
        try{
          //display the equation and evaluation in memory section
          memory.innerText += display.innerText + '=' + eval(display.innerText);
          //create a new line variable
          var linebreak = document.createElement('br');
          //add a new line to the memory html section
          memory.appendChild(linebreak);
          //calculate and display on calculator
          display.innerText = eval(display.innerText);
        //if this cannot execute than display ERROR!
        } catch {
          display.innerText = 'ERROR!';
        }
        break;
      //by default we want whatever buttons are pressed to be displayed
      default: 
        display.innerText += e.target.innerText;
    }
  });
});


