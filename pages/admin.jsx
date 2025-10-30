export default function Admin(){
  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-2xl font-bold">Admin</h1>
      <ol className="list-decimal ml-6 mt-4 space-y-2 text-neutral-700">
        <li>Crear cuenta en <a className="text-blue-600 underline" href="https://builder.io" target="_blank">Builder.io</a> y crear un Space.</li>
        <li>Copiar tu <b>Public API Key</b> y ponerla en <code>.env.production</code> y <code>.env.local</code> como <code>NEXT_PUBLIC_BUILDER_API_KEY</code>.</li>
        <li>En Builder, crea el modelo <b>page</b> y diseña la Home (ruta <code>/</code>).</li>
        <li>(Opcional) Crea un modelo <b>products-page</b> para la lista de tours.</li>
        <li>Publica los cambios en Builder: la web se actualizará sin redeploy.</li>
      </ol>
      <p className="mt-6 text-sm text-neutral-500">Pro tip: puedes registrar más componentes en <code>_app.jsx</code> para tener bloques reutilizables (Hero, TourCard, etc.).</p>
    </section>
  )
}
