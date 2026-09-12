/* =========================================================
   LUMEN DENTAL — main.js (vanilla, demo / FASE 1)
   ========================================================= */

const I18N = {
  /* ---------------- PT-BR ---------------- */
  pt: {
    nav_services: 'Serviços',
    nav_team: 'Equipe',
    nav_results: 'Resultados',
    nav_faq: 'FAQ',
    nav_contact: 'Contato',
    cta_book: 'Agende sua consulta',

    hero_eyebrow: 'ODONTOLOGIA MODERNA, TOQUE HUMANO',
    hero_title: 'O seu sorriso merece um cuidado moderno.',
    hero_sub: 'Na Lumen Dental, você é cuidado com gentileza, tecnologia de ponta e atenção de verdade. Cada plano de tratamento é pensado para você — sem pressa, sem pressão, apenas cuidado.',
    hero_cta_primary: 'Agende sua consulta',
    hero_cta_secondary: 'Conheça os serviços',
    badge_rate: '<strong>4.9</strong> <span class="stars" aria-hidden="true">★★★★★</span>',
    badge_note: '1.200+ pacientes',
    badge_caption: 'Atendimento gentil, tecnologia moderna',

    trust_1_title: '12+ anos de cuidado',
    trust_1_text: 'Experiência clínica dedicada à odontologia moderna.',
    trust_2_title: '98% de aprovação',
    trust_2_text: 'Pacientes que recomendam a Lumen a amigos e família.',
    trust_3_title: 'Tecnologia digital',
    trust_3_text: 'Planejamento 3D e escaneamento intraoral, menos improviso.',
    trust_4_title: 'Planos flexíveis',
    trust_4_text: 'Simplificamos o caminho até o seu sorriso ideal.',

    services_eyebrow: 'NOSSOS SERVIÇOS',
    services_title: 'Cuidado completo, do sorriso ao bem-estar.',
    services_sub: 'Da limpeza de rotina à reabilitação completa, tudo em um só lugar.',
    learn_more: 'Saiba mais',

    s1_title: 'Odontologia Geral',
    s1_text: 'Avaliações completas, limpeza e prevenção para manter seu sorriso saudável o ano todo.',
    s2_title: 'Odontologia Estética',
    s2_text: 'Lentes de contato, facetas e detalhes que valorizam o seu sorriso natural.',
    s3_title: 'Clareamento Dental',
    s3_text: 'Clareamento seguro e acompanhado, com resultados perceptíveis e duradouros.',
    s4_title: 'Implantes Dentários',
    s4_text: 'Reconstrua dentes ausentes com planejamento digital preciso e materiais de qualidade.',
    s5_title: 'Aparelhos Alinhadores',
    s5_text: 'Alinhe seu sorriso com alinhadores discretos, removíveis e confortáveis.',
    s6_title: 'Atendimento de Emergência',
    s6_text: 'Dor não espera. Temos espaço para pacientes em urgência odontológica.',

    modern_eyebrow: 'CUIDADO MODERNO',
    modern_title: 'Tecnologia a serviço do seu conforto.',
    modern_text: 'Nossa clínica une o melhor da odontologia digital a um atendimento humano e sem pressa. Você entende cada etapa do seu tratamento.',
    modern_p1_title: 'Odontologia digital',
    modern_p1_text: 'Planejamento em 3D e radiografia digital para mais precisão e menos retrabalho.',
    modern_p2_title: 'Escaneamento intraoral',
    modern_p2_text: 'Adeus, molde tradicional. O escaneamento é rápido, confortável e imediato.',
    modern_p3_title: 'Sedação consciente',
    modern_p3_text: 'Para quem sente ansiedade, oferecemos opções suaves e seguras de relaxamento.',
    modern_p4_title: 'Agendamento fácil',
    modern_p4_text: 'Horários que cabem na sua rotina, com lembretes e retorno acompanhado.',
    modern_cta: 'Agendar avaliação',

    whitening_eyebrow: 'EM DESTAQUE',
    whitening_title: 'Um sorriso mais claro, do jeito seguro.',
    whitening_text: 'Avaliamos o estado do seu esmalte, indicamos o protocolo certo e acompanhamos a evolução em cada sessão — saúde primeiro, sempre.',
    whitening_li_1: 'Avaliação do esmalte antes de iniciar',
    whitening_li_2: 'Acompanhamento em cada sessão',
    whitening_li_3: 'Tonalidade registrada e mensurável',
    whitening_cta: 'Ver o que esperar do clareamento',

    team_eyebrow: 'NOSSA EQUIPE',
    team_title: 'Pessoas que cuidam de você.',
    team_sub: 'Profissionais que combinam técnica, escuta e acolhimento.',
    t1_name: 'Dra. Alana Mello',
    t1_role: 'Odontologia Estética',
    t1_bio: 'Cuida dos detalhes que fazem o sorriso único de cada paciente brilhar.',
    t2_name: 'Dr. Rafael Duarte',
    t2_role: 'Reabilitação e Implantes',
    t2_bio: 'Combina planejamento digital com precisão clínica em reabilitações completas.',
    t3_name: 'Gabriela Sena',
    t3_role: 'Coordenação de Experiência do Paciente',
    t3_bio: 'Garante que sua visita seja tranquila, do agendamento ao sorriso final.',

    results_eyebrow: 'RESULTADOS',
    results_title: 'A evolução, tom a tom.',
    results_sub: 'Sem promessas mágicas: você acompanha a transformação do seu sorriso com registros reais e honestos.',
    results_before: 'Antes',
    results_after: 'Depois',
    results_shade_before: 'Tonalidade de partida',
    results_shade_after: 'Tonalidade final',
    results_note: 'Representação ilustrativa da tonalidade — os resultados variam de paciente para paciente.',

    test_eyebrow: 'DEPOIMENTOS',
    test_title: 'Sorrisos que confiam na Lumen.',
    test_1_text: '“Eu tinha medo de dentista desde criança. Aqui, a equipe me acolheu com uma calma que eu não sabia que existia.”',
    test_1_name: 'Mariana Costa',
    test_1_detail: 'Facetas · Paciente desde 2021',
    test_2_text: '“O planejamento digital me mostrou o resultado antes de começar. Me senti no controle do meu próprio tratamento.”',
    test_2_name: 'Carlos Eduardo',
    test_2_detail: 'Implantes · Paciente desde 2022',
    test_3_text: '“Em três sessões de clareamento acompanhado, a diferença foi enorme — e meu sorriso continua saudável.”',
    test_3_name: 'Letícia Prado',
    test_3_detail: 'Clareamento · Paciente desde 2023',

    faq_eyebrow: 'DÚVIDAS FREQUENTES',
    faq_title: 'Perguntas que recebemos com frequência.',
    faq_1_q: 'Como funciona o agendamento?',
    faq_1_a: 'Basta escolher a especialidade, a data e o horário no formulário desta página. Em instantes você recebe a confirmação e nossa equipe entra em contato para alinhar os detalhes.',
    faq_2_q: 'Vocês atendem convênios?',
    faq_2_a: 'Recebemos pacientes de diversos convênios e também oferecemos planos facilitados. Nossa equipe ajuda a entender a melhor opção para o seu caso.',
    faq_3_q: 'Quanto tempo dura uma consulta inicial?',
    faq_3_a: 'A primeira consulta costuma durar de 45 a 60 minutos: conversa, avaliação clínica completa e um plano claro para os próximos passos.',
    faq_4_q: 'Clareamento é seguro para qualquer pessoa?',
    faq_4_a: 'Antes de qualquer clareamento, avaliamos a saúde do esmalte e das gengivas. Com o protocolo certo e acompanhamento, o procedimento é seguro e confortável para a maioria dos pacientes.',
    faq_5_q: 'Preciso ir à clínica em caso de emergência?',
    faq_5_a: 'Sim — dor e traumas merecem atenção imediata. Reserve espaço para emergências pelo telefone ou WhatsApp abaixo, e priorizamos seu atendimento.',

    book_eyebrow: 'AGENDAMENTO',
    book_title: 'Agende sua consulta.',
    book_sub: 'Escolha a especialidade, a data e o horário. Você recebe a confirmação na hora.',
    form_name_label: 'Nome',
    form_name_ph: 'Como podemos chamar você?',
    form_phone_label: 'Telefone / WhatsApp',
    form_phone_ph: '(00) 00000-0000',
    form_service_label: 'Especialidade',
    form_service_placeholder: 'Escolha uma especialidade',
    form_date_label: 'Data',
    form_time_label: 'Horário',
    form_time_error: 'Selecione um horário para continuar.',
    form_submit: 'Confirmar agendamento',
    form_hint: 'Sem compromisso — confirmaremos os detalhes antes de fechar.',

    book_info_title: 'Visite a clínica',
    book_info_hours_title: 'Horário de atendimento',
    book_hours_week: 'Segunda a sexta · 8h às 18h',
    book_hours_sat: 'Sábados · 8h às 12h',
    book_info_phone_title: 'Telefone / WhatsApp',
    book_info_email_title: 'E-mail',

    book_success_title: 'Solicitação recebida!',
    book_success_text: 'Abrimos espaço para você. Nossa equipe entra em contato em instantes para confirmar sua consulta.',
    book_summary_name: 'Nome',
    book_summary_service: 'Especialidade',
    book_summary_date: 'Data',
    book_summary_time: 'Horário',
    book_summary_phone: 'Contato',
    book_new: 'Fazer nova solicitação',

    final_title: 'Comece hoje o seu novo sorriso.',
    final_text: 'Dê o primeiro passo com uma avaliação inicial — sem compromisso e com todo o conforto que você merece.',
    final_cta: 'Agendar meu horário',

    footer_tagline: 'Cuidado odontológico moderno, acolhedor e transparente para toda a família.',
    footer_nav_title: 'Navegação',
    footer_contact_title: 'Contato',
    footer_hours_title: 'Horários',
    footer_hours_week: 'Segunda a sexta · 8h às 18h',
    footer_hours_sat: 'Sábados · 8h às 12h',
    footer_hours_sun: 'Domingos · Fechado',
    footer_demo: 'Projeto demo de portfólio — as informações são fictícias.',

    alt_hero: 'Atendimento acolhedor na clínica Lumen Dental',
    alt_corridor: 'Corredor de entrada da clínica Lumen Dental',
    alt_whitening: 'Protocolo de clareamento dental na Lumen Dental',
    alt_clinic: 'Salão principal da clínica Lumen Dental',
    alt_doctor1: 'Dra. Alana Mello, odontologia estética',
    alt_doctor2: 'Dr. Rafael Duarte, reabilitação e implantes',
    alt_reception: 'Gabriela Sena, coordenadora de experiência do paciente'
  },

  /* ---------------- EN ---------------- */
  en: {
    nav_services: 'Services',
    nav_team: 'Team',
    nav_results: 'Results',
    nav_faq: 'FAQ',
    nav_contact: 'Contact',
    cta_book: 'Book an Appointment',

    hero_eyebrow: 'MODERN DENTAL CARE, HUMAN TOUCH',
    hero_title: 'Your smile deserves modern care.',
    hero_sub: 'At Lumen Dental, you are cared for with warmth, modern technology, and genuine attention. Every treatment plan is designed around you — no rush, no pressure, just care.',
    hero_cta_primary: 'Book an Appointment',
    hero_cta_secondary: 'Explore Services',
    badge_rate: '<strong>4.9</strong> <span class="stars" aria-hidden="true">★★★★★</span>',
    badge_note: '1,200+ patients',
    badge_caption: 'Gentle care, modern technology',

    trust_1_title: '12+ years of care',
    trust_1_text: 'Clinical experience dedicated to modern dentistry.',
    trust_2_title: '98% approval',
    trust_2_text: 'Patients who recommend Lumen to friends and family.',
    trust_3_title: 'Digital dentistry',
    trust_3_text: '3D planning and intraoral scanning, fewer surprises.',
    trust_4_title: 'Flexible plans',
    trust_4_text: 'We make the road to your ideal smile simple.',

    services_eyebrow: 'OUR SERVICES',
    services_title: 'Complete care, from smile to wellbeing.',
    services_sub: 'From routine cleanings to full rehabilitation, all under one roof.',
    learn_more: 'Learn more',

    s1_title: 'General Dentistry',
    s1_text: 'Complete checkups, cleanings, and prevention to keep your smile healthy all year.',
    s2_title: 'Cosmetic Dentistry',
    s2_text: 'Veneers, laminates, and finishing touches that flatter your natural smile.',
    s3_title: 'Teeth Whitening',
    s3_text: 'Safe, supervised whitening with noticeable, long-lasting results.',
    s4_title: 'Dental Implants',
    s4_text: 'Restore missing teeth with precise digital planning and quality materials.',
    s5_title: 'Aligners',
    s5_text: 'Straighten your smile with discreet, removable, comfortable aligners.',
    s6_title: 'Emergency Care',
    s6_text: 'Pain doesn’t wait. We keep space for patients with dental emergencies.',

    modern_eyebrow: 'MODERN CARE',
    modern_title: 'Technology in service of your comfort.',
    modern_text: 'Our clinic pairs the best of digital dentistry with unhurried, human care. You understand every step of your treatment.',
    modern_p1_title: 'Digital dentistry',
    modern_p1_text: '3D planning and digital imaging for more precision and fewer do-overs.',
    modern_p2_title: 'Intraoral scanning',
    modern_p2_text: 'No more traditional impressions. Scanning is fast, comfortable, and instant.',
    modern_p3_title: 'Conscious sedation',
    modern_p3_text: 'For anxious patients, we offer gentle and safe ways to relax during treatment.',
    modern_p4_title: 'Easy scheduling',
    modern_p4_text: 'Times that fit your routine, with reminders and follow-ups.',
    modern_cta: 'Book an evaluation',

    whitening_eyebrow: 'SPOTLIGHT',
    whitening_title: 'A brighter smile, done the safe way.',
    whitening_text: 'We assess your enamel, prescribe the right protocol, and track your progress at every session — health first, always.',
    whitening_li_1: 'Enamel assessment before we begin',
    whitening_li_2: 'Progress tracking at every session',
    whitening_li_3: 'Shade documented and measurable',
    whitening_cta: 'See what to expect from whitening',

    team_eyebrow: 'OUR TEAM',
    team_title: 'People who care for you.',
    team_sub: 'Professionals who combine skill, listening, and warmth.',
    t1_name: 'Dr. Alana Mello',
    t1_role: 'Cosmetic Dentistry',
    t1_bio: 'Cares for the details that make each patient’s smile uniquely shine.',
    t2_name: 'Dr. Rafael Duarte',
    t2_role: 'Rehabilitation & Implants',
    t2_bio: 'Combines digital planning with clinical precision in full rehabilitations.',
    t3_name: 'Gabriela Sena',
    t3_role: 'Patient Experience Coordinator',
    t3_bio: 'Makes sure your visit is smooth, from scheduling to the final smile.',

    results_eyebrow: 'RESULTS',
    results_title: 'Progress, shade by shade.',
    results_sub: 'No magic promises: you follow your smile’s transformation with real, honest records.',
    results_before: 'Before',
    results_after: 'After',
    results_shade_before: 'Starting shade',
    results_shade_after: 'Final shade',
    results_note: 'Illustrative shade representation — results vary from patient to patient.',

    test_eyebrow: 'TESTIMONIALS',
    test_title: 'Smiles that trust Lumen.',
    test_1_text: '“I had been afraid of the dentist since childhood. Here, the team welcomed me with a calm I didn’t know existed.”',
    test_1_name: 'Mariana Costa',
    test_1_detail: 'Veneers · Patient since 2021',
    test_2_text: '“The digital planning showed me the result before we started. I felt in control of my own treatment.”',
    test_2_name: 'Carlos Eduardo',
    test_2_detail: 'Implants · Patient since 2022',
    test_3_text: '“After three supervised whitening sessions, the difference was huge — and my smile is still healthy.”',
    test_3_name: 'Letícia Prado',
    test_3_detail: 'Whitening · Patient since 2023',

    faq_eyebrow: 'FAQs',
    faq_title: 'Questions we often hear.',
    faq_1_q: 'How does scheduling work?',
    faq_1_a: 'Just choose a specialty, date, and time in the form on this page. You get a confirmation right away, and our team follows up to settle the details.',
    faq_2_q: 'Do you accept insurance?',
    faq_2_a: 'We welcome patients from several insurance plans and also offer flexible options. Our team helps you find the best route for your case.',
    faq_3_q: 'How long does an initial visit take?',
    faq_3_a: 'Your first visit usually takes 45 to 60 minutes: a conversation, a full clinical evaluation, and a clear plan for what’s next.',
    faq_4_q: 'Is whitening safe for everyone?',
    faq_4_a: 'Before any whitening, we assess enamel and gum health. With the right protocol and supervision, the procedure is safe and comfortable for most patients.',
    faq_5_q: 'What do I do in an emergency?',
    faq_5_a: 'Yes — pain and trauma deserve immediate attention. Reserve an emergency slot through the phone or WhatsApp number below, and we prioritize your care.',

    book_eyebrow: 'BOOKING',
    book_title: 'Book your appointment.',
    book_sub: 'Pick a specialty, date, and time. You get confirmation right away.',
    form_name_label: 'Full name',
    form_name_ph: 'What should we call you?',
    form_phone_label: 'Phone / WhatsApp',
    form_phone_ph: '(000) 000-0000',
    form_service_label: 'Specialty',
    form_service_placeholder: 'Choose a specialty',
    form_date_label: 'Date',
    form_time_label: 'Time',
    form_time_error: 'Please select a time to continue.',
    form_submit: 'Confirm appointment',
    form_hint: 'No commitment — we confirm the details before booking.',

    book_info_title: 'Visit the clinic',
    book_info_hours_title: 'Office hours',
    book_hours_week: 'Monday–Friday · 8am–6pm',
    book_hours_sat: 'Saturdays · 8am–12pm',
    book_info_phone_title: 'Phone / WhatsApp',
    book_info_email_title: 'Email',

    book_success_title: 'Request received!',
    book_success_text: 'We are holding your slot. Our team will be in touch in a moment to confirm your visit.',
    book_summary_name: 'Name',
    book_summary_service: 'Specialty',
    book_summary_date: 'Date',
    book_summary_time: 'Time',
    book_summary_phone: 'Contact',
    book_new: 'Make another request',

    final_title: 'Start your new smile today.',
    final_text: 'Take the first step with an initial evaluation — no commitment, and all the comfort you deserve.',
    final_cta: 'Book my slot',

    footer_tagline: 'Modern, welcoming, transparent dental care for the whole family.',
    footer_nav_title: 'Navigation',
    footer_contact_title: 'Contact',
    footer_hours_title: 'Hours',
    footer_hours_week: 'Monday–Friday · 8am–6pm',
    footer_hours_sat: 'Saturdays · 8am–12pm',
    footer_hours_sun: 'Sundays · Closed',
    footer_demo: 'Demo portfolio project — all information is fictional.',

    alt_hero: 'Welcoming care at the Lumen Dental clinic',
    alt_corridor: 'Entrance corridor of the Lumen Dental clinic',
    alt_whitening: 'Teeth whitening protocol at Lumen Dental',
    alt_clinic: 'Main hall of the Lumen Dental clinic',
    alt_doctor1: 'Dr. Alana Mello, cosmetic dentistry',
    alt_doctor2: 'Dr. Rafael Duarte, rehabilitation and implants',
    alt_reception: 'Gabriela Sena, patient experience coordinator'
  }
};

const YEAR = new Date().getFullYear();
I18N.pt.copyright_line = '© ' + YEAR + ' Lumen Dental. Todos os direitos reservados.';
I18N.en.copyright_line = '© ' + YEAR + ' Lumen Dental. All rights reserved.';

let lang = localStorage.getItem('lang') || 'pt';
const bookingState = { draft: null, successOpen: false };

/* ---------------- i18n ---------------- */
function applyLang() {
  lang = localStorage.getItem('lang') || 'pt';
  document.documentElement.setAttribute('lang', lang);

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const k = el.dataset.i18n;
    if (I18N[lang][k] !== undefined) el.textContent = I18N[lang][k];
  });

  document.querySelectorAll('[data-i18n-ph]').forEach((el) => {
    const k = el.dataset.i18nPh;
    if (I18N[lang][k] !== undefined) el.setAttribute('placeholder', I18N[lang][k]);
  });

  document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
    const k = el.dataset.i18nAlt;
    if (I18N[lang][k] !== undefined) el.setAttribute('alt', I18N[lang][k]);
  });

  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const k = el.dataset.i18nHtml;
    if (I18N[lang][k] !== undefined) el.innerHTML = I18N[lang][k];
  });

  document.querySelectorAll('[data-lang]').forEach((b) => {
    b.classList.toggle('is-active', b.dataset.lang === lang);
    b.setAttribute('aria-pressed', b.dataset.lang === lang ? 'true' : 'false');
  });

  if (bookingState.successOpen) renderBookingSummary(lang);
}

document.querySelectorAll('[data-lang]').forEach((b) =>
  b.addEventListener('click', () => {
    localStorage.setItem('lang', b.dataset.lang);
    applyLang();
  })
);

/* ---------------- header: shadow + mobile nav ---------------- */
const header = document.getElementById('siteHeader');
const navToggle = document.getElementById('navToggle');

function onScroll() {
  header.classList.toggle('is-scrolled', window.scrollY > 10);
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

function toggleNav(open) {
  header.classList.toggle('is-open', open);
  navToggle.setAttribute('aria-expanded', String(open));
  navToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
}

navToggle.addEventListener('click', () => {
  toggleNav(!header.classList.contains('is-open'));
});

document.querySelectorAll('.nav-list a').forEach((a) =>
  a.addEventListener('click', () => toggleNav(false))
);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && header.classList.contains('is-open')) toggleNav(false);
});

/* ---------------- reveal on scroll ---------------- */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

/* ---------------- FAQ accordion ---------------- */
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach((item) => {
  const btn = item.querySelector('.faq-q');
  const panel = item.querySelector('.faq-a');
  btn.addEventListener('click', () => {
    const isOpen = item.classList.contains('is-open');
    faqItems.forEach((i) => {
      i.classList.remove('is-open');
      i.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
      i.querySelector('.faq-a').style.maxHeight = null;
    });
    if (!isOpen) {
      item.classList.add('is-open');
      btn.setAttribute('aria-expanded', 'true');
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
});

/* ---------------- booking form ---------------- */
const form = document.getElementById('bookingForm');
const dateInput = document.getElementById('bk-date');
const timeChips = document.querySelectorAll('.chip');
const timeError = document.getElementById('timeError');
const formCard = document.querySelector('.booking-form-card');
const successPanel = document.getElementById('bookSuccess');

const today = new Date();
const isoToday = today.getFullYear() + '-' +
  String(today.getMonth() + 1).padStart(2, '0') + '-' +
  String(today.getDate()).padStart(2, '0');
dateInput.min = isoToday;

let selectedTime = null;

timeChips.forEach((chip) => {
  chip.addEventListener('click', () => {
    selectedTime = chip.dataset.time;
    timeChips.forEach((c) => {
      c.classList.remove('is-selected');
      c.setAttribute('aria-checked', 'false');
    });
    chip.classList.add('is-selected');
    chip.setAttribute('aria-checked', 'true');
    timeChips[0].closest('.field').classList.remove('has-error');
    timeError.hidden = true;
  });
});

function formatDate(iso, loc) {
  const parts = iso.split('-');
  if (parts.length !== 3) return iso;
  const [y, m, d] = parts;
  return loc === 'pt' ? `${d}/${m}/${y}` : `${m}/${d}/${y}`;
}

function renderBookingSummary() {
  const d = bookingState.draft;
  if (!d) return;
  const fmt = lang === 'pt' ? 'pt' : 'en';
  const sel = document.getElementById('bk-service');
  const opt = sel.querySelector(`option[value="${d.service}"]`);
  document.getElementById('sumName').textContent = d.name;
  document.getElementById('sumService').textContent = opt ? opt.textContent : '—';
  document.getElementById('sumDate').textContent = formatDate(d.date, fmt);
  document.getElementById('sumTime').textContent = d.time;
  document.getElementById('sumPhone').textContent = d.phone;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('bk-name').value.trim();
  const phone = document.getElementById('bk-phone').value.trim();
  const service = document.getElementById('bk-service').value;
  const date = document.getElementById('bk-date').value;

  if (!selectedTime) {
    timeChips[0].closest('.field').classList.add('has-error');
    timeError.hidden = false;
    return;
  }
  if (!name || !phone || !service || !date) return;

  bookingState.draft = {
    name, phone, service, date, time: selectedTime
  };
  bookingState.successOpen = true;

  document.getElementById('sumName').textContent = '';
  renderBookingSummary();

  form.hidden = true;
  successPanel.hidden = false;
  formCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

document.getElementById('bookAgain').addEventListener('click', () => {
  bookingState.successOpen = false;
  form.reset();
  selectedTime = null;
  timeChips.forEach((c) => c.classList.remove('is-selected'));
  successPanel.hidden = true;
  form.hidden = false;
});

/* ---------------- dynamic year ---------------- */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(YEAR);

/* ---------------- init ---------------- */
document.addEventListener('DOMContentLoaded', applyLang);