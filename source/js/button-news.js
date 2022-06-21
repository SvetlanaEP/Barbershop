let newsButton=document.querySelector('.news__to-all');
    hiddenNews=document.querySelectorAll('.news__item--none');
    btnAll=document.querySelector('.button--to-all');
    btnCollapse=document.querySelector('.button--collapse');


    newsButton.addEventListener("click", function () {
        for (const news of hiddenNews) {
            if (news.classList.contains("news__item--none")) {
                news.classList.remove("news__item--none");
                btnAll.classList.add('news__button--none');
                btnCollapse.classList.remove('news__button--none');
            } else {
                news.classList.add("news__item--none");
                btnAll.classList.remove('news__button--none');
                btnCollapse.classList.add('news__button--none');
                 }

        }
    });