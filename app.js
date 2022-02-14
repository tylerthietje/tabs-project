// select about article
const btns = document.querySelectorAll('.tab-btn');
// select all the buttons
const about = document.querySelector('.about');
//select all the articles
const articles = document.querySelectorAll('.content');

about.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (id) {
        // remove active from other buttons
        btns.forEach(function (btn) {
            btn.classList.remove('active');
            e.target.classList.add('active');
        });
    }
    articles.forEach(function (article) {
        // hide other articles
        article.classList.remove("active");

    });
    const element = document.getElementById(id);
    element.classList.add("active");
});
    
    