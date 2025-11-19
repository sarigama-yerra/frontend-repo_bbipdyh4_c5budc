import Header from './components/Header'
import Hero from './components/Hero'
import ProductsSection from './components/ProductsSection'
import './index.css'

function App() {
  return (
    <div className="rtl bg-white text-slate-800 min-h-screen">
      <Header />
      <Hero />
      <ProductsSection />
      <footer className="bg-white border-t mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 rtl text-right">
          <div>
            <h4 className="font-bold mb-3">روابط</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-emerald-700">من نحن</a></li>
              <li><a href="#" className="hover:text-emerald-700">سياسة الشراء</a></li>
              <li><a href="#" className="hover:text-emerald-700">سياسة الخصوصية و الاستخدام</a></li>
              <li><a href="#" className="hover:text-emerald-700">سياسة الاستبدال والاسترجاع</a></li>
              <li><a href="#" className="hover:text-emerald-700">الاسئلة الشائعة</a></li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-3 flex items-center justify-center">
            <p className="text-sm text-slate-500">© 2025 اوليسيس | Olyses</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
