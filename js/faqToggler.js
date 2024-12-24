function toggleAnswer(question) {
    // Toggle the 'active' class for the clicked question
    question.classList.toggle('active');
    
    // Toggle the icon between plus and dash
    let icon = question.querySelector('i');
    if (icon.classList.contains('bi-plus-square-fill')) {
        icon.classList.remove('bi-plus-square-fill');
        icon.classList.add('bi-dash-square-fill');
    } else {
        icon.classList.remove('bi-dash-square-fill');
        icon.classList.add('bi-plus-square-fill');
    }
    
    // Toggle the answer display
    let answer = question.nextElementSibling;
    answer.classList.toggle('active');
    
    // Close other answers
    let allAnswers = document.querySelectorAll('.answer');
    allAnswers.forEach(function(ans) {
        if (ans !== answer && ans.classList.contains('active')) {
            ans.classList.remove('active');
        }
    });
    
    // Close other active questions
    let allQuestions = document.querySelectorAll('.home_faq_question_container');
    allQuestions.forEach(function(q) {
        if (q !== question && q.classList.contains('active')) {
            q.classList.remove('active');
            let qIcon = q.querySelector('i');
            if (qIcon.classList.contains('bi-dash-square-fill')) {
                qIcon.classList.remove('bi-dash-square-fill');
                qIcon.classList.add('bi-plus-square-fill');
            }
        }
    });
}