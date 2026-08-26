import { useState } from "react";

import Icon from "@/components/ui/icon";

const LOGO_URL = "https://cdn.poehali.dev/projects/70a8d357-1c4f-4d1c-9bc4-9ce5ff1444a9/bucket/b84c7180-86c1-411c-be61-2bc89b44e202.png";
const IMG_MINE = "https://cdn.poehali.dev/projects/70a8d357-1c4f-4d1c-9bc4-9ce5ff1444a9/files/4b787e51-4a6a-4829-82e3-959df648569e.jpg";

const NAV = [
  { label: "О программе", href: "#about" },
  { label: "Возможности", href: "#modules" },
  { label: "Обучение", href: "#training" },
  { label: "Контакты", href: "#contacts" },
];

const MODULES = [
  { icon: "Wind", code: "", title: "Вентиляционная сеть", desc: "Аэродинамический расчёт. Депрессия, сопротивления и распределение расходов воздуха по горным выработкам." },
  { icon: "Droplets", code: "", title: "Водоснабжение", desc: "Гидравлический расчёт пожарно-оросительного водоснабжения и трубопроводов" },
  { icon: "Shield", code: "", title: "Пожарная безопасность", desc: "Моделирование пожарной депрессии, реверса вентилятора и аварийного проветривания." },

];

const NORMS = [
  "ФНП «Безопасность при ведении горных работ»",
  "ЕПБ рудных и нерудных месторождений",
  "РД 06-356-00 (депрессионные съёмки)",
  "ГОСТ Р 55154 (вентиляция шахт)",
  "СП 91.13330 (подземные выработки)",
  "Рекомендации МЧС для ВГСЧ",
];

const ADVANTAGES = [
  { num: "500+", label: "Горных предприятий", sub: "используют ПВ-Систему" },
  { num: "15", label: "Лет на рынке", sub: "инженерного ПО для рудников" },
  { num: "4", label: "Расчётных модуля", sub: "в одном комплексе" },
  { num: "МЧС", label: "Совместимость с ВГСЧ", sub: "документация для аварийных служб" },
];


const CERTIFICATE_URL = "/files/PV-Sistema-Sertifikat-sootvetstviya.pdf";
const REGISTRATION_URL = "/files/PV-Sistema-Gosudarstvennaya-registraciya.pdf";

const TRAINING_FACTS = [
  { icon: "Clock", label: "40 акад. часов", sub: "5 дней по 8 часов" },
  { icon: "MonitorPlay", label: "Очно / дистанционно", sub: "с практикой за компьютером" },
  { icon: "Users", label: "До 12 человек", sub: "в учебной группе" },
  { icon: "GraduationCap", label: "Зачёт", sub: "самостоятельный расчёт модели рудника" },
];

const TRAINING_DAYS = [
  { day: "День 1", title: "Интерфейс и построение вентиляционной сети", desc: "Рабочее пространство, навигация и проекции, топология из узлов и ветвей, импорт схем из «АэроСети», Ventsim, DXF." },
  { day: "День 2", title: "Аэродинамика выработок и расчёт воздухораспределения", desc: "Сечения и сопротивления выработок, вентиляторы главного проветривания, метод Кросса и метод контурных расходов, естественная тяга." },
  { day: "День 3", title: "Анализ результатов и вентиляционные сооружения", desc: "Визуальный анализ расчёта, депрессиограмма и эквивалентное отверстие, регулирование сети, расход воздуха по нормам." },
  { day: "День 4", title: "Аварийные режимы: пожар, взрыв, вывод людей", desc: "Моделирование рудничного пожара и тепловой депрессии, устойчивость проветривания, расчёт путей вывода людей и маршрутов ВГСЧ." },
  { day: "День 5", title: "Противопожарный трубопровод, отчётность, зачёт", desc: "Гидравлический расчёт пожарно-оросительного трубопровода, выгрузка документов и чертежей для ПЛА, итоговый зачёт." },
];

const TRAINING_FILES = [
  {
    icon: "FileText",
    ext: "PDF",
    title: "Программа обучения «ПВ-Система», 40 часов",
    desc: "Полная программа курса в PDF: цели и задачи обучения, требования к слушателям, поурочный план всех пяти дней с разбивкой на теорию и практику, итоговый контроль.",
    size: "318 КБ",
    url: "/files/PV-Sistema-Programma-obucheniya-40h.pdf",
    file: "ПВ-Система_Программа_обучения_40часов.pdf",
  },
  {
    icon: "FileType2",
    ext: "DOCX",
    title: "Программа обучения «ПВ-Система», 40 часов",
    desc: "Тот же документ в редактируемом формате Word — удобно адаптировать под учебный центр предприятия, добавить свои реквизиты и согласовать с отделом кадров.",
    size: "46 КБ",
    url: "/files/PV-Sistema-Programma-obucheniya-40h.docx",
    file: "ПВ-Система_Программа_обучения_40часов.docx",
  },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [form, setForm] = useState({ name: "", org: "", email: "", phone: "", msg: "" });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<null | "ok" | "err">(null);

  const submitOrder = async () => {
    if (!form.name.trim() || (!form.email.trim() && !form.phone.trim())) {
      setStatus("err");
      return;
    }
    setSending(true);
    setStatus(null);
    try {
      const res = await fetch("https://functions.poehali.dev/2f5fc8e0-0a17-4e4e-9142-bf9944b2a923", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("ok");
      setForm({ name: "", org: "", email: "", phone: "", msg: "" });
    } catch {
      setStatus("err");
    } finally {
      setSending(false);
    }
  };

  const inp = "w-full bg-white border border-[#dce6f0] rounded px-3 py-2.5 text-sm text-[#0d1f35] placeholder:text-[#9fb3c8] focus:outline-none focus:border-[#0e63b0] focus:ring-2 focus:ring-[rgba(14,99,176,0.1)] transition-all";

  return (
    <div className="min-h-screen bg-white text-[#0d1f35]">

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-50 bg-white border-b border-[#dce6f0] shadow-sm">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="flex items-center gap-3">
              <img src={LOGO_URL} alt="ПВ-Система" className="h-10 w-10 object-contain rounded-lg" />
              <div>
                <div className="font-bold text-[#0d1f35] text-base leading-none">ПВ-Система</div>
                <div className="text-[10px] text-[#5a6e82] leading-none mt-0.5 tracking-wide">Вентиляция и водоснабжение рудников</div>
              </div>
            </a>

            <nav className="hidden xl:flex items-center gap-1">
              {NAV.map(l => (
                <a key={l.href} href={l.href}
                  className="px-3 py-2 text-sm text-[#5a6e82] hover:text-[#0e63b0] hover:bg-[#f0f7ff] rounded transition-all font-medium">
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="hidden xl:flex items-center gap-3">
              <a href="#docs" className="px-4 py-2 text-sm border border-[#0e63b0] text-[#0e63b0] hover:bg-[#f0f7ff] rounded font-semibold transition-colors">
                Скачать
              </a>
              <a href="#contacts" className="px-4 py-2 text-sm gradient-blue-btn text-white rounded font-semibold hover:opacity-90 transition-opacity shadow-sm">
                Связаться
              </a>
            </div>

            <button className="xl:hidden text-[#5a6e82]" onClick={() => setMenuOpen(!menuOpen)}>
              <Icon name={menuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="xl:hidden border-t border-[#dce6f0] bg-white py-4 px-6 space-y-1">
            {NAV.map(l => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                className="block px-3 py-2 text-sm text-[#5a6e82] hover:text-[#0e63b0] hover:bg-[#f0f7ff] rounded transition-all">{l.label}</a>
            ))}
            <div className="pt-3 flex flex-col gap-2 border-t border-[#dce6f0] mt-2">
              <a href="#contacts" className="px-4 py-2 text-sm text-center border border-[#0e63b0] text-[#0e63b0] rounded font-semibold">Демо-версия</a>
              <a href="#contacts" className="px-4 py-2 text-sm text-center gradient-blue-btn text-white rounded font-semibold">Связаться</a>
            </div>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section className="gradient-hero text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-16"
          style={{ background: "linear-gradient(to top, white, transparent)" }} />

        <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="font-display leading-tight mb-4 md:mb-5 anim-0" style={{ letterSpacing: "0.01em" }}>
                <span className="text-[clamp(1rem,2.5vw,1.75rem)] font-semibold text-[#bfdbfe]">Программный комплекс</span><br />
                <span className="text-[clamp(2.2rem,6vw,3.5rem)] text-[#7dd3fc]">ПВ-Система</span>
              </h1>

              <p className="text-[#bfdbfe] text-base md:text-lg leading-relaxed mb-7 md:mb-8 max-w-lg mx-auto lg:mx-0 anim-1">
                Проектирование вентиляции и водоснабжения для горно-рудных предприятий.
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 anim-2">
                <a href="https://xn----8sbenozqsbk.xn--p1ai/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white text-[#0e63b0] font-semibold rounded hover:bg-[#f0f7ff] transition-colors shadow-md flex items-center justify-center gap-2">
                  <Icon name="Play" size={16} />
                  Попробовать
                </a>
                <a href="#contacts" className="px-6 py-3 border-2 border-white/40 text-white font-semibold rounded hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                  <Icon name="Mail" size={16} />
                  Связаться
                </a>
              </div>
            </div>

            <div className="relative anim-1 mt-6 lg:mt-0 pb-6 pr-6">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden shadow-2xl">
                <img src={IMG_MINE} alt="ПВ-Система в работе" className="w-full aspect-[4/3] object-cover opacity-80" />
              </div>
              <div className="absolute bottom-0 right-0 bg-white rounded-xl p-4 border border-[#dce6f0] shadow-lg min-w-[150px]">
                <div className="flex items-center gap-2">
                  <div className="flex flex-col gap-[3px]">
                    <div className="w-7 h-[5px] rounded-sm" style={{ background: "#ffffff", border: "1px solid #dce6f0" }} />
                    <div className="w-7 h-[5px] rounded-sm" style={{ background: "#0039A6" }} />
                    <div className="w-7 h-[5px] rounded-sm" style={{ background: "#D52B1E" }} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0d1f35] leading-tight">Сделано в России</div>
                    <div className="text-[10px] text-[#5a6e82]">Российское ПО</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ── ABOUT ── */}
      <section id="about" className="py-16 md:py-20">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="section-rule" />
              <div className="tag-blue mb-3">О программном комплексе</div>
              <p className="text-[#5a6e82] leading-relaxed mb-5">
                ПВ-Система — специализированный программный комплекс для проектирования вентиляции и водоснабжения горно-рудных предприятий и решения задач противоаварийной устойчивости.
              </p>

              <div className="mb-5">
                <div className="text-sm font-semibold text-[#0d1f35] mb-2">Вентиляционные задачи:</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    "Расчёт воздухораспределения",
                    "Воздухораспределение при пожаре",
                    "Расчёт устойчивости при пожаре",
                    "Расчёт баланса воздуха",
                  ].map(t => (
                    <div key={t} className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[#e8f4fd] border border-[#bee3f8] flex items-center justify-center shrink-0">
                        <Icon name="Check" size={11} style={{ color: "#0e63b0" }} />
                      </div>
                      <span className="text-sm text-[#0d1f35]">{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <div className="text-sm font-semibold text-[#0d1f35] mb-2">Задачи плана ликвидации аварии (ПЛА):</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    "Движение горноспасателей при разведке и ликвидации аварии",
                    "Движение горнорабочих при эвакуации из рудника",
                    "Расчёт распространения дыма в горных выработках",
                  ].map(t => (
                    <div key={t} className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[#e8f4fd] border border-[#bee3f8] flex items-center justify-center shrink-0">
                        <Icon name="Check" size={11} style={{ color: "#0e63b0" }} />
                      </div>
                      <span className="text-sm text-[#0d1f35]">{t}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
            <div className="relative rounded-xl border border-[#dce6f0] shadow-md overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <img
                src="https://cdn.poehali.dev/projects/70a8d357-1c4f-4d1c-9bc4-9ce5ff1444a9/bucket/e0788966-3f55-4463-a813-3246f11cd7d6.png"
                alt="Интерфейс программы ПВ-Система"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── MODULES ── */}
      <section id="modules" className="py-16 md:py-20 bg-[#f4f7fb]">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="section-rule mx-auto" />
            <div className="tag-blue mb-3">Возможности системы</div>
            <h2 className="font-display text-[clamp(1.7rem,3vw,2.5rem)] text-[#0d1f35]">
              Полный цикл инженерных расчётов
            </h2>
            <p className="text-[#5a6e82] mt-3 max-w-xl mx-auto">
              задач вентиляции и водоснабжения горно-рудных предприятий
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {MODULES.map(m => (
              <div key={m.code} className="card-white rounded-xl p-5 cursor-default">
                <div className="flex items-start justify-between mb-4">
                  <div className="icon-box">
                    <Icon name={m.icon as "Wind"} size={22} style={{ color: "#0e63b0" }} />
                  </div>
                  {m.code && <span className="text-[10px] font-mono font-semibold text-[#0e63b0] bg-[#e8f4fd] border border-[#bee3f8] px-2 py-0.5 rounded">{m.code}</span>}
                </div>
                <h3 className="font-semibold text-[#0d1f35] text-sm mb-2 leading-snug">{m.title}</h3>
                <p className="text-[#5a6e82] text-xs leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ── TRAINING ── */}
      <section id="training" className="py-16 md:py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="section-rule mx-auto" />
            <div className="tag-blue mb-3">Обучение пользователей</div>
            <h2 className="font-display text-[clamp(1.7rem,3vw,2.5rem)] text-[#0d1f35]">
              Курс подготовки на 40 академических часов
            </h2>
            <p className="text-[#5a6e82] mt-3 max-w-2xl mx-auto">
              Практический курс для горных инженеров, специалистов службы аэрологической безопасности и вентиляции и ВГСЧ. От построения схемы рудника до расчёта аварийных режимов и подготовки документов ПЛА.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-5xl mx-auto">
            {TRAINING_FACTS.map(f => (
              <div key={f.label} className="bg-[#f4f7fb] border border-[#dce6f0] rounded-xl p-5 text-center">
                <div className="icon-box mx-auto mb-3">
                  <Icon name={f.icon as "Clock"} size={20} style={{ color: "#0e63b0" }} />
                </div>
                <div className="font-semibold text-[#0d1f35] text-sm mb-1">{f.label}</div>
                <div className="text-[#5a6e82] text-xs leading-relaxed">{f.sub}</div>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="font-display text-lg text-[#0d1f35] mb-5">Программа по дням</h3>
            <div className="space-y-3">
              {TRAINING_DAYS.map(d => (
                <div key={d.day} className="flex gap-4 bg-white border border-[#dce6f0] rounded-xl p-5 hover:border-[#0e63b0] transition-colors">
                  <div className="shrink-0 w-16 text-center">
                    <div className="text-[#0e63b0] font-display text-sm font-semibold">{d.day}</div>
                    <div className="text-[10px] text-[#9fb3c8] mt-0.5">8 ч</div>
                  </div>
                  <div className="border-l border-[#dce6f0] pl-4">
                    <div className="font-semibold text-[#0d1f35] text-sm mb-1.5 leading-snug">{d.title}</div>
                    <div className="text-[#5a6e82] text-xs leading-relaxed">{d.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h3 className="font-display text-lg text-[#0d1f35] mb-5">Материалы для скачивания</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {TRAINING_FILES.map(f => (
                <a
                  key={f.ext}
                  href={f.url}
                  download={f.file}
                  className="group flex flex-col bg-[#f4f7fb] border border-[#dce6f0] rounded-xl p-6 hover:border-[#0e63b0] hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="icon-box">
                      <Icon name={f.icon as "FileText"} size={22} style={{ color: "#0e63b0" }} />
                    </div>
                    <span className="text-[10px] font-mono font-semibold text-[#0e63b0] bg-[#e8f4fd] border border-[#bee3f8] px-2 py-0.5 rounded">{f.ext}</span>
                  </div>
                  <h4 className="font-semibold text-[#0d1f35] text-sm mb-2 leading-snug">{f.title}</h4>
                  <p className="text-[#5a6e82] text-xs leading-relaxed mb-5 flex-1">{f.desc}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-[#dce6f0]">
                    <span className="text-[11px] text-[#9fb3c8]">{f.size}</span>
                    <span className="inline-flex items-center gap-1.5 text-[#0e63b0] text-xs font-semibold group-hover:gap-2.5 transition-all">
                      Скачать
                      <Icon name="Download" size={14} />
                    </span>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-6 flex items-start gap-3 bg-[#e8f4fd] border border-[#bee3f8] rounded-xl p-5">
              <Icon name="Info" size={18} style={{ color: "#0e63b0" }} className="shrink-0 mt-0.5" />
              <p className="text-[#0d1f35] text-xs leading-relaxed">
                Обучение проводится на площадке заказчика или дистанционно. Для записи группы и согласования дат оставьте заявку в разделе{" "}
                <a href="#contacts" className="text-[#0e63b0] font-semibold hover:underline">Контакты</a> или напишите на pvsistema@mail.ru.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACTS ── */}
      <section id="contacts" className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <div className="section-rule" />
              <div className="tag-blue mb-3">Контакты</div>
              <h2 className="font-display text-[clamp(1.7rem,3vw,2.5rem)] text-[#0d1f35] mb-6 leading-tight">
                Свяжитесь с нами
              </h2>

              <div className="space-y-4 mb-8">
                {[
                  { icon: "MapPin", label: "Адрес", val: "Республика Башкортостан, г. Сибай, ул. Куйбышева, 20" },
                  { icon: "Phone", label: "Телефон", val: "+7 (960) 392-42-55" },
                  { icon: "Phone", label: "Поддержка", val: "+7 (933) 044-70-17" },
                  { icon: "Mail", label: "Email", val: "pvsistema@mail.ru" },
                  { icon: "Globe", label: "Сайт", val: "ПВСистема.рф" },

                ].map(c => (
                  <div key={c.label} className="flex items-start gap-3">
                    <div className="icon-box shrink-0 mt-0.5">
                      <Icon name={c.icon as "MapPin"} size={16} style={{ color: "#0e63b0" }} />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#5a6e82] uppercase tracking-wide">{c.label}</div>
                      <div className="text-sm font-medium text-[#0d1f35] mt-0.5">{c.val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl border border-[#dce6f0] shadow-sm p-8">
              <div className="flex items-center gap-3 mb-6 pb-5 border-b border-[#dce6f0]">
                <img src={LOGO_URL} alt="ПВ-Система" className="h-10 w-10 object-contain rounded-lg" />
                <div>
                  <div className="font-bold text-[#0d1f35]">Заказать</div>
                  <div className="text-xs text-[#5a6e82]">Ответим в течение рабочего дня</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#5a6e82] uppercase tracking-wide mb-1.5">Имя</label>
                    <input type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Иван Петров" className={inp} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#5a6e82] uppercase tracking-wide mb-1.5">Предприятие</label>
                    <input type="text" value={form.org} onChange={e => setForm({ ...form, org: e.target.value })} placeholder="ОАО «Рудник»" className={inp} />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#5a6e82] uppercase tracking-wide mb-1.5">Email</label>
                  <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="ivan@mine.ru" className={inp} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#5a6e82] uppercase tracking-wide mb-1.5">Телефон</label>
                  <input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+7 (___) ___-__-__" className={inp} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#5a6e82] uppercase tracking-wide mb-1.5">Тип предприятия / задача</label>
                  <textarea value={form.msg} onChange={e => setForm({ ...form, msg: e.target.value })}
                    placeholder="Горно-рудное предприятие, нужен расчёт вентиляционной сети и ПЛА для ВГСЧ"
                    rows={4} className={`${inp} resize-none`} />
                </div>
                <button onClick={submitOrder} disabled={sending} className="w-full py-3 gradient-blue-btn text-white font-semibold rounded hover:opacity-90 transition-opacity shadow-sm disabled:opacity-60 disabled:cursor-not-allowed">
                  {sending ? "Отправляем..." : "Отправить заявку"}
                </button>
                {status === "ok" && (
                  <p className="text-sm text-green-600 text-center font-medium">Заявка отправлена! Мы свяжемся с вами в течение рабочего дня.</p>
                )}
                {status === "err" && (
                  <p className="text-sm text-red-600 text-center font-medium">Не удалось отправить. Укажите имя и контакт (email или телефон) и попробуйте ещё раз.</p>
                )}
                <p className="text-xs text-[#9fb3c8] text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#0d1f35] text-white py-12">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img src={LOGO_URL} alt="ПВ-Система" className="h-10 w-10 object-contain" />
                <div>
                  <div className="font-bold text-white">ПВ-Система</div>
                  <div className="text-xs text-[#93c5fd]">Вентиляция и водоснабжение рудников</div>
                </div>
              </div>
              <p className="text-sm text-[#94a3b8] leading-relaxed max-w-xs">
                Специализированный программный комплекс для проектирования вентиляции и водоснабжения горно-рудных предприятий и решения задач противоаварийной устойчивости.
              </p>
            </div>
            <div>
              <div className="text-xs font-semibold text-[#93c5fd] uppercase tracking-wide mb-4">Разделы</div>
              <div className="space-y-2">
                {NAV.map(l => (
                  <a key={l.href} href={l.href} className="block text-sm text-[#94a3b8] hover:text-white transition-colors">{l.label}</a>
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs font-semibold text-[#93c5fd] uppercase tracking-wide mb-4">Контакты</div>
              <div className="space-y-2 text-sm text-[#94a3b8]">
                <div>+7 (960) 392-42-55</div>
                <div>+7 (933) 044-70-17 (поддержка)</div>
                <div>pvsistema@mail.ru</div>
                <div>ПВСистема.рф</div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-[#64748b]">
            <div>© 2026 ООО «ПВ-Система». Все права защищены.</div>
            <div className="flex gap-4">
              <a href={CERTIFICATE_URL} download="ПВ-Система_Сертификат_соответствия.pdf" className="hover:text-white transition-colors">Сертификат соответствия</a>
              <a href={REGISTRATION_URL} download="ПВ-Система_Государственная_регистрация.pdf" className="hover:text-white transition-colors">Государственная регистрация</a>
              <div className="relative group">
                <span className="cursor-default hover:text-white transition-colors">Лицензионное соглашение</span>
                <div className="absolute bottom-full right-0 mb-2 w-72 bg-white text-gray-800 text-xs rounded-lg shadow-xl p-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                  <div className="font-semibold text-sm mb-2">Лицензионное соглашение</div>
                  <p className="leading-relaxed">Горно-рудным предприятиям программный комплекс <span className="whitespace-nowrap">ПВ-Система</span> предоставляется по платной годовой подписке.</p>
                  <div className="absolute bottom-[-6px] right-4 w-3 h-3 bg-white rotate-45 shadow-md"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>


    </div>
  );
}