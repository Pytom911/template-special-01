/* ===== GANTI DATA DI SINI ===== */
const CONFIG = {
  partner: "[NAME]",
  me: "[YOUR NAME]",
  anniversaryText: "[ANNIVERSARY DATE]",
  startText: "[RELATIONSHIP START DATE]",
  startISO: "2023-02-14T00:00:00",
  timeline: [
    { d: "Hari pertama", t: "Awal yang tidak disengaja", x: "Aku belum tahu, pertemuan biasa itu akan jadi bab paling indah dalam hidupku." },
    { d: "Obrolan panjang", t: "Satu pesan, seribu tawa", x: "Malam itu kita bicara sampai lupa waktu. Aku mulai menunggu notifikasi darimu." },
    { d: "Kencan pertama", t: "Gugup yang manis", x: "Tanganku dingin, hatiku hangat. Kamu tersenyum, dan semuanya terasa mudah." },
    { d: "Hari kita resmi", t: "Aku memilihmu", x: "Hari itu aku tahu, pulang itu bukan tempat, tapi seseorang. Kamu." },
    { d: "Hari ini", t: "Masih jatuh cinta", x: "Setiap tahun bersamamu terasa seperti membaca buku favorit yang tidak ingin kuselesaikan." },
  ],
  photos: [
    { u: "photo-1518199266791-5375a83190b7", c: "awal kita" },
    { u: "photo-1529634806980-85c3dd6d34ac", c: "tawa kita" },
    { u: "photo-1515934751635-c81c6bc9a2d8", c: "malam hangat" },
    { u: "photo-1494774157365-9e04c6720e47", c: "genggamanmu" },
    { u: "photo-1474552226712-ac0f0961a954", c: "senja berdua" },
    { u: "photo-1516589178581-6cd7833ae3b2", c: "pelukmu" },
    { u: "photo-1522673607200-164d1b6ce486", c: "tujuan kita" },
    { u: "photo-1469371670807-013ccf25f16a", c: "suatu hari nanti" },
  ],
  letter: [
    "Thank you for staying, for laughing at my silly jokes, and for loving me on the days I forget how to love myself.",
    "You are my calm after a long day, my favorite person to tell everything to, and my safest place in this noisy world.",
    "If I could write our story again, I would still choose every moment that led me to you.",
  ],
  things: [
    "Aku bangga padamu, bahkan di hari yang menurutmu biasa saja.",
    "Senyummu adalah bagian favoritku dalam sehari.",
    "Kalau kamu lelah, bersandarlah padaku. Aku tidak ke mana-mana.",
    "Aku masih deg-degan setiap kamu menatapku lama.",
    "Kamu tidak perlu sempurna. Aku sudah jatuh cinta pada kamu yang apa adanya.",
    "Terima kasih sudah sabar menghadapi aku.",
  ],
  quiz: [
    { q: "Di mana kita pertama kali bertemu?", o: ["Di tempat yang tak akan kulupa", "Di mimpi", "Di bulan"], a: 0, ok: "Tepat! Tempat itu sekarang jadi tempat favoritku.", no: "Hampir! Tapi jawabannya tetap tentang kita." },
    { q: "Apa yang paling kusuka darimu?", o: ["Caramu tertawa", "Caramu menghilang", "Semuanya, tanpa terkecuali"], a: 2, ok: "Benar. Daftarnya tidak pernah selesai.", no: "Hmm, coba lagi dalam hati. Jawabannya sangat banyak." },
    { q: "Kita akan menua bersama?", o: ["Mungkin", "Pasti, dan ribut soal remote TV", "Tanya bulan dulu"], a: 1, ok: "Setuju! Aku siap rebutan remote seumur hidup.", no: "Aku tidak menerima jawaban itu. Ulangi, sayang." },
  ],
  choices: [
    { q: "Malam minggu ideal kita?", a: ["Nonton film di rumah", "Jalan-jalan malam"], r: ["Selimut, camilan, dan kamu. Sempurna.", "Berjalan di bawah bintang bersamamu. Aku mau."] },
    { q: "Liburan impian kita?", a: ["Pantai dan sunset", "Gunung dan kabut"], r: ["Aku mau melihat langit jingga dengan tanganmu di genggamanku.", "Kita akan berbagi teh hangat di tengah dingin."] },
    { q: "Siapa yang lebih dulu bilang sayang?", a: ["Aku", "Kamu"], r: ["Boleh, tapi aku akan bilang seribu kali lagi.", "Aku selalu menunggu kalimat itu darimu."] },
  ],
  secret: "Kalau suatu hari kamu ragu, ingat: aku jatuh cinta bukan hanya pada senyummu, tapi pada seluruh dirimu. Aku mencintaimu, [NAME].",
  gift: { title: "Kupon Spesial untukmu", desc: "Berlaku seumur hidup: satu malam dinner romantis, satu pelukan kapan saja, dan satu permintaan maaf gratis. Tukarkan padaku sekarang." },
  final: [
    "Terima kasih sudah menjadi rumah, sahabat, dan alasanku tersenyum.",
    "Aku tidak tahu apa yang menanti di depan, tapi aku tahu aku ingin melewatinya denganmu.",
    "Selamat ulang tahun hubungan kita, cintaku. Aku mencintaimu, hari ini dan setiap malam bertabur bintang.",
  ],
};
/* ===== KODE ===== */
const $ = (s) => document.querySelector(s),
  $$ = (s) => [...document.querySelectorAll(s)],
  C = CONFIG;
const mk = (t, c, h) => {
  const e = document.createElement(t);
  if (c) e.className = c;
  if (h) e.innerHTML = h;
  return e;
};
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
$("#n1").textContent = C.partner;
$("#n2").textContent = C.me;
$("#ad").textContent = C.anniversaryText;
$("#sd").textContent = C.startText;
$$(".n1").forEach((e) => (e.textContent = C.partner));
$$(".n2").forEach((e) => (e.textContent = C.me));
const heroCTA = $("#heroCTA");
if (heroCTA) heroCTA.addEventListener("click", () => $("#count").scrollIntoView({ behavior: "smooth" }));

function burst(x, y, n = 16) {
  const f = $("#fx");
  const max = reduceMotion ? Math.min(n, 8) : n;
  for (let i = 0; i < max; i++) {
    const h = mk("i", "bh bi bi-heart-fill");
    const a = Math.random() * 6.28, d = 50 + Math.random() * 90;
    h.style.cssText = `left:${x}px;top:${y}px;font-size:${10 + Math.random() * 16}px;--dx:${Math.cos(a) * d}px;--dy:${Math.sin(a) * d - 40}px`;
    f.append(h);
    setTimeout(() => h.remove(), 1300);
  }
}
const bAt = (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  burst(r.left + r.width / 2, r.top + r.height / 2);
};

/* sky — perf tuned */
const cv = $("#sky"), cx = cv.getContext("2d", { alpha: true });
let W, H, S = [], SH = [], P = [], rafId = null, skyVisible = true, lastDraw = 0;
const isLow = (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) || innerWidth < 768;
const targetFPS = reduceMotion ? 0 : isLow ? 30 : 60;
const frameInterval = targetFPS ? 1000 / targetFPS : 0;

function size() {
  const d = Math.min(devicePixelRatio || 1, 1.5);
  W = innerWidth; H = innerHeight;
  cv.width = W * d; cv.height = H * d;
  cx.setTransform(d, 0, 0, d, 0, 0);
  const area = W * H;
  const starN = reduceMotion ? 60 : isLow ? Math.min(120, (area / 9000) | 0) : Math.min(180, (area / 7000) | 0);
  const pN = reduceMotion ? 0 : isLow ? 14 : 22;
  S = Array.from({ length: starN }, () => ({
    x: Math.random() * W, y: Math.random() * H,
    r: Math.random() * 1.4 + 0.3, t: Math.random() * 6,
    s: 0.008 + Math.random() * 0.022, big: Math.random() < 0.05,
  }));
  P = Array.from({ length: pN }, () => ({
    x: Math.random() * W, y: Math.random() * H,
    r: Math.random() * 1.6 + 0.8, v: 0.12 + Math.random() * 0.22,
  }));
}
size();
let resizeTimer = 0;
addEventListener("resize", () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(size, 200); });

function draw(now) {
  rafId = requestAnimationFrame(draw);
  if (reduceMotion) return;
  if (document.hidden || !skyVisible) return;
  if (targetFPS && now - lastDraw < frameInterval) return;
  lastDraw = now;
  cx.clearRect(0, 0, W, H);
  for (let i = 0; i < S.length; i++) {
    const s = S[i];
    s.t += s.s;
    const a = 0.38 + 0.62 * Math.abs(Math.sin(s.t));
    cx.globalAlpha = a;
    cx.fillStyle = "#dfe9ff";
    if (s.big) {
      const l = s.r * 4.2 * a;
      cx.fillRect(s.x - l, s.y - 0.5, l * 2, 1);
      cx.fillRect(s.x - 0.5, s.y - l, 1, l * 2);
    }
    cx.beginPath(); cx.arc(s.x, s.y, s.r, 0, 6.283); cx.fill();
  }
  cx.globalAlpha = 1;
  for (let i = 0; i < P.length; i++) {
    const p = P[i];
    p.y -= p.v; p.x += Math.sin(p.y / 40) * 0.28;
    if (p.y < -6) { p.y = H + 6; p.x = Math.random() * W; }
    cx.globalAlpha = 0.22; cx.fillStyle = "#b8ccff";
    cx.beginPath(); cx.arc(p.x, p.y, p.r, 0, 6.283); cx.fill();
  }
  cx.globalAlpha = 1;
  for (let i = SH.length - 1; i >= 0; i--) {
    const s = SH[i];
    s.x += s.vx; s.y += s.vy; s.l--;
    const g = cx.createLinearGradient(s.x, s.y, s.x - s.vx * 9, s.y - s.vy * 9);
    g.addColorStop(0, "#ffffff"); g.addColorStop(1, "#9dbcff00");
    cx.globalAlpha = Math.min(1, s.l / 20);
    cx.strokeStyle = g; cx.lineWidth = 1.8;
    cx.beginPath(); cx.moveTo(s.x, s.y); cx.lineTo(s.x - s.vx * 9, s.y - s.vy * 9); cx.stroke();
    if (s.l <= 0) SH.splice(i, 1);
  }
  cx.globalAlpha = 1;
}
if (!reduceMotion) draw(0);

const skyIO = new IntersectionObserver((entries) => { skyVisible = entries[0].isIntersecting; }, { threshold: 0 });
skyIO.observe(cv);
document.addEventListener("visibilitychange", () => { if (!document.hidden && !rafId) draw(0); });

let shootTimer = 0;
const shoot = () => {
  if (reduceMotion || document.hidden || !skyVisible) { shootTimer = setTimeout(shoot, 3500); return; }
  SH.push({ x: Math.random() * W * 0.8, y: Math.random() * H * 0.4, vx: 7 + Math.random() * 4, vy: 3 + Math.random() * 3, l: 56 });
  shootTimer = setTimeout(shoot, 2800 + Math.random() * 4200);
};
if (!reduceMotion) setTimeout(shoot, 1600);

let fhTimer = null;
function spawnFH() {
  if (document.hidden) { fhTimer = setTimeout(spawnFH, 1400); return; }
  const h = mk("i", "fh bi bi-heart-fill");
  h.style.cssText = `left:${Math.random() * 100}vw;font-size:${10 + Math.random() * 16}px;--sx:${Math.random() * 80 - 40}px;animation-duration:${9 + Math.random() * 7}s`;
  $("#fx").append(h);
  setTimeout(() => h.remove(), 17000);
  fhTimer = setTimeout(spawnFH, reduceMotion ? 2800 : 1400);
}
spawnFH();

/* loader — wait fonts + min delay */
const lb = $("#lb"), ltxt = $("#ltxt"), go = $("#go");
requestAnimationFrame(() => { if (lb) lb.style.width = "100%"; });
const minDelay = new Promise((r) => setTimeout(r, 1200));
const fontsReady = document.fonts ? document.fonts.ready.catch(() => {}) : Promise.resolve();
Promise.all([minDelay, fontsReady]).then(() => {
  setTimeout(() => {
    if (ltxt) ltxt.textContent = "Semuanya sudah siap.";
    if (go) go.classList.remove("opacity-0", "pointer-events-none");
  }, 400);
});
if (go) go.onclick = (e) => { burst(e.clientX, e.clientY, 26); $("#loader").classList.add("off"); scrollTo(0, 0); };

/* counter */
const t0 = new Date(C.startISO);
const units = [["Hari", 86400], ["Jam", 3600], ["Menit", 60], ["Detik", 1]];
const cg = $("#cg");
{
  const frag = document.createDocumentFragment();
  units.forEach((u) => frag.append(mk("div", "glass py-6", `<div class="script text-5xl sm:text-6xl" data-u="${u[1]}">0</div><div class="italic opacity-80">${u[0]}</div>`)));
  cg.append(frag);
}
function tick() {
  let s = Math.max(0, ((Date.now() - (isNaN(t0) ? Date.now() : t0)) / 1000) | 0);
  for (let i = 0; i < units.length; i++) {
    const u = units[i];
    const v = i == 0 ? (s / u[1]) | 0 : ((s / u[1]) | 0) % (i == 3 ? 60 : i == 2 ? 60 : 24);
    cg.children[i].firstChild.textContent = i == 0 ? v : String(v).padStart(2, "0");
  }
}
tick(); setInterval(tick, 1000);

/* story — fragment */
{
  const frag = document.createDocumentFragment();
  C.timeline.forEach((i) => frag.append(mk("div", "tl rv", `<p class="italic opacity-70">${i.d}</p><h3 class="script text-3xl" style="color:#cfe0ff">${i.t}</h3><p>${i.x}</p>`)));
  $("#tl").append(frag);
}
/* photos — fragment + srcset/sizes */
{
  const frag = document.createDocumentFragment();
  C.photos.forEach((p, i) => {
    const e = mk("figure", "pol rv",
      `<img loading="lazy" decoding="async" fetchpriority="low" alt="${p.c}" src="https://images.unsplash.com/${p.u}?auto=format&fit=crop&w=500&h=500&q=70" srcset="https://images.unsplash.com/${p.u}?auto=format&fit=crop&w=400&h=400&q=70 400w, https://images.unsplash.com/${p.u}?auto=format&fit=crop&w=500&h=500&q=70 500w" sizes="(max-width:640px) 50vw, 25vw" onerror="this.removeAttribute('srcset');this.removeAttribute('src')"><p>${p.c}</p>`);
    e.style.setProperty("--r", (i % 2 ? 3 : -3) + (i % 3) + "deg");
    e.addEventListener("click", bAt);
    frag.append(e);
  });
  $("#pg").append(frag);
}
/* letter — direct reveal, no envelope */
C.letter.forEach((t) => $("#lbody").append(mk("p", "", t)));
/* things — fragment */
{
  const frag = document.createDocumentFragment();
  C.things.forEach((t) => {
    const c = mk("div", "glass card rv", `<span class="star text-4xl" style="color:#fff;text-shadow:0 0 20px #9dbcff">✦</span><span class="hidden">${t}</span>`);
    c.addEventListener("click", (e) => {
      const [a, b] = c.children; a.classList.add("hidden"); b.classList.remove("hidden");
      c.style.boxShadow = "0 0 36px #ffa9cf88"; bAt(e);
    });
    frag.append(c);
  });
  $("#tg").append(frag);
}
/* quiz */
let qi = 0, qs = 0;
const qb = $("#qb");
function rq() {
  if (qi >= C.quiz.length) {
    qb.innerHTML = `<p class="script text-4xl text-center">${qs} dari ${C.quiz.length} benar</p><p class="text-center mt-2">Apa pun skornya, kamu tetap juara di hatiku.</p><div class="text-center mt-4"><button class="btn" id="qr">Ulangi</button></div>`;
    $("#qr").onclick = () => { qi = qs = 0; rq(); };
    return;
  }
  const q = C.quiz[qi];
  qb.innerHTML = `<p class="italic opacity-70">Pertanyaan ${qi + 1} dari ${C.quiz.length}</p><p class="text-2xl mb-2">${q.q}</p>`;
  q.o.forEach((o, i) => {
    const b = mk("button", "opt", o);
    b.onclick = (e) => {
      if (qb.dataset.l) return; qb.dataset.l = 1;
      const g = i == q.a; b.classList.add(g ? "ok" : "no");
      if (g) { qs++; bAt(e); }
      qb.append(mk("p", "italic mt-3", g ? q.ok : q.no));
      setTimeout(() => { delete qb.dataset.l; qi++; rq(); }, 2200);
    };
    qb.append(b);
  });
}
rq();
/* game */
const arena = $("#arena");
let sc = 0, tm = 20, iv1, iv2;
const gsBtn = $("#gs");
if (gsBtn) gsBtn.addEventListener("click", () => {
  sc = 0; tm = 20;
  $("#sc").textContent = 0; $("#tm").textContent = 20;
  $("#gmsg").style.display = "none";
  iv1 = setInterval(() => {
    if (!arena) return;
    const h = mk("i", "fall bi bi-heart-fill");
    h.style.left = Math.random() * (arena.clientWidth - 50) + "px";
    h.style.animationDuration = 2.2 + Math.random() * 1.8 + "s";
    h.onpointerdown = (e) => { e.preventDefault(); sc++; $("#sc").textContent = sc; burst(e.clientX, e.clientY, 8); h.remove(); };
    h.addEventListener("animationend", () => h.remove(), { once: true });
    arena.append(h);
  }, 550);
  iv2 = setInterval(() => {
    $("#tm").textContent = --tm;
    if (tm <= 0) {
      clearInterval(iv1); clearInterval(iv2);
      $$(".fall").forEach((f) => f.remove());
      $("#gt").textContent = sc + " hati tertangkap! " + (sc >= 15 ? "Kamu memang menangkap hatiku sejak lama." : "Tidak apa-apa, hatiku sudah lama kamu tangkap.");
      gsBtn.textContent = "Main lagi"; $("#gmsg").style.display = "flex";
    }
  }, 1000);
});
/* choices */
let ci = 0; const cb = $("#cb");
function rc() {
  if (ci >= C.choices.length) {
    cb.innerHTML = '<p class="script text-4xl">Kita memang cocok</p><p class="mt-2">Apa pun pilihannya, selama bersamamu, semuanya terasa pas.</p>'; return;
  }
  const c = C.choices[ci];
  cb.innerHTML = `<p class="text-2xl mb-4">${c.q}</p><div class="grid sm:grid-cols-2 gap-3"></div>`;
  c.a.forEach((a, i) => {
    const b = mk("button", "btn", a);
    b.onclick = (e) => {
      bAt(e);
      cb.innerHTML = `<p class="script text-3xl" style="color:var(--rose)">${a}</p><p class="mt-2">${c.r[i]}</p>`;
      setTimeout(() => { ci++; rc(); }, 2600);
    };
    cb.lastChild.append(b);
  });
}
rc();
/* secret */
let st = 0;
$("#stxt").textContent = C.secret;
const s1 = $("#s1");
if (s1) s1.addEventListener("click", (e) => {
  st++; bAt(e);
  e.currentTarget.style.transform = `scale(${1 + st * 0.5})`;
  e.currentTarget.style.opacity = String(0.5 + st * 0.25);
  if (st >= 3) { $("#sm").classList.add("show"); burst(innerWidth / 2, innerHeight / 2, 30); }
});
/* gift */
const g = $("#gift");
const og = () => {
  if (!g) return;
  g.classList.add("open");
  $("#gtitle").textContent = C.gift.title;
  $("#gdesc").textContent = C.gift.desc;
  $("#gm").classList.add("show");
  const r = g.getBoundingClientRect(); burst(r.left + 65, r.top + 30, 34);
};
if (g) { g.addEventListener("click", og); g.addEventListener("keydown", (e) => e.key == "Enter" && og()); }
/* final */
{ const frag = document.createDocumentFragment(); C.final.forEach((t) => frag.append(mk("p", "", t))); $("#fm").append(frag); }
/* reveal */
const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("in")), { threshold: 0.15 });
$$(".rv").forEach((e) => io.observe(e));
const replayBtn = $("#replay");
if (replayBtn) replayBtn.addEventListener("click", () => {
  scrollTo({ top: 0, behavior: "smooth" });
  setTimeout(() => {
    $$(".rv.in").forEach((e) => e.classList.remove("in"));
    $$(".show,.open").forEach((e) => e.classList.remove("show", "open"));
    st = qi = qs = ci = 0; rq(); rc();
    const s1r = $("#s1"); if (s1r) s1r.removeAttribute("style");
    const gmsg = $("#gmsg"), gs = $("#gs");
    if (gmsg) gmsg.style.display = "flex";
    if (gs) gs.textContent = "Mulai";
    clearInterval(iv1); clearInterval(iv2);
  }, 900);
});
