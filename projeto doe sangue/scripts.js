document
    .querySelector('header button')         /*seleção de classe */
    .addEventListener("click", function(){  /*adição de eventos com uma função*/
        document
            .querySelector('.form')
            .classList.toggle('hide')
    })