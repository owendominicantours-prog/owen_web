import { BuilderComponent, builder } from '@builder.io/react'

export async function getStaticPaths(){
  // Let Builder handle paths on-demand (fallback)
  return { paths: [], fallback: 'blocking' }
}

export async function getStaticProps({ params }){
  const urlPath = '/' + (params?.page?.join('/') || '')
  const content = await builder.get('page', { userAttributes: { urlPath } }).toPromise();
  if (!content) return { notFound: true }
  return { props: { content }, revalidate: 60 }
}

export default function Page({ content }){
  return <BuilderComponent model="page" content={content} />
}
