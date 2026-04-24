# Les Fauves

Mini-site Next.js concu pour tester Plausible sur un cas simple : quelques pages de contenu, un moteur de recherche, et un suivi lisible des recherches par animal.

## Contenu du site

Le site contient :

- une page d'accueil avec moteur de recherche
- une page de resultats
- une page pour chaque animal : lion, tigre, jaguar, puma et leopard

## Lancer le projet

```bash
npm install
npm run dev
```

Le site est ensuite accessible sur [http://localhost:3000](http://localhost:3000).

## Configuration Plausible

Le tracking Plausible s'active uniquement si la variable `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` est definie.

1. Copier `.env.example` vers `.env.local`
2. Renseigner le domaine suivi dans `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`
3. Laisser `NEXT_PUBLIC_PLAUSIBLE_BASE_URL=https://plausible.io` pour Plausible Cloud
4. Remplacer cette URL par ton domaine Plausible si tu utilises une instance auto-hebergee

Exemple :

```bash
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=mondomaine.fr
NEXT_PUBLIC_PLAUSIBLE_BASE_URL=https://plausible.io
```

## Ce qui est mesure

- les visiteurs et pages vues via le script Plausible standard
- les recherches reconnues via l'evenement `Recherche fauve`
- l'animal recherche via la propriete `animal`

## Comment lire les donnees dans Plausible

Dans Plausible, tu pourras lire :

- le nombre total de visiteurs du site via les statistiques globales
- le nombre de recherches valides via le total de l'evenement `Recherche fauve`
- le detail par animal en filtrant ou en ventilant la propriete `animal`

Valeurs attendues pour `animal` :

- `lion`
- `tigre`
- `jaguar`
- `puma`
- `leopard`

## Verification

La commande `npm run build` valide bien le projet.

La commande `npm run lint` echoue actuellement a cause de la toolchain ESLint/TypeScript installee dans le projet, avec une erreur de parsing dans `node_modules/typescript`, avant meme l'analyse du code applicatif.
