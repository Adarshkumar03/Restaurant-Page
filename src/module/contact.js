import img7 from "../img/img7.jpg";
import "../style.css";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import {faMapMarkerAlt, faPhone} from "@fortawesome/free-solid-svg-icons";
import {faComment} from "@fortawesome/free-regular-svg-icons";

library.add(faMapMarkerAlt);
library.add(faPhone);
library.add(faComment);

function loadContact(){
    const contact = document.createElement("main");
    contact.setAttribute("id", "contact");

    const contactImage = document.createElement("div");
    contactImage.classList.add("contact-img-div");

    const contactImage_h1 =document.createElement("h1");
    contactImage_h1.textContent = "GET IN TOUCH";
    
    const myImage7 = new Image();
    myImage7.src = img7;
    
    contactImage.appendChild(contactImage_h1);
    contactImage.appendChild(myImage7);

    const reachOutDiv = document.createElement("div");
    reachOutDiv.classList.add("reach-out");

    const reachOutDiv_contact = document.createElement("div");
    reachOutDiv_contact.classList.add("reach-out-contact");
    
    const reachOutDiv_contact_address = document.createElement("div");

    const reachOutDiv_contact_address_icon = document.createElement("div");
    reachOutDiv_contact_address_icon.innerHTML = `<i class="fas fa-map-marker-alt"></i>`;

    const reachOutDiv_contact_address_p = document.createElement("p");
    reachOutDiv_contact_address_p.textContent = "ForkFull, 946 /a, Jama Masjid, Delhi, New Delhi 110006";
    
    reachOutDiv_contact_address.appendChild(reachOutDiv_contact_address_icon);
    reachOutDiv_contact_address.appendChild(reachOutDiv_contact_address_p);

    const reachOutDiv_contact_phone = document.createElement("div");
    
    const reachOutDiv_contact_phone_icon = document.createElement("div");
    reachOutDiv_contact_phone_icon.innerHTML = `<i class="fas fa-phone"></i>`;

    const reachOutDiv_contact_phone_p = document.createElement("p");
    reachOutDiv_contact_phone_p.textContent = "8810XXXXXX";

    reachOutDiv_contact_phone.appendChild(reachOutDiv_contact_phone_icon);
    reachOutDiv_contact_phone.appendChild(reachOutDiv_contact_phone_p);
    
    const reachOutDiv_contact_email = document.createElement("div");

    const reachOutDiv_contact_email_icon = document.createElement("div");
    reachOutDiv_contact_email_icon.innerHTML = `<i class="far fa-comment"></i>`;
    
    const reachOutDiv_contact_email_p = document.createElement("p");
    reachOutDiv_contact_email_p.textContent = "somerandomemail@gmail.com";

    reachOutDiv_contact_email.appendChild(reachOutDiv_contact_email_icon);
    reachOutDiv_contact_email.appendChild(reachOutDiv_contact_email_p);
    

    reachOutDiv_contact.appendChild(reachOutDiv_contact_address);
    reachOutDiv_contact.appendChild(reachOutDiv_contact_phone);
    reachOutDiv_contact.appendChild(reachOutDiv_contact_email);



    const reachOutDiv_map = document.createElement("div");
     reachOutDiv_map.setAttribute("id","contact-map");

     const map_iframe = document.createElement("iframe");
     map_iframe.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.301696676075!2d77.23125341440766!3d28.65068389001137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd19ca584b6d%3A0x7b0751d3d0771626!2sChandni%20Chowk%20Market!5e0!3m2!1sen!2sin!4v1624722089362!5m2!1sen!2sin");
     map_iframe.setAttribute("height", "400px");
     map_iframe.setAttribute("width", "700px"); 
     map_iframe.setAttribute("style", "border:0;"); 
     map_iframe.setAttribute("allowfullscreen", ""); 
     map_iframe.setAttribute("loading", "lazy"); 
     reachOutDiv_map.appendChild(map_iframe);

     reachOutDiv.appendChild(reachOutDiv_contact);
     reachOutDiv.appendChild(reachOutDiv_map);

     contact.appendChild(contactImage); 
     contact.appendChild(reachOutDiv); 
    return contact;
}

export {loadContact};