import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import {
  Clock3,
  MapPin,
  Phone,
  UtensilsCrossed,
} from 'lucide-react'

import { CategoryNav } from './components/CategoryNav'
import { MenuCard } from './components/MenuCard'
import { MenuItemSheet } from './components/MenuItemSheet'
import { categories, menuItems } from './data/menu'
import {
  getTranslatedCategory,
  getTranslatedIngredients,
  getTranslatedItemDescription,
  getTranslatedItemName,
  uiText,
  type Language,
} from './i18n'
import type { MenuItem } from './types/menu'

function BrandLockup() {
  return (
    <div className="brand-wordmark" aria-label="Chiko's">
      <img
        className="brand-title"
        src="/images/chikos_name_logo.jpeg"
        alt="Chiko's"
      />
    </div>
  )
}

const locations = [
  {
    address: 'Ioane Petritsi 13D',
    addressKa: 'იოანე პეტრიწის 13დ',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Chikos%20Petritsi%2013D%20Tbilisi',
  },
  {
    address: 'Petre Kavtaradze 66A',
    addressKa: 'პეტრე ქავთარაძის 66ა',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Chikos%20Kavtaradze%2066A%20Tbilisi',
  },
]

function App() {
  const [language, setLanguage] = useState<Language>('ka')
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id ?? '')
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)

  const translatedCategories = useMemo(
    () =>
      categories.map((category) => ({
        ...category,
        name: getTranslatedCategory(category.id, language),
      })),
    [language],
  )

  const translatedItems = useMemo(
    () =>
      menuItems.map((item) => ({
        ...item,
        name: getTranslatedItemName(item, language),
        description: getTranslatedItemDescription(item, language),
        ingredients: getTranslatedIngredients(item, language),
      })),
    [language],
  )

  const visibleItems = useMemo(() => {
    if (activeCategory === 'all') {
      return translatedItems
    }

    return translatedItems.filter((item) => item.category === activeCategory)
  }, [activeCategory, translatedItems])

  const toggleLanguage = () => {
    setLanguage((current) => (current === 'en' ? 'ka' : 'en'))
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="mx-auto max-w-[1440px] px-2 pb-16 sm:px-4 lg:px-8">
        <header className="relative flex min-h-24 items-center justify-start py-3 sm:min-h-28 sm:py-3">
          <div className="-ml-2 sm:-ml-4 lg:-ml-8">
            <BrandLockup />
          </div>

          <button
            type="button"
            className="
              absolute
              right-0
              top-1/2
              -translate-y-1/2
              flex
              h-10
              w-20
              items-center
              justify-center
              rounded-full
              border border-white/10
              bg-[#242426]
              glass-surface-subtle
              text-xs
              font-bold
              tracking-wide
              leading-none
              text-white/80
              transition
              hover:bg-[#303033]
              hover:text-white
            "
            onClick={toggleLanguage}
            aria-label="Change language"
            title="Change language"
          >
            <div className="relative grid h-8 w-[72px] grid-cols-2 place-items-center leading-none">
              <span
                aria-hidden="true"
                className={`absolute left-0.5 top-0.5 h-7 w-[34px] rounded-full bg-[#f4cf76] transition-transform duration-300 ease-out ${language === 'ka' ? 'translate-x-[34px]' : ''}`}
              />
              <span
                className={`relative z-10 flex h-7 w-full items-center justify-center text-center leading-none transition-colors duration-300 ${language === 'en' ? 'text-black' : 'text-white/50'}`}
              >
                EN
              </span>
              <span
                className={`relative z-10 flex h-7 w-full items-center justify-center text-center leading-none transition-colors duration-300 ${language === 'ka' ? 'text-black' : 'text-white/50'}`}
              >
                KA
              </span>
            </div>
          </button>
        </header>

        <section className="pb-4 pt-0" aria-labelledby="locations-heading">
          <div className="mb-2 pl-2 sm:pl-4">
            <p
              id="locations-heading"
              className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f4cf76]"
            >
              {uiText.visitUs[language]}
            </p>
          </div>

          <div className="glass-surface overflow-hidden rounded-2xl">
            <picture>
              <source media="(min-width: 640px)" srcSet="/images/chikos_desktop.jpg" />
              <img
                className="h-64 w-full object-cover sm:h-160 lg:h-[600px]"
                src="/images/menu.jpeg"
                alt="Chiko's menu"
              />
            </picture>
            <div className="grid gap-3 p-4 sm:grid-cols-2">
              {locations.map((location) => (
                <a
                  key={location.address}
                  className="location-button location-action flex min-w-0 items-center justify-between gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-white/85 transition hover:text-white"
                  href={location.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="flex min-w-0 items-center gap-2">
                    <MapPin className="location-action-icon shrink-0" size={18} />
                    <span>{language === 'ka' ? location.addressKa : location.address}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-10 pt-0 sm:pb-12">
          <div className="glass-surface rounded-2xl p-5 sm:p-6">
            <p className="max-w-xl text-sm leading-6 text-white/80 sm:text-base">
              {uiText.freshIntro[language]}
            </p>
            <p className="mt-3 text-sm italic text-white/70">
              {uiText.slogan[language]}
            </p>
            <div className="mt-5 flex flex-col gap-3 border-t border-white/15 pt-4 text-sm text-white/90 sm:flex-row sm:items-center sm:gap-6">
              <a
                className="flex items-center gap-2 transition hover:text-[#f4cf76]"
                href="tel:+995568887354"
              >
                <Phone size={17} className="text-[#f4cf76]" />
                <span>568 887 354</span>
              </a>
              <span className="flex items-center gap-2">
                <Clock3 size={17} className="text-[#f4cf76]" />
                <span>12:00 - 02:00</span>
              </span>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-white/15 pt-4">
              <span className="mr-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                <UtensilsCrossed size={15} className="text-[#f4cf76]" />
                <span>{uiText.mexicanFavorites[language]}</span>
              </span>
              <span className="rounded-full bg-[#d83b32] px-3 py-1 text-xs font-bold leading-none text-white">
                {uiText.burritos[language]}
              </span>
              <span className="rounded-full bg-[#d83b32] px-3 py-1 text-xs font-bold leading-none text-white">
                {uiText.quesadillas[language]}
              </span>
              <span className="rounded-full bg-[#d83b32] px-3 py-1 text-xs font-bold leading-none text-white">
                {uiText.nachos[language]}
              </span>
              <span className="flex items-center gap-1 rounded-full bg-[#d83b32] px-3 py-1 text-xs font-bold leading-none text-white">
                <span aria-hidden="true">🇲🇽</span>
                Mexico
              </span>
            </div>
            <div className="mt-3 flex flex-nowrap items-center gap-3">
              <span className="mr-3 text-xs font-semibold uppercase tracking-[0.16em] text-white sm:mr-4">
                {uiText.orderOn[language]}
              </span>
              <span className="h-10 w-10 shrink-0 overflow-hidden rounded-full">
                <img className="h-full w-full scale-[1.5] object-contain" src="/images/wolt.jpeg" alt="Wolt" />
              </span>
              <span className="h-10 w-10 shrink-0 overflow-hidden rounded-full">
                <img className="h-full w-full scale-[1.1] object-contain" src="/images/glovo.png" alt="Glovo" />
              </span>
              <span className="h-10 w-10 shrink-0 overflow-hidden rounded-full">
                <img className="h-full w-full scale-[1.02] object-contain" src="/images/bolt.jpeg" alt="Bolt Food" />
              </span>
            </div>
          </div>
        </section>

        <CategoryNav
          categories={translatedCategories}
          activeCategory={activeCategory}
          onChange={setActiveCategory}
        />

        <section className="pt-6">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {visibleItems.map((item) => (
                <MenuCard
                  key={item.id}
                  item={item}
                  onSelect={setSelectedItem}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </section>
      </main>

      <MenuItemSheet
        item={selectedItem}
        language={language}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  )
}

export default App