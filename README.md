# Crémaillère — Site d'invitation

Page d'invitation statique (mono-fichier `index.html`) pour la crémaillère d'Antoine & Camille.

- Front autonome : HTML + CSS + JS, fond et logos DJ intégrés en base64.
- Backend : webhooks n8n → Google Sheet (inscriptions).
- Déploiement : ce dépôt est récupéré automatiquement par le VPS (nginx derrière Traefik), qui sert `index.html` sur `/cremaillere/`.
- `prestataires.html` : version de présentation destinée aux prestataires et partenaires (mêmes sections que l'invitation, sans formulaire d'inscription, sans espace staff, sans lien WhatsApp, sans adresse exacte ni numéros de téléphone — lieu indiqué « dans le Perche », contact via Instagram @camtomy_home ; aucune donnée collectée). Servie à `/prestataires.html`, non indexée (`noindex`).

Pour mettre le site à jour : modifier `index.html`, puis commit + push. Le VPS se met à jour tout seul (~1 min).
