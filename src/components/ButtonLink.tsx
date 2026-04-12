import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../lib/utils'

type ButtonLinkProps = {
  to: string
  children: ReactNode
  iconSrc?: string
  variant?: 'primary' | 'secondary'
  className?: string
  external?: boolean
}

export function ButtonLink({
  to,
  children,
  iconSrc,
  variant = 'primary',
  className,
  external,
}: ButtonLinkProps) {
  const sharedClassName = cn(
    variant === 'primary' ? 'btn-primary' : 'btn-secondary',
    className,
  )

  const content = (
    <>
      <span>{children}</span>
      {iconSrc ? (
        <img src={iconSrc} alt="" aria-hidden className="h-3 w-4 object-contain" />
      ) : null}
    </>
  )

  if (external || to.startsWith('http')) {
    return (
      <a
        className={sharedClassName}
        href={to}
        rel="noreferrer"
        target="_blank"
      >
        {content}
      </a>
    )
  }

  return (
    <Link className={sharedClassName} to={to}>
      {content}
    </Link>
  )
}
