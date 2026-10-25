const PRODUCTS=[
{id:'energy-blade',name:'Anime Fan Prop',price:89.99,icon:'⚔️',genre:'Anime',description:'A display prop inspired by anime adventures. Choose a size, colors, and finish; we confirm the design with you before printing.',prices:{Small:69.99,Medium:89.99,Large:119.99},custom:'$150–$300'},
{id:'headband',name:'Anime Headband',price:29.99,icon:'🥷',genre:'Anime',description:'A made-to-order headband accessory. Share your preferred size, colors, and details for a design made just for you.',prices:{Small:19.99,Medium:29.99,Large:39.99},custom:'$50–$100'},
{id:'emblem',name:'Superhero Emblem',price:39.99,icon:'🛡️',genre:'Original designs',description:'A display emblem featuring an original symbol and colors you choose. Great for a shelf, costume, or collection.',prices:{Small:29.99,Medium:39.99,Large:49.99},custom:'$60–$150'},
{id:'keychain',name:'Fan-Inspired Keychain',price:10,icon:'🔑',genre:'Accessories',description:'A lightweight keychain with an original fan-inspired design. Choose standard, large, extra-large, or glow-in-the-dark.',prices:{Standard:10,Large:15,'Extra Large':25,'Glow-in-the-Dark':12},custom:null},
{id:'custom-prop',name:'Custom Anime Prop',price:50,icon:'✨',genre:'Custom',description:'Work with Matt to plan an original prop based on your idea. We confirm the size, materials, price, and timing before printing.',prices:{Small:50,Medium:75,Large:100},custom:'$150–$500+'}];
const formatPrice=price=>`$${Number(price).toFixed(2)}`;
const startingPrice=product=>product.id==='custom-prop'?'$50+':formatPrice(product.price);
const CONTACT_EMAIL='matts3dcustoms@gmail.com';
const CONTACT_PHONE='+17183008940';
const CONTACT_PHONE_DISPLAY='718-300-8940';
const header=`<header><a class="logo" href="index.html">Matt's 3D Customs</a><nav aria-label="Main navigation">
<a href="index.html">Home</a><a href="product.html">Shop</a><a href="custom-order.html">Custom Order</a><a href="pricing.html">Pricing</a><a href="payment.html">Payments &amp; Policies</a><a href="about.html">About</a><a href="contact.html">Contact</a></nav></header>`;
const footer=`<footer><p><a href="pricing.html">Pricing</a><a href="payment.html">Payments &amp; Policies</a><a href="custom-order.html">Custom requests</a><a href="contact.html">Contact</a></p>
<p>Original, fan-inspired work only. No official or licensed merchandise is offered.</p>
<p><a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a> · <a href="sms:${CONTACT_PHONE}">Text ${CONTACT_PHONE_DISPLAY} (no calls)</a></p>
<p>&copy; ${new Date().getFullYear()} Matt's 3D Customs</p></footer>`;
document.body.insertAdjacentHTML('afterbegin',header);
document.body.insertAdjacentHTML('beforeend',footer);
const currentPage=location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('header nav a').forEach(link=>{
if(link.getAttribute('href')===currentPage)link.setAttribute('aria-current','page');
});
