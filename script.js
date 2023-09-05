let question = document.querySelectorAll('.question');
let arrow = document.styleSheets[0].cssRules[9];

for (let i = 0; i < question.length; i++) {
  question[i].addEventListener("click", function() {
    
    let answer = this.nextElementSibling;
    if (answer.style.display === "block") {
      answer.style.display = "none";
      question[i].classList.remove('active-question');
      arrow.style.transform = "rotate(0deg)";
    } else {
      answer.style.display = "block";
      question[i].classList.add('active-question');
      arrow.style.transform = "rotate(180deg)";
    }
  });
}
