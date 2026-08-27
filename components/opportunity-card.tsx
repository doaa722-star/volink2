import { MapPin, Users, Sparkles } from 'lucide-react'
import type { Opportunity } from '@/lib/data'

export function OpportunityCard({
  opp,
  actionLabel = 'عرض التفاصيل',
  showMatch = false,
}: {
  opp: Opportunity
  actionLabel?: string
  showMatch?: boolean
}) {
  const Icon = opp.icon
  const pct = Math.round((opp.volunteers / opp.needed) * 100)

  return (
    <article className="group flex flex-col rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-navy/5">
      <div className="mb-4 flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-teal">
          <Icon className="h-6 w-6" />
        </div>
        <div className="flex flex-col items-end gap-1.5">
          {opp.urgent && (
            <span className="rounded-full bg-destructive/10 px-2.5 py-1 text-xs font-bold text-destructive">
              عاجل
            </span>
          )}
          {showMatch && opp.match && (
            <span className="flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-xs font-bold text-teal">
              <Sparkles className="h-3 w-3" />
              تطابق {opp.match}%
            </span>
          )}
        </div>
      </div>

      <span className="mb-1 text-xs font-semibold text-teal">
        {opp.categoryLabel}
      </span>
      <h3 className="text-lg font-bold text-navy">{opp.title}</h3>
      <p className="mt-0.5 text-sm font-medium text-muted-foreground">
        {opp.org}
      </p>

      <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
        {opp.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {opp.skills.map((s) => (
          <span
            key={s}
            className="rounded-lg bg-secondary px-2 py-1 text-xs font-medium text-navy"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="mt-4 flex items-center gap-4 text-xs font-medium text-muted-foreground">
        <span className="flex items-center gap-1">
          <MapPin className="h-3.5 w-3.5" />
          {opp.location}
        </span>
        <span className="flex items-center gap-1">
          <Users className="h-3.5 w-3.5" />
          {opp.volunteers}/{opp.needed} متطوع
        </span>
      </div>

      <div className="mt-3">
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full rounded-full bg-teal"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>

      <button className="mt-5 w-full rounded-xl border border-teal/40 bg-accent py-2.5 text-sm font-bold text-teal transition-colors hover:bg-teal hover:text-white">
        {actionLabel}
      </button>
    </article>
  )
}
