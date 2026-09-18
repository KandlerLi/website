(function () {
  "use strict";

  var translations = {
    en: {
      "meta.description": "Julian Kandler — Enterprise Architect. Infrastructure, backend, frontend, and CI/CD.",
      "nav.career": "Career",
      "nav.skills": "Skills",
      "nav.personal": "Personal",
      "nav.contact": "Contact",
      "heading.profile": "👤 Profile",
      "heading.career": "💼 Career",
      "heading.education": "🎓 Education",
      "heading.skills": "🧠 Skills",
      "heading.personal": "🏡 Personal",
      "heading.contact": "✉️ Contact",
      "hero.tagline": "DevOps & infrastructure — Linux, Terraform, Ansible, AWS, CI/CD",
      "profile.text": "Enterprise Architect with professional IT experience since 2017, focused on Linux, Infrastructure as Code, automation, containerization, and DevOps. Hands-on with Terraform, Ansible, Docker/Podman, GitHub Actions, and AWS — and builds and operates self-hosted infrastructure projects outside of work to explore the same practices end to end, including the site you're looking at right now.",
      "personal.text": "Lives in Filderstadt, near Stuttgart, born in 1989. Shares his home with two cats, Miumiu and Baozi. Enjoys traveling and keeps a large plant collection with a soft spot for growing chilis — and tinkers with personal home-lab and infrastructure projects in his free time, including the site you're looking at right now.",
      "cap.h3.dates": "Jul 2022 – present",
      "cap.role": 'Enterprise Architect — Cloud Architect <span class="dates">Apr 2024 – present</span> · Cloud Architect <span class="dates">Oct 2022 – Dec 2022</span> · Tech Lead <span class="dates">Jul 2022 – Sep 2022</span>',
      "cap.proj1.title": "Infrastructure change coordination",
      "cap.proj1.dates": "Apr 2024 – present",
      "cap.proj1.li1": "Coordinate infrastructure changes, imports, and reshaping as Cloud Architect.",
      "cap.proj2.title": "Vehicle data platform reliability",
      "cap.proj2.li1": "Received, processed, stored, and provided vehicle data.",
      "cap.proj2.li2": "Ensured the infrastructure was production-ready for go-live.",
      "cap.proj2.li3": "Built automated snapshots and continuous backups of the database.",
      "cap.proj2.li4": "Wrote disaster-recovery runbooks and set up monitoring and alerting.",
      "cap.proj3.title": "Multi-account AWS infrastructure rollout",
      "cap.proj3.li1": "Designed a scalable solution for rolling out infrastructure across up to 400 AWS accounts.",
      "cap.proj3.li2": "Led conceptualization and development, coordinating with business and dev-team stakeholders.",
      "huk.role": "Internship / Working Student",
      "exx.proj1.title": "Vehicle workshop appointment portal",
      "exx.proj1.li1": "Built a new portal for scheduling vehicle workshop appointments from the ground up.",
      "exx.proj1.li2": "Developed front-end and back-end application logic, with infrastructure provisioned via CI/CD.",
      "exx.proj1.li3": "Set up automated testing and monitoring.",
      "exx.proj2.title": "Retail sample planning portal",
      "exx.proj2.li1": "Built a portal to plan and control retail sample scheduling.",
      "exx.proj2.li2": "Developed the front-end and back-end application logic.",
      "exx.proj3.title": "Customer vehicle-profile portal",
      "exx.proj3.li1": "Extended a customer portal for managing and configuring vehicle profiles.",
      "exx.proj3.li2": "Developed front-end and back-end application logic.",
      "exx.proj4.title": "Reusable CMS components",
      "exx.proj4.li1": "Built new, reusable components for a content-management system.",
      "skills.cat1": "Infrastructure & cloud",
      "skills.cat2": "Linux & systems",
      "skills.cat3": "CI/CD",
      "skills.cat4": "Observability",
      "skills.cat5": "Security",
      "skills.cat6": "Databases",
      "skills.cat7": "Languages & frameworks",
      "skills.cat8": "Self-hosted platforms & AI",
      "skills.cat9": "Tools",
      "skills.cat10": "Methodologies",
      "skills.cat11": "Spoken languages",
      "skills.languages": "German — native · English — business fluent · Chinese — beginner",
      "contact.text": "Feel free to reach out or connect.",
      "contact.card": "Digital business card",
      "footer.imprint": "Imprint",
      "footer.privacy": "Privacy policy",
      "a11y.menuToggle": "Toggle navigation menu",
      "a11y.themeToggle": "Toggle color theme",
      "a11y.langSwitcher": "Choose language"
    },
    de: {
      "meta.description": "Julian Kandler — Enterprise Architect. Infrastruktur, Backend, Frontend und CI/CD.",
      "nav.career": "Werdegang",
      "nav.skills": "Fähigkeiten",
      "nav.personal": "Persönliches",
      "nav.contact": "Kontakt",
      "heading.profile": "👤 Profil",
      "heading.career": "💼 Werdegang",
      "heading.education": "🎓 Ausbildung",
      "heading.skills": "🧠 Fähigkeiten",
      "heading.personal": "🏡 Persönliches",
      "heading.contact": "✉️ Kontakt",
      "hero.tagline": "DevOps & Infrastruktur — Linux, Terraform, Ansible, AWS, CI/CD",
      "profile.text": "Enterprise Architect mit professioneller IT-Erfahrung seit 2017, mit Schwerpunkt auf Linux, Infrastructure as Code, Automatisierung, Containerisierung und DevOps. Praxiserfahren mit Terraform, Ansible, Docker/Podman, GitHub Actions und AWS — und betreibt außerhalb der Arbeit eigene Self-Hosted-Infrastrukturprojekte, um dieselben Praktiken end-to-end zu vertiefen, einschließlich der Website, die Sie gerade betrachten.",
      "personal.text": "Lebt in Filderstadt bei Stuttgart, geboren 1989. Teilt sein Zuhause mit zwei Katzen, Miumiu und Baozi. Reist gerne, hat eine große Pflanzensammlung mit einer Vorliebe fürs Chili-Anbauen — und bastelt in der Freizeit an privaten Homelab- und Infrastruktur-Projekten, unter anderem an dieser Website.",
      "cap.h3.dates": "Jul 2022 – heute",
      "cap.role": 'Enterprise Architect — Cloud Architect <span class="dates">Apr 2024 – heute</span> · Cloud Architect <span class="dates">Oct 2022 – Dec 2022</span> · Tech Lead <span class="dates">Jul 2022 – Sep 2022</span>',
      "cap.proj1.title": "Koordination von Infrastrukturänderungen",
      "cap.proj1.dates": "Apr 2024 – heute",
      "cap.proj1.li1": "Koordiniert Infrastrukturänderungen, Imports und Reshaping als Cloud Architect.",
      "cap.proj2.title": "Zuverlässigkeit der Fahrzeugdatenplattform",
      "cap.proj2.li1": "Empfing, verarbeitete, speicherte und stellte Fahrzeugdaten bereit.",
      "cap.proj2.li2": "Stellte die Produktionsreife der Infrastruktur für den Go-live sicher.",
      "cap.proj2.li3": "Implementierte automatisierte Snapshots und kontinuierliche Backups der Datenbank.",
      "cap.proj2.li4": "Erstellte Disaster-Recovery-Runbooks und richtete Monitoring und Alerting ein.",
      "cap.proj3.title": "Multi-Account-AWS-Infrastruktur-Rollout",
      "cap.proj3.li1": "Konzipierte eine skalierbare Lösung für das Ausrollen von Infrastruktur auf bis zu 400 AWS-Konten.",
      "cap.proj3.li2": "Leitete Konzeption und Entwicklung und koordinierte sich mit Business- und Entwicklungsteam-Stakeholdern.",
      "huk.role": "Praktikum / Werkstudent",
      "exx.proj1.title": "Terminportal für Fahrzeugwerkstätten",
      "exx.proj1.li1": "Baute von Grund auf ein neues Portal zur Terminplanung für Fahrzeugwerkstätten.",
      "exx.proj1.li2": "Entwickelte Front-End- und Back-End-Anwendungslogik, mit über CI/CD bereitgestellter Infrastruktur.",
      "exx.proj1.li3": "Richtete automatisiertes Testing und Monitoring ein.",
      "exx.proj2.title": "Portal zur Planung von Einzelhandelsmustern",
      "exx.proj2.li1": "Baute ein Portal zur Planung und Steuerung der Musterversand-Terminierung im Einzelhandel.",
      "exx.proj2.li2": "Entwickelte die Front-End- und Back-End-Anwendungslogik.",
      "exx.proj3.title": "Kundenportal für Fahrzeugprofile",
      "exx.proj3.li1": "Erweiterte ein Kundenportal zur Verwaltung und Konfiguration von Fahrzeugprofilen.",
      "exx.proj3.li2": "Entwickelte Front-End- und Back-End-Anwendungslogik.",
      "exx.proj4.title": "Wiederverwendbare CMS-Komponenten",
      "exx.proj4.li1": "Entwickelte neue, wiederverwendbare Komponenten für ein Content-Management-System.",
      "skills.cat1": "Infrastruktur & Cloud",
      "skills.cat2": "Linux & Systeme",
      "skills.cat3": "CI/CD",
      "skills.cat4": "Observability",
      "skills.cat5": "Sicherheit",
      "skills.cat6": "Datenbanken",
      "skills.cat7": "Sprachen & Frameworks",
      "skills.cat8": "Self-Hosted-Plattformen & KI",
      "skills.cat9": "Tools",
      "skills.cat10": "Methodiken",
      "skills.cat11": "Gesprochene Sprachen",
      "skills.languages": "Deutsch — Muttersprache · Englisch — verhandlungssicher · Chinesisch — Anfänger",
      "contact.text": "Kontaktieren oder vernetzen Sie sich gerne mit mir.",
      "contact.card": "Digitale Visitenkarte",
      "footer.imprint": "Impressum",
      "footer.privacy": "Datenschutz",
      "a11y.menuToggle": "Navigationsmenü umschalten",
      "a11y.themeToggle": "Farbschema umschalten",
      "a11y.langSwitcher": "Sprache wählen"
    },
    zh: {
      "meta.description": "Julian Kandler — 企业架构师。基础设施、后端、前端与 CI/CD。",
      "nav.career": "履历",
      "nav.skills": "技能",
      "nav.personal": "个人生活",
      "nav.contact": "联系方式",
      "heading.profile": "👤 简介",
      "heading.career": "💼 履历",
      "heading.education": "🎓 教育经历",
      "heading.skills": "🧠 技能",
      "heading.personal": "🏡 个人生活",
      "heading.contact": "✉️ 联系方式",
      "hero.tagline": "DevOps 与基础设施 — Linux、Terraform、Ansible、AWS、CI/CD",
      "profile.text": "自2017年起从事IT工作的企业架构师(Enterprise Architect),专注于 Linux、基础设施即代码(Infrastructure as Code)、自动化、容器化与 DevOps。熟练使用 Terraform、Ansible、Docker/Podman、GitHub Actions 和 AWS —— 并在工作之余搭建和运维自托管的基础设施项目,以端到端的方式实践同样的理念,包括您正在浏览的这个网站。",
      "personal.text": "住在斯图加特附近的费尔德施塔特(Filderstadt),1989年出生。家里养了两只猫,Miumiu 和 Baozi。喜欢旅行,种了很多植物,尤其喜欢种辣椒——业余时间还喜欢捣鼓个人家庭实验室和基础设施项目,包括你正在浏览的这个网站。",
      "cap.h3.dates": "Jul 2022 – 至今",
      "cap.role": 'Enterprise Architect — Cloud Architect <span class="dates">Apr 2024 – 至今</span> · Cloud Architect <span class="dates">Oct 2022 – Dec 2022</span> · Tech Lead <span class="dates">Jul 2022 – Sep 2022</span>',
      "cap.proj1.title": "基础设施变更协调",
      "cap.proj1.dates": "Apr 2024 – 至今",
      "cap.proj1.li1": "作为 Cloud Architect 负责协调基础设施变更、资源导入(import)与重塑(reshaping)。",
      "cap.proj2.title": "车辆数据平台可靠性",
      "cap.proj2.li1": "负责接收、处理、存储并提供车辆数据。",
      "cap.proj2.li2": "确保基础设施在上线前达到生产就绪状态。",
      "cap.proj2.li3": "构建了数据库的自动快照与持续备份机制。",
      "cap.proj2.li4": "编写灾难恢复(disaster recovery)手册,并搭建了监控与告警体系。",
      "cap.proj3.title": "多账户 AWS 基础设施部署",
      "cap.proj3.li1": "设计了一套可扩展的解决方案,用于在多达 400 个 AWS 账户中推行基础设施部署。",
      "cap.proj3.li2": "主导方案设计与开发工作,并与业务方及开发团队相关干系人协同推进。",
      "huk.role": "实习生 / 兼职学生",
      "exx.proj1.title": "车辆维修预约门户",
      "exx.proj1.li1": "从零开始构建了一个用于预约车辆维修的全新门户系统。",
      "exx.proj1.li2": "开发了前端与后端应用逻辑,基础设施通过 CI/CD 完成部署。",
      "exx.proj1.li3": "搭建了自动化测试与监控体系。",
      "exx.proj2.title": "零售样品计划门户",
      "exx.proj2.li1": "构建了用于规划与管控零售样品发放排期的门户系统。",
      "exx.proj2.li2": "开发了前端与后端应用逻辑。",
      "exx.proj3.title": "客户车辆档案门户",
      "exx.proj3.li1": "扩展了一个用于管理和配置车辆档案的客户门户。",
      "exx.proj3.li2": "开发了前端与后端应用逻辑。",
      "exx.proj4.title": "可复用 CMS 组件",
      "exx.proj4.li1": "为内容管理系统(CMS)开发了新的可复用组件。",
      "skills.cat1": "基础设施与云",
      "skills.cat2": "Linux 与系统",
      "skills.cat3": "CI/CD",
      "skills.cat4": "可观测性",
      "skills.cat5": "安全",
      "skills.cat6": "数据库",
      "skills.cat7": "编程语言与框架",
      "skills.cat8": "自托管平台与人工智能",
      "skills.cat9": "工具",
      "skills.cat10": "方法论",
      "skills.cat11": "口语能力",
      "skills.languages": "德语 — 母语 · 英语 — 商务流利 · 中文 — 初学者",
      "contact.text": "欢迎联系我或与我建立联系。",
      "contact.card": "电子名片",
      "footer.imprint": "法律声明",
      "footer.privacy": "隐私政策",
      "a11y.menuToggle": "切换导航菜单",
      "a11y.themeToggle": "切换配色主题",
      "a11y.langSwitcher": "选择语言"
    }
  };

  var SUPPORTED = Object.keys(translations);
  var LANG_KEY = "site-lang";
  var THEME_KEY = "site-theme";

  function detectLang() {
    try {
      var fromUrl = new URLSearchParams(window.location.search).get("lang");
      if (fromUrl && SUPPORTED.indexOf(fromUrl) !== -1) return fromUrl;
    } catch (e) {
      /* URLSearchParams unsupported -- fall through */
    }
    try {
      var stored = localStorage.getItem(LANG_KEY);
      if (stored && SUPPORTED.indexOf(stored) !== -1) return stored;
    } catch (e) {
      /* localStorage unavailable (private mode etc.) -- fall through to browser language */
    }
    var nav = ((navigator.language || "en").split("-")[0] || "en").toLowerCase();
    return SUPPORTED.indexOf(nav) !== -1 ? nav : "en";
  }

  function updateUrlLang(lang) {
    try {
      var url = new URL(window.location.href);
      if (url.searchParams.get("lang") === lang) return;
      url.searchParams.set("lang", lang);
      window.history.replaceState(null, "", url);
    } catch (e) {
      /* ignore -- URL API unsupported (e.g. file://) or blocked */
    }
  }

  function applyLanguage(lang) {
    var dict = translations[lang] || translations.en;
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      var attr = el.getAttribute("data-i18n-attr");
      var key = el.getAttribute("data-i18n");
      if (attr && key && dict[key]) el.setAttribute(attr, dict[key]);
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (dict[key]) el.innerHTML = dict[key];
    });

    document.querySelectorAll("[data-i18n]:not([data-i18n-attr])").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });

    var meta = document.querySelector('meta[name="description"]');
    if (meta && dict["meta.description"]) meta.setAttribute("content", dict["meta.description"]);

    var select = document.getElementById("lang-select");
    if (select) select.value = lang;

    updateUrlLang(lang);

    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch (e) {
      /* ignore -- language just won't persist across visits */
    }
  }

  function initLangSwitcher() {
    var select = document.getElementById("lang-select");
    if (!select) return;
    select.addEventListener("change", function () {
      applyLanguage(select.value);
    });
  }

  function resolvedTheme() {
    var explicit = document.documentElement.getAttribute("data-theme");
    if (explicit === "light" || explicit === "dark") return explicit;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function updateThemeToggle() {
    var theme = resolvedTheme();
    var icon = document.querySelector(".theme-icon");
    var btn = document.getElementById("theme-toggle");
    if (icon) icon.textContent = theme === "dark" ? "☀️" : "🌙";
    if (btn) btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (e) {
      /* ignore -- theme just won't persist across visits */
    }
    updateThemeToggle();
  }

  function initThemeToggle() {
    var btn = document.getElementById("theme-toggle");
    if (!btn) return;
    btn.addEventListener("click", function () {
      applyTheme(resolvedTheme() === "dark" ? "light" : "dark");
    });
    updateThemeToggle();
  }

  function initMenuToggle() {
    var toggle = document.getElementById("menu-toggle");
    var nav = document.getElementById("site-nav");
    if (!toggle || !nav) return;

    function closeMenu() {
      nav.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    }

    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeMenu();
    });
  }

  applyLanguage(detectLang());
  initLangSwitcher();
  initThemeToggle();
  initMenuToggle();
})();
