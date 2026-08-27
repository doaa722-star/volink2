import { cn } from '@/lib/utils'

export function VolinkMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={cn('h-8 w-8', className)}
      role="img"
      aria-label="شعار Volink"
    >
      {/* left person: head + arm */}
      <circle cx="17" cy="14" r="8" fill="var(--brand-blue)" />
      <path
        d="M15 24 C10 27 8 33 12 40 L30 58 C33 61 33 55 30 52 L20 42 C17 39 18 34 22 31 Z"
        fill="var(--brand-blue)"
      />
      {/* right person: head + arm */}
      <circle cx="47" cy="14" r="8" fill="var(--teal)" />
      <path
        d="M49 24 C54 27 56 33 52 40 L34 58 C31 61 31 55 34 52 L44 42 C47 39 46 34 42 31 Z"
        fill="var(--teal)"
      />
      {/* cyan interlock in the middle */}
      <path
        d="M24 30 C20 33 20 39 24 44 L32 52 L40 44 C44 39 44 33 40 30 C36 34 33 38 32 42 C31 38 28 34 24 30 Z"
        fill="var(--cyan)"
      />
    </svg>
  )
}

export function VolinkLogo({
  className,
  markClassName,
  textClassName,
}: {
  className?: string
  markClassName?: string
  textClassName?: string
}) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <VolinkMark className={markClassName} />
      <span
        className={cn(
          'text-2xl font-extrabold tracking-tight text-navy',
          textClassName,
        )}
      >
        Volink
      </span>
    </div>
  )
}
