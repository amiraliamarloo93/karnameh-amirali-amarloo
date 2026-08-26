function Bar({ value, tone }: { value: number; tone: "navy" | "ok" | "bad" }) {
  const bg =
    tone === "ok" ? "bg-ok" : tone === "bad" ? "bg-bad" : "bg-navy";
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-paper-2">
      <div
        className={`h-full rounded-full ${bg}`}
        style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
      />
    </div>
  );
}

function Stat({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint?: string;
}) {
  return (
    <div className="rounded-md border border-line bg-paper p-4">
      <div className="text-xs font-medium text-muted">{label}</div>
      <div className="mt-1 font-semibold tabular-nums text-2xl text-navy leading-tight">
        {value}
      </div>
      {hint ? <div className="mt-1 text-xs text-ink-soft">{hint}</div> : null}
    </div>
  );
}

function Chip({
  children,
  tone,
}: {
  children: string;
  tone: "ok" | "bad" | "skip" | "navy";
}) {
  const cls =
    tone === "ok"
      ? "bg-ok-bg text-ok"
      : tone === "bad"
        ? "bg-bad-bg text-bad"
        : tone === "skip"
          ? "bg-skip-bg text-skip"
          : "bg-navy text-paper";
  return (
    <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${cls}`}>
      {children}
    </span>
  );
}

const blocks = [
  { name: "غلط املایی", score: "۵ از ۵", pct: 100, note: "قوت اصلی" },
  { name: "کلمهٔ مشترک", score: "۵ از ۵", pct: 100, note: "قوت اصلی" },
  { name: "نقشه و همسایگی", score: "۵ از ۵", pct: 100, note: "قوت اصلی" },
  { name: "ساخت واژه از حروف", score: "۵ از ۵", pct: 100, note: "قوت اصلی" },
  { name: "رمز جدول", score: "۴ از ۵", pct: 80, note: "یک نزده" },
  { name: "جای خالی و دستور", score: "۴ از ۵", pct: 80, note: "زمان فعل" },
  { name: "وارون کلمه", score: "۳ از ۵", pct: 60, note: "یک غلط، یک نزده" },
  { name: "بخش‌پذیری", score: "۲ از ۵", pct: 40, note: "سه نزدهٔ آخر" },
  { name: "برخورد شکل", score: "۲ از ۵", pct: 40, note: "فرمول خط‌ها" },
  { name: "شکل تو‌درتو", score: "۰ از ۵", pct: 0, note: "ضعف جدی" },
];

export function ReportCard() {
  return (
    <main className="min-h-screen bg-paper px-4 py-8 text-ink sm:px-6">
      <article className="mx-auto max-w-3xl rounded-xl border border-line bg-paper p-5 shadow-[0_12px_40px_rgba(28,25,22,0.08)] sm:p-8">
        <header className="border-b border-line pb-5">
          <p className="text-xs font-medium tracking-wide text-muted">
            گزارش تشخیصی مدرس هوش · فرم C · آزمون سال ۱۴۰۵
          </p>
          <h1 className="mt-1 text-2xl font-semibold text-navy sm:text-3xl">
            کارنامهٔ امیرعلی عمارلو
          </h1>
          <p className="mt-2 text-sm text-ink-soft">
            تمرین آزمون ورودی پایه هفتم سمپاد ۱۴۰۵–۱۴۰۶ · هدف واقعی: آزمون ۱۴۰۶
          </p>
        </header>

        <section className="mt-5 grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-line bg-paper-2 p-4">
            <h2 className="text-sm font-semibold text-navy">مشخصات دانش‌آموز</h2>
            <dl className="mt-3 space-y-1.5 text-sm">
              <Row k="نام" v="امیرعلی عمارلو" />
              <Row k="پایه" v="پنجم ابتدایی" />
              <Row k="تولد" v="۱۳۹۳/۰۲/۲۱" />
              <Row k="شهر" v="بجنورد، خیابان بهارک" />
              <Row k="مدرسه" v="شاهد حضرت رسول اکرم (ص)" />
              <Row k="کلاس هوش" v="هیوا هوش · علیرضا راعی" />
            </dl>
          </div>
          <div className="rounded-lg border border-line bg-navy p-4 text-paper">
            <h2 className="text-sm font-semibold">نمرهٔ کل وزنی</h2>
            <p className="mt-3 font-semibold tabular-nums text-5xl leading-none">
              ۳۶٫۴٪
            </p>
            <p className="mt-3 text-sm text-paper/80">
              دفترچهٔ ۱ ضریب ۳ · دفترچهٔ ۲ ضریب ۱
            </p>
            <p className="mt-2 text-xs text-paper/70">
              این آزمون سال قبل است. امیرعلی یک سال زودتر زده؛ عدد قبولی ۱۴۰۶ نیست.
            </p>
          </div>
        </section>

        <section className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Stat label="درست" value="۶۴" hint="از ۱۲۰ سؤال" />
          <Stat label="غلط" value="۲۸" hint="نمرهٔ منفی خورده" />
          <Stat label="نزده" value="۲۸" hint="سفید = صفر" />
          <Stat label="خام کل" value="۲۶۲" hint="از ۷۲۰ وزنی" />
        </section>

        <section className="mt-8">
          <h2 className="text-base font-semibold text-navy">دو دفترچه</h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-line p-4">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-semibold">دفترچه ۱ · تحلیلی</h3>
                <Chip tone="bad">ضریب ۳</Chip>
              </div>
              <p className="mt-3 font-semibold tabular-nums text-3xl text-navy">
                ۲۷٫۲٪
              </p>
              <div className="mt-3">
                <Bar value={27.2} tone="bad" />
              </div>
              <p className="mt-3 text-sm text-ink-soft">
                ۲۳ درست · ۲۰ غلط · ۱۷ نزده
              </p>
              <p className="mt-2 text-xs text-muted">
                اگر ۲۰ غلط سفید می‌ماند، درصد می‌شد ۳۸٫۳٪. حدس اینجا گران تمام شد.
              </p>
            </div>
            <div className="rounded-lg border border-line p-4">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-semibold">دفترچه ۲ · سرعت و دقت</h3>
                <Chip tone="ok">ضریب ۱</Chip>
              </div>
              <p className="mt-3 font-semibold tabular-nums text-3xl text-navy">
                ۶۳٫۹٪
              </p>
              <div className="mt-3">
                <Bar value={63.9} tone="ok" />
              </div>
              <p className="mt-3 text-sm text-ink-soft">
                ۴۱ درست · ۸ غلط · ۱۱ نزده
              </p>
              <p className="mt-2 text-xs text-muted">
                این دفترچه نقطهٔ قوت است. قبولی را دفترچهٔ ضریب ۳ تعیین می‌کند.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-base font-semibold text-navy">تیپ‌به‌تیپ دفترچهٔ ۲</h2>
          <ul className="mt-3 divide-y divide-line rounded-lg border border-line">
            {blocks.map((b) => (
              <li key={b.name} className="flex items-center gap-3 px-4 py-3">
                <div className="w-36 shrink-0 text-sm font-medium">{b.name}</div>
                <div className="min-w-0 flex-1">
                  <Bar value={b.pct} tone={b.pct >= 80 ? "ok" : b.pct >= 50 ? "navy" : "bad"} />
                </div>
                <div className="w-16 text-left text-xs tabular-nums text-ink-soft">
                  {b.score}
                </div>
                <div className="hidden w-28 text-xs text-muted sm:block">{b.note}</div>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8 grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-line bg-ok-bg p-4">
            <h2 className="text-sm font-semibold text-ok">قوت‌ها</h2>
            <ul className="mt-2 list-disc space-y-1 pr-4 text-sm text-ink">
              <li>املا، کلمهٔ مشترک، نقشه، حروف واژه: تقریباً کامل</li>
              <li>رمز جدول را سریع فهمید</li>
              <li>کمپلکس مبحث ۹۳ دنباله: حدود ۸۵٪ بعد از کلید</li>
              <li>نزده‌های دفترچهٔ ۲ اغلب آخرِ بلوک بود، نه بی‌نظمی</li>
            </ul>
          </div>
          <div className="rounded-lg border border-line bg-bad-bg p-4">
            <h2 className="text-sm font-semibold text-bad">ضعف‌ها</h2>
            <ul className="mt-2 list-disc space-y-1 pr-4 text-sm text-ink">
              <li>دفترچهٔ تحلیلی کلامی (مفهوم، بیت، هم‌خانواده)</li>
              <li>برخورد خط و دایره: تقاطع خط‌ها را جا انداخت</li>
              <li>شکل تو‌درتو (چاقالو / لاغرو): صفر از پنج</li>
              <li>۲۰ غلط دفترچهٔ ۱ نمرهٔ منفی سنگین ساخت</li>
            </ul>
          </div>
        </section>

        <section className="mt-8 rounded-lg border border-line p-4">
          <h2 className="text-sm font-semibold text-navy">حکم مدرس</h2>
          <p className="mt-2 text-sm leading-7 text-ink-soft">
            امیرعلی برای کلاس پنجم، دفترچهٔ سرعت را در سطح قابل قبول زده است.
            فاصله تا تیزهوشان ۱۴۰۶ در دفترچهٔ استعداد تحلیلی است، نه در هوش ریاضی
            خام. مسیر تا آزمون: هوش کلامی هر روز، قانون «اگر دو گزینه ماندی سفید
            بگذار»، فرمول برخورد شکل، و شمارش شکل تو‌درتو با زمان. کلاس راعی و
            کمپلکس را نگه دار؛ اسمارتیز را وقتی گروهی خریدید کنارش بگذار.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-sm font-semibold text-navy">کار تا شروع مهر</h2>
          <table className="mt-3 w-full text-sm">
            <thead>
              <tr className="border-b border-line text-right text-muted">
                <th className="py-2 font-medium">اولویت</th>
                <th className="py-2 font-medium">کار</th>
                <th className="py-2 font-medium">چرا</th>
              </tr>
            </thead>
            <tbody className="text-ink">
              <tr className="border-b border-line">
                <td className="py-2">۱</td>
                <td className="py-2">هوش کلامی · مینی‌کمپلکس</td>
                <td className="py-2 text-ink-soft">ضریب ۳ دفترچهٔ اول</td>
              </tr>
              <tr className="border-b border-line">
                <td className="py-2">۲</td>
                <td className="py-2">قانون سفیدگذاشتن</td>
                <td className="py-2 text-ink-soft">۲۰ غلط = ۸ درست سوخته</td>
              </tr>
              <tr className="border-b border-line">
                <td className="py-2">۳</td>
                <td className="py-2">برخورد خط / دایره</td>
                <td className="py-2 text-ink-soft">۶۸ تا ۷۰ غلط بود</td>
              </tr>
              <tr>
                <td className="py-2">۴</td>
                <td className="py-2">چاقالو و لاغرو زمان‌دار</td>
                <td className="py-2 text-ink-soft">بلوک ۹۶ تا ۱۰۰ قفل شد</td>
              </tr>
            </tbody>
          </table>
        </section>

        <footer className="mt-8 border-t border-line pt-4 text-xs text-muted">
          تصحیح با کلید رسمی فرم C · نمرهٔ منفی ۳+ / ۱− · تاریخ گزارش: شهریور ۱۴۰۵
        </footer>
      </article>
    </main>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-3">
      <dt className="text-muted">{k}</dt>
      <dd className="font-medium">{v}</dd>
    </div>
  );
}
