# English Lab

Appli Android d'anglais de Pierre-Olivier (cours LILATE, objectif CES 2027).

- `web/` : toute l'appli (écrans, cours, exercices). Publiée automatiquement sur GitHub Pages ; l'appli Android la télécharge à chaque ouverture, donc **chaque modification ici arrive sur le téléphone sans réinstaller**.
- `www/` + `android/` : la coquille Android (micro, voix, écran allumé). L'APK est construit par GitHub Actions et publié dans **Releases** (`english-lab.apk`). À réinstaller seulement quand cette partie change.
- `web/coach.html?k=…` : page de suivi en lecture seule pour le coach (lien généré dans Réglages de l'appli).

Données : Supabase (table `docs`, protégée par utilisateur). Claude : clé API saisie dans l'appli, stockée uniquement sur le téléphone.
