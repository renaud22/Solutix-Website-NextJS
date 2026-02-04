---
stepsCompleted: ["step-01-validate-prerequisites", "step-02-design-epics-restructured-by-claude-code", "step-03-create-stories"]
inputDocuments:
  - "_bmad-output/planning-artifacts/prd.md"
  - "_bmad-output/planning-artifacts/architecture.md"
  - "app/page.tsx"
restructuredBy: "Claude Code"
restructureDate: "2026-02-04"
restructureReason: "Analyse critique du travail Google Antigravity - Ajout Epic 5 Content Rewriting (Priorité 2 MVP manquante), découpage Epic 1 Foundation en 4 phases granulaires (Epics 1-4), réorganisation ordre epics selon priorités MVP, ajout 3 exigences architecturales (ARCH-16, ARCH-17, ARCH-18), correction chevauchements FRs, fusion Epic 10 Toolbox dans Epic 5 Content"
---

# solutix-website - Epic Breakdown

## Overview

Ce document fournit la décomposition complète en epics et stories pour **solutix-website**, décomposant les exigences du PRD, de l'Architecture et du code actuel en stories implémentables.

## Requirements Inventory

### Functional Requirements

**Navigation & Structure du Site (FR1-FR6)**

- FR1 : Le visiteur peut accéder à la page d'accueil (Homepage)
- FR2 : Le visiteur peut naviguer vers chaque section du site (Gains, Cas d'usage, Méthode, Tarifs, À Propos, Contact)
- FR3 : Le visiteur peut naviguer entre les pages sans rechargement complet (navigation fluide)
- FR4 : Le visiteur peut revenir à la page d'accueil depuis n'importe quelle section
- FR5 : Le visiteur mobile peut accéder au menu via un dock en bas d'écran
- FR6 : Le visiteur mobile peut ouvrir/fermer le menu dépliant

**Contenu & Présentation (FR7-FR14)**

- FR7 : Le visiteur peut lire le message d'accroche principal (Hero) sur la page d'accueil
- FR8 : Le visiteur peut consulter les bénéfices/gains de l'automatisation avec exemples chiffrés
- FR9 : Le visiteur peut explorer les cas d'usage (Automatiser un process, Créer une app métier, Créer un SaaS)
- FR10 : Le visiteur peut consulter la méthodologie de travail en 6 étapes
- FR11 : Le visiteur peut consulter les informations tarifaires et la politique de contact gratuit
- FR12 : Le visiteur peut lire la présentation de Renaud (À Propos)
- FR13 : Le visiteur peut voir les punchlines et messages percutants sur chaque section
- FR14 : Le visiteur peut voir des images/infographies associées à chaque bloc de contenu sous tabs

**Contact & Lead Generation (FR15-FR23)**

- FR15 :Le visiteur peut accéder au formulaire de contact
- FR16 : Le visiteur peut remplir le formulaire avec ses informations (Nom, Email, Téléphone optionnel, Objet, Message)
- FR17 : Le visiteur peut voir les erreurs de validation en temps réel avant soumission
- FR18 : Le visiteur peut soumettre le formulaire de contact
- FR19 : Le visiteur peut voir un indicateur de chargement pendant l'envoi
- FR20 : Le visiteur peut voir une notification toastr de succès après envoi du formulaire
- FR21 : Le visiteur peut voir une notification toastr d'erreur si l'envoi échoue
- FR22 : Renaud reçoit un email de notification pour chaque nouveau contact
- FR23 : Le système limite le nombre de soumissions par IP (rate limiting anti-spam)

**SEO & Découvrabilité (FR24-FR29)**

- FR24 : Les moteurs de recherche peuvent indexer toutes les pages du site
- FR25 : Chaque page expose des métadonnées appropriées (title, description, OG tags)
- FR26 : Le site expose des données structurées Schema.org (ProfessionalService, Person)
- FR27 : Le site génère automatiquement un sitemap.xml
- FR28 : Le site expose un fichier robots.txt configuré
- FR29 : Chaque page a une structure sémantique HTML5 correcte

**Accessibilité (FR30-FR33)**

- FR30 : Le visiteur peut naviguer entièrement au clavier (Tab, Shift+Tab, Enter, Esc)
- FR31 : Le visiteur utilisant un lecteur d'écran peut comprendre la structure du site
- FR32 : Le visiteur peut interagir avec tous les éléments interactifs via des cibles tactiles suffisantes (44×44px)
- FR33 : Le visiteur peut lire tout le texte avec un contraste suffisant (WCAG AA)

**Responsive & Mobile (FR34-FR38)**

- FR34 : Le visiteur peut consulter le site sur mobile (écrans < 640px)
- FR35 : Le visiteur peut consulter le site sur tablette (écrans 640px - 1024px)
- FR36 : Le visiteur peut consulter le site sur desktop (écrans > 1024px)
- FR37 : Le visiteur mobile peut utiliser le dock bottom bar pour naviguer
- FR38 : Le visiteur peut faire défiler les pages sans bugs de scroll

**Pages d'Erreur (FR39-FR41)**

- FR39 : Le visiteur peut voir une page d'erreur 404 personnalisée avec menu et footer
- FR40 : Le visiteur peut voir une page d'erreur 500 personnalisée avec menu et footer
- FR41 : Les pages d'erreur conservent la navigation standard du site

**Boîte à Outils Placeholder (FR42-FR43)**

- FR42 : Le visiteur peut voir un aperçu des outils IA à venir (cards grisées)
- FR43 : Le visiteur peut comprendre que ces outils seront disponibles prochainement

### Non-Functional Requirements

**Performance (NFR1-NFR6)**

- NFR1 : Les pages doivent avoir un LCP (Largest Contentful Paint) < 1 seconde
- NFR2 : Les pages doivent avoir un FID (First Input Delay) < 50ms
- NFR3 : Les pages doivent avoir un TTI (Time to Interactive) < 1 seconde
- NFR4 : Les pages doivent avoir un CLS (Cumulative Layout Shift) < 0.1
- NFR5 : Le Lighthouse Score doit être > 90 sur tous les axes (Performance, SEO, A11Y, Best Practices)
- NFR6 : Les images doivent être optimisées en WebP avec lazy loading

**Sécurité (NFR7-NFR11)**

- NFR7 : Le site doit être servi en HTTPS uniquement
- NFR8 : Le formulaire de contact doit être protégé par un captcha invisible Cloudflare Turnstile
- NFR9 : Le formulaire de contact doit être protégé par rate limiting côté serveur
- NFR10 : Les données du formulaire doivent être validées côté serveur (Zod)
- NFR11 : Aucune donnée sensible ne doit être exposée côté client

**Accessibilité (NFR12-NFR16)**

- NFR12 : Le site doit respecter les critères WCAG 2.1 niveau AA
- NFR13 : Le contraste des textes doit être >= 4.5:1 (normal) et >= 3:1 (large)
- NFR14 : Tous les éléments interactifs doivent être accessibles au clavier
- NFR15 : Les cibles tactiles doivent mesurer au minimum 44×44px
- NFR16 : Le site doit être utilisable avec un lecteur d'écran

**Intégration (NFR17-NFR19)**

- NFR17 : Le site doit s'intégrer avec Resend pour l'envoi d'emails transactionnels
- NFR18 : Le site doit être déployé sur Vercel (free tier) avec déploiement automatique depuis GitHub
- NFR19 : Le site doit générer automatiquement un sitemap.xml valide

**Maintenabilité (NFR20-NFR23)**

- NFR20 : Le code doit être organisé en composants modulaires et réutilisables
- NFR21 : Le code doit passer les vérifications ESLint sans erreurs
- NFR22 : Le code doit passer les vérifications TypeScript en mode strict
- NFR23 : La structure des fichiers doit suivre l'architecture cible définie

**Style de Code (NFR24-NFR25)**

- NFR24 : L'indentation du code doit utiliser 4 espaces (pas 2)
- NFR25 : Les chaînes de caractères doivent utiliser des double quotes `"` (ou template literals quand approprié)

### Additional Requirements

**Exigences Architecturales Techniques**

- **Refactoring Progressif** : Découper [app/page.tsx](file:///c:/Users/solut/OneDrive/Documents/D%C3%A9veloppement/Solutix/solutix-website/app/page.tsx) monolithique (873 lignes) en composants modulaires
- **Stack Technique** : Next.js 14+, TypeScript strict, Tailwind CSS 3+, React 18+
- **Architecture Hybride SSR/SSG** : SSG pour contenu statique + navigation SPA-like fluide via useRouter
- **Dépendances Spécifiques** :
  - Zod v4.3.6 pour validation formulaire (schéma partagé client/serveur)
  - sonner v1.x pour toastr notifications (léger, accessible, customizable)
  - react-email v5.2.5 pour templates emails
  - node-rate-limiter-flexible v9.0.1 pour rate limiting (Memory backend V1)
- **State Management** : React useState/useReducer local (pas de bibliothèque externe)
- **Images Optimization** : next/image avec lazy loading natif automatique
- **Fonts Loading** : next/font préload automatique (self-hosted)
- **Bundle Optimization** : Code splitting automatique par route Next.js
- **Metadata Management** : Centralisée dans `/lib/metadata.ts` (12 pages)
- **Error Boundaries** : Custom React Error Boundary (natif, ~20 lignes)
- **CI/CD** : GitHub Actions (lint + type-check + build) avant deploy Vercel (dernière étape V1)
- **Environment Variables** : .env.local (dev) + .env.example (git) + Vercel Dashboard (prod)

**Organisation Code Target**

Structure cible après refactoring :
```
/app
  /layout.tsx                  # Root layout avec metadata globale
  /page.tsx                    # Homepage orchestration (refactoré, léger)
  /[section]/page.tsx          # Pages dynamiques par section
  /api/contact/route.ts        # API route formulaire contact
  /error.tsx                   # Error boundary global
  /not-found.tsx               # 404 personnalisée

/components
  /layout/                     # Dock, Footer, MobileMenu
  /ui/                         # GlassCard, Tag, Button, Input
  /modals/                     # ContactModal, StandardModal
  /effects/                    # ElectricHexGrid, Bolt
  /sections/                   # Hero, Dashboard, Tabs

/lib
  /config/                     # modals-config.ts, sections-config.ts
  /types/                      # TypeScript interfaces globales
  /utils/                      # Helper functions
  /validations/                # Schémas Zod partagés client/serveur

/public
  /infographies/               # Images WebP optimisées
  /logo-alt.png
```

**Patterns & Conventions Strictes**

- Indentation : **4 espaces** (exception Next.js standard qui utilise 2)
- Quotes : **Double quotes `"`** pour strings (exception standard qui utilise single)
- Lignes courtes : Maximum 80-100 caractères par ligne
- Accolades obligatoires : Toujours pour `if`, `for`, `while`, même une seule ligne
- Naming : PascalCase composants, camelCase fonctions/variables, SCREAMING_SNAKE_CASE constantes globales
- Imports absolus : Alias `@` pour tous les imports
- TypeScript strict : Pas de `:any` sauf cas exceptionnel justifié et commenté
- Updates immutables : Pour state React
- API Response Format : `{ success: true/false, message/error, code? }`

**SEO & GEO Ultra-Optimisé**

- Sémantique HTML5 stricte avec structure complète
- Un seul `<h1>` par page, hiérarchie heading correcte
- Métadonnées avancées : Title, description, OG, Twitter Card, Canonical URLs
- Schema.org JSON-LD : ProfessionalService, Person, Organization, BreadcrumbList, WebPage, FAQPage, ContactPage
- Performance SEO : Core Web Vitals optimisés (LCP < 1s = ranking factor Google)
- Sitemap.xml automatique + robots.txt optimisé
- GEO (Answer Engine Optimization) : Stratégie Answer-First, Featured Snippets, Rich Results, contenu conversationnel pour AI search

**Responsive Design & Mobile Experience**

- Breakpoints Tailwind : sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)
- Dock mobile bottom bar fixe : [Home] [Menu] [Contact]
- Touch targets : 44×44px minimum (WCAG, Apple HIG)
- Approche mobile-first stricte

**Form Validation & User Feedback**

- Validation client temps réel (onChange, onBlur)
- Validation serveur Zod (sécurité, données propres)
- **Toastr moderne sonner** adapté à la charte :
  - Style glassmorphism cohérent
  - Couleurs accent (orange électrique #f4a400)
  - Animations fluides (slide-in, fade-out)
  - États visuels clairs : success (vert), error (rouge), loading (spinner)
  - Auto-dismiss intelligent (success 3s, error 5s)
- Rate limiting : 10 requêtes/heure par IP
- Captcha invisible : Cloudflare Turnstile (UX seamless)

**Accessibility (A11Y) - WCAG AA**

- Navigation clavier complète (Tab, Shift+Tab, Enter, Esc, Arrows)
- ARIA labels sur tous les éléments interactifs
- Focus management (focus trap dans modales, focus visible personnalisé)
- Screen reader support (annonces dynamiques avec aria-live)
- Skip links (sauter navigation)
- Contraste >= 4.5:1 (texte), >= 3:1 (large)

**Animation & Visual Effects**

- ElectricHexGrid background animé (canvas, requestAnimationFrame)
- Bolt lightning effects (petits éclairs souris)
- Transitions modales/onglets (CSS animations, React transitions)
- Hover effects navigation
- Performance animations : RAF optimisé, GPU acceleration via transform/opacity
- Reduced motion media query (a11y)

**Content Management**

- Configuration modales : MODALS_CONFIG à refactorer en fichiers séparés
- Textes percutants : Ton Tony Stark/Dr House (charismatique, expert, drôle, anti-bullshit)
- Infographies : WebP optimisées par onglet, alt text descriptifs, fallback placeholder

**Error Handling & Resilience**

- Pages 404/500 personnalisées avec navigation complète
- Erreurs formulaire : Validation client/serveur, erreurs réseau, toastr
- Fallback images : Placeholder élégant si infographie manquante
- Error boundaries React : Protection composants critiques (ElectricHexGrid, modales, formulaire)

**Exigences Architecturales Additionnelles (Complément Claude Code):**

**ARCH-16**: Captcha Cloudflare Turnstile invisible
- Site Key: Variable `TURNSTILE_SITE_KEY` (client-side)
- Secret Key: Variable `TURNSTILE_SECRET` (server-side)
- Vérification dans API route /api/contact
- UX seamless (pas de challenge visuel sauf suspicion)

**ARCH-17**: Environment Variables Strategy
- `.env.local`: Variables locales dev (gitignored, secrets)
- `.env.example`: Template variables (commité git, documentation)
- Vercel Dashboard: Variables production (secrets sécurisés)
- Pas de secrets hardcodés dans le code

**ARCH-18**: Testing Strategy (defer V2 mais documenter intention)
- Tests co-localisés (.test.tsx à côté du fichier)
- Tests unitaires composants UI critiques (GlassCard, Dock, ContactModal)
- Tests intégration formulaire contact (validation, soumission, erreurs)
- Tests E2E navigation fluide (Playwright defer V2)
- Lighthouse CI automatisé (performance, SEO, A11Y)

### FR Coverage Map

**Refactoring Architecture (Phases 1-4):**
- NFR20, NFR21, NFR22, NFR23, NFR24, NFR25 → Epic 1, 2, 3, 4, 7

**Navigation & Structure du Site:**
- FR1, FR2, FR3, FR4 → Epic 7 (Phase 4 - Routes & Navigation)
- FR5, FR6 → Epic 4 (Phase 3 - Layout: Menu mobile)

**Contenu & Présentation:**
- FR7, FR8, FR9, FR10, FR11, FR12, FR13, FR14 → Epic 5 (Content Rewriting & Tone)
- FR42, FR43 → Epic 5 (Toolbox placeholder intégré dans Content)

**Contact & Lead Generation:**
- FR15, FR16, FR17, FR18, FR19, FR20, FR21, FR22, FR23 → Epic 6 (Contact Form)
- NFR8, NFR9, NFR10, NFR11 → Epic 6 (Sécurité formulaire)

**SEO & Découvrabilité:**
- FR24, FR25, FR26, FR27, FR28, FR29 → Epic 8 (SEO & GEO)
- NFR19 → Epic 8 (Sitemap automatique)

**Accessibilité:**
- FR30, FR31, FR32, FR33 → Epic 9 (Accessibility)
- NFR12, NFR13, NFR14, NFR15, NFR16 → Epic 9 (WCAG AA)

**Responsive & Mobile:**
- FR34, FR35, FR36 → Epic 10 (Responsive breakpoints)
- FR37 → Epic 4 (Dock mobile dans Layout Phase 3)
- FR38 → Epic 10 (Fix scroll bugs)

**Pages d'Erreur:**
- FR39, FR40, FR41 → Epic 7 (Pages erreur dans Routes)

**Performance:**
- NFR1, NFR2, NFR3, NFR4, NFR5, NFR6 → Epic 11 (Performance & Core Web Vitals)

**Déploiement:**
- NFR7, NFR17, NFR18 → Epic 12 (Deployment & CI/CD)

## Epic List

**12 Epics Alignés Priorités MVP:**

1. **Epic 1**: Foundation & Project Setup
2. **Epic 2**: Phase 1 - Atomic Components Extraction (Refactoring)
3. **Epic 3**: Phase 2 - Configuration & Types Extraction (Refactoring)
4. **Epic 4**: Phase 3 - Layout Components Extraction (Refactoring)
5. **Epic 5**: Content Rewriting & Tone (🚨 Priorité 2 MVP)
6. **Epic 6**: Contact Form & Lead Generation (Priorité 3 MVP)
7. **Epic 7**: Phase 4 - Routes & Navigation (Refactoring)
8. **Epic 8**: SEO & GEO Optimization (Priorité 4 MVP)
9. **Epic 9**: Accessibility & Inclusive Design (Priorité 4 MVP)
10. **Epic 10**: Responsive & Mobile Experience (Priorité 6 MVP)
11. **Epic 11**: Performance Optimization & Core Web Vitals (Priorité 5 MVP)
12. **Epic 12**: Deployment & CI/CD (Dernière étape V1)

---

## Epic 1: Foundation & Project Setup

**Objectif:** Établir les fondations techniques du projet pour permettre le développement rapide et maintenable.

**Valeur utilisateur:** Avoir une base de code solide, bien configurée, avec toutes les dépendances et conventions en place.

**Priorité MVP:** Priorité 1 (Foundation technique)

**FRs couvertes:** Aucune FR directe (infrastructure)

**NFRs couvertes:** NFR20, NFR21, NFR22, NFR23, NFR24, NFR25

**Exigences architecturales:**
- Stack technique: Next.js 14+, TypeScript strict, Tailwind CSS 3+, React 18+
- Dépendances: Zod v4.3.6, sonner v1.x, react-email v5.2.5, node-rate-limiter-flexible v9.0.1
- Configuration ESLint, TypeScript strict mode, Tailwind
- Structure dossiers cible (/app, /components, /lib, /public)
- Code style conventions (4 espaces, double quotes, lignes 80-100 char)
- Environment Variables strategy (.env.local, .env.example)
- Scripts npm (dev, build, lint, type-check, validate)

**Scope détaillé:**
- Installation et configuration des dépendances critiques
- Setup ESLint avec règles projet (indentation 4, double quotes)
- Configuration TypeScript strict mode
- Configuration Tailwind CSS mobile-first
- Création structure dossiers complète
- Documentation conventions de code
- Setup .env.example template
- Scripts npm validation pipeline

---

## Epic 2: Phase 1 - Atomic Components Extraction

**Objectif:** Extraire les composants atomiques réutilisables depuis le fichier monolithique page.tsx (873 lignes).

**Valeur utilisateur:** Composants UI cohérents et réutilisables qui accélèrent le développement.

**Priorité MVP:** Priorité 1 (Refactoring Phase 1)

**FRs couvertes:** Aucune FR directe (refactoring infrastructure)

**NFRs couvertes:** NFR20 (Composants modulaires)

**Exigences architecturales:**
- Extraction GlassCard, Tag depuis page.tsx
- Extraction ElectricHexGrid, Bolt (effets visuels) depuis page.tsx
- Création /components/ui/ et /components/effects/
- Tests isolation (aucune régression visuelle)
- Props TypeScript interfaces strictes
- Error Boundary wrapping ElectricHexGrid

**Scope détaillé:**
- Créer /components/ui/GlassCard.tsx (props: children, className, onClick)
- Créer /components/ui/Tag.tsx (props: icon, children, className)
- Créer /components/effects/ElectricHexGrid.tsx (canvas animations)
- Créer /components/effects/Bolt.ts (classe éclairs électriques)
- Créer /components/ErrorBoundary.tsx (custom React Error Boundary)
- Wrapping ElectricHexGrid dans ErrorBoundary
- Import des composants dans page.tsx
- Validation visuelle desktop/mobile (aucune régression)

---

## Epic 3: Phase 2 - Configuration & Types Extraction

**Objectif:** Extraire la configuration data-driven MODALS_CONFIG et les types TypeScript depuis page.tsx.

**Valeur utilisateur:** Configuration centralisée facilement maintenable et extensible.

**Priorité MVP:** Priorité 1 (Refactoring Phase 2)

**FRs couvertes:** Aucune FR directe (refactoring infrastructure)

**NFRs couvertes:** NFR20 (Organisation modulaire)

**Exigences architecturales:**
- Extraction MODALS_CONFIG depuis page.tsx inline
- Création /lib/config/modals-config.ts
- Création /lib/config/sections-config.ts (NAV_ORDER, SECTIONS_CONFIG)
- Création /lib/types/index.ts (interfaces TypeScript globales)
- Migration configuration vers fichiers séparés
- Validation imports dans page.tsx

**Scope détaillé:**
- Créer /lib/config/modals-config.ts avec MODALS_CONFIG complet
- Créer /lib/config/sections-config.ts avec NAV_ORDER, SECTIONS_CONFIG
- Créer /lib/types/index.ts avec interfaces: ModalConfig, TabConfig, SectionConfig
- Migrer MODALS_CONFIG depuis page.tsx (ligne ~7-150)
- Imports absolus avec alias @ depuis page.tsx
- Validation TypeScript strict (aucune erreur)
- Tests que navigation et modales fonctionnent correctement

---

## Epic 4: Phase 3 - Layout Components Extraction

**Objectif:** Extraire les composants de layout (Dock, Footer, MobileMenu) et les modales depuis page.tsx.

**Valeur utilisateur:** Navigation fluide desktop et mobile avec menu accessible.

**Priorité MVP:** Priorité 1 (Refactoring Phase 3)

**FRs couvertes:** FR5, FR6 (Menu mobile dock, menu dépliant)

**NFRs couvertes:** NFR20 (Organisation modulaire)

**Exigences architecturales:**
- Extraction Dock, Footer, MobileMenu depuis page.tsx
- Extraction Dashboard, StandardModal, ContactModal
- Création /components/layout/ et /components/modals/
- State management React useState local (navigation, modales, menu mobile)
- Navigation mobile dock bottom bar

**Scope détaillé:**
- Créer /components/layout/Dock.tsx (navigation principale, logo, buttons)
- Créer /components/layout/Footer.tsx (copyright, liens légaux)
- Créer /components/layout/MobileMenu.tsx (menu burger overlay)
- Créer /components/modals/StandardModal.tsx (modales contenu avec tabs)
- Créer /components/modals/ContactModal.tsx (modale formulaire contact)
- Créer /components/sections/Dashboard.tsx (bento grid homepage)
- State navigation (activeId, mobileMenuOpen, hoveredNavId, activeTabIndex)
- Tests navigation complète desktop/mobile
- Tests modales ouverture/fermeture/transitions

---

## Epic 5: Content Rewriting & Tone

**Objectif:** Réécrire TOUS les textes du site avec le ton percutant Tony Stark/Dr House validé.

**Valeur utilisateur:** Comprendre immédiatement l'offre Solutix avec un ton charismatique, expert, drôle et anti-bullshit qui crée la confiance.

**Priorité MVP:** 🚨 **Priorité 2 MVP (CRITIQUE - était manquante)**

**FRs couvertes:** FR7, FR8, FR9, FR10, FR11, FR12, FR13, FR14, FR42, FR43

**Exigences architecturales:**
- Ton Tony Stark/Dr House: charismatique, expert, drôle, anti-bullshit
- Punchlines et analogies validées intégrées naturellement
- Exemples illustratifs/hypothétiques (gains potentiels, ROI types, scénarios réalistes) - PAS de chiffres promesses, PAS de métriques clients réelles, juste des illustrations pour susciter l'intérêt
- Infographies WebP optimisées par onglet (alt text descriptifs, fallback placeholder)
- MODALS_CONFIG textes refactorés depuis page.tsx
- Toolbox placeholder cards grisées "Prochainement" (FR42-FR43 intégrées)

**Scope détaillé:**
- **Hero Homepage (FR7)**: Accroche "Automatiser ou s'épuiser", message percutant < 5s compréhension
- **Section Gains (FR8, FR13)**: Réécrire 5 onglets (Revenus, Coûts, Temps, Compétitif, Sérénité) avec exemples illustratifs/scénarios réalistes (PAS de promesses chiffrées, PAS de métriques clients), punchlines signature, bénéfices tangibles
- **Section Cas d'usage (FR9, FR13)**: Réécrire 7 cas (Lancer projet, Automatiser process, Connecter outils, Moderniser système, Scaler activité, Optimiser coûts, Devancer concurrence) ton direct
- **Section Méthode (FR10, FR13)**: Réécrire 6 étapes (Contact/Diagnostic, Stratégie/Devis, Réalisation, Livraison/Onboarding, Stabilisation, Maintenance) transparence totale
- **Section Tarifs (FR11, FR13)**: Réécrire 3 onglets (Audit gratuit, Réalisation sur devis, Maintenance optionnelle) clarté pricing, zéro surprise
- **Section À Propos (FR12, FR13)**: Réécrire 9 onglets (Renaud, Parcours, Personnalité, Passions, Vision, Philosophie, Flexibilité, Partenariat) authenticité, crédibilité, ton personnel unique
- **Section FAQ (FR13)**: Réécrire questions/réponses fréquentes ton direct
- **Pages légales**: Réécrire Mentions légales, Politique de confidentialité, CGV (ton clair, pas de jargon)
- **Toolbox Placeholder (FR42-FR43)**: Cards des 5 outils IA V2 grisées avec "Prochainement", aperçu visuel engageant
- **Infographies (FR14)**: Optimiser/créer infographies WebP par onglet, alt text SEO descriptifs, fallback placeholder élégant

---

## Epic 6: Contact Form & Lead Generation

**Objectif:** Permettre aux visiteurs de contacter Renaud facilement avec un formulaire sécurisé et professionnel.

**Valeur utilisateur:** Soumettre une demande de contact de manière simple, sécurisée, avec validation temps réel et feedback clair.

**Priorité MVP:** Priorité 3 MVP

**FRs couvertes:** FR15, FR16, FR17, FR18, FR19, FR20, FR21, FR22, FR23

**NFRs couvertes:** NFR7, NFR8, NFR9, NFR10, NFR11, NFR17

**Exigences architecturales:**
- Validation Zod v4.3.6 (schéma partagé client/serveur /lib/validations/contact-schema.ts)
- Toastr sonner v1.x (glassmorphism, accent #f4a400, animations fluides, auto-dismiss intelligent)
- Cloudflare Turnstile captcha invisible (ARCH-16)
- Rate limiting node-rate-limiter-flexible v9.0.1 (10 req/h par IP, Memory backend V1)
- Resend API + react-email v5.2.5 templates
- API route /app/api/contact/route.ts sécurisée

**Scope détaillé:**
- **Formulaire frontend (FR15-FR18)**:
  - Champs: Nom, Email, Téléphone (optionnel), Objet, Message
  - Validation client temps réel Zod (onChange, onBlur)
  - Messages erreur clairs français
  - Cloudflare Turnstile widget invisible
  - Loading state pendant soumission (FR19)

- **API route backend (FR18, FR22, FR23)**:
  - /app/api/contact/route.ts (POST)
  - Validation serveur Zod (sécurité, NFR10)
  - Vérification Cloudflare Turnstile secret (NFR8)
  - Rate limiting 10 req/h par IP (NFR9, FR23)
  - Envoi email Resend API (NFR17, FR22)
  - Template react-email professionnel
  - Response format uniforme `{ success, message/error }`

- **Toastr notifications (FR20-FR21)**:
  - Success toast: "Message envoyé ! Je vous réponds sous 24h."
  - Error toast: "Erreur lors de l'envoi. Réessayez ou contactez-moi directement."
  - Loading toast: "Envoi en cours..."
  - Style glassmorphism cohérent design system
  - Couleur accent #f4a400
  - Auto-dismiss: success 3s, error 5s

- **Tests validation**:
  - Validation tous champs obligatoires
  - Validation format email
  - Validation longueur message (min 10 caractères)
  - Rate limiting déclenché après 10 soumissions
  - Email reçu correctement par Renaud
  - Toastr affichés correctement success/error

---

## Epic 7: Phase 4 - Routes & Navigation

**Objectif:** Convertir l'architecture SPA monolithique en vraies routes Next.js App Router tout en préservant la navigation fluide.

**Valeur utilisateur:** Naviguer entre les sections sans rechargement, avec URLs propres et SEO-friendly.

**Priorité MVP:** Priorité 1 (Refactoring Phase 4)

**FRs couvertes:** FR1, FR2, FR3, FR4, FR39, FR40, FR41

**Exigences architecturales:**
- Architecture hybride SSR/SSG en mode SPA-like
- SSG (Static Site Generation) pour toutes pages de contenu
- Navigation SPA-like via useRouter + transitions CSS (aucun rechargement)
- Routes Next.js App Router (/gains, /cas-usage, /methode, /tarifs, /a-propos, /contact, /boite-a-outils, /faq)
- Pages légales (/mentions-legales, /politique-de-confidentialite, /cgv)
- Pages erreur 404/500 personnalisées avec navigation

**Scope détaillé:**
- **Création routes principales (FR1-FR4)**:
  - /app/page.tsx: Homepage (refactoré, léger, orchestration)
  - /app/gains/page.tsx: Page "Les Gains"
  - /app/cas-usage/page.tsx: Page "Cas d'usage"
  - /app/methode/page.tsx: Page "Méthode"
  - /app/tarifs/page.tsx: Page "Tarifs"
  - /app/a-propos/page.tsx: Page "À Propos"
  - /app/contact/page.tsx: Page Contact (avec formulaire Epic 6)
  - /app/boite-a-outils/page.tsx: Page "Boîte à Outils" (placeholder)
  - /app/faq/page.tsx: Page FAQ

- **Routes légales**:
  - /app/mentions-legales/page.tsx
  - /app/politique-de-confidentialite/page.tsx
  - /app/cgv/page.tsx

- **Pages erreur (FR39-FR41)**:
  - /app/not-found.tsx: 404 personnalisée avec Dock + Footer + message clair
  - /app/error.tsx: 500 personnalisée avec Dock + Footer + message sympathique

- **Navigation fluide**:
  - useRouter Next.js pour navigation client-side
  - Transitions CSS entre pages (fade-in/fade-out)
  - Préservation scroll position si nécessaire
  - Active state dans Dock pour page actuelle
  - Tests navigation fluide sans rechargement

---

## Epic 8: SEO & GEO Optimization

**Objectif:** Optimiser le référencement pour moteurs de recherche et answer engines (Google, ChatGPT, Perplexity).

**Valeur utilisateur:** Être trouvé facilement via recherches pertinentes sur Google et answer engines.

**Priorité MVP:** Priorité 4 MVP

**FRs couvertes:** FR24, FR25, FR26, FR27, FR28, FR29

**NFRs couvertes:** NFR19

**Exigences architecturales:**
- Metadata centralisé /lib/metadata.ts (12 pages, ton Stark/House cohérent)
- Schema.org JSON-LD (7 types: WebPage, FAQPage, ContactPage, ProfessionalService, Person, Organization, BreadcrumbList)
- Sémantique HTML5 stricte (h1 unique, hiérarchie headings)
- Sitemap.xml + robots.txt automatiques
- GEO Answer Engine Optimization (Featured Snippets, Rich Results, contenu conversationnel)
- Open Graph + Twitter Card complets
- Performance SEO (LCP < 1s = ranking factor)

**Scope détaillé:**
- **Metadata centralisé /lib/metadata.ts (FR25)**:
  - Title tags optimisés par page (50-60 char, keywords, branding)
  - Meta descriptions persuasives (150-160 char, CTA, bénéfices)
  - Open Graph complet (og:title, og:description, og:image 1200×630, og:url, og:type)
  - Twitter Card (summary_large_image)
  - Canonical URLs (éviter contenu dupliqué)
  - Ton Stark/House cohérent sur tous les textes

- **Schema.org JSON-LD (FR26)**:
  - ProfessionalService (type service, zone Côte d'Azur, description)
  - Person (Renaud Charpentier - expertise, photo, crédibilité)
  - Organization (Solutix - logo, contact, réseaux sociaux)
  - BreadcrumbList (navigation hiérarchique) - pas de breadcrumb visuel
  - WebPage (metadata par page avec @type approprié)
  - FAQPage (page FAQ avec questions/réponses structurées)
  - ContactPage (page contact avec coordonnées structurées)

- **Sémantique HTML5 stricte (FR29)**:
  - Structure: `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`
  - Un seul `<h1>` par page, hiérarchie h1 → h2 → h3 (jamais de saut)
  - Lists sémantiques (`<ul>`, `<ol>`, `<dl>`)
  - Balises spécialisées (`<address>`, `<time datetime="">`, `<figure>` + `<figcaption>`)

- **Sitemap.xml + robots.txt (FR27-FR28, NFR19)**:
  - Sitemap.xml automatique généré (toutes pages indexables, lastmod, priority)
  - Robots.txt optimisé (allow/disallow stratégique, lien sitemap)
  - Soumission sitemap.xml à Google Search Console

- **GEO Answer Engine Optimization**:
  - Stratégie Answer-First: réponses directes aux questions clés personas
  - Featured Snippets: listes numérotées/à puces, tableaux, définitions concises, format "question → réponse"
  - Rich Results: Breadcrumb markup, Logo markup, Sitelinks Search Box
  - Contenu conversationnel: ton naturel, long-tail keywords questions, paragraphes courts scannables

- **Tests validation (FR24)**:
  - Google Search Console: indexation toutes pages
  - Lighthouse SEO score > 90
  - Rich Results Test: Schema.org valide
  - Open Graph preview correct (Facebook, LinkedIn, Twitter)

---

## Epic 9: Accessibility & Inclusive Design

**Objectif:** Rendre le site accessible à TOUS les visiteurs, y compris ceux utilisant des technologies d'assistance.

**Valeur utilisateur:** Utiliser le site confortablement avec un lecteur d'écran, au clavier uniquement, ou avec des besoins d'accessibilité spécifiques.

**Priorité MVP:** Priorité 4 MVP

**FRs couvertes:** FR30, FR31, FR32, FR33

**NFRs couvertes:** NFR12, NFR13, NFR14, NFR15, NFR16

**Exigences architecturales:**
- WCAG 2.1 niveau AA complet
- Navigation clavier complète (Tab, Shift+Tab, Enter, Esc, Arrows)
- ARIA labels sur tous éléments interactifs
- Focus management (focus trap modales, focus visible personnalisé)
- Screen reader support (annonces aria-live dynamiques)
- Skip links (sauter navigation)
- Contraste >= 4.5:1 (texte normal), >= 3:1 (texte large)
- Cibles tactiles >= 44×44px minimum

**Scope détaillé:**
- **Navigation clavier (FR30, NFR14)**:
  - Tab: Navigation séquentielle tous éléments interactifs
  - Shift+Tab: Navigation inverse
  - Enter: Activation buttons/links
  - Esc: Fermeture modales/menu mobile
  - Arrows: Navigation onglets modales (optionnel)
  - Focus visible personnalisé (outline orange #f4a400, 2px)
  - Focus trap dans modales (focus reste dans modale ouverte)
  - Tests navigation complète clavier seul (aucune souris)

- **ARIA labels (FR31, NFR16)**:
  - aria-label sur tous buttons sans texte visible (icônes)
  - aria-labelledby pour sections avec headings
  - aria-describedby pour descriptions supplémentaires
  - aria-live="polite" pour annonces dynamiques (toastr, loading states)
  - aria-expanded sur menu mobile toggle
  - aria-current="page" sur lien page active
  - aria-hidden="true" sur éléments décoratifs (ElectricHexGrid)
  - role="navigation" sur Dock
  - role="dialog" sur modales

- **Screen reader support (FR31)**:
  - Annonces dynamiques aria-live (formulaire soumis, erreurs, modales ouvertes)
  - Alt text descriptifs sur toutes images (pas "image", mais description contenu)
  - Skip links: "Aller au contenu principal" (masqué visuellement, visible focus clavier)
  - Structure sémantique HTML5 claire pour navigation
  - Tests avec NVDA (Windows) et VoiceOver (Mac)

- **Contraste couleurs (FR33, NFR13)**:
  - Texte normal sur fond: >= 4.5:1 (WCAG AA)
  - Texte large (18pt+ ou 14pt bold): >= 3:1 (WCAG AA)
  - Vérification palette complète (blanc sur glass, textes accent)
  - Outils validation: WebAIM Contrast Checker, axe DevTools

- **Touch targets (FR32, NFR15)**:
  - Minimum 44×44px tous éléments interactifs (WCAG AA, Apple HIG)
  - Dock buttons mobile: 48×48px minimum
  - Menu items: 48px hauteur minimum
  - Form inputs: 44px hauteur minimum
  - Cards cliquables: padding suffisant
  - Tests sur devices réels (iPhone, Android)

- **Tests validation (NFR12)**:
  - Lighthouse Accessibility score > 90
  - axe DevTools: 0 violations critiques
  - WAVE: 0 erreurs accessibilité
  - Tests manuels lecteur d'écran (NVDA, VoiceOver)
  - Tests manuels navigation clavier complète

---

## Epic 10: Responsive & Mobile Experience

**Objectif:** Garantir une expérience optimale sur tous les appareils (mobile, tablette, desktop).

**Valeur utilisateur:** Avoir une expérience fluide, rapide et adaptée sur n'importe quel device.

**Priorité MVP:** Priorité 6 MVP

**FRs couvertes:** FR34, FR35, FR36, FR38

**Exigences architecturales:**
- Breakpoints Tailwind: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)
- Approche mobile-first stricte
- Touch targets 44×44px minimum
- Fix scroll navigation bugs (debounce optimisé)
- Tests sur devices réels

**Scope détaillé:**
- **Breakpoints responsive (FR34-FR36)**:
  - Mobile (< 640px): Layout 1 colonne, Dock bottom bar, menu burger
  - Tablet (640px - 1024px): Layout 2 colonnes, Dock adapté
  - Desktop (> 1024px): Layout 4-5 colonnes, Dock horizontal complet
  - Tests visuels sur tous breakpoints

- **Mobile-first approach**:
  - CSS Tailwind mobile par défaut, puis md:, lg:, xl: overrides
  - Images responsive (srcset, sizes)
  - Typography responsive (clamp() pour fluid sizing)
  - Spacing responsive (padding, margins adaptés)

- **Fix scroll bugs (FR38)**:
  - Navigation scroll-based avec debounce agressif optimisé
  - Cooldown entre navigations (éviter scroll erratique)
  - Detection scroll direction (up/down)
  - Scroll smooth behavior CSS
  - Tests scroll fluide mobile/desktop

- **Tests devices réels**:
  - iPhone SE, iPhone 14 Pro, iPhone 14 Pro Max
  - Android Samsung Galaxy, Pixel
  - iPad, iPad Pro
  - Desktop 1920×1080, 2560×1440, 4K
  - Browsers: Chrome, Safari, Firefox, Edge

---

## Epic 11: Performance Optimization & Core Web Vitals

**Objectif:** Atteindre des performances exceptionnelles et valider les Core Web Vitals.

**Valeur utilisateur:** Accéder au contenu instantanément, navigation ultra-fluide, expérience premium.

**Priorité MVP:** Priorité 5 MVP

**NFRs couvertes:** NFR1, NFR2, NFR3, NFR4, NFR5, NFR6

**Exigences architecturales:**
- Images WebP optimization (next/image lazy loading natif)
- Fonts préchargées (next/font self-hosted)
- Code splitting automatique (routes Next.js)
- Animations GPU acceleration (transform/opacity, will-change)
- CSS critical inline
- Bundle size monitoring
- Lighthouse CI validation (score > 90)
- Core Web Vitals: LCP < 1s, FID < 50ms, TTI < 1s, CLS < 0.1
- Error boundaries React (protection composants critiques)

**Scope détaillé:**
- **Images optimization (NFR6)**:
  - Conversion toutes images en WebP (infographies, logo)
  - next/image: lazy loading automatique, blur placeholder
  - Sizes optimisés par breakpoint (srcset automatique)
  - Alt text SEO descriptifs
  - Compression WebP qualité 80-85%

- **Fonts loading**:
  - next/font Geist préload automatique
  - Self-hosted (pas de Google Fonts, RGPD compliant)
  - font-display: swap (éviter FOIT)
  - Subset fonts (seulement caractères utilisés)

- **Code splitting & Bundle**:
  - Code splitting automatique par route Next.js
  - ElectricHexGrid dans bundle principal (affichage immédiat requis)
  - Dynamic import uniquement si bundle > seuil (defer si pas nécessaire)
  - Bundle size monitoring (alerte si > 250kb)

- **Animations performance**:
  - GPU acceleration: transform, opacity (pas left/top)
  - will-change sur éléments animés (ElectricHexGrid canvas)
  - requestAnimationFrame optimisé (RAF)
  - Reduced motion media query (@media (prefers-reduced-motion: reduce))
  - CSS animations plutôt que JS quand possible

- **CSS optimization**:
  - CSS critical inline (above-the-fold)
  - Tailwind purge unused classes
  - Minification automatique Next.js

- **Core Web Vitals validation (NFR1-NFR5)**:
  - LCP < 1s: Largest Contentful Paint (Hero image/text)
  - FID < 50ms: First Input Delay (interactivité rapide)
  - TTI < 1s: Time to Interactive (JS hydratation rapide)
  - CLS < 0.1: Cumulative Layout Shift (stable layout)
  - Lighthouse score > 90 (Performance, SEO, A11Y, Best Practices)

- **Error boundaries**:
  - Custom React ErrorBoundary (~20 lignes)
  - Wrapping ElectricHexGrid (animations peuvent crash)
  - Wrapping modales (formulaires peuvent error)
  - Fallback UI sympathique (pas de page blanche)

- **Tests validation**:
  - Lighthouse CI local: score > 90 tous axes
  - Lighthouse CI production: score > 90 après deploy
  - Core Web Vitals: LCP/FID/TTI/CLS validés
  - WebPageTest: validation multiple devices/connexions
  - Bundle size < 250kb (first load JS)

---

## Epic 12: Deployment & CI/CD

**Objectif:** Déployer le site en production sur Vercel avec un pipeline CI/CD automatisé.

**Valeur utilisateur:** Accéder au site en production de manière sécurisée (HTTPS) avec des déploiements automatisés et fiables.

**Priorité MVP:** Dernière étape V1 (après validation locale complète)

**NFRs couvertes:** NFR7, NFR17, NFR18, NFR21, NFR22

**Exigences architecturales:**
- CI/CD GitHub Actions (lint + type-check + build avant deploy)
- Script npm run validate (à créer/vérifier)
- Environment variables (.env.local dev, .env.example git, Vercel Dashboard prod)
- Déploiement Vercel production automatique (GitHub main branch)
- Validation post-déploiement (Lighthouse production, Core Web Vitals)
- Rollback strategy
- HTTPS obligatoire (Vercel automatique)

**Scope détaillé:**
- **CI/CD Pipeline GitHub Actions**:
  - Fichier .github/workflows/ci.yml
  - Trigger: push sur branches (main, develop, feature/*)
  - Step 1: npm run lint (ESLint validation)
  - Step 2: npm run type-check (TypeScript strict validation)
  - Step 3: npm run build (Next.js build validation)
  - Fail si erreurs lint, type ou build
  - Cache node_modules pour performance

- **Script npm run validate**:
  - Créer script "validate": "npm run lint && npm run type-check && npm run build"
  - Validation locale avant commit
  - Utilisé par CI/CD pipeline

- **Environment Variables (ARCH-17)**:
  - `.env.local`: Variables locales dev (gitignored)
    - RESEND_API_KEY
    - TURNSTILE_SITE_KEY
    - TURNSTILE_SECRET
  - `.env.example`: Template documentation (commité git)
    - Liste toutes variables avec placeholders
    - Documentation type et usage de chaque variable
  - Vercel Dashboard: Variables production (secrets sécurisés)
    - Configuration RESEND_API_KEY production
    - Configuration TURNSTILE_SITE_KEY production
    - Configuration TURNSTILE_SECRET production
  - Pas de secrets hardcodés dans code (validation)

- **Déploiement Vercel (NFR18)**:
  - Connexion repo GitHub → Vercel
  - Auto-deploy sur push main branch
  - Preview deploys sur pull requests
  - Production domain: solutix.fr (ou custom domain)
  - HTTPS automatique (NFR7)
  - Edge caching automatique (SSG pages)

- **Validation post-déploiement**:
  - Lighthouse CI production: score > 90
  - Core Web Vitals production: LCP < 1s, FID < 50ms, CLS < 0.1
  - Tests manuels: formulaire contact fonctionne
  - Tests manuels: emails Resend reçus
  - Tests manuels: rate limiting actif
  - Tests manuels: navigation fluide desktop/mobile

- **Rollback strategy**:
  - Vercel UI: rollback instant vers déploiement précédent
  - Git revert si problème identifié après deploy
  - Monitoring erreurs production (console.error V1, solution gratuite V2)

- **Documentation déploiement**:
  - README.md: instructions setup local
  - README.md: instructions déploiement Vercel
  - README.md: configuration environment variables
  - README.md: validation post-déploiement checklist

---

# STORIES DÉTAILLÉES

## Epic 1: Foundation & Project Setup

### Story 1.1: Installer les dépendances critiques du projet

En tant que développeur,
Je veux installer toutes les dépendances critiques avec les versions exactes spécifiées,
Afin d'avoir une base technique solide et conforme à l'architecture.

**Acceptance Criteria:**

**Given** le projet Next.js est initialisé
**When** j'installe les dépendances avec npm install
**Then** Zod v4.3.6 est installé et disponible
**And** sonner v1.x est installé et disponible
**And** react-email v5.2.5 est installé et disponible
**And** node-rate-limiter-flexible v9.0.1 est installé et disponible
**And** package.json contient toutes les dépendances avec versions exactes
**And** package-lock.json est généré et commité
**And** npm run dev démarre sans erreur

---

### Story 1.2: Configurer ESLint et Prettier avec règles projet

En tant que développeur,
Je veux configurer ESLint et Prettier selon les conventions du projet,
Afin de garantir un code cohérent et maintenable.

**Acceptance Criteria:**

**Given** le projet a besoin de règles de code strictes
**When** je configure ESLint et Prettier
**Then** ESLint est configuré avec les règles : indentation 4 espaces, double quotes, max 100 caractères par ligne, TypeScript strict
**And** Prettier est configuré avec : tabWidth 4, singleQuote false, printWidth 100
**And** les fichiers .eslintrc.json et .prettierrc sont créés et commités
**And** les scripts npm sont ajoutés : "lint": "eslint .", "lint:fix": "eslint . --fix"
**And** npm run lint s'exécute sans erreur sur le code actuel
**And** npm run lint:fix corrige automatiquement les problèmes auto-corrigeables

---

### Story 1.3: Créer la structure de dossiers cible

En tant que développeur,
Je veux créer la structure de dossiers complète,
Afin de préparer l'organisation modulaire du code.

**Acceptance Criteria:**

**Given** le projet a besoin d'une structure de dossiers organisée
**When** je crée tous les dossiers de la structure cible
**Then** les dossiers suivants sont créés : /components/ui/, /components/layout/, /components/modals/, /components/effects/, /components/sections/
**And** les dossiers suivants sont créés : /lib/config/, /lib/types/, /lib/utils/, /lib/validations/
**And** le dossier /public/infographies/ est créé
**And** tous les dossiers contiennent un fichier .gitkeep pour être trackés par git
**And** app/page.tsx actuel N'EST PAS MODIFIÉ (reste 873 lignes monolithique pour faciliter le refactoring Epic 2)
**And** la structure est visible dans l'explorateur de fichiers

---

### Story 1.4: Configurer les variables d'environnement

En tant que développeur,
Je veux créer le template des variables d'environnement,
Afin de documenter les secrets nécessaires au projet.

**Acceptance Criteria:**

**Given** le projet nécessite des secrets API (Resend, Cloudflare Turnstile)
**When** je crée le fichier .env.example
**Then** le fichier contient RESEND_API_KEY avec un placeholder et une description
**And** le fichier contient TURNSTILE_SITE_KEY avec un placeholder et une description
**And** le fichier contient TURNSTILE_SECRET avec un placeholder et une description
**And** .env.example est commité dans git (documentation)
**And** .env.local est ajouté au .gitignore (sécurité)
**And** un commentaire dans .env.example explique comment obtenir chaque clé API

---

### Story 1.5: Créer les scripts npm de validation

En tant que développeur,
Je veux avoir des scripts npm pour valider le code,
Afin de détecter les erreurs avant le commit et le déploiement.

**Acceptance Criteria:**

**Given** le projet a besoin d'un pipeline de validation local
**When** j'ajoute les scripts npm dans package.json
**Then** le script "type-check": "tsc --noEmit" est ajouté et fonctionne
**And** le script "format": "prettier --write ." est ajouté et fonctionne
**And** le script "format:check": "prettier --check ." est ajouté et fonctionne
**And** le script "validate": "npm run lint && npm run type-check && npm run format:check" est ajouté
**And** npm run validate s'exécute et valide tout le code
**And** tous les scripts sont documentés dans README.md

---

## Epic 2: Phase 1 - Atomic Components Extraction

### Story 2.1: Créer le composant GlassCard réutilisable

En tant que développeur,
Je veux extraire GlassCard en composant réutilisable,
Afin de maintenir facilement le style glassmorphism cohérent sur tout le site.

**Acceptance Criteria:**

**Given** le fichier app/page.tsx contient des cartes glassmorphism inline
**When** je crée /components/ui/GlassCard.tsx avec props TypeScript strictes (children: ReactNode, className?: string, onClick?: () => void)
**Then** le composant est importable et réutilisable
**And** tous les usages inline dans page.tsx sont remplacés par <GlassCard>
**And** le rendu visuel est strictement identique (aucune régression)
**And** TypeScript compile sans erreur en mode strict

---

### Story 2.2: Créer le composant Tag réutilisable

En tant que développeur,
Je veux extraire Tag en composant réutilisable,
Afin de maintenir facilement le style des badges sur tout le site.

**Acceptance Criteria:**

**Given** le fichier app/page.tsx contient des tags/badges inline
**When** je crée /components/ui/Tag.tsx avec props TypeScript strictes (icon?: ReactNode, children: ReactNode, className?: string)
**Then** le composant est importable et réutilisable
**And** tous les usages inline dans page.tsx sont remplacés par <Tag>
**And** le rendu visuel est strictement identique (aucune régression)
**And** TypeScript compile sans erreur en mode strict

---

### Story 2.3: Extraire la classe Bolt pour les effets électriques

En tant que développeur,
Je veux extraire la classe Bolt en fichier séparé,
Afin de modulariser les animations souris liées au background ElectricHexGrid.

**Acceptance Criteria:**

**Given** le fichier app/page.tsx contient la classe Bolt inline
**When** je crée /components/effects/Bolt.ts avec la classe Bolt complète
**Then** la classe Bolt est exportée avec toutes ses propriétés (position, vitesse, decay, etc.)
**And** Bolt est importé dans ElectricHexGrid.tsx (PAS dans page.tsx, car couplé au background)
**And** l'animation électrique souris fonctionne strictement à l'identique
**And** TypeScript compile sans erreur en mode strict

---

### Story 2.4: Extraire le composant ElectricHexGrid animé

En tant que développeur,
Je veux extraire ElectricHexGrid en composant séparé,
Afin de modulariser les animations background canvas.

**Acceptance Criteria:**

**Given** le fichier app/page.tsx contient le code ElectricHexGrid inline
**When** je crée /components/effects/ElectricHexGrid.tsx avec toutes les animations canvas
**Then** le composant ElectricHexGrid importe Bolt depuis ./Bolt
**And** le composant est importé dans page.tsx et remplace le code inline
**And** les animations (hexagones + bolts électriques souris) fonctionnent strictement à l'identique
**And** validation visuelle desktop (1920×1080) et mobile (375×667) sans régression
**And** TypeScript compile sans erreur en mode strict

---

### Story 2.5: Protéger ElectricHexGrid avec Error Boundary

En tant que développeur,
Je veux wrapper ElectricHexGrid dans un Error Boundary,
Afin que les erreurs canvas n'impactent pas le reste de la page.

**Acceptance Criteria:**

**Given** ElectricHexGrid utilise canvas et peut potentiellement crasher
**When** je crée /components/ErrorBoundary.tsx (custom React Error Boundary ~20 lignes)
**Then** ErrorBoundary expose componentDidCatch, getDerivedStateFromError, render avec fallback UI
**And** ElectricHexGrid est wrappé dans <ErrorBoundary fallback={<div>Background temporairement indisponible</div>}> dans page.tsx
**And** en cas d'erreur, le fallback s'affiche sans crasher la page
**And** test simulation erreur (throw error dans ElectricHexGrid) affiche bien le fallback
**And** TypeScript compile sans erreur en mode strict

---

## Epic 3: Phase 2 - Configuration & Types Extraction

### Story 3.1: Créer les interfaces TypeScript globales

En tant que développeur,
Je veux définir les interfaces TypeScript pour la configuration,
Afin d'avoir un typage strict et une autocomplétion complète sur toutes les configs.

**Acceptance Criteria:**

**Given** le projet nécessite des types pour ModalConfig, TabConfig, SectionConfig
**When** je crée /lib/types/index.ts avec toutes les interfaces globales
**Then** les interfaces ModalConfig, TabConfig, SectionConfig sont définies et exportées
**And** TabConfig contient : id (string), label (string), content (string), image (string optionnel)
**And** ModalConfig contient : id (string), title (string), tabs (TabConfig[])
**And** SectionConfig contient les propriétés pour NAV_ORDER et SECTIONS_CONFIG
**And** TypeScript compile sans erreur en mode strict
**And** les types sont importables via import type { ModalConfig } from "@/lib/types"

---

### Story 3.2: Extraire MODALS_CONFIG en fichier TypeScript séparé

En tant que développeur,
Je veux extraire MODALS_CONFIG en fichier TypeScript typé,
Afin de centraliser la configuration des modales avec validation stricte.

**Acceptance Criteria:**

**Given** app/page.tsx contient MODALS_CONFIG inline (ligne ~7-150)
**When** je crée /lib/config/modals-config.ts avec import des types depuis @/lib/types
**Then** MODALS_CONFIG est exporté avec typage strict : export const MODALS_CONFIG: ModalConfig[] = [...]
**And** toutes les données de configuration sont migrées depuis page.tsx (toutes les modales, tous les onglets)
**And** MODALS_CONFIG est importé dans page.tsx via import { MODALS_CONFIG } from "@/lib/config/modals-config"
**And** le code inline MODALS_CONFIG est supprimé de page.tsx
**And** TypeScript compile sans erreur en mode strict (typage validé)
**And** autocomplétion IDE fonctionne sur MODALS_CONFIG (vérification manuelle VSCode)

---

### Story 3.3: Extraire sections-config en fichier séparé

En tant que développeur,
Je veux extraire NAV_ORDER et SECTIONS_CONFIG en fichier TypeScript typé,
Afin de centraliser la configuration de navigation avec validation stricte.

**Acceptance Criteria:**

**Given** app/page.tsx contient NAV_ORDER et SECTIONS_CONFIG inline
**When** je crée /lib/config/sections-config.ts avec import des types depuis @/lib/types
**Then** NAV_ORDER et SECTIONS_CONFIG sont exportés avec typage strict approprié
**And** toutes les données de configuration sont migrées depuis page.tsx
**And** sections-config est importé dans page.tsx via import { NAV_ORDER, SECTIONS_CONFIG } from "@/lib/config/sections-config"
**And** le code inline NAV_ORDER et SECTIONS_CONFIG est supprimé de page.tsx
**And** TypeScript compile sans erreur en mode strict (typage validé)
**And** autocomplétion IDE fonctionne sur sections-config (vérification manuelle VSCode)

---

### Story 3.4: Valider la configuration et les imports

En tant que développeur,
Je veux valider que toute la configuration fonctionne correctement,
Afin de garantir qu'aucune régression n'a été introduite par le refactoring.

**Acceptance Criteria:**

**Given** MODALS_CONFIG et sections-config ont été extraits en fichiers séparés
**When** je lance npm run type-check et npm run lint
**Then** TypeScript compile sans erreur en mode strict (aucune erreur de type)
**And** ESLint passe sans erreur (aucune violation)
**And** le site démarre avec npm run dev sans erreur console
**And** test manuel : la navigation entre sections fonctionne correctement
**And** test manuel : les modales s'ouvrent avec le bon contenu
**And** test manuel : les onglets des modales fonctionnent et affichent le bon contenu
**And** validation imports absolus avec alias @ partout (aucun import relatif ../)

---

## Epic 4: Phase 3 - Layout Components Extraction

### Story 4.1: Créer le composant Dock (navigation principale)

En tant que développeur,
Je veux extraire le Dock en composant réutilisable,
Afin de modulariser la navigation principale desktop.

**Acceptance Criteria:**

**Given** app/page.tsx contient le code Dock inline
**When** je crée /components/layout/Dock.tsx avec props TypeScript strictes
**Then** le composant Dock expose les props : activeId (string), onNavigate (fonction), onOpenModal (fonction), hoveredNavId (string optionnel)
**And** le Dock affiche le logo, les boutons de navigation et le bouton contact
**And** le Dock est importé dans page.tsx via import { Dock } from "@/components/layout/Dock"
**And** le code inline Dock est supprimé de page.tsx
**And** le rendu visuel desktop est strictement identique (aucune régression)
**And** TypeScript compile sans erreur en mode strict

---

### Story 4.2: Créer le composant Footer

En tant que développeur,
Je veux extraire le Footer en composant réutilisable,
Afin de modulariser le pied de page avec liens légaux.

**Acceptance Criteria:**

**Given** app/page.tsx contient le code Footer inline
**When** je crée /components/layout/Footer.tsx
**Then** le composant Footer affiche le copyright et les liens légaux (Mentions légales, Politique de confidentialité, CGV)
**And** le Footer est importé dans page.tsx via import { Footer } from "@/components/layout/Footer"
**And** le code inline Footer est supprimé de page.tsx
**And** le rendu visuel est strictement identique (aucune régression)
**And** TypeScript compile sans erreur en mode strict

---

### Story 4.3: Créer le composant MobileMenu (FR5, FR6)

En tant que visiteur mobile,
Je veux pouvoir ouvrir/fermer un menu dépliant via le dock bottom bar,
Afin de naviguer facilement entre les sections sur mobile.

**Acceptance Criteria:**

**Given** app/page.tsx contient le code MobileMenu inline
**When** je crée /components/layout/MobileMenu.tsx avec props TypeScript strictes
**Then** le composant MobileMenu expose les props : isOpen (boolean), onClose (fonction), onNavigate (fonction)
**And** le menu mobile affiche le dock bottom bar fixe avec boutons [Home] [Menu] [Contact] (FR5)
**And** le menu dépliant s'ouvre/se ferme via le bouton Menu (FR6)
**And** le MobileMenu est importé dans page.tsx via import { MobileMenu } from "@/components/layout/MobileMenu"
**And** le code inline MobileMenu est supprimé de page.tsx
**And** test mobile (375×667) : dock bottom bar visible et fonctionnel
**And** test mobile : menu dépliant s'ouvre/se ferme correctement
**And** TypeScript compile sans erreur en mode strict

---

### Story 4.4: Créer le composant StandardModal (modales avec tabs)

En tant que développeur,
Je veux extraire StandardModal en composant réutilisable,
Afin de modulariser les modales avec système d'onglets.

**Acceptance Criteria:**

**Given** app/page.tsx contient le code StandardModal inline
**When** je crée /components/modals/StandardModal.tsx avec props TypeScript strictes
**Then** le composant StandardModal expose les props : isOpen (boolean), onClose (fonction), modalConfig (ModalConfig depuis @/lib/types)
**And** le composant gère le state des onglets en interne (activeTabIndex avec useState)
**And** la modale affiche le titre, les onglets, le contenu de l'onglet actif et l'image associée
**And** le StandardModal est importé dans page.tsx via import { StandardModal } from "@/components/modals/StandardModal"
**And** le code inline StandardModal est supprimé de page.tsx
**And** test : modale s'ouvre/se ferme correctement
**And** test : navigation entre onglets fonctionne
**And** TypeScript compile sans erreur en mode strict

---

### Story 4.5: Créer le composant ContactModal

En tant que développeur,
Je veux extraire ContactModal en composant réutilisable,
Afin de modulariser la modale de contact (UI placeholder, logique dans Epic 6).

**Acceptance Criteria:**

**Given** app/page.tsx contient le code ContactModal inline
**When** je crée /components/modals/ContactModal.tsx avec props TypeScript strictes
**Then** le composant ContactModal expose les props : isOpen (boolean), onClose (fonction)
**And** le composant affiche une modale avec formulaire contact UI placeholder (champs sans logique de soumission pour l'instant)
**And** le ContactModal est importé dans page.tsx via import { ContactModal } from "@/components/modals/ContactModal"
**And** le code inline ContactModal est supprimé de page.tsx
**And** test : modale contact s'ouvre/se ferme correctement
**And** note : la logique de validation et soumission sera implémentée dans Epic 6
**And** TypeScript compile sans erreur en mode strict

---

### Story 4.6: Créer le composant Dashboard (bento grid homepage)

En tant que développeur,
Je veux extraire Dashboard en composant réutilisable,
Afin de modulariser la grille bento de la page d'accueil.

**Acceptance Criteria:**

**Given** app/page.tsx contient le code Dashboard inline
**When** je crée /components/sections/Dashboard.tsx avec props TypeScript strictes
**Then** le composant Dashboard expose la prop : onOpenModal (fonction)
**And** le Dashboard affiche la grille bento homepage avec les cartes GlassCard
**And** le Dashboard est importé dans page.tsx via import { Dashboard } from "@/components/sections/Dashboard"
**And** le code inline Dashboard est supprimé de page.tsx
**And** le rendu visuel est strictement identique (aucune régression)
**And** test : clic sur les cartes ouvre les bonnes modales
**And** TypeScript compile sans erreur en mode strict

---

### Story 4.7: Intégrer state management et validation complète

En tant que développeur,
Je veux centraliser le state management dans page.tsx,
Afin que tous les composants layout/modales fonctionnent ensemble de manière fluide.

**Acceptance Criteria:**

**Given** tous les composants layout et modales sont créés (Stories 4.1 à 4.6)
**When** je définis le state React dans page.tsx : activeId, mobileMenuOpen, hoveredNavId, activeModalId
**Then** le state activeId contrôle la section active dans Dock
**And** le state mobileMenuOpen contrôle l'ouverture/fermeture du MobileMenu
**And** le state activeModalId contrôle quelle modale est ouverte (StandardModal ou ContactModal)
**And** tous les callbacks (onNavigate, onOpenModal, onClose) sont passés aux composants appropriés
**And** test navigation desktop : clic sur Dock navigue entre sections correctement
**And** test navigation mobile : dock bottom bar + menu dépliant fonctionnent correctement
**And** test modales : ouverture/fermeture StandardModal fonctionne
**And** test modales : ouverture/fermeture ContactModal fonctionne
**And** test transitions : animations modales fluides (fade-in/fade-out)
**And** validation complète : npm run type-check et npm run lint passent sans erreur

---

## Epic 5: Content Rewriting & Tone

### Story 5.1: Réécrire Hero Homepage (FR7, FR13)

En tant que visiteur,
Je veux comprendre immédiatement la proposition de valeur Solutix,
Afin de décider en moins de 5 secondes si le site m'intéresse.

**Acceptance Criteria:**

**Given** la homepage a besoin d'une accroche percutante
**When** je rédige le Hero avec le ton Tony Stark/Dr House
**Then** l'accroche principale transmet la proposition de valeur (automatisation, solutions sur-mesure)
**And** le message de valeur est compréhensible en moins de 5 secondes
**And** le ton est charismatique, expert, drôle et anti-bullshit dès la première impression
**And** le contenu Hero est mis à jour dans MODALS_CONFIG ou page appropriée
**And** validation visuelle : impact immédiat, professionnel, mémorable

---

### Story 5.2: Réécrire Section Gains (FR8, FR13)

En tant que visiteur,
Je veux comprendre concrètement les bénéfices de l'automatisation,
Afin d'évaluer l'intérêt pour mon activité.

**Acceptance Criteria:**

**Given** la section Gains a 5 onglets (Revenus, Coûts, Temps, Compétitif, Sérénité)
**When** je réécrire chaque onglet avec le ton Tony Stark/Dr House
**Then** chaque onglet utilise des exemples illustratifs/scénarios réalistes (PAS de chiffres promesses, PAS de métriques clients réelles)
**And** les punchlines signature sont intégrées naturellement
**And** les bénéfices tangibles sont clairement articulés
**And** chaque onglet a une infographie WebP optimisée avec alt text SEO descriptif
**And** fallback placeholder élégant si infographie manquante
**And** le contenu est mis à jour dans /lib/config/modals-config.ts
**And** validation : ton percutant, crédible, qui suscite l'intérêt sans promettre l'impossible

---

### Story 5.3: Réécrire Section Cas d'usage (FR9, FR13)

En tant que visiteur,
Je veux voir des cas d'usage concrets correspondant à mes besoins,
Afin de me projeter dans une collaboration avec Solutix.

**Acceptance Criteria:**

**Given** la section Cas d'usage a 7 cas (Lancer projet, Automatiser process, Connecter outils, Moderniser système, Scaler activité, Optimiser coûts, Devancer concurrence)
**When** je réécrire chaque cas avec le ton Tony Stark/Dr House
**Then** chaque cas utilise un ton direct et des exemples concrets
**And** les bénéfices tangibles sont mis en avant
**And** le vocabulaire est accessible (zéro jargon technique inutile)
**And** chaque cas a une infographie WebP optimisée avec alt text SEO descriptif
**And** le contenu est mis à jour dans /lib/config/modals-config.ts
**And** validation : cas d'usage clairs, pertinents, qui résonnent avec les problèmes réels des visiteurs

---

### Story 5.4: Réécrire Section Méthode (FR10, FR13)

En tant que visiteur,
Je veux comprendre comment se déroule une collaboration avec Solutix,
Afin d'avoir confiance dans le processus et éliminer les zones d'ombre.

**Acceptance Criteria:**

**Given** la section Méthode a 6 étapes (Contact/Diagnostic, Stratégie/Devis, Réalisation, Livraison/Onboarding, Stabilisation, Maintenance)
**When** je réécrire chaque étape avec le ton Tony Stark/Dr House
**Then** chaque étape affiche une transparence totale (aucune zone d'ombre)
**And** le vocabulaire est clair, zéro jargon
**And** le processus inspire confiance et professionnalisme
**And** chaque étape a une infographie WebP optimisée avec alt text SEO descriptif
**And** le contenu est mis à jour dans /lib/config/modals-config.ts
**And** validation : méthodologie claire, rassurante, qui démontre l'expertise

---

### Story 5.5: Réécrire Section Tarifs (FR11, FR13)

En tant que visiteur,
Je veux comprendre la politique tarifaire de Solutix,
Afin d'évaluer la transparence et l'absence de mauvaises surprises.

**Acceptance Criteria:**

**Given** la section Tarifs a 3 onglets (Audit gratuit, Réalisation sur devis, Maintenance optionnelle)
**When** je réécrire chaque onglet avec le ton Tony Stark/Dr House
**Then** la clarté pricing est maximale (zéro surprise, zéro frais cachés)
**And** le message "Audit gratuit" est mis en avant
**And** le ton inspire confiance (pas de pratiques douteuses, transparence totale)
**And** chaque onglet a une infographie WebP optimisée avec alt text SEO descriptif
**And** le contenu est mis à jour dans /lib/config/modals-config.ts
**And** validation : tarifs clairs, honnêtes, qui rassurent

---

### Story 5.6: Réécrire Section FAQ (FR13)

En tant que visiteur,
Je veux trouver rapidement des réponses à mes questions fréquentes,
Afin de lever les derniers doutes avant de contacter Solutix.

**Acceptance Criteria:**

**Given** la section FAQ contient des questions/réponses fréquentes
**When** je réécrire les Q&A avec le ton Tony Stark/Dr House
**Then** chaque réponse utilise un ton direct, conversationnel
**And** le format est optimisé pour GEO (Answer Engine Optimization) : questions claires, réponses directes
**And** les réponses sont concises, scannables, sans jargon
**And** le contenu est mis à jour dans /lib/config/modals-config.ts
**And** validation : FAQ utile, qui anticipe vraiment les questions des visiteurs

---

### Story 5.7: Restructurer et réécrire Section À Propos (FR12, FR13)

En tant que visiteur,
Je veux connaître Solutix et Renaud pour comprendre leur expertise,
Afin de décider si je souhaite collaborer avec eux.

**Acceptance Criteria:**

**Given** la section À Propos a actuellement 9 onglets (fusion section entreprise + section personne)
**When** j'analyse la structure actuelle et propose une optimisation
**Then** proposition de restructuration : réorganiser les onglets OU simplifier (réduire le nombre) - PAS de séparation à nouveau
**And** validation de la nouvelle structure avec Renaud avant réécriture
**And** réécriture de tous les onglets avec le ton Tony Stark/Dr House : authenticité, crédibilité, ton personnel unique
**And** les 9 thèmes sont couverts (ou optimisés) : Renaud, Parcours, Personnalité, Passions, Vision, Philosophie, Flexibilité, Partenariat
**And** chaque onglet a une infographie WebP optimisée avec alt text SEO descriptif
**And** le contenu est mis à jour dans /lib/config/modals-config.ts
**And** validation : section À Propos authentique, crédible, qui crée la connexion humaine

---

### Story 5.8: Adapter et mettre en forme Pages légales

En tant que visiteur,
Je veux consulter les mentions légales et politiques en langage clair,
Afin de comprendre mes droits sans perdre 30 minutes dans du jargon juridique.

**Acceptance Criteria:**

**Given** Renaud fournit le contenu textuel de base pour les pages légales
**When** j'adapte et mets en forme le contenu pour le web
**Then** les 3 pages sont créées : Mentions légales, Politique de confidentialité, CGV
**And** le contenu est adapté au ton du site (clair, pas de jargon juridique inutile)
**And** la mise en forme est optimisée pour le web (titres, sections, listes, liens)
**And** la conformité RGPD est assurée (notamment Politique de confidentialité)
**And** les pages sont ajoutées dans la structure appropriée (routes Epic 7 ou contenu statique)
**And** validation : pages légales claires, conformes, accessibles

---

### Story 5.9: Créer Toolbox Placeholder (FR42-FR43)

En tant que visiteur,
Je veux voir un aperçu des outils IA à venir,
Afin de comprendre la vision future de Solutix et revenir plus tard.

**Acceptance Criteria:**

**Given** Solutix prévoit 5 outils IA pour la V2
**When** je crée les cards placeholder pour la Toolbox
**Then** 5 cards grisées sont affichées avec état "Prochainement" (FR42)
**And** chaque card a un titre explicite et un aperçu visuel engageant
**And** le message "Bientôt disponible" est clair (FR43)
**And** le design est cohérent avec le reste du site (glassmorphism)
**And** les cards sont intégrées dans la section appropriée ou page dédiée
**And** validation : placeholder professionnel qui suscite l'intérêt sans frustrer

---

## Epic 6: Contact Form & Lead Generation

### Story 6.1: Créer le schéma de validation Zod partagé

En tant que développeur,
Je veux créer un schéma Zod partagé entre client et serveur,
Afin d'assurer une validation cohérente et sécurisée du formulaire de contact.

**Acceptance Criteria:**

**Given** le formulaire de contact nécessite une validation stricte
**When** je crée /lib/validations/contact-schema.ts avec Zod v4.3.6
**Then** le schéma ContactFormSchema est défini avec les champs : name (string min 2 max 100), email (string email), phone (string optionnel, regex international), subject (string min 3 max 200), message (string min 10 max 5000)
**And** les messages d'erreur sont en français et clairs ("Le nom doit contenir au moins 2 caractères", "L'email est invalide", etc.)
**And** le schéma est exporté : export const ContactFormSchema = z.object({...})
**And** le type TypeScript est exporté : export type ContactFormData = z.infer<typeof ContactFormSchema>
**And** TypeScript compile sans erreur en mode strict
**And** le schéma est importable depuis client et serveur (validation partagée)

---

### Story 6.2: Configurer Cloudflare Turnstile dans le formulaire

En tant que développeur,
Je veux intégrer Cloudflare Turnstile invisible,
Afin de protéger le formulaire contre les bots sans dégrader l'UX.

**Acceptance Criteria:**

**Given** le formulaire de contact nécessite une protection anti-spam (NFR8, ARCH-16)
**When** j'intègre Cloudflare Turnstile widget invisible dans ContactModal
**Then** la variable TURNSTILE_SITE_KEY est ajoutée à .env.example avec documentation
**And** la variable TURNSTILE_SECRET est ajoutée à .env.example avec documentation
**And** le widget Turnstile est intégré dans ContactModal avec attribut data-sitekey
**And** le widget est en mode invisible (data-appearance="interaction-only")
**And** le token Turnstile est récupéré avant soumission du formulaire
**And** test visuel : aucun challenge visible sauf suspicion de bot
**And** TypeScript compile sans erreur en mode strict

---

### Story 6.3: Implémenter la validation client temps réel (FR17)

En tant que visiteur,
Je veux voir les erreurs de validation en temps réel pendant que je remplis le formulaire,
Afin de corriger mes erreurs immédiatement avant la soumission.

**Acceptance Criteria:**

**Given** le formulaire de contact nécessite une validation client (FR17)
**When** j'implémente la validation temps réel avec ContactFormSchema dans ContactModal
**Then** validation onChange est activée sur tous les champs après première interaction
**And** validation onBlur affiche les erreurs quand l'utilisateur quitte un champ
**And** les messages d'erreur Zod français sont affichés sous chaque champ en rouge
**And** les champs invalides ont un border rouge (#ef4444)
**And** les champs valides ont un border vert (#10b981)
**And** le bouton "Envoyer" est désactivé tant que le formulaire est invalide
**And** test : remplir formulaire avec email invalide affiche "L'email est invalide"
**And** test : message < 10 caractères affiche "Le message doit contenir au moins 10 caractères"

---

### Story 6.4: Créer l'API route /api/contact avec validation serveur (FR18, FR22, FR23)

En tant que développeur,
Je veux créer une API route sécurisée pour traiter les soumissions de contact,
Afin d'envoyer les emails tout en protégeant contre les abus.

**Acceptance Criteria:**

**Given** le formulaire de contact nécessite un endpoint backend sécurisé
**When** je crée /app/api/contact/route.ts (POST handler)
**Then** validation serveur Zod avec ContactFormSchema sur le body de la requête (NFR10)
**And** vérification du token Cloudflare Turnstile via API Turnstile (NFR8)
**And** rate limiting 10 requêtes/heure par IP avec node-rate-limiter-flexible v9.0.1 Memory backend (NFR9, FR23)
**And** envoi email via Resend API avec RESEND_API_KEY depuis .env (NFR17, FR22)
**And** format de réponse uniforme : { success: true, message: "..." } ou { success: false, error: "..." }
**And** gestion erreurs : validation échouée (400), Turnstile invalide (403), rate limit dépassé (429), erreur serveur (500)
**And** test : soumission valide retourne 200 avec success: true
**And** test : soumission sans token Turnstile retourne 403
**And** test : 11ème soumission dans l'heure retourne 429
**And** TypeScript compile sans erreur en mode strict

---

### Story 6.5: Créer le template email react-email professionnel (FR22)

En tant que Renaud,
Je veux recevoir un email professionnel et bien formaté pour chaque nouveau contact,
Afin de traiter rapidement les demandes avec toutes les informations nécessaires.

**Acceptance Criteria:**

**Given** l'API route /api/contact envoie des emails via Resend
**When** je crée /emails/ContactNotification.tsx avec react-email v5.2.5
**Then** le template affiche toutes les informations du formulaire : Nom, Email, Téléphone (si fourni), Objet, Message
**And** le design est professionnel et lisible (table layout responsive)
**And** le template inclut un bouton "Répondre directement" avec mailto: link vers l'email du visiteur
**And** le template est stylisé avec inline CSS (compatibilité clients emails)
**And** l'email contient un footer avec "Envoyé depuis solutix.fr - Contact Form"
**And** le template est importé dans /app/api/contact/route.ts
**And** l'email est envoyé avec subject: `[Solutix Contact] ${subject}` et recipient: renaud@solutix.fr
**And** test : réception email avec format correct et toutes infos visibles

---

### Story 6.6: Intégrer sonner toastr avec feedback utilisateur (FR19, FR20, FR21)

En tant que visiteur,
Je veux voir des notifications claires pendant et après l'envoi du formulaire,
Afin de savoir si mon message a bien été envoyé ou s'il y a eu un problème.

**Acceptance Criteria:**

**Given** le formulaire de contact nécessite un feedback visuel clair
**When** j'intègre sonner v1.x dans ContactModal avec style glassmorphism
**Then** sonner est installé et configuré dans le projet
**And** toast loading affiché pendant l'envoi : "Envoi en cours..." avec spinner (FR19)
**And** toast success affiché après succès : "Message envoyé ! Je vous réponds sous 24h." auto-dismiss 3s (FR20)
**And** toast error affiché si échec : "Erreur lors de l'envoi. Réessayez ou contactez-moi directement." auto-dismiss 5s (FR21)
**And** style toastr cohérent avec design system : glassmorphism, couleur accent #f4a400
**And** test : soumission réussie affiche toast success puis ferme la modale
**And** test : soumission échouée (réseau coupé) affiche toast error et garde la modale ouverte
**And** test visuel : toastr sont bien visibles et stylisés (desktop + mobile)

---

### Story 6.7: Tests de validation complète du formulaire de contact

En tant que développeur,
Je veux valider tous les cas d'usage du formulaire de contact,
Afin de garantir une expérience utilisateur parfaite et une sécurité maximale.

**Acceptance Criteria:**

**Given** le formulaire de contact est implémenté (Stories 6.1 à 6.6)
**When** je teste tous les scénarios critiques
**Then** test validation client : champ nom vide bloque soumission
**And** test validation client : email invalide ("test@") affiche erreur
**And** test validation client : message < 10 caractères bloque soumission
**And** test validation serveur : envoi body invalide retourne 400
**And** test Cloudflare Turnstile : envoi sans token retourne 403
**And** test rate limiting : 11ème soumission dans l'heure retourne 429 avec message clair
**And** test email Resend : email correctement reçu par Renaud avec toutes les infos
**And** test toastr : success toast affiché après envoi réussi
**And** test toastr : error toast affiché si erreur réseau
**And** test responsive : formulaire utilisable sur mobile (375×667) et desktop (1920×1080)
**And** validation complète : npm run type-check et npm run lint passent sans erreur

---

## Epic 7: Phase 4 - Routes & Navigation

### Story 7.1: Créer les routes principales (FR1-FR4)

En tant que visiteur,
Je veux naviguer vers toutes les sections principales du site via des URLs propres,
Afin d'accéder directement au contenu qui m'intéresse et partager des liens.

**Acceptance Criteria:**

**Given** le site nécessite des routes Next.js App Router pour chaque section
**When** je crée les pages principales suivantes avec SSG (Static Site Generation)
**Then** /app/page.tsx : Homepage (déjà refactorée via Epics 2-4, orchestration légère)
**And** /app/gains/page.tsx : Page "Les Gains" (réutilise StandardModal content ou composant dédié)
**And** /app/cas-usage/page.tsx : Page "Cas d'usage"
**And** /app/methode/page.tsx : Page "Méthode"
**And** /app/tarifs/page.tsx : Page "Tarifs"
**And** /app/a-propos/page.tsx : Page "À Propos"
**And** /app/contact/page.tsx : Page Contact (avec formulaire Epic 6 intégré)
**And** /app/boite-a-outils/page.tsx : Page "Boîte à Outils" (placeholder cards Epic 5.9)
**And** /app/faq/page.tsx : Page FAQ
**And** chaque page réutilise les composants layout (Dock, Footer, MobileMenu) créés dans Epic 4
**And** chaque page a une structure cohérente : Dock + contenu principal + Footer
**And** TypeScript compile sans erreur en mode strict
**And** test : navigation vers chaque URL affiche le bon contenu

---

### Story 7.2: Créer les routes légales

En tant que visiteur,
Je veux accéder aux pages légales (Mentions légales, Politique de confidentialité, CGV),
Afin de consulter mes droits et les informations légales obligatoires.

**Acceptance Criteria:**

**Given** le site nécessite des pages légales conformes
**When** je crée les pages légales suivantes avec SSG
**Then** /app/mentions-legales/page.tsx : Mentions légales (contenu Epic 5.8)
**And** /app/politique-de-confidentialite/page.tsx : Politique de confidentialité RGPD (contenu Epic 5.8)
**And** /app/cgv/page.tsx : Conditions Générales de Vente (contenu Epic 5.8)
**And** chaque page réutilise Dock + Footer pour navigation cohérente
**And** les liens Footer pointent vers ces pages
**And** TypeScript compile sans erreur en mode strict
**And** test : clic sur "Mentions légales" dans Footer navigue vers /mentions-legales
**And** test : contenu légal est affiché correctement avec mise en forme optimisée

---

### Story 7.3: Créer les pages d'erreur personnalisées (FR39-FR41)

En tant que visiteur,
Je veux voir des pages d'erreur personnalisées avec navigation complète,
Afin de pouvoir continuer à naviguer sur le site même en cas d'erreur.

**Acceptance Criteria:**

**Given** le site nécessite des pages 404 et 500 personnalisées (FR39-FR41)
**When** je crée /app/not-found.tsx et /app/error.tsx
**Then** /app/not-found.tsx : Page 404 avec Dock + Footer + message clair "Page introuvable" + lien vers homepage
**And** /app/error.tsx : Page 500 avec Dock + Footer + message sympathique "Oups, une erreur est survenue" + bouton "Réessayer"
**And** le ton des messages est cohérent avec le ton Tony Stark/Dr House (sympathique, pas corporate)
**And** les pages conservent la navigation standard du site (FR41)
**And** TypeScript compile sans erreur en mode strict
**And** test 404 : accéder à /page-inexistante affiche la page 404 personnalisée
**And** test 500 : simulation erreur affiche la page 500 personnalisée
**And** test navigation : Dock et Footer fonctionnent sur les pages d'erreur

---

### Story 7.4: Implémenter la navigation fluide SPA-like (FR3)

En tant que visiteur,
Je veux naviguer entre les pages sans rechargement complet,
Afin d'avoir une expérience fluide et rapide.

**Acceptance Criteria:**

**Given** le site utilise Next.js App Router avec SSG (FR3)
**When** j'implémente la navigation client-side avec useRouter et transitions CSS
**Then** tous les liens Dock utilisent next/link pour navigation client-side (pas de rechargement)
**And** tous les liens Footer utilisent next/link
**And** transitions CSS fade-in/fade-out entre pages (300ms duration)
**And** active state dans Dock affiche la page actuelle avec style distinct
**And** scroll position est reset en haut de page lors de navigation
**And** test : clic sur "Les Gains" dans Dock navigue vers /gains sans rechargement (observer Network DevTools : aucune requête document HTML)
**And** test : transition fade visible et fluide
**And** test : active state dans Dock mis à jour correctement
**And** validation : navigation instantanée, zéro rechargement, expérience SPA fluide

---

### Story 7.5: Optimiser la génération statique (SSG) des pages

En tant que développeur,
Je veux générer statiquement toutes les pages de contenu,
Afin de maximiser les performances et le SEO.

**Acceptance Criteria:**

**Given** toutes les routes principales sont créées (Stories 7.1-7.3)
**When** je configure la génération statique Next.js
**Then** toutes les pages (homepage, gains, cas-usage, méthode, tarifs, a-propos, contact, boite-a-outils, faq, légales, erreurs) sont en mode SSG
**And** npm run build génère toutes les pages en static HTML (vérifier .next/server/app/*.html)
**And** aucune page en mode SSR ou ISR (sauf API route /api/contact qui reste dynamique)
**And** Lighthouse audit confirme : "Properly uses SSG" (no server-side rendering detected)
**And** test : après build, servir les pages avec npm start affiche contenu instantané (HTML pré-généré)
**And** validation build : npm run build réussit sans erreur

---

### Story 7.6: Tests de validation complète navigation et routes

En tant que développeur,
Je veux valider tous les cas d'usage de navigation,
Afin de garantir une expérience utilisateur fluide et sans bugs.

**Acceptance Criteria:**

**Given** toutes les routes et navigation sont implémentées (Stories 7.1-7.5)
**When** je teste tous les scénarios de navigation
**Then** test navigation desktop : clic sur chaque item Dock navigue vers la bonne page
**And** test navigation mobile : dock bottom bar + menu dépliant naviguent correctement
**And** test liens Footer : clic sur chaque lien légal navigue vers la bonne page
**And** test 404 : accès URL invalide affiche page 404 personnalisée
**And** test transitions : animations fade-in/fade-out fluides entre pages
**And** test active state : item Dock actif mis en surbrillance correctement
**And** test scroll : scroll position reset en haut à chaque navigation
**And** test responsive : navigation fonctionne sur mobile (375×667) et desktop (1920×1080)
**And** validation complète : npm run type-check et npm run lint passent sans erreur
**And** validation build : npm run build génère toutes les pages statiques sans erreur

---

## Epic 8: SEO & GEO Optimization

### Story 8.1: Implémenter la structure HTML5 sémantique stricte (FR29)

En tant que développeur SEO,
Je veux que toutes les pages utilisent une structure HTML5 sémantique stricte,
Afin d'améliorer le référencement et l'accessibilité.

**Acceptance Criteria:**

**Given** toutes les pages nécessitent une structure sémantique correcte (FR29)
**When** j'implémente la structure HTML5 stricte sur toutes les pages
**Then** chaque page utilise : `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`
**And** un seul `<h1>` par page (titre principal)
**And** hiérarchie headings correcte : h1 → h2 → h3 (jamais de saut, jamais h1 → h3)
**And** listes sémantiques : `<ul>` pour listes non-ordonnées, `<ol>` pour listes ordonnées, `<dl>` pour définitions
**And** balises spécialisées : `<address>` pour coordonnées, `<time datetime="">` pour dates, `<figure>` + `<figcaption>` pour images
**And** validation HTML5 : https://validator.w3.org/ (0 erreur)
**And** Lighthouse audit SEO confirme : "Document has a valid HTML structure"
**And** test manuel : inspecter 3 pages (homepage, gains, contact) et vérifier structure sémantique

---

### Story 8.2: Créer le fichier metadata.ts centralisé (FR25)

En tant que développeur SEO,
Je veux centraliser toutes les métadonnées des pages,
Afin de garantir un SEO cohérent et faciliter la maintenance.

**Acceptance Criteria:**

**Given** le site a 12 pages nécessitant des métadonnées optimisées (FR25)
**When** je crée /lib/metadata.ts avec métadonnées pour toutes les pages
**Then** metadata.ts exporte une fonction getPageMetadata(pageId: string) qui retourne : title (50-60 char, keywords, branding), description (150-160 char, CTA, bénéfices), openGraph complet (og:title, og:description, og:image 1200×630, og:url, og:type), twitter (card: summary_large_image), canonical URL
**And** métadonnées pour les 12 pages : homepage, gains, cas-usage, méthode, tarifs, a-propos, contact, boite-a-outils, faq, mentions-legales, politique-confidentialite, cgv
**And** le ton de tous les textes (title, description) est cohérent avec Tony Stark/Dr House
**And** chaque page importe et utilise generateMetadata() depuis metadata.ts
**And** TypeScript compile sans erreur en mode strict
**And** test : inspecter source HTML, vérifier présence de toutes les balises meta
**And** test Open Graph : https://www.opengraph.xyz/ (preview correct)

---

### Story 8.3: Implémenter Schema.org JSON-LD (FR26)

En tant que développeur SEO,
Je veux ajouter les données structurées Schema.org sur toutes les pages,
Afin d'améliorer la visibilité dans les Rich Results Google.

**Acceptance Criteria:**

**Given** le site nécessite 7 types de Schema.org (FR26)
**When** je crée /lib/utils/schema-org.ts avec les fonctions de génération JSON-LD
**Then** fonction generateWebPageSchema(pageData) : type WebPage avec metadata appropriée
**And** fonction generateProfessionalServiceSchema() : ProfessionalService (type service, zone géographique Côte d'Azur, description)
**And** fonction generatePersonSchema() : Person (Renaud Charpentier - nom, titre, photo, expertise, crédibilité)
**And** fonction generateOrganizationSchema() : Organization (Solutix - nom, logo, url, contact, réseaux sociaux)
**And** fonction generateBreadcrumbSchema(items) : BreadcrumbList (navigation hiérarchique, pas de breadcrumb visuel)
**And** fonction generateFAQPageSchema(faqs) : FAQPage (questions/réponses structurées) pour page FAQ
**And** fonction generateContactPageSchema() : ContactPage (coordonnées structurées) pour page Contact
**And** chaque page intègre le JSON-LD approprié dans un `<script type="application/ld+json">`
**And** validation : https://validator.schema.org/ (0 erreur)
**And** test Rich Results : https://search.google.com/test/rich-results (valid markup)

---

### Story 8.4: Générer sitemap.xml et robots.txt automatiques (FR27-FR28, NFR19)

En tant que développeur SEO,
Je veux générer automatiquement sitemap.xml et robots.txt,
Afin de faciliter l'indexation par les moteurs de recherche.

**Acceptance Criteria:**

**Given** le site nécessite sitemap.xml et robots.txt (FR27-FR28, NFR19)
**When** je configure la génération automatique dans Next.js
**Then** sitemap.xml généré automatiquement avec toutes les pages indexables (homepage, gains, cas-usage, méthode, tarifs, a-propos, contact, boite-a-outils, faq, mentions-legales, politique-confidentialite, cgv)
**And** sitemap.xml contient : `<loc>`, `<lastmod>`, `<priority>` pour chaque URL
**And** priority = 1.0 pour homepage, 0.8 pour pages principales, 0.6 pour pages secondaires, 0.4 pour pages légales
**And** robots.txt créé avec : User-agent: *, Allow: /, Sitemap: https://solutix.fr/sitemap.xml
**And** les deux fichiers sont accessibles : https://solutix.fr/sitemap.xml et https://solutix.fr/robots.txt
**And** validation sitemap : https://www.xml-sitemaps.com/validate-xml-sitemap.html (valid)
**And** soumission sitemap à Google Search Console après déploiement

---

### Story 8.5: Valider la stratégie GEO Answer-First dans le contenu (Epic 5)

En tant que développeur SEO,
Je veux valider que le contenu Epic 5 respecte les principes GEO,
Afin d'optimiser pour les answer engines (ChatGPT, Perplexity, Google AI).

**Acceptance Criteria:**

**Given** le contenu a été rédigé dans Epic 5 avec attention à l'approche Answer-First
**When** je valide la conformité GEO du contenu existant
**Then** validation FAQ : questions claires, réponses directes en début de paragraphe (Answer-First)
**And** validation sections : paragraphes courts scannables (< 3 lignes)
**And** validation listes : utilisation de listes à puces/numérotées pour Featured Snippets
**And** validation ton : contenu conversationnel, questions long-tail naturelles
**And** validation structure : format "question → réponse" pour FAQ
**And** si nécessaire : ajustements mineurs pour améliorer l'optimisation GEO (sans réécriture complète)
**And** validation : contenu prêt pour Featured Snippets et Rich Results

---

### Story 8.6: Tests de validation SEO complète

En tant que développeur SEO,
Je veux valider tous les aspects SEO du site,
Afin de garantir une indexation optimale et des Rich Results.

**Acceptance Criteria:**

**Given** toutes les optimisations SEO sont implémentées (Stories 8.1-8.5)
**When** je teste tous les aspects SEO
**Then** Lighthouse SEO score > 90 (toutes pages)
**And** validation HTML5 : https://validator.w3.org/ (0 erreur sur 3 pages testées)
**And** validation Schema.org : https://validator.schema.org/ (0 erreur)
**And** test Rich Results : https://search.google.com/test/rich-results (valid markup)
**And** test Open Graph : https://www.opengraph.xyz/ (preview correct Facebook/LinkedIn/Twitter)
**And** validation sitemap : https://www.xml-sitemaps.com/validate-xml-sitemap.html (valid)
**And** test robots.txt : accessible et correct
**And** test métadonnées : inspecter source HTML 3 pages, vérifier title, description, OG, canonical
**And** soumission Google Search Console : sitemap soumis, indexation demandée
**And** validation complète : npm run type-check et npm run lint passent sans erreur

---

## Epic 9: Accessibility & Inclusive Design

### Story 9.1: Implémenter la navigation clavier complète (FR30, NFR14)

En tant que visiteur utilisant uniquement le clavier,
Je veux naviguer entièrement sur le site au clavier,
Afin d'accéder à tout le contenu sans souris.

**Acceptance Criteria:**

**Given** le site doit être entièrement accessible au clavier (FR30, NFR14)
**When** j'implémente la navigation clavier complète
**Then** Tab : navigation séquentielle tous éléments interactifs (liens, boutons, champs formulaire)
**And** Shift+Tab : navigation inverse
**And** Enter : activation buttons et links
**And** Esc : fermeture modales et menu mobile
**And** Arrows (optionnel) : navigation entre onglets dans modales
**And** focus visible personnalisé : outline orange #f4a400, 2px solid, offset 2px
**And** focus trap dans modales : focus reste dans modale ouverte, Esc ferme et restore focus
**And** test navigation complète : Tab depuis homepage jusqu'au Footer sans souris
**And** test modales : ouvrir modale au clavier (Enter), naviguer onglets, fermer (Esc)
**And** test formulaire : remplir formulaire contact entièrement au clavier
**And** validation : tous éléments interactifs accessibles au clavier

---

### Story 9.2: Ajouter les ARIA labels sur tous les éléments interactifs (FR31, NFR16)

En tant que visiteur utilisant un lecteur d'écran,
Je veux que tous les éléments interactifs soient correctement labellisés,
Afin de comprendre leur fonction et naviguer efficacement.

**Acceptance Criteria:**

**Given** le site doit supporter les lecteurs d'écran (FR31, NFR16)
**When** j'ajoute les ARIA labels appropriés sur tous les composants
**Then** aria-label sur tous buttons sans texte visible (icônes) : "Ouvrir le menu", "Fermer la modale", "Envoyer le formulaire"
**And** aria-labelledby sur sections avec headings (associer section à son titre)
**And** aria-describedby pour descriptions supplémentaires (aide champs formulaire)
**And** aria-live="polite" pour annonces dynamiques (toastr, loading states)
**And** aria-expanded sur menu mobile toggle (true/false selon état)
**And** aria-current="page" sur lien page active dans navigation
**And** aria-hidden="true" sur éléments décoratifs (ElectricHexGrid canvas, icônes purement visuelles)
**And** role="navigation" sur Dock
**And** role="dialog" sur modales
**And** test NVDA (Windows) : naviguer homepage et lire tous les labels correctement
**And** test VoiceOver (Mac si disponible) : naviguer et vérifier annonces correctes

---

### Story 9.3: Valider le contraste des couleurs et corriger si nécessaire (FR33, NFR13)

En tant que visiteur avec déficience visuelle,
Je veux pouvoir lire tout le texte avec un contraste suffisant,
Afin de naviguer confortablement sur le site.

**Acceptance Criteria:**

**Given** le site doit respecter WCAG AA contraste >= 4.5:1 (FR33, NFR13)
**When** je vérifie le contraste de toutes les couleurs utilisées
**Then** validation palette complète avec WebAIM Contrast Checker : texte normal sur fond (>= 4.5:1), texte large 18pt+ ou 14pt bold (>= 3:1)
**And** vérification spécifique : blanc sur glassmorphism cards, textes sur background ElectricHexGrid, couleur accent #f4a400 utilisée
**And** si contraste insuffisant détecté : rapport détaillé avec captures d'écran et ratios mesurés
**And** si corrections nécessaires : proposition de palette ajustée ET validation par Renaud AVANT toute modification
**And** validation axe DevTools : 0 violation contraste
**And** validation WAVE : 0 erreur contraste
**And** test visuel : lecture confortable de tout le texte sur tous les backgrounds

---

### Story 9.4: Implémenter les cibles tactiles accessibles (FR32, NFR15)

En tant que visiteur mobile ou avec mobilité réduite,
Je veux pouvoir interagir facilement avec tous les éléments,
Afin de naviguer confortablement sans erreurs de clic.

**Acceptance Criteria:**

**Given** le site doit respecter cibles tactiles >= 44×44px (FR32, NFR15, WCAG AA, Apple HIG)
**When** je vérifie et ajuste toutes les cibles tactiles
**Then** Dock buttons desktop : >= 44×44px (padding suffisant)
**And** Dock mobile bottom bar buttons : >= 48×48px minimum
**And** Menu mobile items : >= 48px hauteur minimum
**And** Form inputs et buttons : >= 44px hauteur minimum
**And** Cards cliquables : padding suffisant pour zone tactile >= 44×44px
**And** Tabs dans modales : >= 44px hauteur
**And** validation visuelle : mesurer cibles tactiles dans DevTools (afficher dimensions hover)
**And** test mobile (375×667) : cliquer tous éléments interactifs sans erreur
**And** validation axe DevTools : 0 violation touch target size

---

### Story 9.5: Tests de validation accessibilité complète

En tant que développeur accessibilité,
Je veux valider tous les aspects d'accessibilité du site,
Afin de garantir une expérience inclusive pour tous les visiteurs.

**Acceptance Criteria:**

**Given** toutes les optimisations accessibilité sont implémentées (Stories 9.1-9.4)
**When** je teste tous les aspects accessibilité
**Then** Lighthouse Accessibility score > 90 (toutes pages)
**And** axe DevTools : 0 violations critiques (toutes pages)
**And** WAVE : 0 erreurs accessibilité (homepage, gains, contact testées)
**And** test navigation clavier : homepage → gains → contact → formulaire entièrement au clavier
**And** test lecteur d'écran NVDA : naviguer 3 pages et vérifier annonces correctes
**And** test contraste : validation WebAIM Contrast Checker palette complète (>= 4.5:1 texte normal, >= 3:1 texte large)
**And** test cibles tactiles : mesurer 10 éléments interactifs (tous >= 44×44px)
**And** test modales : focus trap fonctionne, Esc ferme et restore focus
**And** test formulaire : remplir au clavier avec lecteur d'écran, annonces erreurs validation
**And** validation complète : npm run type-check et npm run lint passent sans erreur

---

## Epic 10: Responsive & Mobile Experience

### Story 10.1: Implémenter les breakpoints responsive Tailwind (FR34-FR36)

En tant que visiteur sur n'importe quel device,
Je veux que le site s'adapte parfaitement à mon écran,
Afin d'avoir une expérience optimale sur mobile, tablette et desktop.

**Acceptance Criteria:**

**Given** le site doit être responsive sur tous les devices (FR34-FR36)
**When** j'implémente l'approche mobile-first avec breakpoints Tailwind
**Then** breakpoints définis : sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)
**And** mobile < 640px : layout 1 colonne, Dock bottom bar, menu burger, typography réduite
**And** tablet 640px-1024px : layout 2 colonnes, Dock adapté, typography intermédiaire
**And** desktop > 1024px : layout 4-5 colonnes, Dock horizontal complet, typography optimale
**And** approche mobile-first stricte : CSS Tailwind mobile par défaut, puis md:, lg:, xl: overrides
**And** test visuel mobile (375×667) : layout 1 colonne, tous éléments visibles et utilisables
**And** test visuel tablet (768×1024) : layout adapté, navigation confortable
**And** test visuel desktop (1920×1080) : layout complet, expérience premium
**And** validation : DevTools responsive mode, tester tous breakpoints

---

### Story 10.2: Optimiser images et typography responsive

En tant que visiteur,
Je veux que les images et le texte s'adaptent parfaitement à mon écran,
Afin d'avoir une expérience de lecture optimale.

**Acceptance Criteria:**

**Given** le site nécessite images et typography responsive
**When** j'optimise images et typography pour tous breakpoints
**Then** images responsive : next/image avec sizes optimisés par breakpoint (srcset automatique)
**And** infographies : srcset mobile (640w), tablet (1024w), desktop (1920w)
**And** typography responsive : clamp() pour fluid sizing (ex: clamp(1rem, 2vw, 1.5rem))
**And** headings responsive : h1 mobile (2rem) → desktop (3.5rem), h2 mobile (1.5rem) → desktop (2.5rem)
**And** spacing responsive : padding/margins adaptés (px-4 md:px-8 lg:px-16)
**And** test visuel : typography lisible et proportionnée sur tous breakpoints
**And** test images : aucune image pixelisée, chargement optimal (size approprié par device)

---

### Story 10.3: Corriger les bugs de scroll navigation (FR38)

En tant que visiteur,
Je veux faire défiler les pages sans bugs ou comportements erratiques,
Afin d'avoir une expérience de navigation fluide.

**Acceptance Criteria:**

**Given** la navigation scroll-based peut avoir des comportements erratiques (FR38)
**When** j'optimise la détection de scroll et la navigation
**Then** debounce agressif sur scroll listener (300ms minimum)
**And** cooldown entre navigations automatiques scroll (1 seconde, éviter scroll erratique)
**And** détection scroll direction (up/down) avec threshold (50px avant trigger)
**And** scroll smooth behavior CSS : scroll-behavior: smooth sur html
**And** désactivation navigation automatique pendant scroll utilisateur (flag isScrolling)
**And** test mobile : scroll fluide sans jumps ou navigation involontaire
**And** test desktop : scroll avec molette fluide, aucun comportement erratique
**And** validation : scroll confortable sur homepage, gains, contact (mobile + desktop)

---

### Story 10.4: Tests sur devices réels

En tant que développeur,
Je veux tester le site sur différents devices et navigateurs,
Afin de garantir une compatibilité maximale.

**Acceptance Criteria:**

**Given** le site doit fonctionner sur tous les devices et navigateurs courants
**When** je teste sur devices réels et émulateurs
**Then** test Chrome DevTools responsive mode : iPhone SE (375×667), iPhone 14 Pro (393×852), iPhone 14 Pro Max (430×932), iPad (768×1024), iPad Pro (1024×1366)
**And** test navigateurs desktop : Chrome, Firefox, Edge (1920×1080, 2560×1440)
**And** test Safari si disponible (macOS ou iOS)
**And** note : pas d'accès à des devices réels pour tests physiques, émulateurs DevTools uniquement
**And** validation : layout correct sur tous devices testés
**And** validation : navigation et interactions fonctionnelles
**And** validation : aucun overflow horizontal, aucun élément coupé
**And** screenshot de 5 breakpoints clés pour documentation

---

## Epic 11: Performance Optimization & Core Web Vitals

### Story 11.1: Optimiser les images en WebP et fonts (NFR6)

En tant que visiteur,
Je veux que les images se chargent instantanément,
Afin d'avoir une expérience fluide sans attente.

**Acceptance Criteria:**

**Given** les images doivent être optimisées (NFR6)
**When** j'optimise toutes les images et fonts
**Then** conversion toutes images (infographies, logo) en WebP qualité 80-85%
**And** next/image : lazy loading automatique, blur placeholder, priority sur hero image
**And** sizes optimisés par breakpoint : mobile (640w), tablet (1024w), desktop (1920w)
**And** alt text SEO descriptifs sur toutes images
**And** fonts Geist : next/font préload automatique, self-hosted (RGPD compliant)
**And** font-display: swap (éviter FOIT - Flash Of Invisible Text)
**And** subset fonts : seulement caractères utilisés (latin, pas cyrillic/chinese)
**And** validation : Lighthouse "Properly size images" (passed)
**And** test : LCP < 1s (image hero chargée rapidement)

---

### Story 11.2: Optimiser le bundle size et code splitting

En tant que visiteur,
Je veux que le site charge rapidement,
Afin de naviguer sans attente même sur connexion lente.

**Acceptance Criteria:**

**Given** le bundle doit être optimisé pour performance
**When** j'optimise le bundle size et code splitting
**Then** code splitting automatique par route Next.js (chaque page charge uniquement son code)
**And** ElectricHexGrid dans bundle principal (affichage immédiat requis)
**And** INTERDICTION dynamic import pour ElectricHexGrid (doit être dans bundle principal, affichage homepage immédiat)
**And** Tailwind purge unused classes (automatique Next.js)
**And** minification automatique Next.js (CSS + JS)
**And** bundle size monitoring : first load JS < 250kb
**And** validation : Lighthouse "Reduce unused JavaScript" (passed)
**And** validation : npm run build affiche bundle sizes, vérifier < 250kb first load

---

### Story 11.3: Optimiser les animations pour GPU acceleration

En tant que visiteur,
Je veux des animations fluides 60fps,
Afin d'avoir une expérience visuelle premium.

**Acceptance Criteria:**

**Given** les animations doivent être optimisées pour performance
**When** j'optimise toutes les animations CSS et JS
**Then** GPU acceleration : transform et opacity uniquement (PAS left/top/width/height)
**And** will-change sur éléments animés (ElectricHexGrid canvas, modales, transitions)
**And** requestAnimationFrame optimisé dans ElectricHexGrid (RAF avec throttle si nécessaire)
**And** CSS animations préférées sur JS quand possible (transitions, fade-in/fade-out)
**And** @media (prefers-reduced-motion: reduce) : désactiver animations non-essentielles
**And** test : animations 60fps constant (DevTools Performance profiling)
**And** validation : aucun jank, aucune frame drop sur animations critiques

---

### Story 11.4: Optimiser CSS critical et inline

En tant que visiteur,
Je veux voir le contenu above-the-fold instantanément,
Afin de ne jamais voir de page blanche au chargement.

**Acceptance Criteria:**

**Given** le CSS doit être optimisé pour First Contentful Paint
**When** j'optimise le chargement CSS
**Then** CSS critical inline pour above-the-fold (Next.js automatique)
**And** Tailwind purge unused classes (automatique)
**And** minification CSS automatique Next.js
**And** validation : Lighthouse "Eliminate render-blocking resources" (passed ou warning minimal acceptable)
**And** validation : First Contentful Paint < 0.5s
**And** test : contenu above-the-fold visible immédiatement (DevTools Network throttling Fast 3G)

---

### Story 11.5: Valider Core Web Vitals et Lighthouse (NFR1-NFR5)

En tant que développeur performance,
Je veux valider que tous les Core Web Vitals sont optimaux,
Afin de garantir un SEO optimal et une expérience utilisateur exceptionnelle.

**Acceptance Criteria:**

**Given** le site doit respecter Core Web Vitals (NFR1-NFR5)
**When** je mesure et valide toutes les métriques
**Then** LCP (Largest Contentful Paint) < 1 seconde : hero image/text chargé rapidement (NFR1)
**And** FID (First Input Delay) < 50ms : interactivité immédiate (NFR2)
**And** TTI (Time to Interactive) < 1 seconde : JS hydraté rapidement (NFR3)
**And** CLS (Cumulative Layout Shift) < 0.1 : layout stable, aucun shift (NFR4)
**And** Lighthouse score > 90 sur tous les axes : Performance, SEO, Accessibility, Best Practices (NFR5)
**And** test Lighthouse local : npm run build && npm start, puis audit Lighthouse
**And** test WebPageTest : https://www.webpagetest.org/ (validation multiple devices/connexions)
**And** validation : Core Web Vitals tous verts (zone verte Google)
**And** documentation : capturer scores Lighthouse pour référence

---

## Epic 12: Deployment & CI/CD

### Story 12.1: Créer le pipeline GitHub Actions CI/CD

En tant que développeur,
Je veux automatiser la validation du code avant déploiement,
Afin de garantir que seul du code valide arrive en production.

**Acceptance Criteria:**

**Given** le projet nécessite un pipeline CI/CD automatisé
**When** je crée .github/workflows/ci.yml
**Then** trigger : push sur branches (main, develop, feature/*)
**And** Step 1 : npm ci (installation dépendances, plus rapide que npm install)
**And** Step 2 : npm run lint (ESLint validation)
**And** Step 3 : npm run type-check (TypeScript strict validation)
**And** Step 4 : npm run build (Next.js build validation)
**And** fail pipeline si erreurs lint, type ou build
**And** cache node_modules pour performance (actions/cache)
**And** test : push feature branch avec erreur TypeScript → pipeline fail
**And** test : push feature branch avec code valide → pipeline pass
**And** validation : badge GitHub Actions "passing" dans README

---

### Story 12.2: Configurer les variables d'environnement production (ARCH-17)

En tant que développeur,
Je veux configurer les secrets production de manière sécurisée,
Afin de protéger les clés API et respecter les bonnes pratiques.

**Acceptance Criteria:**

**Given** le projet nécessite des secrets API en production (ARCH-17)
**When** je configure les variables d'environnement Vercel
**Then** Vercel Dashboard : ajouter RESEND_API_KEY (production)
**And** Vercel Dashboard : ajouter TURNSTILE_SITE_KEY (production)
**And** Vercel Dashboard : ajouter TURNSTILE_SECRET (production)
**And** .env.local : variables locales dev (gitignored, jamais commité)
**And** .env.example : template documentation (commité git, placeholders)
**And** validation : aucun secret hardcodé dans code (grep -r "sk_" ., grep -r "RESEND_API_KEY" .)
**And** validation : .env.local dans .gitignore
**And** documentation README : instructions configuration env vars locales et production

---

### Story 12.3: Déployer sur Vercel production (NFR18)

En tant que développeur,
Je veux déployer le site sur Vercel avec auto-deploy,
Afin d'avoir un site en production accessible publiquement.

**Acceptance Criteria:**

**Given** le site est prêt pour production (NFR18)
**When** je configure le déploiement Vercel
**Then** connexion repo GitHub → Vercel
**And** auto-deploy activé : push sur main branch → déploiement automatique production
**And** preview deploys activés : pull requests → déploiement preview (URL temporaire)
**And** production domain : solutix.fr (ou domaine custom si disponible)
**And** HTTPS automatique Vercel (certificat SSL, NFR7)
**And** Edge caching automatique pour pages SSG (performance optimale)
**And** test : push sur main → Vercel déploie automatiquement
**And** validation : site accessible en production (https://solutix.fr ou https://solutix.vercel.app)

---

### Story 12.4: Validation post-déploiement production

En tant que développeur,
Je veux valider que le site fonctionne parfaitement en production,
Afin de garantir une expérience utilisateur sans bugs.

**Acceptance Criteria:**

**Given** le site est déployé en production (Story 12.3)
**When** je valide tous les aspects critiques en production
**Then** Lighthouse CI production : score > 90 (Performance, SEO, A11Y, Best Practices)
**And** Core Web Vitals production : LCP < 1s, FID < 50ms, CLS < 0.1
**And** test formulaire contact : remplir et soumettre → email reçu par Renaud
**And** test rate limiting : 11 soumissions dans l'heure → erreur 429
**And** test navigation : desktop et mobile, toutes pages accessibles
**And** test responsive : DevTools responsive mode, tous breakpoints corrects
**And** test HTTPS : certificat SSL valide, https://solutix.fr accessible
**And** test erreurs : /page-inexistante → 404 personnalisée
**And** validation : 0 erreur console production (DevTools Console)
**And** documentation : capturer URL production et scores Lighthouse

---

### Story 12.5: Documenter le déploiement et créer rollback strategy

En tant que développeur,
Je veux documenter le processus de déploiement et rollback,
Afin de faciliter la maintenance future et gérer les incidents.

**Acceptance Criteria:**

**Given** le site est en production et nécessite documentation
**When** je documente le déploiement et crée la rollback strategy
**Then** README.md : section "Déploiement" avec instructions setup Vercel
**And** README.md : section "Variables d'environnement" avec liste complète et instructions
**And** README.md : section "Validation post-déploiement" avec checklist
**And** README.md : section "Rollback" avec instructions rollback Vercel UI (instant vers déploiement précédent)
**And** README.md : instructions git revert si problème identifié après deploy
**And** README.md : monitoring erreurs production (note : console.error V1, solution gratuite V2 comme Sentry)
**And** validation : documentation claire, testée, prête pour maintenance future
**And** validation complète : npm run validate passe sans erreur
**And** célébration : 🎉 Site Solutix V1 déployé en production !