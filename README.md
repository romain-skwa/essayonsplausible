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

Le projet utilise maintenant le snippet de tracking fourni directement par Plausible Cloud.

1. Creer le site dans Plausible avec le domaine exact de ton projet Vercel
2. Laisser le snippet Plausible installe dans `src/components/plausible-analytics.js`
3. Redeployer le site sur Vercel
4. Cliquer sur `Verify installation` dans Plausible

Le script actuellement branche correspond au site Plausible cree pour ce projet. Si Plausible te fournit un nouveau snippet plus tard, il faudra simplement remplacer l'URL du script dans `src/components/plausible-analytics.js`.

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
