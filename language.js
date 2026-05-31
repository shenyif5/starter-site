const translations = {
  zh: {
    metaTitle: "shenyif5 | 网站与 App 制作",
    metaDescription: "为个人和小型商家制作清晰、好用、可上线的网站与轻量 App。",
    navServices: "服务",
    navWork: "案例",
    navContact: "联系",
    heroEyebrow: "网站 / App / 自动化工具",
    heroTitle: "帮你把想法做成能上线的产品",
    heroCopy: "我为个人、自由职业者和本地小商家制作清晰、快速、好维护的网站与轻量应用。",
    heroPrimary: "开始聊项目",
    heroSecondary: "查看案例",
    servicesEyebrow: "服务",
    servicesTitle: "从一个可上线的小版本开始",
    serviceOneTitle: "展示型网站",
    serviceOneCopy: "适合个人主页、作品集、餐馆菜单、课程介绍和活动页面。",
    serviceTwoTitle: "业务工具",
    serviceTwoCopy: "把预约、报价、表单收集、客户资料整理成一个简单可用的系统。",
    serviceThreeTitle: "上线维护",
    serviceThreeCopy: "部署、域名、基础 SEO、内容更新和后续小功能迭代。",
    workEyebrow: "案例",
    workTitle: "已经上线的小项目",
    workOneType: "租房 MVP / Supabase / Netlify",
    workOneTitle: "良睦合景轩租房 MVP",
    workOneCopy: "面向房东、租客和带看阿姨的三方租房网页应用，支持房源发布、平台审核、公开展示和下架管理。",
    workOneLink: "查看项目",
    workTwoTitle: "本地商家展示页",
    workTwoCopy: "用一页介绍服务、价格、案例和联系方式，适合快速上线测试客户反馈。",
    workThreeTitle: "预约收集页面",
    workThreeCopy: "让客户提交需求，自动整理到邮箱或表格。",
    contactEyebrow: "联系",
    contactTitle: "有一个小想法，就可以开始",
    contactCopy: "可以通过微信或邮箱联系我，简单说一下你想做的网站或小工具。",
    wechat: "微信：ShenYifan_Ivan",
    toggle: "EN"
  },
  en: {
    metaTitle: "shenyif5 | Websites and Lightweight Apps",
    metaDescription: "Clear, practical websites and lightweight apps for individuals, freelancers, and small local businesses.",
    navServices: "Services",
    navWork: "Work",
    navContact: "Contact",
    heroEyebrow: "Websites / Apps / Automation Tools",
    heroTitle: "I turn ideas into products people can use",
    heroCopy: "I build clear, fast, and easy-to-maintain websites and lightweight apps for individuals, freelancers, and local small businesses.",
    heroPrimary: "Start a Project",
    heroSecondary: "View Work",
    servicesEyebrow: "Services",
    servicesTitle: "Start with a small version you can launch",
    serviceOneTitle: "Business Websites",
    serviceOneCopy: "Personal pages, portfolios, restaurant menus, course pages, and event websites.",
    serviceTwoTitle: "Simple Business Tools",
    serviceTwoCopy: "Lightweight systems for booking, quotes, form collection, and customer information.",
    serviceThreeTitle: "Launch and Maintenance",
    serviceThreeCopy: "Deployment, domains, basic SEO, content updates, and small feature iterations.",
    workEyebrow: "Work",
    workTitle: "Small projects already online",
    workOneType: "Rental MVP / Supabase / Netlify",
    workOneTitle: "Liangmu Hejingxuan Rental MVP",
    workOneCopy: "A three-sided rental web app for landlords, tenants, and viewing agents, with listing submission, review, public display, and unpublish controls.",
    workOneLink: "View Project",
    workTwoTitle: "Local Business Website",
    workTwoCopy: "A one-page site for services, pricing, work examples, and contact information, ready to test with real customers.",
    workThreeTitle: "Booking Collection Page",
    workThreeCopy: "A simple page where customers submit requests and the information can be organized into email or a spreadsheet.",
    contactEyebrow: "Contact",
    contactTitle: "A small idea is enough to start",
    contactCopy: "Email me or add me on WeChat and briefly tell me what website or tool you want to build.",
    wechat: "WeChat: ShenYifan_Ivan",
    toggle: "中文"
  }
};

const setLanguage = (language) => {
  const dictionary = translations[language] || translations.zh;
  document.documentElement.lang = language === "en" ? "en" : "zh-CN";
  document.title = dictionary.metaTitle;
  document.querySelector('meta[name="description"]').setAttribute("content", dictionary.metaDescription);
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) element.textContent = dictionary[key];
  });
  const toggle = document.querySelector("[data-language-toggle]");
  toggle.textContent = dictionary.toggle;
  toggle.dataset.currentLanguage = language;
  localStorage.setItem("site-language", language);
};

const preferredLanguage = localStorage.getItem("site-language") || "zh";
setLanguage(preferredLanguage);

document.querySelector("[data-language-toggle]").addEventListener("click", (event) => {
  const current = event.currentTarget.dataset.currentLanguage;
  setLanguage(current === "en" ? "zh" : "en");
});
