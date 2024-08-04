const scrollers=document.querySelectorAll(".scroller");
if(!window.matchMedia("prefers-reduced-motion:reduce").matches){
    addAnimation();
}
function addAnimation(){
    scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated",true);

        const scrollerInnner=scroller.querySelector('.scrollerInner');
        const scrollerContent=Array.from(scrollerInnner.children);

        scrollerContent.forEach(item => {
            const duplicatedItem=item.cloneNode(true);
            duplicatedItem.setAttribute("saria-hidden",true);
            scrollerInnner.appendChild(duplicatedItem);
        });
    });
}
