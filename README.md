# Crémaillère — Site d'invitation

Page d'invitation statique (mono-fichier `index.html`) pour la crémaillère d'Antoine & Camille.

- Front autonome : HTML + CSS + JS, fond et logos DJ intégrés en base64.
- Backend : webhooks n8n → Google Sheet (inscriptions).
- Déploiement : ce dépôt est récupéré automatiquement par le VPS (nginx derrière Traefik), qui sert `index.html` sur `/cremaillere/`.

Pour mettre le site à jour : modifier `index.html`, puis commit + push. Le VPS se met à jour tout seul (~1 min).
