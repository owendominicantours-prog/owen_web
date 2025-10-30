import { BuilderComponent, builder } from '@builder.io/react'

export async function getStaticProps(){
  const content = await builder.get('products-page', { userAttributes: { urlPath: '/products' } }).toPromise();
  return { props: { content: content || null }, revalidate: 60 }
}

export default function Products({ content }){
  if (!content){
    return (
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-3xl font-bold">Products (Tours)</h1>
        <p className="text-neutral-600 mt-2">Create a "products-page" entry in Builder to design this page visually, or place a Grid of TourCard components.</p>
      </section>
    )
  }
  return <BuilderComponent model="products-page" content={content} />
}
