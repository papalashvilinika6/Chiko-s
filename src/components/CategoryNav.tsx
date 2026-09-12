import type { MenuCategory } from '../types/menu'

interface CategoryNavProps {
  categories: MenuCategory[]
  activeCategory: string
  onChange: (categoryId: string) => void
}

export function CategoryNav({
  categories,
  activeCategory,
  onChange,
}: CategoryNavProps) {
  return (
    <nav
      className="
        sticky
        top-0
        z-30
        -mx-4
        overflow-x-auto
        bg-black/90
        glass-nav
        px-4
        py-3
        backdrop-blur-xl
        sm:-mx-6
        sm:px-6
      "
    >
      <div className="flex w-max gap-2">
        {categories.map((category) => {
          const active = category.id === activeCategory

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => onChange(category.id)}
              className={`
                whitespace-nowrap
                rounded-full
                flex
                h-12
                items-center
                justify-center
                px-5
                text-sm
                font-semibold
                leading-none
                transition
                duration-200
                ${
                  active
                    ? 'bg-[#d83b32] text-white shadow-lg shadow-[#d83b32]/20'
                    : 'glass-surface-subtle text-white/70 hover:bg-white/10 hover:text-white'
                }
              `}
            >
              <span className="leading-none">{category.name}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}