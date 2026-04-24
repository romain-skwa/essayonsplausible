"use client";

import PropTypes from "prop-types";
import { findFelineByQuery } from "@/lib/felines";
import { sendPlausibleEvent } from "@/lib/plausible";

function handleSearchSubmit(event) {
  const formData = new FormData(event.currentTarget);
  const query = formData.get("q");
  const match = findFelineByQuery(query);

  if (match) {
    sendPlausibleEvent("Recherche fauve", { animal: match.slug });
  }
}

export default function SearchForm({
  defaultValue = "",
  action = "/recherche",
  buttonLabel = "Rechercher",
  compact = false,
}) {
  return (
    <form
      action={action}
      method="get"
      onSubmit={handleSearchSubmit}
      className={
        compact
          ? "flex w-full flex-col gap-3 sm:flex-row"
          : "flex w-full max-w-2xl flex-col gap-3 sm:flex-row"
      }
    >
      <label className="sr-only" htmlFor="animal-search">
        Rechercher un fauve
      </label>
      <input
        id="animal-search"
        name="q"
        type="search"
        defaultValue={defaultValue}
        required
        placeholder="Exemple : lion, tigre, jaguar..."
        className="min-h-12 flex-1 rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-base text-zinc-950 outline-none transition focus:border-zinc-950"
      />
      <button
        type="submit"
        className="min-h-12 rounded-2xl bg-zinc-950 px-5 py-3 text-base font-semibold text-white transition hover:bg-zinc-800"
      >
        {buttonLabel}
      </button>
    </form>
  );
}

SearchForm.propTypes = {
  action: PropTypes.string,
  buttonLabel: PropTypes.string,
  compact: PropTypes.bool,
  defaultValue: PropTypes.string,
};
