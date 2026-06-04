import { useState } from "react";
import Icon from "@/components/ui/icon";

const LOGO_URL = "https://cdn.poehali.dev/projects/70a8d357-1c4f-4d1c-9bc4-9ce5ff1444a9/bucket/b84c7180-86c1-411c-be61-2bc89b44e202.png";
const IMG_MINE = "https://cdn.poehali.dev/projects/70a8d357-1c4f-4d1c-9bc4-9ce5ff1444a9/files/4b787e51-4a6a-4829-82e3-959df648569e.jpg";

const NAV = [
  { label: "О программе", href: "#about" },
  { label: "Возможности", href: "#modules" },
  { label: "Документация", href: "#docs" },
  { label: "Контакты", href: "#contacts" },
];

const MODULES = [
  { icon: "Wind", code: "АЭР-01", title: "Вентиляционная сеть", desc: "Аэродинамический расчёт методом Харди–Кросса. Депрессия, сопротивления и распределение расходов воздуха по выработкам" },
  { icon: "Gauge", code: "АЭР-02", title: "Проветривание тупиков", desc: "Местное проветривание тупиковых выработок. Подбор ВМП, диаметра и длины вентиляционных труб" },
  { icon: "Flame", code: "ГАЗ-01", title: "Газовый баланс", desc: "Расчёт поступления CO, CO₂, NO₂, H₂S и других вредных газов. Разбавление до ПДК по ФНП на горно-рудных предприятиях" },
  { icon: "Droplets", code: "ВОД-01", title: "Водоотлив и водоснабжение", desc: "Гидравлический расчёт рудничного водоотлива, пожарно-орошаемого водоснабжения и трубопроводов" },
  { icon: "Thermometer", code: "КЛМ-01", title: "Тепловой расчёт", desc: "Прогноз тепловлажностных условий в забоях. Расчёт потребности в кондиционировании рудничного воздуха" },
  { icon: "Shield", code: "ПБ-01", title: "Пожарная безопасность", desc: "Моделирование пожарной депрессии, реверса вентилятора, аварийного проветривания для ПЛА ВГСЧ" },
  { icon: "BarChart2", code: "АНЛ-01", title: "Депрессионная съёмка", desc: "Обработка данных натурных инструментальных съёмок, сравнение расчётных и фактических параметров" },
  { icon: "FileText", code: "ДОК-01", title: "Вентиляционная документация", desc: "Автогенерация схем вентиляции, ПЛА, паспортов ВМП и пояснительных записок для Ростехнадзора" },
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
  { num: "8", label: "Расчётных модулей", sub: "в одном комплексе" },
  { num: "МЧС", label: "Совместимость с ВГСЧ", sub: "документация для аварийных служб" },
];

const DOCS = [
  { title: "Руководство пользователя", size: "PDF · 6.8 МБ", icon: "BookOpen" },
  { title: "Методика аэродинамического расчёта", size: "PDF · 3.2 МБ", icon: "Calculator" },
  { title: "Нормативная база — описание", size: "PDF · 1.4 МБ", icon: "Shield" },
  { title: "Инструкция по депрессионной съёмке", size: "PDF · 2.0 МБ", icon: "Gauge" },
  { title: "API и интеграция с AutoCAD / Renga", size: "HTML", icon: "Code" },
  { title: "Видеокурс (12 уроков)", size: "YouTube плейлист", icon: "Play" },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", org: "", email: "", phone: "", msg: "" });

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
      <section className="gradient-hero text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-16"
          style={{ background: "linear-gradient(to top, white, transparent)" }} />

        <div className="container max-w-7xl mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-display leading-tight mb-5 anim-0" style={{ letterSpacing: "0.01em" }}>
                <span className="text-[clamp(1.25rem,3vw,2rem)] font-semibold text-[#bfdbfe]">Программный комплекс</span><br />
                <span className="text-[clamp(2rem,5vw,3.5rem)] text-[#7dd3fc]">ПВ-Система</span>
              </h1>

              <p className="text-[#bfdbfe] text-lg leading-relaxed mb-8 max-w-lg anim-1">
                Проектирование вентиляции и водоснабжения для горно-рудных предприятий.
              </p>

              <div className="flex flex-wrap gap-3 anim-2">
                <a href="#docs" className="px-6 py-3 bg-white text-[#0e63b0] font-semibold rounded hover:bg-[#f0f7ff] transition-colors shadow-md flex items-center gap-2">
                  <Icon name="Download" size={16} />
                  Скачать демо
                </a>
                <a href="#contacts" className="px-6 py-3 border-2 border-white/40 text-white font-semibold rounded hover:bg-white/10 transition-colors flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  Связаться
                </a>
              </div>
            </div>

            <div className="relative anim-1 hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden shadow-2xl">
                <img src={IMG_MINE} alt="ПВ-Система в работе" className="w-full aspect-[4/3] object-cover opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ── ABOUT ── */}
      <section id="about" className="py-20">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
                    "Расчёт нормального воздухораспределения",
                    "Воздухораспределение при пожаре",
                    "Расчёт устойчивости при пожаре",
                    "Расчёт устойчивости при разрушении шлюзов",
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
              <div className="flex items-center gap-3 p-4 bg-[#f0f7ff] rounded-lg border border-[#bee3f8]">
                <img src={LOGO_URL} alt="ПВ-Система" className="h-12 w-12 object-contain rounded-lg" />
                <div>
                  <div className="text-sm font-bold text-[#0d1f35]">ПВ-Система.рф</div>
                  <div className="text-xs text-[#5a6e82]">Свидетельство о регистрации программы для ЭВМ · Роспатент · горно-рудные предприятия и МЧС ВГСЧ</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="https://cdn.poehali.dev/projects/70a8d357-1c4f-4d1c-9bc4-9ce5ff1444a9/files/080f4e0d-f56f-4c8c-af30-145bd2af632b.jpg" alt="Вентиляция горных выработок" className="w-full aspect-[4/3] object-cover rounded-xl border border-[#dce6f0] shadow-md" />
              <div className="absolute -bottom-5 -right-5 bg-white rounded-xl p-4 border border-[#dce6f0] shadow-lg min-w-[160px]">
                <div className="flex items-center gap-2 mb-2">
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

      {/* ── MODULES ── */}
      <section id="modules" className="py-20 bg-[#f4f7fb]">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-rule mx-auto" />
            <div className="tag-blue mb-3">Возможности системы</div>
            <h2 className="font-display text-[clamp(1.7rem,3vw,2.5rem)] text-[#0d1f35]">
              Полный цикл инженерных расчётов
            </h2>
            <p className="text-[#5a6e82] mt-3 max-w-xl mx-auto">
              8 специализированных модулей, охватывающих все задачи вентиляции и водоснабжения горно-рудных предприятий и МЧС ВГСЧ
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {MODULES.map(m => (
              <div key={m.code} className="card-white rounded-xl p-5 cursor-default">
                <div className="flex items-start justify-between mb-4">
                  <div className="icon-box">
                    <Icon name={m.icon as "Wind"} size={22} style={{ color: "#0e63b0" }} />
                  </div>
                  <span className="text-[10px] font-mono font-semibold text-[#0e63b0] bg-[#e8f4fd] border border-[#bee3f8] px-2 py-0.5 rounded">{m.code}</span>
                </div>
                <h3 className="font-semibold text-[#0d1f35] text-sm mb-2 leading-snug">{m.title}</h3>
                <p className="text-[#5a6e82] text-xs leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOCS ── */}
      <section id="docs" className="py-20">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <div className="section-rule" />
              <div className="tag-blue mb-3">Документация</div>
              <h2 className="font-display text-[clamp(1.5rem,3vw,2.2rem)] text-[#0d1f35] mb-4 leading-tight">
                Вся документация на русском языке
              </h2>
              <p className="text-[#5a6e82] text-sm leading-relaxed mb-6">
                Руководства, методики расчётов, видеоуроки и нормативная база — всё адаптировано под требования горно-рудных предприятий России и МЧС ВГСЧ.
              </p>
              <a href="#contacts" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0e63b0] hover:text-[#0a4d8a] transition-colors">
                Получить полный пакет
                <Icon name="ArrowRight" size={16} />
              </a>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {DOCS.map(d => (
                <button key={d.title} className="card-white rounded-lg p-4 flex items-center gap-3 hover-lift text-left group w-full">
                  <div className="icon-box shrink-0">
                    <Icon name={d.icon as "BookOpen"} size={18} style={{ color: "#0e63b0" }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-[#0d1f35] group-hover:text-[#0e63b0] transition-colors truncate">{d.title}</div>
                    <div className="text-xs text-[#5a6e82] mt-0.5">{d.size}</div>
                  </div>
                  <Icon name="Download" size={16} className="text-[#9fb3c8] group-hover:text-[#0e63b0] transition-colors shrink-0" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACTS ── */}
      <section id="contacts" className="py-20 bg-[#f4f7fb]">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="section-rule" />
              <div className="tag-blue mb-3">Контакты</div>
              <h2 className="font-display text-[clamp(1.7rem,3vw,2.5rem)] text-[#0d1f35] mb-6 leading-tight">
                Свяжитесь с нами
              </h2>
              <p className="text-[#5a6e82] leading-relaxed mb-8 max-w-md">
                Оставьте заявку — технический менеджер свяжется в течение рабочего дня, проведёт демонстрацию и поможет подобрать конфигурацию под ваше предприятие.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { icon: "MapPin", label: "Адрес", val: "г. Москва, ул. Профсоюзная, 65, офис 318" },
                  { icon: "Phone", label: "Телефон", val: "+7 (495) 123-45-67" },
                  { icon: "Mail", label: "Email", val: "info@пв-система.рф" },
                  { icon: "Globe", label: "Сайт", val: "ПВ-Система.рф" },
                  { icon: "Clock", label: "Режим работы", val: "Пн–Пт 8:00–19:00 МСК" },
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
                  <div className="font-bold text-[#0d1f35]">Заявка на демонстрацию</div>
                  <div className="text-xs text-[#5a6e82]">Ответим в течение рабочего дня</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
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
                <button className="w-full py-3 gradient-blue-btn text-white font-semibold rounded hover:opacity-90 transition-opacity shadow-sm">
                  Отправить заявку
                </button>
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
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img src={LOGO_URL} alt="ПВ-Система" className="h-10 w-10 object-contain" />
                <div>
                  <div className="font-bold text-white">ПВ-Система</div>
                  <div className="text-xs text-[#93c5fd]">Вентиляция и водоснабжение рудников</div>
                </div>
              </div>
              <p className="text-sm text-[#94a3b8] leading-relaxed max-w-xs">
                Программный комплекс для расчёта вентиляции и водоснабжения горно-рудных предприятий и МЧС ВГСЧ. Внесён в Реестр отечественного ПО МинЦифры РФ.
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
                <div>+7 (495) 123-45-67</div>
                <div>info@пв-система.рф</div>
                <div>ПВ-Система.рф</div>
                <div className="mt-3 pt-3 border-t border-white/10">
                  <div className="norm-badge bg-transparent border-white/20 text-[#93c5fd]" style={{ background: "rgba(255,255,255,0.05)" }}>
                    Реестр МинЦифры № 9834
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-[#64748b]">
            <div>© 2024 ООО «ПВ-Система». Все права защищены.</div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white transition-colors">Лицензионное соглашение</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}