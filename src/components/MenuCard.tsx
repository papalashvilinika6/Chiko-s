import { useState } from 'react'
import type { MenuItem } from '../types/menu'

interface MenuCardProps {
  item: MenuItem
  onSelect: (item: MenuItem) => void
}

export function MenuCard({
  item,
  onSelect,
}: MenuCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <button
      type="button"
      onClick={() => onSelect(item)}
      aria-busy={!imageLoaded}
      className="
        group
        w-full
        overflow-hidden
        rounded-[24px]
        glass-surface
        text-left
        transition
        duration-300
        hover:-translate-y-1
        hover:bg-[#222225]
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-white/60
        active:scale-[0.99]
      "
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#2a2a2d]">
        {!imageLoaded && (
          <div
            className="skeleton-shimmer absolute inset-0"
            aria-hidden="true"
          />
        )}
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageLoaded(true)}
          className={`
            h-full
            w-full
            object-cover
            transition
            duration-500
            ${imageLoaded ? 'opacity-100' : 'opacity-0'}
            group-hover:scale-[1.04]
          `}
        />
      </div>

      <div className="p-5">
        <div className="mb-2 flex h-7 items-center text-2xl font-bold leading-none tracking-tight">
          {item.price}₾
        </div>

        <h3 className="text-base font-semibold leading-snug text-white/95">
          {item.name}
        </h3>
      </div>
    </button>
  )
}