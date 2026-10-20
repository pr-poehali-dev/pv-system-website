import Icon from "@/components/ui/icon";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  FEATURES, REQUIREMENTS, QUICK_START, SCENARIOS, FAQ, LICENSE_POINTS, WHATS_NEW, MANUAL_URL, MANUAL_FILE,
} from "./manualData";

function SectionHead({ tag, title, sub }: { tag: string; title: string; sub?: string }) {
  return (
    <div className="text-center mb-12">
      <div className="section-rule mx-auto" />
      <div className="tag-blue mb-3">{tag}</div>
      <h2 className="font-display text-[clamp(1.7rem,3vw,2.5rem)] text-[#0d1f35]">{title}</h2>
      {sub && <p className="text-[#5a6e82] mt-3 max-w-2xl mx-auto">{sub}</p>}
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 md:py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHead tag="Функции программы" title="Что умеет ПВ-Система" sub="От построения схемы рудника до аварийных расчётов и печати документов для ПЛА" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map(f => (
            <div key={f.title} className="card-white rounded-xl p-5 flex gap-4">
              <div className="icon-box !w-11 !h-11">
                <Icon name={f.icon} fallback="Check" size={20} style={{ color: "#0e63b0" }} />
              </div>
              <div>
                <h3 className="font-semibold text-[#0d1f35] text-sm mb-1 leading-snug">{f.title}</h3>
                <p className="text-[#5a6e82] text-xs leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CompatibilitySection() {
  return (
    <section id="requirements" className="py-16 md:py-20 bg-[#f4f7fb] border-y border-[#dce6f0]">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHead tag="Системные требования" title="Работает на вашем железе" />
        <div className="max-w-4xl mx-auto">
          <div>
            <h3 className="font-display text-lg text-[#0d1f35] mb-4">Системные требования</h3>
            <div className="sm:hidden space-y-3">
              {REQUIREMENTS.map(r => (
                <div key={r.part} className="bg-white border border-[#dce6f0] rounded-xl p-4">
                  <div className="font-semibold text-[#0d1f35] text-sm mb-2">{r.part}</div>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <div className="text-[10px] uppercase tracking-wide text-[#9fb3c8] mb-0.5">Минимум</div>
                      <div className="text-[#5a6e82] leading-relaxed">{r.min}</div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-wide text-[#0e63b0] mb-0.5">Рекомендуется</div>
                      <div className="text-[#0d1f35] leading-relaxed">{r.rec}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="hidden sm:block bg-white border border-[#dce6f0] rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#e8f4fd] text-[#0d1f35] text-left">
                    <th className="px-4 py-3 font-semibold text-xs">Компонент</th>
                    <th className="px-4 py-3 font-semibold text-xs">Минимум</th>
                    <th className="px-4 py-3 font-semibold text-xs">Рекомендуется</th>
                  </tr>
                </thead>
                <tbody>
                  {REQUIREMENTS.map(r => (
                    <tr key={r.part} className="border-t border-[#dce6f0]">
                      <td className="px-4 py-3 font-semibold text-[#0d1f35] text-xs">{r.part}</td>
                      <td className="px-4 py-3 text-[#5a6e82] text-xs">{r.min}</td>
                      <td className="px-4 py-3 text-[#5a6e82] text-xs">{r.rec}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid sm:grid-cols-3 gap-3 mt-4">
              {[
                { icon: "Monitor", t: "Windows", d: "Windows 10/11, 64-бит, Microsoft Edge WebView2" },
                { icon: "Terminal", t: "Linux", d: "Современные 64-битные дистрибутивы" },
                { icon: "Globe", t: "Веб-версия", d: "Chrome, Edge или Firefox, экран от 1280×800" },
              ].map(o => (
                <div key={o.t} className="bg-white border border-[#dce6f0] rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon name={o.icon} size={16} style={{ color: "#0e63b0" }} />
                    <span className="font-semibold text-[#0d1f35] text-sm">{o.t}</span>
                  </div>
                  <p className="text-[#5a6e82] text-xs leading-relaxed">{o.d}</p>
                </div>
              ))}
            </div>
            <p className="text-[#5a6e82] text-xs mt-4 leading-relaxed">
              Десктопная версия работает без интернета со встроенным расчётным ядром. На более слабом компьютере программа запустится, но расчёт крупных схем будет медленнее.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function QuickStartSection() {
  return (
    <section id="start" className="py-16 md:py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHead tag="Быстрый старт" title="От пустого листа до первого расчёта за 7 шагов" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {QUICK_START.map((s, i) => (
            <div key={s.title} className="bg-[#f4f7fb] border border-[#dce6f0] rounded-xl p-5">
              <div className="font-display text-2xl text-[#0e63b0] mb-2">{String(i + 1).padStart(2, "0")}</div>
              <div className="font-semibold text-[#0d1f35] text-sm mb-1">{s.title}</div>
              <div className="text-[#5a6e82] text-xs leading-relaxed">{s.desc}</div>
            </div>
          ))}
          <div className="gradient-blue-btn rounded-xl p-5 text-white flex flex-col justify-center">
            <Icon name="CircleCheck" size={24} />
            <div className="font-semibold text-sm mt-2">Готово</div>
            <div className="text-xs text-white/85 leading-relaxed mt-1">Проверьте индикатор «Сошёлся» и сохраните проект — Ctrl+S.</div>
          </div>
        </div>

        <h3 className="font-display text-xl text-[#0d1f35] mb-6 text-center">Готовые сценарии работы</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SCENARIOS.map(s => (
            <div key={s.title} className="card-white rounded-xl p-5">
              <div className="icon-box !w-10 !h-10 mb-3">
                <Icon name={s.icon} fallback="ListChecks" size={18} style={{ color: "#0e63b0" }} />
              </div>
              <div className="font-semibold text-[#0d1f35] text-sm mb-3 leading-snug">{s.title}</div>
              <ol className="space-y-1.5">
                {s.steps.map((st, i) => (
                  <li key={st} className="flex gap-2 text-xs text-[#5a6e82] leading-relaxed">
                    <span className="text-[#0e63b0] font-semibold shrink-0">{i + 1}.</span>
                    {st}
                  </li>
                ))}
              </ol>
            </div>
          ))}
          <a href={MANUAL_URL} download={MANUAL_FILE} className="group gradient-blue-btn rounded-xl p-5 text-white flex flex-col justify-center hover:opacity-95 transition-opacity">
            <Icon name="BookOpen" size={24} />
            <div className="font-semibold text-sm mt-2">Все сценарии в руководстве</div>
            <div className="text-xs text-white/85 leading-relaxed mt-1">Подробные шаги с горячими клавишами и советами.</div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold mt-3">
              Скачать DOCX <Icon name="Download" size={14} className="group-hover:translate-y-0.5 transition-transform" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export function WhatsNewSection() {
  return (
    <section id="news" className="py-16 md:py-20 bg-[#f4f7fb] border-y border-[#dce6f0]">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHead tag="Что нового" title="Обновления сентябрь — октябрь 2026" sub="Текущая версия 2.202.639 от 17.10.2026. Программа регулярно развивается по запросам пользователей." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {WHATS_NEW.map(n => (
            <div key={n.title} className="bg-white border border-[#dce6f0] rounded-xl p-5">
              <span className="text-[10px] font-mono font-semibold text-[#0e63b0] bg-[#e8f4fd] border border-[#bee3f8] px-2 py-0.5 rounded">{n.tag}</span>
              <div className="font-semibold text-[#0d1f35] text-sm mt-3 mb-1 leading-snug">{n.title}</div>
              <div className="text-[#5a6e82] text-xs leading-relaxed">{n.desc}</div>
            </div>
          ))}
          <a href="#contacts" className="group gradient-blue-btn rounded-xl p-5 text-white flex flex-col justify-center hover:opacity-95 transition-opacity">
            <Icon name="MessageSquarePlus" size={24} />
            <div className="font-semibold text-sm mt-2">Нужна новая функция?</div>
            <div className="text-xs text-white/85 leading-relaxed mt-1">Расскажите о своей задаче — учтём в следующих версиях.</div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold mt-3">
              Написать нам <Icon name="ArrowRight" size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export function HelpSection() {
  return (
    <section id="help" className="py-16 md:py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHead tag="Справка" title="Частые вопросы и лицензия" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h3 className="font-display text-lg text-[#0d1f35] mb-4">Частые вопросы</h3>
            <Accordion type="single" collapsible className="bg-[#f4f7fb] border border-[#dce6f0] rounded-xl px-5">
              {FAQ.map((f, i) => (
                <AccordionItem key={f.q} value={`q${i}`} className={i === FAQ.length - 1 ? "border-b-0" : "border-[#dce6f0]"}>
                  <AccordionTrigger className="text-sm text-left text-[#0d1f35] hover:no-underline">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-xs text-[#5a6e82] leading-relaxed">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div>
            <h3 className="font-display text-lg text-[#0d1f35] mb-4">Лицензия и активация</h3>
            <div className="space-y-3">
              {LICENSE_POINTS.map(l => (
                <div key={l.title} className="flex gap-4 bg-[#f4f7fb] border border-[#dce6f0] rounded-xl p-4">
                  <div className="icon-box !w-10 !h-10">
                    <Icon name={l.icon} fallback="KeyRound" size={18} style={{ color: "#0e63b0" }} />
                  </div>
                  <div>
                    <div className="font-semibold text-[#0d1f35] text-sm mb-1">{l.title}</div>
                    <div className="text-[#5a6e82] text-xs leading-relaxed">{l.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={MANUAL_URL}
              download={MANUAL_FILE}
              className="group mt-6 flex items-center gap-4 gradient-blue-btn text-white rounded-xl p-5 hover:opacity-95 transition-opacity shadow-sm"
            >
              <div className="w-11 h-11 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
                <Icon name="BookOpen" size={22} />
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm">Руководство пользователя</div>
                <div className="text-xs text-white/85">Версия 2.202.639 · 24 раздела · DOCX, 73 КБ</div>
              </div>
              <Icon name="Download" size={18} className="group-hover:translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}