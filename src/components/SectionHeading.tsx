import type { ReactNode } from 'react'
import { cn } from '../lib/utils'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  invert?: boolean
  action?: ReactNode
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  invert = false,
  action,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            'text-sm font-semibold uppercase tracking-[0.24em]',
            invert ? 'text-white/60' : 'text-bridge-orange',
          )}
        >
          {eyebrow}
        </span>
      ) : null}
      <div className="space-y-3">
        <h2
          className={cn(
            'text-3xl font-semibold leading-tight sm:text-4xl',
            invert ? 'text-white' : 'text-slate-900',
          )}
        >
          {title}
        </h2>
        {description ? (
          <p
            className={cn(
              'max-w-2xl text-base leading-7 sm:text-lg',
              invert ? 'text-white/70' : 'text-slate-600',
            )}
          >
            {description}
          </p>
        ) : null}
      </div>
      {action}
    </div>
  )
}
