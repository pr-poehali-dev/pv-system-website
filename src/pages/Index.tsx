import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { label: "О продукте", href: "#about" },
  { label: "Возможности", href: "#features" },
  { label: "Документация", href: "#docs" },
  { label: "Кейсы", href: "#cases" },
  { label: "Цены", href: "#pricing" },
  { label: "Поддержка", href: "#support" },
  { label: "Контакты", href: "#contacts" },
];

const FEATURES = [
  {
    icon: "Wind",
    title: "Расчёт вентиляции",
    desc: "Аэродинамический расчёт воздуховодов, подбор оборудования, расчёт потерь давления по СП 60.13330",
  },
  {
    icon: "Droplets",
    title: "Водоснабжение",
    desc: "Расчёт внутреннего и наружного водоснабжения, гидравлический расчёт трубопроводов по СП 30.13330",
  },
  {
    icon: "FileText",
    title: "Автогенерация отчётов",
    desc: "Автоматическое формирование пояснительных записок, спецификаций и смет в форматах PDF, DOCX, Excel",
  },
  {
    icon: "Database",
    title: "База нормативов",
    desc: "Актуальная база нормативных документов: СП, ГОСТ, СНиП с автоматическим обновлением",
  },
  {
    icon: "GitBranch",
    title: "BIM-интеграция",
    desc: "Экспорт в Revit, AutoCAD MEP, Renga. Двусторонняя синхронизация данных проекта",
  },
  {
    icon: "Shield",
    title: "Проверка нормативов",
    desc: "Автоматическая проверка проекта на соответствие действующим нормам и требованиям пожарной безопасности",
  },
  {
    icon: "Users",
    title: "Коллаборация",
    desc: "Совместная работа над проектом, разграничение ролей, история изменений и версионирование",
  },
  {
    icon: "BarChart2",
    title: "Аналитика проекта",
    desc: "Визуализация нагрузок, тепловые карты, сравнение вариантов инженерных решений",
  },
];

const CASES = [
  {
    title: "ЖК «Северная звезда», Москва",
    type: "Жилой комплекс",
    area: "48 000 м²",
    systems: "Вентиляция + ХВС + ГВС",
    result: "Снижение времени проектирования на 62%",
    img: "https://cdn.poehali.dev/projects/70a8d357-1c4f-4d1c-9bc4-9ce5ff1444a9/files/dbf29e6c-c2ae-4512-9f7e-a8a9546ee072.jpg",
  },
  {
    title: "БЦ «Технопарк», Санкт-Петербург",
    type: "Бизнес-центр",
    area: "22 000 м²",
    systems: "Приточно-вытяжная + рециркуляция",
    result: "Выявлено 14 нарушений до стадии строительства",
    img: "https://cdn.poehali.dev/projects/70a8d357-1c4f-4d1c-9bc4-9ce5ff1444a9/files/7a69bb77-fe91-4339-96ed-0fc5e3fb23ae.jpg",
  },
  {
    title: "Завод «АвтоКомплект», Казань",
    type: "Промышленный объект",
    area: "6 000 м²",
    systems: "Промышленная вентиляция + пожаротушение",
    result: "Экономия бюджета на материалы — 18%",
    img: "https://cdn.poehali.dev/projects/70a8d357-1c4f-4d1c-9bc4-9ce5ff1444a9/files/dbf29e6c-c2ae-4512-9f7e-a8a9546ee072.jpg",
  },
];

const DOCS = [
  { title: "Руководство пользователя", size: "PDF, 4.2 МБ", icon: "BookOpen" },
  { title: "Руководство администратора", size: "PDF, 1.8 МБ", icon: "Settings" },
  { title: "API-документация", size: "HTML", icon: "Code" },
  { title: "Методика расчётов", size: "PDF, 2.1 МБ", icon: "FileText" },
  { title: "Нормативная база (описание)", size: "PDF, 890 КБ", icon: "Database" },
  { title: "Видеоуроки", size: "YouTube плейлист", icon: "Play" },
];

const PRICING = [
  {
    name: "Стартер",
    price: "18 900",
    period: "/ год",
    desc: "Для небольших проектных организаций",
    features: [
      "1 рабочее место",
      "Расчёты вентиляции и ХВС",
      "Генерация отчётов PDF",
      "Email поддержка",
      "Обновления в течение года",
    ],
    highlight: false,
  },
  {
    name: "Профессионал",
    price: "52 000",
    period: "/ год",
    desc: "Для средних проектных бюро",
    features: [
      "5 рабочих мест",
      "Все модули расчётов",
      "BIM-интеграция (Revit, Renga)",
      "Нормативная база с автообновлением",
      "Приоритетная поддержка",
      "Обучение (8 часов)",
    ],
    highlight: true,
  },
  {
    name: "Корпоратив",
    price: "По запросу",
    period: "",
    desc: "Для крупных организаций и холдингов",
    features: [
      "Неограниченное число мест",
      "Все модули + кастомизация",
      "Сервер-версия (on-premise)",
      "SLA 99.9% + выделенный менеджер",
      "Интеграция с внутренними системами",
      "Корпоративное обучение",
    ],
    highlight: false,
  },
];

// ─── Calculator Component ─────────────────────────────────────────────────────

function Calculator() {
  const [tab, setTab] = useState<"vent" | "water">("vent");

  const [area, setArea] = useState("");
  const [height, setHeight] = useState("");
  const [norms, setNorms] = useState("1");
  const [roomType, setRoomType] = useState("office");

  const [floors, setFloors] = useState("");
  const [apartments, setApartments] = useState("");
  const [residents, setResidents] = useState("");
  const [waterType, setWaterType] = useState("cold");

  const roomNorms: Record<string, number> = {
    office: 60,
    living: 30,
    industrial: 90,
    medical: 120,
    restaurant: 100,
  };

  const calcVent = () => {
    const a = parseFloat(area);
    const h = parseFloat(height);
    const n = parseFloat(norms);
    if (!a || !h || !n) return null;
    const volume = a * h;
    const norm = roomNorms[roomType] || 60;
    const flow = Math.ceil((volume * n + norm * a / 10) / 100) * 100;
    const ductArea = flow / 3600 / 5;
    const diam = Math.ceil(Math.sqrt((4 * ductArea) / Math.PI) * 1000 / 50) * 50;
    return { volume: volume.toFixed(0), flow, diam };
  };

  const calcWater = () => {
    const r = parseFloat(residents);
    const ap = parseFloat(apartments);
    if (!r || !ap) return null;
    const qDay = waterType === "cold" ? r * 250 : r * 120;
    const qHour = Math.ceil(qDay / 16);
    const qSec = (qHour / 3600).toFixed(2);
    const pipeDiam = waterType === "cold"
      ? (r * ap < 50 ? 25 : r * ap < 150 ? 32 : 40)
      : (r * ap < 50 ? 20 : r * ap < 150 ? 25 : 32);
    return { qDay: qDay.toFixed(0), qHour: qHour.toFixed(0), qSec, pipeDiam };
  };

  const ventResult = calcVent();
  const waterResult = calcWater();

  const inputCls = "w-full bg-[rgba(0,0,0,0.4)] border border-[rgba(29,111,207,0.2)] rounded-sm px-3 py-2.5 text-sm text-white placeholder:text-[#8ba3c1] focus:outline-none focus:border-[#1d6fcf] transition-colors";

  return (
    <div className="card-border rounded-sm p-6">
      <div className="flex gap-1 mb-6 bg-[rgba(0,0,0,0.3)] p-1 rounded-sm w-fit">
        <button
          onClick={() => setTab("vent")}
          className={`px-5 py-2 text-sm font-medium tracking-wide transition-all font-display ${
            tab === "vent" ? "gradient-blue text-white" : "text-steel hover:text-white"
          }`}
        >
          ВЕНТИЛЯЦИЯ
        </button>
        <button
          onClick={() => setTab("water")}
          className={`px-5 py-2 text-sm font-medium tracking-wide transition-all font-display ${
            tab === "water" ? "gradient-blue text-white" : "text-steel hover:text-white"
          }`}
        >
          ВОДОСНАБЖЕНИЕ
        </button>
      </div>

      {tab === "vent" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="tag-label block mb-1.5">Площадь помещения, м²</label>
              <input type="number" value={area} onChange={(e) => setArea(e.target.value)} placeholder="например: 350" className={inputCls} />
            </div>
            <div>
              <label className="tag-label block mb-1.5">Высота потолка, м</label>
              <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="например: 3.2" className={inputCls} />
            </div>
            <div>
              <label className="tag-label block mb-1.5">Кратность воздухообмена, 1/ч</label>
              <input type="number" value={norms} onChange={(e) => setNorms(e.target.value)} placeholder="1–10" className={inputCls} />
            </div>
            <div>
              <label className="tag-label block mb-1.5">Тип помещения</label>
              <select value={roomType} onChange={(e) => setRoomType(e.target.value)} className={inputCls}>
                <option value="office">Офис</option>
                <option value="living">Жилое</option>
                <option value="industrial">Производственное</option>
                <option value="medical">Медицинское</option>
                <option value="restaurant">Ресторан / кафе</option>
              </select>
            </div>
          </div>
          <div className="bg-[rgba(0,0,0,0.3)] rounded-sm p-5 flex flex-col justify-center">
            {ventResult ? (
              <div className="space-y-4">
                <div className="tag-label mb-3">Результаты расчёта</div>
                <div className="border-b border-[rgba(29,111,207,0.2)] pb-3">
                  <div className="text-[#8ba3c1] text-xs mb-1">Объём помещения</div>
                  <div className="text-2xl font-display text-white">{ventResult.volume} <span className="text-sm text-[#8ba3c1]">м³</span></div>
                </div>
                <div className="border-b border-[rgba(29,111,207,0.2)] pb-3">
                  <div className="text-[#8ba3c1] text-xs mb-1">Расход воздуха (L)</div>
                  <div className="text-2xl font-display text-[#14b8d4]">{ventResult.flow} <span className="text-sm text-[#8ba3c1]">м³/ч</span></div>
                </div>
                <div>
                  <div className="text-[#8ba3c1] text-xs mb-1">Рекомендуемый диаметр воздуховода</div>
                  <div className="text-2xl font-display text-[#3b9de8]">{ventResult.diam} <span className="text-sm text-[#8ba3c1]">мм</span></div>
                </div>
                <div className="mt-4 p-3 bg-[rgba(29,111,207,0.08)] rounded-sm border border-[rgba(29,111,207,0.15)]">
                  <p className="text-xs text-[#8ba3c1]">Расчёт выполнен по СП 60.13330.2020. Для точного проектирования используйте полную версию ПВ-Системы.</p>
                </div>
              </div>
            ) : (
              <div className="text-center text-[#8ba3c1]">
                <Icon name="Wind" size={40} className="mx-auto mb-3 opacity-30" />
                <p className="text-sm">Заполните параметры слева для расчёта</p>
              </div>
            )}
          </div>
        </div>
      )}

      {tab === "water" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="tag-label block mb-1.5">Число этажей</label>
              <input type="number" value={floors} onChange={(e) => setFloors(e.target.value)} placeholder="например: 12" className={inputCls} />
            </div>
            <div>
              <label className="tag-label block mb-1.5">Число квартир / потребителей</label>
              <input type="number" value={apartments} onChange={(e) => setApartments(e.target.value)} placeholder="например: 48" className={inputCls} />
            </div>
            <div>
              <label className="tag-label block mb-1.5">Число жителей / сотрудников</label>
              <input type="number" value={residents} onChange={(e) => setResidents(e.target.value)} placeholder="например: 120" className={inputCls} />
            </div>
            <div>
              <label className="tag-label block mb-1.5">Тип водоснабжения</label>
              <select value={waterType} onChange={(e) => setWaterType(e.target.value)} className={inputCls}>
                <option value="cold">Холодное водоснабжение (ХВС)</option>
                <option value="hot">Горячее водоснабжение (ГВС)</option>
              </select>
            </div>
          </div>
          <div className="bg-[rgba(0,0,0,0.3)] rounded-sm p-5 flex flex-col justify-center">
            {waterResult ? (
              <div className="space-y-4">
                <div className="tag-label mb-3">Результаты расчёта</div>
                <div className="border-b border-[rgba(29,111,207,0.2)] pb-3">
                  <div className="text-[#8ba3c1] text-xs mb-1">Среднесуточный расход</div>
                  <div className="text-2xl font-display text-white">{waterResult.qDay} <span className="text-sm text-[#8ba3c1]">л/сут</span></div>
                </div>
                <div className="border-b border-[rgba(29,111,207,0.2)] pb-3">
                  <div className="text-[#8ba3c1] text-xs mb-1">Часовой расход</div>
                  <div className="text-2xl font-display text-[#14b8d4]">{waterResult.qHour} <span className="text-sm text-[#8ba3c1]">л/ч</span></div>
                </div>
                <div className="border-b border-[rgba(29,111,207,0.2)] pb-3">
                  <div className="text-[#8ba3c1] text-xs mb-1">Секундный расход</div>
                  <div className="text-2xl font-display text-[#3b9de8]">{waterResult.qSec} <span className="text-sm text-[#8ba3c1]">л/с</span></div>
                </div>
                <div>
                  <div className="text-[#8ba3c1] text-xs mb-1">Рекомендуемый диаметр стояка</div>
                  <div className="text-2xl font-display text-white">DN {waterResult.pipeDiam} <span className="text-sm text-[#8ba3c1]">мм</span></div>
                </div>
                <div className="mt-2 p-3 bg-[rgba(29,111,207,0.08)] rounded-sm border border-[rgba(29,111,207,0.15)]">
                  <p className="text-xs text-[#8ba3c1]">Расчёт по СП 30.13330.2020. Норма {waterType === "cold" ? "250" : "120"} л/сут на чел.</p>
                </div>
              </div>
            ) : (
              <div className="text-center text-[#8ba3c1]">
                <Icon name="Droplets" size={40} className="mx-auto mb-3 opacity-30" />
                <p className="text-sm">Заполните параметры слева для расчёта</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactForm, setContactForm] = useState({ name: "", org: "", email: "", phone: "", message: "" });

  const inputCls = "w-full bg-[rgba(0,0,0,0.4)] border border-[rgba(29,111,207,0.2)] rounded-sm px-3 py-2.5 text-sm text-white placeholder:text-[#8ba3c1] focus:outline-none focus:border-[#1d6fcf] transition-colors";

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--navy)" }}>

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-[rgba(29,111,207,0.15)] backdrop-blur-md"
        style={{ backgroundColor: "rgba(10,15,30,0.92)" }}>
        <div className="container max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-sm gradient-blue flex items-center justify-center">
              <Icon name="Wind" size={16} className="text-white" />
            </div>
            <div>
              <span className="font-display text-lg text-white tracking-widest">ПВ-СИСТЕМА</span>
              <div className="block text-[#14b8d4]" style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "0.55rem", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "-2px" }}>
                ПРОГРАММНО-АНАЛИТИЧЕСКИЙ КОМПЛЕКС
              </div>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href}
                className="text-[#8ba3c1] text-sm hover:text-white transition-colors font-medium tracking-wide">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a href="#contacts" className="px-4 py-2 text-sm border border-[rgba(29,111,207,0.4)] text-[#3b9de8] hover:bg-[rgba(29,111,207,0.1)] transition-colors rounded-sm font-medium">
              Демо-доступ
            </a>
            <a href="#pricing" className="px-4 py-2 text-sm gradient-blue text-white rounded-sm font-medium hover:opacity-90 transition-opacity">
              Купить лицензию
            </a>
          </div>

          <button className="lg:hidden text-[#8ba3c1] hover:text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[rgba(29,111,207,0.2)] py-4 px-6 space-y-3"
            style={{ backgroundColor: "rgba(10,15,30,0.98)" }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMobileMenuOpen(false)}
                className="block text-[#8ba3c1] hover:text-white py-1 transition-colors">
                {l.label}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <a href="#contacts" className="px-4 py-2 text-sm text-center border border-[rgba(29,111,207,0.4)] text-[#3b9de8] rounded-sm">Демо-доступ</a>
              <a href="#pricing" className="px-4 py-2 text-sm text-center gradient-blue text-white rounded-sm">Купить лицензию</a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full opacity-5"
            style={{ background: "radial-gradient(circle, #1d6fcf, transparent)" }} />
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full opacity-5"
            style={{ background: "radial-gradient(circle, #14b8d4, transparent)" }} />
        </div>

        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6 animate-fade-in">
                <div className="w-2 h-2 rounded-full bg-green-400 pulse-dot"></div>
                <span className="tag-label">Версия 4.2 — Актуальная нормативная база 2024</span>
              </div>

              <h1 className="font-display text-5xl lg:text-6xl text-white leading-none mb-6 animate-fade-in-delay-1" style={{ letterSpacing: "0.02em" }}>
                ПРОЕКТИРОВАНИЕ<br />
                <span style={{ color: "#1d6fcf" }}>ВЕНТИЛЯЦИИ</span><br />
                <span className="text-3xl lg:text-4xl text-[#8ba3c1] font-light">и водоснабжения</span>
              </h1>

              <p className="text-[#8ba3c1] text-lg leading-relaxed mb-8 animate-fade-in-delay-2">
                Программно-аналитический комплекс для инженеров-проектировщиков. Точные расчёты,
                соответствие нормативам СП, автоматическая генерация документации.
              </p>

              <div className="flex flex-wrap gap-3 mb-10 animate-fade-in-delay-3">
                <a href="#contacts"
                  className="px-6 py-3 gradient-blue text-white font-display tracking-widest text-sm rounded-sm hover:opacity-90 transition-opacity flex items-center gap-2">
                  <Icon name="Play" size={16} />
                  ЗАПРОСИТЬ ДЕМО
                </a>
                <a href="#features"
                  className="px-6 py-3 border border-[rgba(29,111,207,0.3)] text-[#3b9de8] font-display tracking-widest text-sm rounded-sm hover:bg-[rgba(29,111,207,0.08)] transition-colors flex items-center gap-2">
                  <Icon name="ChevronDown" size={16} />
                  ВОЗМОЖНОСТИ
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4 animate-fade-in-delay-3">
                {[
                  { val: "2 000+", label: "Реализованных проектов" },
                  { val: "300+", label: "Проектных организаций" },
                  { val: "40%", label: "Экономия времени" },
                ].map((s) => (
                  <div key={s.val} className="border-l-2 border-[#1d6fcf] pl-3">
                    <div className="font-display text-xl text-white">{s.val}</div>
                    <div className="text-xs text-[#8ba3c1] mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-fade-in-delay-2">
              <div className="relative rounded-sm overflow-hidden glow-blue border border-[rgba(29,111,207,0.2)]">
                <img
                  src="https://cdn.poehali.dev/projects/70a8d357-1c4f-4d1c-9bc4-9ce5ff1444a9/files/7a69bb77-fe91-4339-96ed-0fc5e3fb23ae.jpg"
                  alt="ПВ-Система интерфейс"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 flex-wrap">
                  {["СП 60.13330", "СП 30.13330", "ГОСТ Р 53315"].map((t) => (
                    <span key={t} className="px-2 py-1 text-xs bg-[rgba(29,111,207,0.3)] border border-[rgba(29,111,207,0.4)] rounded-sm text-[#3b9de8]"
                      style={{ fontFamily: "IBM Plex Mono, monospace" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 border-t border-[rgba(29,111,207,0.2)]">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-line" />
              <div className="tag-label mb-3">О продукте</div>
              <h2 className="font-display text-4xl text-white mb-6" style={{ letterSpacing: "0.03em" }}>
                ПРОФЕССИОНАЛЬНЫЙ ИНСТРУМЕНТ<br />
                <span style={{ color: "#1d6fcf" }}>ДЛЯ ИНЖЕНЕРОВ</span>
              </h2>
              <p className="text-[#8ba3c1] leading-relaxed mb-6">
                ПВ-Система — это специализированный программный комплекс, разработанный совместно с ведущими проектными организациями России. Более 15 лет на рынке инженерного ПО.
              </p>
              <p className="text-[#8ba3c1] leading-relaxed mb-8">
                Комплекс автоматизирует рутинные расчёты, проверяет соответствие нормативам и формирует полный комплект проектной документации — от технического задания до рабочей документации стадии РД.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Все актуальные нормы СП/СНиП",
                  "Сертификат соответствия ГОСТ",
                  "Российская разработка (ПО реестр)",
                  "Техподдержка 8×5 или 24×7",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <Icon name="CheckCircle" size={16} className="mt-0.5 shrink-0" style={{ color: "#14b8d4" }} />
                    <span className="text-sm text-[#8ba3c1]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/70a8d357-1c4f-4d1c-9bc4-9ce5ff1444a9/files/dbf29e6c-c2ae-4512-9f7e-a8a9546ee072.jpg"
                alt="Инженерное проектирование"
                className="w-full rounded-sm border border-[rgba(29,111,207,0.2)] object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-4 -right-4 card-border rounded-sm p-4 w-48">
                <div className="tag-label mb-1">Включено в реестр</div>
                <div className="text-white text-sm font-medium">Российского ПО</div>
                <div className="text-[#8ba3c1] text-xs mt-1">№ 12847 от 14.03.2022</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-20 border-t border-[rgba(29,111,207,0.2)]">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="tag-label mb-3">Возможности</div>
            <h2 className="font-display text-4xl text-white" style={{ letterSpacing: "0.03em" }}>
              ВСЁ ДЛЯ ИНЖЕНЕРНОГО <span style={{ color: "#1d6fcf" }}>ПРОЕКТИРОВАНИЯ</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {FEATURES.map((f) => (
              <div key={f.title} className="card-border rounded-sm p-5 hover-scale transition-all cursor-default">
                <div className="w-10 h-10 rounded-sm mb-4 flex items-center justify-center"
                  style={{ background: "rgba(29,111,207,0.12)", border: "1px solid rgba(29,111,207,0.2)" }}>
                  <Icon name={f.icon as "Wind"} size={20} style={{ color: "#3b9de8" }} />
                </div>
                <h3 className="font-display text-white text-sm tracking-wide mb-2">{f.title}</h3>
                <p className="text-[#8ba3c1] text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section id="calculator" className="py-20 border-t border-[rgba(29,111,207,0.2)]">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="tag-label mb-3">Онлайн-калькулятор</div>
            <h2 className="font-display text-4xl text-white mb-4" style={{ letterSpacing: "0.03em" }}>
              БЫСТРЫЙ РАСЧЁТ <span style={{ color: "#1d6fcf" }}>ПАРАМЕТРОВ</span>
            </h2>
            <p className="text-[#8ba3c1] max-w-xl mx-auto">
              Предварительный расчёт по действующим нормативам СП. Полный расчёт с подбором оборудования — в системе.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Calculator />
          </div>
        </div>
      </section>

      {/* DOCS */}
      <section id="docs" className="py-20 border-t border-[rgba(29,111,207,0.2)]">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <div className="section-line" />
              <div className="tag-label mb-3">Документация</div>
              <h2 className="font-display text-3xl text-white mb-4" style={{ letterSpacing: "0.03em" }}>
                ВСЁ ДЛЯ<br />
                <span style={{ color: "#1d6fcf" }}>РАБОТЫ</span>
              </h2>
              <p className="text-[#8ba3c1] text-sm leading-relaxed">
                Полная документация на русском языке. Обучающие материалы, видеоуроки и методические пособия для инженеров любого уровня.
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {DOCS.map((d) => (
                <button key={d.title}
                  className="card-border rounded-sm p-4 flex items-center gap-4 hover-scale text-left group w-full">
                  <div className="w-9 h-9 rounded-sm flex items-center justify-center shrink-0"
                    style={{ background: "rgba(29,111,207,0.1)", border: "1px solid rgba(29,111,207,0.2)" }}>
                    <Icon name={d.icon as "BookOpen"} size={16} style={{ color: "#3b9de8" }} />
                  </div>
                  <div>
                    <div className="text-sm text-white font-medium group-hover:text-[#3b9de8] transition-colors">{d.title}</div>
                    <div className="text-xs text-[#8ba3c1] mt-0.5">{d.size}</div>
                  </div>
                  <Icon name="Download" size={14} className="ml-auto text-[#8ba3c1] group-hover:text-[#3b9de8] transition-colors" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CASES */}
      <section id="cases" className="py-20 border-t border-[rgba(29,111,207,0.2)]">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="tag-label mb-3">Кейсы</div>
            <h2 className="font-display text-4xl text-white" style={{ letterSpacing: "0.03em" }}>
              РЕАЛИЗОВАННЫЕ <span style={{ color: "#1d6fcf" }}>ПРОЕКТЫ</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CASES.map((c) => (
              <div key={c.title} className="card-border rounded-sm overflow-hidden hover-scale group">
                <div className="relative h-44 overflow-hidden">
                  <img src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827] to-transparent" />
                  <span className="absolute top-3 left-3 px-2 py-1 rounded-sm tag-label"
                    style={{ background: "rgba(29,111,207,0.3)", border: "1px solid rgba(29,111,207,0.4)" }}>
                    {c.type}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-white text-sm tracking-wide mb-3">{c.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-xs">
                      <span className="text-[#8ba3c1]">Площадь объекта</span>
                      <span className="text-white font-medium">{c.area}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-[#8ba3c1]">Системы</span>
                      <span className="text-white font-medium">{c.systems}</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-sm text-xs" style={{ background: "rgba(20,184,212,0.08)", borderLeft: "2px solid #14b8d4" }}>
                    <span className="text-[#14b8d4]">{c.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 border-t border-[rgba(29,111,207,0.2)]">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="tag-label mb-3">Лицензирование</div>
            <h2 className="font-display text-4xl text-white" style={{ letterSpacing: "0.03em" }}>
              ВЫБЕРИТЕ <span style={{ color: "#1d6fcf" }}>ТАРИФ</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {PRICING.map((p) => (
              <div key={p.name}
                className={`rounded-sm p-6 flex flex-col relative ${p.highlight
                  ? "border-2 border-[#1d6fcf] glow-blue"
                  : "card-border"
                }`}
                style={p.highlight ? { background: "rgba(13,22,41,0.95)" } : {}}>
                {p.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-blue px-4 py-1 rounded-full">
                    <span className="text-white text-xs font-display tracking-widest">РЕКОМЕНДУЕМ</span>
                  </div>
                )}
                <div className="mb-5">
                  <div className="tag-label mb-2">{p.name}</div>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="font-display text-3xl text-white">{p.price}</span>
                    <span className="text-[#8ba3c1] text-sm">{p.period}</span>
                  </div>
                  <p className="text-[#8ba3c1] text-xs">{p.desc}</p>
                </div>
                <div className="flex-1 space-y-2.5 mb-6">
                  {p.features.map((f) => (
                    <div key={f} className="flex items-start gap-2">
                      <Icon name="Check" size={14} className="mt-0.5 shrink-0" style={{ color: "#14b8d4" }} />
                      <span className="text-sm text-[#8ba3c1]">{f}</span>
                    </div>
                  ))}
                </div>
                <button
                  className={`w-full py-2.5 rounded-sm font-display tracking-widest text-sm transition-all ${p.highlight
                    ? "gradient-blue text-white hover:opacity-90"
                    : "border border-[rgba(29,111,207,0.3)] text-[#3b9de8] hover:bg-[rgba(29,111,207,0.08)]"
                  }`}>
                  {p.price === "По запросу" ? "ПОЛУЧИТЬ КП" : "ОФОРМИТЬ"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT */}
      <section id="support" className="py-20 border-t border-[rgba(29,111,207,0.2)]">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="tag-label mb-3">Поддержка</div>
            <h2 className="font-display text-4xl text-white" style={{ letterSpacing: "0.03em" }}>
              МЫ <span style={{ color: "#1d6fcf" }}>РЯДОМ</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: "MessageCircle", title: "Чат в системе", desc: "Встроенный чат с инженерами поддержки прямо в интерфейсе ПВ-Системы", time: "Ответ до 2 часов" },
              { icon: "Phone", title: "Телефон", desc: "+7 (495) 123-45-67\nПн–Пт 9:00–18:00 МСК", time: "8×5" },
              { icon: "Mail", title: "Email", desc: "support@pv-system.ru\nДля нетехнических запросов и счётов", time: "Ответ до 24 часов" },
              { icon: "BookOpen", title: "База знаний", desc: "Более 400 статей, инструкций и обучающих материалов", time: "Доступно 24/7" },
            ].map((s) => (
              <div key={s.title} className="card-border rounded-sm p-5 hover-scale">
                <div className="w-10 h-10 rounded-sm mb-4 flex items-center justify-center"
                  style={{ background: "rgba(29,111,207,0.1)", border: "1px solid rgba(29,111,207,0.2)" }}>
                  <Icon name={s.icon as "MessageCircle"} size={20} style={{ color: "#3b9de8" }} />
                </div>
                <h3 className="font-display text-white text-sm tracking-wide mb-2">{s.title}</h3>
                <p className="text-[#8ba3c1] text-xs leading-relaxed mb-3 whitespace-pre-line">{s.desc}</p>
                <span className="tag-label px-2 py-1 rounded-sm inline-block"
                  style={{ background: "rgba(29,111,207,0.1)", border: "1px solid rgba(29,111,207,0.2)" }}>
                  {s.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-20 border-t border-[rgba(29,111,207,0.2)]">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="section-line" />
              <div className="tag-label mb-3">Контакты</div>
              <h2 className="font-display text-4xl text-white mb-6" style={{ letterSpacing: "0.03em" }}>
                СВЯЖИТЕСЬ<br />
                <span style={{ color: "#1d6fcf" }}>С НАМИ</span>
              </h2>
              <p className="text-[#8ba3c1] leading-relaxed mb-8">
                Оставьте заявку — наш менеджер свяжется с вами в течение рабочего дня, проведёт демонстрацию и подберёт оптимальный тариф.
              </p>
              <div className="space-y-4">
                {[
                  { icon: "MapPin", label: "Адрес", val: "г. Москва, ул. Электрозаводская, 27, стр. 8, офис 412" },
                  { icon: "Phone", label: "Телефон", val: "+7 (495) 123-45-67" },
                  { icon: "Mail", label: "Email", val: "info@pv-system.ru" },
                  { icon: "Clock", label: "Режим работы", val: "Пн–Пт 9:00–18:00 МСК" },
                ].map((c) => (
                  <div key={c.label} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-sm flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: "rgba(29,111,207,0.1)", border: "1px solid rgba(29,111,207,0.2)" }}>
                      <Icon name={c.icon as "MapPin"} size={14} style={{ color: "#3b9de8" }} />
                    </div>
                    <div>
                      <div className="tag-label">{c.label}</div>
                      <div className="text-sm text-white mt-0.5">{c.val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-border rounded-sm p-6">
              <div className="tag-label mb-5">Форма обратной связи</div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="tag-label block mb-1.5">Ваше имя</label>
                    <input type="text" value={contactForm.name} onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })} placeholder="Иван Петров" className={inputCls} />
                  </div>
                  <div>
                    <label className="tag-label block mb-1.5">Организация</label>
                    <input type="text" value={contactForm.org} onChange={(e) => setContactForm({ ...contactForm, org: e.target.value })} placeholder="ООО «Проект»" className={inputCls} />
                  </div>
                </div>
                <div>
                  <label className="tag-label block mb-1.5">Email</label>
                  <input type="email" value={contactForm.email} onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })} placeholder="ivan@company.ru" className={inputCls} />
                </div>
                <div>
                  <label className="tag-label block mb-1.5">Телефон</label>
                  <input type="tel" value={contactForm.phone} onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })} placeholder="+7 (___) ___-__-__" className={inputCls} />
                </div>
                <div>
                  <label className="tag-label block mb-1.5">Комментарий</label>
                  <textarea value={contactForm.message} onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    placeholder="Укажите интересующий тариф, число рабочих мест или задайте вопрос"
                    rows={4} className={`${inputCls} resize-none`} />
                </div>
                <button className="w-full py-3 gradient-blue text-white font-display tracking-widest text-sm rounded-sm hover:opacity-90 transition-opacity">
                  ОТПРАВИТЬ ЗАЯВКУ
                </button>
                <p className="text-xs text-[#8ba3c1] text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[rgba(29,111,207,0.2)] py-10">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-sm gradient-blue flex items-center justify-center">
                <Icon name="Wind" size={12} className="text-white" />
              </div>
              <span className="font-display text-sm text-[#8ba3c1] tracking-widest">ПВ-СИСТЕМА</span>
            </div>
            <div className="flex flex-wrap gap-6 justify-center">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="text-[#8ba3c1] text-xs hover:text-white transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
            <div className="text-xs text-[#8ba3c1] text-center md:text-right">
              <div>© 2024 ООО «ПВ-Система»</div>
              <div className="mt-1" style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "0.6rem" }}>ИНН 7701234567 · ОГРН 1127700123456</div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
