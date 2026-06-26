// ══════════════════════════════════
//  ⚙️  KONFIGURASI — EDIT DI SINI
// ══════════════════════════════════
const NOMOR_WA      = "6289526797014";
const TANGGAL_JADIAN = "2026-6-18";
const DEFAULT_PIN   = "1234";

// ── FOTO DATA (ganti src & cap sesuai kebutuhan) ──
const photoData = {
  1:[
    {src:"https://raw.githubusercontent.com/dfandrn/untukkamumutiara/main/IMG-20260613-WA0081.jpg",cap:"Senyum harian favoritku 1 🤍"},
    {src:"https://raw.githubusercontent.com/dfandrn/untukkamumutiara/main/IMG-20260613-WA0082.jpg",cap:"Pap tercantik hari ini! 2 🥰"},
    {src:"https://raw.githubusercontent.com/dfandrn/untukkamumutiara/main/IMG-20260613-WA0083.jpg",cap:"Gemesnya ga ada tanding 3 ✨"},
    {src:"https://raw.githubusercontent.com/dfandrn/untukkamumutiara/main/IMG-20260613-WA0084.jpg",cap:"Moodbooster terbaikku 4 🌸"},
    {src:"https://raw.githubusercontent.com/dfandrn/untukkamumutiara/main/IMG-20260613-WA0085.jpg",cap:"Lagi apa ya sekarang? 5 🤔"},
    {src:"https://cdn.jsdelivr.net/gh/dfandrn/Cokelat@main/IMG-20260614-WA0099.jpg",cap:"Cantiknya konsisten 6 🔋"},
    {src:"https://cdn.jsdelivr.net/gh/dfandrn/Cokelat@main/IMG-20260614-WA0099.jpg",cap:"Bagian favorit dari hariku 7 🧸"},
    {src:"https://cdn.jsdelivr.net/gh/dfandrn/Cokelat@main/IMG-20260614-WA0099.jpg",cap:"Gak bosen liatinnya 8 💕"},
    {src:"https://cdn.jsdelivr.net/gh/dfandrn/Cokelat@main/IMG-20260614-WA0099.jpg",cap:"Dunia indah kalau ada kamu 9 🪐"},
    {src:"https://cdn.jsdelivr.net/gh/dfandrn/Cokelat@main/IMG-20260614-WA0099.jpg",cap:"Penutup hari yang manis 10 🌙"},
  ],
  2:[
    {src:"https://cdn.jsdelivr.net/gh/dfandrn/Cokelat@main/IMG-20260614-WA0099.jpg",cap:"Pas berdua duniaku lengkap 1 🔋"},
    {src:"https://cdn.jsdelivr.net/gh/dfandrn/Cokelat@main/IMG-20260614-WA0099.jpg",cap:"Gemesnya barengan terus 2 🎀"},
    {src:"https://cdn.jsdelivr.net/gh/dfandrn/Cokelat@main/IMG-20260614-WA0099.jpg",cap:"Momen seru bareng kamu 3 🍕"},
    {src:"https://cdn.jsdelivr.net/gh/dfandrn/Cokelat@main/IMG-20260614-WA0099.jpg",cap:"Saling melengkapi selalu 4 🧩"},
    {src:"https://cdn.jsdelivr.net/gh/dfandrn/Cokelat@main/IMG-20260614-WA0099.jpg",cap:"Tertawa bareng itu candu 5 😂"},
    {src:"https://cdn.jsdelivr.net/gh/dfandrn/Cokelat@main/IMG-20260614-WA0099.jpg",cap:"Kompak terus ya kita 6 🤝"},
    {src:"https://cdn.jsdelivr.net/gh/dfandrn/Cokelat@main/IMG-20260614-WA0099.jpg",cap:"Satu frame penuh cinta 7 ❤️"},
    {src:"https://cdn.jsdelivr.net/gh/dfandrn/Cokelat@main/IMG-20260614-WA0099.jpg",cap:"Kenangan manis tersimpan 8 📸"},
    {src:"https://cdn.jsdelivr.net/gh/dfandrn/Cokelat@main/IMG-20260614-WA0099.jpg",cap:"Foto favorit sepanjang masa 9 🏆"},
    {src:"https://cdn.jsdelivr.net/gh/dfandrn/Cokelat@main/IMG-20260614-WA0099.jpg",cap:"Selamanya mau gini terus 10 🔐"},
  ],
  3:[
    {src:"https://cdn.jsdelivr.net/gh/dfandrn/Cokelat@main/IMG-20260614-WA0099.jpg",cap:"Petualangan seru bareng kamu 1 🚀"},
    {src:"https://cdn.jsdelivr.net/gh/dfandrn/Cokelat@main/IMG-20260614-WA0099.jpg",cap:"Tempat terbaik di sampingmu 2 🪐"},
    {src:"https://cdn.jsdelivr.net/gh/dfandrn/Cokelat@main/IMG-20260614-WA0099.jpg",cap:"Menjelajahi dunia berdua 3 🗺️"},
    {src:"https://cdn.jsdelivr.net/gh/dfandrn/Cokelat@main/IMG-20260614-WA0099.jpg",cap:"Setiap perjalanan berkesan 4 🌄"},
    {src:"https://cdn.jsdelivr.net/gh/dfandrn/Cokelat@main/IMG-20260614-WA0099.jpg",cap:"Jalan-jalan penuh tawa 5 🍦"},
    {src:"https://cdn.jsdelivr.net/gh/dfandrn/Cokelat@main/IMG-20260614-WA0099.jpg",cap:"Dunia terasa lebih luas 6 🗺️"},
    {src:"https://cdn.jsdelivr.net/gh/dfandrn/Cokelat@main/IMG-20260614-WA0099.jpg",cap:"Momen indah di luar sana 7 🎡"},
    {src:"https://cdn.jsdelivr.net/gh/dfandrn/Cokelat@main/IMG-20260614-WA0099.jpg",cap:"Menikmati sore hari indah 8 🌇"},
    {src:"https://cdn.jsdelivr.net/gh/dfandrn/Cokelat@main/IMG-20260614-WA0099.jpg",cap:"Gak mau jalurnya berakhir 9 🛣️"},
    {src:"https://cdn.jsdelivr.net/gh/dfandrn/Cokelat@main/IMG-20260614-WA0099.jpg",cap:"Next trip ke mana lagi? 10 ✈️"},
  ]
};

// ── VIDEO DATA — tinggal paste URL YouTube / Google Drive / .mp4 ──
// type: 'youtube' | 'drive' | 'mp4'
const videoData = [
  {
    title: "Video Lucu Bareng 🎬",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",   // ← ganti URL kamu
    cap: "Hahaha momen ini gak bisa dilupain 😂"
  },
  {
    title: "Video Cantik Banget 💙",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",   // ← ganti URL kamu
    cap: "Ini video favoritku soalnya ada kamu 🥰"
  },
  {
    title: "Momen Jalan Bareng 🗺️",
    type: "mp4",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",      // ← ganti URL .mp4 kamu
    cap: "Petualangan paling berkesan 🚀"
  },
  {
    title: "Video Spesial 💫",
    type: "youtube",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",   // ← ganti URL kamu
    cap: "Ini dari Google Drive kita 🔒"
  },
  {
    title: "Moment Manis 🌸",
    type: "drive",
    url: "https://drive.google.com/file/d/GANTI_ID_DRIVE_KAMU/view",  // ← ganti ID Drive
    cap: "Simpan kenangan terbaik kita di sini 💕"
  },
];

// ── CARA GANTI URL VIDEO ──
// YouTube  → paste URL biasa: https://www.youtube.com/watch?v=xxxxx  type:"youtube"
// Google Drive → https://drive.google.com/file/d/FILE_ID/view         type:"drive"
// File mp4  → link langsung .mp4                                       type:"mp4"

// ══ MUSIK PLAYLIST ══
let musicPlaylist = JSON.parse(localStorage.getItem('g_playlist')||'null') || [
  {title:"musik.mp3", src:"musik.mp3"},
];

// ══════ STARS ══════
(()=>{
  const a=document.getElementById('starsArea');
  for(let i=0;i<55;i++){
    const s=document.createElement('div');s.className='star';
    const sz=.7+Math.random()*2;
    s.style.cssText=`width:${sz}px;height:${sz}px;left:${Math.random()*100}vw;top:${Math.random()*100}vh;--d:${2+Math.random()*4}s;--delay:${Math.random()*6}s`;
    a.appendChild(s);
  }
})();

// ══════ AMBIENT HEARTS ══════
(()=>{
  const c=document.getElementById('ambientC');
  const em=['💙','🤍','💫','✨','💕','🩵'];
  for(let i=0;i<14;i++){
    const h=document.createElement('div');h.className='amb-heart';
    h.innerText=em[Math.floor(Math.random()*em.length)];
    const sz=10+Math.random()*12;
    h.style.cssText=`left:${Math.random()*100}vw;bottom:-30px;--dur:${5+Math.random()*6}s;--delay:${Math.random()*7}s;--sz:${sz}px;--r1:${-15+Math.random()*30}deg;--r2:${-15+Math.random()*30}deg;`;
    c.appendChild(h);
  }
})();

// ══════ TAP EFFECTS ══════
document.body.addEventListener('click',e=>{
  if(e.target.closest('.bottom-sheet')||e.target.closest('.login-card')||e.target.closest('.modal-card')||e.target.closest('.lightbox'))return;
  // ripple
  const ring=document.createElement('div');ring.className='ripple-ring';
  ring.style.cssText=`left:${e.clientX}px;top:${e.clientY}px;width:50px;height:50px;`;
  document.body.appendChild(ring);setTimeout(()=>ring.remove(),700);
  // burst
  const em=['💙','🤍','💫'];
  for(let i=0;i<4;i++){
    const bh=document.createElement('div');bh.className='bheart';
    bh.innerText=em[Math.floor(Math.random()*em.length)];
    bh.style.cssText=`left:${e.clientX}px;top:${e.clientY}px;font-size:${12+Math.random()*8}px;--tx:${(Math.random()-.5)*80}px;--ty:${-30-Math.random()*60}px;animation-delay:${i*.05}s;`;
    document.body.appendChild(bh);setTimeout(()=>bh.remove(),800);
  }
},true);

// swipe trail
let swipeOn=false,lx=0,ly=0;
document.addEventListener('touchstart',e=>{swipeOn=true;lx=e.touches[0].clientX;ly=e.touches[0].clientY;},{passive:true});
document.addEventListener('touchmove',e=>{
  if(!swipeOn)return;
  const x=e.touches[0].clientX,y=e.touches[0].clientY;
  if(Math.hypot(x-lx,y-ly)>28){
    const t=document.createElement('div');t.className='swipe-trail';t.innerText='💙';
    t.style.cssText=`left:${x}px;top:${y}px;`;
    document.body.appendChild(t);setTimeout(()=>t.remove(),550);
    lx=x;ly=y;
  }
},{passive:true});
document.addEventListener('touchend',()=>{swipeOn=false;},{passive:true});

// love burst on page change
function fireLoveBurst(){
  const lb=document.getElementById('loveBurst');lb.innerHTML='';
  const em=['💙','🤍','💫','✨','💕'];
  for(let i=0;i<14;i++){
    const angle=Math.random()*360,dist=50+Math.random()*110;
    const tx=Math.cos(angle*Math.PI/180)*dist,ty=Math.sin(angle*Math.PI/180)*dist;
    const s=document.createElement('div');s.className='burst-h';
    s.innerText=em[Math.floor(Math.random()*em.length)];
    s.style.cssText=`--tx:${tx}px;--ty:${ty}px;--dur:${.5+Math.random()*.3}s;--sz:${14+Math.random()*14}px;animation-delay:${Math.random()*.1}s;`;
    lb.appendChild(s);
  }
  setTimeout(()=>lb.innerHTML='',700);
}

// ══════ RAIN OF HEARTS ══════
let rainIv=null;
function toggleRain(on){
  const c=document.getElementById('rainC');
  if(on){
    if(rainIv)return;
    rainIv=setInterval(()=>{
      const h=document.createElement('div');h.className='rain-heart';
      h.innerText=['💙','🤍','💫','✨','💕'][Math.floor(Math.random()*5)];
      h.style.cssText=`left:${Math.random()*100}vw;--dur:${3+Math.random()*3}s;--delay:0s;--sz:${12+Math.random()*10}px;`;
      c.appendChild(h);setTimeout(()=>h.remove(),6500);
    },300);
  } else {clearInterval(rainIv);rainIv=null;c.innerHTML='';}
}

// ══════ COVER SPARKLE ══════
function buildSparkle(){
  const c=document.getElementById('coverSparkle');c.innerHTML='';
  const cols=['#38bdf8','#7dd3fc','#bfdbfe','#fff','#93c5fd'];
  for(let i=0;i<18;i++){
    const d=document.createElement('div');d.className='sparkle-dot';
    const sz=1.5+Math.random()*3;
    d.style.cssText=`width:${sz}px;height:${sz}px;left:${Math.random()*100}%;top:${Math.random()*100}%;background:${cols[Math.floor(Math.random()*cols.length)]};--d:${2+Math.random()*3}s;--delay:${Math.random()*4}s;`;
    c.appendChild(d);
  }
}
function toggleSparkle(on){document.getElementById('coverSparkle').style.display=on?'block':'none';}

// ══════ QUOTES ══════
const quotes=[
  "Kamu adalah alasan senyumku paling nyata setiap harinya 💙",
  "Jarak bisa memisahkan tempat, tapi tidak pernah bisa memisahkan hati kita 🌙",
  "Aku tidak butuh peta — karena kamu adalah tempat yang selalu ingin aku tuju 🧭",
  "Setiap pagi terasa lebih indah karena tahu kamu ada di dunia yang sama 🌅",
  "Kamu bukan sekedar seseorang — kamu adalah rumah 🏡",
  "Di antara semua hal indah di dunia, kamu adalah favoritku yang paling tulus 🌸",
  "Kangen itu menyakitkan, tapi rasa itu membuktikan betapa berartinya kamu 🥺",
  "Tiap kali ketawa bareng kamu, rasanya dunia jauh lebih ringan 😊",
  "Kamu adalah bab terbaik dalam cerita hidupku 📖",
  "Kalau bisa milih, aku tetap pilih kamu — di setiap semesta yang ada 🌌",
  "Hal kecil yang kamu lakukan selalu berhasil bikin hatiku hangat 🔥",
  "Kamu bukan cuma orang yang aku sayangi — kamu bikin aku mau jadi lebih baik 💪",
];
let lastQI=-1;
function getQuote(){let i;do{i=Math.floor(Math.random()*quotes.length);}while(i===lastQI&&quotes.length>1);lastQI=i;return quotes[i];}
function refreshQuote(){
  const el=document.getElementById('quoteText');el.style.opacity=0;
  setTimeout(()=>{el.innerText=getQuote();el.style.opacity=1;},250);
}

// ══════ PIN SYSTEM ══════
const MAX_ATT=5,LOCK_S=300;
let pinEntry='',fails=parseInt(localStorage.getItem('g_fails')||'0'),lockUntil=parseInt(localStorage.getItem('g_lockuntil')||'0');
function getSavedPin(){return localStorage.getItem('g_pin')||DEFAULT_PIN;}
function savePin(p){localStorage.setItem('g_pin',p);}
function checkLockout(){if(Date.now()<lockUntil){startLockUI(Math.ceil((lockUntil-Date.now())/1000));return true;}return false;}
function numPress(d){if(checkLockout())return;if(pinEntry.length>=4)return;pinEntry+=d;updateDots();if(pinEntry.length===4)setTimeout(checkPin,200);}
function numDelete(){if(checkLockout())return;pinEntry=pinEntry.slice(0,-1);updateDots();}
function updateDots(s=''){for(let i=0;i<4;i++){const d=document.getElementById('d'+i);d.classList.remove('filled','error','success');if(i<pinEntry.length)d.classList.add(s||'filled');}}
function checkPin(){
  if(pinEntry===getSavedPin()){
    fails=0;localStorage.setItem('g_fails','0');localStorage.removeItem('g_lockuntil');
    updateDots('success');setTimeout(doLoginSuccess,420);
  } else {
    fails++;localStorage.setItem('g_fails',fails);
    updateDots('error');if(navigator.vibrate)navigator.vibrate([90,50,90]);
    const rem=MAX_ATT-fails,bar=document.getElementById('attemptsBar'),txt=document.getElementById('attemptsText');
    bar.classList.add('visible');
    if(fails>=MAX_ATT){const u=Date.now()+LOCK_S*1000;localStorage.setItem('g_lockuntil',u);lockUntil=u;pinEntry='';updateDots();startLockUI(LOCK_S);}
    else{bar.classList.toggle('danger',rem<=2);bar.classList.toggle('warn',rem>2&&rem<=3);txt.innerText=`PIN salah! Sisa ${rem} percobaan ⚠️`;setTimeout(()=>{pinEntry='';updateDots();},660);}
  }
}
let lockIv=null;
function startLockUI(secs){
  const p=document.getElementById('lockoutPanel');p.classList.add('show');let rem=secs;updLock(rem);
  clearInterval(lockIv);lockIv=setInterval(()=>{rem--;updLock(rem);if(rem<=0){clearInterval(lockIv);p.classList.remove('show');fails=0;localStorage.setItem('g_fails','0');localStorage.removeItem('g_lockuntil');lockUntil=0;pinEntry='';updateDots();document.getElementById('attemptsBar').classList.remove('visible');}},1000);
}
function updLock(s){const m=Math.floor(s/60);document.getElementById('lockoutTimer').innerText=`${m}:${String(s%60).padStart(2,'0')}`;}
function openChangePw(){document.getElementById('changePwModal').classList.add('open');document.getElementById('modalErr').innerText='';['oldPinInput','newPinInput','confirmPinInput'].forEach(id=>document.getElementById(id).value='');}
function closePwModal(){document.getElementById('changePwModal').classList.remove('open');}
function doChangePin(){
  const o=document.getElementById('oldPinInput').value.trim(),n=document.getElementById('newPinInput').value.trim(),c=document.getElementById('confirmPinInput').value.trim(),e=document.getElementById('modalErr');
  if(o!==getSavedPin()){e.innerText='PIN lama salah!';return;}
  if(!/^\d{4}$/.test(n)){e.innerText='PIN baru harus 4 digit!';return;}
  if(n!==c){e.innerText='Konfirmasi tidak cocok!';return;}
  savePin(n);e.style.color='#22c55e';e.innerText='✅ Berhasil diganti!';setTimeout(closePwModal,1200);
}
const ll=localStorage.getItem('g_lastlogin');
if(ll)document.getElementById('loginLast').innerText=`Terakhir masuk: ${new Date(parseInt(ll)).toLocaleString('id-ID')}`;
window.addEventListener('load',()=>checkLockout());

// ══════ SUCCESS ══════
function doLoginSuccess(){
  localStorage.setItem('g_lastlogin',Date.now());
  const so=document.getElementById('successOverlay');
  document.getElementById('successSub').innerText='Halo sayang! Album rahasiamu sudah siap 💙';
  so.classList.add('show');spawnConfetti();
  setTimeout(()=>{
    so.style.opacity='0';
    setTimeout(()=>{
      so.style.display='none';
      document.getElementById('loginScreen').style.display='none';
      const bb=document.getElementById('bookBox');bb.style.display='block';
      setTimeout(()=>{
        bb.style.opacity='1';
        showPage(0);initPhotoSliders();initVideoSlider();
        startCountdown();startProgressLoop();loadBucket();loadNotes();buildPlaylist();buildSparkle();
        document.getElementById('quoteText').innerText=getQuote();
        loadMood();
      },50);
    },400);
  },2200);
  myAudio.play().catch(()=>{});syncMusicUI();
}
function spawnConfetti(){
  const cols=['#38bdf8','#0ea5e9','#7dd3fc','#fff','#bfdbfe'];
  for(let i=0;i<55;i++){
    const c=document.createElement('div');c.className='confetti-p';
    c.style.cssText=`left:${5+Math.random()*90}vw;top:8vh;background:${cols[Math.floor(Math.random()*cols.length)]};--tx:${(Math.random()-.5)*320}px;--dur:${1.2+Math.random()*1.4}s;animation-delay:${Math.random()*.5}s;transform:rotate(${Math.random()*360}deg);border-radius:${Math.random()>.5?'50%':'2px'};`;
    document.body.appendChild(c);setTimeout(()=>c.remove(),2800);
  }
}

// ══════ BOOK NAV ══════
const TOTAL_PAGES=6;let curPage=0;
function showPage(idx){
  for(let j=0;j<TOTAL_PAGES;j++){
    const p=document.getElementById(`page-${j}`);if(!p)continue;
    p.classList.remove('active-page','prev-page');
    if(j===idx)p.classList.add('active-page');else if(j<idx)p.classList.add('prev-page');
  }
  if(idx!==curPage)fireLoveBurst();
  curPage=idx;updateNavBar();
}
function jumpToPageWithLoading(i){
  const l=document.getElementById('layerLoader');l.classList.add('show-loading');
  setTimeout(()=>{showPage(i);setTimeout(()=>l.classList.remove('show-loading'),200);},280);
}
function bookNextPage(){if(curPage<TOTAL_PAGES-1)showPage(curPage+1);}
function bookPrevPage(){if(curPage>0)showPage(curPage-1);}
function updateNavBar(){
  for(let i=1;i<=4;i++){const b=document.getElementById(`nav-${i}`);if(b)b.classList.toggle('active-nav',i===curPage);}
}

// ══════ BOTTOM SHEET ══════
function openBottomSheet(){document.getElementById('sheetOverlay').classList.add('open');}
function closeBottomSheet(){document.getElementById('sheetOverlay').classList.remove('open');}
function switchSheetTab(n){
  document.querySelectorAll('.sheet-nav-item').forEach(e=>e.classList.remove('active-tab'));
  document.querySelectorAll('.sheet-tab-panel').forEach(e=>e.classList.remove('active-panel'));
  document.getElementById(`tab-${n}`).classList.add('active-tab');
  document.getElementById(`panel-${n}`).classList.add('active-panel');
}

// ══════ COUNTDOWN ══════
const milestones=[7,14,30,50,100,200,365];
let pv={d:-1,h:-1,m:-1,s:-1};
function startCountdown(){
  const start=new Date(TANGGAL_JADIAN).getTime();
  function tick(){
    const diff=Date.now()-start;
    const d=Math.floor(diff/864e5),h=Math.floor((diff%864e5)/36e5),m=Math.floor((diff%36e5)/6e4),s=Math.floor((diff%6e4)/1e3);
    function set(id,v,old){const el=document.getElementById(id);if(!el)return;if(v!==old){el.classList.remove('flip-anim');void el.offsetWidth;el.classList.add('flip-anim');}el.innerText=String(v).padStart(2,'0');}
    set('c-days',d,pv.d);set('c-hours',h,pv.h);set('c-mins',m,pv.m);set('c-secs',s,pv.s);pv={d,h,m,s};
    const mb=document.getElementById('milestoneBadge');
    if(mb){const hit=milestones.find(x=>x===d);if(hit){mb.innerText=`🎉 Selamat! ${hit} Hari Berdua!`;mb.classList.add('show');}}
  }
  tick();setInterval(tick,1000);
}

// ══════ MOOD ══════
function selectMood(el,emoji,label){
  document.querySelectorAll('.mood-btn').forEach(b=>b.classList.remove('selected'));el.classList.add('selected');
  const today=new Date().toLocaleDateString('id-ID');
  const saved=JSON.parse(localStorage.getItem('g_mood')||'[]');
  saved.unshift({emoji,label,date:today});localStorage.setItem('g_mood',JSON.stringify(saved.slice(0,7)));renderMoodHist();
}
function loadMood(){
  const saved=JSON.parse(localStorage.getItem('g_mood')||'[]');
  const today=new Date().toLocaleDateString('id-ID');
  const tm=saved.find(m=>m.date===today);
  if(tm)document.querySelectorAll('.mood-btn').forEach(b=>{if(b.querySelector('.mood-emoji').innerText===tm.emoji)b.classList.add('selected');});
  renderMoodHist();
}
function renderMoodHist(){
  const saved=JSON.parse(localStorage.getItem('g_mood')||'[]');
  const el=document.getElementById('moodHistory');
  el.innerText=saved.length?'Riwayat: '+saved.slice(0,5).map(m=>m.emoji).join(' '):'';
}

// ══════ PHOTO SLIDERS ══════
const sliderSt={};
function initPhotoSliders(){
  [1,2,3].forEach(page=>{
    const photos=photoData[page];
    const track=document.getElementById(`track${page}`);
    const dotsC=document.getElementById(`dots-container-${page}`);
    track.innerHTML='';dotsC.innerHTML='';
    photos.forEach((ph,i)=>{
      const frame=document.createElement('div');frame.className='polaroid-frame';
      const wrap=document.createElement('div');wrap.className='image-container-fix';
      const skel=document.createElement('div');skel.className='img-skeleton';
      const img=document.createElement('img');img.src=ph.src;img.loading='lazy';
      img.onload=()=>{img.classList.add('loaded');skel.remove();};
      wrap.appendChild(skel);wrap.appendChild(img);
      wrap.addEventListener('click',()=>openLightbox(page,i));
      const cap=document.createElement('div');cap.className='polaroid-caption';cap.contentEditable=true;cap.spellcheck=false;cap.innerText=ph.cap;
      frame.appendChild(wrap);frame.appendChild(cap);track.appendChild(frame);
      const dot=document.createElement('div');dot.className='dot'+(i===0?' active':'');dotsC.appendChild(dot);
    });
    sliderSt[page]={idx:0,total:photos.length};
    setupPhotoSlider(page);
  });
}
function setupPhotoSlider(page){
  const track=document.getElementById(`track${page}`);
  const dotsC=document.getElementById(`dots-container-${page}`);
  const counter=document.getElementById(`counter-${page}`);
  const st=sliderSt[page];let sx=0;
  function upd(){track.style.transform=`translateX(-${st.idx*100}%)`;Array.from(dotsC.children).forEach((d,i)=>d.classList.toggle('active',i===st.idx));if(counter)counter.innerText=`${st.idx+1} / ${st.total}`;}
  track.addEventListener('touchstart',e=>{sx=e.touches[0].clientX;},{passive:true});
  track.addEventListener('touchend',e=>{const diff=sx-e.changedTouches[0].clientX;if(diff>40&&st.idx<st.total-1){st.idx++;upd();}else if(diff<-40&&st.idx>0){st.idx--;upd();}},{passive:true});
}

// ══════ VIDEO SLIDER (FIXED) ══════
// ════ HELPER: Convert URL ke Embed ═══
function getEmbedSrc(v){
  if(v.type==='youtube'){
    const m=v.url.match(/(?:youtu\.be\/|watch\?v=|shorts\/)([A-Za-z0-9_-]{11})/);
    return{tag:'iframe',src:m?`https://www.youtube.com/embed/${m[1]}?rel=0&playsinline=1`:v.url};
  }
  if(v.type==='drive'){
    const m=v.url.match(/\/d\/([^/]+)/);
    return{tag:'iframe',src:m?`https://drive.google.com/file/d/${m[1]}/preview`:v.url};
  }
  return{tag:'video',src:v.url};
}

let vIdx=0;
let videoInteractive=false;

function initVideoSlider(){
  const track=document.getElementById('videoTrack');
  const dotsC=document.getElementById('vDots');
  const counter=document.getElementById('counter-video');
  track.innerHTML='';dotsC.innerHTML='';

  videoData.forEach((v,i)=>{
    const slide=document.createElement('div');slide.className='video-card-slide';
    const box=document.createElement('div');box.className='video-embed-box';
    const em=getEmbedSrc(v);
    if(em.tag==='iframe'){
      const ifr=document.createElement('iframe');
      ifr.src=em.src;ifr.allowFullscreen=true;
      ifr.allow='autoplay;encrypted-media;picture-in-picture';
      ifr.loading='lazy';
      ifr.style.pointerEvents='none'; // ← KUNCI: matikan pointer di iframe
      box.appendChild(ifr);
    } else {
      const vid=document.createElement('video');
      vid.src=em.src;vid.controls=true;vid.playsInline=true;vid.preload='metadata';
      vid.style.pointerEvents='none'; // ← KUNCI: matikan pointer di video
      box.appendChild(vid);
    }
    const cap=document.createElement('div');cap.className='video-caption';cap.innerText=v.cap;
    slide.appendChild(box);slide.appendChild(cap);track.appendChild(slide);
    const dot=document.createElement('div');dot.className='v-dot'+(i===0?' active':'');dotsC.appendChild(dot);
  });
  if(counter)counter.innerText=`1 / ${videoData.length}`;
  setupVideoSwipe();
}

function setupVideoSwipe(){
  const overlay=document.getElementById('videoOverlay');
  let sx=0,sy=0;

  // ── Touch events (mobile) ──
  overlay.addEventListener('touchstart',e=>{
    if(videoInteractive)return;
    sx=e.touches[0].clientX;sy=e.touches[0].clientY;
  },{passive:true});

  overlay.addEventListener('touchend',e=>{
    if(videoInteractive)return;
    const diff=sx-e.changedTouches[0].clientX;
    if(diff>40&&vIdx<videoData.length-1){vIdx++;updateVideoSlider();}
    else if(diff<-40&&vIdx>0){vIdx--;updateVideoSlider();}
  },{passive:true});

  // ── Mouse events (desktop) ──
  let mx=0,mouseDown=false;
  overlay.addEventListener('mousedown',e=>{if(!videoInteractive){mx=e.clientX;mouseDown=true;}});
  overlay.addEventListener('mouseup',e=>{
    if(videoInteractive||!mouseDown)return;
    const diff=mx-e.clientX;
    if(diff>40&&vIdx<videoData.length-1){vIdx++;updateVideoSlider();}
    else if(diff<-40&&vIdx>0){vIdx--;updateVideoSlider();}
    mouseDown=false;
  });
  overlay.addEventListener('mouseleave',()=>{mouseDown=false;});
}

function updateVideoSlider(){
  const track=document.getElementById('videoTrack');
  const dotsC=document.getElementById('vDots');
  const counter=document.getElementById('counter-video');
  track.style.transform=`translateX(-${vIdx*100}%)`;
  Array.from(dotsC.children).forEach((d,i)=>d.classList.toggle('active',i===vIdx));
  if(counter)counter.innerText=`${vIdx+1} / ${videoData.length}`;
  // Reset ke mode swipe setiap ganti video
  if(videoInteractive)toggleVideoControls();
}

function videoNav(dir){
  const ni=vIdx+dir;
  if(ni>=0&&ni<videoData.length){vIdx=ni;updateVideoSlider();}
}

function toggleVideoControls(){
  const overlay=document.getElementById('videoOverlay');
  const btn=document.getElementById('videoCtrlBtn');
  const track=document.getElementById('videoTrack');
  videoInteractive=!videoInteractive;

  if(videoInteractive){
    overlay.classList.add('video-interactive');
    btn.innerText='✕ Tutup Kontrol';
    btn.style.background='rgba(239,68,68,.15)';
    btn.style.borderColor='rgba(239,68,68,.3)';
    btn.style.color='#ef4444';
    // Aktifkan pointer hanya di video yang sedang aktif
    track.querySelectorAll('.video-card-slide').forEach((s,i)=>{
      const m=s.querySelector('iframe,video');
      if(m)m.style.pointerEvents=(i===vIdx)?'auto':'none';
    });
  } else {
    overlay.classList.remove('video-interactive');
    btn.innerText='🎮 Kontrol';
    btn.style.background='rgba(56,189,248,.12)';
    btn.style.borderColor='rgba(56,189,248,.25)';
    btn.style.color='#38bdf8';
    // Matikan semua pointer di video/iframe
    track.querySelectorAll('iframe,video').forEach(m=>m.style.pointerEvents='none');
  }
}


// ══════ LIGHTBOX ══════
let lbPage=1,lbIdx=0;
function openLightbox(page,idx){
  lbPage=page;lbIdx=idx;const ph=photoData[page][idx];
  document.getElementById('lightboxImg').src=ph.src;
  document.getElementById('lightboxCaption').innerText=ph.cap;
  document.getElementById('lightboxCounter').innerText=`${idx+1} / ${photoData[page].length}`;
  document.getElementById('lightbox').classList.add('open');
}
function closeLightbox(){document.getElementById('lightbox').classList.remove('open');}
function lightboxPrev(){if(lbIdx>0){lbIdx--;openLightbox(lbPage,lbIdx);}}
function lightboxNext(){if(lbIdx<photoData[lbPage].length-1){lbIdx++;openLightbox(lbPage,lbIdx);}}

// ══════ BUCKET LIST ══════
let bucketItems=[];
function loadBucket(){
  const s=localStorage.getItem('g_bucket');
  if(s){bucketItems=JSON.parse(s);}else{
    bucketItems=[
      {text:"Nonton bioskop drakor berdua 🎬",done:false},{text:"Nyobain es krim unik viral 🍦",done:false},
      {text:"Jalan sore sunset di pantai 🌅",done:false},{text:"Masak makanan kesukaan bareng 🍳",done:false},
      {text:"Foto box gaya lucu/gemes 📸",done:false},
    ];saveBucket();
  }renderBucket();
}
function saveBucket(){localStorage.setItem('g_bucket',JSON.stringify(bucketItems));}
function renderBucket(){
  const c=document.getElementById('bucketContainer');c.innerHTML='';
  const done=bucketItems.filter(x=>x.done).length,pct=bucketItems.length?Math.round(done/bucketItems.length*100):0;
  document.getElementById('bpFill').style.width=pct+'%';
  document.getElementById('bpText').innerText=`${done} / ${bucketItems.length} selesai`;
  bucketItems.forEach((item,i)=>{
    const div=document.createElement('div');div.className='bucket-item'+(item.done?' checked':'');
    div.innerHTML=`<input type="checkbox" ${item.done?'checked':''}><span>${item.text}</span>`;
    div.addEventListener('click',()=>{bucketItems[i].done=!bucketItems[i].done;saveBucket();renderBucket();});
    c.appendChild(div);
  });
}
function addBucketItem(){const inp=document.getElementById('bucketInput');const txt=inp.value.trim();if(!txt)return;bucketItems.push({text:txt,done:false});saveBucket();renderBucket();inp.value='';}

// ══════ PAP ══════
function triggerFileSelect(){document.getElementById('photoInput').click();}
function handlePhotoSelect(e){
  const f=e.target.files[0];if(!f)return;const r=new FileReader();
  r.onload=ev=>{document.getElementById('imgPreview').src=ev.target.result;document.getElementById('previewContainer').style.display='block';document.getElementById('papCaption').style.display='block';document.getElementById('btnWa').style.display='flex';};
  r.readAsDataURL(f);
}
function sendToWhatsApp(){
  const cap=document.getElementById('papCaption').value||'Halo sayang! Ini pap terbaikku hari ini! 🥰';
  window.open(`https://api.whatsapp.com/send?phone=${NOMOR_WA}&text=${encodeURIComponent(cap+'\n\n(via Secret Gallery App 💙)')}`,'_blank');
}

// ══════ NOTES ══════
let notes=[];
function loadNotes(){const s=localStorage.getItem('g_notes');notes=s?JSON.parse(s):[];renderNotes();}
function saveNotes(){localStorage.setItem('g_notes',JSON.stringify(notes));}
function renderNotes(){
  const c=document.getElementById('notesList');c.innerHTML='';
  if(!notes.length){c.innerHTML='<div style="text-align:center;color:#334155;font-size:.75rem;padding:18px;">Belum ada pesan... Tulis sesuatu 💌</div>';return;}
  [...notes].reverse().forEach((n,ri)=>{
    const i=notes.length-1-ri;const d=document.createElement('div');d.className='note-card';
    d.innerHTML=`<div class="note-text">${n.text}</div><div class="note-time">${new Date(n.ts).toLocaleString('id-ID')}</div><div class="del-note" onclick="deleteNote(${i})">✕</div>`;
    c.appendChild(d);
  });
}
function addNote(){const inp=document.getElementById('noteInput');const txt=inp.value.trim();if(!txt)return;notes.push({text:txt,ts:Date.now()});saveNotes();renderNotes();inp.value='';}
function deleteNote(i){notes.splice(i,1);saveNotes();renderNotes();}

// ══════ MUSIC ══════
const myAudio=document.getElementById('albumMusic');
const musicDisc=document.getElementById('musicDisc');
const eqBars=document.getElementById('eqBars');
let isMuted=false,repeatMode=0,isShuffled=false,curTrack=0;
const repeatIcons=['🔁','🔁','🔂'];
function savePlaylist(){localStorage.setItem('g_playlist',JSON.stringify(musicPlaylist));}
function buildPlaylist(){
  const row=document.getElementById('playlistRow');row.innerHTML='';
  musicPlaylist.forEach((t,i)=>{
    const d=document.createElement('div');d.className='pl-item'+(i===curTrack?' active-song':'');
    d.innerText=t.title;d.addEventListener('click',()=>selectTrack(i));row.appendChild(d);
  });
  if(musicPlaylist.length>0&&!myAudio.src){myAudio.src=musicPlaylist[0].src;document.getElementById('songTitle').innerText=musicPlaylist[0].title;}
}
function addUrlTrack(){
  const inp=document.getElementById('urlInput');const url=inp.value.trim();if(!url)return;
  let title=url.split('/').pop().split('?')[0]||'Lagu Baru';title=decodeURIComponent(title).replace(/\.mp3$/i,'');
  musicPlaylist.push({title,src:url});savePlaylist();buildPlaylist();selectTrack(musicPlaylist.length-1);inp.value='';
}
function selectTrack(i){
  curTrack=i;myAudio.src=musicPlaylist[i].src;document.getElementById('songTitle').innerText=musicPlaylist[i].title;
  document.querySelectorAll('.pl-item').forEach((el,j)=>el.classList.toggle('active-song',j===i));
  myAudio.play().catch(()=>{});syncMusicUI();
}
myAudio.addEventListener('ended',()=>{
  if(repeatMode===2){myAudio.currentTime=0;myAudio.play();}
  else if(repeatMode===1||curTrack<musicPlaylist.length-1){selectTrack((curTrack+1)%musicPlaylist.length);}
  else syncMusicUI();
});
function prevTrack(){let i=isShuffled?Math.floor(Math.random()*musicPlaylist.length):(curTrack-1+musicPlaylist.length)%musicPlaylist.length;selectTrack(i);}
function nextTrack(){let i=isShuffled?Math.floor(Math.random()*musicPlaylist.length):(curTrack+1)%musicPlaylist.length;selectTrack(i);}
function toggleMusic(){if(myAudio.paused){myAudio.play().catch(()=>{});}else{myAudio.pause();}syncMusicUI();}
function syncMusicUI(){
  const p=!myAudio.paused;
  document.getElementById('playPauseBtn').innerText=p?'⏸':'▶';
  musicDisc.classList.toggle('playing',p);
  eqBars.classList.toggle('paused',!p);
}
function toggleMute(){isMuted=!isMuted;myAudio.muted=isMuted;document.getElementById('muteBtn').innerText=isMuted?'🔇':'🔊';}
function setVolume(v){myAudio.volume=v/100;document.getElementById('volSlider').style.setProperty('--val',v+'%');}
function seekMusic(e){if(!myAudio.duration)return;const r=e.currentTarget.getBoundingClientRect();myAudio.currentTime=((e.clientX-r.left)/r.width)*myAudio.duration;}
function fmtT(s){if(isNaN(s))return'0:00';return`${Math.floor(s/60)}:${String(Math.floor(s%60)).padStart(2,'0')}`;}
function cycleRepeat(){repeatMode=(repeatMode+1)%3;const b=document.getElementById('repeatBtn');b.innerText=repeatIcons[repeatMode];b.classList.toggle('active-mode',repeatMode>0);}
function toggleShuffle(){isShuffled=!isShuffled;document.getElementById('shuffleBtn').classList.toggle('active-mode',isShuffled);}
function startProgressLoop(){
  setInterval(()=>{
    if(!myAudio.duration)return;
    document.getElementById('progressFill').style.width=(myAudio.currentTime/myAudio.duration*100)+'%';
    document.getElementById('currentTime').innerText=fmtT(myAudio.currentTime);
    document.getElementById('totalTime').innerText=fmtT(myAudio.duration);
    syncMusicUI();
  },500);
}
myAudio.src=musicPlaylist[0]?.src||'';

// keyboard nav
document.addEventListener('keydown',e=>{
  const ae=document.activeElement;const typing=ae&&(ae.tagName==='INPUT'||ae.isContentEditable);
  if(!typing){if(e.key==='ArrowRight')bookNextPage();if(e.key==='ArrowLeft')bookPrevPage();}
  if(ae===document.getElementById('bucketInput')&&e.key==='Enter')addBucketItem();
  if(ae===document.getElementById('noteInput')&&e.key==='Enter')addNote();
  if(ae===document.getElementById('urlInput')&&e.key==='Enter')addUrlTrack();
});
