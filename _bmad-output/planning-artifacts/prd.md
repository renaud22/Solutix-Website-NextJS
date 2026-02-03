---
stepsCompleted:
  - step-01-init
  - step-02-discovery
  - step-03-success
  - step-04-journeys
  - step-05-domain
  - step-06-innovation
  - step-07-project-type
  - step-08-scoping
  - step-09-functional
  - step-10-nonfunctional
  - step-11-polish
inputDocuments:
  - "_bmad-output/planning-artifacts/product-brief-solutix-website-2026-02-03.md"
documentCounts:
  briefCount: 1
  researchCount: 0
  brainstormingCount: 0
  projectDocsCount: 0
classification:
  projectType: web_app
  domain: general
  complexity: low-medium
  projectContext: greenfield
  targetAudience: "Entreprises toutes tailles (startups, TPE, PME, grandes entreprises) - Décideurs et employés à responsabilité (dirigeants, managers, directeurs de services)"
workflowType: 'prd'
date: 2026-02-03
author: Renaud
---

# Product Requirements Document - solutix-website

**Author:** Renaud
**Date:** 2026-02-03

## Success Criteria

### User Success

**Moment "Aha!" = Premier contact**
- Le visiteur prend la décision de contacter Renaud via le formulaire
- Le visiteur comprend immédiatement ce que fait Solutix (< 5 secondes)
- Le ton percutant résonne et donne confiance
- L'UX mobile est impeccable (pas de bug scroll, dock fonctionnel)

**Satisfaction & Rétention**
- Satisfaction client > 8/10 ou NPS > 50
- Taux de clients récurrents > 30% après M6
- Taux de recommandation active > 40%
- Témoignages clients avec résultats chiffrés

### Business Success

**Objectifs 3 mois (Mai 2026) :**
- 3 nouveaux clients signés par mois
- Valeur projet minimum : 2-3k€ par client
- Revenu mensuel cible : 6-9k€/mois
- Lead acquisition : Forte croissance des contacts qualifiés via le site

**Objectifs 12 mois (Février 2027) :**
- 5 nouveaux clients signés par mois
- Revenu mensuel cible : 10-15k€/mois
- Mix clients : Nouveaux clients + clients récurrents (évolutions, nouveaux projets)

### Technical Success

**Performance :**
- Lighthouse score > 90 sur tous les axes (Performance, SEO, A11Y, Best Practices)
- Temps de chargement < 1s (LCP < 1s confirmé)
- Core Web Vitals optimisés (FID < 50ms, TTI < 1s, CLS < 0.1)

**Qualité :**
- Aucune erreur console critique
- Navigation fluide sans bugs sur desktop/mobile/tablet
- Formulaire contact fonctionne et emails sont reçus correctement
- Tous les textes sont réécrits avec le ton validé

**Maintenabilité :**
- Code refactoré et maintenable
- Composants réutilisables créés
- Architecture scalable pour V2 (blog, outils IA)
- Scripts npm permettent validation continue (lint, type-check, etc.)

### Measurable Outcomes

| Étape Funnel | Métrique | Cible |
|--------------|----------|-------|
| **Acquisition** | Temps sur site | > 2 minutes |
| **Acquisition** | Pages/session | > 3 pages |
| **Conversion** | Visiteur → Contact | > 2-3% (benchmark B2B) |
| **Conversion** | Contacts qualifiés/mois | M3: 10-15 → M12: 15-20 |
| **Closing** | Contact → RDV diagnostic | > 60% |
| **Closing** | RDV → Devis envoyé | > 80% |
| **Closing** | Devis → Signature | > 30-40% |
| **Closing** | Délai moyen | < 30 jours |
| **Rétention** | Satisfaction client | > 8/10 ou NPS > 50 |
| **Rétention** | Clients récurrents | > 30% après M6 |
| **Rétention** | Recommandation active | > 40% |

## Product Scope

### MVP - Minimum Viable Product (V1)

**Priorité 1 : Refactoring Architecture**
- Découpage `page.tsx` monolithique (873 lignes) → composants modulaires
- Extraction configuration (MODALS_CONFIG, types TypeScript)
- Conversion SPA → vraies routes Next.js avec SEO optimisé
- Organisation fichiers selon architecture cible

**Priorité 2 : Réécriture Textes**
- Application ton ultra-percutant sur toutes les sections
- Intégration punchlines et analogies validées
- Cohérence tonale Tony Stark/Dr House sur tout le site

**Priorité 3 : Formulaire Contact Fonctionnel**
- Champs : Nom, Email, Téléphone (optionnel), Objet, Message
- Validation temps réel avec messages clairs
- API route avec Zod + Rate limiting
- Intégration Resend pour emails transactionnels
- États visuels : loading, confirmation succès

**Priorité 4 : SEO/GEO/A11Y**
- Metadata Next.js complets + Schema.org JSON-LD
- Sitemap.xml + robots.txt
- Optimisation images (WebP, lazy loading, alt text)
- ARIA labels + navigation clavier complète
- Contraste WCAG AA (4.5:1 texte, 3:1 texte large)

**Priorité 5 : Performance < 1s**
- Core Web Vitals optimisés
- Code splitting, fonts préchargées, CSS critical inline
- Static Site Generation (SSG) + Edge caching Vercel

**Priorité 6 : Responsive Mobile**
- Dock mobile bottom bar : [Home] [Menu] [Contact]
- Breakpoints Tailwind, touch targets 44×44px minimum
- Fix bug scroll navigation (debounce agressif)

**Priorité 7 : Boîte à Outils Placeholder**
- Cards des outils futurs grisées avec "Prochainement"
- Aperçu visuel des 5 outils prévus V2

### Growth Features (V2 - Post-MVP)

- **Blog Auto-IA** : Next.js MDX + n8n + génération articles IA
- **Boîte à Outils IA** : Process Autopsy, Competitor Spy, Quick Win Finder, ROI Reality Check, Tech Stack Optimizer
- **Analytics Avancés** : Vercel Analytics, heatmaps, A/B testing
- **Supabase Lead Storage** : CRM simplifié, lead scoring

### Vision Future (V3+)

- Solutions génériques packagées (templates automatisation)
- Expansion géographique francophonie (Belgique, Suisse, Québec)
- SaaS autonomes dérivés (ex: AutoRelance)
- Formations en ligne automatisation

## User Journeys

### Personas - Cibles Principales

#### Sophie - Dirigeante TPE Service (38 ans)

- **Contexte** : Co-fondatrice agence RH, 12 personnes, CA 800k€
- **Douleur** : Perd 8-10h/sem sur tâches répétitives (relances factures, copier-coller CRM→facturation)
- **Frein** : Budget (10-15k€ max) + Confiance (peur d'être arnaquée)
- **Déclencheur** : Audit chiffré, devis avec ROI, ton direct sans bullshit
- **Décision** : Seule (avec validation associés)

#### Thomas - Manager Ops PME Industrielle (42 ans)

- **Contexte** : Responsable Opérations fabricant pièces, 80 personnes
- **Douleur** : ERP vieillissant, ressaisies manuelles, 47 macros Excel
- **Frein** : Validation DAF + Risque opérationnel (ne peut pas arrêter production)
- **Déclencheur** : Diagnostic coûts cachés, approche par étapes sans tout casser
- **Décision** : Recommande → DAF valide

#### Laura - Fondatrice Startup SaaS (31 ans)

- **Contexte** : CEO EdTech, 6 personnes, levée seed 500k€
- **Douleur** : Process marketing/sales 100% manuels, dev 100% focus produit
- **Frein** : Budget vs runway, est-ce le bon moment ?
- **Déclencheur** : Quick win rapide, no-code quand pertinent, flexibilité
- **Décision** : Seule (CEO), peut aller vite si convaincue

#### Marc - Responsable IT PME (45 ans) - PRESCRIPTEUR

- **Contexte** : IT chaîne 8 magasins, 150 personnes, équipe de 2
- **Douleur** : Sollicité de partout, backlog d'automatisations qui s'accumule
- **Frein** : Scepticisme technique, risque réputationnel si ça foire
- **Déclencheur** : Quelqu'un qui parle son langage, code propre, documentation
- **Décision** : Marc recommande → DG valide

### Parcours Utilisateur Type (Sophie)

**1. Découverte**
- Recherche Google "automatiser facturation PME" ou recommandation LinkedIn
- Arrive sur homepage, le ton "Automatiser ou s'épuiser" résonne immédiatement
- Lit section "Gains", se reconnaît dans les exemples chiffrés

**2. Exploration**
- Consulte "Cas d'usage" → Clique sur "Automatiser un process"
- Lit "Méthode" → Rassurée par le process clair en 6 étapes
- Vérifie "Tarifs" → Contact gratuit, pas de surprise

**3. Moment d'hésitation**
- "Est-ce que c'est pour moi ?"
- "Combien ça va vraiment coûter ?"
- "Est-ce qu'il va comprendre mon métier ?"

**4. Décision de contact**
- Lit "À Propos" → Le ton direct et honnête de Renaud la convainc
- Se dit "Enfin quelqu'un qui ne me prend pas pour une idiote"
- Clique sur "Contact", remplit le formulaire

**5. Premier appel (Diagnostic)**
- Renaud l'écoute décrire ses frustrations
- Pose des questions précises sans jargon
- Calcule rapidement le ROI : "Votre process coûte 15k€/an en temps perdu"
- Sophie est soulagée et impressionnée par la clarté

**6. Succès & Advocacy**
- 3 mois après livraison : Récupère 8h/semaine
- Process tournent sans elle
- Recommande Solutix à 3 contacts sur LinkedIn
- Devient un cas client référence

### Journey Requirements Summary

Les parcours révèlent les capacités nécessaires pour chaque section du site :

| Section | Capacité requise | Objectif conversion |
|---------|------------------|---------------------|
| **Homepage** | Accroche immédiate, punchline signature | Capter attention en < 5s |
| **Gains** | Exemples chiffrés où visiteur se reconnaît | Créer identification |
| **Cas d'usage** | Scénarios concrets (automatisation, app, SaaS) | Montrer pertinence |
| **Méthode** | Process clair 6 étapes, transparent | Rassurer sur l'approche |
| **Tarifs** | Transparence, contact gratuit | Lever le frein budget |
| **À Propos** | Crédibilité, ton personnel authentique | Donner confiance |
| **Contact** | Formulaire simple, confirmation claire | Convertir en lead |

## Web App Specific Requirements

### Project-Type Overview

Site vitrine marketing Next.js avec architecture hybride SSR/SSG pour combiner navigation fluide et SEO optimisé.

### Technical Architecture Considerations

#### Rendering Strategy (SSR/SSG Hybride)

- **SSG (Static Site Generation)** pour les pages de contenu statique (Homepage, Gains, Méthode, Tarifs, À Propos)
- **SSR (Server-Side Rendering)** si besoin de contenu dynamique
- Next.js App Router gère automatiquement le choix optimal
- Routes Next.js pour SEO (/gains, /cas-usage, /methode, /tarifs, /a-propos, /contact)
- Navigation fluide via useRouter + transitions CSS (pas de reload)

#### Browser Support

- Chrome, Firefox, Safari, Edge (dernières versions)
- Pas de support IE11 (obsolète)

### Responsive Design

- **Mobile-first** approach avec Tailwind CSS
- **Breakpoints** : sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)
- **Dock mobile** : Bottom bar fixe avec 3 boutons [Home] [Menu] [Contact]
- **Touch targets** : Minimum 44×44px pour tous les éléments interactifs

### Performance Targets

| Métrique | Cible | Outil de mesure |
|----------|-------|-----------------|
| LCP | < 1s | Lighthouse |
| FID | < 50ms | Lighthouse |
| TTI | < 1s | Lighthouse |
| CLS | < 0.1 | Lighthouse |
| Lighthouse Score | > 90 | Lighthouse CI |

#### Optimisations Performance

- Code splitting automatique Next.js
- Fonts préchargées (Geist)
- CSS critical inline
- Images WebP avec lazy loading (Next.js Image)
- Edge caching Vercel

### SEO Strategy

- **Metadata** : Title, description, OG tags par page
- **Schema.org** : JSON-LD (ProfessionalService, Person)
- **Sitemap** : Généré automatiquement
- **Robots.txt** : Configuré pour indexation
- **Sémantique HTML5** : header, nav, main, article, section, footer
- **Headings** : Un seul h1 par page, hiérarchie correcte

### Accessibility Level (WCAG AA)

- **Contraste** : 4.5:1 texte normal, 3:1 texte large
- **Navigation clavier** : Tab, Shift+Tab, Enter, Esc, Arrows
- **ARIA** : Labels sur tous les éléments interactifs
- **Focus** : Outline visible personnalisé
- **Screen reader** : Structure sémantique, alt text images
- **Touch** : Targets minimum 44×44px

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach :** Problem-Solving MVP
- Focus : Résoudre le problème principal (convertir visiteurs en leads qualifiés)
- Minimum viable : Site lisible, ton percutant, formulaire fonctionnel, UX sans bugs
- Validation : Au moins 1 contact qualifié reçu via le formulaire

**Resource Requirements :** Solo developer (Renaud) + IA assistants (Claude)

### MVP Feature Set (Phase 1) - Priorités

| Priorité | Fonctionnalité | Statut | Détail |
|----------|---------------|--------|--------|
| **P1** | Refactoring architecture | Must-have | Découpage page.tsx 873 lignes → composants modulaires |
| **P2** | Réécriture textes percutants | Must-have | Ton Tony Stark/Dr House sur toutes sections |
| **P3** | Correctifs fonctionnels | Must-have | Fix scroll cassé + redisposition éléments UX |
| **P4** | Formulaire contact | Must-have | Validation temps réel, Resend, rate limiting |
| **P5** | SEO/A11Y | Must-have | Metadata, Schema.org, WCAG AA |
| **P6** | Performance < 1s | Must-have | LCP < 1s, code splitting, edge caching |
| **P7** | Responsive mobile + Dock | Must-have | Bottom bar, touch targets 44×44px |
| **P8** | Boîte outils placeholder | Nice-to-have | Cards grisées "Prochainement" |

#### Core User Journeys Supported

- Sophie découvre le site → explore les sections → remplit le formulaire contact
- Parcours représentatif pour Thomas, Laura et Marc (mêmes étapes, déclencheurs différents)

### Post-MVP Features

#### Phase 2 (V2 - Growth)

- **Blog Auto-IA** : Next.js MDX + n8n + génération articles IA
- **Boîte à Outils IA fonctionnelle** : Process Autopsy, Competitor Spy, Quick Win Finder, ROI Reality Check, Tech Stack Optimizer
- **Analytics Avancés** : Vercel Analytics, heatmaps, A/B testing
- **Supabase Lead Storage** : CRM simplifié, lead scoring, attribution tracking

#### Phase 3 (V3 - Expansion)

- Solutions génériques packagées (templates automatisation)
- Expansion géographique francophonie (Belgique, Suisse, Québec)
- SaaS autonomes dérivés (ex: AutoRelance)
- Formations en ligne automatisation

### Risk Mitigation Strategy

| Type de Risque | Risque identifié | Mitigation |
|----------------|------------------|------------|
| **Technique** | Refactoring complexe (873 lignes) | Découper progressivement en composants isolés |
| **Marché** | Pas de leads générés | Tester le ton avec early readers avant lancement complet |
| **Ressources** | Temps limité | Prioriser formulaire + textes avant optimisations fines |
| **UX** | Bugs scroll/disposition non résolus | Traiter en P3, juste après les textes |

## Functional Requirements

### 1. Navigation & Structure du Site

- **FR1** : Le visiteur peut accéder à la page d'accueil (Homepage)
- **FR2** : Le visiteur peut naviguer vers chaque section du site (Gains, Cas d'usage, Méthode, Tarifs, À Propos, Contact)
- **FR3** : Le visiteur peut naviguer entre les pages sans rechargement complet (navigation fluide)
- **FR4** : Le visiteur peut revenir à la page d'accueil depuis n'importe quelle section
- **FR5** : Le visiteur mobile peut accéder au menu via un dock en bas d'écran
- **FR6** : Le visiteur mobile peut ouvrir/fermer le menu dépliant

### 2. Contenu & Présentation

- **FR7** : Le visiteur peut lire le message d'accroche principal (Hero) sur la page d'accueil
- **FR8** : Le visiteur peut consulter les bénéfices/gains de l'automatisation avec exemples chiffrés
- **FR9** : Le visiteur peut explorer les cas d'usage (Automatiser un process, Créer une app métier, Créer un SaaS)
- **FR10** : Le visiteur peut consulter la méthodologie de travail en 6 étapes
- **FR11** : Le visiteur peut consulter les informations tarifaires et la politique de contact gratuit
- **FR12** : Le visiteur peut lire la présentation de Renaud (À Propos)
- **FR13** : Le visiteur peut voir les punchlines et messages percutants sur chaque section
- **FR14** : Le visiteur peut voir des images/infographies associées à chaque bloc de contenu sous tabs

### 3. Contact & Lead Generation

- **FR15** : Le visiteur peut accéder au formulaire de contact
- **FR16** : Le visiteur peut remplir le formulaire avec ses informations (Nom, Email, Téléphone optionnel, Objet, Message)
- **FR17** : Le visiteur peut voir les erreurs de validation en temps réel avant soumission
- **FR18** : Le visiteur peut soumettre le formulaire de contact
- **FR19** : Le visiteur peut voir un indicateur de chargement pendant l'envoi
- **FR20** : Le visiteur peut voir une notification toastr de succès après envoi du formulaire
- **FR21** : Le visiteur peut voir une notification toastr d'erreur si l'envoi échoue
- **FR22** : Renaud reçoit un email de notification pour chaque nouveau contact
- **FR23** : Le système limite le nombre de soumissions par IP (rate limiting anti-spam)

### 4. SEO & Découvrabilité

- **FR24** : Les moteurs de recherche peuvent indexer toutes les pages du site
- **FR25** : Chaque page expose des métadonnées appropriées (title, description, OG tags)
- **FR26** : Le site expose des données structurées Schema.org (ProfessionalService, Person)
- **FR27** : Le site génère automatiquement un sitemap.xml
- **FR28** : Le site expose un fichier robots.txt configuré
- **FR29** : Chaque page a une structure sémantique HTML5 correcte

### 5. Accessibilité

- **FR30** : Le visiteur peut naviguer entièrement au clavier (Tab, Shift+Tab, Enter, Esc)
- **FR31** : Le visiteur utilisant un lecteur d'écran peut comprendre la structure du site
- **FR32** : Le visiteur peut interagir avec tous les éléments interactifs via des cibles tactiles suffisantes (44×44px)
- **FR33** : Le visiteur peut lire tout le texte avec un contraste suffisant (WCAG AA)

### 6. Responsive & Mobile

- **FR34** : Le visiteur peut consulter le site sur mobile (écrans < 640px)
- **FR35** : Le visiteur peut consulter le site sur tablette (écrans 640px - 1024px)
- **FR36** : Le visiteur peut consulter le site sur desktop (écrans > 1024px)
- **FR37** : Le visiteur mobile peut utiliser le dock bottom bar pour naviguer
- **FR38** : Le visiteur peut faire défiler les pages sans bugs de scroll

### 7. Pages d'Erreur

- **FR39** : Le visiteur peut voir une page d'erreur 404 personnalisée avec menu et footer
- **FR40** : Le visiteur peut voir une page d'erreur 500 personnalisée avec menu et footer
- **FR41** : Les pages d'erreur conservent la navigation standard du site

### 8. Boîte à Outils (Placeholder V1)

- **FR42** : Le visiteur peut voir un aperçu des outils IA à venir (cards grisées)
- **FR43** : Le visiteur peut comprendre que ces outils seront disponibles prochainement

## Non-Functional Requirements

### Performance

- **NFR1** : Les pages doivent avoir un LCP (Largest Contentful Paint) < 1 seconde
- **NFR2** : Les pages doivent avoir un FID (First Input Delay) < 50ms
- **NFR3** : Les pages doivent avoir un TTI (Time to Interactive) < 1 seconde
- **NFR4** : Les pages doivent avoir un CLS (Cumulative Layout Shift) < 0.1
- **NFR5** : Le Lighthouse Score doit être > 90 sur tous les axes (Performance, SEO, A11Y, Best Practices)
- **NFR6** : Les images doivent être optimisées en WebP avec lazy loading

### Sécurité

- **NFR7** : Le site doit être servi en HTTPS uniquement
- **NFR8** : Le formulaire de contact doit être protégé par un captcha invisible Cloudflare Turnstile
- **NFR9** : Le formulaire de contact doit être protégé par rate limiting côté serveur
- **NFR10** : Les données du formulaire doivent être validées côté serveur (Zod)
- **NFR11** : Aucune donnée sensible ne doit être exposée côté client

### Accessibilité

- **NFR12** : Le site doit respecter les critères WCAG 2.1 niveau AA
- **NFR13** : Le contraste des textes doit être >= 4.5:1 (normal) et >= 3:1 (large)
- **NFR14** : Tous les éléments interactifs doivent être accessibles au clavier
- **NFR15** : Les cibles tactiles doivent mesurer au minimum 44×44px
- **NFR16** : Le site doit être utilisable avec un lecteur d'écran

### Intégration

- **NFR17** : Le site doit s'intégrer avec Resend pour l'envoi d'emails transactionnels
- **NFR18** : Le site doit être déployé sur Vercel (free tier) avec déploiement automatique depuis GitHub
- **NFR19** : Le site doit générer automatiquement un sitemap.xml valide

### Maintenabilité

- **NFR20** : Le code doit être organisé en composants modulaires et réutilisables
- **NFR21** : Le code doit passer les vérifications ESLint sans erreurs
- **NFR22** : Le code doit passer les vérifications TypeScript en mode strict
- **NFR23** : La structure des fichiers doit suivre l'architecture cible définie

### Style de Code

- **NFR24** : L'indentation du code doit utiliser 4 espaces (pas 2)
- **NFR25** : Les chaînes de caractères doivent utiliser des double quotes `"` (ou template literals quand approprié)
