const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

/*Task 1:
Create selectors by using any of the DOM element's methods
 Note that IDs have been used on all images. 
 Use the IDs to update src path content*/
const headerImg = document.getElementById("cta-img");
headerImg.setAttribute("src", siteContent["cta"]["img-src"]);

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

/*Task 2:
 Update the HTML with the JSON data
 Remember, NO direct updating of the HTML source is allowed.
 Using your selectors, update the content to match the example file.
 Remember to update the src attributes on images*/

//Add content to Nav Bar

const navContent = document.getElementsByTagName("a");

const navItems1 = navContent[0];
navItems1.textContent = siteContent["nav"]["nav-item-1"];

const navItems2 = navContent[1];
navItems2.textContent = siteContent["nav"]["nav-item-2"];

const navItems3 = navContent[2];
navItems3.textContent = siteContent["nav"]["nav-item-3"];

const navItems4 = navContent[3];
navItems4.textContent = siteContent["nav"]["nav-item-4"];

const navItems5 = navContent[4];
navItems5.textContent = siteContent["nav"]["nav-item-5"];

const navItems6 = navContent[5];
navItems6.textContent = siteContent["nav"]["nav-item-6"];


//Add content to h1
const newH1 = document.querySelector("h1");
newH1.textContent = siteContent["cta"]["h1"];

//Add content to the Button
const newButton = document.querySelector("button");
newButton.textContent = siteContent["cta"]["button"];

//Add content to h4
const mainText = document.querySelectorAll("h4");

mainText[0].textContent = siteContent["main-content"]["features-h4"];
mainText[1].textContent = siteContent["main-content"]["about-h4"];

//Add content to Features P
const newP = document.querySelectorAll("p");

newP[0].textContent = siteContent["main-content"]["features-content"];
newP[1].textContent = siteContent["main-content"]["about-content"];

//Add content to BOTTOM-CONTENT h4
const bottomTitle = document.querySelectorAll(
  ".bottom-content .text-content h4"
);

bottomTitle[0].textContent = siteContent["main-content"]["services-h4"];
bottomTitle[1].textContent = siteContent["main-content"]["product-h4"];
bottomTitle[2].textContent = siteContent["main-content"]["vision-h4"];


//Add content to BOTTOM P

const newBottomP = document.querySelectorAll(".bottom-content .text-content p");

newBottomP[0].textContent = siteContent["main-content"]["services-content"];
newBottomP[1].textContent = siteContent["main-content"]["product-content"];
newBottomP[2].textContent = siteContent["main-content"]["vision-content"];

