
// Кнопка "Наверх"
let mybutton = document.getElementById("btn-back-to-top");

if (mybutton) {  // Проверяем, существует ли кнопка на странице
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    };

    mybutton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
