import { useState } from "react";
import Icon from "@/components/ui/icon";

const LOGO_URL = "https://cdn.poehali.dev/projects/70a8d357-1c4f-4d1c-9bc4-9ce5ff1444a9/bucket/b5485825-6cc8-49fc-89a6-1a38d1cf22ac.jpg";
const IMG_MINE = "https://cdn.poehali.dev/projects/70a8d357-1c4f-4d1c-9bc4-9ce5ff1444a9/files/4b787e51-4a6a-4829-82e3-959df648569e.jpg";
const IMG_AERIAL = "https://cdn.poehali.dev/projects/70a8d357-1c4f-4d1c-9bc4-9ce5ff1444a9/files/05246733-bedc-49ca-bf10-b5026f53d231.jpg";
const IMG_DASHBOARD = "https://cdn.poehali.dev/projects/70a8d357-1c4f-4d1c-9bc4-9ce5ff1444a9/files/4539b730-ac55-4690-8485-ee72c2958f14.jpg";

const NAV = [
  { label: "О программе", href: "#about" },
  { label: "Возможности", href: "#modules" },
  { label: "Калькулятор", href: "#calculator" },
  { label: "Документация", href: "#docs" },
  { label: "Кейсы", href: "#cases" },
  { label: "Стоимость", href: "#pricing" },
  { label: "Контакты", href: "#contacts" },
];

const MODULES = [
  { icon: "Wind", code: "АЭР-01", title: "Вентиляционная сеть", desc: "Аэродинамический расчёт методом Харди–Кросса. Депрессия, сопротивления и распределение расходов воздуха по выработкам" },
  { icon: "Gauge", code: "АЭР-02", title: "Проветривание тупиков", desc: "Местное проветривание тупиковых выработок. Подбор ВМП, диаметра и длины вентиляционных труб" },
  { icon: "Flame", code: "ГАЗ-01", title: "Газовый баланс", desc: "Расчёт поступления CO, CO₂, NO₂, H₂S и других вредных газов. Разбавление до ПДК по ФНП на горно-рудных предприятиях" },
  { icon: "Droplets", code: "ВОД-01", title: "Водоотлив и водоснабжение", desc: "Гидравлический расчёт шахтного водоотлива, пожарно-орошаемого водоснабжения и трубопроводов" },
  { icon: "Thermometer", code: "КЛМ-01", title: "Тепловой расчёт", desc: "Прогноз тепловлажностных условий в забоях. Расчёт потребности в кондиционировании рудничного воздуха" },
  { icon: "Shield", code: "ПБ-01", title: "Пожарная безопасность", desc: "Моделирование пожарной депрессии, реверса вентилятора, аварийного проветривания для ПЛА" },
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

const CASES = [
  {
    title: "Рудник «Таймырский»",
    company: "Норникель",
    type: "Медно-никелевый рудник",
    depth: "1 100 м",
    task: "Проектирование схемы вентиляции нового горизонта с тепловым расчётом забоев и водоснабжением",
    result: "Снижение затрат на кондиционирование на 31%, заключение Ростехнадзора получено",
    img: IMG_MINE,
  },
  {
    title: "Рудник «Беларуськалий»",
    company: "Беларуськалий",
    type: "Калийный рудник",
    depth: "340 м",
    task: "Разработка ПЛА для ВГСЧ с моделированием аварийного проветривания и реверса вентилятора",
    result: "Время разработки ПЛА сокращено с 3 месяцев до 18 дней",
    img: IMG_DASHBOARD,
  },
  {
    title: "ВГСЧ «Центроспас-Борец»",
    company: "МЧС России",
    type: "Горноспасательный отряд",
    depth: "Рудники до 800 м",
    task: "Расчёт параметров аварийного проветривания и водоснабжения для разработки оперативных планов",
    result: "Сокращение времени подготовки оперативной документации на 70%",
    img: IMG_AERIAL,
  },
];

const DOCS = [
  { title: "Руководство пользователя", size: "PDF · 6.8 МБ", icon: "BookOpen" },
  { title: "Методика аэродинамического расчёта", size: "PDF · 3.2 МБ", icon: "Calculator" },
  { title: "Нормативная база — описание", size: "PDF · 1.4 МБ", icon: "Shield" },
  { title: "Инструкция по депрессионной съёмке", size: "PDF · 2.0 МБ", icon: "Gauge" },
  { title: "API и интеграция с AutoCAD / Renga", size: "HTML", icon: "Code" },
  { title: "Видеокурс (12 уроков)", size: "YouTube плейлист", icon: "Play" },
];

const PRICING = [
  {
    name: "Базовый",
    price: "24 900",
    period: "/ год",
    badge: null,
    desc: "Для одного инженера или небольшого предприятия",
    features: ["1 рабочее место", "Модули АЭР-01, АЭР-02, ВОД-01", "Генерация отчётов PDF/DOCX", "Email-поддержка", "Обновления нормативной базы"],
    highlight: false,
  },
  {
    name: "Предприятие",
    price: "89 000",
    period: "/ год",
    badge: "ПОПУЛЯРНЫЙ",
    desc: "Для проектного отдела горного предприятия",
    features: ["10 рабочих мест", "Все 8 модулей расчётов", "ПЛА и вентиляционные схемы", "Приоритетная поддержка + выезд", "Обучение персонала (16 ч)", "Сопровождение в Ростехнадзоре"],
    highlight: true,
  },
  {
    name: "Холдинг / МЧС",
    price: "По запросу",
    period: "",
    badge: null,
    desc: "Для управляющих компаний, проектных институтов и подразделений ВГСЧ",
    features: ["Неограниченное число мест", "Сервер-версия (on-premise)", "Кастомизация под стандарты ВГСЧ", "SLA 99.9% · выделенный инженер", "Интеграция с АСУТП рудника", "Корпоративное обучение"],
    highlight: false,
  },
];

// ── CALCULATOR ────────────────────────────────────────────────────────────────

function Calculator() {
  const [tab, setTab] = useState<"vent" | "water" | "gas">("vent");
  const [length, setLength] = useState("");
  const [section, setSection] = useState("");
  const [airflow, setAirflow] = useState("");
  const [roughness, setRoughness] = useState("0.25");
  const [levels, setLevels] = useState("");
  const [inflow, setInflow] = useState("");
  const [pipeDiam, setPipeDiam] = useState("");
  const [workers, setWorkers] = useState("");
  const [shotfiring, setShotfiring] = useState("yes");
  const [blastAmount, setBlastAmount] = useState("");
  const [mineType, setMineType] = useState("ore");

  const calcVent = () => {
    const L = parseFloat(length), S = parseFloat(section), Q = parseFloat(airflow), K = parseFloat(roughness);
    if (!L || !S || !Q) return null;
    const v = Q / S;
    const dh = 2 * Math.sqrt(S / Math.PI);
    const lambda = 0.3 / Math.pow((v * dh / 0.000015), 0.25) + 0.00025 * K;
    const R = (lambda * L) / (S * S * dh * 2 * 1.2);
    const depr = Math.round(R * Q * Q);
    const vms = v.toFixed(2);
    const ok = v < 4 ? { t: "Норма (до 4 м/с)", c: "#16a34a" } : v < 8 ? { t: "Повышенная скорость", c: "#d97706" } : { t: "Превышение нормы ФНП!", c: "#dc2626" };
    return { depr, vms, R: R.toFixed(5), ...ok };
  };

  const calcWater = () => {
    const lv = parseFloat(levels), inf = parseFloat(inflow), pd = parseFloat(pipeDiam);
    if (!lv || !inf) return null;
    const qMax = Math.ceil(inf * 1.5);
    const power = Math.round((qMax / 3600) * 1000 * 9.81 * lv * 1.2 / 1000 / 0.7);
    const velocity = pd ? ((qMax / 3600) / (Math.PI * Math.pow(pd / 2000, 2))).toFixed(2) : null;
    return { qNormal: inf, qMax, power, velocity };
  };

  const calcGas = () => {
    const w = parseFloat(workers), b = parseFloat(blastAmount);
    if (!w) return null;
    const qPeople = w * 6;
    const qBlast = shotfiring === "yes" && b ? Math.ceil(b * 40 / 20) : 0;
    const qMin = mineType === "deep" ? w * 1.5 * 60 : w * 1.2 * 60;
    const qFinal = Math.ceil(Math.max(qPeople + qBlast, qMin) / 50) * 50;
    return { qPeople, qBlast, qMin: Math.round(qMin), qFinal };
  };

  const vr = calcVent(), wr = calcWater(), gr = calcGas();

  const inp = "w-full bg-white border border-[#dce6f0] rounded px-3 py-2.5 text-sm text-[#0d1f35] placeholder:text-[#9fb3c8] focus:outline-none focus:border-[#0e63b0] focus:ring-2 focus:ring-[rgba(14,99,176,0.1)] transition-all";
  const labelCls = "block text-xs font-semibold text-[#5a6e82] uppercase tracking-wide mb-1.5";

  const TABS = [
    { id: "vent" as const, label: "Вентсеть" },
    { id: "water" as const, label: "Водоотлив" },
    { id: "gas" as const, label: "Газовый баланс" },
  ];

  return (
    <div className="bg-white rounded-lg border border-[#dce6f0] shadow-sm overflow-hidden">
      <div className="border-b border-[#dce6f0] flex">
        {TABS.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)}
            className={`px-6 py-3.5 text-sm font-semibold transition-all border-b-2 ${
              tab === t.id
                ? "border-[#0e63b0] text-[#0e63b0] bg-[#f0f7ff]"
                : "border-transparent text-[#5a6e82] hover:text-[#0e63b0] hover:bg-[#f8fbff]"
            }`}>
            {t.label}
          </button>
        ))}
      </div>

      <div className="p-6">
        {tab === "vent" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div><label className={labelCls}>Длина выработки, м</label><input type="number" value={length} onChange={e => setLength(e.target.value)} placeholder="например: 850" className={inp} /></div>
              <div><label className={labelCls}>Площадь сечения, м²</label><input type="number" value={section} onChange={e => setSection(e.target.value)} placeholder="например: 12.5" className={inp} /></div>
              <div><label className={labelCls}>Расход воздуха, м³/с</label><input type="number" value={airflow} onChange={e => setAirflow(e.target.value)} placeholder="например: 18" className={inp} /></div>
              <div>
                <label className={labelCls}>Шероховатость стенок α</label>
                <select value={roughness} onChange={e => setRoughness(e.target.value)} className={inp}>
                  <option value="0.15">0.15 — крепь металлическая</option>
                  <option value="0.25">0.25 — бетонная затяжка</option>
                  <option value="0.40">0.40 — набрызг-бетон</option>
                  <option value="0.60">0.60 — без крепи (скальные породы)</option>
                  <option value="0.90">0.90 — деревянная крепь</option>
                </select>
              </div>
            </div>
            <div className="bg-[#f4f7fb] rounded-lg p-5">
              {vr ? (
                <div>
                  <div className="text-xs font-semibold text-[#0e63b0] uppercase tracking-wide mb-4">Результаты расчёта</div>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 border border-[#dce6f0]">
                      <div className="text-xs text-[#5a6e82] mb-1">Депрессия выработки</div>
                      <div className="text-3xl font-bold text-[#0d1f35]">{vr.depr} <span className="text-base font-normal text-[#5a6e82]">Па</span></div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-[#dce6f0]">
                      <div className="text-xs text-[#5a6e82] mb-1">Скорость воздуха</div>
                      <div className="text-2xl font-bold text-[#0e63b0]">{vr.vms} <span className="text-base font-normal text-[#5a6e82]">м/с</span></div>
                      <div className="text-xs font-semibold mt-1" style={{ color: vr.c }}>{vr.t}</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-[#dce6f0]">
                      <div className="text-xs text-[#5a6e82] mb-1">Аэродинамическое сопротивление R</div>
                      <div className="text-lg font-bold text-[#0d1f35] font-mono">{vr.R} <span className="text-xs font-normal text-[#5a6e82]">кг/м⁷</span></div>
                    </div>
                    <div className="text-xs text-[#5a6e82] bg-[#e8f4fd] rounded p-3" style={{ borderLeft: "3px solid #0e63b0" }}>
                      Расчёт по РД 06-356-00. Нормы: до 4 м/с в тупиковых, до 8 м/с в сквозных выработках рудников.
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full py-8 text-center">
                  <div className="icon-box mb-3"><Icon name="Wind" size={24} style={{ color: "#0e63b0" }} /></div>
                  <p className="text-sm text-[#5a6e82]">Введите параметры выработки<br />для расчёта депрессии</p>
                </div>
              )}
            </div>
          </div>
        )}

        {tab === "water" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div><label className={labelCls}>Глубина водоотлива, м</label><input type="number" value={levels} onChange={e => setLevels(e.target.value)} placeholder="например: 480" className={inp} /></div>
              <div><label className={labelCls}>Нормальный приток воды, м³/ч</label><input type="number" value={inflow} onChange={e => setInflow(e.target.value)} placeholder="например: 120" className={inp} /></div>
              <div><label className={labelCls}>Диаметр трубопровода, мм (опц.)</label><input type="number" value={pipeDiam} onChange={e => setPipeDiam(e.target.value)} placeholder="например: 200" className={inp} /></div>
            </div>
            <div className="bg-[#f4f7fb] rounded-lg p-5">
              {wr ? (
                <div>
                  <div className="text-xs font-semibold text-[#0e63b0] uppercase tracking-wide mb-4">Результаты расчёта</div>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-4 border border-[#dce6f0]">
                      <div className="text-xs text-[#5a6e82] mb-1">Нормальный приток</div>
                      <div className="text-3xl font-bold text-[#0d1f35]">{wr.qNormal} <span className="text-base font-normal text-[#5a6e82]">м³/ч</span></div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-[#dce6f0]">
                      <div className="text-xs text-[#5a6e82] mb-1">Максимальный приток (×1.5)</div>
                      <div className="text-2xl font-bold text-[#0e63b0]">{wr.qMax} <span className="text-base font-normal text-[#5a6e82]">м³/ч</span></div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-[#dce6f0]">
                      <div className="text-xs text-[#5a6e82] mb-1">Требуемая мощность насоса</div>
                      <div className="text-2xl font-bold text-[#0d1f35]">{wr.power} <span className="text-base font-normal text-[#5a6e82]">кВт</span></div>
                    </div>
                    {wr.velocity && (
                      <div className="bg-white rounded-lg p-4 border border-[#dce6f0]">
                        <div className="text-xs text-[#5a6e82] mb-1">Скорость в трубопроводе</div>
                        <div className="text-xl font-bold text-[#0d1f35]">{wr.velocity} <span className="text-sm font-normal text-[#5a6e82]">м/с</span></div>
                      </div>
                    )}
                    <div className="text-xs text-[#5a6e82]" style={{ borderLeft: "3px solid #0e63b0", paddingLeft: "10px", background: "#e8f4fd", padding: "10px 10px 10px 13px", borderRadius: "4px" }}>
                      По ФНП и ЕПБ. КПД насоса — 0.70. Коэффициент запаса по максимальному притоку — 1.5.
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full py-8 text-center">
                  <div className="icon-box mb-3"><Icon name="Droplets" size={24} style={{ color: "#0e63b0" }} /></div>
                  <p className="text-sm text-[#5a6e82]">Введите глубину и приток воды<br />для расчёта водоотлива</p>
                </div>
              )}
            </div>
          </div>
        )}

        {tab === "gas" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <label className={labelCls}>Тип предприятия</label>
                <select value={mineType} onChange={e => setMineType(e.target.value)} className={inp}>
                  <option value="ore">Рудник (медь, никель, золото, железо)</option>
                  <option value="potash">Калийный / соляной рудник</option>
                  <option value="deep">Глубокий рудник (более 700 м)</option>
                  <option value="emergency">ВГСЧ / аварийный расчёт</option>
                </select>
              </div>
              <div><label className={labelCls}>Число работающих в смене, чел.</label><input type="number" value={workers} onChange={e => setWorkers(e.target.value)} placeholder="например: 45" className={inp} /></div>
              <div>
                <label className={labelCls}>Взрывные работы в смене</label>
                <select value={shotfiring} onChange={e => setShotfiring(e.target.value)} className={inp}>
                  <option value="yes">Да</option>
                  <option value="no">Нет</option>
                </select>
              </div>
              {shotfiring === "yes" && (
                <div><label className={labelCls}>Масса ВВ, кг</label><input type="number" value={blastAmount} onChange={e => setBlastAmount(e.target.value)} placeholder="например: 120" className={inp} /></div>
              )}
            </div>
            <div className="bg-[#f4f7fb] rounded-lg p-5">
              {gr ? (
                <div>
                  <div className="text-xs font-semibold text-[#0e63b0] uppercase tracking-wide mb-4">Минимальный расход воздуха</div>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-4 border border-[#dce6f0]">
                      <div className="text-xs text-[#5a6e82] mb-1">По числу работающих</div>
                      <div className="text-2xl font-bold text-[#0d1f35]">{gr.qPeople} <span className="text-sm font-normal text-[#5a6e82]">м³/мин</span></div>
                    </div>
                    {gr.qBlast > 0 && (
                      <div className="bg-white rounded-lg p-4 border border-[#dce6f0]">
                        <div className="text-xs text-[#5a6e82] mb-1">По взрывным работам</div>
                        <div className="text-2xl font-bold text-[#d97706]">{gr.qBlast} <span className="text-sm font-normal text-[#5a6e82]">м³/мин</span></div>
                      </div>
                    )}
                    <div className="bg-white rounded-lg p-4 border border-[#dce6f0]">
                      <div className="text-xs text-[#5a6e82] mb-1">Норма ФНП</div>
                      <div className="text-xl font-bold text-[#0d1f35]">{gr.qMin} <span className="text-sm font-normal text-[#5a6e82]">м³/мин</span></div>
                    </div>
                    <div className="bg-[#0e63b0] rounded-lg p-4">
                      <div className="text-xs text-[#93c5fd] mb-1">Принятый расход воздуха</div>
                      <div className="text-3xl font-bold text-white">{gr.qFinal} <span className="text-base font-normal text-[#93c5fd]">м³/мин</span></div>
                      <div className="text-xs text-green-300 font-semibold mt-1">✓ ПДК по вредным газам обеспечено</div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full py-8 text-center">
                  <div className="icon-box mb-3"><Icon name="Flame" size={24} style={{ color: "#0e63b0" }} /></div>
                  <p className="text-sm text-[#5a6e82]">Укажите параметры предприятия<br />для расчёта газового баланса</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ── MAIN PAGE ─────────────────────────────────────────────────────────────────

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
            {/* Logo */}
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
              <a href="#contacts" className="px-4 py-2 text-sm border border-[#0e63b0] text-[#0e63b0] hover:bg-[#f0f7ff] rounded font-semibold transition-colors">
                Демо-версия
              </a>
              <a href="#pricing" className="px-4 py-2 text-sm gradient-blue-btn text-white rounded font-semibold hover:opacity-90 transition-opacity shadow-sm">
                Приобрести
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
              <a href="#pricing" className="px-4 py-2 text-sm text-center gradient-blue-btn text-white rounded font-semibold">Приобрести</a>
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
              <div className="flex items-center gap-2 mb-5 anim-0">
                <div className="status-dot" />
                <span className="text-xs font-mono text-[#93c5fd] tracking-wider uppercase">v5.1 · Нормативная база актуализирована 2024</span>
              </div>

              <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-tight mb-5 anim-1" style={{ letterSpacing: "0.01em" }}>
                Программный комплекс<br />
                <span className="text-[#7dd3fc]">ПВ-Система</span>
              </h1>

              <p className="text-[#bfdbfe] text-lg leading-relaxed mb-3 max-w-lg anim-2">
                Расчёт вентиляции горно-рудных предприятий, водоотлива и водоснабжения рудников.
                Документация для Ростехнадзора и подразделений МЧС ВГСЧ.
              </p>
              <p className="text-[#93c5fd] text-sm mb-8 anim-2">
                Включён в Реестр отечественного программного обеспечения Министерства цифрового развития РФ.
              </p>

              <div className="flex flex-wrap gap-3 anim-3">
                <a href="#contacts" className="px-6 py-3 bg-white text-[#0e63b0] font-semibold rounded hover:bg-[#f0f7ff] transition-colors shadow-md flex items-center gap-2">
                  <Icon name="Play" size={16} />
                  Запросить демо
                </a>
                <a href="#calculator" className="px-6 py-3 border-2 border-white/40 text-white font-semibold rounded hover:bg-white/10 transition-colors flex items-center gap-2">
                  <Icon name="Calculator" size={16} />
                  Онлайн-расчёт
                </a>
                <a href="#docs" className="px-6 py-3 border-2 border-white/40 text-white font-semibold rounded hover:bg-white/10 transition-colors flex items-center gap-2">
                  <Icon name="Download" size={16} />
                  Скачать демо
                </a>
              </div>
            </div>

            <div className="relative anim-2 hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden shadow-2xl">
                <img src={IMG_MINE} alt="ПВ-Система в работе" className="w-full aspect-[4/3] object-cover opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[rgba(10,77,138,0.9)]">
                  <div className="flex flex-wrap gap-2">
                    {NORMS.slice(0, 4).map(n => (
                      <span key={n} className="norm-badge bg-white/10 border-white/20 text-white" style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.25)", color: "#e0f2fe" }}>{n.split("«")[0]}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14 pt-10 border-t border-white/20 anim-3">
            {ADVANTAGES.map(a => (
              <div key={a.num} className="text-center">
                <div className="text-3xl font-display font-bold text-white mb-1">{a.num}</div>
                <div className="text-sm font-semibold text-[#7dd3fc]">{a.label}</div>
                <div className="text-xs text-[#93c5fd] mt-0.5">{a.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── НОРМ-СТРИП ── */}
      <div className="bg-[#f4f7fb] border-b border-[#dce6f0] py-4">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold text-[#5a6e82] uppercase tracking-wide shrink-0">Нормативная база:</span>
            {NORMS.map(n => (
              <span key={n} className="norm-badge">{n}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── ABOUT ── */}
      <section id="about" className="py-20">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-rule" />
              <div className="tag-blue mb-3">О программном комплексе</div>
              <h2 className="font-display text-[clamp(1.7rem,3vw,2.5rem)] text-[#0d1f35] mb-6 leading-tight">
                Специализированная система для горных инженеров
              </h2>
              <p className="text-[#5a6e82] leading-relaxed mb-5">
                ПВ-Система — программный комплекс для расчёта вентиляции и водоснабжения горно-рудных предприятий. Разработан совместно с ВНИМИ и Санкт-Петербургским горным университетом. В основе — метод Харди–Кросса и актуализированная нормативная база по ЕПБ рудных месторождений.
              </p>
              <p className="text-[#5a6e82] leading-relaxed mb-8">
                Система ориентирована на рудники цветных, чёрных, драгоценных металлов, калийные и нерудные предприятия. Формирует документацию ПЛА для подразделений МЧС ВГСЧ и проектную документацию, принимаемую Ростехнадзором.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  "Метод Харди–Кросса (до 10⁻⁶ точность)",
                  "Схемы с рециркуляцией воздуха в рудниках",
                  "Расчёт реверса вентиляции для ПЛА ВГСЧ",
                  "Протоколы и акты для Ростехнадзора",
                  "Реестр МинЦифры № 9834",
                  "Совместимость с AutoCAD и Renga",
                ].map(t => (
                  <div key={t} className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#e8f4fd] border border-[#bee3f8] flex items-center justify-center shrink-0">
                      <Icon name="Check" size={11} style={{ color: "#0e63b0" }} />
                    </div>
                    <span className="text-sm text-[#0d1f35]">{t}</span>
                  </div>
                ))}
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
              <img src={IMG_DASHBOARD} alt="Интерфейс системы" className="w-full aspect-[4/3] object-cover rounded-xl border border-[#dce6f0] shadow-md" />
              <div className="absolute -bottom-5 -right-5 bg-white rounded-xl p-4 border border-[#dce6f0] shadow-lg">
                <div className="text-xs font-semibold text-[#5a6e82] uppercase tracking-wide mb-1">Разработано с</div>
                <div className="text-sm font-bold text-[#0d1f35]">ВНИМИ · СПбГУ</div>
                <div className="text-xs text-[#5a6e82]">Горный университет</div>
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
              8 специализированных модулей, охватывающих все задачи вентиляции и водоснабжения подземных горных предприятий
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

      {/* ── CALCULATOR ── */}
      <section id="calculator" className="py-20">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="section-rule mx-auto" />
            <div className="tag-blue mb-3">Онлайн-калькулятор</div>
            <h2 className="font-display text-[clamp(1.7rem,3vw,2.5rem)] text-[#0d1f35]">
              Предварительный расчёт параметров
            </h2>
            <p className="text-[#5a6e82] mt-3 max-w-xl mx-auto">
              Три модуля: вентиляционная сеть, шахтный водоотлив, газовый баланс.
              Полный расчёт с протоколом для Ростехнадзора — в программном комплексе.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Calculator />
          </div>
        </div>
      </section>

      {/* ── DOCS ── */}
      <section id="docs" className="py-20 bg-[#f4f7fb]">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <div className="section-rule" />
              <div className="tag-blue mb-3">Документация</div>
              <h2 className="font-display text-[clamp(1.5rem,3vw,2.2rem)] text-[#0d1f35] mb-4 leading-tight">
                Вся документация на русском языке
              </h2>
              <p className="text-[#5a6e82] text-sm leading-relaxed mb-6">
                Руководства, методики расчётов, видеоуроки и нормативная база — всё адаптировано под требования горных предприятий России.
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

      {/* ── CASES ── */}
      <section id="cases" className="py-20">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-rule mx-auto" />
            <div className="tag-blue mb-3">Реализованные проекты</div>
            <h2 className="font-display text-[clamp(1.7rem,3vw,2.5rem)] text-[#0d1f35]">
              Кейсы горных предприятий
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CASES.map(c => (
              <div key={c.title} className="card-white rounded-xl overflow-hidden group">
                <div className="relative h-44 overflow-hidden">
                  <img src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f35]/70 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-semibold bg-[#0e63b0] text-white px-2 py-1 rounded">{c.type}</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-xs text-[#5a6e82] mb-1 font-medium">{c.company}</div>
                  <h3 className="font-semibold text-[#0d1f35] text-sm mb-2">{c.title}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-[#5a6e82] bg-[#f4f7fb] border border-[#dce6f0] px-2 py-0.5 rounded">Глубина {c.depth}</span>
                  </div>
                  <p className="text-xs text-[#5a6e82] mb-3 leading-relaxed">{c.task}</p>
                  <div className="flex items-start gap-2 p-3 bg-[#f0f7ff] rounded-lg border border-[#bee3f8]">
                    <Icon name="TrendingUp" size={14} className="mt-0.5 shrink-0" style={{ color: "#0e63b0" }} />
                    <span className="text-xs font-semibold text-[#0e63b0]">{c.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="py-20 bg-[#f4f7fb]">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-rule mx-auto" />
            <div className="tag-blue mb-3">Стоимость лицензии</div>
            <h2 className="font-display text-[clamp(1.7rem,3vw,2.5rem)] text-[#0d1f35]">
              Тарифы и лицензирование
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {PRICING.map(p => (
              <div key={p.name}
                className={`rounded-xl p-6 flex flex-col relative ${p.highlight
                  ? "bg-[#0e63b0] text-white shadow-xl shadow-[rgba(14,99,176,0.3)]"
                  : "bg-white border border-[#dce6f0] shadow-sm"}`}>
                {p.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#f59e0b] text-white text-xs font-bold px-4 py-0.5 rounded-full tracking-wide">
                    {p.badge}
                  </div>
                )}
                <div className="mb-5">
                  <div className={`text-xs font-semibold uppercase tracking-wide mb-2 ${p.highlight ? "text-[#93c5fd]" : "text-[#0e63b0]"}`}>{p.name}</div>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className={`font-display text-3xl font-bold ${p.highlight ? "text-white" : "text-[#0d1f35]"}`}>{p.price}</span>
                    <span className={`text-sm ${p.highlight ? "text-[#93c5fd]" : "text-[#5a6e82]"}`}>{p.period}</span>
                  </div>
                  <p className={`text-xs ${p.highlight ? "text-[#bfdbfe]" : "text-[#5a6e82]"}`}>{p.desc}</p>
                </div>
                <div className="flex-1 space-y-2.5 mb-6">
                  {p.features.map(f => (
                    <div key={f} className="flex items-start gap-2">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${p.highlight ? "bg-white/20" : "bg-[#e8f4fd]"}`}>
                        <Icon name="Check" size={10} style={{ color: p.highlight ? "#fff" : "#0e63b0" }} />
                      </div>
                      <span className={`text-sm ${p.highlight ? "text-[#dbeafe]" : "text-[#5a6e82]"}`}>{f}</span>
                    </div>
                  ))}
                </div>
                <button className={`w-full py-2.5 rounded-lg font-semibold text-sm transition-all ${p.highlight
                  ? "bg-white text-[#0e63b0] hover:bg-[#f0f7ff]"
                  : "gradient-blue-btn text-white hover:opacity-90"}`}>
                  {p.price === "По запросу" ? "Получить коммерческое предложение" : "Оформить лицензию"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACTS ── */}
      <section id="contacts" className="py-20">
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

              <img src={IMG_AERIAL} alt="Горное предприятие" className="w-full aspect-video object-cover rounded-xl border border-[#dce6f0] shadow-sm" />
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
                    <input type="text" value={form.org} onChange={e => setForm({ ...form, org: e.target.value })} placeholder="ОАО «Шахта №5»" className={inp} />
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
                    placeholder="Угольная шахта, 3 горизонта, нужен расчёт вентиляционной сети и ПЛА"
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
                <img src={LOGO_URL} alt="ПВ-Система" className="h-10 w-10 object-contain rounded-lg bg-white p-0.5" />
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