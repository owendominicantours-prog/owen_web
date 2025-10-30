import { useState } from 'react'

const MOCK = [
  { title: 'Saona Punta Cana', price: 65, slug: 'saona-punta-cana' },
  { title: 'Buggy Punta Cana', price: 55, slug: 'buggy-punta-cana' },
  { title: 'Buggy Bayahibe', price: 60, slug: 'buggy-bayahibe' },
  { title: 'Samaná Punta Cana', price: 99, slug: 'samana-punta-cana' },
  { title: 'Party Boat Punta Cana', price: 49, slug: 'party-boat-punta-cana' },
]

export default function Search(){
  const [q, setQ] = useState('')
  const results = MOCK.filter(x => x.title.toLowerCase().includes(q.toLowerCase()))
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-2xl font-bold mb-4">Search</h1>
      <input className="border rounded px-4 py-2 w-full md:w-1/2" placeholder="Search tours..." value={q} onChange={e=>setQ(e.target.value)} />
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {results.map(r=> (
          <a key={r.slug} className="rounded-xl border p-4 hover:shadow" href={`/`}>{r.title} — ${r.price}</a>
        ))}
      </div>
    </section>
  )
}
