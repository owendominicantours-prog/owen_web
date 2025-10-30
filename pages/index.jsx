import { BuilderComponent, builder } from '@builder.io/react'
import builderClient from '../lib/builder'

export async function getStaticProps(){
  const content = await builder.get('page', { userAttributes: { urlPath: '/' } }).toPromise();
  return { props: { content: content || null }, revalidate: 60 }
}

export default function Home({ content }){
  if (!content) {
    return (
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-3xl font-bold">Welcome to Owen</h1>
        <p className="text-neutral-600 mt-2">Connect your Builder.io API key to start editing this page visually.</p>
      </section>
    )
  }
  return <BuilderComponent model="page" content={content} />
}
