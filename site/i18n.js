(function () {
  "use strict";

  var translations = {
    en: {
      "meta.description": "Julian Kandler — Enterprise Architect. Infrastructure, backend, frontend, and CI/CD.",
      "nav.profile": "Profile",
      "nav.experience": "Experience",
      "nav.projects": "Personal projects",
      "nav.skills": "Skills",
      "nav.education": "Education",
      "nav.languages": "Languages",
      "nav.contact": "Contact",
      "heading.profile": "👤 Profile",
      "heading.experience": "💼 Experience",
      "heading.projects": "🛠️ Personal projects",
      "heading.skills": "🧠 Skills",
      "heading.education": "🎓 Education",
      "heading.languages": "🗣️ Languages",
      "heading.contact": "✉️ Contact",
      "hero.tagline": "DevOps & infrastructure — Linux, Terraform, Ansible, AWS, CI/CD",
      "profile.text": "Enterprise Architect with professional IT experience since 2017, focused on Linux, Infrastructure as Code, automation, containerization, and DevOps. Hands-on with Terraform, Ansible, Docker/Podman, GitHub Actions, and AWS — and builds and operates self-hosted infrastructure projects outside of work to explore the same practices end to end, including the site you're looking at right now.",
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
      "projects.intro": "Home-infrastructure projects outside of client work, built to explore DevOps, cloud, and self-hosted systems in practice rather than just in theory.",
      "home.proj1.title": "Home infrastructure as code",
      "home.proj1.li1": "Manage a home server and its services entirely through Terraform and Ansible, version-controlled in Git.",
      "home.proj1.li2": "Provision AWS resources (Route 53, S3, CloudFront, IAM/OIDC) and GitHub repository configuration from the same codebase — no manual changes to live infrastructure.",
      "home.proj1.li3": "This site is deployed exactly this way: Terraform-managed S3 and CloudFront, GitHub Actions CI/CD.",
      "home.proj2.title": "Self-hosted GitHub Actions runner",
      "home.proj2.li1": "Designed a fully automated Debian VM, provisioned with Ansible, to host a dedicated self-hosted GitHub Actions runner.",
      "home.proj2.li2": "Configured dedicated disk storage placement for the VM and runner data.",
      "home.proj3.title": "Self-hosted Nextcloud platform",
      "home.proj3.li1": "Operate a private Nextcloud instance as a personal cloud-storage replacement, containerized with Docker on a Debian home server.",
      "home.proj3.li2": "Designed the storage architecture across SSD and HDD storage, including Linux permission/UID-GID handling and bind mounts.",
      "home.proj3.li3": "Diagnosed an IPv6 DNS misconfiguration that was silently degrading WebDAV performance — after the fix, an operation that took roughly two minutes completed in about one second.",
      "home.proj4.title": "Personal finance automation",
      "home.proj4.li1": "Built a Python workflow that reads a personal budget spreadsheet, drives a browser via Playwright to render a chart, and uploads the result to Nextcloud automatically.",
      "home.proj4.li2": "Runs on a schedule behind a cheap change-detection check, so it only does the expensive work when the underlying data actually changed.",
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
      "lang.german": "German — native",
      "lang.english": "English — business fluent",
      "contact.text": "Feel free to reach out or connect.",
      "footer.imprint": "Imprint",
      "footer.privacy": "Privacy policy",
      "a11y.menuToggle": "Toggle navigation menu",
      "a11y.themeToggle": "Toggle color theme",
      "a11y.langSwitcher": "Choose language"
    },
    de: {
      "meta.description": "Julian Kandler — Enterprise Architect. Infrastruktur, Backend, Frontend und CI/CD.",
      "nav.profile": "Profil",
      "nav.experience": "Berufserfahrung",
      "nav.projects": "Persönliche Projekte",
      "nav.skills": "Fähigkeiten",
      "nav.education": "Ausbildung",
      "nav.languages": "Sprachen",
      "nav.contact": "Kontakt",
      "heading.profile": "👤 Profil",
      "heading.experience": "💼 Berufserfahrung",
      "heading.projects": "🛠️ Persönliche Projekte",
      "heading.skills": "🧠 Fähigkeiten",
      "heading.education": "🎓 Ausbildung",
      "heading.languages": "🗣️ Sprachen",
      "heading.contact": "✉️ Kontakt",
      "hero.tagline": "DevOps & Infrastruktur — Linux, Terraform, Ansible, AWS, CI/CD",
      "profile.text": "Enterprise Architect mit professioneller IT-Erfahrung seit 2017, mit Schwerpunkt auf Linux, Infrastructure as Code, Automatisierung, Containerisierung und DevOps. Praxiserfahren mit Terraform, Ansible, Docker/Podman, GitHub Actions und AWS — und betreibt außerhalb der Arbeit eigene Self-Hosted-Infrastrukturprojekte, um dieselben Praktiken end-to-end zu vertiefen, einschließlich der Website, die Sie gerade betrachten.",
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
      "projects.intro": "Home-Infrastruktur-Projekte außerhalb der Kundenarbeit, um DevOps, Cloud und Self-Hosted-Systeme praktisch statt nur theoretisch zu erkunden.",
      "home.proj1.title": "Home-Infrastruktur als Code",
      "home.proj1.li1": "Verwaltet einen Homeserver und dessen Dienste vollständig über Terraform und Ansible, versioniert in Git.",
      "home.proj1.li2": "Provisioniert AWS-Ressourcen (Route 53, S3, CloudFront, IAM/OIDC) und die GitHub-Repository-Konfiguration aus derselben Codebasis — keine manuellen Änderungen an der Live-Infrastruktur.",
      "home.proj1.li3": "Genau so wird auch diese Website bereitgestellt: über Terraform verwaltete S3- und CloudFront-Ressourcen, CI/CD via GitHub Actions.",
      "home.proj2.title": "Selbst gehosteter GitHub-Actions-Runner",
      "home.proj2.li1": "Konzipierte eine vollständig automatisierte, mit Ansible bereitgestellte Debian-VM zum Hosten eines dedizierten Self-Hosted-GitHub-Actions-Runners.",
      "home.proj2.li2": "Konfigurierte eine dedizierte Festplatten-Speicherplatzierung für die VM- und Runner-Daten.",
      "home.proj3.title": "Selbst gehostete Nextcloud-Plattform",
      "home.proj3.li1": "Betreibt eine private Nextcloud-Instanz als Ersatz für kommerziellen Cloud-Speicher, containerisiert mit Docker auf einem Debian-Homeserver.",
      "home.proj3.li2": "Entwarf die Speicherarchitektur über SSD- und HDD-Speicher hinweg, einschließlich Linux-Berechtigungs-/UID-GID-Handling und Bind-Mounts.",
      "home.proj3.li3": "Diagnostizierte eine IPv6-DNS-Fehlkonfiguration, die die WebDAV-Performance schleichend verschlechterte — nach der Behebung dauerte ein zuvor rund zweiminütiger Vorgang nur noch etwa eine Sekunde.",
      "home.proj4.title": "Automatisierung der persönlichen Finanzen",
      "home.proj4.li1": "Baute einen Python-Workflow, der eine persönliche Budget-Tabelle einliest, per Playwright einen Browser zur Diagrammerstellung steuert und das Ergebnis automatisch zu Nextcloud hochlädt.",
      "home.proj4.li2": "Läuft nach Zeitplan hinter einer kostengünstigen Änderungserkennung, sodass die aufwendige Arbeit nur ausgeführt wird, wenn sich die zugrunde liegenden Daten tatsächlich geändert haben.",
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
      "lang.german": "Deutsch — Muttersprache",
      "lang.english": "Englisch — verhandlungssicher",
      "contact.text": "Kontaktieren oder vernetzen Sie sich gerne mit mir.",
      "footer.imprint": "Impressum",
      "footer.privacy": "Datenschutz",
      "a11y.menuToggle": "Navigationsmenü umschalten",
      "a11y.themeToggle": "Farbschema umschalten",
      "a11y.langSwitcher": "Sprache wählen"
    },
    zh: {
      "meta.description": "Julian Kandler — 企业架构师。基础设施、后端、前端与 CI/CD。",
      "nav.profile": "简介",
      "nav.experience": "工作经历",
      "nav.projects": "个人项目",
      "nav.skills": "技能",
      "nav.education": "教育经历",
      "nav.languages": "语言",
      "nav.contact": "联系方式",
      "heading.profile": "👤 简介",
      "heading.experience": "💼 工作经历",
      "heading.projects": "🛠️ 个人项目",
      "heading.skills": "🧠 技能",
      "heading.education": "🎓 教育经历",
      "heading.languages": "🗣️ 语言",
      "heading.contact": "✉️ 联系方式",
      "hero.tagline": "DevOps 与基础设施 — Linux、Terraform、Ansible、AWS、CI/CD",
      "profile.text": "自2017年起从事IT工作的企业架构师(Enterprise Architect),专注于 Linux、基础设施即代码(Infrastructure as Code)、自动化、容器化与 DevOps。熟练使用 Terraform、Ansible、Docker/Podman、GitHub Actions 和 AWS —— 并在工作之余搭建和运维自托管的基础设施项目,以端到端的方式实践同样的理念,包括您正在浏览的这个网站。",
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
      "projects.intro": "在客户项目之外搭建的家庭基础设施项目,旨在通过实践而非纸上谈兵来深入理解 DevOps、云计算与自托管系统。",
      "home.proj1.title": "家庭基础设施即代码",
      "home.proj1.li1": "完全通过 Terraform 与 Ansible 管理家庭服务器及其各项服务,并使用 Git 进行版本控制。",
      "home.proj1.li2": "使用同一套代码库配置 AWS 资源(Route 53、S3、CloudFront、IAM/OIDC)与 GitHub 仓库设置 —— 对生产环境的基础设施不做任何手动更改。",
      "home.proj1.li3": "本网站正是以同样的方式部署:由 Terraform 管理的 S3 与 CloudFront,并通过 GitHub Actions 实现 CI/CD。",
      "home.proj2.title": "自托管 GitHub Actions Runner",
      "home.proj2.li1": "设计了一台由 Ansible 全自动部署的 Debian 虚拟机,用于承载专用的自托管 GitHub Actions Runner。",
      "home.proj2.li2": "为该虚拟机及 Runner 数据配置了专用的磁盘存储布局。",
      "home.proj3.title": "自托管 Nextcloud 平台",
      "home.proj3.li1": "在 Debian 家庭服务器上以 Docker 容器化方式运行私有 Nextcloud 实例,作为个人云存储的替代方案。",
      "home.proj3.li2": "设计了跨 SSD 与 HDD 的存储架构,包括 Linux 权限/UID-GID 处理与 bind mount 挂载方案。",
      "home.proj3.li3": "诊断出一处悄悄拖慢 WebDAV 性能的 IPv6 DNS 配置错误 —— 修复后,原本耗时约两分钟的操作缩短到约一秒。",
      "home.proj4.title": "个人财务自动化",
      "home.proj4.li1": "构建了一套 Python 工作流:读取个人预算表格,通过 Playwright 驱动浏览器渲染图表,并自动将结果上传至 Nextcloud。",
      "home.proj4.li2": "按计划定时运行,并在前置一个低成本的变更检测环节 —— 只有底层数据真正发生变化时,才会执行开销较大的处理任务。",
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
      "lang.german": "德语 — 母语",
      "lang.english": "英语 — 商务流利",
      "contact.text": "欢迎联系我或与我建立联系。",
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
