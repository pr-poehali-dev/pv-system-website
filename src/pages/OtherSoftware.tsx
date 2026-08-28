import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const LOGO_URL = "https://cdn.poehali.dev/projects/70a8d357-1c4f-4d1c-9bc4-9ce5ff1444a9/bucket/b84c7180-86c1-411c-be61-2bc89b44e202.png";
const APP_SCREENSHOT = "/pv-pdf-screenshot.png";
const DOWNLOAD_URL = "https://cdn.poehali.dev/projects/bd691282-75ee-481f-a896-7c452858c845/bucket/6ceefe6b-1ff5-4531-907b-8951ef448de3.exe";
const PRESENTATION_URL = "/files/PV-Sistema-PDF-Presentation.pdf";

const PROBLEMS = [
  { icon: "CloudUpload", title: "Бесплатные онлайн-сервисы", desc: "Файл загружается на сторонний сервер — контроль над ним теряется." },
  { icon: "CreditCard", title: "Зарубежные подписки", desc: "Ежемесячная оплата в валюте, риск отключения доступа." },
  { icon: "Lock", title: "Сведения ограниченного доступа", desc: "Персональные данные и реквизиты не должны покидать предприятие." },
  { icon: "Blocks", title: "Разрозненные инструменты", desc: "Отдельная программа на просмотр, на конвертацию, на распознавание." },
];

const FEATURES = [
  {
    icon: "Eye",
    title: "Просмотр",
    items: ["Непрерывная прокрутка документа", "Разворот — две страницы рядом", "Подгонка по ширине и по странице", "Панель миниатюр", "Поиск по всему документу"],
  },
  {
    icon: "PenLine",
    title: "Редактирование",
    items: ["Поворот страниц на 90°", "Удаление и перестановка", "Дублирование страниц", "Объединение документов", "Отмена — до 50 шагов"],
  },
  {
    icon: "RefreshCw",
    title: "Конвертация",
    items: ["В Word — редактируемый текст", "В Excel — табличные данные", "В JPG — каждая страница", "В обычный текст TXT", "Распознавание сканов (OCR)"],
  },
  {
    icon: "Scan",
    title: "Сканирование документов",
    items: ["Работа с любым сканером или МФУ", "Сканирование сразу в PDF", "Многостраничный документ одним файлом", "Автоповорот и выравнивание страниц", "Распознавание текста при сканировании"],
  },
];

const SECURITY = [
  { icon: "HardDrive", title: "Локальная обработка", desc: "Файл открывается и обрабатывается на компьютере пользователя." },
  { icon: "EyeOff", title: "Закрашивание данных", desc: "Персональные данные и реквизиты скрываются перед передачей." },
  { icon: "WifiOff", title: "Работа без интернета", desc: "В том числе на удалённых и подземных объектах." },
];

const REASONS = [
  { num: "01", title: "Безопасность", desc: "Обработка на рабочем месте, без передачи файлов" },
  { num: "02", title: "Импортозамещение", desc: "Отечественное ПО без зарубежных подписок" },
  { num: "03", title: "Экономия", desc: "Дешевле зарубежных аналогов с помесячной оплатой" },
  { num: "04", title: "Простота", desc: "Русский интерфейс, обучение меньше часа" },
  { num: "05", title: "Автономность", desc: "Работает без постоянного подключения к сети" },
  { num: "06", title: "Развитие", desc: "Обновления входят в стоимость лицензии" },
];

const PRICING = [
  { seats: "1", perSeat: "12 000", total: "12 000" },
  { seats: "5", perSeat: "9 600", total: "48 000" },
  { seats: "10", perSeat: "8 500", total: "85 000" },
  { seats: "25", perSeat: "7 600", total: "190 000" },
  { seats: "50", perSeat: "6 800", total: "340 000" },
  { seats: "Без ограничения", perSeat: "—", total: "560 000" },
];

const INCLUDED = ["Установка и настройка", "Обучение персонала", "Техническая поддержка", "Все обновления года"];

const COMPARE = [
  { name: "Adobe Acrobat Pro", note: "Подписка в валюте", price: "≈ 20 000 ₽", own: false },
  { name: "Foxit PDF Editor Pro", note: "Лицензия через реселлера", price: "≈ 19 500 ₽", own: false },
  { name: "ПВ-Система PDF", note: "Одно рабочее место", price: "12 000 ₽", own: true },
  { name: "ПВ-Система PDF", note: "При 50 рабочих местах", price: "6 800 ₽", own: true },
];

const STEPS = [
  { num: "01", title: "Заявка", desc: "Обсуждаем количество мест, получаете демоверсию" },
  { num: "02", title: "Договор", desc: "Подписываем и выставляем счёт" },
  { num: "03", title: "Передача", desc: "Ключ активации — 3 рабочих дня после оплаты" },
  { num: "04", title: "Запуск", desc: "Установка, настройка и обучение сотрудников" },
];

const ORDER_URL = "https://functions.poehali.dev/2f5fc8e0-0a17-4e4e-9142-bf9944b2a923";

export default function OtherSoftware() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [form, setForm] = useState({ name: "", org: "", email: "", phone: "", seats: "", msg: "" });
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
      const res = await fetch(ORDER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, product: "ПВ-Система PDF — демоверсия" }),
      });
      if (!res.ok) throw new Error();
      setStatus("ok");
      setForm({ name: "", org: "", email: "", phone: "", seats: "", msg: "" });
    } catch {
      setStatus("err");
    } finally {
      setSending(false);
    }
  };

  const inp = "w-full bg-white border border-[#dce6f0] rounded px-3 py-2.5 text-sm text-[#0d1f35] placeholder:text-[#9fb3c8] focus:outline-none focus:border-[#0e63b0] focus:ring-2 focus:ring-[rgba(14,99,176,0.1)] transition-all";
  const lbl = "block text-xs font-semibold text-[#0d1f35] mb-1.5";

  return (
    <div className="min-h-screen bg-white text-[#0d1f35]">

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-50 bg-white border-b border-[#dce6f0] shadow-sm">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3">
              <img src={LOGO_URL} alt="ПВ-Система" className="h-10 w-10 object-contain rounded-lg" />
              <div>
                <div className="font-bold text-[#0d1f35] text-base leading-none">ПВ-Система</div>
                <div className="text-[10px] text-[#5a6e82] leading-none mt-0.5 tracking-wide">Вентиляция и водоснабжение рудников</div>
              </div>
            </Link>

            <nav className="hidden xl:flex items-center gap-1">
              <Link to="/" className="px-3 py-2 text-sm text-[#5a6e82] hover:text-[#0e63b0] hover:bg-[#f0f7ff] rounded transition-all font-medium">
                Главная
              </Link>
              <span className="px-3 py-2 text-sm text-[#0e63b0] bg-[#f0f7ff] rounded font-semibold">Другое ПО</span>
            </nav>

            <div className="hidden xl:flex items-center gap-3">
              <a href={PRESENTATION_URL} download="ПВ-Система_PDF_Презентация.pdf" className="px-4 py-2 text-sm border border-[#0e63b0] text-[#0e63b0] hover:bg-[#f0f7ff] rounded font-semibold transition-colors">
                Презентация
              </a>
              <a href={DOWNLOAD_URL} download="ПВ-Система-PDF.exe" className="px-4 py-2 text-sm gradient-blue-btn text-white rounded font-semibold hover:opacity-90 transition-opacity shadow-sm">
                Скачать
              </a>
            </div>

            <button className="xl:hidden text-[#5a6e82]" onClick={() => setMenuOpen(!menuOpen)}>
              <Icon name={menuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="xl:hidden border-t border-[#dce6f0] bg-white py-4 px-6 space-y-1">
            <Link to="/" onClick={() => setMenuOpen(false)} className="block px-3 py-2 text-sm text-[#5a6e82] hover:text-[#0e63b0] hover:bg-[#f0f7ff] rounded">Главная</Link>
            <div className="pt-3 flex flex-col gap-2 border-t border-[#dce6f0] mt-2">
              <a href={PRESENTATION_URL} download="ПВ-Система_PDF_Презентация.pdf" className="px-4 py-2 text-sm text-center border border-[#0e63b0] text-[#0e63b0] rounded font-semibold">Презентация</a>
              <a href={DOWNLOAD_URL} download="ПВ-Система-PDF.exe" className="px-4 py-2 text-sm text-center gradient-blue-btn text-white rounded font-semibold">Скачать для Windows</a>
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
              <div className="inline-block text-[11px] font-semibold tracking-[0.15em] text-[#bfdbfe] border border-white/25 rounded px-3 py-1.5 mb-5">
                РОССИЙСКОЕ НАСТОЛЬНОЕ ПО · WINDOWS 10 / 11
              </div>
              <h1 className="font-display leading-tight mb-4 md:mb-5" style={{ letterSpacing: "0.01em" }}>
                <span className="text-[clamp(2rem,5vw,3.2rem)] text-[#7dd3fc]">ПВ-Система PDF</span>
              </h1>
              <p className="text-[#bfdbfe] text-base md:text-lg leading-relaxed mb-7 md:mb-8 max-w-lg mx-auto lg:mx-0">
                Просмотр, редактирование и конвертация документов PDF на рабочем месте — без передачи файлов в интернет.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3">
                <a href={DOWNLOAD_URL} download="ПВ-Система-PDF.exe" className="px-6 py-3 bg-white text-[#0e63b0] font-semibold rounded hover:bg-[#f0f7ff] transition-colors shadow-md flex items-center justify-center gap-2">
                  <Icon name="MonitorDown" size={16} />
                  Скачать для Windows
                </a>
                <a href={PRESENTATION_URL} download="ПВ-Система_PDF_Презентация.pdf" className="px-6 py-3 border-2 border-white/40 text-white font-semibold rounded hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                  <Icon name="Download" size={16} />
                  Презентация
                </a>
              </div>
              <p className="text-xs text-[#bfdbfe] mt-3 flex items-center justify-center lg:justify-start gap-2">
                <Icon name="Monitor" size={13} />
                Windows 10 / 11 · 64-бит · 88 МБ
              </p>
            </div>

            <div className="relative mt-6 lg:mt-0">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden shadow-2xl">
                <img src={APP_SCREENSHOT} alt="Рабочее окно программы ПВ-Система PDF" className="w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="section-rule mx-auto" />
            <div className="tag-blue mb-3">Задача</div>
            <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] text-[#0d1f35]">
              Документы уходят на чужие серверы
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {PROBLEMS.map(p => (
              <div key={p.title} className="bg-[#f4f7fb] border border-[#dce6f0] rounded-xl p-6">
                <div className="icon-box mb-4">
                  <Icon name={p.icon as "Lock"} size={20} style={{ color: "#0e63b0" }} />
                </div>
                <h3 className="font-semibold text-[#0d1f35] text-sm mb-2 leading-snug">{p.title}</h3>
                <p className="text-[#5a6e82] text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLUTION ── */}
      <section className="py-14 bg-[#f4f7fb] border-y border-[#dce6f0]">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="section-rule mx-auto" />
          <div className="tag-blue mb-3">Решение</div>
          <h2 className="font-display text-[clamp(1.5rem,2.8vw,2.2rem)] text-[#0d1f35] mb-4 leading-snug">
            Всё, что нужно для работы с PDF — в одной программе на вашем компьютере
          </h2>
          <p className="text-[#5a6e82] leading-relaxed max-w-2xl mx-auto">
            Файлы обрабатываются локально и никуда не передаются. Интернет нужен только для проверки обновлений — программа полноценно работает и без него.
          </p>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="section-rule mx-auto" />
            <div className="tag-blue mb-3">Возможности</div>
            <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] text-[#0d1f35]">Что умеет программа</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {FEATURES.map(f => (
              <div key={f.title} className="card-white rounded-xl p-6">
                <div className="icon-box mb-4">
                  <Icon name={f.icon as "Eye"} size={22} style={{ color: "#0e63b0" }} />
                </div>
                <h3 className="font-semibold text-[#0d1f35] text-base mb-4">{f.title}</h3>
                <div className="space-y-2.5">
                  {f.items.map(i => (
                    <div key={i} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-[#e8f4fd] border border-[#bee3f8] flex items-center justify-center shrink-0 mt-0.5">
                        <Icon name="Check" size={9} style={{ color: "#0e63b0" }} />
                      </div>
                      <span className="text-xs text-[#5a6e82] leading-relaxed">{i}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTERFACE ── */}
      <section className="py-16 md:py-20 bg-[#f4f7fb]">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <div className="section-rule" />
              <div className="tag-blue mb-3">Интерфейс</div>
              <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] text-[#0d1f35] mb-6 leading-tight">
                Привычно с первого запуска
              </h2>
              <div className="space-y-3">
                {["Полностью на русском языке", "Вкладки — как в браузере", "Обучение сотрудника — меньше часа", "Горячие клавиши как в привычных программах"].map(t => (
                  <div key={t} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#e8f4fd] border border-[#bee3f8] flex items-center justify-center shrink-0">
                      <Icon name="Check" size={11} style={{ color: "#0e63b0" }} />
                    </div>
                    <span className="text-sm text-[#0d1f35]">{t}</span>
                  </div>
                ))}
              </div>
              <a href={DOWNLOAD_URL} download="ПВ-Система-PDF.exe" className="inline-flex items-center gap-2 mt-7 px-5 py-3 gradient-blue-btn text-white rounded font-semibold hover:opacity-90 transition-opacity shadow-sm text-sm">
                <Icon name="MonitorDown" size={16} />
                Скачать программу для Windows
              </a>
              <p className="text-xs text-[#5a6e82] mt-2.5 flex items-center gap-2">
                <Icon name="Monitor" size={13} />
                Windows 10 / 11 · 64-бит · 88 МБ
              </p>
            </div>
            <div className="rounded-xl border border-[#dce6f0] shadow-md overflow-hidden bg-white">
              <img src={APP_SCREENSHOT} alt="Рабочее окно программы" className="w-full object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECURITY ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="section-rule mx-auto" />
            <div className="tag-blue mb-3">Безопасность</div>
            <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] text-[#0d1f35]">Документ не покидает периметр</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {SECURITY.map(s => (
              <div key={s.title} className="bg-[#f4f7fb] border border-[#dce6f0] rounded-xl p-6 text-center">
                <div className="icon-box mx-auto mb-4">
                  <Icon name={s.icon as "HardDrive"} size={22} style={{ color: "#0e63b0" }} />
                </div>
                <h3 className="font-semibold text-[#0d1f35] text-sm mb-2">{s.title}</h3>
                <p className="text-[#5a6e82] text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REASONS ── */}
      <section className="py-16 md:py-20 bg-[#f4f7fb]">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="section-rule mx-auto" />
            <div className="tag-blue mb-3">Почему мы</div>
            <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] text-[#0d1f35]">Шесть причин выбрать ПВ-Систему PDF</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {REASONS.map(r => (
              <div key={r.num} className="card-white rounded-xl p-6">
                <div className="font-display text-2xl text-[#0e63b0] mb-3">{r.num}</div>
                <h3 className="font-semibold text-[#0d1f35] text-sm mb-1.5">{r.title}</h3>
                <p className="text-[#5a6e82] text-xs leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="section-rule mx-auto" />
            <div className="tag-blue mb-3">Стоимость</div>
            <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] text-[#0d1f35]">Годовая лицензия</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="lg:col-span-2 rounded-xl border border-[#dce6f0] overflow-hidden shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#f4f7fb] text-[10px] uppercase tracking-wide text-[#5a6e82]">
                    <th className="text-left font-semibold px-5 py-3">Рабочих мест</th>
                    <th className="text-right font-semibold px-5 py-3">Цена за место</th>
                    <th className="text-right font-semibold px-5 py-3">Стоимость в год</th>
                  </tr>
                </thead>
                <tbody>
                  {PRICING.map(p => (
                    <tr key={p.seats} className="border-t border-[#dce6f0]">
                      <td className="px-5 py-3.5 font-medium text-[#0d1f35]">{p.seats}</td>
                      <td className="px-5 py-3.5 text-right text-[#5a6e82]">{p.perSeat}</td>
                      <td className="px-5 py-3.5 text-right font-semibold text-[#0e63b0]">{p.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="bg-[#f4f7fb] border-t border-[#dce6f0] px-5 py-3 text-[11px] text-[#9fb3c8] leading-relaxed">
                Цены в рублях за год. Без НДС (п. 26 ч. 2 ст. 149 НК РФ). Лицензия корпоративная, срок — 1 год.
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-[#f4f7fb] border border-[#dce6f0] rounded-xl p-6">
                <div className="text-xs font-semibold text-[#5a6e82] uppercase tracking-wide mb-4">В стоимость входит</div>
                <div className="space-y-2.5">
                  {INCLUDED.map(i => (
                    <div key={i} className="flex items-center gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-[#e8f4fd] border border-[#bee3f8] flex items-center justify-center shrink-0">
                        <Icon name="Check" size={9} style={{ color: "#0e63b0" }} />
                      </div>
                      <span className="text-xs text-[#0d1f35]">{i}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="gradient-blue-btn text-white rounded-xl p-6 text-center shadow-sm">
                <Icon name="Percent" size={22} className="mx-auto mb-2" />
                <div className="font-display text-xl mb-1">Скидка 10 %</div>
                <div className="text-xs text-white/85"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPARE ── */}
      <section className="py-16 md:py-20 bg-[#f4f7fb]">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="section-rule mx-auto" />
            <div className="tag-blue mb-3">Сравнение</div>
            <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] text-[#0d1f35]">Цена за одно рабочее место в год</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto mb-6">
            {COMPARE.map((c, i) => (
              <div key={i} className={`rounded-xl p-6 text-center border ${c.own ? "bg-white border-[#0e63b0] shadow-md" : "bg-white border-[#dce6f0]"}`}>
                <div className={`font-display text-2xl mb-2 ${c.own ? "text-[#0e63b0]" : "text-[#9fb3c8]"}`}>{c.price}</div>
                <div className="font-semibold text-[#0d1f35] text-sm mb-1">{c.name}</div>
                <div className="text-[#5a6e82] text-xs">{c.note}</div>
              </div>
            ))}
          </div>
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 bg-[#e8f4fd] border border-[#bee3f8] rounded-xl p-5">
            <span className="font-display text-2xl text-[#0e63b0]">×3</span>
            <span className="text-sm text-[#0d1f35] font-medium">дешевле при 50 рабочих местах</span>
          </div>
          <p className="text-[11px] text-[#9fb3c8] text-center mt-4 max-w-2xl mx-auto">
            Цены зарубежных продуктов ориентировочные, по открытым данным. Подписки оплачиваются в валюте.
          </p>
        </div>
      </section>

      {/* ── STEPS ── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="section-rule mx-auto" />
            <div className="tag-blue mb-3">Как начать</div>
            <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] text-[#0d1f35]">Четыре шага до рабочих мест</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {STEPS.map(s => (
              <div key={s.num} className="bg-[#f4f7fb] border border-[#dce6f0] rounded-xl p-6">
                <div className="font-display text-2xl text-[#0e63b0] mb-3">{s.num}</div>
                <h3 className="font-semibold text-[#0d1f35] text-sm mb-1.5">{s.title}</h3>
                <p className="text-[#5a6e82] text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REQUEST ── */}
      <section id="request" className="py-16 md:py-20 gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 70% 40%, rgba(255,255,255,0.3) 0%, transparent 55%)" }} />
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">

            <div>
              <div className="text-[11px] font-semibold tracking-[0.15em] text-[#bfdbfe] mb-3">КОНТАКТЫ</div>
              <h2 className="font-display text-[clamp(1.7rem,3.2vw,2.6rem)] text-[#7dd3fc] mb-4">Запросите демоверсию</h2>
              <p className="text-[#bfdbfe] text-sm leading-relaxed mb-8">
                Оставьте заявку — обсудим количество рабочих мест, пришлём демоверсию и коммерческое предложение.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { icon: "Phone", label: "Телефон", val: "+7 (905) 005-36-19", val2: "+7 (933) 044-70-17" },
                  { icon: "Mail", label: "Электронная почта", val: "pvsistema@mail.ru" },
                  { icon: "Globe", label: "Сайт", val: "пвсистема.рф" },
                ].map(c => (
                  <div key={c.label} className="flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
                    <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
                      <Icon name={c.icon as "Phone"} size={18} className="text-[#7dd3fc]" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-wide text-[#bfdbfe] mb-0.5">{c.label}</div>
                      <div className="text-sm font-medium text-white">{c.val}</div>
                      {c.val2 && <div className="text-sm font-medium text-white mt-0.5">{c.val2}</div>}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <a href={DOWNLOAD_URL} download="ПВ-Система-PDF.exe" className="px-5 py-2.5 bg-white text-[#0e63b0] font-semibold rounded hover:bg-[#f0f7ff] transition-colors shadow-md flex items-center justify-center gap-2 text-sm">
                  <Icon name="MonitorDown" size={15} />
                  Скачать для Windows
                </a>
                <a href={PRESENTATION_URL} download="ПВ-Система_PDF_Презентация.pdf" className="px-5 py-2.5 border-2 border-white/40 text-white font-semibold rounded hover:bg-white/10 transition-colors flex items-center justify-center gap-2 text-sm">
                  <Icon name="Download" size={15} />
                  Скачать презентацию
                </a>
              </div>
              <p className="text-xs text-[#bfdbfe] mb-6 flex items-center gap-2 -mt-3">
                <Icon name="Monitor" size={13} />
                Windows 10 / 11 · 64-бит · 88 МБ
              </p>

              <p className="text-xs text-[#bfdbfe]">
                АНО ДПО «Учебный центр ГорГазНефть» · г. Сибай, ул. Куйбышева, д. 20, офис 32
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 md:p-8 shadow-xl">
              <h3 className="font-display text-lg text-[#0d1f35] mb-1">Заявка на демоверсию</h3>
              <p className="text-[#5a6e82] text-xs mb-6">Ответим в течение рабочего дня</p>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={lbl}>Ваше имя *</label>
                    <input type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Иван Петров" className={inp} />
                  </div>
                  <div>
                    <label className={lbl}>Организация</label>
                    <input type="text" value={form.org} onChange={e => setForm({ ...form, org: e.target.value })} placeholder="ОАО «Рудник»" className={inp} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={lbl}>Электронная почта</label>
                    <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="ivan@mine.ru" className={inp} />
                  </div>
                  <div>
                    <label className={lbl}>Телефон</label>
                    <input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+7 (___) ___-__-__" className={inp} />
                  </div>
                </div>
                <div>
                  <label className={lbl}>Количество рабочих мест</label>
                  <select value={form.seats} onChange={e => setForm({ ...form, seats: e.target.value })} className={inp}>
                    <option value="">Пока не определились</option>
                    <option value="1 рабочее место">1 рабочее место</option>
                    <option value="до 5 рабочих мест">до 5 рабочих мест</option>
                    <option value="до 10 рабочих мест">до 10 рабочих мест</option>
                    <option value="до 25 рабочих мест">до 25 рабочих мест</option>
                    <option value="до 50 рабочих мест">до 50 рабочих мест</option>
                    <option value="без ограничения">без ограничения</option>
                  </select>
                </div>
                <div>
                  <label className={lbl}>Комментарий</label>
                  <textarea value={form.msg} onChange={e => setForm({ ...form, msg: e.target.value })}
                    placeholder="Задачи, сроки, особые условия" rows={3} className={inp + " resize-none"} />
                </div>

                <button onClick={submitOrder} disabled={sending} className="w-full py-3 gradient-blue-btn text-white font-semibold rounded hover:opacity-90 transition-opacity shadow-sm disabled:opacity-60 disabled:cursor-not-allowed">
                  {sending ? "Отправляем…" : "Запросить демоверсию"}
                </button>

                {status === "ok" && (
                  <div className="flex items-start gap-2.5 bg-[#e8f7ee] border border-[#a7e0bd] rounded p-3">
                    <Icon name="CircleCheck" size={16} style={{ color: "#1a7f43" }} className="shrink-0 mt-0.5" />
                    <span className="text-xs text-[#1a7f43] leading-relaxed">Заявка отправлена. Свяжемся с вами в ближайшее время.</span>
                  </div>
                )}
                {status === "err" && (
                  <div className="flex items-start gap-2.5 bg-[#fdeaea] border border-[#f2b8b8] rounded p-3">
                    <Icon name="CircleAlert" size={16} style={{ color: "#c0392b" }} className="shrink-0 mt-0.5" />
                    <span className="text-xs text-[#c0392b] leading-relaxed">Укажите имя и хотя бы один контакт — почту или телефон.</span>
                  </div>
                )}

                <p className="text-[11px] text-[#9fb3c8] leading-relaxed">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#0d1f35] text-white py-10">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Link to="/" className="flex items-center gap-3">
              <img src={LOGO_URL} alt="ПВ-Система" className="h-9 w-9 object-contain" />
              <div>
                <div className="font-bold text-white text-sm">ПВ-Система</div>
                <div className="text-[11px] text-[#93c5fd]">Вернуться на главную</div>
              </div>
            </Link>
            <div className="text-xs text-[#64748b]">© 2026 ООО «ПВ-Система». Все права защищены.</div>
          </div>
        </div>
      </footer>

    </div>
  );
}