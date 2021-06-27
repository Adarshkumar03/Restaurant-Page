import img7 from "../img/img7.jpg";
import "../style.css";

function loadContact(){
    const contact = document.createElement("main");

    const contactImage = document.createElement("div");
    const contactImage_h1 =document.createElement("h1");
    contactImage_h1.textContent = "GET IN TOUCH";

    contact.setAttribute("id", "contact");
    const image = document.createElement("div");
    image.classlist.add("image");
    
    const myImage7 = new Image();
    myImage7.src = img7;
    
    image.appendChild(myImage7);
    contactImage.appendChild(contactImage_h1);
    contactImage.appendChild(image);

    const reachOutDiv = document.createElement("div");

    const reachOutDiv_contact = document.createElement("div");

    
    const reachOutDiv_contact_address = document.createElement("div");
    const reachOutDiv_contact_phone = document.createElement("div");
    const reachOutDiv_contact_email = document.createElement("div");

    reachOutDiv_contact.appendChild(reachOutDiv_contact_address);
    reachOutDiv_contact.appendChild(reachOutDiv_contact_phone);
    reachOutDiv_contact.appendChild(reachOutDiv_contact_email);



    const reachOutDiv_map = document.createElement("div");
     reachOutDiv_map.setAttribute("id","map");
     reachOutDiv_map.classList.add("map");

     const map_iframe = document.createElement("iframe");
     map_iframe.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.301696676075!2d77.23125341440766!3d28.65068389001137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd19ca584b6d%3A0x7b0751d3d0771626!2sChandni%20Chowk%20Market!5e0!3m2!1sen!2sin!4v1624722089362!5m2!1sen!2sin");
     map_iframe.setAttribute("height", "300"); 
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