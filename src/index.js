import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import img4 from "./img/img4.jpg";
import img5 from "./img/img5.jpg";
import img6 from "./img/img6.jpg";
import fork from "./img/fork.png";
import "./style.css";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import {faFacebook,faInstagram, faLinkedin, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import {faCopyright} from "@fortawesome/free-regular-svg-icons";


library.add(faFacebook);
library.add(faInstagram);
library.add(faLinkedinIn);
library.add(faCopyright);
dom.watch();

function component(){
     const content = document.createElement("div");
     content.setAttribute("id", "content");
     console.log(content);

     //Header
     const header = document.createElement("header");
     const header_h1 = document.createElement("h1");
     header_h1.innerHTML = `Fork<span><img src="${fork}"/></span>ull`;

     const header_nav = document.createElement("nav");

     const header_nav_ul = document.createElement("ul");

     const header_nav_ul_li1 = document.createElement("li");
     header_nav_ul_li1.innerHTML = '<a href="#">Home</a>';

     const header_nav_ul_li2 = document.createElement("li");
     header_nav_ul_li2.innerHTML = '<a href="#">Menu</a>';

     const header_nav_ul_li3 = document.createElement("li");
     header_nav_ul_li3.innerHTML = '<a href="#">Contact</a>';
     
     
     header_nav_ul.appendChild(header_nav_ul_li1);
     header_nav_ul.appendChild(header_nav_ul_li2);
     header_nav_ul.appendChild(header_nav_ul_li3);

     header_nav.appendChild(header_nav_ul);

     header.appendChild(header_h1);
     header.appendChild(header_nav);

     //Main
     const main = document.createElement("main");

     //Image Gallery Div
     const imgGalleryDiv = document.createElement("div");
     imgGalleryDiv.classList.add("img-gallery-div");
     const imgGalleryDiv_h1 = document.createElement("h1");
     imgGalleryDiv_h1.innerHTML = `Fork<span><img src="${fork}"/></span>ull`;
     
     const imgGallery = document.createElement("div");
     imgGallery.classList.add("img-gallery");

     const imgGallery_slides = document.createElement("div");
     imgGallery_slides.classList.add("slides");

     const imgGallery_slides_slide1 = document.createElement("div");
     imgGallery_slides_slide1.classList.add("slide");

     const imgGallery_slides_slide2 = document.createElement("div");
     imgGallery_slides_slide2.classList.add("slide");

     const imgGallery_slides_slide3 = document.createElement("div");
     imgGallery_slides_slide3.classList.add("slide");

     const imgGallery_slides_slide4 = document.createElement("div");
     imgGallery_slides_slide4.classList.add("slide");


     const imgGallery_slides_slide1_image = document.createElement("div");
     imgGallery_slides_slide1_image.classList.add("image");
     const imgGallery_slides_slide2_image = document.createElement("div");
     imgGallery_slides_slide2_image.classList.add("image");

     const imgGallery_slides_slide3_image = document.createElement("div");
     imgGallery_slides_slide3_image.classList.add("image");

     const imgGallery_slides_slide4_image = document.createElement("div");
     imgGallery_slides_slide4_image.classList.add("image");

     const myImage1 = new Image();
     myImage1.src = img1;

     imgGallery_slides_slide1_image.appendChild(myImage1);

     const myImage2 = new Image();
     myImage2.src = img2;
     imgGallery_slides_slide2_image.appendChild(myImage2);

     const myImage3 = new Image();
     myImage3.src = img3;
     imgGallery_slides_slide3_image.appendChild(myImage3);

     const myImage4 = new Image();
     myImage4.src = img4;
     imgGallery_slides_slide4_image.appendChild(myImage4);

     const myImage5 = new Image();
     myImage5.src = img5;

     const myImage5_div = document.createElement("div");
     myImage5_div.appendChild(myImage5);
     myImage5_div.classList.add("grid-item");

     const myImage6 = new Image();
     myImage6.src = img6;

     const myImage6_div = document.createElement("div");
     myImage6_div.appendChild(myImage6);
     myImage6_div.classList.add("grid-item");

     imgGallery_slides_slide1.appendChild(imgGallery_slides_slide1_image);
     imgGallery_slides_slide2.appendChild(imgGallery_slides_slide2_image);
     imgGallery_slides_slide3.appendChild(imgGallery_slides_slide3_image);
     imgGallery_slides_slide4.appendChild(imgGallery_slides_slide4_image);

     imgGallery_slides.appendChild(imgGallery_slides_slide1);
     imgGallery_slides.appendChild(imgGallery_slides_slide2);
     imgGallery_slides.appendChild(imgGallery_slides_slide3);
     imgGallery_slides.appendChild(imgGallery_slides_slide4);

     imgGallery.appendChild(imgGallery_slides);

     imgGalleryDiv.appendChild(imgGalleryDiv_h1);
     imgGalleryDiv.appendChild(imgGallery);

     const imgGalleryDiv_button = document.createElement("button");
     imgGalleryDiv_button.textContent = "Order";
     imgGalleryDiv.appendChild(imgGalleryDiv_button);
  
     const features_grid = document.createElement("div");
     features_grid.classList.add("features-grid");

     const features1 = document.createElement("div");
     features1.classList.add("grid-item");
     features1.classList.add("features");
     
     const features1_h2 = document.createElement("h2");
     features1_h2.textContent = "ForkFull";
     
     const features1_p = document.createElement("p");
     features1_p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et est ut ligula tempus ultricies vel eu ipsum. In ultricies iaculis eros quis mattis. Fusce dolor ligula, mattis at tristique.";

     const features1_button = document.createElement("button");
     features1_button.textContent = "Order";
     
     features1.appendChild(features1_h2);
     features1.appendChild(features1_p);
     features1.appendChild(features1_button);

     const features2 = document.createElement("div");
     features2.classList.add("grid-item");
     features2.classList.add("features");
     
     const features2_p = document.createElement("p");
     features2_p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et tellus efficitur, venenatis eros in, malesuada nisl. Ut semper aliquam euismod. Aenean lobortis ornare nisl, in pellentesque nulla convallis ut. Proin diam lectus, iaculis at dictum nec, dapibus at libero. Cras vitae ex ut sapien.";

     const features2_button = document.createElement("button");
     features2_button.textContent = "Order";
     
     features2.appendChild(features2_p);
     features2.appendChild(features2_button);

     features_grid.appendChild(features1);
     features_grid.appendChild(myImage5_div);
     features_grid.appendChild(myImage6_div);
     features_grid.appendChild(features2);
     

     const comment = document.createElement("div");
     comment.classList.add("comment");

     const comment_h2 = document.createElement("h2");
     comment_h2.textContent = '"Too good to be true"';

     const comment_p = document.createElement("p");
     comment_p.textContent = '-Loyal Customer';

     comment.appendChild(comment_h2);
     comment.appendChild(comment_p);

     const map = document.createElement("div");
     map.setAttribute("id","map");
     map.classList.add("map");
     const map_iframe = document.createElement("iframe");
     map_iframe.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.301696676075!2d77.23125341440766!3d28.65068389001137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd19ca584b6d%3A0x7b0751d3d0771626!2sChandni%20Chowk%20Market!5e0!3m2!1sen!2sin!4v1624722089362!5m2!1sen!2sin")
     map_iframe.setAttribute("width", "1350"); 
     map_iframe.setAttribute("height", "300"); 
     map_iframe.setAttribute("style", "border:0;"); 
     map_iframe.setAttribute("allowfullscreen", ""); 
     map_iframe.setAttribute("loading", "lazy"); 
     
     map.appendChild(map_iframe);
    
     const footer = document.createElement("footer");
     const footer_divs = document.createElement("div");
     footer_divs.classList.add("footer-divs");
     
     const footer_address = document.createElement("div");

     const footer_address_h3 = document.createElement("h3");
     footer_address_h3.textContent = "ForkFull";
     
     const footer_address_p1 = document.createElement("p");
     footer_address_p1.textContent = "ForkFull, 946 /a, Jama Masjid, Delhi, New Delhi 110006";

     const footer_address_p2 = document.createElement("p");
     footer_address_p2.textContent = "Take Out & Delivery: 12am – 9pm";

     const footer_address_p3 = document.createElement("p");
     footer_address_p3.textContent = "8810XXXXXX";
     
     const footer_address_a = document.createElement("a");
     footer_address_a.setAttribute("href", "mailto:somerandomemail@gmail.com");
     footer_address_a.textContent = "somerandomemail@gmail.com";

     footer_address.appendChild(footer_address_h3);
     footer_address.appendChild(footer_address_p1);
     footer_address.appendChild(footer_address_p2);
     footer_address.appendChild(footer_address_p3);
     footer_address.appendChild(footer_address_a);

     const footer_reach = document.createElement("div");

     const footer_reach_social = document.createElement("div");
     footer_reach_social.classList.add("social");

     const footer_reach_social_facebook = document.createElement("button");
     const footer_reach_social_instagram = document.createElement("button");
     const footer_reach_social_linkedin = document.createElement("button");

     footer_reach_social_facebook.innerHTML = `<i class="fab fa-facebook"></i>`;
     footer_reach_social_instagram.innerHTML = `<i class="fab fa-instagram"></i>`;
     footer_reach_social_linkedin.innerHTML = `<i class="fab fa-linkedin-in"></i>`;

     footer_reach_social.appendChild(footer_reach_social_facebook);
     footer_reach_social.appendChild(footer_reach_social_instagram);
     footer_reach_social.appendChild(footer_reach_social_linkedin);

     const footer_reach_h3 = document.createElement("h3");
     footer_reach_h3.textContent = "Send a message";
     
     const footer_form = document.createElement("form");
     footer_form.classList.add("form");

     const footer_form_text = document.createElement("input");
     footer_form_text.setAttribute("type", "text");
     footer_form_text.setAttribute("placeholder", "message");

     const footer_form_submit = document.createElement("button");
     footer_form_submit.textContent = "Send";

     footer_form.appendChild(footer_form_text);
     footer_form.appendChild(footer_form_submit);

     const footer_p = document.createElement("p");
     footer_p.innerHTML = `<i class="far fa-copyright"></i> 2021 ForkFull Project by Adarsh Kumar`;
     
     footer_reach.appendChild(footer_reach_social);
     footer_reach.appendChild(footer_reach_h3);
     footer_reach.appendChild(footer_form);

     footer_divs.appendChild(footer_address);
     footer_divs.appendChild(footer_reach);

     footer.appendChild(footer_divs);
     footer.appendChild(footer_p);

     main.appendChild(imgGalleryDiv);
     main.appendChild(features_grid);
     main.appendChild(comment);
     main.appendChild(map);
     content.appendChild(header);
     content.appendChild(main);
     content.appendChild(footer);
     return content;
}

document.body.appendChild(component());

