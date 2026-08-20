/**
 * IKIPAS - Official JavaScript Engine
 * Language Engine, Book Modal, WhatsApp Ordering & Professional Fallbacks
 * "Le premier pas vers votre passion" | "الخطوة الأولى نحو شغفك"
 */

// Global Configuration
const WHATSAPP_MAIN_PHONE = "212700635666"; // Main IKIPAS orders phone: +212 700 635 666

// State Management
let currentLanguage = localStorage.getItem("ikipas_lang") || "ar";

// Comprehensive Books Database (AR, FR, EN)
const booksDatabase = {
  math: {
    id: "math",
    image: "images/mathematiques.jpg",
    tagAr: "الرياضيات",
    tagFr: "Mathématiques",
    tagEn: "Mathematics",
    titleAr: "الرياضيات: التحضير للبكالوريا",
    titleFr: "Mathématiques : Préparation au Bac",
    titleEn: "Mathematics : Baccalaureate Preparation",
    ar: {
      title: "الرياضيات: التحضير للبكالوريا",
      tag: "الرياضيات",
      edition: "إصدارات IKIPAS للتميز المدرسي",
      fullDescription: "كتاب عملي مصمم لمساعدة التلميذ على تنظيم مراجعة مادة الرياضيات، وفهم المفاهيم الأساسية، ثم الانتقال تدريجياً إلى التطبيق من خلال تمارين متنوعة. يهدف إلى بناء منهجية واضحة في التفكير والحل، ومساعدة التلميذ على الاستعداد بشكل أفضل لامتحانات البكالوريا.",
      whyTitle: "أهم مميزات الكتاب:",
      whyText: "تم إعداد هذا المرجع لتجاوز الصعوبات الشائعة في مادة الرياضيات وبناء تفكير منطقي منظم ومنهجية حل دقيقة لامتحانات البكالوريا.",
      featuresTitle: "المميزات الرئيسية:",
      features: [
        "تنظيم الدروس",
        "تمارين متدرجة",
        "منهجية الحل",
        "تطبيقات متنوعة",
        "التحضير للبكالوريا"
      ],
      targetTitle: "الفئة المستهدفة:",
      targetText: "تلاميذ سلك البكالوريا بجميع الشعب العلمية والتقنية الراغبين في التفوق في مادة الرياضيات.",
      btnText: "طلب الكتاب عبر WhatsApp"
    },
    fr: {
      title: "Mathématiques : Préparation au Bac",
      tag: "Mathématiques",
      edition: "Éditions IKIPAS Excellence",
      fullDescription: "Un guide pratique conçu pour aider l'élève à structurer ses révisions en mathématiques, comprendre les concepts fondamentaux et passer progressivement à l'application grâce à des exercices variés. Il vise à bâtir une méthodologie claire de réflexion et de résolution pour préparer au mieux les épreuves du Baccalauréat.",
      whyTitle: "Points forts de l'ouvrage :",
      whyText: "Conçu pour surmonter les difficultés récurrentes et transformer l'apprentissage théorique en réflexe d'analyse mathématique solide.",
      featuresTitle: "Caractéristiques clés :",
      features: [
        "Organisation des cours",
        "Exercices progressifs",
        "Méthodologie de résolution",
        "Applications variées",
        "Préparation au Baccalauréat"
      ],
      targetTitle: "Public cible :",
      targetText: "Élèves des filières scientifiques et techniques préparant le Baccalauréat.",
      btnText: "Commander via WhatsApp"
    },
    en: {
      title: "Mathematics : Baccalaureate Preparation",
      tag: "Mathematics",
      edition: "IKIPAS Excellence Editions",
      fullDescription: "A practical guide designed to help students organize their mathematics revision, understand core concepts, and transition smoothly into problem-solving through diverse exercises. It aims to build a clear problem-solving methodology and prepare students for the Baccalaureate examinations.",
      whyTitle: "Book Highlights:",
      whyText: "Created to help students build genuine mathematical reasoning confidence and exam problem-solving mastery.",
      featuresTitle: "Key Features:",
      features: [
        "Structured lessons",
        "Progressive exercises",
        "Problem-solving methodology",
        "Diverse practical applications",
        "Baccalaureate preparation"
      ],
      targetTitle: "Target Audience:",
      targetText: "High school students preparing for the Baccalaureate aiming for top honors in Mathematics.",
      btnText: "Order via WhatsApp"
    }
  },

  physics: {
    id: "physics",
    image: "images/physique-chimie.jpg",
    tagAr: "الفيزياء والكيمياء",
    tagFr: "Physique-Chimie",
    tagEn: "Physics & Chemistry",
    titleAr: "الفيزياء والكيمياء: التحضير للبكالوريا",
    titleFr: "Physique-Chimie : Préparation au Bac",
    titleEn: "Physics-Chemistry : Baccalaureate Preparation",
    ar: {
      title: "الفيزياء والكيمياء: التحضير للبكالوريا",
      tag: "الفيزياء والكيمياء",
      edition: "إصدارات IKIPAS للتميز المدرسي",
      fullDescription: "مرجع يساعد التلميذ على فهم المفاهيم والقوانين الأساسية في الفيزياء والكيمياء، مع التركيز على كيفية توظيفها في حل التمارين. الكتاب يجمع بين الفهم والتطبيق والتدرب على منهجية التحليل والحل استعداداً للبكالوريا.",
      whyTitle: "أهم مميزات الكتاب:",
      whyText: "يركز الكتاب على تمكين التلميذ من استيعاب القوانين الفيزيائية والتفاعلات الكيميائية وتطبيقها الدقيق في تحليل المنحنيات وحل المسائل.",
      featuresTitle: "المميزات الرئيسية:",
      features: [
        "فهم القوانين",
        "تطبيقات وتمارين",
        "منهجية التحليل",
        "التدريب على الحل",
        "التحضير للبكالوريا"
      ],
      targetTitle: "الفئة المستهدفة:",
      targetText: "تلاميذ شعبة العلوم التجريبية والرياضية والتقنية الراغبين في التفوق في مادة الفيزياء والكيمياء.",
      btnText: "طلب الكتاب عبر WhatsApp"
    },
    fr: {
      title: "Physique-Chimie : Préparation au Bac",
      tag: "Physique-Chimie",
      edition: "Éditions IKIPAS Excellence",
      fullDescription: "Un ouvrage de référence pour aider l'élève à comprendre les concepts et lois fondamentales en physique et en chimie, en mettant l'accent sur leur application directe dans les exercices. Il combine compréhension, pratique et méthodologie d'analyse pour réussir le Bac.",
      whyTitle: "Points forts de l'ouvrage :",
      whyText: "Un entraînement rigoureux sur la maîtrise des formules, l'exploitation des courbes et les protocoles expérimentaux.",
      featuresTitle: "Caractéristiques clés :",
      features: [
        "Compréhension des lois",
        "Applications et exercices",
        "Méthodologie d'analyse",
        "Entraînement à la résolution",
        "Préparation au Baccalauréat"
      ],
      targetTitle: "Public cible :",
      targetText: "Élèves des séries scientifiques préparant le Baccalauréat.",
      btnText: "Commander via WhatsApp"
    },
    en: {
      title: "Physics-Chemistry : Baccalaureate Preparation",
      tag: "Physics & Chemistry",
      edition: "IKIPAS Excellence Editions",
      fullDescription: "A specialized reference helping students understand core physical laws and chemical principles, focusing on practical application in solving exam problems. Combines concept mastery with analytical training for Baccalaureate readiness.",
      whyTitle: "Book Highlights:",
      whyText: "Empowers students to interpret experimental data and master structured physical-chemical problem solving.",
      featuresTitle: "Key Features:",
      features: [
        "Mastery of laws & formulas",
        "Applications & exercises",
        "Analytical methodology",
        "Problem-solving practice",
        "Baccalaureate preparation"
      ],
      targetTitle: "Target Audience:",
      targetText: "Scientific Baccalaureate students seeking excellence in Physics and Chemistry.",
      btnText: "Order via WhatsApp"
    }
  },

  svt: {
    id: "svt",
    image: "images/svt.jpg",
    tagAr: "علوم الحياة والأرض",
    tagFr: "SVT",
    tagEn: "Life & Earth Sciences",
    titleAr: "علوم الحياة والأرض: التحضير للبكالوريا",
    titleFr: "SVT : Préparation au Bac",
    titleEn: "Life and Earth Sciences : Bac Preparation",
    ar: {
      title: "علوم الحياة والأرض: التحضير للبكالوريا",
      tag: "علوم الحياة والأرض",
      edition: "إصدارات IKIPAS للتميز المدرسي",
      fullDescription: "كتاب يساعد التلميذ على تنظيم مراجعة مادة علوم الحياة والأرض، وفهم المفاهيم الأساسية وربط المعلومات بطريقة واضحة، مع التدريب على أسئلة وتمارين تساعد على تطوير مهارات الفهم والتحليل والاستعداد للبكالوريا.",
      whyTitle: "أهم مميزات الكتاب:",
      whyText: "يعالج الكتاب التحدي الأكبر لتلاميذ SVT وهو منهجية تحليل الوثائق العلمية وصياغة الاستنتاجات بأسلوب علمي دقيق.",
      featuresTitle: "المميزات الرئيسية:",
      features: [
        "تنظيم الدروس",
        "فهم المفاهيم",
        "تمارين وتطبيقات",
        "مهارات التحليل",
        "الاستعداد للبكالوريا"
      ],
      targetTitle: "الفئة المستهدفة:",
      targetText: "تلاميذ شعبة العلوم التجريبية بمسالكها المختلفة الراغبين في التفوق في مادة علوم الحياة والأرض.",
      btnText: "طلب الكتاب عبر WhatsApp"
    },
    fr: {
      title: "SVT : Préparation au Bac",
      tag: "SVT",
      edition: "Éditions IKIPAS Excellence",
      fullDescription: "Un manuel pour structurer la révision des SVT, assimiler les notions fondamentales et relier clairement les connaissances, avec des entraînements ciblés pour développer l'analyse de documents et réussir le Bac.",
      whyTitle: "Points forts de l'ouvrage :",
      whyText: "Guide pas à pas pour maîtriser l'exploitation des graphes, expériences et documents biologiques/géologiques.",
      featuresTitle: "Caractéristiques clés :",
      features: [
        "Organisation des cours",
        "Compréhension des notions",
        "Exercices et applications",
        "Compétences d'analyse",
        "Préparation au Baccalauréat"
      ],
      targetTitle: "Public cible :",
      targetText: "Élèves des filières scientifiques préparant le Baccalauréat.",
      btnText: "Commander via WhatsApp"
    },
    en: {
      title: "Life and Earth Sciences : Bac Preparation",
      tag: "Life & Earth Sciences",
      edition: "IKIPAS Excellence Editions",
      fullDescription: "A structured textbook helping students review Earth & Life Sciences, master fundamental concepts, and develop document interpretation and analytical deduction skills required for Baccalaureate success.",
      whyTitle: "Book Highlights:",
      whyText: "Focuses on document exploitation, scientific deduction, and structured exam response writing.",
      featuresTitle: "Key Features:",
      features: [
        "Structured lessons",
        "Core concept clarity",
        "Exercises & applications",
        "Analytical deduction skills",
        "Baccalaureate readiness"
      ],
      targetTitle: "Target Audience:",
      targetText: "Students preparing for the scientific Baccalaureate examinations.",
      btnText: "Order via WhatsApp"
    }
  }
};


/* ==========================================================================
   IMAGE FALLBACK HANDLER (Placeholder with "إضافة صورة" / "Ajouter une photo")
   ========================================================================== */

function handleImageError(imgElement) {
  if (!imgElement || imgElement.dataset.failed) return;
  imgElement.dataset.failed = "true";

  const placeholderLabels = {
    ar: "إضافة صورة",
    fr: "Ajouter une photo",
    en: "Add a photo"
  };

  const placeholderText = placeholderLabels[currentLanguage] || placeholderLabels.ar;

  const placeholderDiv = document.createElement("div");
  placeholderDiv.className = "img-placeholder";
  placeholderDiv.innerHTML = `
    <div class="placeholder-icon-wrap">
      <svg class="placeholder-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <circle cx="8.5" cy="8.5" r="1.5"></circle>
        <polyline points="21 15 16 10 5 21"></polyline>
      </svg>
    </div>
    <span class="placeholder-label" data-ar="إضافة صورة" data-fr="Ajouter une photo" data-en="Add a photo">${placeholderText}</span>
    <span class="placeholder-sub">IKIPAS</span>
  `;

  // Preserve class/styles if needed
  if (imgElement.parentElement) {
    imgElement.style.display = "none";
    imgElement.parentElement.appendChild(placeholderDiv);
  }
}


/* ==========================================================================
   LANGUAGE SWITCHER ENGINE
   ========================================================================== */

function setLanguage(lang) {
  if (!["ar", "fr", "en"].includes(lang)) {
    lang = "ar";
  }

  currentLanguage = lang;
  localStorage.setItem("ikipas_lang", lang);

  // Set document attributes
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  // Update Header Language Buttons
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.remove("active");
    btn.setAttribute("aria-pressed", "false");
  });

  const activeBtn = document.getElementById(`btn-lang-${lang}`);
  if (activeBtn) {
    activeBtn.classList.add("active");
    activeBtn.setAttribute("aria-pressed", "true");
  }

  // Update all text nodes with data-[lang]
  document.querySelectorAll(`[data-${lang}]`).forEach(el => {
    const text = el.getAttribute(`data-${lang}`);
    if (text) {
      el.textContent = text;
    }
  });

  // Update all input placeholders with data-placeholder-[lang]
  document.querySelectorAll(`[data-placeholder-${lang}]`).forEach(el => {
    const placeholder = el.getAttribute(`data-placeholder-${lang}`);
    if (placeholder) {
      el.placeholder = placeholder;
    }
  });

  // Update Select Options
  document.querySelectorAll("#bookType option").forEach(option => {
    const text = option.getAttribute(`data-${lang}`);
    if (text) {
      option.textContent = text;
    }
  });

  // Update any existing dynamic image placeholders text
  document.querySelectorAll(".placeholder-label").forEach(label => {
    const text = label.getAttribute(`data-${lang}`);
    if (text) {
      label.textContent = text;
    }
  });

  // Re-render open modal if active
  const modal = document.getElementById("bookModal");
  if (modal && !modal.classList.contains("hidden")) {
    const currentOpenBook = modal.getAttribute("data-current-book");
    if (currentOpenBook && booksDatabase[currentOpenBook]) {
      renderBookModalContent(currentOpenBook);
    }
  }
}


/* ==========================================================================
   BOOK MODAL COMPONENT
   ========================================================================== */

function openBookModal(bookKey) {
  const book = booksDatabase[bookKey];
  if (!book) return;

  const modal = document.getElementById("bookModal");
  modal.setAttribute("data-current-book", bookKey);
  
  renderBookModalContent(bookKey);

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden"; // Prevent page scroll when modal is open
}

function renderBookModalContent(bookKey) {
  const book = booksDatabase[bookKey];
  if (!book) return;

  const data = book[currentLanguage] || book.ar;
  const contentContainer = document.getElementById("modalContent");

  const checkIconSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
  const waIconSvg = `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`;

  contentContainer.innerHTML = `
    <div class="modal-grid">
      <div class="modal-cover-column">
        <img src="${book.image}" alt="${data.title}" class="modal-book-cover" onerror="handleImageError(this)">
      </div>

      <div class="modal-book-info">
        <span class="modal-book-tag">${data.tag}</span>
        <span class="book-edition-badge">${data.edition}</span>
        <h2 id="modalBookTitle" class="modal-title">${data.title}</h2>
        <p class="modal-desc">${data.fullDescription}</p>

        <h3 class="modal-section-title">${data.featuresTitle}</h3>
        <ul class="modal-features-list">
          ${data.features.map(f => `<li>${checkIconSvg} <span>${f}</span></li>`).join("")}
        </ul>

        <div class="modal-actions">
          <button type="button" class="btn btn-whatsapp w-full" onclick="directOrderBook('${bookKey}')">
            ${waIconSvg}
            <span>${data.btnText}</span>
          </button>
        </div>
      </div>
    </div>
  `;
}

function closeBookModal() {
  const modal = document.getElementById("bookModal");
  if (modal) {
    modal.classList.add("hidden");
    modal.removeAttribute("data-current-book");
  }
  document.body.style.overflow = ""; // Restore scrolling
}

// Close Modal with Keyboard ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const modal = document.getElementById("bookModal");
    if (modal && !modal.classList.contains("hidden")) {
      closeBookModal();
    }
  }
});


/* ==========================================================================
   DIRECT WHATSAPP BOOK ORDER TRIGGER
   ========================================================================== */

function directOrderBook(bookKey) {
  const book = booksDatabase[bookKey];
  const bookTitle = book ? (book[currentLanguage]?.title || book.titleAr) : "كتاب من إصدارات IKIPAS";

  const orderMessages = {
    ar: `السلام عليكم ورحمة الله وبركاته 👋\n\nأرغب في طلب كتاب من منصة IKIPAS:\n\n📚 الكتاب المطلوب: ${bookTitle}\n\nالمرجو تزويدي بالثمن وطريقة التوصيل إلى مدينتي.\n\nشكراً لكم.\nIKIPAS - الخطوة الأولى نحو شغفك`,
    fr: `Bonjour 👋\n\nJe souhaite commander un livre auprès de la plateforme IKIPAS :\n\n📚 Livre : ${bookTitle}\n\nMerci de m'indiquer le prix et les modalités de livraison.\n\nCordialement.\nIKIPAS - Le premier pas vers votre passion`,
    en: `Hello 👋\n\nI would like to order a book from IKIPAS:\n\n📚 Book: ${bookTitle}\n\nPlease share the price and delivery options to my city.\n\nThank you.\nIKIPAS - The first step towards your passion`
  };

  const messageText = orderMessages[currentLanguage] || orderMessages.ar;
  const whatsappUrl = `https://wa.me/${WHATSAPP_MAIN_PHONE}?text=${encodeURIComponent(messageText)}`;

  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
}


/* ==========================================================================
   TEAM MEMBER DIRECT WHATSAPP CHATS
   ========================================================================== */

function chatWithTeam(memberId) {
  const teamConfig = {
    samir: {
      phone: "212661862506",
      nameAr: "أستاذ سمير",
      messages: {
        ar: "السلام عليكم أستاذ سمير، أود استشارتك بخصوص التوجيه المدرسي/الجامعي عبر منصة IKIPAS.",
        fr: "Bonjour Pr. Samir, je souhaite bénéficier d'une consultation d'orientation via la plateforme IKIPAS.",
        en: "Hello Professor Samir, I would like to inquire about academic guidance via IKIPAS."
      }
    },
    mehdi: {
      phone: "212700635666",
      nameAr: "المهدي",
      messages: {
        ar: "السلام عليكم أخي المهدي، أتواصل معك عبر منصة IKIPAS بخصوص الخدمات والكتب التعليمية.",
        fr: "Bonjour El Mehdi, je vous contacte via la plateforme IKIPAS concernant les livres et services.",
        en: "Hello Mehdi, I'm contacting you via IKIPAS regarding educational resources and books."
      }
    },
    saad: {
      phone: "212780451374",
      nameAr: "سعد",
      messages: {
        ar: "السلام عليكم أخي سعد، أتواصل معك عبر منصة IKIPAS للاستفسار والمواكبة.",
        fr: "Bonjour Saad, je vous contacte via la plateforme IKIPAS pour une demande d'accompagnement.",
        en: "Hello Saad, I'm contacting you via IKIPAS for support and information."
      }
    }
  };

  const member = teamConfig[memberId];
  if (!member) return;

  const msg = member.messages[currentLanguage] || member.messages.ar;
  const url = `https://wa.me/${member.phone}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}


/* ==========================================================================
   CONTACT & ORDER FORM TO WHATSAPP
   ========================================================================== */

function handleFormSubmit(event) {
  event.preventDefault();

  const fullnameInput = document.getElementById("fullname");
  const cityInput = document.getElementById("city");
  const phoneInput = document.getElementById("phoneNumber");
  const bookSelect = document.getElementById("bookType");
  const quantityInput = document.getElementById("quantity");
  const messageInput = document.getElementById("message");
  const errorBanner = document.getElementById("formErrorBanner");
  const errorText = document.getElementById("formErrorText");

  // Reset errors
  [fullnameInput, cityInput, phoneInput, bookSelect].forEach(el => {
    if (el) el.classList.remove("input-error");
  });

  const fullname = fullnameInput ? fullnameInput.value.trim() : "";
  const city = cityInput ? cityInput.value.trim() : "";
  const phoneNumber = phoneInput ? phoneInput.value.trim() : "";
  const bookType = bookSelect ? bookSelect.value : "";
  const quantity = quantityInput ? quantityInput.value || "1" : "1";
  const userMessage = messageInput ? messageInput.value.trim() : "";

  let hasError = false;

  if (!fullname) {
    if (fullnameInput) fullnameInput.classList.add("input-error");
    hasError = true;
  }
  if (!city) {
    if (cityInput) cityInput.classList.add("input-error");
    hasError = true;
  }
  if (!phoneNumber) {
    if (phoneInput) phoneInput.classList.add("input-error");
    hasError = true;
  }
  if (!bookType) {
    if (bookSelect) bookSelect.classList.add("input-error");
    hasError = true;
  }

  if (hasError) {
    if (errorBanner) {
      errorBanner.classList.remove("hidden");
    }
    return;
  }

  if (errorBanner) {
    errorBanner.classList.add("hidden");
  }

  // Structured Message for WhatsApp matching the exact template:
  // 🔔 طلب جديد من IKIPAS
  // 👤 الاسم:
  // 📍 المدينة:
  // 📱 رقم الهاتف:
  // 📚 نوع الكتاب:
  // 🔢 الكمية:
  // 📝 الرسالة:
  const whatsappMessage = `🔔 طلب جديد من IKIPAS

👤 الاسم: ${fullname}
📍 المدينة: ${city}
📱 رقم الهاتف: ${phoneNumber}
📚 نوع الكتاب: ${bookType}
🔢 الكمية: ${quantity}
📝 الرسالة: ${userMessage || "لا توجد رسالة إضافية"}`;

  const whatsappUrl = `https://wa.me/${WHATSAPP_MAIN_PHONE}?text=${encodeURIComponent(whatsappMessage)}`;

  // Display Success Message Screen
  const formElement = document.getElementById("orderForm");
  const successElement = document.getElementById("successMessage");

  if (formElement && successElement) {
    formElement.classList.add("hidden");
    successElement.classList.remove("hidden");
  }

  // Open WhatsApp in new tab / window safely
  try {
    const waLink = document.createElement("a");
    waLink.href = whatsappUrl;
    waLink.target = "_blank";
    waLink.rel = "noopener noreferrer";
    document.body.appendChild(waLink);
    waLink.click();
    document.body.removeChild(waLink);
  } catch (e) {
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }
}

function resetOrderForm() {
  const formElement = document.getElementById("orderForm");
  const successElement = document.getElementById("successMessage");
  const errorBanner = document.getElementById("formErrorBanner");

  if (errorBanner) {
    errorBanner.classList.add("hidden");
  }

  if (formElement && successElement) {
    formElement.reset();
    const qty = document.getElementById("quantity");
    if (qty) qty.value = 1;
    [document.getElementById("fullname"), document.getElementById("city"), document.getElementById("phoneNumber"), document.getElementById("bookType")].forEach(el => {
      if (el) el.classList.remove("input-error");
    });
    successElement.classList.add("hidden");
    formElement.classList.remove("hidden");
  }
}


/* ==========================================================================
   MOBILE MENU DRAWER
   ========================================================================== */

const mobileMenuToggle = document.getElementById("mobileMenuToggle");
const mobileDrawer = document.getElementById("mobileDrawer");

if (mobileMenuToggle && mobileDrawer) {
  mobileMenuToggle.addEventListener("click", () => {
    const isOpen = mobileDrawer.classList.contains("open");
    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });
}

function openMobileMenu() {
  if (mobileDrawer && mobileMenuToggle) {
    mobileDrawer.classList.add("open");
    mobileMenuToggle.classList.add("active");
    mobileMenuToggle.setAttribute("aria-expanded", "true");
  }
}

function closeMobileMenu() {
  if (mobileDrawer && mobileMenuToggle) {
    mobileDrawer.classList.remove("open");
    mobileMenuToggle.classList.remove("active");
    mobileMenuToggle.setAttribute("aria-expanded", "false");
  }
}


/* ==========================================================================
   ACTIVE NAVIGATION SCROLL SPY
   ========================================================================== */

window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]");
  const scrollPosition = window.pageYOffset + 120;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop;
    const sectionId = section.getAttribute("id");

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      document.querySelectorAll(".nav-link").forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
});


/* ==========================================================================
   GLOBAL EXPORTS FOR HTML EVENT HANDLERS
   ========================================================================== */

window.setLanguage = setLanguage;
window.changeLang = setLanguage; // Compatibility alias
window.openBookModal = openBookModal;
window.closeBookModal = closeBookModal;
window.directOrderBook = directOrderBook;
window.chatWithTeam = chatWithTeam;
window.handleFormSubmit = handleFormSubmit;
window.resetOrderForm = resetOrderForm;
window.closeMobileMenu = closeMobileMenu;
window.openMobileMenu = openMobileMenu;
window.handleImageError = handleImageError;


/* ==========================================================================
   INITIALIZATION ON DOM LOAD
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // Apply stored language (defaults to Arabic)
  setLanguage(currentLanguage);

  // Check all images for load error fallbacks
  document.querySelectorAll("img").forEach(img => {
    if (!img.complete || img.naturalWidth === 0) {
      img.addEventListener("error", () => handleImageError(img));
    }
  });

  console.log("IKIPAS Platform initialized successfully 🚀");
});
