'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Mail, Lock, Phone, User, X, Eye, EyeOff } from 'lucide-react'
import { VolinkMark } from '@/components/volink-logo'
import { cn } from '@/lib/utils'

type Mode = 'login' | 'register'
type Role = 'volunteer' | 'organization'

export function AuthModal({
  open,
  onClose,
  initialMode = 'login',
}: {
  open: boolean
  onClose: () => void
  initialMode?: Mode
}) {
  const router = useRouter()
  const [mode, setMode] = useState<Mode>(initialMode)
  const [role, setRole] = useState<Role>('volunteer')
  const [showPassword, setShowPassword] = useState(false)

  useEffect(() => {
    if (open) setMode(initialMode)
  }, [open, initialMode])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    if (open) {
      document.addEventListener('keydown', onKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    router.push(role === 'organization' ? '/organization' : '/dashboard')
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="تسجيل الدخول أو إنشاء حساب"
    >
      {/* blurred backdrop with volunteer illustration */}
      <button
        className="absolute inset-0 cursor-default"
        aria-label="إغلاق"
        onClick={onClose}
      >
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%E2%80%8F%202026-08-27%20at%2007.01.00-eCsnQ6zGDevELV0LIgh5W1siGepZCt.jpeg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/70 backdrop-blur-md" />
      </button>

      <div className="relative w-full max-w-md animate-in fade-in zoom-in-95 duration-200">
        <div className="rounded-3xl border border-border bg-card p-7 shadow-2xl">
          <button
            onClick={onClose}
            className="absolute end-5 top-5 rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-muted"
            aria-label="إغلاق النافذة"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="mb-6 flex flex-col items-center gap-2 text-center">
            <VolinkMark className="h-11 w-11" />
            <h2 className="text-2xl font-extrabold text-navy">Volink</h2>
            <p className="text-sm text-muted-foreground">
              {mode === 'login'
                ? 'تسجيل الدخول إلى حسابك'
                : 'أنشئ حسابك وابدأ رحلة التطوع'}
            </p>
          </div>

          {/* role switch */}
          <div className="mb-5 grid grid-cols-2 gap-2 rounded-2xl bg-muted p-1">
            {(
              [
                ['volunteer', 'متطوع'],
                ['organization', 'مؤسسة'],
              ] as [Role, string][]
            ).map(([value, label]) => (
              <button
                key={value}
                type="button"
                onClick={() => setRole(value)}
                className={cn(
                  'rounded-xl py-2 text-sm font-bold transition-all',
                  role === value
                    ? 'bg-card text-navy shadow-sm'
                    : 'text-muted-foreground',
                )}
              >
                {label}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-3.5">
            {mode === 'register' && (
              <Field
                icon={User}
                type="text"
                placeholder={role === 'organization' ? 'اسم المؤسسة' : 'الاسم الكامل'}
                autoComplete="name"
              />
            )}
            <Field
              icon={Mail}
              type="email"
              placeholder="البريد الإلكتروني"
              autoComplete="email"
            />
            <Field
              icon={Phone}
              type="tel"
              placeholder="رقم الهاتف"
              autoComplete="tel"
            />
            <div className="relative">
              <Field
                icon={Lock}
                type={showPassword ? 'text' : 'password'}
                placeholder="كلمة المرور"
                autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="absolute end-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-navy"
                aria-label={showPassword ? 'إخفاء كلمة المرور' : 'إظهار كلمة المرور'}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>

            {mode === 'login' && (
              <div className="flex justify-start">
                <button
                  type="button"
                  className="text-xs font-semibold text-teal hover:underline"
                >
                  نسيت كلمة المرور؟
                </button>
              </div>
            )}

            <button
              type="submit"
              className="brand-gradient w-full rounded-xl py-3 text-sm font-bold text-white shadow-lg shadow-brand-blue/25 transition-transform hover:scale-[1.01] active:scale-[0.99]"
            >
              {mode === 'login' ? 'دخول' : 'إنشاء الحساب'}
            </button>
          </form>

          <div className="my-5 flex items-center gap-3">
            <span className="h-px flex-1 bg-border" />
            <span className="text-xs text-muted-foreground">
              أو تابع عبر مواقع التواصل
            </span>
            <span className="h-px flex-1 bg-border" />
          </div>

          <div className="grid grid-cols-3 gap-3">
            <SocialButton label="Google" onClick={handleSubmit}>
              <GoogleIcon />
            </SocialButton>
            <SocialButton label="Facebook" onClick={handleSubmit}>
              <FacebookIcon />
            </SocialButton>
            <SocialButton label="X" onClick={handleSubmit}>
              <XIcon />
            </SocialButton>
          </div>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            {mode === 'login' ? 'ليس لديك حساب؟' : 'لديك حساب بالفعل؟'}{' '}
            <button
              type="button"
              onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
              className="font-bold text-navy hover:text-teal"
            >
              {mode === 'login' ? 'سجّل الآن' : 'تسجيل الدخول'}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

function Field({
  icon: Icon,
  ...props
}: { icon: typeof Mail } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="relative">
      <Icon className="pointer-events-none absolute end-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <input
        {...props}
        className="w-full rounded-xl border border-input bg-secondary/60 py-3 pe-10 ps-4 text-sm text-navy outline-none transition-colors placeholder:text-muted-foreground focus:border-teal focus:bg-card focus:ring-2 focus:ring-teal/20"
      />
    </div>
  )
}

function SocialButton({
  children,
  label,
  onClick,
}: {
  children: React.ReactNode
  label: string
  onClick: (e: React.FormEvent) => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`المتابعة عبر ${label}`}
      className="flex items-center justify-center rounded-xl border border-border bg-card py-2.5 transition-colors hover:bg-muted"
    >
      {children}
    </button>
  )
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1Z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.65l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.11a6.6 6.6 0 0 1 0-4.22V7.05H2.18a11 11 0 0 0 0 9.9l3.66-2.84Z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.05l3.66 2.84C6.71 7.3 9.14 5.38 12 5.38Z"
      />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#1877F2">
      <path d="M24 12c0-6.63-5.37-12-12-12S0 5.37 0 12c0 5.99 4.39 10.95 10.13 11.85v-8.38H7.08V12h3.05V9.36c0-3 1.79-4.67 4.53-4.67 1.31 0 2.68.24 2.68.24v2.95h-1.51c-1.49 0-1.95.93-1.95 1.87V12h3.33l-.53 3.47h-2.8v8.38C19.61 22.95 24 17.99 24 12Z" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="#16233f">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  )
}
