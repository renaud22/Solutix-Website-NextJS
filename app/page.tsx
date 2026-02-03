"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// --- CONFIGURATION DES MODALES (Data-Driven) ---
const MODALS_CONFIG: Record<string, ModalConfig> = {
  '02': {
    label: 'Les Gains',
    area: 'area-gains',
    icon: 'bi-graph-up-arrow',
    cardSubtitle: 'Temps · Argent · Sérénité',
    sidebar: {
      title: 'Les Gains',
      description: 'Ce que vous gagnez concrètement en travaillant avec moi.',
      cta: { title: 'Un projet en tête ?', subtitle: 'Discutons de vos besoins.' }
    },
    tabs: [
      { id: 'revenus', label: 'Augmentation des revenus', icon: 'bi-currency-euro', title: 'Augmentation des revenus', subtitle: 'Vendez plus, sans en faire plus.', text: ["Une entreprise qui automatise ses process marketing et commerciaux, c'est une entreprise qui peut vendre plus — sans forcément embaucher plus.", "Relances automatiques, qualification de leads 24h/24, suivi des prospects sans oubli, campagnes déclenchées au bon moment... Tout ça, ça tourne pendant que vous dormez. Pendant que vos concurrents attendent lundi matin pour rappeler un prospect, vous avez déjà envoyé trois emails personnalisés.", "Résultat : plus d'opportunités captées, moins de leads perdus dans la nature, et un chiffre d'affaires qui peut grimper sans que votre charge de travail explose — voire qui la réduise."], punchline: "L'automatisation ne remplace pas vos commerciaux. Elle leur donne des super-pouvoirs.", metrics: [{ icon: 'bi-graph-up-arrow', label: '+Leads' }, { icon: 'bi-envelope-check', label: 'Relances auto' }, { icon: 'bi-cash-stack', label: '+CA' }] },
      { id: 'couts', label: 'Réduction des coûts', icon: 'bi-piggy-bank', title: 'Réduction des coûts', subtitle: 'Moins de gaspillage, plus de marge.', text: ["Les coûts cachés d'une entreprise, ça s'accumule vite. Du temps passé sur des tâches manuelles qui pourraient être automatisées. Des erreurs humaines qui coûtent cher à corriger. Des oublis de facturation qui passent inaperçus. Des abonnements en double ou surdimensionnés dont personne ne se souvient.", "Mon travail, c'est d'identifier ces fuites — au moins sur les process que je mets en place — et de les colmater. Chaque solution que je propose est chiffrée, documentée, et vous permet d'avoir une vraie visibilité sur vos coûts applicatifs.", "Moins de gaspillage, moins d'erreurs, moins d'oublis. Plus de marge, plus de contrôle."], punchline: "Chaque euro économisé est un euro de marge. L'automatisation, c'est du profit net.", metrics: [{ icon: 'bi-shield-check', label: '-Erreurs' }, { icon: 'bi-eye', label: 'Visibilité' }, { icon: 'bi-percent', label: '+Marge' }] },
      { id: 'temps', label: 'Gain de temps', icon: 'bi-clock', title: 'Gain de temps', subtitle: "Stop aux corvées. Focus sur l'essentiel.", text: ["Combien d'heures par semaine vous ou vos équipes passez-vous sur des tâches pénibles, répétitives, qui ne demandent aucune réflexion mais qui prennent un temps fou ? Copier-coller des données, relancer des factures, mettre à jour des tableaux, analyser des rapports à la main...", "Tout ça peut être automatisé. Et le temps libéré, vous pouvez l'investir dans des tâches à plus forte valeur ajoutée — ou tout simplement arrêter de finir vos journées à 21h.", "Plus de temps pour ce qui compte vraiment. Que ce soit faire grandir votre boîte, ou rentrer dîner avec votre famille."], punchline: "Le temps, c'est la seule ressource qu'on ne peut pas racheter. Arrêtez de le gaspiller.", metrics: [{ icon: 'bi-hourglass-split', label: '+Heures' }, { icon: 'bi-person-check', label: 'Focus' }, { icon: 'bi-house-heart', label: 'Équilibre' }] },
      { id: 'competitif', label: 'Avantage compétitif', icon: 'bi-trophy', title: 'Acquisition d\'un avantage compétitif', subtitle: 'Regardez vos concurrents dans le rétro.', text: ["Pendant que vos concurrents font les choses à l'ancienne, vous pouvez aller plus vite, répondre plus vite, livrer plus vite. Et dans un marché où tout le monde se ressemble, c'est souvent ça qui fait la différence.", "Une entreprise qui a automatisé ses process clés, c'est une entreprise plus réactive, plus agile, plus difficile à rattraper. Vous ne subissez plus le marché — vous le devancez.", "La question n'est plus \"est-ce que je dois m'y mettre ?\" — c'est \"combien de temps je peux encore me permettre d'attendre ?\"."], punchline: "Vos concurrents hésitent encore. Pendant ce temps, vous prenez de l'avance.", metrics: [{ icon: 'bi-lightning', label: 'Rapidité' }, { icon: 'bi-arrows-move', label: 'Agilité' }, { icon: 'bi-award', label: 'Leader' }] },
      { id: 'serenite', label: 'Sérénité', icon: 'bi-emoji-smile', title: 'Gain de sérénité', subtitle: 'Dormez tranquille. Vos systèmes veillent.', text: ["Les tâches pénibles et redondantes, ça use. Quand on doit les faire tous les jours, ça pèse sur le moral. Et quand on sait qu'on risque d'oublier quelque chose d'important ou de faire une erreur, le stress s'installe.", "En déléguant ces tâches à des systèmes automatisés, vous pouvez enfin lâcher prise. Ce qui doit être fait est fait — sans dépendre de votre mémoire ou de votre disponibilité.", "Moins de charge mentale, moins de stress, plus de sérénité. Vous pouvez vous concentrer sur ce qui compte — et dormir sur vos deux oreilles."], punchline: "La vraie liberté, c'est de savoir que tout tourne même quand vous n'êtes pas là.", metrics: [{ icon: 'bi-heart', label: 'Bien-être' }, { icon: 'bi-moon', label: 'Tranquillité' }, { icon: 'bi-check-circle', label: 'Fiabilité' }] },
    ]
  },
  '03': {
    label: 'Cas d\'usage',
    area: 'area-cas',
    icon: 'bi-collection',
    cardSubtitle: 'Projets · Automation · Scaling',
    sidebar: {
      title: 'Est-ce pour moi ?',
      description: 'Découvrez les situations où je peux vous aider à avancer.',
      cta: { title: 'Un projet en tête ?', subtitle: 'Discutons de vos besoins.' }
    },
    tabs: [
      { id: 'lancement', icon: 'bi-rocket-takeoff', title: 'Lancer un projet', subtitle: 'Vous avez une idée. Il vous manque les mains.', text: ["Vous avez un projet en tête depuis des mois — un outil métier, un produit digital, un SaaS — mais il reste bloqué au stade de l'idée. Vous savez ce que vous voulez, mais vous n'avez pas les compétences techniques pour le construire.", "C'est là que j'interviens. Je prends votre vision, je la transforme en specs claires, et je la concrétise. Du concept au MVP, du MVP au produit fini.", "Vous avez l'idée. Je m'occupe de la réalisation."] },
      { id: 'automatisation', icon: 'bi-gear-wide-connected', title: 'Automatiser un process', subtitle: 'Stop aux tâches de robot. Vous valez mieux que ça.', text: ["Copier-coller des données entre tableaux. Relancer des factures à la main. Envoyer les mêmes emails encore et encore. Ces tâches vous bouffent du temps et de l'énergie — pour zéro valeur ajoutée.", "Tout ce qui est répétitif et prévisible peut être automatisé. Et tout ce qui peut être automatisé devrait l'être.", "Vous récupérez du temps. Vos équipes se concentrent sur ce qui compte vraiment. Et vous arrêtez de payer des gens pour faire le travail d'une machine."] },
      { id: 'connexion', icon: 'bi-diagram-3', title: 'Connecter des outils', subtitle: 'Vos outils ne se parlent pas ? Ça peut changer.', text: ["Vous utilisez un CRM, un outil de facturation, un gestionnaire de projet, une boîte mail... Mais rien ne communique. Vous faites le pont manuellement. Vous ressaisissez les mêmes infos partout. Vous perdez du temps et vous risquez des erreurs.", "Je connecte vos outils entre eux. Les données circulent automatiquement, au bon endroit, au bon moment. Plus de ressaisie, plus d'oubli, plus de perte d'information.", "Vos systèmes travaillent ensemble. Vous, vous travaillez sur autre chose."] },
      { id: 'modernisation', icon: 'bi-arrow-repeat', title: 'Moderniser un système', subtitle: 'Vos outils sentent la naphtaline ? Il est temps.', text: ["Votre système actuel date d'un autre âge. Il tient avec du scotch et des prières. Personne n'ose y toucher de peur que tout s'effondre. Et pourtant, vous savez qu'il vous freine.", "Moderniser, ce n'est pas tout jeter et repartir de zéro. C'est identifier ce qui fonctionne, réparer ce qui ne fonctionne plus, et construire quelque chose de solide pour les années à venir.", "Fini le bricolage. Place à un système qui tient la route."] },
      { id: 'scaling', icon: 'bi-graph-up-arrow', title: 'Scaler une activité', subtitle: 'Votre croissance est freinée par vos process ? Débloquez-la.', text: ["Vous grandissez vite — peut-être trop vite. Ce qui marchait à 10 clients ne tient plus à 100. Vos process manuels explosent, vos équipes saturent, et vous passez plus de temps à éteindre des feux qu'à développer votre business.", "Scaler, c'est faire en sorte que votre croissance ne soit plus un frein mais un accélérateur. Des process qui tiennent la charge. Des systèmes qui absorbent le volume sans exploser.", "Vous pouvez croître sans que tout parte en vrille."] },
      { id: 'optimisation', icon: 'bi-sliders', title: 'Optimiser des coûts', subtitle: 'Moins de gaspillage. Plus de marge.', text: ["Vous avez l'impression de dépenser trop pour ce que vous obtenez. Des abonnements qui s'accumulent. Des process inefficaces. Des heures perdues sur des tâches qui ne rapportent rien.", "Optimiser, c'est identifier les fuites et les colmater. C'est faire plus avec moins. C'est transformer vos coûts en investissements rentables.", "Moins de gaspillage, plus de contrôle, plus de marge."] },
      { id: 'competition', icon: 'bi-trophy', title: 'Devancer la concurrence', subtitle: 'Pendant qu\'ils hésitent, vous avancez.', text: ["Vos concurrents font les choses à l'ancienne. Ils sont lents, réactifs, prévisibles. Vous, vous pouvez être plus rapide, plus agile, plus difficile à rattraper.", "Avec les bons outils et les bons process, vous ne subissez plus le marché — vous le devancez. Vous répondez plus vite, vous livrez plus vite, vous closez plus vite.", "Prenez une longueur d'avance. Regardez vos concurrents dans le rétro."] },
    ]
  },
  '04': {
    label: 'À Propos',
    area: 'area-apropos',
    icon: 'bi-person',
    cardSubtitle: 'Parcours · Vision · Valeurs',
    sidebar: {
      title: "À Propos",
      description: 'Renaud Charpentier & Solutix. Plus de 11 ans dans la tech, un regard pragmatique, et une passion pour les solutions qui marchent.',
      cta: { title: 'Un projet en tête ?', subtitle: 'Discutons de vos besoins.' }
    },
    tabs: [
      { id: 'renaud', icon: 'bi-person-circle', title: 'Renaud Charpentier', subtitle: 'Un gars du Sud qui aime sa vie.', text: ["Je vis sur la Côte d'Azur avec ma compagne. Après un passage à Paris où tout était gris — le ciel, les immeubles, les rues, l'humeur — j'ai compris que le bleu, c'est vital.", "Ici, j'ai la mer, les montagnes, le soleil. On peut aller au ski l'hiver et se baigner l'été. C'est con, mais ça change tout.", "Ce qui me rend heureux ? Rien de fou. Du sport, des restos, du ciné, et passer du temps avec les gens que j'aime."], punchline: "Le bonheur, c'est simple. Du soleil, des proches, et un métier qui a du sens.", metrics: [{ icon: 'bi-geo-alt', label: 'Côte d\'Azur' }, { icon: 'bi-sun', label: 'Soleil' }, { icon: 'bi-heart', label: 'Équilibre' }] },
      { id: 'parcours', icon: 'bi-briefcase', title: 'Parcours', subtitle: 'Plus de 11 ans dans la tech.', text: ["J'ai été développeur web, puis responsable QA, puis formateur. Trois métiers, trois angles différents sur la tech.", "Le dev m'a appris à construire. La QA m'a fait perfectionner les techniques de test et de qualité. La formation m'a appris à expliquer clairement des trucs compliqués.", "Toutes ces expériences m'ont donné une vision large de la tech — pas juste le code, mais tout ce qui tourne autour. Aujourd'hui, je mets cette vision au service de mes clients en tant que solopreneur."], punchline: "11 ans à construire, tester, expliquer. Aujourd'hui, je mets tout ça à votre service.", metrics: [{ icon: 'bi-code-slash', label: 'Dev Web' }, { icon: 'bi-check2-all', label: 'QA' }, { icon: 'bi-mortarboard', label: 'Formateur' }] },
      { id: 'personnalite', icon: 'bi-chat-square-text', title: 'Personnalité', subtitle: 'Pragmatique, direct, factuel.', text: ["Je suis quelqu'un de pragmatique. Quand il y a un truc qui coince, je regarde les faits. Pas les émotions, pas les croyances, pas les \"je sens que\".", "Je dis ce que je pense. Pas pour blesser, mais parce que tourner autour du pot, c'est pas mon truc. Si quelque chose ne va pas, je le dis.", "Certains trouvent ça froid. Moi j'appelle ça honnête."], punchline: "Pas de baratin. Juste la vérité, même quand elle pique.", metrics: [{ icon: 'bi-bullseye', label: 'Pragmatique' }, { icon: 'bi-chat-quote', label: 'Direct' }, { icon: 'bi-shield-check', label: 'Honnête' }] },
      { id: 'passions', icon: 'bi-stars', title: 'Passions', subtitle: 'Tech, finance, ciné, et un peu de sueur.', text: ["Au-delà de ma passion évidente pour la tech, je m'intéresse à la finance, la crypto et la bourse. Pas pour le frisson du trading, mais pour me construire une sécurité financière à long terme.", "J'aime aussi le cinéma — regarder des films et des séries, mais aussi m'intéresser à ce qui se passe derrière. Les négociations, les décisions de production, comprendre pourquoi un projet a été fait de telle ou telle manière.", "Et pour équilibrer tout ça, je fais du sport régulièrement. Salle de fitness, paddle, squash. Faut que ça bouge."], punchline: "La tech pour créer, la finance pour sécuriser, le sport pour tenir le rythme.", metrics: [{ icon: 'bi-graph-up', label: 'Finance' }, { icon: 'bi-film', label: 'Cinéma' }, { icon: 'bi-lightning', label: 'Sport' }] },
      { id: 'vision', label: 'Vision', icon: 'bi-lightbulb', title: 'Vision', subtitle: "La technologie n'est pas une fin. C'est un levier.", text: ["La technologie est un levier pour votre business. Pas une mode à suivre, pas un investissement \"parce qu'il faut\". Un levier.", "Concrètement, ça veut dire quoi ? Ça veut dire qu'on part de votre réalité métier — vos process, vos irritants, vos objectifs — et qu'on trouve la solution technologique qui vous fait gagner du temps, de l'argent ou de la sérénité.", "L'outil vient après. D'abord le problème, ensuite la solution. C'est dans cet ordre que ça marche."], punchline: "Vous n'avez pas besoin de plus de technologie. Vous avez besoin de la bonne.", metrics: [{ icon: 'bi-bullseye', label: 'ROI First' }, { icon: 'bi-speedometer2', label: 'Efficacité' }, { icon: 'bi-shield-check', label: 'Pragmatisme' }], infographicImage: 'vision' },
      { id: 'philosophie', label: 'Philosophie', icon: 'bi-gear', title: 'Philosophie', subtitle: 'Les outils changent. Ma mission reste.', text: ["Les entreprises auront toujours des besoins technologiques. Des processus à optimiser, des tâches à automatiser, des outils à créer. Ça, ça ne change pas.", "Ce qui change, ce sont les moyens. Hier, c'était du code pur. Aujourd'hui, c'est un mélange de code, de no-code et d'IA. Demain ? Personne ne sait exactement. Mais peu importe.", "Mon travail, c'est de rester à jour. De maîtriser ce qui existe aujourd'hui pour toujours être capable de faire une seule chose : comprendre votre besoin et y répondre avec la bonne solution. L'outil évolue. Ma capacité à vous aider, non."], punchline: "Les outils d'hier sont les reliques de demain. Seule la capacité à s'adapter est éternelle.", metrics: [{ icon: 'bi-arrow-repeat', label: 'Adaptation' }, { icon: 'bi-book', label: 'Veille' }, { icon: 'bi-lightbulb', label: 'Innovation' }] },
      { id: 'flexibilite', label: 'Flexibilité', icon: 'bi-arrows-angle-expand', title: 'Flexibilité', subtitle: 'Du petit process au gros projet. Je gère.', text: ["Chaque projet est différent. Certains clients viennent avec une première automatisation en tête — un process qui les agace depuis des mois et qu'ils veulent enfin régler. D'autres ont besoin d'une application métier complète, taillée pour leur façon de travailler. D'autres encore rêvent de créer leur propre SaaS.", "Ce qui ne change pas, c'est ma capacité à m'adapter. Je ne propose pas de formule toute faite. Je pars de votre situation, de vos contraintes, de vos objectifs — et je construis quelque chose qui vous correspond.", "Vous avez un problème concret et l'envie de le résoudre ? C'est suffisant pour qu'on travaille ensemble."], punchline: "Pas de formule magique, pas de template générique. Du sur-mesure ou rien.", metrics: [{ icon: 'bi-gear', label: 'Automation' }, { icon: 'bi-window', label: 'App Métier' }, { icon: 'bi-cloud', label: 'SaaS' }] },
      { id: 'partenariat', label: 'Partenariat', icon: 'bi-people', title: 'Partenariat', subtitle: 'Ce que ça veut dire de bosser avec moi.', text: ["Je ne suis pas du genre à vous dire ce que vous voulez entendre. Si votre idée est bancale, je vous le dis. Si un délai est irréaliste, je vous le dis aussi. Certains pourraient trouver ça trop direct. Moi j'appelle ça du respect — pour votre temps et pour le mien.", "Cette franchise s'accompagne d'une clarté totale sur les engagements. Ce qui est convenu est convenu. Pas de surprise en cours de route, pas de facture qui triple à la fin. Vous savez ce que vous achetez, je sais ce que je livre.", "Enfin, quand je m'engage sur un projet, je m'investis vraiment. Votre problème devient mon problème. Votre deadline devient ma deadline. C'est ça, pour moi, un vrai partenariat."], punchline: "Franchise, clarté, implication. C'est ma définition du partenariat.", metrics: [{ icon: 'bi-chat-quote', label: 'Franchise' }, { icon: 'bi-file-text', label: 'Clarté' }, { icon: 'bi-heart', label: 'Implication' }] },
    ]
  },
  '05': {
    label: 'Méthode',
    area: 'area-methode',
    icon: 'bi-list-task',
    cardSubtitle: 'Process clair · Zéro surprise',
    sidebar: {
      title: 'Méthode de travail',
      description: 'Du premier appel à la mise en production : un process clair, structuré, transparent. Zéro surprise.',
      cta: { title: 'Un projet en tête ?', subtitle: 'Discutons de vos besoins.' }
    },
    tabs: [
      { id: 'contact', icon: 'bi-telephone', title: 'Premier Contact & Diagnostic', subtitle: 'On parle. On creuse. On voit si on s\'entend.', text: ["La première étape, c'est un appel de 15 à 30 minutes. Vous m'expliquez la situation, ce qui vous pose problème, ce que vous aimeriez améliorer. De mon côté, je pose quelques questions pour comprendre le contexte général. Rien de très engageant — juste une prise de contact pour voir si on est sur la même longueur d'onde.", "Si ça semble pertinent de continuer, on passe à l'audit. C'est un échange plus approfondi — généralement un appel ou une visio dédiée — où on rentre vraiment dans le détail. Je pose les bonnes questions, j'analyse vos outils actuels, vos process, vos irritants.", "L'objectif de cette phase : comprendre précisément ce qu'il faut résoudre, avant de réfléchir à comment le résoudre. Pas de solution balancée à l'aveugle — d'abord on diagnostique, ensuite on prescrit."], punchline: "D'abord comprendre. Ensuite proposer. Jamais l'inverse.", metrics: [{ icon: 'bi-telephone', label: '15-30 min' }, { icon: 'bi-search', label: 'Audit' }, { icon: 'bi-check2-circle', label: 'Gratuit' }] },
      { id: 'strategie', icon: 'bi-file-earmark-text', title: 'Stratégie & Devis', subtitle: 'Plusieurs options sur la table. Vous tranchez.', text: ["Une fois l'audit terminé, je prends le temps d'analyser, de comparer les approches possibles, d'estimer les coûts et les gains potentiels. Je calcule des ROI, je pèse le pour et le contre de chaque option. Bref, je fais mes devoirs.", "Je reviens avec une ou plusieurs propositions — selon ce qui est pertinent pour votre situation. Chaque option est claire : ce que je recommande, pourquoi, combien ça coûte, combien de temps ça prend. Pas de devis de 47 pages. Du concret, du chiffré, du lisible.", "Un acompte est demandé à la signature — les modalités varient selon la taille du projet. Tous les détails sont dans la page Tarifs."], punchline: "Des options claires. Des prix transparents. Vous décidez.", metrics: [{ icon: 'bi-calculator', label: 'ROI calculé' }, { icon: 'bi-list-check', label: 'Options' }, { icon: 'bi-cash', label: 'Devis clair' }] },
      { id: 'realisation', icon: 'bi-gear-wide-connected', title: 'Conception & Réalisation', subtitle: 'Travail en cours. Popcorn en option.', text: ["C'est là que ça devient réel. Les décisions ont été prises à l'étape précédente — maintenant, je les applique. Je conçois l'architecture, je développe, je teste. Et en parallèle, je prépare la documentation qui servira à la livraison.", "À chaque étape importante, vous êtes informé. Pas de tunnel de plusieurs semaines où vous vous demandez ce qui se passe. Vous savez ce qui avance, ce qui bloque le cas échéant, ce qui pourrait évoluer.", "L'objectif : zéro surprise à la livraison. Ce que vous voyez pendant la réalisation, c'est ce que vous aurez à la fin."], punchline: "Vous êtes informé à chaque étape. Pas de tunnel noir.", metrics: [{ icon: 'bi-code-slash', label: 'Dev' }, { icon: 'bi-file-text', label: 'Doc' }, { icon: 'bi-eye', label: 'Visibilité' }] },
      { id: 'livraison', icon: 'bi-box-seam', title: 'Livraison & Onboarding', subtitle: 'Je livre. Vous prenez les commandes.', text: ["La solution est prête, la documentation aussi. Je ne vous envoie pas un fichier par email en vous souhaitant bonne chance. J'installe, je configure, je vérifie que tout fonctionne dans votre environnement réel.", "Ensuite vient la formation. Je vous montre comment ça marche, à vous et à vos équipes si besoin. On s'appuie sur la documentation préparée en amont pour que tout soit clair.", "À la fin de cette étape, la solution est en place, vous savez vous en servir, et vous avez tout ce qu'il faut pour avancer sereinement."], punchline: "Installation, formation, documentation. Vous êtes autonome.", metrics: [{ icon: 'bi-download', label: 'Installation' }, { icon: 'bi-mortarboard', label: 'Formation' }, { icon: 'bi-journal-text', label: 'Doc' }] },
      { id: 'stabilisation', icon: 'bi-shield-check', title: 'Stabilisation', subtitle: 'Les petits ajustements, c\'est maintenant.', text: ["Les premières semaines après une mise en production, c'est toujours là que les petites surprises arrivent. Un cas qu'on n'avait pas anticipé, un détail à ajuster, une optimisation à faire. C'est normal, c'est prévu, et c'est inclus dans la prestation.", "Pendant 2 à 3 semaines, je reste en veille active. Je surveille, je corrige, je peaufine. Si quelque chose ne fonctionne pas comme prévu, j'interviens.", "À la fin de cette phase, tout est fluide, tout est stable, et on peut passer à autre chose sereinement. C'est la transition entre \"c'est livré\" et \"ça tourne tout seul\"."], punchline: "2-3 semaines de rodage incluses. Corrections comprises.", metrics: [{ icon: 'bi-clock', label: '2-3 sem.' }, { icon: 'bi-wrench', label: 'Ajustements' }, { icon: 'bi-check2-all', label: 'Inclus' }] },
      { id: 'maintenance', icon: 'bi-life-preserver', title: 'Maintenance', subtitle: 'Dormir tranquille, ça se paie.', text: ["Une fois la stabilisation terminée, la solution vous appartient. Elle tourne, vous êtes autonome, vous n'avez besoin de personne pour l'utiliser au quotidien. Si vous préférez voler de vos propres ailes, c'est tout à fait possible.", "Mais si vous préférez que quelqu'un continue à surveiller, à mettre à jour, à intervenir en cas de pépin — c'est possible. Un abonnement mensuel, sans engagement. Je m'occupe de la veille technique, des mises à jour de sécurité, des corrections si besoin.", "Sans abonnement, je reste joignable — mais sans garantie de délai. Avec abonnement, vous dormez tranquille."], punchline: "Facultatif. Mais ceux qui y souscrivent ne reviennent jamais en arrière.", metrics: [{ icon: 'bi-calendar-month', label: 'Mensuel' }, { icon: 'bi-star', label: 'Prioritaire' }, { icon: 'bi-moon', label: 'Sérénité' }] },
    ]
  },
  '08': {
    label: 'Tarifs',
    area: 'area-tarifs',
    icon: 'bi-currency-euro',
    cardSubtitle: 'Gratuit · Devis · Abonnement',
    sidebar: {
      title: 'Tarifs',
      description: 'Un process clair en 3 étapes. Vous savez ce que vous payez avant de commencer.',
      cta: { title: 'Un projet en tête ?', subtitle: 'Discutons de vos besoins.' }
    },
    tabs: [
      { id: 'audit', icon: 'bi-search', title: 'Audit & Stratégie', subtitle: 'Gratuit. Zéro engagement.', text: ["Tout commence par un échange. Premier contact de 15-30 minutes pour comprendre votre situation, puis diagnostic approfondi si ça semble pertinent. Je pose les bonnes questions, j'analyse vos outils et process, et je vous fais une ou plusieurs propositions chiffrées.", "Pas d'engagement. Pas de frais. Vous repartez avec une vision claire de ce qui est faisable, combien ça coûte, et combien de temps ça prend — même si vous décidez de ne pas continuer."], punchline: "Premier contact gratuit. Diagnostic. Devis clair. Zéro engagement.", metrics: [{ icon: 'bi-telephone', label: '15-30 min' }, { icon: 'bi-file-text', label: 'Devis clair' }, { icon: 'bi-check2-circle', label: 'Gratuit' }] },
      { id: 'realisation', icon: 'bi-gear-wide-connected', title: 'Réalisation', subtitle: 'Sur devis. Tout compris.', text: ["Une fois la stratégie validée, on passe à la construction. Conception, développement, documentation, formation — tout est inclus. La période de stabilisation (2-3 semaines) aussi.", "Vous savez exactement ce que vous payez avant de signer. Pas de surprise, pas de coût caché. Un acompte est demandé à la signature, le reste est échelonné selon la taille du projet."], punchline: "Tarif fixe sur devis. Tout inclus jusqu'à la stabilisation.", metrics: [{ icon: 'bi-code-slash', label: 'Dev' }, { icon: 'bi-journal-text', label: 'Doc' }, { icon: 'bi-mortarboard', label: 'Formation' }] },
      { id: 'maintenance', icon: 'bi-life-preserver', title: 'Maintenance', subtitle: 'Optionnel. Priorité garantie.', text: ["Une fois la solution livrée, vous êtes autonome. Mais si vous préférez que je continue à surveiller, mettre à jour et intervenir en cas de besoin — c'est possible.", "L'abonnement dépend de la complexité du produit à maintenir. En échange, vous bénéficiez d'une priorité garantie : si intervention il y a, vous passez devant les autres projets. Sans engagement, résiliable à tout moment."], punchline: "Abonnement facultatif, sans engagement. Priorité aux abonnés.", metrics: [{ icon: 'bi-shield-check', label: 'Surveillance' }, { icon: 'bi-arrow-repeat', label: 'MAJ sécurité' }, { icon: 'bi-star', label: 'Prioritaire' }] },
    ]
  },
  '09': { label: 'FAQ', area: 'area-faq', icon: 'bi-question-circle', cardSubtitle: 'Questions fréquentes', sidebar: { title: 'FAQ', description: 'Lorem ipsum', cta: { title: 'Un projet en tête ?', subtitle: 'Discutons de vos besoins.' } }, tabs: [{ id: 'tab1', label: 'Tab 1', icon: 'bi-arrow-up-right-square', title: 'Lorem', subtitle: 'Ipsum', text: ['Lorem ipsum'] }] },
  '10': { label: 'Boîte à Outils', area: 'area-boite', icon: 'bi-tools', cardSubtitle: 'Ressources & Templates', sidebar: { title: 'Boîte à Outils', description: 'Lorem ipsum', cta: { title: 'Un projet en tête ?', subtitle: 'Discutons de vos besoins.' } }, tabs: [{ id: 'tab1', label: 'Tab 1', icon: 'bi-arrow-up-right-square', title: 'Lorem', subtitle: 'Ipsum', text: ['Lorem ipsum'] }] },
  'mentions': {
    label: 'Mentions légales',
    area: null,
    icon: 'bi-file-earmark-text',
    sidebar: {
      title: 'Mentions légales',
      description: 'Informations légales obligatoires concernant ce site.',
      cta: { title: 'Une question ?', subtitle: 'Contactez-moi.' }
    },
    tabs: [
      { id: 'editeur', label: 'Éditeur', icon: 'bi-person', title: 'Éditeur du site', subtitle: 'Informations sur le responsable du site', text: ['Nom : Renaud Charpentier', 'Statut : Entrepreneur individuel', 'SIRET : [À compléter]', 'Adresse : [À compléter]', 'Email : contact@solutix.fr'] },
      { id: 'hebergeur', label: 'Hébergeur', icon: 'bi-server', title: 'Hébergement', subtitle: 'Informations sur l\'hébergeur', text: ['[À compléter : nom, adresse et contact de l\'hébergeur]'] },
      { id: 'propriete', label: 'Propriété', icon: 'bi-shield-lock', title: 'Propriété intellectuelle', subtitle: 'Droits d\'auteur et marques', text: ['L\'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, etc.) est la propriété exclusive de Solutix, à l\'exception des marques, logos ou contenus appartenant à d\'autres sociétés partenaires ou auteurs.', 'Toute reproduction, distribution, modification, adaptation, retransmission ou publication de ces différents éléments est strictement interdite sans l\'accord écrit de Solutix.'] }
    ]
  },
  'confidentialite': {
    label: 'Politique de confidentialité',
    area: null,
    icon: 'bi-shield-check',
    sidebar: {
      title: 'Politique de confidentialité',
      description: 'Comment vos données sont collectées et utilisées.',
      cta: { title: 'Une question ?', subtitle: 'Contactez-moi.' }
    },
    tabs: [
      { id: 'collecte', label: 'Collecte', icon: 'bi-database', title: 'Données collectées', subtitle: 'Quelles informations sont recueillies', text: ['Lors de l\'utilisation de ce site, nous pouvons collecter les données suivantes :', '• Données de navigation (pages visitées, durée de visite)', '• Données du formulaire de contact (nom, email, message)', '• Données techniques (adresse IP, navigateur)'] },
      { id: 'utilisation', label: 'Utilisation', icon: 'bi-gear', title: 'Utilisation des données', subtitle: 'Comment nous utilisons vos informations', text: ['Vos données sont utilisées pour :', '• Répondre à vos demandes de contact', '• Améliorer l\'expérience utilisateur du site', '• Établir des statistiques de fréquentation', 'Aucune donnée n\'est vendue ou transmise à des tiers à des fins commerciales.'] },
      { id: 'droits', label: 'Vos droits', icon: 'bi-person-check', title: 'Vos droits RGPD', subtitle: 'Accès, rectification, suppression', text: ['Conformément au RGPD, vous disposez des droits suivants :', '• Droit d\'accès à vos données personnelles', '• Droit de rectification', '• Droit à l\'effacement', '• Droit à la portabilité', '• Droit d\'opposition', 'Pour exercer ces droits, contactez : contact@solutix.fr'] }
    ]
  },
  'cgv': {
    label: 'CGV',
    area: null,
    icon: 'bi-file-earmark-ruled',
    sidebar: {
      title: 'Conditions Générales de Vente',
      description: 'Termes et conditions applicables aux prestations.',
      cta: { title: 'Une question ?', subtitle: 'Contactez-moi.' }
    },
    tabs: [
      { id: 'objet', label: 'Objet', icon: 'bi-bullseye', title: 'Objet & Champ d\'application', subtitle: 'Cadre des prestations', text: ['Les présentes CGV régissent les relations contractuelles entre Solutix et ses clients pour toute prestation de services (automatisation, développement, conseil).', 'Toute commande implique l\'acceptation sans réserve des présentes conditions.'] },
      { id: 'tarifs', label: 'Tarifs', icon: 'bi-currency-euro', title: 'Tarifs & Paiement', subtitle: 'Modalités financières', text: ['Les tarifs sont établis sur devis après analyse des besoins.', 'Un acompte de 30% est demandé à la signature du devis.', 'Le solde est payable selon l\'échéancier défini au devis.', 'Moyens de paiement acceptés : virement bancaire.', 'Tout retard de paiement entraîne des pénalités de retard.'] },
      { id: 'execution', label: 'Exécution', icon: 'bi-calendar-check', title: 'Exécution & Livraison', subtitle: 'Délais et validation', text: ['Les délais de livraison sont indicatifs et communiqués au devis.', 'La livraison fait l\'objet d\'une recette client.', 'Une période de stabilisation de 2-3 semaines est incluse.', 'Au-delà, toute modification fait l\'objet d\'un devis complémentaire.'] },
      { id: 'responsabilite', label: 'Responsabilité', icon: 'bi-shield-exclamation', title: 'Responsabilité', subtitle: 'Limites et garanties', text: ['Solutix s\'engage à une obligation de moyens.', 'La responsabilité est limitée au montant de la prestation concernée.', 'Solutix ne peut être tenu responsable des dommages indirects.', 'Le client reste responsable de la sauvegarde de ses données.'] }
    ]
  },
};

// Types
interface TabConfig {
  id: string;
  label?: string;
  icon: string;
  title: string;
  subtitle: string;
  text: string[];
  punchline?: string;
  metrics?: { icon: string; label: string }[];
  infographicImage?: string;
}

interface ModalConfig {
  label: string;
  area: string | null;
  icon: string;
  cardSubtitle?: string;
  sidebar: {
    title: string;
    description: string;
    cta: { title: string; subtitle: string };
  };
  tabs: TabConfig[];
}

interface SectionConfig {
  id: string;
  label: string;
  area: string | null;
  icon: string;
  subtitle: string;
}

// Helper pour le Dashboard et le Dock
const NAV_ORDER = ['02', '03', '05', '08', '04', '10', '09'];
const SECTIONS_CONFIG: SectionConfig[] = NAV_ORDER
  .filter(id => MODALS_CONFIG[id])
  .map(id => ({ id, label: MODALS_CONFIG[id].label, area: MODALS_CONFIG[id].area, icon: MODALS_CONFIG[id].icon, subtitle: MODALS_CONFIG[id].cardSubtitle || '' }));

// --- ATOMIC COMPONENTS ---

const GlassCard = ({ className = '', onClick, children, as: Component = 'div' }: { className?: string; onClick?: () => void; children: React.ReactNode; as?: React.ElementType }) => (
  <Component className={`glass-card ${onClick ? 'interactive' : ''} ${className}`} onClick={onClick}>
    {children}
  </Component>
);

const Tag = ({ icon, children }: { icon?: string; children: React.ReactNode }) => (
  <span className="tag">
    {icon && <i className={`${icon} text-accent`}></i>}
    <span>{children}</span>
  </span>
);

// --- CLASSE BOLT POUR LES ÉCLAIRS ---
class Bolt {
  path: { x: number; y: number }[];
  isSmall: boolean;
  life: number;
  maxLife: number;
  segments: { x: number; y: number }[][];
  worldAnchor?: { x: number; y: number };
  relativeAnchor?: { x: number; y: number };
  boltColor: string;

  constructor(path: { x: number; y: number }[], isSmall = false) {
    this.path = path;
    this.isSmall = isSmall;
    this.life = 0;
    this.maxLife = isSmall ? 3 + Math.random() * 5 : 10 + Math.random() * 20;
    this.segments = [];
    this.boltColor = '#f4a400';

    if (this.isSmall) {
      this.worldAnchor = { x: path[1].x, y: path[1].y };
      this.relativeAnchor = {
        x: path[1].x - path[0].x,
        y: path[1].y - path[0].y
      };
    }

    this.generateSegments();
  }

  generateSegments() {
    this.segments = [];
    for (let i = 0; i < this.path.length - 1; i++) {
      const start = this.path[i];
      const end = this.path[i + 1];
      const distance = Math.hypot(end.x - start.x, end.y - start.y);
      const displacementFactor = this.isSmall ? 0.6 : 0.35;
      const points = this.getJaggedLine(start, end, distance * displacementFactor);
      this.segments.push(points);
    }
  }

  getJaggedLine(p1: { x: number; y: number }, p2: { x: number; y: number }, displace: number): { x: number; y: number }[] {
    if (displace < 2) return [p1, p2];
    const midX = (p1.x + p2.x) / 2;
    const midY = (p1.y + p2.y) / 2;
    const offsetX = (Math.random() - 0.5) * displace;
    const offsetY = (Math.random() - 0.5) * displace;
    const mid = { x: midX + offsetX, y: midY + offsetY };
    return [...this.getJaggedLine(p1, mid, displace / 2).slice(0, -1), ...this.getJaggedLine(mid, p2, displace / 2)];
  }

  update(mousePos: { x: number; y: number } | null = null) {
    this.life++;

    if (this.isSmall && mousePos && this.worldAnchor && this.relativeAnchor) {
      this.path[0].x = mousePos.x;
      this.path[0].y = mousePos.y;

      const rigidX = mousePos.x + this.relativeAnchor.x;
      const rigidY = mousePos.y + this.relativeAnchor.y;

      this.path[1].x = this.worldAnchor.x * 0.5 + rigidX * 0.5;
      this.path[1].y = this.worldAnchor.y * 0.5 + rigidY * 0.5;

      this.generateSegments();
    } else {
      if (this.life % 3 === 0) this.generateSegments();
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    const opacity = Math.sin((this.life / this.maxLife) * Math.PI);
    if (opacity <= 0) return;

    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    const glowWidth = this.isSmall ? 6 : 6;
    const glowOpacity = this.isSmall ? 0.3 : 0.15;
    const coreWidth = 1;
    const coreOpacity = this.isSmall ? 0.9 : 0.4;
    const blur = 10;

    this.segments.forEach(points => {
      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; i++) ctx.lineTo(points[i].x, points[i].y);
      ctx.strokeStyle = `rgba(244, 164, 0, ${opacity * glowOpacity})`;
      ctx.lineWidth = glowWidth;
      ctx.shadowBlur = blur;
      ctx.shadowColor = this.boltColor;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; i++) ctx.lineTo(points[i].x, points[i].y);
      ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * coreOpacity})`;
      ctx.lineWidth = coreWidth;
      ctx.shadowBlur = 0;
      ctx.stroke();
    });
  }
}

// --- COMPOSANT DE FOND ÉLECTRIQUE ORGANISÉ ---
const ElectricHexGrid = () => {
  const canvasBgRef = useRef<HTMLCanvasElement>(null);
  const canvasFgRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean; timeout: NodeJS.Timeout | null }>({ x: 0, y: 0, active: false, timeout: null });

  useEffect(() => {
    const canvasBg = canvasBgRef.current;
    const canvasFg = canvasFgRef.current;
    if (!canvasBg || !canvasFg) return;

    const ctxBg = canvasBg.getContext('2d');
    const ctxFg = canvasFg.getContext('2d');
    if (!ctxBg || !ctxFg) return;

    let width: number, height: number;
    const hexSize = 60;
    const gridColor = 'rgba(255, 255, 255, 0.045)';

    interface Node {
      x: number;
      y: number;
      q: number;
      r: number;
      neighbors: Node[];
    }

    let nodes: Node[] = [];
    let edges: [Node, Node][] = [];
    let bolts: Bolt[] = [];

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;

      if (mouseRef.current.timeout) clearTimeout(mouseRef.current.timeout);
      mouseRef.current.timeout = setTimeout(() => {
        mouseRef.current.active = false;
      }, 50);
    };
    window.addEventListener('mousemove', handleMouseMove);

    const initGrid = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      canvasBg.width = width;
      canvasBg.height = height;
      canvasFg.width = width;
      canvasFg.height = height;

      nodes = [];
      edges = [];
      bolts = [];

      const xOffset = hexSize * Math.sqrt(3);
      const yOffset = hexSize * 1.5;

      const cols = Math.ceil(width / xOffset) + 2;
      const rows = Math.ceil(height / yOffset) + 2;

      for (let r = -1; r < rows; r++) {
        for (let q = -1; q < cols; q++) {
          const x = (q * xOffset) + (r % 2 === 0 ? xOffset / 2 : 0);
          const y = r * yOffset;
          nodes.push({ x, y, q, r, neighbors: [] });
        }
      }

      const maxDist = hexSize * 1.8;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
          if (d < maxDist && d > hexSize * 0.5) {
            nodes[i].neighbors.push(nodes[j]);
            nodes[j].neighbors.push(nodes[i]);
            edges.push([nodes[i], nodes[j]]);
          }
        }
      }
    };

    const spawnBolt = () => {
      const startNode = nodes[Math.floor(Math.random() * nodes.length)];
      if (!startNode || startNode.neighbors.length === 0) return;

      const pathLength = 3 + Math.floor(Math.random() * 5);
      const path: Node[] = [startNode];
      let current = startNode;

      for (let i = 0; i < pathLength; i++) {
        const next = current.neighbors[Math.floor(Math.random() * current.neighbors.length)];
        if (next) {
          path.push(next);
          current = next;
        }
      }
      bolts.push(new Bolt(path, false));
    };

    const spawnMouseBolt = (mx: number, my: number) => {
      const angle = Math.random() * Math.PI * 2;
      const length = 20 + Math.random() * 30;
      const target = {
        x: mx + Math.cos(angle) * length,
        y: my + Math.sin(angle) * length
      };
      bolts.push(new Bolt([{ x: mx, y: my }, target], true));
    };

    const animate = () => {
      ctxBg.clearRect(0, 0, width, height);
      ctxFg.clearRect(0, 0, width, height);

      ctxBg.lineWidth = 1;
      ctxBg.strokeStyle = gridColor;
      ctxBg.beginPath();
      edges.forEach(([p1, p2]) => {
        ctxBg.moveTo(p1.x, p1.y);
        ctxBg.lineTo(p2.x, p2.y);
      });
      ctxBg.stroke();

      if (Math.random() < 0.015) spawnBolt();

      if (mouseRef.current.active) {
        const density = 2;
        for (let k = 0; k < density; k++) {
          spawnMouseBolt(mouseRef.current.x, mouseRef.current.y);
        }
      }

      for (let i = bolts.length - 1; i >= 0; i--) {
        bolts[i].update(mouseRef.current);
        const targetCtx = bolts[i].isSmall ? ctxFg : ctxBg;
        bolts[i].draw(targetCtx);

        if (bolts[i].life >= bolts[i].maxLife) {
          bolts.splice(i, 1);
        }
      }

      requestAnimationFrame(animate);
    };

    initGrid();
    animate();

    const handleResize = () => initGrid();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div id="electric-canvas-container">
        <canvas ref={canvasBgRef} style={{ width: '100%', height: '100%' }} />
      </div>
      <canvas ref={canvasFgRef} style={{ position: 'fixed', inset: 0, zIndex: 100, pointerEvents: 'none' }} />
    </>
  );
};

// --- FOOTER COMPONENT ---
const Footer = ({ openModal }: { openModal: (id: string) => void }) => (
  <footer id="footer-dock">
    <span className="footer-copyright">© 2025-2026 Solutix · Tous droits réservés</span>
    <nav className="footer-links">
      <button className="footer-link" onClick={() => openModal('09')}>FAQ</button>
      <span className="footer-separator">·</span>
      <button className="footer-link" onClick={() => openModal('mentions')}>Mentions légales</button>
      <span className="footer-separator">·</span>
      <button className="footer-link" onClick={() => openModal('confidentialite')}>Confidentialité</button>
      <span className="footer-separator">·</span>
      <button className="footer-link" onClick={() => openModal('cgv')}>CGV</button>
    </nav>
  </footer>
);

// --- REFACTORED COMPLEX COMPONENTS ---

const Dashboard = ({ openModal, hoveredNavId }: { openModal: (id: string) => void; hoveredNavId: string | null }) => (
  <div className="bento-grid">
    <GlassCard as="article" className="justify-center area-hero relative">
      <div className="w-fit mx-auto relative z-10">
        <div className="slogan-badge"><span>Expert en Automatisation & Solutions Métier</span></div>
        <h1 className="tracking-tight leading-[1.05] mb-6" style={{ fontSize: 'clamp(1.8rem, 2.5vw, 3.2rem)' }}>
          <span className="font-extrabold text-white">Vous méritez des solutions</span><br />
          <span className="font-extrabold text-accent">taillées pour votre réalité.</span>
        </h1>
        <p className="text-gray-400 text-sm lg:text-base mb-6 max-w-lg leading-relaxed">Ce qui vous freine ou vous ruine ? Je le transforme. Ce qui vous manque ? Je le crée. Automatisations, apps métier, SaaS... du sur-mesure, pas de prêt-à-porter.</p>
        <div className="flex gap-2 flex-wrap">
          <Tag icon="bi-clock">Gain de temps</Tag>
          <Tag icon="bi-graph-up-arrow">Croissance</Tag>
          <Tag icon="bi-emoji-smile">Sérénité</Tag>
        </div>
      </div>
    </GlassCard>

    <GlassCard as="article" className={`card-cta interactive center-content area-contact ${hoveredNavId === '07' ? 'hover-from-nav' : ''}`} onClick={() => openModal('07')}>
      <i className="bi bi-chat-dots bento-icon-unified" style={{ color: 'black', fontSize: '2.5rem' }}></i>
      <h2 className="bento-title-unified flex-shrink-0" style={{ color: 'black', fontSize: '1.2rem' }}>Contact</h2>
      <p className="bento-subtitle-unified flex-shrink-0" style={{ color: 'rgba(0,0,0,0.7)' }}>Discutons de votre projet</p>
    </GlassCard>

    {SECTIONS_CONFIG.map(section => (
      <GlassCard key={section.id} as="article" className={`interactive center-content ${section.area} ${hoveredNavId === section.id ? 'hover-from-nav' : ''}`} onClick={() => openModal(section.id)}>
        <i className={`bi ${section.icon} bento-icon-unified`}></i>
        <h2 className="bento-title-unified flex-shrink-0">{section.label}</h2>
        <p className="bento-subtitle-unified flex-shrink-0">{section.subtitle}</p>
      </GlassCard>
    ))}
  </div>
);

const Dock = ({ activeId, openModal, closeModal, toggleMobile, mobileMenuOpen, setHoveredNavId }: {
  activeId: string | null;
  openModal: (id: string) => void;
  closeModal: () => void;
  toggleMobile: () => void;
  mobileMenuOpen: boolean;
  setHoveredNavId: (id: string | null) => void;
}) => (
  <nav id="nav-dock">
    <button className="dock-logo-btn" onClick={closeModal} data-title="Accueil">
      <Image src="/logo-alt.png" alt="Solutix" className="dock-logo-img" width={80} height={32} />
    </button>

    <button className={`dock-item mobile-only ${mobileMenuOpen ? 'active' : ''}`} id="dock-mobile-menu" onClick={toggleMobile}><i className="bi bi-grid-3x3-gap-fill"></i></button>

    <div className="dock-center desktop-only">
      {SECTIONS_CONFIG.map(s => (
        <button key={s.id} className={`dock-nav-item ${activeId === s.id ? 'active' : ''}`} onClick={() => openModal(s.id)} onMouseEnter={() => setHoveredNavId(s.id)} onMouseLeave={() => setHoveredNavId(null)}>
          <i className={`bi ${s.icon}`}></i>
          <span>{s.label}</span>
        </button>
      ))}
    </div>

    <button className={`dock-cta ${activeId === '07' ? 'active' : ''}`} onClick={() => openModal('07')} onMouseEnter={() => setHoveredNavId('07')} onMouseLeave={() => setHoveredNavId(null)}>
      <i className="bi bi-chat-dots"></i>
      <span className="desktop-only">Contact</span>
    </button>
  </nav>
);

const MobileMenu = ({ isOpen, openModal, closeMenu }: { isOpen: boolean; openModal: (id: string) => void; closeMenu: () => void }) => (
  <div id="mobile-menu-popup" className={isOpen ? 'active' : ''}>
    {SECTIONS_CONFIG.map(s => (
      <button key={s.id} className="mobile-menu-item" onClick={() => { openModal(s.id); closeMenu(); }}>
        <div className="icon-box"><i className={`bi ${s.icon}`}></i></div><span>{s.label}</span>
      </button>
    ))}
  </div>
);

const ContactModal = ({ closeModal }: { closeModal: () => void }) => (
  <div className="bento-grid h-full">
    <GlassCard className="modal-sidebar-card col-span-4 lg:col-span-1 lg:row-span-4 h-full">
      <div className="w-full flex-shrink-0"><button className="btn-back" onClick={closeModal}><i className="bi bi-arrow-left"></i><span>Back</span></button></div>
      <div className="flex-grow flex flex-col justify-center py-4 custom-scrollbar overflow-y-auto min-h-0">
        <h2 className="text-3xl font-bold text-white mb-2">Contact</h2>
        <p className="text-sm text-gray-400 leading-relaxed">Lorem ipsum dolor sit amet.</p>
      </div>
    </GlassCard>
    <GlassCard className="col-span-4 lg:col-span-2 lg:row-span-4 flex flex-col p-8 h-full">
      <i className="bi bi-send card-bg-icon"></i>
      <h3 className="text-xl font-bold mb-2 text-white flex-shrink-0">Form Title</h3>
      <p className="text-accent text-sm font-semibold mb-6 flex-shrink-0">Subtitle</p>
      <form className="space-y-6 h-full flex flex-col flex-grow overflow-y-auto custom-scrollbar min-h-0 pr-2" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 gap-6 flex-shrink-0">
          <div className="group"><input type="text" className="w-full bg-black/20 border border-white/10 rounded-full py-3 px-4 text-white" placeholder="Placeholder 1" /></div>
          <div className="group"><input type="email" className="w-full bg-black/20 border border-white/10 rounded-full py-3 px-4 text-white" placeholder="Placeholder 2" /></div>
        </div>
        <div className="group flex-grow flex flex-col min-h-[150px]"><textarea className="w-full h-full bg-black/20 border border-white/10 rounded-3xl py-3 px-4 text-white resize-none" placeholder="Message..."></textarea></div>
        <button type="submit" className="w-full sm:w-auto btn-primary group"><span>Send</span><i className="bi bi-send ml-2"></i></button>
      </form>
    </GlassCard>
    <GlassCard className="col-span-4 lg:col-span-1 lg:row-span-3 flex flex-col justify-center modal-grid-card">
      <div className="flex items-center gap-3 mb-4"><div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10"><i className="bi bi-envelope"></i></div><div><p className="text-[10px] text-gray-500 uppercase font-bold">Label</p><p className="font-bold text-sm text-white">email@example.com</p></div></div>
      <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10"><i className="bi bi-telephone"></i></div><div><p className="text-[10px] text-gray-500 uppercase font-bold">Label</p><p className="font-bold text-sm text-white">+00 0 00 00 00 00</p></div></div>
    </GlassCard>
    <GlassCard className="col-span-4 lg:col-span-1 lg:row-span-1 flex flex-col justify-between modal-grid-card">
      <h3 className="text-xl font-bold mb-2 text-white">FAQ</h3>
      <button className="btn-back w-full justify-center flex-shrink-0 btn-forward-anim"><span>Check FAQ</span><i className="bi bi-arrow-right"></i></button>
    </GlassCard>
  </div>
);

const StandardModal = ({ id, openContact, activeTabIndex, setActiveTabIndex }: {
  id: string;
  openContact: () => void;
  activeTabIndex: number;
  setActiveTabIndex: (index: number) => void;
}) => {
  const config = MODALS_CONFIG[id];
  const tabs = config?.tabs || [];

  const sidebar = config?.sidebar || { title: 'Section', description: '', cta: { title: '', subtitle: '' } };
  const cta = sidebar.cta || { title: 'Me contacter', subtitle: '' };

  return (
    <div className="grid grid-cols-5 grid-rows-4 gap-0 h-full w-full" style={{ borderRight: 'var(--glass-border)', borderBottom: 'var(--glass-border)' }}>
      <GlassCard className="col-span-4 row-span-1 flex flex-col justify-center center-content text-center">
        <h2 className="text-2xl font-bold text-white mb-1">{sidebar.title}</h2>
        <p className="text-sm text-gray-400 leading-relaxed max-w-3xl mx-auto">{sidebar.description}</p>
      </GlassCard>

      <GlassCard className="card-cta interactive col-span-1 row-span-1 center-content" onClick={openContact}>
        <i className="bi bi-chat-dots text-2xl mb-2"></i>
        <span className="font-bold text-sm">{cta.title}</span>
      </GlassCard>

      <GlassCard className="col-span-1 row-span-3 !p-0 overflow-hidden">
        <div className="grid h-full w-full" style={{ gridTemplateRows: `repeat(${tabs.length}, 1fr)` }}>
          {tabs.map((tab, index) => (
            <button key={tab.id} onClick={() => setActiveTabIndex(index)} className={`nav-grid-btn ${activeTabIndex === index ? 'active' : ''}`} style={{ borderRight: 'none', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <i className={`${tab.icon} mr-2`}></i><span>{tab.title}</span>
            </button>
          ))}
        </div>
      </GlassCard>

      <GlassCard className="col-span-4 row-span-3 relative overflow-hidden flex flex-col">
        <div className="tab-content-wrapper">
          {tabs.map((tab, index) => (
            <article key={tab.id} className={`tab-content content-grid text-sm text-gray-400 leading-relaxed z-10 pr-2 ${activeTabIndex === index ? 'active' : ''}`}>
              <div className="content-col-left">
                <div className="flex items-center gap-4 mb-4">
                  <i className={`${tab.icon || 'bi-arrow-up-right-square'} text-3xl text-accent flex-shrink-0`}></i>
                  <div>
                    <h3 className="text-xl font-bold text-white">{tab.title || 'Titre'}</h3>
                    <p className="text-accent text-sm font-semibold">{tab.subtitle || 'Sous-titre'}</p>
                  </div>
                </div>

                <div className="mb-4">
                  {tab.text?.map((paragraph, i) => <p key={i} className="mb-3">{paragraph}</p>) || <p>Contenu à venir.</p>}
                </div>

                <div className="punchline-block mb-4">
                  <p>{tab.punchline || 'Citation à venir.'}</p>
                </div>

                <div className="content-metrics">
                  {tab.metrics?.length ? tab.metrics.map((m, i) => <Tag key={i} icon={m.icon}>{m.label}</Tag>) : <Tag icon="bi-plus-lg">Métriques à définir</Tag>}
                </div>
              </div>

              <div className="content-col-right">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/infographies/${tab.id}.webp`}
                  alt={`Infographie ${tab.title}`}
                  className="infographic-image"
                  onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/400x300/1a1a1a/9ca3af?text=Infographie'; }}
                />
              </div>
            </article>
          ))}
        </div>
      </GlassCard>
    </div>
  );
};

// --- APP ---
export default function Home() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [prevActiveId, setPrevActiveId] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState<'right' | 'left'>('right');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredNavId, setHoveredNavId] = useState<string | null>(null);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const scrollDirectionRef = useRef<'up' | 'down' | null>(null);

  const SCROLL_NAV_ORDER: (string | null)[] = [null, ...NAV_ORDER, '07'];

  const navigateToModal = (newId: string | null) => {
    if (newId === activeId) return;

    const oldIndex = SCROLL_NAV_ORDER.indexOf(activeId);
    const newIndex = SCROLL_NAV_ORDER.indexOf(newId);
    const direction = newIndex > oldIndex ? 'right' : 'left';

    setTransitionDirection(direction);
    setPrevActiveId(activeId);
    setIsTransitioning(true);
    setActiveId(newId);

    setTimeout(() => {
      setPrevActiveId(null);
      setIsTransitioning(false);
    }, 400);
  };

  useEffect(() => {
    if (activeId && MODALS_CONFIG[activeId]?.tabs?.length > 0) {
      const tabCount = MODALS_CONFIG[activeId].tabs.length;
      // Set initial tab index based on scroll direction - this is intentional
      if (scrollDirectionRef.current === 'up') {
        setActiveTabIndex(tabCount - 1);
      } else {
        setActiveTabIndex(0);
      }
    } else {
      setActiveTabIndex(0);
    }
    scrollDirectionRef.current = null;
  }, [activeId]);

  useEffect(() => {
    let scrollCooldown = false;

    const canScrollInDirection = (element: EventTarget | null, direction: 'up' | 'down'): boolean => {
      if (!element || !(element instanceof HTMLElement)) return false;
      let current: HTMLElement | null = element;
      while (current && current.id !== 'main-layout') {
        const hasVerticalScroll = current.scrollHeight > current.clientHeight;
        const canScroll = window.getComputedStyle(current).overflowY;
        if (hasVerticalScroll && (canScroll === 'auto' || canScroll === 'scroll')) {
          if (direction === 'down' && current.scrollTop < current.scrollHeight - current.clientHeight - 1) {
            return true;
          }
          if (direction === 'up' && current.scrollTop > 1) {
            return true;
          }
        }
        current = current.parentElement;
      }
      return false;
    };

    const navigate = (direction: 'up' | 'down') => {
      if (scrollCooldown) return;

      if (activeId && activeId !== '07' && MODALS_CONFIG[activeId]?.tabs?.length > 0) {
        const tabs = MODALS_CONFIG[activeId].tabs;
        const tabCount = tabs.length;

        if (direction === 'down' && activeTabIndex < tabCount - 1) {
          setActiveTabIndex(prev => prev + 1);
          scrollCooldown = true;
          setTimeout(() => { scrollCooldown = false; }, 400);
          return;
        } else if (direction === 'up' && activeTabIndex > 0) {
          setActiveTabIndex(prev => prev - 1);
          scrollCooldown = true;
          setTimeout(() => { scrollCooldown = false; }, 400);
          return;
        }
      }

      const currentIndex = SCROLL_NAV_ORDER.indexOf(activeId);
      let newIndex: number;

      if (direction === 'down') {
        newIndex = Math.min(currentIndex + 1, SCROLL_NAV_ORDER.length - 1);
      } else {
        newIndex = Math.max(currentIndex - 1, 0);
      }

      if (newIndex !== currentIndex) {
        const newId = SCROLL_NAV_ORDER[newIndex];
        scrollDirectionRef.current = direction;
        navigateToModal(newId);
        setMobileMenuOpen(false);

        scrollCooldown = true;
        setTimeout(() => { scrollCooldown = false; }, 600);
      }
    };

    const handleWheel = (e: WheelEvent) => {
      const direction: 'up' | 'down' = e.deltaY > 0 ? 'down' : 'up';

      if (canScrollInDirection(e.target, direction)) {
        return;
      }

      navigate(direction);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      const focusableElements = ['INPUT', 'TEXTAREA', 'SELECT', 'BUTTON'];
      const activeElement = document.activeElement;
      if (activeElement && (focusableElements.includes(activeElement.tagName) || (activeElement as HTMLElement).isContentEditable)) {
        return;
      }

      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        navigate('down');
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        navigate('up');
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeId, activeTabIndex, SCROLL_NAV_ORDER]);

  const closeModal = () => navigateToModal(null);
  const openModal = (id: string) => { navigateToModal(id); setMobileMenuOpen(false); };

  const ALL_MODAL_IDS = [...NAV_ORDER, '07'];

  const getIndex = (panelId: string | null) => panelId === null ? 0 : ALL_MODAL_IDS.indexOf(panelId) + 1;
  const activeIndex = getIndex(activeId);

  const getPanelClass = (panelId: string | null) => {
    const isActive = panelId === activeId;
    const isPrev = panelId === prevActiveId;
    const panelIndex = getIndex(panelId);

    if (isActive) {
      return 'screen-panel active';
    }
    if (isPrev && isTransitioning) {
      return `screen-panel ${transitionDirection === 'right' ? 'exit-left' : 'exit-right'}`;
    }
    return `screen-panel ${panelIndex < activeIndex ? 'at-left' : 'at-right'}`;
  };

  return (
    <>
      <div className="ambient-light" aria-hidden="true"><div className="orb orb-1"></div><div className="orb orb-2"></div><div className="orb orb-3"></div></div>
      <ElectricHexGrid />
      <div id="mobile-menu-overlay" className={mobileMenuOpen ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}></div>
      <MobileMenu isOpen={mobileMenuOpen} openModal={openModal} closeMenu={() => setMobileMenuOpen(false)} />
      <div id="main-layout">
        <Dock activeId={activeId} openModal={openModal} closeModal={closeModal} toggleMobile={() => setMobileMenuOpen(!mobileMenuOpen)} mobileMenuOpen={mobileMenuOpen} setHoveredNavId={setHoveredNavId} />
        <div id="app-wrapper">
          <section id="dashboard" className={getPanelClass(null)}>
            <Dashboard openModal={openModal} hoveredNavId={hoveredNavId} />
          </section>
          {ALL_MODAL_IDS.map(modalId => (
            <article key={modalId} id={`modal-${modalId}`} className={getPanelClass(modalId)}>
              {modalId === '07'
                ? <ContactModal closeModal={closeModal} />
                : <StandardModal id={modalId} openContact={() => openModal('07')} activeTabIndex={modalId === activeId ? activeTabIndex : 0} setActiveTabIndex={setActiveTabIndex} />
              }
            </article>
          ))}
        </div>
        <Footer openModal={openModal} />
      </div>
    </>
  );
}
