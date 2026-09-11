import type { ComponentType, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../lib/utils'

type IconComponent = ComponentType<{ className?: string }>

type ButtonLinkProps = {
  to: string
  children: ReactNode
  icon?: IconComponent
  variant?: 'primary' | 'secondary'
  className?: string
  external?: boolean
}

export function ButtonLink({
  to,
  children,
  icon: Icon,
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
      {Icon ? <Icon className="h-4 w-4" /> : null}
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
