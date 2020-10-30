var formCalc = document.querySelector(".form-calc");
var inputC = formCalc.querySelector(".input-value");
var result = formCalc.querySelector(".result");
var converter = formCalc.querySelector(".converter")

formCalc.addEventListener("submit", function(evt){
  evt.preventDefault()
  
  var inputValue = parseFloat(inputC.value.trim() ,10);
  
  if (isNaN(inputValue)){
    result.textContent = '?';
    alert('finting o\'xshmadimi deyman xaker :) hahahah');
    inputC.value = "";
    return;
  }
  
  
  var resultInF =inputValue * 9 / 5 + 32 ;
  result.textContent = resultInF;
})