const PRODUCTS=[
{id:'spidey',name:'Spider-Man Mask',price:79.99,icon:'🕷️',genre:'Superheroes'},
{id:'blaster',name:'Star Wars Blaster',price:59.99,icon:'🔫',genre:'Star Wars'},
{id:'helmet',name:'Custom Anime Helmet',price:119.99,icon:'⛑️',genre:'Anime'},
{id:'morpher',name:'Power Rangers Morpher',price:89.99,icon:'⌚',genre:'Super Sentai'}];
const header=`<header><a class="logo" href="index.html">Matt's 3D Customs</a><nav>
<a href="index.html">Home</a><a href="product.html">Shop</a><a href="custom-order.html">Custom Order</a><a href="pricing.html">Pricing</a><a href="about.html">About</a><a href="contact.html">Contact</a></nav></header>`;
const footer=`<footer><p><a href="#">FAQs</a><a href="#">Shipping</a><a href="#">Privacy Policy</a></p>
<p class="social"><a href="#" aria-label="Instagram">📸</a><a href="#" aria-label="YouTube">▶️</a><a href="#" aria-label="X">✖️</a></p>
<p>&copy; 2023 Matt's 3D Customs</p></footer>`;
document.body.insertAdjacentHTML('afterbegin',header);
document.body.insertAdjacentHTML('beforeend',footer);
