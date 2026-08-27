import Link from 'next/link'
import { UserPlus, FileText, Building2, ArrowLeft } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Hero } from '@/components/landing/hero'
import { OpportunityCard } from '@/components/opportunity-card'
import { categories, opportunities } from '@/lib/data'

const stats = [
  { value: '+120', label: 'متطوع مسجّل' },
  { value: '+35', label: 'مؤسسة شريكة' },
  { value: '+60', label: 'فرصة تطوعية' },
  { value: '6', label: 'قطاعات رئيسية' },
]

const steps = [
  {
    icon: UserPlus,
    title: 'تسجيل حساب وتحديد التخصص',
    desc: 'أنشئ حسابك واختر مجالك التطوعي من الطب إلى الهندسة والتقنية.',
  },
  {
    icon: FileText,
    title: 'إعداد الملف والسيرة الذاتية',
    desc: 'ارفع سيرتك الذاتية وأبرز مهاراتك ليراها أصحاب المشاريع.',
  },
  {
    icon: Building2,
    title: 'الربط والمطابقة مع الفرص',
    desc: 'نطابقك ذكياً مع المشاريع المناسبة لمهاراتك وموقعك واهتماماتك.',
  },
]

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />

        {/* stats */}
        <section className="border-b border-border bg-card">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-extrabold text-navy md:text-4xl">
                  {s.value}
                </p>
                <p className="mt-1 text-sm font-medium text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* specializations */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-balance text-navy">
              عبّر عن نفسك، حدّد تخصصك
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-pretty text-muted-foreground">
              منصتنا توفر قاعدة بيانات غنية بالمتطوعين المؤهلين في كافة التخصصات.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {categories
              .filter((c) => c.id !== 'all')
              .concat({ id: 'more', label: 'وأكثر...', icon: categories[0].icon })
              .map((c) => (
                <div
                  key={c.id}
                  className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:border-teal/40 hover:shadow-md"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-teal">
                    <c.icon className="h-7 w-7" />
                  </div>
                  <span className="text-sm font-bold text-navy">{c.label}</span>
                </div>
              ))}
          </div>
        </section>

        {/* how it works */}
        <section id="how" className="bg-secondary/50 py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-navy">
                كيف تعمل منصة Volink؟
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
                ثلاث خطوات بسيطة تفصلك عن بدء رحلتك التطوعية.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {steps.map((s, i) => (
                <div
                  key={s.title}
                  className="relative rounded-2xl border border-border bg-card p-7"
                >
                  <span className="absolute end-6 top-6 text-5xl font-extrabold text-secondary">
                    {i + 1}
                  </span>
                  <div className="brand-gradient flex h-14 w-14 items-center justify-center rounded-2xl text-white">
                    <s.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-navy">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* featured opportunities */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-extrabold text-navy">
                فرص تطوعية مميزة
              </h2>
              <p className="mt-2 text-muted-foreground">
                ابحث عن متطوعين لمشاريعك بكل سهولة، أو انضم إلى فريق يصنع الفرق.
              </p>
            </div>
            <Link
              href="/opportunities"
              className="hidden items-center gap-1.5 whitespace-nowrap text-sm font-bold text-teal hover:underline md:flex"
            >
              عرض الكل
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {opportunities.slice(0, 3).map((opp) => (
              <OpportunityCard key={opp.id} opp={opp} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-4 pb-16">
          <div className="brand-gradient relative overflow-hidden rounded-3xl px-6 py-14 text-center">
            <h2 className="text-3xl font-extrabold text-balance text-white md:text-4xl">
              مجتمع واحد، فرص متعددة، تأثير أكبر
            </h2>
            <p className="mx-auto mt-4 max-w-md text-pretty text-white/85">
              انضم إلى Volink اليوم وكن جزءاً من التغيير الإيجابي في عدن.
            </p>
            <Link
              href="/opportunities"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3 text-sm font-bold text-navy transition-transform hover:scale-[1.02]"
            >
              انضم إلينا الآن
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
