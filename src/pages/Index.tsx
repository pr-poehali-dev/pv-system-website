import { useState } from "react";
import Icon from "@/components/ui/icon";

const IMG_DASHBOARD = "https://cdn.poehali.dev/projects/70a8d357-1c4f-4d1c-9bc4-9ce5ff1444a9/files/4539b730-ac55-4690-8485-ee72c2958f14.jpg";
const IMG_MINE = "https://cdn.poehali.dev/projects/70a8d357-1c4f-4d1c-9bc4-9ce5ff1444a9/files/4b787e51-4a6a-4829-82e3-959df648569e.jpg";
const IMG_AERIAL = "https://cdn.poehali.dev/projects/70a8d357-1c4f-4d1c-9bc4-9ce5ff1444a9/files/05246733-bedc-49ca-bf10-b5026f53d231.jpg";

const NAV = [
  { label: "О системе", href: "#about" },
  { label: "Модули", href: "#modules" },
  { label: "Калькулятор", href: "#calculator" },
  { label: "Документация", href: "#docs" },
  { label: "Кейсы", href: "#cases" },
  { label: "Цены", href: "#pricing" },
  { label: "Поддержка", href: "#support" },
  { label: "Контакты", href: "#contacts" },
];

const MODULES = [
  { icon: "Wind", code: "АЭР-01", title: "Вентиляционная сеть", desc: "Расчёт депрессии, аэродинамического сопротивления и распределения расходов воздуха по выработкам методом Харди–Кросса" },
  { icon: "Gauge", code: "АЭР-02", title: "Проветривание тупиков", desc: "Расчёт местного проветривания тупиковых выработок. Подбор ВМП, диаметра и длины вентиляционных труб" },
  { icon: "Flame", code: "ГАЗ-01", title: "Газовый баланс", desc: "Расчёт поступления метана, CO, CO₂, NO₂ и H₂S. Разбавление до ПДК по ФНП в угольных шахтах и рудниках" },
  { icon: "Droplets", code: "ВОД-01", title: "Водоотлив и водоснабжение", desc: "Гидравлический расчёт шахтного водоотлива, пожарно-орошаемого водоснабжения и трубопроводов питьевой воды" },
  { icon: "Thermometer", code: "КЛМ-01", title: "Тепловой расчёт", desc: "Прогноз тепловлажностных условий в забоях. Расчёт потребности в кондиционировании рудничного воздуха" },
  { icon: "Shield", code: "ПБ-01", title: "Пожарная безопасность", desc: "Моделирование пожарной депрессии, газового режима при пожаре, схемы реверса и аварийного проветривания" },
  { icon: "BarChart2", code: "АНЛ-01", title: "Депрессионная съёмка", desc: "Обработка данных натурных инструментальных съёмок, сравнение расчётных и фактических параметров" },
  { icon: "FileText", code: "ДОК-01", title: "Вентиляционная документация", desc: "Автогенерация схем вентиляции, планов ликвидации аварий (ПЛА), паспортов ВМП и пояснительных записок" },
];

const NORMS = [
  "ФНП «Безопасность при ведении горных работ»",
  "ПБ 05-618-03 (угольные шахты)",
  "ЕПБ при разработке рудных месторождений",
  "РД 06-356-00 (депрессионные съёмки)",
  "ГОСТ Р 55154 (вентиляция шахт)",
  "СП 91.13330 (подземные выработки)",
];

const CASES = [
  {
    title: "Шахта «Распадская-Коксовая»",
    company: "ЕВРАЗхолдинг",
    type: "Угольная шахта",
    depth: "Глубина 520 м",
    task: "Оценка эффективности вентиляции после реконструкции главной вентиляторной установки",
    result: "Повышение расхода воздуха на 23%, устранение метановых пиков на горизонте",
    img: IMG_AERIAL,
  },
  {
    title: "Рудник «Таймырский»",
    company: "Норникель",
    type: "Медно-никелевый рудник",
    depth: "Глубина 1 100 м",
    task: "Проектирование схемы вентиляции нового горизонта с тепловым расчётом забоев",
    result: "Снижение затрат на кондиционирование на 31%, получение заключения Ростехнадзора",
    img: IMG_MINE,
  },
  {
    title: "Калийный рудник «Беларуськалий»",
    company: "Беларуськалий",
    type: "Калийный рудник",
    depth: "Глубина 340 м",
    task: "Разработка ПЛА с моделированием аварийного проветривания и реверса вентилятора",
    result: "Время разработки ПЛА сокращено с 3 месяцев до 18 дней",
    img: IMG_DASHBOARD,
  },
];

const DOCS = [
  { title: "Руководство пользователя", size: "PDF · 6.8 МБ", icon: "BookOpen" },
  { title: "Методика аэродинамического расчёта", size: "PDF · 3.2 МБ", icon: "Calculator" },
  { title: "ФНП и нормативная база — описание", size: "PDF · 1.4 МБ", icon: "Shield" },
  { title: "Инструкция по депрессионной съёмке", size: "PDF · 2.0 МБ", icon: "Gauge" },
  { title: "API и интеграция с AutoCAD / Revit", size: "HTML", icon: "Code" },
  { title: "Видеокурс (12 уроков)", size: "YouTube плейлист", icon: "Play" },
];

const PRICING = [
  {
    name: "Проектировщик",
    price: "24 900",
    period: "/ год",
    badge: null,
    desc: "Одно предприятие, один инженер",
    features: ["1 рабочее место", "Модули АЭР-01, АЭР-02, ВОД-01", "Генерация отчётов PDF/DOCX", "Email-поддержка", "Обновления нормативной базы"],
    highlight: false,
  },
  {
    name: "Предприятие",
    price: "89 000",
    period: "/ год",
    badge: "РЕКОМЕНДУЕМ",
    desc: "Для проектного отдела горного предприятия",
    features: ["10 рабочих мест", "Все 8 модулей расчётов", "ПЛА и вентиляционные схемы", "Приоритетная поддержка + выезд", "Обучение персонала (16 ч)", "Согласование с Ростехнадзором"],
    highlight: true,
  },
  {
    name: "Холдинг",
    price: "По запросу",
    period: "",
    badge: null,
    desc: "Для управляющих компаний и проектных институтов",
    features: ["Неограниченное число мест", "Сервер-версия (on-premise)", "Кастомизация под стандарты", "SLA 99.9% · выделенный инженер", "Интеграция с АСУТП шахты", "Корпоративное обучение"],
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
  const [mineType, setMineType] = useState("coal");

  const calcVent = () => {
    const L = parseFloat(length), S = parseFloat(section), Q = parseFloat(airflow), K = parseFloat(roughness);
    if (!L || !S || !Q) return null;
    const v = Q / S;
    const dh = 2 * Math.sqrt(S / Math.PI);
    const lambda = 0.3 / Math.pow((v * dh / 0.000015), 0.25) + 0.00025 * K;
    const R = (lambda * L) / (S * S * dh * 2 * 1.2);
    const depr = Math.round(R * Q * Q);
    const vms = v.toFixed(2);
    const ok = v < 4 ? { t: "Норма (до 4 м/с)", c: "#22c55e" } : v < 8 ? { t: "Повышенная скорость", c: "#f59e0b" } : { t: "Превышение нормы ФНП!", c: "#dc2626" };
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
    const qMin = mineType === "coal" ? w * 1.5 * 60 : w * 1.2 * 60;
    const qFinal = Math.ceil(Math.max(qPeople + qBlast, qMin) / 50) * 50;
    return { qPeople, qBlast, qMin: Math.round(qMin), qFinal };
  };

  const vr = calcVent(), wr = calcWater(), gr = calcGas();

  const inp = "w-full bg-[rgba(0,0,0,0.45)] border border-[rgba(224,123,32,0.18)] rounded-sm px-3 py-2.5 text-sm text-white placeholder:text-[#8a7d6e] focus:outline-none focus:border-[#e07b20] transition-colors";

  return (
    <div className="card-rock rounded-sm p-6">
      <div className="flex gap-1 mb-6 bg-[rgba(0,0,0,0.35)] p-1 rounded-sm w-fit flex-wrap">
        {(["vent", "water", "gas"] as const).map((t, i) => (
          <button key={t} onClick={() => setTab(t)}
            className={`px-4 py-2 text-xs font-display tracking-widest transition-all ${tab === t ? "gradient-amber text-[#0d0b09] font-semibold" : "text-[#8a7d6e] hover:text-white"}`}>
            {["ВЕНТСЕТЬ", "ВОДООТЛИВ", "ГАЗОВЫЙ БАЛАНС"][i]}
          </button>
        ))}
      </div>

      {tab === "vent" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div><label className="tag-mine block mb-1.5">Длина выработки, м</label><input type="number" value={length} onChange={e => setLength(e.target.value)} placeholder="например: 850" className={inp} /></div>
            <div><label className="tag-mine block mb-1.5">Площадь сечения, м²</label><input type="number" value={section} onChange={e => setSection(e.target.value)} placeholder="например: 12.5" className={inp} /></div>
            <div><label className="tag-mine block mb-1.5">Расход воздуха, м³/с</label><input type="number" value={airflow} onChange={e => setAirflow(e.target.value)} placeholder="например: 18" className={inp} /></div>
            <div>
              <label className="tag-mine block mb-1.5">Шероховатость стенок α</label>
              <select value={roughness} onChange={e => setRoughness(e.target.value)} className={inp}>
                <option value="0.15">0.15 — крепь металлическая</option>
                <option value="0.25">0.25 — бетонная затяжка</option>
                <option value="0.40">0.40 — набрызг-бетон</option>
                <option value="0.60">0.60 — без крепи (скальные породы)</option>
                <option value="0.90">0.90 — деревянная крепь</option>
              </select>
            </div>
          </div>
          <div className="bg-[rgba(0,0,0,0.3)] rounded-sm p-5 flex flex-col justify-center">
            {vr ? (
              <div className="space-y-4">
                <div className="tag-mine mb-2">Результат расчёта</div>
                <div className="border-b border-[rgba(224,123,32,0.15)] pb-3">
                  <div className="text-[#8a7d6e] text-xs mb-1">Депрессия выработки</div>
                  <div className="text-3xl font-display text-white">{vr.depr} <span className="text-sm text-[#8a7d6e]">Па</span></div>
                </div>
                <div className="border-b border-[rgba(224,123,32,0.15)] pb-3">
                  <div className="text-[#8a7d6e] text-xs mb-1">Скорость воздуха</div>
                  <div className="text-2xl font-display" style={{ color: "#e07b20" }}>{vr.vms} <span className="text-sm text-[#8a7d6e]">м/с</span></div>
                  <div className="text-xs mt-1 font-semibold" style={{ color: vr.c }}>{vr.t}</div>
                </div>
                <div>
                  <div className="text-[#8a7d6e] text-xs mb-1">Аэродинамическое сопротивление R</div>
                  <div className="text-lg font-display text-white font-mono-brand">{vr.R} <span className="text-xs text-[#8a7d6e]">кг/м⁷</span></div>
                </div>
                <div className="p-3 rounded-sm text-xs text-[#8a7d6e]" style={{ background: "rgba(224,123,32,0.07)", borderLeft: "2px solid #e07b20" }}>
                  Расчёт по РД 06-356-00. Норма: до 4 м/с в тупиковых, до 8 м/с в сквозных выработках.
                </div>
              </div>
            ) : (
              <div className="text-center text-[#8a7d6e]">
                <Icon name="Wind" size={44} className="mx-auto mb-3 opacity-20" />
                <p className="text-sm">Введите параметры выработки</p>
              </div>
            )}
          </div>
        </div>
      )}

      {tab === "water" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div><label className="tag-mine block mb-1.5">Глубина водоотлива, м</label><input type="number" value={levels} onChange={e => setLevels(e.target.value)} placeholder="например: 480" className={inp} /></div>
            <div><label className="tag-mine block mb-1.5">Нормальный приток воды, м³/ч</label><input type="number" value={inflow} onChange={e => setInflow(e.target.value)} placeholder="например: 120" className={inp} /></div>
            <div><label className="tag-mine block mb-1.5">Диаметр трубопровода, мм (опц.)</label><input type="number" value={pipeDiam} onChange={e => setPipeDiam(e.target.value)} placeholder="например: 200" className={inp} /></div>
          </div>
          <div className="bg-[rgba(0,0,0,0.3)] rounded-sm p-5 flex flex-col justify-center">
            {wr ? (
              <div className="space-y-4">
                <div className="tag-mine mb-2">Результат расчёта</div>
                <div className="border-b border-[rgba(224,123,32,0.15)] pb-3">
                  <div className="text-[#8a7d6e] text-xs mb-1">Нормальный приток</div>
                  <div className="text-3xl font-display text-white">{wr.qNormal} <span className="text-sm text-[#8a7d6e]">м³/ч</span></div>
                </div>
                <div className="border-b border-[rgba(224,123,32,0.15)] pb-3">
                  <div className="text-[#8a7d6e] text-xs mb-1">Максимальный приток (×1.5)</div>
                  <div className="text-2xl font-display" style={{ color: "#e07b20" }}>{wr.qMax} <span className="text-sm text-[#8a7d6e]">м³/ч</span></div>
                </div>
                <div className="border-b border-[rgba(224,123,32,0.15)] pb-3">
                  <div className="text-[#8a7d6e] text-xs mb-1">Требуемая мощность насоса</div>
                  <div className="text-2xl font-display text-white">{wr.power} <span className="text-sm text-[#8a7d6e]">кВт</span></div>
                </div>
                {wr.velocity && (
                  <div>
                    <div className="text-[#8a7d6e] text-xs mb-1">Скорость в трубопроводе</div>
                    <div className="text-xl font-display text-white">{wr.velocity} <span className="text-sm text-[#8a7d6e]">м/с</span></div>
                  </div>
                )}
                <div className="p-3 rounded-sm text-xs text-[#8a7d6e]" style={{ background: "rgba(224,123,32,0.07)", borderLeft: "2px solid #e07b20" }}>
                  По ФНП и ЕПБ. КПД насоса — 0.70. Коэффициент запаса по максимальному притоку — 1.5.
                </div>
              </div>
            ) : (
              <div className="text-center text-[#8a7d6e]">
                <Icon name="Droplets" size={44} className="mx-auto mb-3 opacity-20" />
                <p className="text-sm">Введите глубину и приток воды</p>
              </div>
            )}
          </div>
        </div>
      )}

      {tab === "gas" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="tag-mine block mb-1.5">Тип предприятия</label>
              <select value={mineType} onChange={e => setMineType(e.target.value)} className={inp}>
                <option value="coal">Угольная шахта (метанообильная)</option>
                <option value="ore">Рудник (неметанообильный)</option>
                <option value="potash">Калийный рудник</option>
              </select>
            </div>
            <div><label className="tag-mine block mb-1.5">Число работающих в смене, чел.</label><input type="number" value={workers} onChange={e => setWorkers(e.target.value)} placeholder="например: 45" className={inp} /></div>
            <div>
              <label className="tag-mine block mb-1.5">Взрывные работы в смене</label>
              <select value={shotfiring} onChange={e => setShotfiring(e.target.value)} className={inp}>
                <option value="yes">Да</option>
                <option value="no">Нет</option>
              </select>
            </div>
            {shotfiring === "yes" && (
              <div><label className="tag-mine block mb-1.5">Масса одновременно взрываемых ВВ, кг</label><input type="number" value={blastAmount} onChange={e => setBlastAmount(e.target.value)} placeholder="например: 120" className={inp} /></div>
            )}
          </div>
          <div className="bg-[rgba(0,0,0,0.3)] rounded-sm p-5 flex flex-col justify-center">
            {gr ? (
              <div className="space-y-4">
                <div className="tag-mine mb-2">Минимальный расход воздуха</div>
                <div className="border-b border-[rgba(224,123,32,0.15)] pb-3">
                  <div className="text-[#8a7d6e] text-xs mb-1">По числу работающих</div>
                  <div className="text-2xl font-display text-white">{gr.qPeople} <span className="text-sm text-[#8a7d6e]">м³/мин</span></div>
                </div>
                {gr.qBlast > 0 && (
                  <div className="border-b border-[rgba(224,123,32,0.15)] pb-3">
                    <div className="text-[#8a7d6e] text-xs mb-1">По взрывным работам</div>
                    <div className="text-2xl font-display" style={{ color: "#f59e0b" }}>{gr.qBlast} <span className="text-sm text-[#8a7d6e]">м³/мин</span></div>
                  </div>
                )}
                <div className="border-b border-[rgba(224,123,32,0.15)] pb-3">
                  <div className="text-[#8a7d6e] text-xs mb-1">Норма ФНП (минимум)</div>
                  <div className="text-xl font-display text-white">{gr.qMin} <span className="text-sm text-[#8a7d6e]">м³/мин</span></div>
                </div>
                <div>
                  <div className="text-[#8a7d6e] text-xs mb-1">Принятый расход воздуха</div>
                  <div className="text-3xl font-display" style={{ color: "#e07b20" }}>{gr.qFinal} <span className="text-sm text-[#8a7d6e]">м³/мин</span></div>
                  <div className="text-xs mt-1 font-semibold text-green-400">✓ ПДК по CH₄ обеспечено</div>
                </div>
                <div className="p-3 rounded-sm text-xs text-[#8a7d6e]" style={{ background: "rgba(224,123,32,0.07)", borderLeft: "2px solid #e07b20" }}>
                  Норма по ФНП: 6 м³/мин на чел. Для угольных шахт — не менее 1.5 м³/с на тонну добычи.
                </div>
              </div>
            ) : (
              <div className="text-center text-[#8a7d6e]">
                <Icon name="Flame" size={44} className="mx-auto mb-3 opacity-20" />
                <p className="text-sm">Укажите параметры горного предприятия</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ── MAIN PAGE ─────────────────────────────────────────────────────────────────

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", org: "", email: "", phone: "", msg: "" });

  const inp = "w-full bg-[rgba(0,0,0,0.45)] border border-[rgba(224,123,32,0.18)] rounded-sm px-3 py-2.5 text-sm text-white placeholder:text-[#8a7d6e] focus:outline-none focus:border-[#e07b20] transition-colors";

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--coal)" }}>

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-[rgba(224,123,32,0.12)] backdrop-blur-md"
        style={{ backgroundColor: "rgba(13,11,9,0.94)" }}>
        <div className="container max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 gradient-amber flex items-center justify-center rounded-sm">
              <Icon name="Wind" size={16} className="text-[#0d0b09]" />
            </div>
            <div>
              <div className="font-display text-lg text-white tracking-widest leading-none">ПВ-СИСТЕМА</div>
              <div className="font-mono-brand text-[#e07b20] leading-none" style={{ fontSize: "0.52rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Вентиляция и водоснабжение рудников
              </div>
            </div>
          </div>

          <nav className="hidden xl:flex items-center gap-5">
            {NAV.map(l => (
              <a key={l.href} href={l.href} className="text-[#8a7d6e] text-sm hover:text-white transition-colors tracking-wide">{l.label}</a>
            ))}
          </nav>

          <div className="hidden xl:flex gap-3">
            <a href="#contacts" className="px-4 py-2 text-sm border border-[rgba(224,123,32,0.35)] text-[#e07b20] hover:bg-[rgba(224,123,32,0.08)] rounded-sm transition-colors font-medium">
              Демо-доступ
            </a>
            <a href="#pricing" className="px-4 py-2 text-sm gradient-amber text-[#0d0b09] rounded-sm font-semibold hover:opacity-90 transition-opacity">
              Купить лицензию
            </a>
          </div>

          <button className="xl:hidden text-[#8a7d6e] hover:text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="xl:hidden border-t border-[rgba(224,123,32,0.12)] py-4 px-6 space-y-3" style={{ backgroundColor: "rgba(13,11,9,0.98)" }}>
            {NAV.map(l => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="block text-[#8a7d6e] hover:text-white py-1 transition-colors">{l.label}</a>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <a href="#contacts" className="px-4 py-2 text-sm text-center border border-[rgba(224,123,32,0.35)] text-[#e07b20] rounded-sm">Демо-доступ</a>
              <a href="#pricing" className="px-4 py-2 text-sm text-center gradient-amber text-[#0d0b09] rounded-sm font-semibold">Купить лицензию</a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] opacity-[0.04]" style={{ background: "radial-gradient(circle at top right, #e07b20, transparent 70%)" }} />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-[0.04]" style={{ background: "radial-gradient(circle at bottom left, #f59e0b, transparent 70%)" }} />
        </div>

        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="flex items-center gap-2.5 mb-6 anim-0">
                <div className="status-dot" />
                <span className="tag-mine">v5.1 · ФНП актуализированы на 2024 г.</span>
              </div>

              <h1 className="font-display leading-none mb-6 anim-1" style={{ fontSize: "clamp(2.4rem,5vw,3.8rem)", letterSpacing: "0.02em" }}>
                <span className="text-white">РАСЧЁТ ВЕНТИЛЯЦИИ</span><br />
                <span style={{ color: "#e07b20" }}>ШАХТ И РУДНИКОВ</span><br />
                <span className="text-[#8a7d6e] font-light" style={{ fontSize: "clamp(1.1rem,2.5vw,1.5rem)" }}>Программно-аналитический комплекс</span>
              </h1>

              <p className="text-[#8a7d6e] text-base leading-relaxed mb-8 max-w-lg anim-2">
                Аэродинамический расчёт вентиляционных сетей, газовый баланс, депрессионная съёмка, водоотлив и ПЛА — всё в соответствии с ФНП, ПБ 05-618-03 и требованиями Ростехнадзора.
              </p>

              <div className="flex flex-wrap gap-3 mb-10 anim-3">
                <a href="#contacts" className="px-6 py-3 gradient-amber text-[#0d0b09] font-display tracking-widest text-sm rounded-sm hover:opacity-90 transition-opacity flex items-center gap-2 font-semibold">
                  <Icon name="Play" size={16} />
                  ЗАПРОСИТЬ ДЕМО
                </a>
                <a href="#calculator" className="px-6 py-3 border border-[rgba(224,123,32,0.3)] text-[#e07b20] font-display tracking-widest text-sm rounded-sm hover:bg-[rgba(224,123,32,0.07)] transition-colors flex items-center gap-2">
                  <Icon name="Calculator" size={16} />
                  ОНЛАЙН-РАСЧЁТ
                </a>
              </div>

              <div className="grid grid-cols-3 gap-5 anim-3">
                {[
                  { val: "500+", label: "Горных предприятий" },
                  { val: "15 лет", label: "На рынке ПО для шахт" },
                  { val: "100%", label: "Соответствие ФНП" },
                ].map(s => (
                  <div key={s.val} className="depth-line">
                    <div className="font-display text-xl text-white">{s.val}</div>
                    <div className="text-xs text-[#8a7d6e] mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative anim-2">
              <div className="rounded-sm overflow-hidden glow-amber border border-[rgba(224,123,32,0.18)] relative">
                <img src={IMG_DASHBOARD} alt="ПВ-Система интерфейс" className="w-full aspect-[4/3] object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--coal) 0%, transparent 55%)" }} />
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {["ФНП 2024", "ПБ 05-618", "ГОСТ Р 55154", "РД 06-356"].map(t => (
                    <span key={t} className="px-2 py-0.5 font-mono-brand rounded-sm" style={{ fontSize: "10px", background: "rgba(224,123,32,0.25)", border: "1px solid rgba(224,123,32,0.4)", color: "#f59e0b" }}>{t}</span>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-5 -right-5 card-rock rounded-sm p-4 border border-[rgba(224,123,32,0.2)]" style={{ minWidth: "175px" }}>
                <div className="tag-mine mb-1">Реестр Минцифры</div>
                <div className="text-white text-sm font-semibold">Российское ПО</div>
                <div className="text-[#8a7d6e] text-xs mt-0.5">№ 9834 · 2021</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* НОРМАТИВЫ STRIP */}
      <div className="border-y border-[rgba(224,123,32,0.12)] py-5" style={{ background: "repeating-linear-gradient(-45deg, transparent, transparent 6px, rgba(224,123,32,0.03) 6px, rgba(224,123,32,0.03) 12px)" }}>
        <div className="container max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-x-8 gap-y-2 items-center">
            <span className="tag-mine shrink-0">Нормативная база:</span>
            {NORMS.map(n => (
              <div key={n} className="flex items-center gap-1.5 text-xs text-[#8a7d6e]">
                <Icon name="CheckCircle" size={12} style={{ color: "#e07b20" }} />
                {n}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="py-20 border-b border-[rgba(224,123,32,0.1)]">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-accent" />
              <div className="tag-mine mb-3">О системе</div>
              <h2 className="font-display text-white mb-6" style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", letterSpacing: "0.03em" }}>
                СПЕЦИАЛИЗИРОВАННЫЙ КОМПЛЕКС<br />
                <span style={{ color: "#e07b20" }}>ДЛЯ ГОРНЫХ ИНЖЕНЕРОВ</span>
              </h2>
              <p className="text-[#8a7d6e] leading-relaxed mb-5">
                ПВ-Система разработана совместно с ВНИМИ, СПб Горным университетом и ведущими угольными компаниями России. В основе — метод Харди–Кросса для расчёта сложных вентиляционных сетей и актуальная база нормативов Ростехнадзора.
              </p>
              <p className="text-[#8a7d6e] leading-relaxed mb-8">
                В отличие от универсальных САПР, система заточена исключительно под подземные горные выработки: корректно работает с расслаивающимися вентиляционными потоками, ВМП, рециркуляцией и аварийными режимами реверса.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {["Метод Харди–Кросса (итерации до 10⁻⁶)", "Поддержка схем с рециркуляцией воздуха", "Расчёт реверса вентиляции для ПЛА", "Протокол для Ростехнадзора — из коробки", "Включён в реестр отечественного ПО", "Совместимость с AutoCAD и Renga"].map(t => (
                  <div key={t} className="flex items-start gap-2">
                    <Icon name="CheckCircle" size={15} className="shrink-0 mt-0.5" style={{ color: "#e07b20" }} />
                    <span className="text-sm text-[#8a7d6e]">{t}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src={IMG_MINE} alt="Шахтная вентиляция" className="w-full aspect-[4/3] object-cover rounded-sm border border-[rgba(224,123,32,0.15)]" />
              <div className="absolute -bottom-5 -right-5 card-rock rounded-sm p-4 border border-[rgba(224,123,32,0.2)]">
                <div className="tag-mine mb-1">Разработано с</div>
                <div className="text-white text-sm font-semibold">ВНИМИ · СПбГУ</div>
                <div className="text-[#8a7d6e] text-xs mt-0.5">Горный университет</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section id="modules" className="py-20 border-b border-[rgba(224,123,32,0.1)]">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="tag-mine mb-3">Модули системы</div>
            <h2 className="font-display text-white" style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", letterSpacing: "0.03em" }}>
              ПОЛНЫЙ ЦИКЛ <span style={{ color: "#e07b20" }}>ИНЖЕНЕРНЫХ РАСЧЁТОВ</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {MODULES.map(m => (
              <div key={m.code} className="card-rock rounded-sm p-5 hover-lift cursor-default">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-sm" style={{ background: "rgba(224,123,32,0.1)", border: "1px solid rgba(224,123,32,0.2)" }}>
                    <Icon name={m.icon as "Wind"} size={20} style={{ color: "#e07b20" }} />
                  </div>
                  <span className="font-mono-brand text-[#8a7d6e] border border-[rgba(224,123,32,0.15)] px-1.5 py-0.5 rounded-sm" style={{ fontSize: "10px" }}>{m.code}</span>
                </div>
                <h3 className="font-display text-white text-sm tracking-wide mb-2">{m.title}</h3>
                <p className="text-[#8a7d6e] text-xs leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section id="calculator" className="py-20 border-b border-[rgba(224,123,32,0.1)]">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="tag-mine mb-3">Онлайн-калькулятор</div>
            <h2 className="font-display text-white mb-4" style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", letterSpacing: "0.03em" }}>
              ПРЕДВАРИТЕЛЬНЫЙ <span style={{ color: "#e07b20" }}>РАСЧЁТ</span>
            </h2>
            <p className="text-[#8a7d6e] max-w-lg mx-auto text-sm">
              Три модуля: вентиляционная сеть, шахтный водоотлив, газовый баланс. Полный расчёт с протоколом для Ростехнадзора — в системе.
            </p>
          </div>
          <div className="max-w-4xl mx-auto"><Calculator /></div>
        </div>
      </section>

      {/* DOCS */}
      <section id="docs" className="py-20 border-b border-[rgba(224,123,32,0.1)]">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <div className="section-accent" />
              <div className="tag-mine mb-3">Документация</div>
              <h2 className="font-display text-white mb-4" style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)", letterSpacing: "0.03em" }}>
                БАЗА ЗНАНИЙ<br /><span style={{ color: "#e07b20" }}>НА РУССКОМ</span>
              </h2>
              <p className="text-[#8a7d6e] text-sm leading-relaxed">Методики расчётов, видеоуроки и нормативная база. Адаптированы под требования российских горных предприятий.</p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {DOCS.map(d => (
                <button key={d.title} className="card-rock rounded-sm p-4 flex items-center gap-4 hover-lift text-left group w-full">
                  <div className="w-9 h-9 rounded-sm flex items-center justify-center shrink-0" style={{ background: "rgba(224,123,32,0.1)", border: "1px solid rgba(224,123,32,0.2)" }}>
                    <Icon name={d.icon as "BookOpen"} size={16} style={{ color: "#e07b20" }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-white font-medium group-hover:text-[#e07b20] transition-colors truncate">{d.title}</div>
                    <div className="text-xs text-[#8a7d6e] mt-0.5">{d.size}</div>
                  </div>
                  <Icon name="Download" size={14} className="text-[#8a7d6e] group-hover:text-[#e07b20] transition-colors shrink-0" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CASES */}
      <section id="cases" className="py-20 border-b border-[rgba(224,123,32,0.1)]">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="tag-mine mb-3">Реализованные проекты</div>
            <h2 className="font-display text-white" style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", letterSpacing: "0.03em" }}>
              КЕЙСЫ ГОРНЫХ <span style={{ color: "#e07b20" }}>ПРЕДПРИЯТИЙ</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CASES.map(c => (
              <div key={c.title} className="card-rock rounded-sm overflow-hidden hover-lift group">
                <div className="relative h-44 overflow-hidden">
                  <img src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #1c1814 0%, transparent 55%)" }} />
                  <span className="absolute top-3 left-3 tag-mine px-2 py-1 rounded-sm" style={{ background: "rgba(224,123,32,0.25)", border: "1px solid rgba(224,123,32,0.4)" }}>{c.type}</span>
                </div>
                <div className="p-5">
                  <div className="text-xs text-[#8a7d6e] mb-1">{c.company}</div>
                  <h3 className="font-display text-white text-sm tracking-wide mb-3">{c.title}</h3>
                  <span className="text-xs text-[#8a7d6e] border border-[rgba(224,123,32,0.15)] px-2 py-0.5 rounded-sm inline-block mb-3">{c.depth}</span>
                  <p className="text-xs text-[#8a7d6e] mb-3 leading-relaxed">{c.task}</p>
                  <div className="p-3 rounded-sm text-xs" style={{ background: "rgba(224,123,32,0.07)", borderLeft: "2px solid #e07b20" }}>
                    <span style={{ color: "#f59e0b" }}>{c.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 border-b border-[rgba(224,123,32,0.1)]">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="tag-mine mb-3">Лицензирование</div>
            <h2 className="font-display text-white" style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", letterSpacing: "0.03em" }}>
              ТАРИФЫ И <span style={{ color: "#e07b20" }}>ЛИЦЕНЗИИ</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {PRICING.map(p => (
              <div key={p.name} className="rounded-sm p-6 flex flex-col relative"
                style={p.highlight ? { border: "2px solid #e07b20", background: "rgba(33,29,25,0.95)", boxShadow: "0 0 40px rgba(224,123,32,0.12)" } : { background: "rgba(33,29,25,0.85)", border: "1px solid rgba(224,123,32,0.12)" }}>
                {p.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-amber px-4 py-0.5 rounded-full">
                    <span className="text-[#0d0b09] text-xs font-display tracking-widest font-semibold">{p.badge}</span>
                  </div>
                )}
                <div className="mb-5">
                  <div className="tag-mine mb-2">{p.name}</div>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="font-display text-3xl text-white">{p.price}</span>
                    <span className="text-[#8a7d6e] text-sm">{p.period}</span>
                  </div>
                  <p className="text-[#8a7d6e] text-xs">{p.desc}</p>
                </div>
                <div className="flex-1 space-y-2.5 mb-6">
                  {p.features.map(f => (
                    <div key={f} className="flex items-start gap-2">
                      <Icon name="Check" size={14} className="mt-0.5 shrink-0" style={{ color: "#e07b20" }} />
                      <span className="text-sm text-[#8a7d6e]">{f}</span>
                    </div>
                  ))}
                </div>
                <button className={`w-full py-2.5 rounded-sm font-display tracking-widest text-sm transition-all ${p.highlight ? "gradient-amber text-[#0d0b09] hover:opacity-90 font-semibold" : "border border-[rgba(224,123,32,0.3)] text-[#e07b20] hover:bg-[rgba(224,123,32,0.07)]"}`}>
                  {p.price === "По запросу" ? "ПОЛУЧИТЬ КП" : "ОФОРМИТЬ"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT */}
      <section id="support" className="py-20 border-b border-[rgba(224,123,32,0.1)]">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="tag-mine mb-3">Техническая поддержка</div>
            <h2 className="font-display text-white" style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", letterSpacing: "0.03em" }}>
              ПОДДЕРЖКА <span style={{ color: "#e07b20" }}>ГОРНЫХ ИНЖЕНЕРОВ</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: "MessageCircle", title: "Чат с инженером", desc: "Поддержку ведут инженеры с опытом работы на горных предприятиях", time: "Пн–Пт 8–20" },
              { icon: "Phone", title: "Телефон", desc: "+7 (495) 123-45-67\nВозможен выезд инженера на предприятие", time: "8×5" },
              { icon: "Mail", title: "Email", desc: "support@pv-system.ru\nПо расчётам, лицензиям, Ростехнадзору", time: "До 24 часов" },
              { icon: "GraduationCap", title: "Обучение", desc: "Очное и дистанционное. Удостоверение о повышении квалификации", time: "По расписанию" },
            ].map(s => (
              <div key={s.title} className="card-rock rounded-sm p-5 hover-lift">
                <div className="w-10 h-10 rounded-sm mb-4 flex items-center justify-center" style={{ background: "rgba(224,123,32,0.1)", border: "1px solid rgba(224,123,32,0.2)" }}>
                  <Icon name={s.icon as "MessageCircle"} size={20} style={{ color: "#e07b20" }} />
                </div>
                <h3 className="font-display text-white text-sm tracking-wide mb-2">{s.title}</h3>
                <p className="text-[#8a7d6e] text-xs leading-relaxed mb-3 whitespace-pre-line">{s.desc}</p>
                <span className="tag-mine px-2 py-1 rounded-sm inline-block" style={{ background: "rgba(224,123,32,0.1)", border: "1px solid rgba(224,123,32,0.18)" }}>{s.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-20">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="section-accent" />
              <div className="tag-mine mb-3">Контакты</div>
              <h2 className="font-display text-white mb-6" style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", letterSpacing: "0.03em" }}>
                СВЯЗАТЬСЯ<br /><span style={{ color: "#e07b20" }}>С КОМАНДОЙ</span>
              </h2>
              <p className="text-[#8a7d6e] leading-relaxed mb-8 max-w-md">
                Оставьте заявку — технический менеджер свяжется в течение рабочего дня, проведёт демонстрацию и поможет подобрать конфигурацию под ваше предприятие.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { icon: "MapPin", label: "Адрес", val: "г. Москва, ул. Профсоюзная, 65, офис 318" },
                  { icon: "Phone", label: "Телефон", val: "+7 (495) 123-45-67" },
                  { icon: "Mail", label: "Email", val: "info@pv-system.ru" },
                  { icon: "Clock", label: "Режим работы", val: "Пн–Пт 8:00–19:00 МСК" },
                ].map(c => (
                  <div key={c.label} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-sm flex items-center justify-center shrink-0 mt-0.5" style={{ background: "rgba(224,123,32,0.1)", border: "1px solid rgba(224,123,32,0.2)" }}>
                      <Icon name={c.icon as "MapPin"} size={14} style={{ color: "#e07b20" }} />
                    </div>
                    <div>
                      <div className="tag-mine">{c.label}</div>
                      <div className="text-sm text-white mt-0.5">{c.val}</div>
                    </div>
                  </div>
                ))}
              </div>
              <img src={IMG_AERIAL} alt="Горное предприятие" className="w-full aspect-video object-cover rounded-sm border border-[rgba(224,123,32,0.15)]" />
            </div>

            <div className="card-rock rounded-sm p-6">
              <div className="tag-mine mb-5">Заявка на демонстрацию</div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="tag-mine block mb-1.5">Имя</label>
                    <input type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Иван Петров" className={inp} />
                  </div>
                  <div>
                    <label className="tag-mine block mb-1.5">Предприятие</label>
                    <input type="text" value={form.org} onChange={e => setForm({ ...form, org: e.target.value })} placeholder="ОАО «Шахта №5»" className={inp} />
                  </div>
                </div>
                <div>
                  <label className="tag-mine block mb-1.5">Email</label>
                  <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="ivan@mine.ru" className={inp} />
                </div>
                <div>
                  <label className="tag-mine block mb-1.5">Телефон</label>
                  <input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+7 (___) ___-__-__" className={inp} />
                </div>
                <div>
                  <label className="tag-mine block mb-1.5">Тип предприятия / задача</label>
                  <textarea value={form.msg} onChange={e => setForm({ ...form, msg: e.target.value })}
                    placeholder="Угольная шахта, 3 горизонта, нужен расчёт вентиляционной сети и ПЛА" rows={4} className={`${inp} resize-none`} />
                </div>
                <button className="w-full py-3 gradient-amber text-[#0d0b09] font-display tracking-widest text-sm rounded-sm hover:opacity-90 transition-opacity font-semibold">
                  ОТПРАВИТЬ ЗАЯВКУ
                </button>
                <p className="text-xs text-[#8a7d6e] text-center">Соглашение об обработке персональных данных</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[rgba(224,123,32,0.1)] py-10">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 gradient-amber flex items-center justify-center rounded-sm">
                <Icon name="Wind" size={12} className="text-[#0d0b09]" />
              </div>
              <div>
                <div className="font-display text-sm text-white tracking-widest">ПВ-СИСТЕМА</div>
                <div className="font-mono-brand text-[#8a7d6e]" style={{ fontSize: "0.5rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>Вентиляция и водоснабжение рудников</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-5 justify-center">
              {NAV.map(l => (
                <a key={l.href} href={l.href} className="text-[#8a7d6e] text-xs hover:text-white transition-colors">{l.label}</a>
              ))}
            </div>
            <div className="text-xs text-[#8a7d6e] text-center md:text-right">
              <div>© 2024 ООО «ПВ-Система»</div>
              <div className="font-mono-brand mt-0.5" style={{ fontSize: "0.58rem" }}>ИНН 7701234567 · Реестр МинЦифры № 9834</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
