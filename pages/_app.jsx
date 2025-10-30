import '../styles/globals.css'
import { Builder } from '@builder.io/react'
import Layout from '../components/Layout'
import builder from '../lib/builder'

// Register a simple 'hero' and 'tourCard' as example components editable in Builder
function Hero({ title = 'Adventures you’ll brag about.', subtitle = 'Book fast. Ride safe. Smile big.' }){
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">{title}</h1>
        <p className="mt-4 text-neutral-600 max-w-xl">{subtitle}</p>
      </div>
    </section>
  );
}
Builder.registerComponent(Hero, { name: 'Hero', inputs: [
  { name: 'title', type: 'string' },
  { name: 'subtitle', type: 'string' },
]});

function TourCard({ title='Saona Punta Cana', desc='Island escape...', price='$65 pp', badge='Top Seller' }){
  return (
    <article className="group rounded-3xl overflow-hidden border border-neutral-200 bg-white shadow-sm hover:shadow-lg transition-shadow">
      <div className="h-44 bg-neutral-200 relative">
        <div className="absolute top-3 left-3 rounded-full bg-black/80 text-white text-xs px-3 py-1">{badge}</div>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm text-neutral-600">{desc}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-semibold">{price}</span>
          <button className="rounded-xl bg-black text-white px-4 py-2 text-sm">Reserve</button>
        </div>
      </div>
    </article>
  )
}
Builder.registerComponent(TourCard, { name: 'TourCard', inputs: [
  { name: 'title', type: 'string' },
  { name: 'desc', type: 'string' },
  { name: 'price', type: 'string' },
  { name: 'badge', type: 'string' },
]});

export default function App({ Component, pageProps }){
  return <Layout><Component {...pageProps} /></Layout>
}
