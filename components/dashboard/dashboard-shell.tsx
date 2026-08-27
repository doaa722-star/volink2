import Link from 'next/link'
import type { LucideIcon } from 'lucide-react'
import { Bell, LogOut } from 'lucide-react'
import { VolinkLogo } from '@/components/volink-logo'
import { cn } from '@/lib/utils'

export type SidebarItem = {
  icon: LucideIcon
  label: string
  active?: boolean
  href?: string
}

export function DashboardShell({
  greeting,
  subtitle,
  sidebarTitle,
  sidebarItems,
  sidebarFooter,
  children,
}: {
  greeting: string
  subtitle?: string
  sidebarTitle: string
  sidebarItems: SidebarItem[]
  sidebarFooter?: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      {/* top bar */}
      <header className="sticky top-0 z-30 border-b border-border bg-card">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4">
          <Link href="/">
            <VolinkLogo />
          </Link>
          <div className="flex items-center gap-3">
            <button
              className="relative rounded-xl p-2 text-muted-foreground transition-colors hover:bg-muted"
              aria-label="الإشعارات"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute end-2 top-2 h-2 w-2 rounded-full bg-destructive" />
            </button>
            <div className="hidden text-end sm:block">
              <p className="text-sm font-bold text-navy">{greeting}</p>
              {subtitle && (
                <p className="text-xs text-muted-foreground">{subtitle}</p>
              )}
            </div>
            <div className="brand-gradient flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white">
              {greeting.replace(/[^أ-يA-Za-z]/g, '').slice(0, 1) || 'V'}
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-6 lg:grid-cols-[260px_1fr]">
        {/* sidebar */}
        <aside className="h-fit rounded-2xl border border-border bg-sidebar p-4 lg:sticky lg:top-20">
          <p className="px-2 pb-2 text-xs font-bold uppercase tracking-wide text-muted-foreground">
            {sidebarTitle}
          </p>
          <nav className="flex flex-col gap-1">
            {sidebarItems.map((item) => (
              <button
                key={item.label}
                className={cn(
                  'flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors',
                  item.active
                    ? 'bg-accent text-teal'
                    : 'text-muted-foreground hover:bg-muted hover:text-navy',
                )}
              >
                <item.icon className="h-4.5 w-4.5" />
                {item.label}
              </button>
            ))}
          </nav>
          {sidebarFooter && (
            <div className="mt-4 border-t border-border pt-4">
              {sidebarFooter}
            </div>
          )}
          <Link
            href="/"
            className="mt-4 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-navy"
          >
            <LogOut className="h-4.5 w-4.5" />
            تسجيل الخروج
          </Link>
        </aside>

        {/* main */}
        <main className="min-w-0">{children}</main>
      </div>
    </div>
  )
}
