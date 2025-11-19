import { ShoppingCart, User, Search } from "lucide-react"

export default function Header() {
  return (
    <header className="rtl bg-white/90 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4 text-slate-700">
          <div className="flex items-center gap-1 cursor-pointer hover:text-emerald-700 transition">
            <ShoppingCart className="w-5 h-5" />
            <span className="text-sm">سلة التسوق (0)</span>
          </div>
          <button className="hover:text-emerald-700 transition" aria-label="تسجيل الدخول">
            <User className="w-5 h-5" />
          </button>
          <button className="hover:text-emerald-700 transition" aria-label="بحث">
            <Search className="w-5 h-5" />
          </button>
        </div>

        <nav className="text-slate-800 text-sm">
          <a href="#" className="hover:text-emerald-700">الاكثر مبيعا</a>
        </nav>

        <div className="flex items-center">
          <img src="/logo-olyses.svg" alt="اوليسيس | Olyses" className="h-8" />
        </div>
      </div>
    </header>
  )
}
