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

const conceptModels = [
  { id: "anime-crest", genre: "anime", subgenre: "Wearable accents", name: "Hero’s Crest", type: "statue", shape: "medallion", price: 28, color: 0xe0a75e, description: "A bold, original emblem for a display shelf or costume accessory." },
  { id: "anime-visor", genre: "anime", subgenre: "Wearable accents", name: "Skybound Visor", type: "helmet", shape: "helmet", price: 95, color: 0x6592bf, description: "A lightweight, stylized visor concept with a clean, custom-fit silhouette." },
  { id: "anime-blade", genre: "anime", subgenre: "Fantasy props", name: "Cloudline Blade", type: "sword", shape: "sword", price: 72, color: 0x9c78bd, description: "A dramatic, display-only fantasy prop with an original layered design." },
  { id: "anime-spirit", genre: "anime", subgenre: "Fantasy props", name: "Little Spirit", type: "statue", shape: "figure", price: 38, color: 0x70a98e, description: "A friendly original character concept, ready for your favorite colors." },
  { id: "game-token", genre: "video-games", subgenre: "Handheld & desk", name: "Pixel Quest Token", type: "keychain", shape: "medallion", price: 15, color: 0x72a988, description: "A pocket-size keepsake with a raised, pixel-inspired finish." },
  { id: "game-trophy", genre: "video-games", subgenre: "Arcade & display", name: "High Score Trophy", type: "statue", shape: "trophy", price: 42, color: 0xe0a75e, description: "A playful desk trophy celebrating your next personal best." },
  { id: "game-sword", genre: "video-games", subgenre: "Fantasy props", name: "Questbound Sword", type: "sword", shape: "sword", price: 78, color: 0x6592bf, description: "An original adventure-inspired prop designed for display and cosplay." },
  { id: "scifi-helmet", genre: "sci-fi", subgenre: "Wearables", name: "Orbit Pilot Helmet", type: "helmet", shape: "helmet", price: 110, color: 0x6592bf, description: "A futuristic, made-to-order helmet concept with a sweeping visor." },
  { id: "scifi-drone", genre: "sci-fi", subgenre: "Desk companions", name: "Little Rover", type: "statue", shape: "rover", price: 48, color: 0x70a98e, description: "A friendly exploration-bot concept sized for a desk or shelf." },
  { id: "scifi-key", genre: "sci-fi", subgenre: "Desk companions", name: "Starpath Fob", type: "keychain", shape: "medallion", price: 14, color: 0x9c78bd, description: "A compact keepsake with a clean, space-inspired geometric face." },
  { id: "sentai-helmet", genre: "sentai", subgenre: "Wearables", name: "Prism Ranger Helmet", type: "helmet", shape: "helmet", price: 105, color: 0xe06f7b, description: "A bold, original hero-helmet silhouette, tailored to your measurements." },
  { id: "sentai-blade", genre: "sentai", subgenre: "Display props", name: "Guardian’s Edge", type: "sword", shape: "sword", price: 76, color: 0xe0a75e, description: "A colorful, non-functional display prop with a layered guard." },
  { id: "cartoon-mascot", genre: "cartoons", subgenre: "Character figures", name: "Sunny Sidekick", type: "statue", shape: "figure", price: 36, color: 0xe0a75e, description: "A cheerful, original character concept that can be customized in color." },
  { id: "cartoon-charm", genre: "cartoons", subgenre: "Small gifts", name: "Pocket Pal Charm", type: "keychain", shape: "medallion", price: 13, color: 0x70a98e, description: "A bright, lightweight charm for bags, keys, or a thoughtful little gift." },
  { id: "theater-mask", genre: "theater", subgenre: "Wearables", name: "Moonlit Stage Mask", type: "helmet", shape: "mask", price: 58, color: 0x9c78bd, description: "A stage-ready mask concept designed to be light and easy to personalize." },
  { id: "theater-sword", genre: "theater", subgenre: "Display props", name: "Stagecraft Saber", type: "sword", shape: "sword", price: 68, color: 0x6592bf, description: "A lightweight, non-functional theatrical prop with a custom color finish." }
];

const genreLabels = {
  anime: "Anime-inspired",
  "video-games": "Video game props",
  "sci-fi": "Sci-fi",
  sentai: "Sentai-inspired",
  cartoons: "Cartoon-inspired",
  theater: "Theater props"
};
let activeGenre = "anime";
let activeSubgenre = "all";
let selectedConcept;
let modelScene;
let modelCamera;
let modelRenderer;
let modelObject;
let modelPointer;
let modelDragging = false;
let modelLastX = 0;
let modelLastY = 0;
let modelRotationX = 0;
let modelRotationY = 0;

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

function addModelPart(group, geometry, material, position, scale, rotation = [0, 0, 0]) {
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(...position);
  mesh.scale.set(...scale);
  mesh.rotation.set(...rotation);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  group.add(mesh);
  return mesh;
}

function makeConceptObject(concept) {
  const group = new THREE.Group();
  const mainMaterial = new THREE.MeshStandardMaterial({ color: concept.color, roughness: 0.43, metalness: 0.14 });
  const trimMaterial = new THREE.MeshStandardMaterial({ color: 0xd5dce5, roughness: 0.3, metalness: 0.55 });
  const darkMaterial = new THREE.MeshStandardMaterial({ color: 0x24354a, roughness: 0.36, metalness: 0.2 });
  const ringMaterial = new THREE.MeshStandardMaterial({ color: 0xd9a957, roughness: 0.3, metalness: 0.62 });

  if (concept.shape === "sword") {
    addModelPart(group, new THREE.BoxGeometry(0.28, 2.7, 0.1), mainMaterial, [0, 1.35, 0], [0.55, 1, 0.45]);
    addModelPart(group, new THREE.ConeGeometry(0.18, 0.48, 4), trimMaterial, [0, 2.93, 0], [1, 1, 0.48]);
    addModelPart(group, new THREE.BoxGeometry(0.95, 0.2, 0.18), ringMaterial, [0, 0.6, 0], [1, 1, 0.75]);
    addModelPart(group, new THREE.CylinderGeometry(0.12, 0.13, 0.78, 12), darkMaterial, [0, 0.08, 0], [1, 1, 0.75]);
    addModelPart(group, new THREE.SphereGeometry(0.19, 16, 12), ringMaterial, [0, -0.34, 0], [1, 0.7, 0.7]);
  } else if (concept.shape === "helmet" || concept.shape === "mask") {
    addModelPart(group, new THREE.SphereGeometry(1.05, 32, 24, 0, Math.PI * 2, 0, Math.PI * 0.72), mainMaterial, [0, 0.48, 0], [1, 1.04, 0.86]);
    addModelPart(group, new THREE.BoxGeometry(1.5, 0.43, 0.17), trimMaterial, [0, 0.52, 0.77], [1, 0.74, 0.55]);
    addModelPart(group, new THREE.BoxGeometry(1.62, 0.17, 0.2), darkMaterial, [0, 0.11, 0.72], [1, 1, 0.7]);
    addModelPart(group, new THREE.TorusGeometry(0.83, 0.07, 8, 32, Math.PI), ringMaterial, [0, -0.2, 0.25], [1, 0.75, 0.55], [Math.PI, 0, 0]);
  } else if (concept.shape === "trophy") {
    addModelPart(group, new THREE.CylinderGeometry(0.62, 0.78, 0.18, 32), darkMaterial, [0, -0.9, 0], [1, 1, 0.72]);
    addModelPart(group, new THREE.CylinderGeometry(0.38, 0.55, 0.26, 32), ringMaterial, [0, -0.68, 0], [1, 1, 0.72]);
    addModelPart(group, new THREE.CylinderGeometry(0.18, 0.25, 0.6, 20), trimMaterial, [0, -0.22, 0], [1, 1, 0.72]);
    addModelPart(group, new THREE.ConeGeometry(0.75, 1.5, 7), mainMaterial, [0, 0.72, 0], [1, 1, 0.7]);
    addModelPart(group, new THREE.TorusGeometry(0.8, 0.11, 10, 24, Math.PI), ringMaterial, [0, 0.55, 0], [1, 1, 0.5], [0, 0, Math.PI]);
  } else if (concept.shape === "rover") {
    addModelPart(group, new THREE.BoxGeometry(1.35, 0.7, 0.8), mainMaterial, [0, -0.1, 0], [1, 1, 1]);
    addModelPart(group, new THREE.SphereGeometry(0.42, 24, 18), trimMaterial, [0, 0.62, 0.05], [1, 0.85, 0.86]);
    addModelPart(group, new THREE.SphereGeometry(0.12, 16, 12), darkMaterial, [0, 0.67, 0.42], [1, 1, 0.55]);
    [-0.48, 0.48].forEach((x) => addModelPart(group, new THREE.CylinderGeometry(0.27, 0.27, 0.16, 24), darkMaterial, [x, -0.55, 0.18], [1, 1, 1], [Math.PI / 2, 0, 0]));
    addModelPart(group, new THREE.CylinderGeometry(0.035, 0.035, 0.44, 12), ringMaterial, [0, 1.12, 0], [1, 1, 1]);
    addModelPart(group, new THREE.SphereGeometry(0.12, 14, 10), ringMaterial, [0, 1.35, 0], [1, 1, 1]);
  } else if (concept.shape === "figure") {
    addModelPart(group, new THREE.CylinderGeometry(0.52, 0.62, 0.25, 24), darkMaterial, [0, -0.92, 0], [1, 1, 0.78]);
    addModelPart(group, new THREE.SphereGeometry(0.54, 24, 18), mainMaterial, [0, -0.18, 0], [0.9, 1.08, 0.8]);
    addModelPart(group, new THREE.SphereGeometry(0.42, 24, 18), trimMaterial, [0, 0.62, 0], [1, 1.05, 0.92]);
    [-0.16, 0.16].forEach((x) => addModelPart(group, new THREE.SphereGeometry(0.055, 12, 8), darkMaterial, [x, 0.66, 0.39], [1, 1, 0.55]));
    addModelPart(group, new THREE.ConeGeometry(0.18, 0.34, 4), ringMaterial, [-0.27, 1.03, 0], [1, 1, 0.8], [0, 0, -0.35]);
    addModelPart(group, new THREE.ConeGeometry(0.18, 0.34, 4), ringMaterial, [0.27, 1.03, 0], [1, 1, 0.8], [0, 0, 0.35]);
  } else {
    addModelPart(group, new THREE.TorusGeometry(0.72, 0.18, 12, 40), ringMaterial, [0, 0.1, 0], [1, 1, 0.3]);
    addModelPart(group, new THREE.CylinderGeometry(0.49, 0.49, 0.18, 32), mainMaterial, [0, 0.1, 0], [1, 1, 0.45]);
    addModelPart(group, new THREE.TorusGeometry(0.15, 0.055, 8, 20), trimMaterial, [0.03, 0.1, 0.31], [1, 1, 0.65]);
    addModelPart(group, new THREE.CylinderGeometry(0.055, 0.055, 0.44, 12), ringMaterial, [0, 0.88, 0], [1, 1, 0.5]);
    addModelPart(group, new THREE.TorusGeometry(0.23, 0.055, 8, 24), ringMaterial, [0, 1.12, 0], [1, 1, 1]);
  }
  if (concept.shape === "sword") group.scale.setScalar(0.86);
  return group;
}

function setConcept(concept) {
  selectedConcept = concept;
  document.querySelector("#model-title").textContent = concept.name;
  document.querySelector("#model-description").textContent = concept.description;
  document.querySelector("#model-price").textContent = `From $${concept.price}`;
  document.querySelector("#customize-btn").disabled = false;
  if (modelScene) {
    if (modelObject) {
      modelScene.remove(modelObject);
      modelObject.traverse((part) => {
        part.geometry?.dispose();
        if (Array.isArray(part.material)) part.material.forEach((material) => material.dispose());
        else part.material?.dispose();
      });
    }
    modelObject = makeConceptObject(concept);
    modelObject.position.y = -0.75;
    modelScene.add(modelObject);
    modelRotationX = 0;
    modelRotationY = 0;
  }
  renderConceptCards();
}

function renderConceptCards() {
  const visible = conceptModels.filter((concept) => concept.genre === activeGenre && (activeSubgenre === "all" || concept.subgenre === activeSubgenre));
  document.querySelector("#item-grid").innerHTML = visible.map((concept) => `
    <button class="item-card${concept.id === selectedConcept?.id ? " is-selected" : ""}" type="button" data-concept="${concept.id}" aria-pressed="${concept.id === selectedConcept?.id}">
      <span class="item-swatch" style="--model-color:#${concept.color.toString(16).padStart(6, "0")}" aria-hidden="true"><span>${concept.shape === "sword" ? "✦" : concept.shape === "helmet" || concept.shape === "mask" ? "◒" : concept.shape === "figure" || concept.shape === "rover" ? "●" : "◇"}</span></span>
      <span class="item-card-copy"><b>${concept.name}</b><small>${concept.subgenre} · From $${concept.price}</small></span><span class="item-card-arrow" aria-hidden="true">↗</span>
    </button>`).join("");
}

function renderSubgenres() {
  const subgenres = [...new Set(conceptModels.filter((concept) => concept.genre === activeGenre).map((concept) => concept.subgenre))];
  if (!subgenres.includes(activeSubgenre)) activeSubgenre = "all";
  const filters = [{ id: "all", label: "All concepts" }, ...subgenres.map((label) => ({ id: label, label }))];
  document.querySelector("#sub-genre-nav").innerHTML = filters.map((filter) => `
    <button class="sub-genre-btn${activeSubgenre === filter.id ? " is-active" : ""}" type="button" data-subgenre="${filter.id}" aria-pressed="${activeSubgenre === filter.id}">${filter.label}</button>`).join("");
}

function initializeModelViewer() {
  const container = document.querySelector("#canvas-container");
  const status = document.querySelector("#viewer-status");
  if (!window.THREE || !container) {
    status.textContent = "The interactive preview couldn’t load. You can still explore the concept list below.";
    container.classList.add("viewer-unavailable");
    return;
  }
  try {
    modelScene = new THREE.Scene();
    modelScene.background = new THREE.Color(0xf1f4f7);
    modelCamera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
    modelCamera.position.set(0, 0.65, 7.1);
    modelRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    modelRenderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    modelRenderer.outputEncoding = THREE.sRGBEncoding;
    modelRenderer.shadowMap.enabled = true;
    modelRenderer.shadowMap.type = THREE.PCFSoftShadowMap;
    modelRenderer.domElement.setAttribute("aria-hidden", "true");
    container.prepend(modelRenderer.domElement);
    modelScene.add(new THREE.HemisphereLight(0xffffff, 0x75849a, 0.75));
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.1);
    keyLight.position.set(-3, 5, 5);
    keyLight.castShadow = true;
    modelScene.add(keyLight);
    const fillLight = new THREE.PointLight(0xb9d5f0, 0.35, 16);
    fillLight.position.set(4, 1, -2);
    modelScene.add(fillLight);
    const platformMaterial = new THREE.MeshStandardMaterial({ color: 0xe1e6ec, roughness: 0.72 });
    const platform = new THREE.Mesh(new THREE.CylinderGeometry(1.55, 1.68, 0.16, 64), platformMaterial);
    platform.position.y = -1.38;
    platform.receiveShadow = true;
    modelScene.add(platform);
    modelPointer = modelRenderer.domElement;
    status.remove();
    resizeModelViewer();
    const render = () => {
      window.requestAnimationFrame(render);
      if (modelObject && !modelDragging && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) modelRotationY += 0.003;
      if (modelObject) {
        modelObject.rotation.x = modelRotationX;
        modelObject.rotation.y = modelRotationY;
      }
      modelRenderer.render(modelScene, modelCamera);
    };
    render();
    window.addEventListener("resize", resizeModelViewer);
    modelPointer.addEventListener("pointerdown", (event) => {
      modelDragging = true;
      modelLastX = event.clientX;
      modelLastY = event.clientY;
      modelPointer.setPointerCapture(event.pointerId);
    });
    modelPointer.addEventListener("pointermove", (event) => {
      if (!modelDragging) return;
      modelRotationY += (event.clientX - modelLastX) * 0.009;
      modelRotationX = Math.max(-0.7, Math.min(0.7, modelRotationX + (event.clientY - modelLastY) * 0.006));
      modelLastX = event.clientX;
      modelLastY = event.clientY;
    });
    modelPointer.addEventListener("pointerup", () => { modelDragging = false; });
    modelPointer.addEventListener("pointercancel", () => { modelDragging = false; });
    modelPointer.addEventListener("wheel", (event) => {
      event.preventDefault();
      modelCamera.position.z = Math.max(4.5, Math.min(9, modelCamera.position.z + event.deltaY * 0.006));
    }, { passive: false });
  } catch (error) {
    modelScene = undefined;
    container.classList.add("viewer-unavailable");
    status.textContent = "The interactive preview isn’t available in this browser. You can still explore the concept list below.";
    console.error("Unable to initialize the interactive concept preview.", error);
  }
}

function resizeModelViewer() {
  if (!modelRenderer || !modelCamera) return;
  const container = document.querySelector("#canvas-container");
  const width = Math.max(container.clientWidth, 1);
  const height = Math.max(container.clientHeight, 1);
  modelCamera.aspect = width / height;
  modelCamera.updateProjectionMatrix();
  modelRenderer.setSize(width, height, false);
}

renderSubgenres();
renderConceptCards();
initializeModelViewer();
setConcept(conceptModels[0]);

document.querySelector(".genre-nav").addEventListener("click", (event) => {
  const button = event.target.closest("[data-genre]");
  if (!button) return;
  activeGenre = button.dataset.genre;
  activeSubgenre = "all";
  document.querySelectorAll(".genre-btn").forEach((filter) => {
    const active = filter === button;
    filter.classList.toggle("is-active", active);
    filter.setAttribute("aria-pressed", String(active));
  });
  renderSubgenres();
  renderConceptCards();
  setConcept(conceptModels.find((concept) => concept.genre === activeGenre) || conceptModels[0]);
});

document.querySelector("#sub-genre-nav").addEventListener("click", (event) => {
  const button = event.target.closest("[data-subgenre]");
  if (!button) return;
  activeSubgenre = button.dataset.subgenre;
  renderSubgenres();
  renderConceptCards();
  const visibleConcept = conceptModels.find((concept) => concept.genre === activeGenre && (activeSubgenre === "all" || concept.subgenre === activeSubgenre));
  if (visibleConcept) setConcept(visibleConcept);
});

document.querySelector("#item-grid").addEventListener("click", (event) => {
  const button = event.target.closest("[data-concept]");
  const concept = conceptModels.find((item) => item.id === button?.dataset.concept);
  if (concept) setConcept(concept);
});

document.querySelector("#customize-btn").addEventListener("click", () => {
  if (!selectedConcept) return;
  quoteForm.elements["project-type"].value = selectedConcept.type;
  currentQuoteBasePrice = selectedConcept.price;
  quoteForm.elements["project-notes"].value = `Interested in the ${selectedConcept.name} concept (${genreLabels[selectedConcept.genre]}).`;
  updateEstimate();
  document.querySelector("#custom").scrollIntoView({ behavior: "smooth" });
  showToast(`${selectedConcept.name} added to your custom quote.`);
});

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
