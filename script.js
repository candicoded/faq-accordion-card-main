let question = document.querySelectorAll('.question');

for (let i = 0; i < question.length; i++) {
  question[i].addEventListener("click", function() {
    
    let answer = this.nextElementSibling;
    if (answer.style.display === "block") {
      answer.style.display = "none";
      question[i].classList.remove('active-question');
    } else {
      answer.style.display = "block";
      question[i].classList.add('active-question');
    }
  });
}
