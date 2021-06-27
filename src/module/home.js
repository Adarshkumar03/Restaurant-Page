import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
import img4 from "../img/img4.jpg";
import img5 from "../img/img5.jpg";
import img6 from "../img/img6.jpg";
import fork from "../img/fork.png";

function loadHome(){
    const home = document.createElement("main");
    home.setAttribute("id", "home");

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
     map_iframe.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.301696676075!2d77.23125341440766!3d28.65068389001137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd19ca584b6d%3A0x7b0751d3d0771626!2sChandni%20Chowk%20Market!5e0!3m2!1sen!2sin!4v1624722089362!5m2!1sen!2sin");
     map_iframe.setAttribute("height", "300"); 
     map_iframe.setAttribute("style", "border:0;"); 
     map_iframe.setAttribute("allowfullscreen", ""); 
     map_iframe.setAttribute("loading", "lazy"); 
     
     map.appendChild(map_iframe);
     
     home.appendChild(imgGalleryDiv);
     home.appendChild(features_grid);
     home.appendChild(comment);
     home.appendChild(map);
    return home;
}

export {loadHome};