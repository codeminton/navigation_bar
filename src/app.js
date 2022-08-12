const body = document.querySelector('body');
const hamburgerIcon = document.querySelector('.header .mobile-btn .material-icons');

document.querySelector('.header .header-center ul')
        .addEventListener('click', function(e){
            e.preventDefault();
            e.stopPropagation();
        });

document.querySelector('.header .header-start .mobile-btn')
        .addEventListener('click', function(e){
            e.preventDefault();
            body.classList.toggle('menu-toggle');
            hamburgerIcon.textContent = body.classList.contains('menu-toggle') ? 'close' : "menu";
        })

document.querySelector('.header .header-center')
        .addEventListener('click', () => {
            body.classList.remove('menu-toggle');
            hamburgerIcon.textContent = "menu";
        })

document.querySelectorAll(".header .header-center > ul li a")
        .forEach(function(menu_item){
            if(menu_item.nextElementSibling){
                if(menu_item.nextElementSibling.classList.contains('drop-menu')){
                    let span = document.createElement('SPAN');
                    span.className = 'material-icons expand-more';
                    span.textContent = 'expand_more';
                    menu_item.appendChild(span);
                }
            }
            menu_item.addEventListener('click', function(e){
                if(this.nextElementSibling){
                    this.nextElementSibling.classList.toggle('show');
                }
            })
        })
