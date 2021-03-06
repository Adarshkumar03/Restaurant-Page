import img8 from "../img/img8.jpg";
import img9 from "../img/img9.jpg";
import img10 from "../img/img10.jpg";
import img11 from "../img/img11.jpg";
import img12 from "../img/img12.jpg";
import "../style.css";

const loadMenu = () => {

    const menu = document.createElement("menu");
    menu.setAttribute("id", "menu");
    menu.setAttribute("data-tab-content", "");


    const menuImage = document.createElement("div");
    menuImage.classList.add("menu-img-div");

    const menuImage_h1 =document.createElement("h1");
    menuImage_h1.textContent = "MENU";
    
    const myImage8 = new Image();
    myImage8.src = img8;
    
    menuImage.appendChild(menuImage_h1);
    menuImage.appendChild(myImage8);

    const someDiv = document.createElement("div");
    someDiv.classList.add("some-div");
    const someDiv_h2 = document.createElement("h2");
    someDiv_h2.textContent="ForkFull";
    const someDiv_p = document.createElement("p");
    someDiv_p.textContent = "GET FORKFULL FOR TAKE OUT OR DELIVERED FRESH DIRECTLY FROM US OR USING YOUR FAVORITE DELIVERY APP.";
    const someDiv_button = document.createElement("button");
    someDiv_button.textContent = "Order";

    someDiv.appendChild(someDiv_h2);
    someDiv.appendChild(someDiv_p);
    someDiv.appendChild(someDiv_button);
    
    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu-grid"); 

    const menuItem1_ingredients = document.createElement("div");
    menuItem1_ingredients.classList.add("item1-ing");
    menuItem1_ingredients.classList.add("ing");
    const menuItem1_ingredients_h2 = document.createElement("h2");

    menuItem1_ingredients_h2.textContent = "Main Course";
    const menuItem1_ingredients_list = document.createElement("p");
    menuItem1_ingredients_list.innerHTML = `<p>Chicken Biriyani</p>
    <p>Chicken Gravy</p><p>Shahi Paneer</p><p>Mutton Biriyani</p>`;
    
    menuItem1_ingredients.appendChild(menuItem1_ingredients_h2);
    menuItem1_ingredients.appendChild(menuItem1_ingredients_list);

    const menuItem1_img = document.createElement("div");
    menuItem1_img.classList.add("item1-img");
    menuItem1_img.classList.add("item-img");

    const myImage9 = new Image();
    myImage9.src = img9;
    menuItem1_img.appendChild(myImage9);

    const menuItem2_ingredients = document.createElement("div");
    menuItem2_ingredients.classList.add("item2-ing");
    menuItem2_ingredients.classList.add("ing");   

    const menuItem2_ingredients_h2 = document.createElement("h2");
    menuItem2_ingredients_h2.textContent = "Starters";

    const menuItem2_ingredients_list = document.createElement("p");
    menuItem2_ingredients_list.innerHTML = `<p>Chicken Soup</p>
    <p>Tomato Soup</p><p>Chicken Lolipop</p><p>Paneer Tikka</p>`;
    
    menuItem2_ingredients.appendChild(menuItem2_ingredients_h2);
    menuItem2_ingredients.appendChild(menuItem2_ingredients_list);
    
    const menuItem2_img = document.createElement("div");
    menuItem2_img.classList.add("item2-img");
    menuItem2_img.classList.add("item-img");


    const myImage10 = new Image();
    myImage10.src = img10;
    menuItem2_img.appendChild(myImage10);

    const menuItem3_ingredients = document.createElement("div");
    menuItem3_ingredients.classList.add("item3-ing");
    menuItem3_ingredients.classList.add("ing");   

    const menuItem3_ingredients_h2 = document.createElement("h2");
    menuItem3_ingredients_h2.textContent = "Bevarages";

    const menuItem3_ingredients_list = document.createElement("p");
    menuItem3_ingredients_list.innerHTML = `<p>Lemonade</p>
    <p>Tea/Coffe</p><p>Soft Drinks</p><p>Cider</p>`;
    
    menuItem3_ingredients.appendChild(menuItem3_ingredients_h2);
    menuItem3_ingredients.appendChild(menuItem3_ingredients_list);
     
    const menuItem3_img = document.createElement("div");
    menuItem3_img.classList.add("item3-img");
    menuItem3_img.classList.add("item-img");
    
    const myImage11 = new Image();
    myImage11.src = img11;
    menuItem3_img.appendChild(myImage11);

    const menuItem4_ingredients = document.createElement("div");
    menuItem4_ingredients.classList.add("item4-ing");
    menuItem4_ingredients.classList.add("ing");   
     
    const menuItem4_ingredients_h2 = document.createElement("h2");
    menuItem4_ingredients_h2.textContent = "Dessert";

    const menuItem4_ingredients_list = document.createElement("p");
    menuItem4_ingredients_list.innerHTML = `<p>Red Velvet Pastry</p>
    <p>Brownie Cookie</p><p>Chocolate Peanutbutter</p><p>Cheese Cake</p>`;
    
    menuItem4_ingredients.appendChild(menuItem4_ingredients_h2);
    menuItem4_ingredients.appendChild(menuItem4_ingredients_list);
    
    const menuItem4_img = document.createElement("div");
    menuItem4_img.classList.add("item4-img");
    menuItem1_img.classList.add("item-img");

    const myImage12 = new Image();
    myImage12.src = img12;
    menuItem4_img.appendChild(myImage12);

    menuDiv.appendChild(menuItem1_ingredients);
    menuDiv.appendChild(menuItem1_img);
    menuDiv.appendChild(menuItem2_img);
    menuDiv.appendChild(menuItem2_ingredients);
    menuDiv.appendChild(menuItem3_ingredients);
    menuDiv.appendChild(menuItem3_img);
    menuDiv.appendChild(menuItem4_img);
    menuDiv.appendChild(menuItem4_ingredients);

    menu.appendChild(menuImage);
    menu.appendChild(someDiv);
    menu.appendChild(menuDiv);
    return menu;
};

export {loadMenu};