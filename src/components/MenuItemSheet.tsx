import { AnimatePresence, motion } from 'motion/react'
import { X } from 'lucide-react'
import { uiText, type Language } from '../i18n'
import type { MenuItem } from '../types/menu'

interface MenuItemSheetProps {
  item: MenuItem | null
  language: Language
  onClose: () => void
}

export function MenuItemSheet({
  item,
  language,
  onClose,
}: MenuItemSheetProps) {
  return (
    <AnimatePresence>
      {item && (
        <div
          className="fixed inset-0 z-50"
          role="dialog"
          aria-modal="true"
          aria-label={item.name}
        >
          <motion.button
            type="button"
            aria-label={uiText.close[language]}
            onClick={onClose}
            className="absolute inset-0 h-full w-full bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="
              absolute
              bottom-0
              left-0
              right-0
              max-h-[92vh]
              overflow-y-auto
              rounded-t-[32px]
              glass-surface
              shadow-2xl

              sm:left-1/2
              sm:bottom-1/2
              sm:right-auto
              sm:w-[min(900px,calc(100%-48px))]
              sm:translate-x-[-50%]
              sm:translate-y-[50%]
              sm:rounded-[32px]
            "
            initial={{
              opacity: 0,
              y: '100%',
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: '100%',
            }}
            transition={{
              type: 'spring',
              damping: 30,
              stiffness: 300,
            }}
          >
            <div className="relative grid sm:grid-cols-[1fr_1fr]">
              <div className="aspect-square overflow-hidden sm:aspect-auto sm:min-h-[520px]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="relative p-6 sm:p-10">
                <button
                  type="button"
                  onClick={onClose}
                  aria-label={uiText.close[language]}
                  className="
                    absolute
                    right-5
                    top-5
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-white/10
                    text-white
                    transition
                    hover:bg-white/20
                  "
                >
                  <X size={22} />
                </button>

                <div>
                  <div className="mb-5 text-4xl font-bold leading-none tracking-tight">
                    {item.price}₾
                  </div>

                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    {item.name}
                  </h2>

                  {item.ingredients.length > 0 && (
                    <div className="mt-8">
                    <h3 className="text-lg font-semibold">
                      {uiText.ingredients[language]}
                    </h3>

                    <ul className="mt-4 space-y-3">
                      {item.ingredients.map((ingredient) => (
                        <li
                          key={ingredient}
                          className="flex items-center gap-3 text-white/75"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
                          {ingredient}
                        </li>
                      ))}
                    </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}