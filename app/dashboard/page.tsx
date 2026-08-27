import type { Metadata } from 'next'
import {
  LayoutGrid,
  FileUp,
  History,
  Bookmark,
  Settings,
  Sparkles,
  CheckCircle2,
  Clock,
  Award,
} from 'lucide-react'
import { DashboardShell } from '@/components/dashboard/dashboard-shell'
import { OpportunityCard } from '@/components/opportunity-card'
import { opportunities } from '@/lib/data'

export const metadata: Metadata = {
  title: 'لوحة المتطوع — Volink',
}

const sidebarItems = [
  { icon: LayoutGrid, label: 'نظرة عامة', active: true },
  { icon: FileUp, label: 'رفع السيرة الذاتية' },
  { icon: History, label: 'سجل التطوع' },
  { icon: Bookmark, label: 'الفرص المحفوظة' },
  { icon: Settings, label: 'إعدادات الحساب' },
]

const miniStats = [
  { icon: Award, value: '3', label: 'مشاريع مكتملة' },
  { icon: Clock, value: '48', label: 'ساعة تطوع' },
  { icon: CheckCircle2, value: '2', label: 'طلبات قيد المراجعة' },
]

const profileChecklist = [
  { label: 'البيانات الشخصية', done: true },
  { label: 'تحديد التخصص', done: true },
  { label: 'رفع السيرة الذاتية', done: true },
  { label: 'إضافة شهادات الخبرة', done: false },
]

export default function VolunteerDashboard() {
  const completion = 80

  return (
    <DashboardShell
      greeting="مرحباً، أحمد!"
      subtitle="متطوع — تخصص تقنية"
      sidebarTitle="أدوات المتطوع"
      sidebarItems={sidebarItems}
      sidebarFooter={
        <button className="brand-gradient w-full rounded-xl py-2.5 text-sm font-bold text-white">
          ارفع سيرتك الذاتية
        </button>
      }
    >
      {/* profile completion */}
      <section className="rounded-2xl border border-border bg-card p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-lg font-bold text-navy">اكتمال الملف الشخصي</h2>
          <span className="text-lg font-extrabold text-teal">
            {completion}%
          </span>
        </div>
        <div className="mt-3 h-3 w-full overflow-hidden rounded-full bg-secondary">
          <div
            className="brand-gradient h-full rounded-full"
            style={{ width: `${completion}%` }}
          />
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          {profileChecklist.map((c) => (
            <span
              key={c.label}
              className={
                c.done
                  ? 'flex items-center gap-1.5 text-sm font-medium text-navy'
                  : 'flex items-center gap-1.5 text-sm font-medium text-muted-foreground'
              }
            >
              <CheckCircle2
                className={
                  c.done ? 'h-4 w-4 text-success' : 'h-4 w-4 text-border'
                }
              />
              {c.label}
            </span>
          ))}
        </div>
      </section>

      {/* mini stats */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {miniStats.map((s) => (
          <div
            key={s.label}
            className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-teal">
              <s.icon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-2xl font-extrabold text-navy">{s.value}</p>
              <p className="text-xs font-medium text-muted-foreground">
                {s.label}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* AI recommendations */}
      <section className="mt-8">
        <div className="flex items-center gap-2">
          <div className="brand-gradient flex h-9 w-9 items-center justify-center rounded-xl text-white">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-navy">
              فرص موصى بها لك
            </h2>
            <p className="text-xs font-medium text-teal">
              مدعوم بالذكاء الاصطناعي — بناءً على مهاراتك وموقعك
            </p>
          </div>
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {opportunities
            .filter((o) => o.match)
            .sort((a, b) => (b.match ?? 0) - (a.match ?? 0))
            .slice(0, 3)
            .map((opp) => (
              <OpportunityCard
                key={opp.id}
                opp={opp}
                actionLabel="قدّم الآن"
                showMatch
              />
            ))}
        </div>
      </section>
    </DashboardShell>
  )
}
