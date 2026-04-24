import Link from "next/link";
import SearchForm from "@/components/search-form";
import { felines } from "@/lib/felines";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-12 sm:px-10">
      <section className="rounded-3xl bg-white px-6 py-10 shadow-sm ring-1 ring-black/5 sm:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
          Test Plausible
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl">
          Un mini-site sur les fauves pour mesurer les visites et les recherches.
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-600">
          Ce site sert de terrain d&apos;essai pour Plausible. Tu peux visiter
          les pages du lion, du tigre, du jaguar, du puma et du léopard, puis
          utiliser le moteur de recherche pour retrouver un animal.
        </p>
        <div className="mt-8">
          <SearchForm />
          <p className="mt-3 text-sm text-zinc-500">
            Les recherches reconnues sont : lion, tigre, jaguar, puma et
            léopard.
          </p>
        </div>
      </section>

      <section className="mt-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-zinc-950">
              Pages disponibles
            </h2>
            <p className="mt-2 text-zinc-600">
              Chaque fiche est volontairement simple pour rendre les statistiques
              de consultation faciles à lire dans Plausible.
            </p>
          </div>
          <Link
            href="/recherche?q=lion"
            className="text-sm font-medium text-zinc-700 underline underline-offset-4"
          >
            Voir un exemple de recherche
          </Link>
        </div>

        <ul className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {felines.map((feline) => (
            <li key={feline.slug} className="h-full">
              <article className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
                  {feline.name}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-zinc-950">
                  {feline.headline}
                </h3>
                <p className="mt-3 flex-1 leading-7 text-zinc-600">
                  {feline.teaser}
                </p>
                <div className="mt-6 flex items-center justify-between gap-4">
                  <span className="text-sm text-zinc-500">{feline.habitat}</span>
                  <Link
                    href={`/fauves/${feline.slug}`}
                    className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-950 transition hover:border-zinc-950"
                  >
                    Lire la fiche
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
