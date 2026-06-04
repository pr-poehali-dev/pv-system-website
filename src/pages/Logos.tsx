import { useState } from "react";

const LOGOS = [
  {
    id: 1,
    url: "https://cdn.poehali.dev/projects/70a8d357-1c4f-4d1c-9bc4-9ce5ff1444a9/files/0ea79da2-25f8-43df-8b48-80f32862bea6.jpg",
    title: "Вариант 1 — Монограмма",
    desc: "Стилизованные буквы ПВ с линиями вентиляции и каплей воды. Минималистичный корпоративный стиль.",
  },
  {
    id: 2,
    url: "https://cdn.poehali.dev/projects/70a8d357-1c4f-4d1c-9bc4-9ce5ff1444a9/files/678e417e-961f-4704-8350-84fa4a1ae6b9.jpg",
    title: "Вариант 2 — Гексагон",
    desc: "Геометрический шестиугольник с тоннелем, вентилятором и трубами внутри. Промышленный технологичный вид.",
  },
  {
    id: 3,
    url: "https://cdn.poehali.dev/projects/70a8d357-1c4f-4d1c-9bc4-9ce5ff1444a9/files/8dbe644f-05d9-45fe-b729-a890e2373e00.jpg",
    title: "Вариант 3 — Поток и капля",
    desc: "Абстрактный круг из воздушного потока и капли воды. Динамичный, современный, запоминающийся.",
  },
  {
    id: 4,
    url: "https://cdn.poehali.dev/projects/70a8d357-1c4f-4d1c-9bc4-9ce5ff1444a9/files/7ab73057-8626-4cf4-81c9-eb200ba780b2.jpg",
    title: "Вариант 4 — Щит",
    desc: "Щит с аркой тоннеля, стрелками вентиляции и трубой водоснабжения. Надёжность, безопасность, госстандарт.",
  },
];

const LOGO_CURRENT = "https://cdn.poehali.dev/projects/70a8d357-1c4f-4d1c-9bc4-9ce5ff1444a9/bucket/b84c7180-86c1-411c-be61-2bc89b44e202.png";

export default function Logos() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#f4f7fb]">
      {/* Header */}
      <div className="bg-white border-b border-[#dce6f0] shadow-sm">
        <div className="container max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={LOGO_CURRENT} alt="ПВ-Система" className="h-9 w-9 object-contain" />
            <div>
              <div className="font-bold text-[#0d1f35]">ПВ-Система</div>
              <div className="text-xs text-[#5a6e82]">Выбор логотипа</div>
            </div>
          </div>
          <a href="/" className="text-sm text-[#0e63b0] hover:underline font-medium flex items-center gap-1">
            ← Вернуться на сайт
          </a>
        </div>
      </div>

      <div className="container max-w-5xl mx-auto px-6 py-12">
        {/* Title */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#e8f4fd] border border-[#bee3f8] rounded-full px-4 py-1.5 mb-4">
            <div className="w-2 h-2 rounded-full bg-[#0e63b0]" />
            <span className="text-xs font-semibold text-[#0e63b0] uppercase tracking-wide">4 варианта на выбор</span>
          </div>
          <h1 className="text-3xl font-bold text-[#0d1f35] mb-3">Варианты логотипа ПВ-Система</h1>
          <p className="text-[#5a6e82] max-w-lg mx-auto">
            Выберите понравившийся вариант — он будет установлен на сайт. Все логотипы выполнены в корпоративной синей палитре.
          </p>
        </div>

        {/* Current */}
        <div className="bg-white rounded-xl border border-[#dce6f0] shadow-sm p-5 mb-8 flex items-center gap-5">
          <img src={LOGO_CURRENT} alt="Текущий логотип" className="h-16 w-16 object-contain" />
          <div>
            <div className="text-xs font-semibold text-[#5a6e82] uppercase tracking-wide mb-1">Текущий логотип</div>
            <div className="font-semibold text-[#0d1f35]">Волны и капля</div>
            <div className="text-sm text-[#5a6e82]">Установлен на сайте сейчас</div>
          </div>
          <div className="ml-auto px-3 py-1 bg-[#e8f4fd] border border-[#bee3f8] rounded-full text-xs font-semibold text-[#0e63b0]">
            Активный
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {LOGOS.map(logo => (
            <div
              key={logo.id}
              onClick={() => setSelected(logo.id === selected ? null : logo.id)}
              className={`bg-white rounded-xl border-2 shadow-sm cursor-pointer transition-all hover:shadow-md ${
                selected === logo.id
                  ? "border-[#0e63b0] shadow-[0_0_0_4px_rgba(14,99,176,0.1)]"
                  : "border-[#dce6f0] hover:border-[#bee3f8]"
              }`}
            >
              {/* Image */}
              <div className="bg-[#f8fbff] rounded-t-xl p-8 flex items-center justify-center border-b border-[#dce6f0]" style={{ minHeight: "220px" }}>
                <img
                  src={logo.url}
                  alt={logo.title}
                  className="max-h-44 max-w-44 object-contain"
                  style={{ imageRendering: "auto" }}
                />
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-semibold text-[#0d1f35] mb-1">{logo.title}</div>
                    <p className="text-sm text-[#5a6e82] leading-relaxed">{logo.desc}</p>
                  </div>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                    selected === logo.id
                      ? "border-[#0e63b0] bg-[#0e63b0]"
                      : "border-[#dce6f0] bg-white"
                  }`}>
                    {selected === logo.id && (
                      <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                        <path d="M1 4L4.5 7.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action */}
        {selected && (
          <div className="sticky bottom-6 bg-white rounded-xl border border-[#0e63b0] shadow-lg p-5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <img
                src={LOGOS.find(l => l.id === selected)?.url}
                alt="Выбранный"
                className="h-12 w-12 object-contain bg-[#f0f7ff] rounded-lg p-1"
              />
              <div>
                <div className="font-semibold text-[#0d1f35]">{LOGOS.find(l => l.id === selected)?.title}</div>
                <div className="text-sm text-[#5a6e82]">Выбран для установки</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSelected(null)}
                className="px-4 py-2 text-sm text-[#5a6e82] hover:text-[#0d1f35] transition-colors"
              >
                Отмена
              </button>
              <div className="px-5 py-2.5 bg-[#0e63b0] text-white text-sm font-semibold rounded-lg opacity-80 cursor-default">
                Напишите номер варианта в чате — установлю
              </div>
            </div>
          </div>
        )}

        {!selected && (
          <div className="text-center text-sm text-[#5a6e82] py-4">
            Нажмите на вариант, чтобы выбрать — затем напишите его номер в чате
          </div>
        )}
      </div>
    </div>
  );
}
