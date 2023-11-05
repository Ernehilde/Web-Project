window.addEventListener("scroll", function(){   
    var nav = this.document.querySelector(".nav-link");
    if(this.window.scrollY > 5){
        nav.classList.add("scrolled");
    }else{
        nav.classList.remove("scrolled");
    }
})
