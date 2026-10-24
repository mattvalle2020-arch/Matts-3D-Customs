const DATA={Anime:{c:'#ff8c00',s:{Naruto:['Kunai','Headband'],'One Piece':['Straw Hat'],'Dragon Ball Z':['Energy Blade'],'Attack on Titan':['3D Gear Blade']}},
Superheroes:{c:'#ff2d95',s:{'Spider-Man':['Mask'],Marvel:['Emblem']}},
'Super Sentai':{c:'#39ff88',s:{'Power Rangers':['Morpher','Helmet']}},
'Video Games':{c:'#a855ff',s:{Zelda:['Master Sword'],Mario:['Mushroom']}},
'Star Wars':{c:'#ffe14d',s:{Jedi:['Lightsaber'],Rebels:['Blaster']}}};
const $=i=>document.getElementById(i);let g='Anime',sub='Naruto';
const BASE={};
function chips(el,keys,cur,cb,col){el.innerHTML=keys.map(k=>`<span class="chip ${k===cur?'on':''}" style="--c:${col(k)}">${k}</span>`).join('');
[...el.children].forEach((c,i)=>c.onclick=()=>cb(keys[i]))}
function render(){chips($('genres'),Object.keys(DATA),g,k=>{g=k;sub=Object.keys(DATA[g].s)[0];render()},k=>DATA[k].c);
chips($('subs'),Object.keys(DATA[g].s),sub,k=>{sub=k;render()},()=>DATA[g].c);
$('item').innerHTML=DATA[g].s[sub].map(i=>`<option>${i}</option>`).join('');price()}
let last=0;
function price(){const base=30+Math.round(+$('size').value*1.0),m=+$('mat').value,l=Math.round(base*.5),t=base+m+l;
$('sz').textContent=$('size').value;
$('total').innerHTML=`Base Price: $${base} | Material Cost: $${m} | Labor: $${l} | Total: <b>$${t}</b>`;
if(t!==last){$('total').classList.add('pop');setTimeout(()=>$('total').classList.remove('pop'),300)}last=t}
$('size').oninput=price;$('mat').onchange=price;$('item').onchange=price;
const steps=[...document.querySelectorAll('.step')];let n=0;
function show(){steps.forEach((s,i)=>s.classList.toggle('active',i===n));$('prev').style.visibility=n?'visible':'hidden';$('next').textContent=n===steps.length-1?'Submit Request':'Next'}
$('prev').onclick=()=>{n--;show()};
$('next').onclick=()=>{if(n<steps.length-1){n++;show();return}
if(!$('f').reportValidity())return;
const req={genre:g,sub,item:$('item').value,size:$('size').value,material:$('mat').selectedOptions[0].text,notes:$('notes').value,email:$('email').value,files:[...$('file').files].map(f=>f.name)};
const all=JSON.parse(localStorage.getItem('requests')||'[]');all.push(req);localStorage.setItem('requests',JSON.stringify(all));
$('done').textContent='Request submitted! Matt will reply with a personalized quote.'};
const d=$('drop');d.onclick=()=>$('file').click();
d.ondragover=e=>{e.preventDefault();d.classList.add('over')};d.ondragleave=()=>d.classList.remove('over');
d.ondrop=e=>{e.preventDefault();d.classList.remove('over');$('file').files=e.dataTransfer.files;list()};
$('file').onchange=list;function list(){$('files').textContent=[...$('file').files].map(f=>f.name).join(', ')}
render();show();
