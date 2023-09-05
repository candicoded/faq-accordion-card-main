let question = document.querySelectorAll('.question');

for (let i = 0; i < question.length; i++) {
  question[i].addEventListener("click", function() {
    
    let answer = this.nextElementSibling;
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
    this.classList.toggle('active-question');
  });
}
