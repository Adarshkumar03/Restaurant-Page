import img8 from "../img/img8.jpg";
import img9 from "../img/img9.jpg";
import img10 from "../img/img10.jpg";
import img11 from "../img/img11.jpg";
import img12 from "../img/img12.jpg";
import "../style.css";

function loadMenu(){
    const menu = document.createElement("menu");

    const menuImage = document.createElement("div");
    const menuImage_h1 =document.createElement("h1");
    menuImage_h1.textContent = "GET IN TOUCH";

    menu.setAttribute("id", "contact");
    const image = document.createElement("div");
    
    const myImage8 = new Image();
    myImage8.src = img8;
    
    image.appendChild(myImage8);
    menuImage.appendChild(menuImage_h1);
    menuImage.appendChild(image);

    const someDiv = document.createElement("div");
    const someDiv_h1 = document.createElement("h1");
    someDiv_h1.textContent="ForkFull";
    const someDiv_p = document.createElement("p");
    someDiv_p.textContent = "GET FORKFULL FOR TAKE OUT OR DELIVERED FRESH DIRECTLY FROM US OR USING YOUR FAVORITE DELIVERY APP.";
    const someDiv_button = document.createElement("button");
    someDiv_button.textContent = "Order";

    someDiv.appendChild(someDiv_h1);
    someDiv.appendChild(someDiv_p);
    someDiv.appendChild(someDiv_button);
    
    const menuDiv = document.createElement("div");

    const menuItem1 = document.createElement("div");
    const menuItem1_img = document.createElement("div");
    const myImage9 = new Image();
    myImage9.src = img9;
    menuItem1_img.appendChild(myImage9);
    
    const menuItem2 = document.createElement("div");
    const menuItem2_img = document.createElement("div");
    const myImage10 = new Image();
    myImage10.src = img10;
    menuItem2_img.appendChild(myImage10);
    
    const menuItem3 = document.createElement("div");
    const menuItem3_img = document.createElement("div");
    const myImage11 = new Image();
    myImage11.src = img11;
    menuItem3_img.appendChild(myImage11);
    
    const menuItem4 = document.createElement("div");
    const menuItem4_img = document.createElement("div");
    const myImage12 = new Image();
    myImage12.src = img12;
    menuItem4_img.appendChild(myImage12);

    menuDiv.appendChild(menuItem1);
    menuDiv.appendChild(menuItem1_img);
    menuDiv.appendChild(menuItem2_img);
    menuDiv.appendChild(menuItem2);
    menuDiv.appendChild(menuItem3);
    menuDiv.appendChild(menuItem3_img);
    menuDiv.appendChild(menuItem4_img);
    menuDiv.appendChild(menuItem4);

    menu.appendChild(menuImage);
    menu.appendChild(someDiv);
    menu.appendChild(menuDiv);
    return menu;
}

export {loadMenu};