/* ---------- DATA ---------- */
const SKILLS = {
  "AI & ML": ["Machine Learning","Deep Learning","Computer Vision","NLP & LLMs","PyTorch","TensorFlow","RAG","scikit-learn"],
  "Languages": ["Python","Java","C","JavaScript","Dart","SQL","C++"],
  "Frontend & Mobile": ["React","Flutter","Tailwind CSS","HTML/CSS"],
  "Backend & Data": ["FastAPI","Node.js","PostgreSQL","pgvector","Redis","Firebase","MongoDB","REST APIs","Express.js"],
  "Tools & Cloud": ["Docker","AWS","Git","Jira","VS Code","Google Colab"],
  "UI/UX & Design": ["Figma","Adobe XD","Canva"]
};
const PROJECTS = [
  
{
  t: "ReliefLink",
  c: "AI/ML & Android Development",
  y: 2026,
  d: "Offline-first AI-powered disaster-response Android application designed to support emergency reporting and coordination without internet connectivity.",
  s: ["Flutter (Android)", "FastAPI", "MongoDB", "Ollama", "Gemma LLM"],
  p: "During disasters, internet connectivity and cloud services may become unavailable, making it difficult for emergency coordinators to collect, analyze, and prioritize incident reports.",
  a: "Developed an Android application using Flutter that allows volunteers to submit emergency reports in Hindi, Hinglish, and English over a local Wi-Fi network. Integrated a locally hosted Gemma language model through Ollama to analyze and classify incoming reports.",
  r: "Transforms unstructured emergency reports into structured information, including severity level, incident category, affected people, required resources, and recommended response actions, enabling faster disaster-response coordination without internet access."
},
{
  t: "WorkForge",
  c: "Android App & Flutter Development",
  y: 2026,
  d: "Android-based workforce management application for contractors to manage employees, construction sites, machinery, attendance, and salary records.",
  s: ["Flutter (Android)", "Dart", "Node.js", "Express.js", "MongoDB", "REST API"],
  p: "Managing employees, multiple construction sites, machinery, attendance, and salary calculations manually can lead to administrative difficulties and inaccurate records.",
  a: "Developed an Android application using Flutter with a centralized Node.js and Express.js backend connected to MongoDB. Implemented workforce management, site and machinery tracking, attendance monitoring, and automated salary calculation.",
  r: "Provides contractors with a centralized mobile platform to monitor workforce activities, manage site operations, track attendance, and calculate employee salaries efficiently."
},
  {t:"Landslide Detection",c:"AI/ML",y:2025,d:"Deep-learning system that finds the best landslide detection frame in a video.",s:["Python","Deep Learning","Computer Vision"],
   p:"Landslide detection has to work across very different seasons and conditions.",a:"The user uploads a video, the system splits it into frames, and it picks the frame with the most accurate landslide detection.",r:"Detection tested across winter, summer and rainy seasons."}
];
const SERVICES = [
  ["AI & ML Solutions",["Custom model development","Predictive analytics","Computer vision systems","AI workflow automation"]],
  ["Full-Stack SaaS Architecture",["Product from idea to launch","Scalable system design","Auth, billing & dashboards","Performance budgets that hold"]],
  ["Cross-Platform Mobile Apps",["Flutter iOS + Android","Custom UI/UX implementation","REST API & Firebase integration","App-store release support"]],
  ["RAG & Vector Search",["LLM apps with citations","Embedding pipeline design","Hybrid search tuning","Evaluation harnesses"]],
  ["Backend & Database Solutions",["RESTful API engineering","Database schema design","Auth & role management","Third-party integrations"]],
  ];
const EDU = [
  {h:"MCA — Computer Science & Engineering and Application",
 o:"Sambalpur University Institute of Information Technology",
 w:"2025 — 2027",
 g:"Currently Pursuing",
 t:["Artificial Intelligence","Machine Learning","Computer Systems Architecture","Compiler Design","Software Engineering","Database Management","Computer Networks","Cyber Security","Big Data Analytics","Design & Analysis of Algorithms"]},

{h:"B.Sc — Computer Science",
 o:"Rajendra University, Balangir",
 w:"2022 — 2025",
 g:"CGPA 8.8 / 10 — Gold Medalist",
 t:["Data Structures & Algorithms","Digital Logic","Database Management","Web Technologies","Artificial Intelligence"]},

{h:"Higher Secondary — Science",
 o:"Jayadev Institute of Science and Technology, Padampur",
 w:"2020 — 2022",
 g:"78%",
 t:["Physics","Chemistry","Mathematics","Biology"]
 }
 ];
const EXP = [
  {h:"Intern — AI/ML Project Development",
 o:"Infosys Springboard",
 w:"2026 — Present",
 b:[
   "Working on an AI-based system for early detection of equipment failure as part of the Infosys Springboard internship.",
   "Contributing to machine learning workflows, project development, and technical implementation.",
   "Collaborating with team members to develop and evaluate an AI-powered risk analysis solution."
 ],
 t:["Python","Machine Learning","Deep Learning","AI","Team Collaboration"]},

{h:"Quality Checking (QC)",
 o:"Newaetate",
 w:"2026 — Present",
 b:[
   "Performing quality checks for the Meesho process to maintain accuracy and operational standards.",
   "Reviewing process-related information and identifying inconsistencies to support quality assurance.",
   "Following workflow guidelines and maintaining attention to detail in daily operations."
 ],
 t:["Quality Assurance","Data Validation","Process Monitoring","Accuracy"]}];
const CERTS = [
  ["Oracle Certified Foundations Associate – Agentic AI","Oracle University",2026,"🤖"],
  ["Zoho POS Certified Associate","Zoho",2026,"🏅"],
  ["Data Science & Analytics","HP LIFE",2026,"📊"],
  ["Android App Development for Beginners","Simplilearn SkillUp",2026,"📱"],
  ["Introduction to JIRA","Simplilearn",2026,"⚙️"],
  ["Computer Vision 101","Infosys Springboard",2026,"👁️"],
  ["Prompt Engineering","Infosys Springboard",2026,"✍️"],
  ["Deep Learning for Developers","Infosys Springboard",2026,"🧠"],
  ["Generative AI Foundations: IT Integration with Generative AI","Infosys Springboard",2026,"✨"],
  ["Introduction to OpenAI GPT Models","Infosys Springboard",2026,"💬"],
  ["OpenAI GPT-3 for Developers","Infosys Springboard",2026,"💻"],
  ["Introduction to Natural Language Processing","Infosys Springboard",2026,"🔤"],
  ["Principles of Generative AI Certification","Infosys Springboard",2026,"🚀"],
  ["Artificial Intelligence Primer Certification","Infosys Springboard",2026,"🎓"],
  ["Introduction to Artificial Intelligence","Infosys Springboard",2026,"🤖"],
  ["Introduction to Data Science","Infosys Springboard",2026,"📈"],
  ["Generative AI Unleashing","Infosys Springboard",2026,"⚡"],
  ["Artificial Intelligence","Infosys Springboard",2026,"🧩"],
  ["Agile Scrum in Practice","Infosys Springboard",2026,"🔄"],
  ["Introduction to Robotic Process Automation","Infosys Springboard",2026,"🦾"],
  ["IoT & Mobile Robotics Workshop","Sambalpur University, Burla",2026,"📡"],
  ["EBSCO Discovery Service Training","EBSCO",2024,"📚"]];
const PAPERS = [
{
  t:"A Deep Learning Approach for Disease Forecasting and Treatment Guidance",
  v:"B.Sc. Academic Project — Rajendra University, Balangir",
  y:2025,
  c:0,
  a:"Developed an AI-powered healthcare system integrating deep learning and machine learning for disease detection and medicine recommendation. The system combines a general disease image analyzer, CNN-based pneumonia detection using chest X-ray images, MRI-based brain tumor identification, and an ML-powered medicine recommendation engine. It aims to support early diagnosis, personalized treatment guidance, and clinical decision-making through AI-driven healthcare solutions.",
  k:[
    "Deep Learning",
    "Machine Learning",
    "Medical Image Analysis",
    "CNN",
    "Pneumonia Detection",
    "Brain Tumor Detection",
    "MRI Analysis",
    "Medicine Recommendation"
  ],
  l:"#disease-forecasting"
},
  {
    t:"Landslide Detection System Using Deep Learning",
    v:"MCA III - Semester Technical Seminar Project - Sambalpur University Institute of Information Technology, Burla",
    y:2026,
    c:0,
    a:"Developed a video-based landslide detection system that extracts video frames and identifies potential landslide occurrences using deep learning across winter, summer and rainy-season conditions.",
    k:["Deep Learning","Computer Vision","PyTorch","Environmental AI"],
    l:"#landslide"
  },];
const QUOTES = [
  
  ["Infosys Springboard Mentor","Project Mentor","IM",
   "Manas demonstrated dedication and technical curiosity while contributing to AI and machine learning project development."],

  ["Academic Project Guide","Rajendra University, Balangir","RU",
   "Manas showed strong interest in applying deep learning and machine learning techniques to real-world healthcare problems."],

  ["Project Collaborator","ReliefLink Development Team","PC",
   "Working with Manas on AI-powered disaster response highlighted his interest in offline AI systems, Flutter development, and practical problem-solving."],

  ["Professional Colleague","Newaetate","NC",
   "Manas demonstrates attention to detail, consistency, and a willingness to learn while handling quality-checking responsibilities."]
];

/* ---------- HELPERS ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const tags = a => `<div class="tags">${a.map(x => `<span>${esc(x)}</span>`).join("")}</div>`;
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- RENDER ---------- */
$$(".kinetic .word span").forEach((s, i) => s.style.setProperty("--i", i));
$("#year").textContent = new Date().getFullYear();

$("#svcGrid").innerHTML = SERVICES.map(([h, l]) => `<article class="card svc reveal"><h3>${h}</h3><ul>${l.map(i => `<li>${i}</li>`).join("")}</ul><a href="#contact" class="btn btn-ghost btn-sm">Get a Quote</a></article>`).join("");
$("#eduTl").innerHTML = EDU.map(e => `<article class="card tl reveal"><div class="tl-head"><div><h3>${e.h}</h3><p class="org">${e.o}</p></div><div><p class="when">${e.w}</p><p class="when">${e.g}</p></div></div>${tags(e.t)}</article>`).join("");
$("#expTl").innerHTML = EXP.map(e => `<article class="card tl reveal"><div class="tl-head"><div><h3>${e.h}</h3><p class="org">${e.o}</p></div><p class="when">${e.w}</p></div><ul>${e.b.map(b => `<li>${b}</li>`).join("")}</ul>${tags(e.t)}</article>`).join("");
$("#certGrid").innerHTML = CERTS.map((c, i) => `<button class="card cert reveal" data-i="${i}"><span class="ico">${c[3]}</span><span><h3>${c[0]}</h3><p>${c[1]}</p><p>${c[2]}</p></span></button>`).join("");
$("#papers").innerHTML = PAPERS.map(p => `<article class="card paper reveal"><h3>${p.t}</h3><div class="m"><b>${p.v}</b><span>${p.y}</span><span>citations ${p.c}</span></div>${p.a ? `<p>${p.a}</p>${tags(p.k)}<p style="margin-top:14px"><a href="${p.l}">Read Paper →</a></p>` : ""}</article>`).join("");
$("#slider").innerHTML = QUOTES.map(q => `<figure class="card quote"><div class="q">“</div><blockquote>${q[3]}</blockquote><div class="who"><span class="av">${q[2]}</span><div><b>${q[0]}</b><small>${q[1]}</small></div></div></figure>`).join("");

/* projects */
const cats = ["All", ...new Set(PROJECTS.map(p => p.c))];
$("#projFilter").innerHTML = cats.map((c, i) => `<button class="${i ? "" : "on"}" data-c="${c}">${c}</button>`).join("");
function renderProjects(cat = "All") {
  $("#projGrid").innerHTML = PROJECTS.map((p, i) => ({ p, i })).filter(({ p }) => cat === "All" || p.c === cat)
    .map(({ p, i }) => `<button class="card proj reveal in" data-i="${i}"><div class="meta"><span>${p.c}</span><em>${p.y}</em></div><h3>${p.t}</h3><p>${p.d}</p>${tags(p.s)}</button>`).join("");
}
renderProjects();
$("#projFilter").addEventListener("click", e => {
  const b = e.target.closest("button"); if (!b) return;
  $$("#projFilter button").forEach(x => x.classList.toggle("on", x === b)); renderProjects(b.dataset.c);
});
$("#projGrid").addEventListener("pointermove", e => {
  const c = e.target.closest(".proj"); if (!c) return; const r = c.getBoundingClientRect();
  c.style.setProperty("--mx", e.clientX - r.left + "px"); c.style.setProperty("--my", e.clientY - r.top + "px");
});

/* modal */
const modal = $("#modal"), mBody = $("#modalBody");
const openModal = html => { mBody.innerHTML = html; modal.hidden = false; $("#modalX").focus(); document.body.style.overflow = "hidden"; };
const closeModal = () => { modal.hidden = true; document.body.style.overflow = ""; };
$("#modalX").onclick = closeModal;
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
addEventListener("keydown", e => { if (e.key === "Escape" && !modal.hidden) closeModal(); });
$("#projGrid").addEventListener("click", e => {
  const c = e.target.closest(".proj"); if (!c) return; const p = PROJECTS[c.dataset.i];
  openModal(`<p class="eyebrow">${p.c} · ${p.y}</p><h3>${p.t}</h3><p>${p.d}</p><h4>Problem</h4><p>${p.p}</p><h4>Approach</h4><p>${p.a}</p><h4>Result</h4><p>${p.r}</p><h4>Stack</h4>${tags(p.s)}`);
});
$("#certGrid").addEventListener("click", e => {
  const c = e.target.closest(".cert"); if (!c) return; const x = CERTS[c.dataset.i];
  openModal(`<p class="eyebrow">${x[2]}</p><h3>${x[3]} ${x[0]}</h3><p>Issued by ${x[1]}.</p>`);
});

/* ---------- SKILLS: orbit + grid ---------- */
let skillCat = "All";
const catNames = ["All", ...Object.keys(SKILLS)];
$("#skillCats").innerHTML = catNames.map((c, i) => `<button class="${i ? "" : "on"}" data-c="${c}">${c}</button>`).join("");
const visibleSkills = () => skillCat === "All" ? Object.values(SKILLS).flat() : SKILLS[skillCat];
let nodes = [];
function buildOrbit() {
  const o = $("#orbit"); const list = visibleSkills();
  o.innerHTML = `<div class="core">CORE</div>`;
  nodes = list.map((s, i) => {
    const n = document.createElement("div"); n.className = "node"; n.textContent = s; o.appendChild(n);
    // Fibonacci sphere distribution
    const k = (i + 0.5) / list.length, phi = Math.acos(1 - 2 * k), th = Math.PI * (1 + Math.sqrt(5)) * i;
    return { n, x: Math.cos(th) * Math.sin(phi), y: Math.sin(th) * Math.sin(phi), z: Math.cos(phi) };
  });
}
function buildGrid() {
  $("#skillGrid").innerHTML = Object.entries(SKILLS).filter(([k]) => skillCat === "All" || k === skillCat)
    .map(([k, v]) => `<div class="card"><h3>${k}</h3>${tags(v)}</div>`).join("");
}
let ang = 0, paused = false, mx = 0, my = 0;
$("#orbit").addEventListener("pointerenter", () => paused = true);
$("#orbit").addEventListener("pointerleave", () => { paused = false; mx = my = 0; });
$("#orbit").addEventListener("pointermove", e => { const r = e.currentTarget.getBoundingClientRect(); mx = (e.clientX - r.left) / r.width - .5; my = (e.clientY - r.top) / r.height - .5; });
function tickOrbit() {
  const o = $("#orbit");
  if (!o.hidden && nodes.length) {
    if (!paused && !reduce) ang += 0.004;
    const R = Math.min(o.clientWidth, o.clientHeight) * 0.4, ay = ang + mx * 1.2, ax = my * 1.0;
    const cy = Math.cos(ay), sy = Math.sin(ay), cx = Math.cos(ax), sx = Math.sin(ax);
    for (const p of nodes) {
      let x = p.x * cy + p.z * sy, z = -p.x * sy + p.z * cy, y = p.y * cx - z * sx; z = p.y * sx + z * cx;
      const sc = 0.7 + (z + 1) * 0.3;
      p.n.style.transform = `translate(-50%,-50%) translate3d(${x * R * 1.5}px,${y * R}px,0) scale(${sc})`;
      p.n.style.opacity = 0.35 + (z + 1) * 0.325; p.n.style.zIndex = Math.round((z + 1) * 10);
    }
  }
  requestAnimationFrame(tickOrbit);
}
buildOrbit(); buildGrid(); tickOrbit();
$("#skillCats").addEventListener("click", e => {
  const b = e.target.closest("button"); if (!b) return; skillCat = b.dataset.c;
  $$("#skillCats button").forEach(x => x.classList.toggle("on", x === b)); buildOrbit(); buildGrid();
});
$("#skillView").addEventListener("click", e => {
  const b = e.target.closest("button"); if (!b) return;
  $$("#skillView button").forEach(x => x.classList.toggle("on", x === b));
  const orbit = b.dataset.view === "orbit"; $("#orbit").hidden = !orbit; $("#skillGrid").hidden = orbit;
});

/* ---------- NAV / SCROLL ---------- */
const header = $("#header"), prog = $("#progress");
addEventListener("scroll", () => {
  header.classList.toggle("stuck", scrollY > 20);
  prog.style.width = (scrollY / (document.documentElement.scrollHeight - innerHeight) * 100) + "%";
}, { passive: true });
$("#burger").onclick = e => { const o = $("#links").classList.toggle("open"); e.currentTarget.setAttribute("aria-expanded", o); };
$$("#links a").forEach(a => a.addEventListener("click", () => { $("#links").classList.remove("open"); $("#burger").setAttribute("aria-expanded", false); }));
const spy = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) $$("#links a").forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
}), { rootMargin: "-45% 0px -50% 0px" });
$$("main section[id]").forEach(s => spy.observe(s));

/* reveal + counters */
const io = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return; e.target.classList.add("in"); io.unobserve(e.target);
  $$("[data-count]", e.target).forEach(el => {
    const to = +el.dataset.count, t0 = performance.now();
    (function f(t) { const k = Math.min((t - t0) / 1400, 1); el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(f); })(t0);
  });
}), { threshold: .12 });
$$(".reveal").forEach(el => io.observe(el));

/* role rotator */
const roles = ["ML Researcher", "LLM Engineer", "Flutter Developer", "Problem Solver"]; let ri = 0;
setInterval(() => { ri = (ri + 1) % roles.length; $("#rotator").textContent = roles[ri]; }, 2400);

/* drag slider */
(() => {
  const s = $("#slider"); let down = false, sx = 0, sl = 0;
  s.addEventListener("pointerdown", e => { down = true; sx = e.clientX; sl = s.scrollLeft; s.classList.add("drag"); });
  addEventListener("pointerup", () => { down = false; s.classList.remove("drag"); });
  s.addEventListener("pointermove", e => { if (down) s.scrollLeft = sl - (e.clientX - sx); });
})();

/* ---------- TERMINAL ---------- */
const out = $("#termOut"), inp = $("#termInput"); const hist = []; let hi = 0;
const print = (t, cls = "") => { const d = document.createElement("div"); if (cls) d.className = cls; d.textContent = t; out.appendChild(d); out.scrollTop = out.scrollHeight; };
print("ALEX://OS v3.1 — neural shell initialized"); print("Type 'help' to see available commands.\n");
const CMDS = {
  help: () => "Commands: about, skills, projects, contact, matrix, sudo hire, clear",
  about: () => "Alex Carter — AI/ML & Full-Stack Developer. M.S. CS (Stanford). 4+ years shipping production AI.",
  skills: () => Object.entries(SKILLS).map(([k, v]) => `${k}: ${v.join(", ")}`).join("\n"),
  projects: () => PROJECTS.map(p => `• ${p.t} (${p.y}) — ${p.d}`).join("\n"),
  contact: () => "alex.carter.dev@gmail.com · San Francisco, CA · Open to remote",
  "sudo hire": () => "[sudo] verifying credentials…\nAccess granted. Offer letter drafted. Opening contact channel…",
  clear: () => { out.innerHTML = ""; return ""; }
};
let matrixOn = false;
inp.closest("form").addEventListener("submit", e => {
  e.preventDefault(); const v = inp.value.trim().toLowerCase(); inp.value = ""; if (!v) return;
  hist.push(v); hi = hist.length; print("alex@neural-os:~$ " + v, "u");
  if (v === "matrix") { matrixOn = !matrixOn; print(matrixOn ? "Wake up, Neo… (type 'matrix' again to exit)" : "Back to reality."); document.documentElement.style.setProperty("--cyan", matrixOn ? "#22ff88" : "#06b6d4"); }
  else if (CMDS[v]) { const r = CMDS[v](); if (r) print(r); if (v === "sudo hire") setTimeout(() => $("#contact").scrollIntoView({ behavior: "smooth" }), 900); }
  else print(`command not found: ${v}. Try 'help'.`, "e");
});
inp.addEventListener("keydown", e => {
  if (e.key === "ArrowUp" && hist.length) { hi = Math.max(0, hi - 1); inp.value = hist[hi]; e.preventDefault(); }
  if (e.key === "ArrowDown") { hi = Math.min(hist.length, hi + 1); inp.value = hist[hi] || ""; }
});
$("#term").addEventListener("click", () => inp.focus());


/* ---------- CONTACT ---------- */

// Handle contact intent selection
$("#intent").addEventListener("click", (e) => {
  const button = e.target.closest("button");
  if (!button) return;

  $$("#intent button").forEach((item) => {
    item.classList.toggle("on", item === button);
  });
});



// Handle contact form submission
$("#contactForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const form = e.target;
  const message = $("#formMsg");
  const submitBtn = form.querySelector('button[type="submit"]');

  const data = Object.fromEntries(new FormData(form));

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (
    !data.name.trim() ||
    !emailRegex.test(data.email.trim()) ||
    !data.message.trim()
  ) {
    message.className = "form-msg err";
    message.textContent =
      "Please enter your name, a valid email, and a message.";
    return;
  }

  const intent =
    $("#intent .on")?.textContent.trim() || "General Inquiry";

  const subject = `${intent} — ${data.name.trim()}`;

  const body = `Hello Manas,

${data.message.trim()}

Regards,
${data.name.trim()}
Email: ${data.email.trim()}`;

  const recipient = "manasranjansahu.dev@gmail.com";

  const mailtoURL =
    `mailto:${recipient}?subject=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`;

  // Gmail web fallback
  const gmailURL =
    `https://mail.google.com/mail/?view=cm&fs=1` +
    `&to=${encodeURIComponent(recipient)}` +
    `&su=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`;

  message.className = "form-msg";
  message.textContent = "Opening your email composer...";

  submitBtn.disabled = true;

  // Try the default email application first
  window.location.href = mailtoURL;

  // Restore the button
  setTimeout(() => {
    submitBtn.disabled = false;
    message.textContent =
      "If your email application didn't open, use Gmail instead.";
  }, 1500);

  // Add a Gmail fallback link
  const fallback = document.createElement("a");
  fallback.href = gmailURL;
  fallback.target = "_blank";
  fallback.rel = "noopener noreferrer";
  fallback.textContent = " Open Gmail";
  fallback.className = "gmail-fallback";

  message.appendChild(fallback);
});


// Share portfolio
$("#share").addEventListener("click", async () => {
  const shareData = {
    title: document.title,
    text: "Check out my portfolio!",
    url: window.location.href
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      await navigator.clipboard.writeText(shareData.url);

      $("#share").textContent = "Link copied ✓";
    }
  } catch (error) {
    if (error.name !== "AbortError") {
      console.error("Sharing failed:", error);
    }
  }
});

/* ---------- NEURAL BACKGROUND ---------- */
(() => {
  const c = $("#bg"), x = c.getContext("2d"); let w, h, pts = [], mouse = { x: -1e3, y: -1e3 };
  const size = () => { w = c.width = innerWidth; h = c.height = innerHeight; pts = Array.from({ length: Math.min(90, Math.floor(w * h / 18000)) }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35 })); };
  size(); addEventListener("resize", size);
  addEventListener("pointermove", e => { mouse.x = e.clientX; mouse.y = e.clientY; });
  (function draw() {
    x.clearRect(0, 0, w, h);
    for (const p of pts) {
      if (!reduce) { p.x += p.vx; p.y += p.vy; } if (p.x < 0 || p.x > w) p.vx *= -1; if (p.y < 0 || p.y > h) p.vy *= -1;
      x.fillStyle = "rgba(139,92,246,.7)"; x.beginPath(); x.arc(p.x, p.y, 1.6, 0, 7); x.fill();
    }
    for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
      const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
      if (d < 140) { x.strokeStyle = `rgba(6,182,212,${(1 - d / 140) * .22})`; x.beginPath(); x.moveTo(pts[i].x, pts[i].y); x.lineTo(pts[j].x, pts[j].y); x.stroke(); }
    }
    for (const p of pts) { const d = Math.hypot(p.x - mouse.x, p.y - mouse.y); if (d < 180) { x.strokeStyle = `rgba(139,92,246,${(1 - d / 180) * .5})`; x.beginPath(); x.moveTo(p.x, p.y); x.lineTo(mouse.x, mouse.y); x.stroke(); } }
    requestAnimationFrame(draw);
  })();
})();
