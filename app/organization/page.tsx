import type { Metadata } from 'next'
import {
  LayoutGrid,
  PlusCircle,
  Users,
  Search,
  Settings,
  FolderKanban,
  UserCheck,
  FileText,
} from 'lucide-react'
import { DashboardShell } from '@/components/dashboard/dashboard-shell'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'لوحة تحكم المؤسسة — Volink',
}

const sidebarItems = [
  { icon: LayoutGrid, label: 'نظرة عامة', active: true },
  { icon: PlusCircle, label: 'إضافة مشروع جديد' },
  { icon: Users, label: 'إدارة المتطوعين' },
  { icon: Search, label: 'البحث الذكي' },
  { icon: Settings, label: 'إعدادات الحساب' },
]

const stats = [
  {
    icon: FolderKanban,
    value: 5,
    label: 'المشاريع النشطة',
    tone: 'teal' as const,
  },
  {
    icon: UserCheck,
    value: 120,
    label: 'المتطوعون المسجلون',
    tone: 'blue' as const,
  },
  {
    icon: FileText,
    value: 15,
    label: 'الطلبات الجديدة',
    tone: 'navy' as const,
  },
]

type Project = {
  name: string
  volunteers: number
  status: 'open' | 'closed'
}

const projects: Project[] = [
  { name: 'ورشة عمل تعليم البرمجة للأطفال', volunteers: 8, status: 'open' },
  { name: 'حملة نظافة ونوعية في كريتر', volunteers: 25, status: 'open' },
  { name: 'فريق تسويق لحدث خيري', volunteers: 5, status: 'closed' },
  { name: 'قافلة طبية لأحياء عدن', volunteers: 12, status: 'open' },
]

const toneMap = {
  teal: 'bg-accent text-teal',
  blue: 'bg-brand-blue/10 text-brand-blue',
  navy: 'bg-navy/10 text-navy',
}

export default function OrganizationDashboard() {
  return (
    <DashboardShell
      greeting="أهلاً، مؤسسة شبل التنموية!"
      subtitle="حساب مؤسسة"
      sidebarTitle="أدوات المؤسسة"
      sidebarItems={sidebarItems}
      sidebarFooter={
        <button className="brand-gradient w-full rounded-xl py-2.5 text-sm font-bold text-white">
          أضف مشروعاً تطوعياً جديداً
        </button>
      }
    >
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-extrabold text-navy">
          لوحة تحكم المؤسسة
        </h1>
      </div>

      {/* quick stats */}
      <h2 className="mt-6 text-sm font-bold text-muted-foreground">
        إحصائيات سريعة
      </h2>
      <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border border-border bg-card p-5"
          >
            <div
              className={cn(
                'flex h-11 w-11 items-center justify-center rounded-xl',
                toneMap[s.tone],
              )}
            >
              <s.icon className="h-6 w-6" />
            </div>
            <p className="mt-4 text-3xl font-extrabold text-navy">{s.value}</p>
            <p className="mt-0.5 text-sm font-medium text-muted-foreground">
              {s.label}
            </p>
          </div>
        ))}
      </div>

      {/* projects table */}
      <h2 className="mt-8 text-sm font-bold text-muted-foreground">
        مشاريعك الحالية
      </h2>
      <div className="mt-3 overflow-hidden rounded-2xl border border-border bg-card">
        <table className="w-full text-right">
          <thead>
            <tr className="border-b border-border bg-secondary/50 text-xs font-bold text-muted-foreground">
              <th className="px-5 py-3 font-bold">المشروع</th>
              <th className="px-5 py-3 font-bold">المتطوعون</th>
              <th className="px-5 py-3 font-bold">الحالة</th>
              <th className="px-5 py-3 font-bold">إجراء</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((p) => (
              <tr
                key={p.name}
                className="border-b border-border last:border-0 transition-colors hover:bg-secondary/30"
              >
                <td className="px-5 py-4 text-sm font-semibold text-navy">
                  {p.name}
                </td>
                <td className="px-5 py-4 text-sm text-muted-foreground">
                  {p.volunteers} متطوع
                </td>
                <td className="px-5 py-4">
                  <span
                    className={cn(
                      'inline-flex rounded-full px-3 py-1 text-xs font-bold',
                      p.status === 'open'
                        ? 'bg-success/10 text-success'
                        : 'bg-destructive/10 text-destructive',
                    )}
                  >
                    {p.status === 'open' ? 'مفتوح للتقديم' : 'مغلق'}
                  </span>
                </td>
                <td className="px-5 py-4">
                  <button className="text-sm font-bold text-teal hover:underline">
                    إدارة
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* smart search promo */}
      <div className="mt-6 flex flex-col items-start gap-4 rounded-2xl border border-teal/30 bg-accent p-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <div className="brand-gradient flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white">
            <Search className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-bold text-navy">البحث الذكي عن المتطوعين</h3>
            <p className="mt-0.5 text-sm text-teal">
              مدعوم بخوارزمية الذكاء الاصطناعي لمطابقة المهارات مع مشاريعك.
            </p>
          </div>
        </div>
        <button className="brand-gradient shrink-0 rounded-xl px-5 py-2.5 text-sm font-bold text-white">
          ابدأ البحث
        </button>
      </div>
    </DashboardShell>
  )
}
