document.addEventListener("DOMContentLoaded", function () {
// Part 1
const mainEl = document.createElement("main");
const mainBgColor = getComputedStyle(document.documentElement).getPropertyValue("--main-bg");
 mainEl.style.backgroundColor = `var(${mainBgColor})`;
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
mainEl.classList.add("flex-ctr");
document.body.appendChild(mainEl);


// Part 2
const topMenuEl = document.getElementById("top-menu"); 
topMenuEl.style.height = "100%";
const topMenuBgColor =
 document.documentElement.style.getPropertyValue("--top-menu-bg");
topMenuEl.style.backgroundColor = topMenuBgColor; 
topMenuEl.classList.add("flex-around");

const menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

menuLinks.forEach(function (link) {
  const linkEl = document.createElement("a");
  linkEl.href = link.href;
  linkEl.text = link.text;
  topMenuEl.appendChild(linkEl);
});
});