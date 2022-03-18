var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);


(function(){
    // faqs tabs
    const tabmenu = $$('.faqs__tabs a');
    const tabcontent = $$('.faqs__tabscontent .faq');
    const activeClass = 'active';

    const activeTab = (t) => {
        tabmenu.forEach(el => {
            let idTab = el.getAttribute('href');
            if(
                el.classList.contains(activeClass) && 
                $(idTab).classList.contains(activeClass)
            ){
                el.classList.remove(activeClass);
                $(idTab).classList.remove(activeClass);
            }
            let cTab = t.getAttribute('href');
            t.classList.add(activeClass);
            $(cTab).classList.add(activeClass);
        });
    }

    tabmenu.forEach(t => {
        t.addEventListener('click', function(e){
            e.preventDefault();
            activeTab(this);
        })
    });

    // faqs control phone media
    const tabcontrol = $$('.faqs__control');
    const showClass = 'show';
    const showTab = (t) => {
         if( t.classList.contains(activeClass) ){
            let cTab = t.dataset.tab;
            t.classList.remove(activeClass);
            $(cTab).classList.remove(showClass);
        } else {
            tabcontrol.forEach((el) => {
            
                    let idTab = el.dataset.tab;
                    if(
                        el.classList.contains(activeClass) && 
                        $(idTab).classList.contains(showClass)
                    ){
                        el.classList.remove(activeClass);
                        $(idTab).classList.remove(showClass);
                    }
                    let cTab = t.dataset.tab;
                    t.classList.add(activeClass);
                    $(cTab).classList.add(showClass);
                
            });
        }
    }

    tabcontrol.forEach(t => {
        t.addEventListener('click', function(e){
            e.preventDefault();
            showTab(this);
        })
    });

    // show/hide nav menu



    $('#menu-btn').addEventListener('click', function(e){
        e.preventDefault();
        $('body').classList.toggle('no-scroll');
        this.classList.toggle('active');
        $('.nav__menu').classList.toggle('show');
    });
})()

