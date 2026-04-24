import Link from "next/link";
import PropTypes from "prop-types";
import { notFound } from "next/navigation";
import { felines, getFelineBySlug } from "@/lib/felines";

export async function generateStaticParams() {
  return felines.map((feline) => ({ slug: feline.slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const feline = getFelineBySlug(resolvedParams.slug);

  if (!feline) {
    return {
      title: "Fauve introuvable | Les Fauves",
    };
  }

  return {
    title: `${feline.name} | Les Fauves`,
    description: feline.teaser,
  };
}

export default async function FelinePage({ params }) {
  const resolvedParams = await params;
  const feline = getFelineBySlug(resolvedParams.slug);

  if (!feline) {
    notFound();
  }

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-6 py-12 sm:px-10">
      <article className="rounded-3xl bg-white px-6 py-8 shadow-sm ring-1 ring-black/5 sm:px-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
              Fiche animal
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-950">
              {feline.name}
            </h1>
          </div>
          <Link
            href="/"
            className="text-sm font-medium text-zinc-600 underline underline-offset-4"
          >
            Retour a l'accueil
          </Link>
        </div>

        <p className="mt-6 text-xl leading-8 text-zinc-700">{feline.headline}</p>

        <div className="mt-8 grid gap-5 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5">
            {feline.sections.map((section) => (
              <p key={section} className="leading-8 text-zinc-600">
                {section}
              </p>
            ))}
          </div>

          <aside className="rounded-3xl bg-stone-50 p-6 ring-1 ring-black/5">
            <h2 className="text-lg font-semibold text-zinc-950">
              Informations rapides
            </h2>
            <p className="mt-4 text-sm font-medium uppercase tracking-[0.16em] text-zinc-500">
              Habitat
            </p>
            <p className="mt-2 leading-7 text-zinc-600">{feline.habitat}</p>
            <ul className="mt-5 space-y-3">
              {feline.facts.map((fact) => (
                <li key={fact} className="rounded-2xl bg-white px-4 py-3 text-sm leading-6 text-zinc-600 ring-1 ring-black/5">
                  {fact}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </article>

      <section className="mt-8 rounded-3xl bg-white px-6 py-8 shadow-sm ring-1 ring-black/5 sm:px-10">
        <h2 className="text-2xl font-semibold text-zinc-950">
          Continuer la navigation
        </h2>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/recherche"
            className="rounded-full border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:border-zinc-950"
          >
            Revenir au moteur de recherche
          </Link>
          {felines
            .filter((candidate) => candidate.slug !== feline.slug)
            .slice(0, 3)
            .map((candidate) => (
              <Link
                key={candidate.slug}
                href={`/fauves/${candidate.slug}`}
                className="rounded-full bg-stone-100 px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-stone-200"
              >
                {candidate.name}
              </Link>
            ))}
        </div>
      </section>
    </main>
  );
}

FelinePage.propTypes = {
  params: PropTypes.oneOfType([PropTypes.object, PropTypes.instanceOf(Promise)]),
};
