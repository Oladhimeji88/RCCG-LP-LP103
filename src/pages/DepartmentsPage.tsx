import { useMemo, useState } from 'react'
import { SectionHeading } from '../components/SectionHeading'
import { departments, departmentShowcaseImages } from '../lib/siteData'
import { cn } from '../lib/utils'

export function DepartmentsPage() {
  const categories = useMemo(
    () => Array.from(new Set(departments.map((department) => department.type))),
    [],
  )
  const [activeCategory, setActiveCategory] = useState(categories[0] ?? '')
  const [expandedId, setExpandedId] = useState<number | null>(departments[0]?.id ?? null)

  const filteredDepartments = departments.filter(
    (department) => department.type === activeCategory,
  )

  return (
    <main className="bg-white pt-28">
      <section className="section-space">
        <div className="page-shell space-y-12">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <SectionHeading
              eyebrow="Departments"
              title="Empowering lives through dedicated departments."
              description="There’s room for you here to serve, lead, and grow in purpose. Our departments are more than teams. They’re families on assignment."
            />

            <div className="grid grid-cols-2 gap-4">
              {departmentShowcaseImages.map((image, index) => (
                <div
                  className={cn(
                    'overflow-hidden rounded-[1.75rem] bg-slate-100 shadow-soft',
                    index > 1 ? 'translate-y-4' : '',
                  )}
                  key={image}
                >
                  <img
                    alt="Department showcase"
                    className="h-64 w-full object-cover"
                    src={image}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-8 rounded-[3px] bg-stone-50 p-6 shadow-soft lg:grid-cols-[18rem_1fr]">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-slate-900">Categories</h2>
              <div className="flex flex-wrap gap-3 lg:flex-col">
                {categories.map((category) => (
                  <button
                    className={cn(
                      'rounded-2xl px-4 py-3 text-left text-sm font-semibold transition',
                      activeCategory === category
                        ? 'bg-bridge-orange text-white'
                        : 'bg-slate-700 text-white hover:bg-slate-600',
                    )}
                    key={category}
                    onClick={() => {
                      setActiveCategory(category)
                      setExpandedId(
                        departments.find((department) => department.type === category)?.id ??
                          null,
                      )
                    }}
                    type="button"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {filteredDepartments.map((department) => {
                const expanded = expandedId === department.id

                return (
                  <article
                    className="overflow-hidden rounded-[3px] border border-slate-200 bg-white"
                    key={department.id}
                  >
                    <button
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                      onClick={() =>
                        setExpandedId((current) =>
                          current === department.id ? null : department.id,
                        )
                      }
                      type="button"
                    >
                      <div>
                        <p className="text-lg font-semibold text-slate-900">
                          {department.name}
                        </p>
                        <p className="mt-1 text-sm text-slate-500">
                          Led by {department.leader.name}
                        </p>
                      </div>
                      <span className="text-2xl font-light text-slate-400">
                        {expanded ? '−' : '+'}
                      </span>
                    </button>

                    {expanded ? (
                      <div className="grid gap-6 border-t border-slate-200 px-5 py-5 sm:grid-cols-[1fr_auto] sm:items-center">
                        <p className="text-slate-600">{department.description}</p>
                        <div className="flex items-center gap-4 sm:flex-col sm:text-right">
                          <img
                            alt={department.leader.name}
                            className="h-20 w-20 rounded-full object-cover"
                            src={department.leader.image}
                          />
                          <div>
                            <p className="font-semibold text-slate-900">
                              {department.leader.name}
                            </p>
                            <p className="text-sm text-slate-500">
                              {department.leader.position}
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
