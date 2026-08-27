'use client'

import { useMemo, useState } from 'react'
import { Search, SlidersHorizontal } from 'lucide-react'
import { categories, opportunities } from '@/lib/data'
import { OpportunityCard } from '@/components/opportunity-card'
import { cn } from '@/lib/utils'

export function OpportunitiesExplorer() {
  const [query, setQuery] = useState('')
  const [active, setActive] = useState('all')

  const filtered = useMemo(() => {
    return opportunities.filter((o) => {
      const matchesCat = active === 'all' || o.category === active
      const q = query.trim()
      const matchesQuery =
        q === '' ||
        o.title.includes(q) ||
        o.org.includes(q) ||
        o.skills.some((s) => s.includes(q))
      return matchesCat && matchesQuery
    })
  }, [query, active])

  return (
    <div>
      {/* search */}
      <div className="relative">
        <Search className="pointer-events-none absolute end-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="ابحث عن فرص، مؤسسات، أو مهارات..."
          className="w-full rounded-2xl border border-border bg-card py-4 pe-12 ps-5 text-sm text-navy shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-teal focus:ring-2 focus:ring-teal/20"
        />
      </div>

      {/* category filters */}
      <div className="mt-5 flex flex-wrap items-center gap-2">
        {categories.map((c) => {
          const isActive = active === c.id
          return (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={cn(
                'flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold transition-all',
                isActive
                  ? 'border-transparent bg-navy text-white shadow-md'
                  : 'border-border bg-card text-muted-foreground hover:border-teal/40 hover:text-navy',
              )}
            >
              <c.icon className="h-4 w-4" />
              {c.label}
            </button>
          )
        })}
        <span className="ms-auto flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
          <SlidersHorizontal className="h-3.5 w-3.5" />
          {filtered.length} فرصة متاحة
        </span>
      </div>

      {/* grid */}
      {filtered.length > 0 ? (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((opp) => (
            <OpportunityCard key={opp.id} opp={opp} />
          ))}
        </div>
      ) : (
        <div className="mt-16 text-center">
          <p className="text-lg font-bold text-navy">لا توجد نتائج مطابقة</p>
          <p className="mt-1 text-sm text-muted-foreground">
            جرّب تعديل كلمات البحث أو اختيار تصنيف مختلف.
          </p>
        </div>
      )}
    </div>
  )
}
