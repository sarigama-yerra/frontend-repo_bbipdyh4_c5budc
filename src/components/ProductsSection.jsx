import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

export default function ProductsSection() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/products`)
        const data = await res.json()
        setProducts(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <h2 className="rtl text-right text-2xl font-extrabold text-slate-800 mb-6">أحدث المنتجات</h2>
        {loading ? (
          <div className="text-center text-slate-500">جار التحميل...</div>
        ) : (
          <div className="product-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((p, i) => (
              <ProductCard key={i} product={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
