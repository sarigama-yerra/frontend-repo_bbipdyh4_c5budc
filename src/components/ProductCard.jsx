export default function ProductCard({ product }) {
  const hasDiscount = product.discount_percent && product.original_price
  return (
    <div className="group bg-white rounded-xl border shadow-sm overflow-hidden">
      <div className="relative">
        <img src={product.images?.[0]} alt={product.title_ar} className="w-full aspect-[4/5] object-cover" />
        {hasDiscount && (
          <div className="absolute top-3 right-3 rtl left-3 right-auto bg-rose-500 text-white text-xs px-2 py-1 rounded-full">
            خصم {product.discount_percent}%
          </div>
        )}
      </div>
      <div className="p-4 rtl text-right">
        <h3 className="font-bold text-slate-800 mb-2 line-clamp-1">{product.title_ar}</h3>
        <div className="flex items-center gap-2 justify-start">
          <span className="text-emerald-700 font-bold">{product.price.toFixed(2)} ر.س</span>
          {hasDiscount && (
            <span className="text-slate-400 line-through text-sm">{product.original_price.toFixed(2)} ر.س</span>
          )}
        </div>
        <div className="mt-3 flex items-center gap-2">
          <button className="px-3 py-1 rounded border hover:bg-slate-50">♡</button>
          <button className="px-3 py-1 rounded border hover:bg-slate-50">👁</button>
          <button className="ml-auto px-4 py-2 rounded bg-emerald-700 text-white hover:bg-emerald-800">إضافة للسلة</button>
        </div>
      </div>
    </div>
  )
}
