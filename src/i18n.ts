import type { MenuItem } from './types/menu'

export type Language = 'en' | 'ka'

export const uiText: Record<string, Record<Language, string>> = {
  visitUs: { en: 'Visit us', ka: 'გვესტუმრეთ' },
  menu: { en: 'Menu', ka: 'მენიუ' },
  orderOn: { en: 'Order on', ka: 'შეუკვეთე' },
  ingredients: { en: 'Ingredients', ka: 'ინგრედიენტები' },
  close: { en: 'Close', ka: 'დახურვა' },
  mexicanFavorites: { en: 'Mexican favorites', ka: 'მექსიკური ფავორიტები' },
  freshIntro: {
    en: "Fresh ingredients, bold flavors and your Chiko's favorites.",
    ka: 'ფრეშ ინგრედიენტები, თამამი არომატი და თქვენი ჩიკოს ფავორიტები.',
  },
  slogan: {
    en: 'Feel what we do and we do what we feel',
    ka: 'იგრძენი ის, რასაც ვაკეთებთ, და ჩვენც ვაკეთებთ იმას, რასაც ვგრძნობთ',
  },
  all: { en: 'All', ka: 'ყველა' },
  burritos: { en: 'Burrito', ka: 'ბურიტო' },
  quesadillas: { en: 'Quesadilla', ka: 'კესადია' },
  combos: { en: 'Combo', ka: 'კომბო' },
  nachos: { en: 'Nachos & Fries', ka: 'ნაჩოსი და ფრი' },
  sauces: { en: 'Sauce', ka: 'სოუსი' },
  drinks: { en: 'Drinks', ka: 'სასმელები' },
}

export const categoryTranslations: Record<string, Record<Language, string>> = {
  all: uiText.all,
  burritos: uiText.burritos,
  quesadillas: uiText.quesadillas,
  combos: uiText.combos,
  nachos: uiText.nachos,
  sauces: uiText.sauces,
  drinks: uiText.drinks,
  coffee: uiText.coffee,
}

const itemTranslations: Record<string, Record<Language, { name: string; description: string }>> = {
  quesadilla: {
    en: { name: 'Quesadilla', description: 'Tortilla stuffed with marinated chicken, Chipotle sauce, Gouda cheese, Beans, Sweet corn, Jalapeno.' },
    ka: { name: 'კესადია', description: 'ტორტილა მარინირებული ქათმით, Chipotle სოუსით, Gouda ყველით, ლობიოთი, ტკბილი სიმინდით და ხალაპენიოთი.' },
  },
  'california-burrito': {
    en: { name: 'California Burrito', description: 'Tortilla filled with marinated chicken, Chipotle sauce, Jalapeno, French fries, Gouda cheese.' },
    ka: { name: 'ბურიტო კალიფორნია', description: 'ტორტილა მარისეული ქათმით, Chipotle სოუსით, ხახვით, ფრაიებით და Gouda ყველით.' },
  },
  'beef-burrito': {
    en: { name: 'Beef Burrito', description: 'Tortilla filled with seasoned ground beef, Chipotle sauce, Cheddar cheese, Jalapeno, Cilantro, Red bean, Fried onion, Garlic, Tomato sauce.' },
    ka: { name: 'საქონლის ბურიტო', description: 'ტორტილა შეზავებული საქონლის ხორცით, Chipotle სოუსით, Cheddar ყველით, ხალაპენიოთი, ქინძით, წითელი ლობიოთი, შემწვარი ხახვით, ნიორით და პომიდვრის სოუსით.' },
  },
  'veggie-burrito': {
    en: { name: 'Veggie Burrito', description: 'Tortilla packed with vegetables, Guacamole, Sweet corn, Fresh salad sauce.' },
    ka: { name: 'ვეჯი ბურიტო', description: 'ტორტილა ბოსტნეულით, გუაკამოლით, ტკბილი სიმინდით და ახალი სალათის სოუსით.' },
  },
  'protein-burrito': {
    en: { name: 'Protein Burrito', description: 'High-protein burrito with vegetables, chicken, Jalapeno, Peanut sauce.' },
    ka: { name: 'პროტეინ ბურიტო', description: 'ცილებით მდიდარი ბურიტო ბოსტნეულით, ქათმით, ხალაპენიოთი და არაქისის სოუსით.' },
  },
  'spicy-burrito': {
    en: { name: 'Ceaser Burrito', description: 'Spicy pulled pork burrito with Chipotle sauce, Sweet corn, Jalapeno, Caesar sauce.' },
    ka: { name: 'ცეზარის ბურიტო', description: 'ცხარე ღორის ბურიტო Chipotle სოუსით, ტკბილი სიმინდით, ხალაპენიოთი და Caesar სოუსით.' },
  },
  'tuna-burrito': {
    en: { name: 'Tuna Burrito', description: 'Burrito stuffed with tuna, vegetables, Sweet corn, Cheddar cheese, Peanut sauce, Pickles, Cucumber.' },
    ka: { name: 'თინუსის ბურიტო', description: 'ბურიტო თინუსით, ბოსტნეულით, ტკბილი სიმინდით, Cheddar ყველით, არაქისის სოუსით, მწნილებით და კიტრით.' },
  },
  'cheese-bacon-burrito': {
    en: { name: 'Cheese-Bacon Burrito', description: 'Burrito with vegetables, French fries, chicken, Chipotle sauce, Bacon, Cheese sauce.' },
    ka: { name: 'ჩიზ-ბეკონ ბურიტო', description: 'ბურიტო ბოსტნეულით, ფრაიებით, ქათმით, Chipotle სოუსით, ბეკონით და ყველის სოუსით.' },
  },
  'burrito-grande': {
    en: { name: 'Burrito Grande', description: 'Extra large burrito with chicken, vegetables, Chipotle sauce, Jalapeno, French fries, Gouda cheese.' },
    ka: { name: 'ბურიტო გრანდე', description: 'უფრო დიდი ბურიტო ქათმით, ბოსტნეულით, Chipotle სოუსით, ხახვით, ფრაიებით და Gouda ყველით.' },
  },
  'cheese-bacon-combo': {
    en: { name: 'Cheese-Bacon Combo', description: 'Cheese Bacon Burrito served with French Fries, Cheese Sauce, and Coca-Cola.' },
    ka: { name: 'ჩიზ-ბეკონ კომბო', description: 'ყველისა და ბეკონის ბურიტო ფრაიებით, ყველის სოუსით და Coca-Cola-თ.' },
  },
  'beef-burrito-combo': {
    en: { name: 'Beef Burrito Combo', description: 'Beef Burrito served with French Fries, Sauce, and Coca-Cola.' },
    ka: { name: 'საქონლის ბურიტოს კომბო', description: 'საქონლის ბურიტო ფრაიებით, სოუსით და Coca-Cola-თ.' },
  },
  'california-combo': {
    en: { name: 'California Combo', description: 'California Burrito served with French Fries, Sauce, and Coca-Cola.' },
    ka: { name: 'კალიფორნია კომბო', description: 'კალიფორნიის ბურიტო ფრაიებით, სოუსით და Coca-Cola-თ.' },
  },
  'french-fries': {
    en: { name: 'French Fries', description: 'Crispy fried potatoes with seasoning.' },
    ka: { name: 'კარტოფილი ფრი', description: 'ხრაშუნა შემწვარი კარტოფილი სანელებლებით.' },
  },
  'chicken-nachos-guacamole': {
    en: { name: 'Chicken Nachos Guacamole Sauce', description: 'Corn nachos topped with chicken, Cheese sauce, Jalapeno, and Guacamole sauce.' },
    ka: { name: 'ქათმის ნაჩოსი გუაკამოლე სოუსით', description: 'სიმინდის ნაჩოსი ქათმით, ყველის სოუსით, ხახვით და გუაკამოლე სოუსით.' },
  },
  'fries-jalapeno': {
    en: { name: 'Fries with Jalapeno', description: 'French fries topped with melted cheese sauce and sliced jalapenos.' },
    ka: { name: 'ფრი ჰალაპენიოთი', description: 'ფრაი გალღობილი ყველის სოუსით და მოჭრილი ხახვით.' },
  },
  'cheese-sauce': {
    en: { name: 'Cheese Sauce', description: 'Creamy cheese sauce.' },
    ka: { name: 'ყველის სოუსი', description: 'კრემისებრი ყველის სოუსი.' },
  },
  'chipotle-sauce': {
    en: { name: 'Chipotle Sauce', description: 'Smoky and mild chipotle pepper sauce.' },
    ka: { name: 'ჩიპოტლეს სოუსი', description: 'შებოლილი და ზომიერად ცხარე ჩიპოტლეს წიწაკის სოუსი.' },
  },
  ketchup: {
    en: { name: 'Ketchup', description: 'Classic tomato ketchup.' },
    ka: { name: 'კეტჩუპი', description: 'კლასიკური პომიდვრის კეტჩუპი.' },
  },
  'peanut-sauce': {
    en: { name: 'Sour Cream Sauce', description: 'Rich peanut sauce.' },
    ka: { name: 'არაჟნის სოუსი', description: 'მდიდარი არაქისის სოუსი.' },
  },
  'caesar-sauce': {
    en: { name: 'Caesar Sauce', description: 'Creamy Caesar dressing sauce.' },
    ka: { name: 'ცეზარის სოუსი', description: 'კრემისებრი Caesar-ის სოუსი.' },
  },
  'jalapeno-side': {
    en: { name: 'Jalapeno', description: 'Extra sliced jalapeno peppers.' },
    ka: { name: 'ხალაპენიო', description: 'დამატებითი დაჭრილი ხალაპენიო.' },
  },
  water: {
    en: { name: 'Water', description: 'Bottled still water.' },
    ka: { name: 'წყალი', description: 'უგაზო წყალი ბოთლში.' },
  },
  'coca-cola-can': {
    en: { name: 'Coca-Cola (Can)', description: 'Classic Coca-Cola in a can.' },
    ka: { name: 'კოკა-კოლა (ქილა)', description: 'კლასიკური Coca-Cola ქილაში.' },
  },
  'fanta-can': {
    en: { name: 'Fanta (Can)', description: 'Fanta orange flavor in a can.' },
    ka: { name: 'ფანტა (ქილა)', description: 'ფანტა ნარინჯის არომატით ქილაში.' },
  },
  'coca-cola-bottle': {
    en: { name: 'Coca-Cola (Bottle)', description: 'Classic Coca-Cola bottle.' },
    ka: { name: 'კოკა-კოლა (ბოთლი)', description: 'კლასიკური Coca-Cola ბოთლში.' },
  },
  'fanta-sprite-glass': {
    en: { name: 'Fanta / Sprite (Bottle)', description: 'Fanta or Sprite served in a glass bottle.' },
    ka: { name: 'ფანტა (ბოთლი)', description: 'ფანტა ან სპრაიტი შუშის ბოთლში.' },
  },
  'coca-cola-lemon-zero': {
    en: { name: 'Coca-Cola Zero', description: 'Coca-Cola Lemon or Zero Sugar.' },
    ka: { name: 'კოკა-კოლა ზერო', description: 'Coca-Cola ლიმონის არომატით ან უშაქრო ვერსია.' },
  },
  'cappy-juice': {
    en: { name: 'Cappy Pulpy', description: 'Cappy juice (Apple, Cherry, Orange).' },
    ka: { name: 'კაპი პალპი', description: 'Cappy-ის წვენი (ვაშლი, ალუბალი, ფორთოხალი).' },
  },
  'burn-energy': {
    en: { name: 'Burn Energy', description: 'Burn energy drink.' },
    ka: { name: 'ბარნი', description: 'Burn ენერგეტიკული სასმელი.' },
  },
  'coca-cola-coffee': {
    en: { name: 'Coca-Cola Coffee', description: 'Coca-Cola with coffee flavor.' },
    ka: { name: 'კოკა-კოლა ყავა', description: 'კოკა-კოლა ყავის არომატით.' },
  },
  'cappy-pulpy': {
    en: { name: 'Cappy Pulpy', description: 'Cappy Pulpy fruit drink.' },
    ka: { name: 'კაპი პალპი', description: 'Cappy Pulpy ხილის სასმელი.' },
  },
  'fuse-tea': {
    en: { name: 'Fuse Tea', description: 'Ice Tea (Peach, Mango-Pineapple).' },
    ka: { name: 'ცივი ჩაი', description: 'ცივი ჩაი (ატამი, მანგო-ანანასი).' },
  },
  americano: {
    en: { name: 'Americano Coffee', description: 'Classic hot Americano coffee.' },
    ka: { name: 'ამერიკანო', description: 'კლასიკური ცხელი ამერიკანო.' },
  },
  cappuccino: {
    en: { name: 'Cappuccino / Latte', description: 'Rich espresso with steamed milk foam.' },
    ka: { name: 'კაპუჩინო / ლატე', description: 'მდიდარი ესპრესო ორთქლზე მომზადებული რძის ქაფით.' },
  },
  'cold-coffee': {
    en: { name: 'Cold Coffee', description: 'Refreshing iced coffee drink.' },
    ka: { name: 'ცივი ყავა', description: 'გამაგრილებელი ცივი ყავა.' },
  },
  'cold-coffee-ice-cream': {
    en: { name: 'Cold Coffee with Ice Cream', description: 'Cold coffee topped with a scoop of vanilla ice cream.' },
    ka: { name: 'ყინული ყავა ნაყინით', description: 'გაციებული ყავა ვანილის ნაყინით.' },
  },
  tea: {
    en: { name: 'Hot Tea', description: 'Hot brewed tea.' },
    ka: { name: 'ცხელი ჩაი', description: 'ცხელი ჩაის ინფუზია.' },
  },
}

const ingredientTranslations: Record<string, Record<Language, string>> = {
  Tortilla: { en: 'Tortilla', ka: 'ტორტილა' },
  'Marinated Chicken (180g)': { en: 'Marinated Chicken (180g)', ka: 'დამარინადებული ქათამი (180გ)' },
  'Marinated Chicken (200g)': { en: 'Marinated Chicken (200g)', ka: 'დამარინადებული ქათამი (200გ)' },
  'Marinated Chicken (240g)': { en: 'Marinated Chicken (240g)', ka: 'დამარინადებული ქათამი (240გ)' },
  'Marinated Chicken (400g)': { en: 'Marinated Chicken (400g)', ka: 'დამარინადებული ქათამი (400გ)' },
  'Marinated Chicken (120g)': { en: 'Marinated Chicken (120g)', ka: 'დამარინადებული ქათამი (120გ)' },
  'Chipotle Sauce': { en: 'Chipotle Sauce', ka: 'ჩიპოტლეს სოუსი' },
  'Gouda Cheese': { en: 'Gouda Cheese', ka: 'ყველი გაუდა' },
  Beans: { en: 'Beans', ka: 'ლობიო' },
  'Sweet Corn': { en: 'Sweet Corn', ka: 'ტკბილი სიმინდი' },
  Jalapeno: { en: 'Jalapeno', ka: 'ჰალაპენიო' },
  'Seasoned Ground Beef (240g)': { en: 'Seasoned Ground Beef (240g)', ka: 'დამარინადებული საქონლის ხორცი (240გ)' },
  'Cheddar Cheese': { en: 'Cheddar Cheese', ka: 'ჩედარის' },
  Cheddar: { en: 'Cheddar', ka: 'ჩედარის' },
  'Iceberg Lettuce': { en: 'Iceberg Lettuce', ka: 'აისბერგი' },
  Falafel: { en: 'Falafel', ka: 'ფალაფელი' },
  Sauce: { en: 'Sauce', ka: 'სოუსი' },
  Parmesan: { en: 'Parmesan', ka: 'პარმეზანის' },
  'Parmesan Cheese': { en: 'Parmesan Cheese', ka: 'პარმეზანის' },
  'Fried Potatoes': { en: 'Fried Potatoes', ka: 'შემწვარი კარტოფილი' },
  Salt: { en: 'Salt', ka: 'მარილი' },
  'Tortilla Chips': { en: 'Tortilla Chips', ka: 'ტორტილას ჩიფსი' },
  Cilantro: { en: 'Cilantro', ka: 'კილანტრო' },
  'Red Bean': { en: 'Red Bean', ka: 'წითელი ლობიო' },
  'Fried Onion': { en: 'Fried Onion', ka: 'შემწვარი ხახვი' },
  Garlic: { en: 'Garlic', ka: 'ნიორი' },
  'Tomato Sauce': { en: 'Tomato Sauce', ka: 'პომიდვრის სოუსი' },
  Vegetables: { en: 'Vegetables', ka: 'ბოსტნეული' },
  Guacamole: { en: 'Guacamole', ka: 'გუაკამოლე' },
  'Fresh Salad Sauce': { en: 'Sauce', ka: 'სოუსი' },
  'Peanut Sauce': { en: 'Peanut Sauce', ka: 'თხილის სოუსი' },
  'Pulled Pork (200g)': { en: 'Seasoned Ground Beef (240g)', ka: 'გატარებული საქონლის ხორცი (240გ)' },
  'Caesar Sauce': { en: 'Caesar Sauce', ka: 'ცეზარის სოუსი' },
  Tuna: { en: 'Tuna', ka: 'თინუსი' },
  Pickles: { en: 'Pickles', ka: 'მწნილი' },
  Cucumber: { en: 'Cucumber', ka: 'კიტრი' },
  Bacon: { en: 'Bacon', ka: 'ბეკონი' },
  'Cheese Sauce': { en: 'Cheese Sauce', ka: 'ყველის სოუსი' },
  'French Fries': { en: 'French Fries', ka: 'კარტოფილი ფრი' },
  'Coca-Cola': { en: 'Coca-Cola', ka: 'კოკა-კოლა' },
  'Corn Nachos': { en: 'Nachos', ka: 'ნაჩოსი' },
  Chicken: { en: 'Chicken', ka: 'ქათამი' },
  'Guacamole Sauce': { en: 'Guacamole Sauce', ka: 'გუაკამოლე სოუსი' },
  'Cheese': { en: 'Cheese', ka: 'ყველი' },
  'Chipotle': { en: 'Chipotle', ka: 'ჩიპოტლე' },
  Spices: { en: 'Spices', ka: 'სუნელი' },
  Tomato: { en: 'Tomato', ka: 'პომიდორი' },
  Peanuts: { en: 'Peanuts', ka: 'არაქისი' },
  'Jalapeno Peppers': { en: 'Jalapeno Peppers', ka: 'ჰალაპენიო' },
  Water: { en: 'Water', ka: 'წყალი' },
  'Carbonated Water': { en: 'Carbonated Water', ka: 'გაზიანი წყალი' },
  Sugar: { en: 'Sugar', ka: 'შაქარი' },
  'Cola Extract': { en: 'Cola Extract', ka: 'კოლას ექსტრაქტი' },
  'Orange Flavor': { en: 'Orange Flavor', ka: 'ნარინჯის არომატი' },
  'Carbonated Soft Drink': { en: 'Carbonated Soft Drink', ka: 'გაზიანი სასმელი' },
  'Fruit Juice Concentrate': { en: 'Fruit Juice Concentrate', ka: 'ხილის წვენის კონცენტრატი' },
  Caffeine: { en: 'Caffeine', ka: 'კოფეინი' },
  Taurine: { en: 'Taurine', ka: 'ტაურინი' },
  'Coffee Extract': { en: 'Coffee Extract', ka: 'ყავის ექსტრაქტი' },
  'Fruit Juice': { en: 'Fruit Juice', ka: 'ხილის წვენი' },
  'Fruit Pulp': { en: 'Fruit Pulp', ka: 'ხილის რბილობი' },
  'Tea Extract': { en: 'Tea Extract', ka: 'ჩაის ექსტრაქტი' },
  'Fruit Flavoring': { en: 'Fruit Flavoring', ka: 'ხილის არომატი' },
  'Espresso': { en: 'Espresso', ka: 'ესპრესო' },
  'Hot Water': { en: 'Hot Water', ka: 'ცხელი წყალი' },
  'Steamed Milk': { en: 'Steamed Milk', ka: 'ორთქლზე მომზადებული რძე' },
  'Milk Foam': { en: 'Milk Foam', ka: 'რძის ქაფი' },
  'Cold Milk': { en: 'Cold Milk', ka: 'გაციებული რძე' },
  Ice: { en: 'Ice', ka: 'ყინული' },
  'Ice Cream': { en: 'Ice Cream', ka: 'ნაყინი' },
  'Tea Leaves': { en: 'Tea Leaves', ka: 'ჩაის ფოთლები' },
}

export function getTranslatedCategory(categoryId: string, language: Language): string {
  return categoryTranslations[categoryId]?.[language] ?? categoryId
}

export function getTranslatedItemName(item: MenuItem, language: Language): string {
  return itemTranslations[item.id]?.[language]?.name ?? item.name
}

export function getTranslatedItemDescription(item: MenuItem, language: Language): string | undefined {
  return itemTranslations[item.id]?.[language]?.description ?? item.description
}

export function getTranslatedIngredients(item: MenuItem, language: Language): string[] {
  if (language === 'en') {
    return item.ingredients
  }

  return item.ingredients.map((ingredient) => ingredientTranslations[ingredient]?.ka ?? ingredient)
}
