export default function Layout({ children }){
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-2xl bg-black text-white grid place-items-center font-bold">OW</div>
              <span className="font-semibold">Owen Dominican Tours</span>
            </a>
            <nav className="hidden md:flex items-center gap-8">
              <a href="/" className="text-sm text-neutral-600 hover:text-black">Home</a>
              <a href="/products" className="text-sm text-neutral-600 hover:text-black">Products</a>
              <a href="/search" className="text-sm text-neutral-600 hover:text-black">Search</a>
              <a href="/admin" className="text-sm text-neutral-600 hover:text-black">Admin</a>
              <a href="#book" className="inline-flex items-center rounded-2xl px-4 py-2 text-sm font-semibold bg-black text-white hover:opacity-90">Book Now</a>
            </nav>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-xl bg-black text-white grid place-items-center font-bold">OW</div>
                <span className="font-semibold">Owen Dominican Tours</span>
              </div>
              <p className="mt-3 text-sm text-neutral-600">Punta Cana • Bayahibe • Samaná</p>
            </div>
            <div>
              <div className="font-semibold mb-2">Contact</div>
              <p className="text-sm text-neutral-600">We reply 7 days a week.</p>
              <ul className="mt-2 text-sm text-neutral-700 space-y-1">
                <li>WhatsApp: +1 829 475 6298</li>
                <li>Email: gestion.booking@gmail.com</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-2">Legal</div>
              <ul className="text-sm text-neutral-600 space-y-1">
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className="pt-6 mt-6 border-t border-neutral-200 text-xs text-neutral-500 flex flex-wrap items-center justify-between gap-2">
            <span>© {new Date().getFullYear()} Owen Dominican Tours • All rights reserved.</span>
            <span>Built on Amplify + Builder.io</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
