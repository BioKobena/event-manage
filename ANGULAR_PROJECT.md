# Application de Gestion de Concerts - Angular

## Structure du Projet

```
concert-manager/
├── src/
│   ├── app/
│   │   ├── models/
│   │   │   ├── user.model.ts
│   │   │   ├── client.model.ts
│   │   │   ├── artiste.model.ts
│   │   │   ├── concert.model.ts
│   │   │   ├── ticket.model.ts
│   │   │   └── gestionnaire.model.ts
│   │   ├── services/
│   │   │   ├── auth.service.ts
│   │   │   ├── concert.service.ts
│   │   │   ├── ticket.service.ts
│   │   │   ├── client.service.ts
│   │   │   └── artiste.service.ts
│   │   ├── components/
│   │   │   ├── login/
│   │   │   │   ├── login.component.ts
│   │   │   │   ├── login.component.html
│   │   │   │   └── login.component.css
│   │   │   ├── admin/
│   │   │   │   ├── admin-dashboard/
│   │   │   │   │   ├── admin-dashboard.component.ts
│   │   │   │   │   ├── admin-dashboard.component.html
│   │   │   │   │   └── admin-dashboard.component.css
│   │   │   │   ├── concert-list/
│   │   │   │   │   ├── concert-list.component.ts
│   │   │   │   │   ├── concert-list.component.html
│   │   │   │   │   └── concert-list.component.css
│   │   │   │   └── concert-form/
│   │   │   │       ├── concert-form.component.ts
│   │   │   │       ├── concert-form.component.html
│   │   │   │       └── concert-form.component.css
│   │   │   └── user/
│   │   │       ├── concert-catalog/
│   │   │       │   ├── concert-catalog.component.ts
│   │   │       │   ├── concert-catalog.component.html
│   │   │       │   └── concert-catalog.component.css
│   │   │       ├── my-tickets/
│   │   │       │   ├── my-tickets.component.ts
│   │   │       │   ├── my-tickets.component.html
│   │   │       │   └── my-tickets.component.css
│   │   │       └── user-profile/
│   │   │           ├── user-profile.component.ts
│   │   │           ├── user-profile.component.html
│   │   │           └── user-profile.component.css
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.routes.ts
│   │   └── app.config.ts
│   ├── styles.css
│   └── main.ts
├── angular.json
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## Installation

```bash
# Créer un nouveau projet Angular
npm install -g @angular/cli
ng new concert-manager --standalone --routing --style=css

# Aller dans le répertoire
cd concert-manager

# Installer Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init

# Installer Angular Material (optionnel)
ng add @angular/material

# Lancer l'application
ng serve
```

## Configuration Tailwind CSS

Voir le fichier `tailwind.config.js` ci-dessous.

## Fonctionnalités

### Interface Admin
- Dashboard avec statistiques
- Gestion des concerts (CRUD)
- Gestion des clients
- Gestion des artistes
- Gestion des tickets
- Recherche et filtres

### Interface Utilisateur
- Catalogue des concerts
- Filtrage par genre musical
- Réservation de tickets
- Mes tickets
- Profil utilisateur
- Historique des achats
