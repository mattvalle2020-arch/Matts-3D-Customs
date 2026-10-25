const DATA={Anime:{c:'#ff8c00',s:{Props:['Anime fan prop','Wearable anime accessory'],Accessories:['Headband','Keychain']}},
Superheroes:{c:'#ff2d95',s:{Emblems:['Original emblem','Display piece'],Props:['Original hero prop']}},
Gaming:{c:'#39ff88',s:{Accessories:['Original keychain','Display piece'],Props:['Original game-inspired prop']}},
Other:{c:'#00b8d4',s:{Custom:['Custom original design','Cosplay accessory','Display prop']}}};
const $=i=>document.getElementById(i);
const productId=new URLSearchParams(location.search).get('item');
const product=PRODUCTS.find(item=>item.id===productId);
const initialSelection={
'energy-blade':{genre:'Anime',sub:'Props',item:'Anime fan prop'},
headband:{genre:'Anime',sub:'Accessories',item:'Headband'},
emblem:{genre:'Superheroes',sub:'Emblems',item:'Original emblem'},
keychain:{genre:'Anime',sub:'Accessories',item:'Keychain'},
'custom-prop':{genre:'Other',sub:'Custom',item:'Custom original design'}
}[product?.id];
const initialProductNote=product?`Requested product: ${product.name}\nRequested size: ${new URLSearchParams(location.search).get('size')||'Not specified'}\nRequested finish: ${new URLSearchParams(location.search).get('finish')||'Not specified'}`:'';
let g=initialSelection?.genre||'Anime',sub=initialSelection?.sub||'Props',selectionApplied=false;
function clearStaleProductNote(){
if(initialProductNote&&$('notes').value===initialProductNote)$('notes').value='';
}
function chips(el,keys,cur,cb,col){
el.innerHTML=keys.map(k=>`<button type="button" class="chip ${k===cur?'on':''}" style="--c:${col(k)}" aria-pressed="${k===cur}">${k}</button>`).join('');
[...el.children].forEach((button,i)=>button.onclick=()=>cb(keys[i]))}
function render(){chips($('genres'),Object.keys(DATA),g,k=>{if(k!==g)clearStaleProductNote();g=k;sub=Object.keys(DATA[g].s)[0];render()},k=>DATA[k].c);
chips($('subs'),Object.keys(DATA[g].s),sub,k=>{if(k!==sub)clearStaleProductNote();sub=k;render()},()=>DATA[g].c);
 $('item').innerHTML=DATA[g].s[sub].map(i=>`<option>${i}</option>`).join('');
if(initialSelection&&!selectionApplied){
$('item').value=initialSelection.item;
if(product){
$('notes').value=initialProductNote;
}
selectionApplied=true;
}
price()}
let last=0;
function price(){const base=20+Math.round(+$('size').value),m=+$('mat').value,l=Math.round(base*.5),shipping=$('express').checked?20:0,t=base+m+l+shipping;
$('sz').textContent=$('size').value;
$('total').innerHTML=`Preliminary estimate: <b>$${Math.max(50,t-20)}–$${t+40}</b><br><small>Includes selected material and shipping estimates; final price confirmed after design review.</small>`;
if(t!==last){$('total').classList.add('pop');setTimeout(()=>$('total').classList.remove('pop'),300)}last=t}
$('size').oninput=price;$('mat').onchange=price;$('express').onchange=price;
$('item').onchange=()=>{clearStaleProductNote();price()};
const steps=[...document.querySelectorAll('.step')];let n=0;
const requestLink=$('request-link');
const clearPreparedEmail=()=>{requestLink.hidden=true;$('done').textContent=''};
$('f').addEventListener('input',clearPreparedEmail);
$('f').addEventListener('change',clearPreparedEmail);
function show(){steps.forEach((s,i)=>s.classList.toggle('active',i===n));$('prev').style.visibility=n?'visible':'hidden';$('next').textContent=n===steps.length-1?'Submit Request':'Next'}
$('prev').onclick=()=>{n--;show()};
$('next').onclick=()=>{if(n<steps.length-1){n++;show();return}
if(!$('f').reportValidity())return;
const files=[...$('file').files].map(file=>file.name);
const details=[
`Name: ${$('name').value}`,
`Email: ${$('email').value}`,
`Category: ${g} / ${sub}`,
`Item: ${$('item').value}`,
`Approximate size: ${$('size').value} cm`,
`Material: ${$('mat').selectedOptions[0].text}`,
`Express shipping requested: ${$('express').checked?'Yes':'No'}`,
`Notes: ${$('notes').value||'None'}`,
`Reference files to attach: ${files.length?files.join(', '):'None'}`
].join('\n');
const query=new URLSearchParams({subject:`Custom order request: ${$('item').value}`,body:details});
$('request-link').href=`mailto:${CONTACT_EMAIL}?${query}`;
$('request-link').hidden=false;
$('done').textContent='Your email draft is ready. Open it below, review the details, attach any reference files, and send it to submit your request.'};
const d=$('drop');
d.ondragover=e=>{e.preventDefault();d.classList.add('over')};d.ondragleave=()=>d.classList.remove('over');
d.ondrop=e=>{e.preventDefault();d.classList.remove('over');$('file').files=e.dataTransfer.files;list()};
$('file').onchange=list;function list(){$('files').textContent=[...$('file').files].map(f=>f.name).join(', ')}
render();show();
