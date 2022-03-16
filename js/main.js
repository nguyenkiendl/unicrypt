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
})()

