//link between JS variables to that of elements in HTML through getElementById.
const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

//Creates a arrow function with parameter of input.
const checkForPalindrome = (input) => {
  const originalInput = input;
  if (input === '') {
      alert('Please input a value');
      return;
  } //Checks if input is blank if so then returns an alert.

  //removes previous result before continuing with the rest of the function.
  result.replaceChildren();

  //Checks input for anything A-Z, a-z or 0-9 applying it globally to all applications of the filter and is also case insensitive. It will remove anything not in the filter with '' and converts all letters to lower case, storing in lowerCaseStr.
  const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
  let resultMsg = `${originalInput} ${
    lowerCaseStr === [...lowerCaseStr].reverse().join('') ? 'is' : 'is not'
  } a palindrome.`; //Checks if lowerCaseStr is strictly equal to ...lowerCaseStr which is itself but converted into an array with each character as an individual element. Then ...lowerCaseStr is reversed and rejoined together with no spaces to compare. if === is true then 'is' is returned continuing the string interpolation.

//Now a p element is created in the HTML 
  const pTag = document.createElement('p');
  pTag.className = 'user-input'; //assigns class name
  pTag.innerText = resultMsg; //displayed text of the p element is resultMsg
  result.appendChild(pTag); //connects pTag as a child of results <div>

  // Show the result.
  result.classList.remove('hidden');
};

//Call the function in click event;
checkBtn.addEventListener("click", () => {
  checkForPalindrome(textInput.value);
  textInput.value = ''; //empties the value after
});

//another event listener but for the enter key, triggering the same response as above but in the event of pressing enter instead of clicking the button.
textInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    checkForPalindrome(textInput.value);
    textInput.value = '';
  }
});
