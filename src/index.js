import {loadHome} from "./module/home";
import {loadMenu} from "./module/menu";
import {loadContact} from "./module/contact";

import "./style.css";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import {faFacebook,faInstagram, faLinkedin, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import {faCopyright} from "@fortawesome/free-regular-svg-icons";
import fork from "./img/fork.png";

library.add(faFacebook);
library.add(faInstagram);
library.add(faLinkedinIn);
library.add(faCopyright);
dom.watch();

function component(){
     console.log(window.innerWidth);
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

     content.appendChild(header);
     content.appendChild(loadHome());
     content.appendChild(footer);
     return content;
}

document.body.appendChild(component());

