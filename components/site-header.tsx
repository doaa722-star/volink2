'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { VolinkLogo } from '@/components/volink-logo'
import { AuthModal } from '@/components/auth-modal'
import { cn } from '@/lib/utils'

const links = [
  { href: '/', label: 'الرئيسية' },
  { href: '/opportunities', label: 'الفرص' },
  { href: '/#how', label: 'كيف تعمل' },
  { href: '/#about', label: 'عن المنصة' },
]

export function SiteHeader() {
  const [authOpen, setAuthOpen] = useState(false)
  const [mode, setMode] = useState<'login' | 'register'>('login')
  const [menuOpen, setMenuOpen] = useState(false)

  function openAuth(m: 'login' | 'register') {
    setMode(m)
    setAuthOpen(true)
    setMenuOpen(false)
  }

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border/70 bg-card/80 backdrop-blur-lg">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
          <Link href="/">
            <VolinkLogo />
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-semibold text-muted-foreground transition-colors hover:text-navy"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <button
              onClick={() => openAuth('login')}
              className="rounded-xl px-4 py-2 text-sm font-bold text-navy transition-colors hover:bg-muted"
            >
              تسجيل الدخول
            </button>
            <button
              onClick={() => openAuth('register')}
              className="brand-gradient rounded-xl px-4 py-2 text-sm font-bold text-white shadow-md shadow-brand-blue/20 transition-transform hover:scale-[1.02]"
            >
              سجّل كمتطوع
            </button>
          </div>

          <button
            className="rounded-lg p-2 text-navy md:hidden"
            onClick={() => setMenuOpen((s) => !s)}
            aria-label="القائمة"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-border bg-card px-4 py-4 md:hidden">
            <nav className="flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-semibold text-navy hover:bg-muted"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <button
                onClick={() => openAuth('login')}
                className="rounded-xl border border-border px-4 py-2.5 text-sm font-bold text-navy"
              >
                تسجيل الدخول
              </button>
              <button
                onClick={() => openAuth('register')}
                className={cn(
                  'brand-gradient rounded-xl px-4 py-2.5 text-sm font-bold text-white',
                )}
              >
                سجّل الآن
              </button>
            </div>
          </div>
        )}
      </header>

      <AuthModal
        open={authOpen}
        onClose={() => setAuthOpen(false)}
        initialMode={mode}
      />
    </>
  )
}
