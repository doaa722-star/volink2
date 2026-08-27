import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { OpportunitiesExplorer } from '@/components/opportunities-explorer'

export const metadata: Metadata = {
  title: 'استكشف فرص التطوع في عدن — Volink',
  description:
    'تصفّح فرص التطوع في عدن حسب التخصص: التعليم، الصحة، البيئة، التقنية والمجتمع.',
}

export default function OpportunitiesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="border-b border-border bg-card">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <h1 className="text-3xl font-extrabold text-balance text-navy md:text-4xl">
              استكشف فرص التطوع في عدن
            </h1>
            <p className="mt-3 max-w-xl text-pretty text-muted-foreground">
              حدّد المهارات التي تمتلكها، وابحث في كافة التخصصات لتجد الفرصة
              المناسبة لك وأحدث الأثر الذي تطمح إليه.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4 py-10">
          <OpportunitiesExplorer />
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
