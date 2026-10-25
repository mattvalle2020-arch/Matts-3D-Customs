const id=new URLSearchParams(location.search).get('id');
const p=PRODUCTS.find(x=>x.id===id)||PRODUCTS[0];
document.getElementById('pname').textContent=p.name;
document.getElementById('pdescription').textContent=p.description;
const size=document.getElementById('size');
const sizes=Object.keys(p.prices).filter(value=>value!=='Glow-in-the-Dark');
size.innerHTML=sizes.map((value,index)=>`<option${index===(p.id==='keychain'?0:Math.min(1,sizes.length-1))?' selected':''}>${value}</option>`).join('');
const mats=p.id==='keychain'?['Standard','Glow-in-the-Dark']:['Standard finish','Custom finish'];
let mat=mats[0];
const customize=document.getElementById('customize');
const msg=document.getElementById('msg');
const updateRequestLink=()=>{
const params=new URLSearchParams({item:p.id,size:size.value,finish:mat});
customize.href=`custom-order.html?${params}`;
};
const updatePrice=()=>{
const hasFixedPrice=!(mat==='Custom finish'&&p.id!=='keychain');
const price=mat==='Glow-in-the-Dark'?p.prices['Glow-in-the-Dark']:p.prices[size.value];
document.getElementById('pprice').textContent=hasFixedPrice?formatPrice(price):'Custom quote';
document.getElementById('priceNote').textContent=hasFixedPrice?'Published price for this size and finish.':'Final price depends on finish and design; request a quote before ordering.';
updateRequestLink();
};
const draw=()=>{
document.getElementById('mats').innerHTML=mats.map(m=>`<button type="button" class="chip ${m===mat?'on':''}" aria-pressed="${m===mat}">${m}</button>`).join('');
document.querySelectorAll('#mats .chip').forEach((chip,index)=>chip.onclick=()=>{mat=mats[index];draw();updatePrice()});
};
draw();size.onchange=updatePrice;updatePrice();
document.getElementById('related').innerHTML=PRODUCTS.filter(x=>x!==p).map(x=>`<a class="card" href="product.html?id=${x.id}"><div class="thumb" aria-hidden="true">${x.icon}</div><p class="eyebrow">${x.genre}</p><h3>${x.name}</h3><span class="price">From ${startingPrice(x)}</span></a>`).join('');
const renderPreview=async()=>{
try{
const [THREE,{OrbitControls}]=await Promise.all([import('three'),import('three/addons/controls/OrbitControls.js')]);
const el=document.getElementById('viewer'),scene=new THREE.Scene(),cam=new THREE.PerspectiveCamera(50,el.clientWidth/el.clientHeight,.1,100);
cam.position.set(0,0,4);
const r=new THREE.WebGLRenderer({antialias:true});
r.setSize(el.clientWidth,el.clientHeight);el.appendChild(r.domElement);
const mesh=new THREE.Mesh(new THREE.TorusKnotGeometry(1,.35,128,16),new THREE.MeshStandardMaterial({color:0xcccccc,metalness:.4,roughness:.3}));scene.add(mesh);
const l1=new THREE.PointLight(0x00e5ff,60,20);l1.position.set(3,3,3);const l2=new THREE.PointLight(0xff2d95,60,20);l2.position.set(-3,-2,3);scene.add(l1,l2,new THREE.AmbientLight(0xffffff,.3));
const c=new OrbitControls(cam,r.domElement);c.enableDamping=true;
addEventListener('resize',()=>{if(!el.clientWidth||!el.clientHeight)return;cam.aspect=el.clientWidth/el.clientHeight;cam.updateProjectionMatrix();r.setSize(el.clientWidth,el.clientHeight)});
(function loop(){requestAnimationFrame(loop);mesh.rotation.y+=.005;c.update();r.render(scene,cam)})();
}catch(error){
msg.textContent='The 3D preview is unavailable. You can still request this item using the button above.';
console.error('Unable to load the product preview.',error);
}
};
renderPreview();
