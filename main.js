/* =====================================================================
   EDIT BAGIAN CONFIG INI SAJA untuk mengganti isi website.
   ===================================================================== */
var CONFIG = {
  github: "dnnyf-77",
  email: "denyf990@gmail.com",
  whatsapp: "",            // contoh: "628123456789" (kosong = tombol WhatsApp tidak tampil)
  cv: { id: "assets/CV_Deny_Firmansyah_ID.pdf", en: "assets/CV_Deny_Firmansyah_EN.pdf" },
  /* isi demo = link online project (kosongkan "" kalau belum ada). repo = nama repo di GitHub */
  projects: [
    { id:"komoditas", cat:"fullstack", thumb:"chart", repo:"komoditas-id", demo:"", tech:["Node.js","Express","Vanilla JS","Canvas","PIHPS BI API"] },
    { id:"stokku",    cat:"fullstack", thumb:"cube",  repo:"stokku",       demo:"", tech:["Node.js","SQLite","Auth","REST API","Automated tests"] },
    { id:"expense",   cat:"fullstack", thumb:"donut", repo:"expense-tracker", demo:"", tech:["Node.js","Express","Chart.js","JSON"] },
    { id:"weather",   cat:"frontend",  thumb:"sun",   repo:"weather-app",  demo:"", tech:["JavaScript","REST API","Fetch","CSS"] }
  ]
};

var T = {
  id: {
    nav_about:"Tentang", nav_skills:"Skill", nav_projects:"Project", nav_journey:"Perjalanan", nav_contact:"Kontak",
    status:"Terbuka untuk pekerjaan & project freelance", hi:"Halo, saya", i_build:"Saya membuat",
    roles:["dashboard data","aplikasi web","web scraper","API dengan Node.js"],
    lead:"Junior web developer yang belajar dengan membangun aplikasi nyata: dari tampilan, server, database, sampai login. Latar belakang 4+ tahun di pelayanan dan penjualan membuat saya nyaman berkomunikasi dengan klien.",
    cta_projects:"Lihat project →", cta_cv:"Unduh CV", cta_contact:"Hubungi saya",
    stats:[["4","Aplikasi web dibangun dari nol"],["16","Tes otomatis di project terbaru"],["4+ th","Pengalaman melayani pelanggan"],["100%","Project bisa dicoba / dibaca kodenya"]],
    about_title:"Belajar dengan membangun hal nyata",
    about:[
      "Saya Deny, web developer pemula dari Bojonegoro. Saya tidak hanya mengikuti tutorial: tiap project saya buat sampai utuh, mulai dari tampilan, server, database, sampai bisa dipakai orang lain.",
      "Saya suka masalah yang berhubungan dengan data: mengambil, merapikan, lalu menampilkannya supaya mudah dipahami, misalnya harga pangan dari sumber resmi Bank Indonesia.",
      "Sebelum belajar coding serius, saya bekerja di perhotelan dan penjualan. Dari situ saya terbiasa disiplin, teliti, dan mendengarkan kebutuhan orang sebelum menawarkan solusi."
    ],
    strengths:"Yang bisa Anda harapkan",
    str:[["Komunikasi jelas","Estimasi di awal, progres dilaporkan bertahap."],["Teliti","Validasi input, tes otomatis, dan penanganan error."],["Cepat belajar","Memakai AI tools untuk mempercepat coding dan debugging."],["Hasil siap pakai","Project di-deploy dan didokumentasikan."]],
    skills_title:"Teknologi yang saya pakai", skills_lead:"Putar kubus 3D, atau pilih kategori di samping.", drag_hint:"Seret untuk memutar kubus",
    projects_title:"Karya yang sudah saya bangun", projects_lead:"Arahkan kursor ke kartu, lalu klik untuk membaca ceritanya.",
    f_all:"Semua", f_fullstack:"Fullstack", f_frontend:"Frontend", see_detail:"Lihat detail →",
    problem:"Masalah", solution:"Solusi", features:"Fitur", demo:"Coba demo ↗", code:"Lihat kode di GitHub ↗",
    gh_title:"Langsung dari GitHub", gh_all:"Lihat semua repo →",
    journey_title:"Perjalanan saya",
    contact_title:"Punya project? Mari ngobrol.", contact_lead:"Ceritakan kebutuhan Anda singkat saja. Saya biasanya membalas dalam 1-2 hari.",
    f_name:"Nama", f_mail:"Email", f_msg:"Kebutuhan Anda", f_send:"Kirim lewat email →",
    f_hint:"Tombol ini membuka aplikasi email Anda dengan pesan yang sudah terisi.", f_err:"Mohon isi nama, email yang valid, dan pesan.", f_opening:"Membuka aplikasi email Anda…",
    built:"Dibuat dengan HTML, CSS & JavaScript", other_lang:"EN"
  },
  en: {
    nav_about:"About", nav_skills:"Skills", nav_projects:"Projects", nav_journey:"Journey", nav_contact:"Contact",
    status:"Open to jobs & freelance projects", hi:"Hi, I’m", i_build:"I build",
    roles:["data dashboards","web apps","web scrapers","Node.js APIs"],
    lead:"Junior web developer who learns by shipping real apps: UI, server, database, and login. Four-plus years in customer service and sales taught me to communicate well with clients.",
    cta_projects:"View projects →", cta_cv:"Download CV", cta_contact:"Contact me",
    stats:[["4","Web apps built from scratch"],["16","Automated tests in my latest app"],["4+ yrs","Customer-facing experience"],["100%","Projects you can try or read"]],
    about_title:"Learning by building real things",
    about:[
      "I’m Deny, an aspiring web developer from Bojonegoro, Indonesia. I don’t just follow tutorials: every project is built end to end, from the interface and server to the database, until someone else can use it.",
      "I enjoy data problems: collecting it, cleaning it, and showing it so it’s easy to understand, like food prices from Bank Indonesia’s official source.",
      "Before getting serious about coding, I worked in hospitality and sales. That made me disciplined, detail-oriented, and used to listening before offering solutions."
    ],
    strengths:"What you can expect",
    str:[["Clear communication","Estimate up front, progress shared step by step."],["Attention to detail","Input validation, automated tests, and error handling."],["Fast learner","Uses AI tools to speed up coding and debugging."],["Ready-to-use results","Projects are deployed and documented."]],
    skills_title:"Technologies I use", skills_lead:"Spin the 3D cube, or pick a category on the side.", drag_hint:"Drag to rotate the cube",
    projects_title:"Things I’ve built", projects_lead:"Hover a card, then click to read the story behind it.",
    f_all:"All", f_fullstack:"Fullstack", f_frontend:"Frontend", see_detail:"View details →",
    problem:"Problem", solution:"Solution", features:"Features", demo:"Try the demo ↗", code:"View code on GitHub ↗",
    gh_title:"Live from GitHub", gh_all:"See all repositories →",
    journey_title:"My journey",
    contact_title:"Got a project? Let’s talk.", contact_lead:"Tell me what you need in a few lines. I usually reply within 1-2 days.",
    f_name:"Name", f_mail:"Email", f_msg:"What you need", f_send:"Send via email →",
    f_hint:"This opens your email app with the message pre-filled.", f_err:"Please enter your name, a valid email, and a message.", f_opening:"Opening your email app…",
    built:"Built with HTML, CSS & JavaScript", other_lang:"ID"
  }
};

var DATA = {
  skills: {
    id: { "Frontend":["HTML5","CSS3","JavaScript ES6+","Desain responsif","Canvas","Chart.js"], "Backend":["Node.js","Express","REST API","Autentikasi sesi","Validasi input"], "Database":["SQLite / SQL","Transaksi","Desain tabel","JSON / CSV"], "Data":["Web scraping","Integrasi API","Pembersihan data","Visualisasi"], "Tools":["Git & GitHub","npm","VS Code","Render","Netlify","AI-assisted dev"] },
    en: { "Frontend":["HTML5","CSS3","JavaScript ES6+","Responsive design","Canvas","Chart.js"], "Backend":["Node.js","Express","REST API","Session auth","Input validation"], "Database":["SQLite / SQL","Transactions","Schema design","JSON / CSV"], "Data":["Web scraping","API integration","Data cleaning","Visualization"], "Tools":["Git & GitHub","npm","VS Code","Render","Netlify","AI-assisted dev"] }
  },
  projects: {
    id: {
      komoditas:{ title:"KomoditasID", short:"Dashboard harga komoditas pangan Indonesia dari data resmi Bank Indonesia (PIHPS).", problem:"Harga pangan berubah tiap hari dan datanya tersebar. Orang awam sulit melihat tren dalam satu tempat.", solution:"Server Node.js mengambil harga dari PIHPS secara berkala, lalu dashboard menampilkan kartu harga, grafik tren, dan tabel yang bisa difilter. Kalau sumber live gagal, aplikasi memakai data cadangan dan menampilkan statusnya dengan jujur.", features:["Kartu harga dengan persentase perubahan","Grafik tren (canvas buatan sendiri)","Pencarian, filter, dan halaman favorit","Pembaruan otomatis tiap 10 menit","Ikon SVG khusus untuk tiap komoditas"] },
      stokku:{ title:"StokKu", short:"Aplikasi stok barang untuk UMKM dengan login, database, riwayat, dan peringatan stok menipis.", problem:"Pemilik toko kecil sering baru sadar stok habis setelah pelanggan bertanya.", solution:"Aplikasi web dengan akun pengguna dan database SQLite. Setiap perubahan stok dicatat dalam transaksi database sehingga stok dan riwayat selalu konsisten.", features:["Daftar/masuk dengan password ter-hash (scrypt)","Data tiap pengguna terpisah","Barang masuk/keluar, stok tidak bisa minus","Ringkasan nilai stok dan produk yang perlu dibeli ulang","16 tes otomatis untuk API"] },
      expense:{ title:"Expense Tracker", short:"Pencatat pengeluaran harian dengan ringkasan saldo, grafik, dan target menabung.", problem:"Pengeluaran kecil sehari-hari sering tidak tercatat sehingga uang terasa habis begitu saja.", solution:"Aplikasi web untuk mencatat pemasukan dan pengeluaran, melihat sisa saldo, dan memantau pengeluaran per kategori lewat grafik.", features:["Catat pemasukan & pengeluaran","Ringkasan saldo dan budget harian","Grafik tren dan kategori","Tracker tujuan menabung"] },
      weather:{ title:"Weather App", short:"Aplikasi cuaca: cari kota dan lihat kondisi serta prakiraan.", problem:"Informasi cuaca sering penuh iklan dan sulit dibaca cepat.", solution:"Antarmuka sederhana yang mengambil data dari API cuaca dan menampilkan suhu, kondisi, serta prakiraan dengan jelas.", features:["Pencarian kota","Suhu dan kondisi saat ini","Prakiraan beberapa hari","Tampilan responsif di HP"] }
    },
    en: {
      komoditas:{ title:"KomoditasID", short:"Dashboard of Indonesian food commodity prices using official Bank Indonesia (PIHPS) data.", problem:"Food prices change daily and the data is scattered. It’s hard for everyday people to see trends in one place.", solution:"A Node.js server pulls prices from PIHPS on a schedule; the dashboard shows price cards, trend charts, and a filterable table. If the live source fails, it falls back to backup data and honestly shows the status.", features:["Price cards with percentage change","Trend charts (custom canvas)","Search, filters, and favorites page","Auto-refresh every 10 minutes","A custom SVG icon for every commodity"] },
      stokku:{ title:"StokKu", short:"Inventory app for small businesses with login, database, history, and low-stock alerts.", problem:"Small shop owners often notice stock ran out only when a customer asks.", solution:"A web app with user accounts and a SQLite database. Every stock change is recorded in a database transaction so stock and history never drift apart.", features:["Sign up / log in with hashed passwords (scrypt)","Each user’s data is isolated","Stock in/out, never below zero","Stock value summary and low-stock list","16 automated API tests"] },
      expense:{ title:"Expense Tracker", short:"Daily expense tracker with balance summary, charts, and savings goals.", problem:"Small daily expenses often go unrecorded, so money just seems to disappear.", solution:"A web app to record income and expenses, see the remaining balance, and watch spending by category through charts.", features:["Record income & expenses","Balance and daily budget summary","Trend and category charts","Savings goal tracker"] },
      weather:{ title:"Weather App", short:"Weather app: search a city and see conditions and forecast.", problem:"Weather info is often cluttered with ads and slow to read.", solution:"A simple interface that fetches data from a weather API and shows temperature, conditions, and forecast clearly.", features:["City search","Current temperature and conditions","Multi-day forecast","Responsive on mobile"] }
    }
  },
  journey: {
    id: [
      ["2018 – 2021","SMKN 1 Tarakan, Perhotelan","Lulus SMK jurusan perhotelan."],
      ["Mei – Okt 2021","Pramuniaga, Nusantara FDI Photo Studio","Melayani pelanggan dan mencatat transaksi harian."],
      ["Okt 2021 – Mar 2025","Room Attendant & Laundry, Royal Tarakan Hotel","Hampir 3,5 tahun bekerja teliti sambil kuliah informatika di STMIK PPKIA Tarakanita Rahmawati (sampai semester 4). Mendapat surat rekomendasi dari HRD."],
      ["Jul 2025 – Feb 2026","Sales & Marketing, PT. Nagamas Sukses Selalu","Menawarkan produk, menjaga hubungan pelanggan, dan menyampaikan kebutuhan mereka dengan jelas."],
      ["2026","Membangun project web","KomoditasID, StokKu, Expense Tracker, Weather App, dan website portofolio ini."]
    ],
    en: [
      ["2018 – 2021","SMKN 1 Tarakan, Hospitality","Graduated vocational school in hospitality."],
      ["May – Oct 2021","Sales Associate, Nusantara FDI Photo Studio","Served customers and recorded daily transactions."],
      ["Oct 2021 – Mar 2025","Room Attendant & Laundry, Royal Tarakan Hotel","Nearly 3.5 years of consistent, detail-focused work while studying informatics at STMIK PPKIA Tarakanita Rahmawati (through semester 4). Received an HR recommendation letter."],
      ["Jul 2025 – Feb 2026","Sales & Marketing, PT. Nagamas Sukses Selalu","Pitched products, maintained customer relationships, and relayed their needs clearly."],
      ["2026","Building web projects","KomoditasID, StokKu, Expense Tracker, Weather App, and this portfolio site."]
    ]
  }
};

(function () {
  'use strict';
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return [].slice.call((r || document).querySelectorAll(s)); }
  function el(t, c, h) { var e = document.createElement(t); if (c) e.className = c; if (h != null) e.innerHTML = h; return e; }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var root = document.documentElement;
  var ghUrl = 'https://github.com/' + CONFIG.github;
  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) {} return null; }

  /* ---------- bahasa ---------- */
  var lang = store('porto-lang') || ((navigator.language || 'id').toLowerCase().indexOf('id') === 0 ? 'id' : 'en');
  if (!T[lang]) lang = 'id';
  var skillCat = 'Frontend', projFilter = 'all', typedTimer;

  function applyLang() {
    var t = T[lang];
    root.lang = lang;
    $$('[data-i18n]').forEach(function (n) { n.textContent = t[n.getAttribute('data-i18n')] || ''; });
    $('#langBtn').textContent = t.other_lang;
    $('#cvBtn').href = CONFIG.cv[lang];
    document.title = 'Deny Firmansyah — ' + (lang === 'id' ? 'Junior Web Developer' : 'Junior Web Developer');
    ['fName', 'fMail', 'fMsg'].forEach(function (id) { $('#' + id).placeholder = ''; });
    $('#fMsg').placeholder = lang === 'id' ? 'Contoh: butuh dashboard untuk memantau stok toko…' : 'e.g. I need a dashboard to track my shop inventory…';
    renderStats(); renderAbout(); renderSkills(); renderProjects(); renderTimeline(); startTyped();
    if (window.__renderGh) window.__renderGh();
    if (openIdx !== null) openModal(openIdx);
    observeReveals();
  }
  $('#langBtn').onclick = function () { lang = lang === 'id' ? 'en' : 'id'; store('porto-lang', lang); applyLang(); };

  /* ---------- tema ---------- */
  var sv = store('porto-theme'); if (sv) root.setAttribute('data-theme', sv);
  $('#themeBtn').onclick = function () { var n = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light'; root.setAttribute('data-theme', n); store('porto-theme', n); };

  /* ---------- efek ketik ---------- */
  function startTyped() {
    clearTimeout(typedTimer);
    var words = T[lang].roles, wi = 0, ci = 0, del = false, node = $('#typed');
    (function tick() {
      var w = words[wi];
      if (reduce) { node.textContent = w; return; }
      node.textContent = w.slice(0, ci);
      if (!del && ci < w.length) { ci++; typedTimer = setTimeout(tick, 75); }
      else if (!del) { del = true; typedTimer = setTimeout(tick, 1400); }
      else if (ci > 0) { ci--; typedTimer = setTimeout(tick, 35); }
      else { del = false; wi = (wi + 1) % words.length; typedTimer = setTimeout(tick, 250); }
    })();
  }

  /* ---------- konten ---------- */
  function renderStats() {
    $('#stats').innerHTML = T[lang].stats.map(function (s) { return '<div class="stat reveal"><b data-v="' + esc(s[0]) + '">' + esc(s[0]) + '</b><span>' + esc(s[1]) + '</span></div>'; }).join('');
  }
  function countUp(b) {
    var v = b.getAttribute('data-v'), m = v.match(/^(\d+)(.*)$/); if (!m || reduce) return;
    var n = +m[1], suf = m[2], t0 = null;
    (function f(t) { t0 = t0 || t; var p = Math.min((t - t0) / 900, 1); b.textContent = Math.round(n * p) + suf; if (p < 1) requestAnimationFrame(f); })(performance.now());
  }
  function renderAbout() {
    $('#aboutText').innerHTML = T[lang].about.map(function (p) { return '<p>' + esc(p) + '</p>'; }).join('');
    $('#strengths').innerHTML = T[lang].str.map(function (s) { return '<li><span><b>' + esc(s[0]) + '</b><br>' + esc(s[1]) + '</span></li>'; }).join('');
  }
  function renderTimeline() {
    $('#timeline').innerHTML = DATA.journey[lang].map(function (j) { return '<div class="tl reveal"><span class="when">' + esc(j[0]) + '</span><b>' + esc(j[1]) + '</b><p>' + esc(j[2]) + '</p></div>'; }).join('');
  }

  /* ---------- skill: tab + kubus 3D ---------- */
  var cube = $('#cube'), scene = $('#scene'), cubeRot = { x: -18, y: 30 }, cubeVel = 0.25, dragging = false, cubeTarget = null;
  var FACE_T = ['rotateY(0deg)', 'rotateY(90deg)', 'rotateY(180deg)', 'rotateY(-90deg)', 'rotateX(90deg)', 'rotateX(-90deg)'];
  var FACE_VIEW = [[0, 0], [0, -90], [0, -180], [0, -270], [-90, 0], [90, 0]]; // [x,y] untuk menghadap ke sisi itu
  function renderSkills() {
    var cats = Object.keys(DATA.skills[lang]);
    if (cats.indexOf(skillCat) < 0) skillCat = cats[0];
    var tabs = $('#skillTabs'); tabs.innerHTML = '';
    cats.forEach(function (c) {
      var b = el('button', 'tab' + (c === skillCat ? ' on' : ''), esc(c)); b.setAttribute('role', 'tab');
      b.onclick = function () { skillCat = c; renderSkills(); var i = cats.indexOf(c); if (i < 5) faceTo(i); };
      tabs.appendChild(b);
    });
    $('#skillChips').innerHTML = DATA.skills[lang][skillCat].map(function (s) { return '<span class="chip">' + esc(s) + '</span>'; }).join('');
    cube.innerHTML = cats.slice(0, 5).map(function (c, i) {
      return '<div class="face" style="transform:' + FACE_T[i] + ' translateZ(calc(var(--s) / 2))"><b>' + esc(c) + '</b><span>' + esc(DATA.skills[lang][c].slice(0, 3).join(' · ')) + '</span></div>';
    }).join('') + '<div class="face" style="transform:' + FACE_T[5] + ' translateZ(calc(var(--s) / 2))"><b>◈</b><span>Deny Firmansyah</span></div>';
  }
  function faceTo(i) { cubeTarget = { x: FACE_VIEW[i][0] - 10, y: nearest(FACE_VIEW[i][1] - 15, cubeRot.y) }; }
  function nearest(target, cur) { var k = Math.round((cur - target) / 360); return target + k * 360; }
  var lastP = null;
  scene.addEventListener('pointerdown', function (e) { dragging = true; cubeTarget = null; lastP = { x: e.clientX, y: e.clientY }; scene.classList.add('drag'); try { scene.setPointerCapture(e.pointerId); } catch (_) {} });
  scene.addEventListener('pointermove', function (e) { if (!dragging) return; var dx = e.clientX - lastP.x, dy = e.clientY - lastP.y; lastP = { x: e.clientX, y: e.clientY }; cubeRot.y += dx * 0.6; cubeRot.x = Math.max(-80, Math.min(80, cubeRot.x - dy * 0.6)); cubeVel = dx * 0.15; });
  function endDrag() { dragging = false; scene.classList.remove('drag'); }
  scene.addEventListener('pointerup', endDrag); scene.addEventListener('pointercancel', endDrag);
  var cubeVisible = true;
  (function loopCube() {
    if (cubeVisible && !document.hidden) {
      if (cubeTarget && !dragging) { cubeRot.x += (cubeTarget.x - cubeRot.x) * 0.12; cubeRot.y += (cubeTarget.y - cubeRot.y) * 0.12; if (Math.abs(cubeTarget.y - cubeRot.y) < 0.4 && Math.abs(cubeTarget.x - cubeRot.x) < 0.4) cubeTarget = null; }
      else if (!dragging && !reduce) { cubeRot.y += cubeVel; cubeVel += (0.25 - cubeVel) * 0.02; }
      cube.style.transform = 'rotateX(' + cubeRot.x.toFixed(2) + 'deg) rotateY(' + cubeRot.y.toFixed(2) + 'deg)';
    }
    requestAnimationFrame(loopCube);
  })();

  /* ---------- project: kartu 3D + modal ---------- */
  function thumb(kind) {
    var g = '<defs><linearGradient id="g' + kind + '" x1="0" x2="1"><stop offset="0" stop-color="#d4a857" stop-opacity=".55"/><stop offset="1" stop-color="#d4a857" stop-opacity="0"/></linearGradient></defs>';
    if (kind === 'chart') return '<svg viewBox="0 0 400 170" preserveAspectRatio="xMidYMid slice">' + g + '<g stroke="rgba(241,230,207,.08)"><path d="M0 40H400M0 85H400M0 130H400"/></g><path d="M0 130 L50 114 L100 122 L150 86 L200 98 L250 62 L300 74 L350 38 L400 50 V170 H0Z" fill="url(#gchart)"/><path d="M0 130 L50 114 L100 122 L150 86 L200 98 L250 62 L300 74 L350 38 L400 50" fill="none" stroke="#d4a857" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/><circle cx="350" cy="38" r="6" fill="#d4a857"/></svg>';
    if (kind === 'donut') return '<svg viewBox="0 0 400 170" preserveAspectRatio="xMidYMid slice"><g transform="translate(200 85) rotate(-90)" fill="none" stroke-width="22"><circle r="46" stroke="rgba(241,230,207,.08)"/><circle r="46" stroke="#d4a857" stroke-dasharray="130 289" stroke-linecap="round"/><circle r="46" stroke="#f0705f" stroke-dasharray="60 289" stroke-dashoffset="-140" stroke-linecap="round"/><circle r="46" stroke="#47d98a" stroke-dasharray="40 289" stroke-dashoffset="-210" stroke-linecap="round"/></g></svg>';
    if (kind === 'cube') return '<svg viewBox="0 0 400 170" preserveAspectRatio="xMidYMid slice"><g transform="translate(200 85)" stroke="#d4a857" stroke-width="4" stroke-linejoin="round" fill="rgba(212,168,87,.16)"><path d="M0-52L46-26V26L0 52L-46 26V-26Z"/><path d="M-46-26L0 0L46-26M0 0V52" fill="none"/></g><g stroke="rgba(241,230,207,.2)" fill="none"><rect x="60" y="40" width="60" height="8" rx="4"/><rect x="60" y="62" width="40" height="8" rx="4"/><rect x="280" y="100" width="60" height="8" rx="4"/><rect x="300" y="122" width="40" height="8" rx="4"/></g></svg>';
    return '<svg viewBox="0 0 400 170" preserveAspectRatio="xMidYMid slice"><g transform="translate(190 85)" stroke="#d4a857" stroke-width="5" stroke-linecap="round" fill="none"><circle r="26" fill="rgba(212,168,87,.25)"/><path d="M0-44V-36M0 36V44M-44 0H-36M36 0H44M-31-31l6 6M25 25l6 6M-31 31l6-6M25-25l6-6"/></g><path d="M240 130c-18 0-26-10-26-22s10-22 24-22c4-12 16-18 28-18 18 0 30 12 30 28 14 0 24 8 24 18s-10 16-22 16z" fill="rgba(241,230,207,.18)" stroke="rgba(241,230,207,.5)" stroke-width="3"/></svg>';
  }
  function renderProjects() {
    var t = T[lang], grid = $('#projGrid'); grid.innerHTML = '';
    CONFIG.projects.forEach(function (p, i) {
      var d = DATA.projects[lang][p.id];
      var b = el('button', 'proj reveal' + (projFilter !== 'all' && p.cat !== projFilter ? ' hide' : ''));
      b.setAttribute('data-cat', p.cat); b.setAttribute('aria-label', d.title);
      b.innerHTML = '<div class="thumb">' + thumb(p.thumb) + '</div><div class="pbody"><h3>' + esc(d.title) + '</h3><p>' + esc(d.short) + '</p><div class="tags">' + p.tech.slice(0, 4).map(function (x) { return '<span class="tag">' + esc(x) + '</span>'; }).join('') + '</div><span class="more">' + t.see_detail + '</span></div><div class="glare"></div>';
      b.onclick = function () { lastFocus = b; openModal(i); };
      tilt(b);
      grid.appendChild(b);
    });
    var tabs = $('#projTabs'); tabs.innerHTML = '';
    [['all', t.f_all], ['fullstack', t.f_fullstack], ['frontend', t.f_frontend]].forEach(function (f) {
      var b = el('button', 'tab' + (projFilter === f[0] ? ' on' : ''), esc(f[1]));
      b.onclick = function () { projFilter = f[0]; $$('.tab', tabs).forEach(function (x) { x.classList.toggle('on', x === b); }); $$('.proj').forEach(function (c) { c.classList.toggle('hide', f[0] !== 'all' && c.getAttribute('data-cat') !== f[0]); }); };
      tabs.appendChild(b);
    });
  }
  function tilt(card) {
    card.addEventListener('pointermove', function (e) {
      if (e.pointerType !== 'mouse' || reduce) return;
      var r = card.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      card.style.transform = 'rotateX(' + ((0.5 - y) * 9).toFixed(2) + 'deg) rotateY(' + ((x - 0.5) * 11).toFixed(2) + 'deg) translateZ(8px)';
      card.style.setProperty('--gx', (x * 100) + '%'); card.style.setProperty('--gy', (y * 100) + '%');
    });
    card.addEventListener('pointerleave', function () { card.style.transform = ''; });
  }
  var openIdx = null, lastFocus = null, modal = $('#modal');
  function openModal(i) {
    var p = CONFIG.projects[i], d = DATA.projects[lang][p.id], t = T[lang]; openIdx = i;
    $('#sheet').innerHTML = '<div class="thumb">' + thumb(p.thumb) + '</div><div class="sbody"><h3 id="mTitle">' + esc(d.title) + '</h3><div class="tags">' + p.tech.map(function (x) { return '<span class="tag">' + esc(x) + '</span>'; }).join('') + '</div>' +
      '<h4>' + t.problem + '</h4><p>' + esc(d.problem) + '</p><h4>' + t.solution + '</h4><p>' + esc(d.solution) + '</p><h4>' + t.features + '</h4><ul>' + d.features.map(function (f) { return '<li>' + esc(f) + '</li>'; }).join('') + '</ul>' +
      '<div class="sbtns">' + (p.demo ? '<a class="btn primary" target="_blank" rel="noopener" href="' + esc(p.demo) + '">' + t.demo + '</a>' : '') + '<a class="btn ' + (p.demo ? 'ghost' : 'primary') + '" target="_blank" rel="noopener" href="' + esc(ghUrl + '/' + p.repo) + '">' + t.code + '</a></div></div>';
    modal.classList.add('open'); document.body.style.overflow = 'hidden'; $('#mClose').focus();
  }
  function closeModal() { modal.classList.remove('open'); document.body.style.overflow = ''; openIdx = null; if (lastFocus) lastFocus.focus(); }
  $('#mClose').onclick = closeModal;
  modal.addEventListener('click', function (e) { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && modal.classList.contains('open')) closeModal(); });

  /* ---------- repo GitHub (live) ---------- */
  var ghRepos = null;
  window.__renderGh = function () {
    if (!ghRepos || !ghRepos.length) return;
    $('#ghBlock').hidden = false;
    $('#ghGrid').innerHTML = ghRepos.map(function (r) {
      return '<a class="repo" href="' + esc(r.html_url) + '" target="_blank" rel="noopener"><b>' + esc(r.name) + '</b><p>' + esc(r.description || (lang === 'id' ? 'Tanpa deskripsi' : 'No description')) + '</p><small>' + esc(r.language || '—') + ' · ★ ' + r.stargazers_count + '</small></a>';
    }).join('');
  };
  if (window.fetch) {
    var ctl = window.AbortController ? new AbortController() : null, to = setTimeout(function () { if (ctl) ctl.abort(); }, 6000);
    fetch('https://api.github.com/users/' + CONFIG.github + '/repos?sort=pushed&per_page=30', ctl ? { signal: ctl.signal } : {})
      .then(function (r) { return r.ok ? r.json() : []; })
      .then(function (list) { clearTimeout(to); ghRepos = (list || []).filter(function (r) { return !r.fork; }).slice(0, 6); window.__renderGh(); })
      .catch(function () { /* diam: blok repo tidak ditampilkan */ });
  }

  /* ---------- kontak ---------- */
  if (CONFIG.whatsapp) { $('#waRow').hidden = false; $('#waLink').href = 'https://wa.me/' + CONFIG.whatsapp.replace(/\D/g, ''); }
  $('#form').addEventListener('submit', function (e) {
    e.preventDefault();
    var n = $('#fName').value.trim(), m = $('#fMail').value.trim(), msg = $('#fMsg').value.trim(), h = $('#formHint');
    if (!n || !/^\S+@\S+\.\S+$/.test(m) || !msg) { h.textContent = T[lang].f_err; h.style.color = 'var(--red)'; return; }
    h.style.color = ''; h.textContent = T[lang].f_opening;
    location.href = 'mailto:' + CONFIG.email + '?subject=' + encodeURIComponent((lang === 'id' ? 'Project dari ' : 'Project inquiry from ') + n) + '&body=' + encodeURIComponent(n + ' (' + m + ')\n\n' + msg);
  });
  $('#yr').textContent = new Date().getFullYear();

  /* ---------- nav, scroll, reveal ---------- */
  var links = $('#links'), burger = $('#burger'), header = $('header'), totop = $('#totop'), prog = $('#progress');
  burger.onclick = function () { var o = links.classList.toggle('open'); burger.setAttribute('aria-expanded', o); };
  links.addEventListener('click', function (e) { if (e.target.tagName === 'A') { links.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); } });
  totop.onclick = function () { window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' }); };
  var secIds = ['about', 'skills', 'projects', 'journey', 'contact'];
  function onScroll() {
    var y = window.pageYOffset, max = document.documentElement.scrollHeight - innerHeight;
    header.classList.toggle('scrolled', y > 10); totop.classList.toggle('show', y > 700); prog.style.width = (max > 0 ? y / max * 100 : 0) + '%';
    var cur = null; secIds.forEach(function (id) { if (document.getElementById(id).getBoundingClientRect().top < 140) cur = id; });
    $$('a', links).forEach(function (a) { a.classList.toggle('active', a.getAttribute('href') === '#' + cur); });
  }
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  var io = null;
  function observeReveals() {
    var items = $$('.reveal:not(.in)');
    if (!('IntersectionObserver' in window) || reduce) { items.forEach(function (i) { i.classList.add('in'); }); return; }
    if (!io) io = new IntersectionObserver(function (es) { es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); var b = en.target.querySelector('b[data-v]'); if (b) countUp(b); io.unobserve(en.target); } }); }, { threshold: 0.12 });
    items.forEach(function (i) { io.observe(i); });
  }
  if ('IntersectionObserver' in window) { new IntersectionObserver(function (es) { cubeVisible = es[0].isIntersecting; }).observe(scene); }

  /* ---------- foto: parallax miring 3D ---------- */
  var portrait = $('#portrait');
  if (!reduce) {
    window.addEventListener('pointermove', function (e) {
      if (e.pointerType !== 'mouse' || window.pageYOffset > innerHeight) return;
      var x = e.clientX / innerWidth - 0.5, y = e.clientY / innerHeight - 0.5;
      portrait.style.transform = 'perspective(900px) rotateY(' + (x * 10).toFixed(2) + 'deg) rotateX(' + (-y * 8).toFixed(2) + 'deg)';
    });
  }

  /* ---------- globe 3D (canvas) ---------- */
  (function globe() {
    var cv = $('#globe'), ctx = cv.getContext && cv.getContext('2d'); if (!ctx) return;
    var N = 170, pts = [], edges = [], W = 0, H = 0, dpr = 1, yaw = 0, pitch = -0.35, tYaw = 0, tPitch = 0, visible = true, col = [212, 168, 87];
    for (var i = 0; i < N; i++) { var y = 1 - (i / (N - 1)) * 2, r = Math.sqrt(1 - y * y), th = i * 2.399963; pts.push([Math.cos(th) * r, y, Math.sin(th) * r]); }
    for (var a = 0; a < N; a++) for (var b = a + 1; b < N; b++) { var dx = pts[a][0] - pts[b][0], dy = pts[a][1] - pts[b][1], dz = pts[a][2] - pts[b][2]; if (dx * dx + dy * dy + dz * dz < 0.16) edges.push([a, b]); }
    function readCol() { var h = getComputedStyle(root).getPropertyValue('--gold').trim(); if (/^#[0-9a-f]{6}$/i.test(h)) { var n = parseInt(h.slice(1), 16); col = [(n >> 16) & 255, (n >> 8) & 255, n & 255]; } }
    function resize() { dpr = Math.min(window.devicePixelRatio || 1, 2); var r = cv.getBoundingClientRect(); W = r.width; H = r.height; cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); }
    resize(); window.addEventListener('resize', resize);
    window.addEventListener('pointermove', function (e) { if (e.pointerType === 'mouse') { tYaw = (e.clientX / innerWidth - 0.5) * 0.9; tPitch = (e.clientY / innerHeight - 0.5) * 0.5; } });
    new MutationObserver(readCol).observe(root, { attributes: true, attributeFilter: ['data-theme'] }); readCol();
    if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { visible = es[0].isIntersecting; }).observe($('#hero'));
    var proj = new Array(N), t0 = 0;
    function frame(t) {
      requestAnimationFrame(frame);
      if (!visible || document.hidden) return;
      ctx.clearRect(0, 0, W, H);
      var wide = W > 860, cx = wide ? W * 0.72 : W * 0.5, cy = wide ? H * 0.5 : H * 0.3, R = Math.min(W * (wide ? 0.3 : 0.55), H * 0.46);
      if (!reduce) yaw += 0.0035; var ay = yaw + tYaw, ax = pitch + tPitch * 0.6;
      var cyw = Math.cos(ay), syw = Math.sin(ay), cp = Math.cos(ax), sp = Math.sin(ax);
      for (var i = 0; i < N; i++) {
        var p = pts[i], x = p[0] * cyw + p[2] * syw, z = -p[0] * syw + p[2] * cyw, y = p[1] * cp - z * sp; z = p[1] * sp + z * cp;
        var s = 1 / (1 - z * 0.35); proj[i] = [cx + x * R * s, cy + y * R * s, z];
      }
      ctx.lineWidth = 1;
      for (var e = 0; e < edges.length; e++) {
        var A = proj[edges[e][0]], B = proj[edges[e][1]], d = (A[2] + B[2]) / 2, al = 0.06 + (d + 1) * 0.16;
        ctx.strokeStyle = 'rgba(' + col[0] + ',' + col[1] + ',' + col[2] + ',' + al.toFixed(3) + ')'; ctx.beginPath(); ctx.moveTo(A[0], A[1]); ctx.lineTo(B[0], B[1]); ctx.stroke();
      }
      for (var k = 0; k < N; k++) { var P = proj[k], a2 = 0.25 + (P[2] + 1) * 0.37, rr = 1 + (P[2] + 1) * 1.1; ctx.fillStyle = 'rgba(' + col[0] + ',' + col[1] + ',' + col[2] + ',' + a2.toFixed(3) + ')'; ctx.beginPath(); ctx.arc(P[0], P[1], rr, 0, 6.2832); ctx.fill(); }
      // orbit: dua cincin miring dengan titik yang bergerak
      for (var o = 0; o < 2; o++) {
        var tilt = o ? -0.9 : 0.6, rad = R * (1.28 + o * 0.16); ctx.strokeStyle = 'rgba(' + col[0] + ',' + col[1] + ',' + col[2] + ',.16)'; ctx.beginPath();
        for (var s2 = 0; s2 <= 64; s2++) { var an = s2 / 64 * 6.2832, ox = Math.cos(an) * rad, oy = Math.sin(an) * rad * 0.28, rx = ox * Math.cos(tilt) - oy * Math.sin(tilt), ry = ox * Math.sin(tilt) + oy * Math.cos(tilt); if (s2) ctx.lineTo(cx + rx, cy + ry); else ctx.moveTo(cx + rx, cy + ry); }
        ctx.stroke();
        var an2 = t * 0.0004 * (o ? -1 : 1) + o * 2, ox2 = Math.cos(an2) * rad, oy2 = Math.sin(an2) * rad * 0.28;
        ctx.fillStyle = 'rgb(' + col[0] + ',' + col[1] + ',' + col[2] + ')'; ctx.beginPath(); ctx.arc(cx + ox2 * Math.cos(tilt) - oy2 * Math.sin(tilt), cy + ox2 * Math.sin(tilt) + oy2 * Math.cos(tilt), 3.2, 0, 6.2832); ctx.fill();
      }
    }
    requestAnimationFrame(frame);
  })();

  applyLang();
})();
