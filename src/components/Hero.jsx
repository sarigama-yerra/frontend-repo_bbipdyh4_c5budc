export default function Hero() {
  return (
    <section className="rtl bg-[#2D5A4A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div className="hero-content-rtl flex flex-col md:flex-row-reverse items-center gap-10">
          <div className="hero-text text-white text-right max-w-xl">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">لكل مناسبة</h1>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">فستان يروي حكايتك</h2>
            <p className="mt-4 text-rose-100">تألقي بجاذبية مع تشكيلات أوليسيس الحصرية</p>
            <button className="mt-6 inline-flex items-center px-6 py-3 rounded-full bg-rose-300 text-[#2D5A4A] font-semibold hover:bg-rose-200 transition">تواصل معنا</button>
          </div>
          <div className="hero-image relative w-full md:w-[520px]">
            <div className="aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=1200&q=80&auto=format&fit=crop" alt="موديل بفستان أنيق" className="w-full h-full object-cover" />
            </div>
            <div className="hidden md:block absolute -left-8 -bottom-8 w-56 aspect-[4/5] rounded-3xl overflow-hidden shadow-xl ring-1 ring-white/10">
              <img src="https://images.unsplash.com/photo-1707193392532-f39caff8f658?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHwlRDklODUlRDklODglRDglQUYlRDklOEElRDklODQlMjAlRDglQTglRDklODElRDglQjMlRDglQUElRDglQTclRDklODYlMjAlRDglQTMlRDklODYlRDklOEElRDklODJ8ZW58MHwwfHx8MTc2MzU1MjI1M3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="موديل بفستان أنيق" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -top-6 -right-6 bg-rose-300 text-[#2D5A4A] rounded-full w-16 h-16 flex items-center justify-center text-2xl font-extrabold shadow-lg">25</div>
          </div>
        </div>
      </div>
    </section>
  )
}
