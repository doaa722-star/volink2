'use client'

import { useState } from 'react'
import { Search, FileUp, Layers, ArrowLeft } from 'lucide-react'
import { AuthModal } from '@/components/auth-modal'

const pills = [
  { icon: Search, label: 'ابحث عن تخصصك' },
  { icon: FileUp, label: 'ارفع سيرتك الذاتية' },
  { icon: Layers, label: 'طابق مع المشاريع' },
]

const defaultLogoSheet = '/images/volink-horizontal-logo.jpeg'

export function Hero() {
  const [authOpen, setAuthOpen] = useState(false)
  const [mode, setMode] = useState<'login' | 'register'>('register')

  function open(m: 'login' | 'register') {
    setMode(m)
    setAuthOpen(true)
  }

  return (
    <section className="relative overflow-hidden bg-navy">
      <div className="pointer-events-none absolute -start-24 top-10 h-72 w-72 rounded-full bg-teal/25 blur-3xl" />
      <div className="pointer-events-none absolute -end-24 bottom-0 h-80 w-80 rounded-full bg-brand-blue/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-cyan">
            منصة التطوع الأولى في عدن
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-balance text-white md:text-5xl">
            <span className="text-brand-gradient">Volink.</span> ربط المتطوعين
            بفرص التطوع في عدن
          </h1>
          <p className="mt-5 max-w-md text-pretty leading-relaxed text-white/70">
            نربط المتطوعين الشغوفين بالمؤسسات الهادفة. حدد تخصصك، ارفع سيرتك
            الذاتية، ودعنا نطابقك مع الفرص المناسبة تماماً لمهاراتك.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => open('register')}
              className="brand-gradient flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg shadow-brand-blue/30 transition-transform hover:scale-[1.02]"
            >
              سجّل كمتطوع
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => open('register')}
              className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              أضف مشروعك (للمؤسسات)
            </button>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {pills.map((p) => (
              <div
                key={p.label}
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-semibold text-white/80"
              >
                <p.icon className="h-4 w-4 text-cyan" />
                {p.label}
              </div>
            ))}
          </div>
        </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white shadow-2xl">
              <img
                src={defaultLogoSheet || "/placeholder.svg"}
                alt="الشعار الأفقي وهوية علامة Volink التجارية"
                className="h-full w-full object-contain p-6"
              />
            </div>
          </div>
      </div>

      <AuthModal
        open={authOpen}
        onClose={() => setAuthOpen(false)}
        initialMode={mode}
      />
    </section>
  )
}
