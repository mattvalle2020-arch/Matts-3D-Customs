const products = [
  { id: "orbit-helmet", name: "The Orbit Helmet", category: "helmets", label: "BESTSELLER", description: "A display-ready sci-fi classic.", price: 85, image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=720&q=80", alt: "Sculptural futuristic helmet", dimensions: "Adult fit · sizing confirmed before print", production: "2–4 weeks" },
  { id: "nova-helmet", name: "The Nova Visor", category: "helmets", label: "MADE TO ORDER", description: "A bold blank canvas.", price: 110, image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=720&q=80", alt: "Abstract sculptural object", dimensions: "Adult fit · sizing confirmed before print", production: "2–4 weeks" },
  { id: "ember-sword", name: "The Ember Blade", category: "swords", label: "FAN FAVORITE", description: "Lightweight. Legendary.", price: 65, image: "https://images.unsplash.com/photo-1599619585752-c3edb42a414c?auto=format&fit=crop&w=720&q=80", alt: "Decorative fantasy sword", dimensions: "Display prop · final length confirmed with quote", production: "2–4 weeks" },
  { id: "tide-sword", name: "The Tidekeeper", category: "swords", label: "NEW", description: "A little myth, a lot of detail.", price: 78, image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=720&q=80", alt: "Fantasy-inspired decorative prop", dimensions: "Display prop · final length confirmed with quote", production: "2–4 weeks" },
  { id: "moss-statue", name: "The Mossling", category: "statues", label: "SMALL BATCH", description: "A pocket-sized guardian.", price: 38, image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=720&q=80", alt: "Decorative sculptural figure", dimensions: "Small · approx. 4–6 in", production: "1–2 weeks" },
  { id: "orbit-statue", name: "Orbit No. 3", category: "statues", label: "MADE TO ORDER", description: "A small study in shape.", price: 45, image: "https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=720&q=80", alt: "Modern art sculpture", dimensions: "Medium · approx. 6–12 in", production: "1–3 weeks" },
  { id: "lucky-keychain", name: "Lucky Little Star", category: "keychains", label: "UNDER $20", description: "Good luck, wherever you go.", price: 12, image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f6?auto=format&fit=crop&w=720&q=80", alt: "Colorful small handmade accessory", dimensions: "Small · approx. 2 in", production: "1–2 weeks" },
  { id: "tiny-totem", name: "The Tiny Totem", category: "keychains", label: "GIFT PICK", description: "A tiny thing with big energy.", price: 15, image: "https://images.unsplash.com/photo-1602523961358-f9f03dd557db?auto=format&fit=crop&w=720&q=80", alt: "Small decorative token", dimensions: "Small · approx. 2–3 in", production: "1–2 weeks" }
];

const productGrid = document.querySelector("#product-grid");
const toast = document.querySelector("#toast");
const viewAllButton = document.querySelector("#view-all-products");
let toastTimer;
let showAllProducts = false;
let activeCategory = "all";

function renderProducts(category = "all") {
  activeCategory = category;
  const visible = category === "all" ? products : products.filter((product) => product.category === category);
  const displayed = category === "all" && !showAllProducts ? visible.slice(0, 6) : visible;
  productGrid.innerHTML = displayed.map((product) => `
    <article class="product-card">
      <div class="product-photo">
        <img src="${product.image}" alt="${product.alt}" loading="lazy">
        <span class="product-badge">${product.label}</span>
        <button class="product-details" type="button" data-product-details="${product.id}">Quick look <span aria-hidden="true">↗</span></button>
        <button class="product-add" type="button" data-product="${product.id}" aria-label="Add ${product.name} to your quote">+</button>
      </div>
      <div class="product-info"><div><h3>${product.name}</h3><p>${product.description}</p></div><span class="product-price">From $${product.price}<small>SM $${Math.round(product.price * 0.7)} · MD $${product.price} · LG $${Math.round(product.price * 1.65)}</small></span></div>
    </article>
  `).join("");
  viewAllButton.hidden = category !== "all" || visible.length <= 6;
  viewAllButton.setAttribute("aria-expanded", String(showAllProducts));
  viewAllButton.innerHTML = showAllProducts ? 'Show featured products <span aria-hidden="true">↑</span>' : 'View all products <span aria-hidden="true">↗</span>';
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

renderProducts();

viewAllButton.addEventListener("click", () => {
  showAllProducts = !showAllProducts;
  renderProducts(activeCategory);
});

document.querySelector(".category-filters").addEventListener("click", (event) => {
  const button = event.target.closest("button[data-category]");
  if (!button) return;
  document.querySelectorAll(".filter-button").forEach((filter) => {
    const active = filter === button;
    filter.classList.toggle("is-active", active);
    filter.setAttribute("aria-pressed", String(active));
  });
  renderProducts(button.dataset.category);
});

productGrid.addEventListener("click", (event) => {
  const detailsButton = event.target.closest("button[data-product-details]");
  if (detailsButton) {
    const product = products.find((item) => item.id === detailsButton.dataset.productDetails);
    if (product) openProductDetails(product);
    return;
  }
  const button = event.target.closest("button[data-product]");
  if (!button) return;
  const product = products.find((item) => item.id === button.dataset.product);
  if (!product) return;
  const projectTypes = { helmets: "helmet", swords: "sword", statues: "statue", keychains: "keychain" };
  quoteForm.elements["project-type"].value = projectTypes[product.category];
  currentQuoteBasePrice = product.price;
  quoteForm.elements["project-notes"].value = `Interested in ${product.name}.`;
  updateEstimate();
  document.querySelector("#custom").scrollIntoView({ behavior: "smooth" });
  showToast(`${product.name} added to your custom quote.`);
});

const productDialog = document.querySelector("#product-dialog");
const productDialogContent = document.querySelector("#product-dialog-content");
let selectedProduct;

function openProductDetails(product) {
  selectedProduct = product;
  productDialogContent.innerHTML = `
    <div class="dialog-product-art"><img src="${product.image}" alt="${product.alt}"><span>${product.label}</span><button type="button" data-image-zoom aria-label="Zoom product image" aria-pressed="false">+</button></div>
    <div class="dialog-product-info">
      <p class="eyebrow"><span class="eyebrow-line"></span> MADE TO ORDER</p>
      <h2 id="dialog-product-title">${product.name}</h2>
      <p>${product.description} Each piece is made to order and checked by hand.</p>
      <ul class="product-specs"><li><b>Dimensions</b><span>${product.dimensions}</span></li><li><b>Materials</b><span>PLA, PETG, or resin, subject to design</span></li><li><b>Production time</b><span>${product.production}</span></li></ul>
      <fieldset class="dialog-size-options"><legend>Choose a size <span id="dialog-size-label">Medium · 9 in</span></legend>${sizeOptions.map((size, index) => `<label><input type="radio" name="dialog-size" value="${size.value}" ${index === 1 ? "checked" : ""}><span>${size.label.split(" · ")[0]}</span></label>`).join("")}</fieldset>
      <label class="field-label" for="dialog-material">Choose a material</label>
      <select id="dialog-material"><option value="pla">PLA · plant-based</option><option value="petg">PETG · durable</option><option value="resin">Resin · fine detail</option></select>
      <div class="dialog-price"><span>ESTIMATED STARTING PRICE <small>Final quote confirmed after review</small></span><output id="dialog-price">—</output></div>
      <button class="button button-accent dialog-add" type="button" data-dialog-add>Get your custom quote <span aria-hidden="true">↗</span></button>
      <p class="dialog-disclaimer">An estimate, not a checkout. We’ll confirm the final price with you first.</p>
      <div class="related-products"><b>Related favorites</b><div>${products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 3).map((item) => `<button type="button" data-related-product="${item.id}"><img src="${item.image}" alt=""><span>${item.name}</span></button>`).join("")}</div></div>
    </div>`;
  productDialog.showModal();
  updateProductDialogEstimate();
}

function updateProductDialogEstimate() {
  if (!selectedProduct) return;
  const sizeValue = productDialog.querySelector('input[name="dialog-size"]:checked').value;
  const size = sizeOptions.find((option) => option.value === sizeValue);
  const material = productDialog.querySelector("#dialog-material").value;
  const amount = Math.round(selectedProduct.price * sizeMultipliers[size.value] * materialMultipliers[material]);
  productDialog.querySelector("#dialog-size-label").textContent = size.label;
  productDialog.querySelector("#dialog-price").textContent = `$${amount}`;
}

productDialog.addEventListener("input", (event) => {
  if (event.target.matches('input[name="dialog-size"], #dialog-material')) updateProductDialogEstimate();
});
productDialog.addEventListener("click", (event) => {
  if (event.target.closest("[data-dialog-close]")) {
    productDialog.close();
    return;
  }
  const relatedButton = event.target.closest("[data-related-product]");
  if (relatedButton) {
    const relatedProduct = products.find((item) => item.id === relatedButton.dataset.relatedProduct);
    if (relatedProduct) openProductDetails(relatedProduct);
    return;
  }
  const zoomButton = event.target.closest("[data-image-zoom]");
  if (zoomButton) {
    const imagePanel = productDialog.querySelector(".dialog-product-art");
    imagePanel.classList.toggle("is-zoomed");
    zoomButton.setAttribute("aria-pressed", String(imagePanel.classList.contains("is-zoomed")));
    zoomButton.textContent = imagePanel.classList.contains("is-zoomed") ? "−" : "+";
    return;
  }
  if (!event.target.closest("[data-dialog-add]") || !selectedProduct) return;
  const sizeValue = productDialog.querySelector('input[name="dialog-size"]:checked').value;
  const size = sizeOptions.find((option) => option.value === sizeValue);
  quoteForm.elements["project-type"].value = { helmets: "helmet", swords: "sword", statues: "statue", keychains: "keychain" }[selectedProduct.category];
  quoteForm.elements["project-size"].value = size.value;
  quoteForm.elements.material.value = productDialog.querySelector("#dialog-material").value;
  currentQuoteBasePrice = selectedProduct.price;
  quoteForm.elements["project-notes"].value = `Interested in ${selectedProduct.name}.`;
  updateEstimate();
  productDialog.close();
  document.querySelector("#custom").scrollIntoView({ behavior: "smooth" });
  showToast(`${selectedProduct.name} added to your custom quote.`);
});
productDialog.addEventListener("click", (event) => {
  if (event.target === productDialog) productDialog.close();
});

const quoteForm = document.querySelector("#quote-form");
const estimate = document.querySelector("#estimate");
const sizeSlider = document.querySelector("#project-size-range");
const sizeLabel = document.querySelector("#size-label");
const previewTitle = document.querySelector("#preview-title");
const previewDescription = document.querySelector("#preview-description");
const sizeMultipliers = { small: 0.7, medium: 1, large: 1.65, xl: 2.4 };
const materialMultipliers = { pla: 1, petg: 1.2, resin: 1.45 };
const categoryStartingPrices = { helmet: 65, sword: 50, statue: 35, keychain: 12, other: 40 };
let currentQuoteBasePrice;
const sizeOptions = [
  { value: "small", label: "Small · 4 in", preview: "Your small creation", inches: "4 inches" },
  { value: "medium", label: "Medium · 9 in", preview: "Your medium creation", inches: "9 inches" },
  { value: "large", label: "Large · 16 in", preview: "Your large creation", inches: "16 inches" },
  { value: "xl", label: "Extra large · 24+ in", preview: "Your extra-large creation", inches: "24 inches or more" }
];
const materialDescriptions = { pla: "A bold idea in plant-based PLA.", petg: "A durable design in resilient PETG.", resin: "Fine details, printed in high-resolution resin." };

function updateEstimate() {
  const type = quoteForm.elements["project-type"].value;
  const size = quoteForm.elements["project-size"].value;
  const material = quoteForm.elements.material.value;
  const selectedSize = sizeOptions.find((option) => option.value === size);
  const amount = Math.round((currentQuoteBasePrice ?? categoryStartingPrices[type]) * sizeMultipliers[size] * materialMultipliers[material]);
  estimate.value = `$${amount}`;
  estimate.textContent = `$${amount}`;
  if (selectedSize) {
    const sizeIndex = sizeOptions.indexOf(selectedSize);
    sizeSlider.value = String(sizeIndex + 1);
    sizeSlider.setAttribute("aria-valuetext", `${selectedSize.label.split(" · ")[0]}, ${selectedSize.inches}`);
    sizeLabel.textContent = selectedSize.label;
    previewTitle.textContent = selectedSize.preview;
  }
  previewDescription.textContent = materialDescriptions[material];
}

quoteForm.addEventListener("change", (event) => {
  if (event.target.matches("#project-type")) currentQuoteBasePrice = undefined;
  updateEstimate();
});
quoteForm.addEventListener("input", (event) => {
  if (event.target.matches("select")) updateEstimate();
});
sizeSlider.addEventListener("input", () => {
  const size = sizeOptions[Number(sizeSlider.value) - 1];
  quoteForm.elements["project-size"].value = size.value;
  updateEstimate();
});
updateEstimate();

const fileInput = document.querySelector("#design-file");
const uploadControl = document.querySelector(".upload-control");

function updateSelectedFile(file) {
  const label = document.querySelector("#upload-label");
  if (!file) {
    label.replaceChildren();
    const prompt = document.createElement("b");
    const note = document.createElement("small");
    prompt.textContent = "Drop your design here—let’s make magic!";
    note.textContent = "Or choose a file · STL, OBJ, 3MF, JPG, PNG · up to 20 MB";
    label.append(prompt, note);
    return;
  }
  const allowedExtensions = [".stl", ".obj", ".3mf", ".jpg", ".jpeg", ".png"];
  const extension = file.name.slice(file.name.lastIndexOf(".")).toLowerCase();
  if (file.size > 20 * 1024 * 1024 || !allowedExtensions.includes(extension)) {
    fileInput.value = "";
    updateSelectedFile(null);
    showToast(file.size > 20 * 1024 * 1024 ? "That file is over 20 MB. Please choose a smaller file." : "That file type is not supported.");
    return;
  }
  const fileName = document.createElement("b");
  const fileInfo = document.createElement("small");
  fileName.textContent = file.name;
  fileInfo.textContent = `${(file.size / (1024 * 1024)).toFixed(1)} MB · selected, attach to your email`;
  label.replaceChildren(fileName, fileInfo);
}

fileInput.addEventListener("change", (event) => updateSelectedFile(event.target.files[0]));
uploadControl.addEventListener("dragover", (event) => {
  event.preventDefault();
  uploadControl.classList.add("is-dragging");
});
uploadControl.addEventListener("dragleave", (event) => {
  if (!uploadControl.contains(event.relatedTarget)) uploadControl.classList.remove("is-dragging");
});
uploadControl.addEventListener("drop", (event) => {
  event.preventDefault();
  uploadControl.classList.remove("is-dragging");
  const [file] = event.dataTransfer.files;
  if (!file) return;
  const transfer = new DataTransfer();
  transfer.items.add(file);
  fileInput.files = transfer.files;
  updateSelectedFile(file);
});

const BUSINESS_EMAIL = "hello@matts3dcustoms.com";

quoteForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(quoteForm);
  const file = data.get("design-file");
  const subject = encodeURIComponent("Custom 3D print quote request");
  const body = encodeURIComponent([
    `Project: ${data.get("project-type")}`,
    `Size: ${data.get("project-size")}`,
    `Material: ${data.get("material")}`,
    `Estimated starting price: ${estimate.value} USD`,
    `Reference file: ${file?.name || "None"}`,
    "",
    `Notes: ${data.get("project-notes") || "None"}`,
    "",
    "Please attach your reference file to this email before sending."
  ].join("\n"));
  document.querySelector("#quote-message").textContent = "Your email app will open with the quote details. Attach your reference file there before sending.";
  window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
});

document.querySelector("#contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const subject = encodeURIComponent(`A note from ${data.get("name")}`);
  const body = encodeURIComponent(`${data.get("message")}\n\nReply to: ${data.get("email")}`);
  document.querySelector("#contact-message-status").textContent = "Your email app will open with your message ready to send.";
  window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
});

const testimonialTrack = document.querySelector("#testimonial-track");
let testimonialIndex = 0;

function showTestimonial(index) {
  const cards = [...testimonialTrack.children];
  const gap = Number.parseFloat(getComputedStyle(testimonialTrack).gap) || 0;
  const cardWidth = cards[0]?.getBoundingClientRect().width || 0;
  testimonialIndex = (index + cards.length) % cards.length;
  testimonialTrack.style.transform = `translateX(-${testimonialIndex * (cardWidth + gap)}px)`;
}

document.querySelector("#testimonial-prev").addEventListener("click", () => showTestimonial(testimonialIndex - 1));
document.querySelector("#testimonial-next").addEventListener("click", () => showTestimonial(testimonialIndex + 1));
window.addEventListener("resize", () => showTestimonial(testimonialIndex));

let logoClicks = 0;
let logoClickTimer;
document.querySelector(".brand-image").addEventListener("click", (event) => {
  logoClicks += 1;
  window.clearTimeout(logoClickTimer);
  if (logoClicks === 3) {
    event.preventDefault();
    logoClicks = 0;
    document.body.classList.add("easter-egg-active");
    showToast("✨ You found the secret sparkle! Keep making curious things.");
    window.setTimeout(() => document.body.classList.remove("easter-egg-active"), 1600);
  } else {
    logoClickTimer = window.setTimeout(() => { logoClicks = 0; }, 1200);
  }
});

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");
menuToggle.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
  menuToggle.setAttribute("aria-label", expanded ? "Open navigation" : "Close navigation");
  mainNav.classList.toggle("is-open", !expanded);
});
mainNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    mainNav.classList.remove("is-open");
  }
});

document.querySelector("#year").textContent = String(new Date().getFullYear());
