import { ToC } from '../components/ToC'

export function Document() {
  return (
    <main className="flex flex-1 gap-8 px-10 py-12">
      <aside className="sticky top-0 hidden lg:block">
        <span className="text-rotion-300 text-sx font-semibold uppercase">
          Table of contents
        </span>

        <ToC.Root>
          <ToC.Link>Backend</ToC.Link>
          <ToC.Section>
            <ToC.Link>Banco de dados</ToC.Link>
            <ToC.Link>Autenticação</ToC.Link>
          </ToC.Section>
        </ToC.Root>
      </aside>

      <section className="flex flex-1 flex-col items-center">
        adadasdadadsda
      </section>
    </main>
  )
}
