/* =========================Accordion======================= */

let accordion = document.getElementsByClassName('accordion');

for(var i=0;i<accordion.length;i++){
    accordion[i].addEventListener('click',function(){
        this.classList.toggle('active');
        
        let pannel = this.nextElementSibling;
        if(pannel.style.maxHeight){
            pannel.style.maxHeight = null;
        }else{
            pannel.style.maxHeight = pannel.scrollHeight + "px";
        }
    })
}

/* =========================Testimonial Carousel======================= */
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    dots:false,
    autoplay:true,
    smartSpeed:1000,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})


/* =========================Navbar Open Close======================= */
let is_open = false;
function open_close(){
    
    const bar1 = document.getElementById("bar1");
    const bar2 = document.getElementById("bar2");
    const bar3 = document.getElementById("bar3");
    const nav_links = document.getElementById("nav-links");
    console.log(nav_links);
    if(is_open){
        nav_links.style.left = "-100%";
        is_open = false;
        bar1.style.transform = "translateY(0px) rotate(0deg)";
        bar2.style.transform = "translateX(0px)";
        bar2.style.opacity = "1";
        bar3.style.transform = "translateY(0px) rotate(0deg)";
    }else{
        nav_links.style.left = "0";
        is_open = true;
        bar1.style.transform = "translateY(8px) rotate(45deg)";
        bar2.style.transform = "translateX(-10px)";
        bar2.style.opacity = "0";
        bar3.style.transform = "translateY(-8px) rotate(-45deg)";
    }

}

// Sticky Navbar
var is_start = true;
window.addEventListener('scroll',function(){
    let main_header = this.document.querySelector(".main-header");
    const scroll_top = document.querySelector(".scroll-top-btn");

    if(this.scrollY >= 65){
        console.log('true');
        main_header.classList.add('sticky');
    }else{
        main_header.classList.remove('sticky');
    }

    if(this.scrollY >= 200){
        scroll_top.classList.remove('inactive');
        scroll_top.classList.add('active');
        is_start = false;
    }
    else if(is_start==false && this.scrollY<200){
        scroll_top.classList.remove('active');
        scroll_top.classList.add('inactive');
    }
})


// Get Support
const images = ['telephone-call.png','whatsapp.png','smile.png','facebook.png','facebook-messenger.png','email.png'];
function showImage(index = 0){
    document.querySelector("#help-image").src = './media/get-help/'+ images[index];

    nextIndex = index === images.length-1 ? 0: ++index;

    setTimeout(showImage,2000,nextIndex);
}

showImage();

const social_supports = document.querySelector("#social-supports");
const help = document.querySelector("#help");
const minimize = document.querySelector("#minimize");

help.addEventListener('click',function(){
    social_supports.style.display = "block";
    this.style.display = "none";
})
minimize.addEventListener('click',function(){
    help.style.display = "block";
    social_supports.style.display = "none";
})


