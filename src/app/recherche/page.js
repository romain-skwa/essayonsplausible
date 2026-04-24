import Link from "next/link";
import PropTypes from "prop-types";
import SearchForm from "@/components/search-form";
import { felines, findFelineByQuery } from "@/lib/felines";

export const metadata = {
  title: "Recherche | Les Fauves",
  description: "Chercher un animal parmi les cinq fauves du site.",
};

export default async function SearchPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const query = resolvedSearchParams?.q ?? "";
  const result = findFelineByQuery(query);
  let content;

  if (!query) {
    content = (
      <>
        <h2 className="mt-3 text-2xl font-semibold text-zinc-950">
          Lance une recherche
        </h2>
        <p className="mt-4 max-w-3xl leading-7 text-zinc-600">
          Commence par saisir le nom d&apos;un animal pour obtenir un résultat.
        </p>
      </>
    );
  } else if (result) {
    content = (
      <>
        <h2 className="mt-3 text-2xl font-semibold text-zinc-950">
          Recherche reconnue : {result.name}
        </h2>
        <p className="mt-4 max-w-3xl leading-7 text-zinc-600">
          La recherche <strong>{query}</strong> correspond a l&apos;animal{" "}
          <strong>{result.name}</strong>. Tu peux maintenant ouvrir sa page pour
          continuer le parcours.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={`/fauves/${result.slug}`}
            className="rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
          >
            Voir la page du {result.name.toLowerCase()}
          </Link>
          <Link
            href="/"
            className="rounded-full border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:border-zinc-950"
          >
            Revenir a l'accueil
          </Link>
        </div>
      </>
    );
  } else {
    content = (
      <>
        <h2 className="mt-3 text-2xl font-semibold text-zinc-950">
          Aucun fauve trouve
        </h2>
        <p className="mt-4 max-w-3xl leading-7 text-zinc-600">
          La recherche <strong>{query}</strong> ne correspond pas aux cinq
          animaux suivis dans ce test. Essaie plutot avec lion, tigre, jaguar,
          puma ou leopard.
        </p>
      </>
    );
  }

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-6 py-12 sm:px-10">
      <div className="rounded-3xl bg-white px-6 py-8 shadow-sm ring-1 ring-black/5 sm:px-10">
        <Link
          href="/"
          className="text-sm font-medium text-zinc-600 underline underline-offset-4"
        >
          Retour a l'accueil
        </Link>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950">
          Moteur de recherche des fauves
        </h1>
        <p className="mt-3 max-w-2xl text-zinc-600">
          Saisis le nom d&apos;un animal pour trouver sa fiche. Cette page permet
          aussi de visualiser un parcours simple dans Plausible : accueil,
          recherche, puis page de détail.
        </p>
        <div className="mt-8">
          <SearchForm defaultValue={query} compact />
        </div>
      </div>

      <section className="mt-8 rounded-3xl bg-white px-6 py-8 shadow-sm ring-1 ring-black/5 sm:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">
          Resultat
        </p>
        {content}
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold text-zinc-950">
          Animaux proposes
        </h2>
        <ul className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {felines.map((feline) => (
            <li key={feline.slug}>
              <Link
                href={`/fauves/${feline.slug}`}
                className="block rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="text-lg font-semibold text-zinc-950">
                  {feline.name}
                </span>
                <span className="mt-2 block text-sm leading-6 text-zinc-600">
                  {feline.teaser}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

SearchPage.propTypes = {
  searchParams: PropTypes.oneOfType([PropTypes.object, PropTypes.instanceOf(Promise)]),
};
