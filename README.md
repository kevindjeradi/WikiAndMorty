# **Wiki and Morty - Explorateur de Personnages Rick and Morty**

## **Aperçu du Projet**

Wiki and Morty est une application web développée avec React, permettant aux utilisateurs de découvrir et explorer les personnages de la série Rick et Morty. L’application utilise un design moderne, minimaliste et sombre pour offrir une navigation fluide et agréable.

---

## **Le Projet en Détail**

### **Page d'Accueil :**

- **Logo Cliquable :** Retourne à l'accueil depuis n'importe quelle page.
- **Liste des Personnages :** Affichage paginé des personnages issus de l'API Rick and Morty.
- **Filtres Interactifs :** Possibilité de filtrer par statut (Vivant, Mort, Inconnu).
- **Recherche en Temps Réel :** Barre de recherche pour filtrer les personnages par nom.
- **Cartes de Personnages :** Affichent :
  - Image du personnage
  - Nom
  - Statut (avec point coloré)
- **Contrôles de Pagination :** Navigation entre les pages de résultats.

### **Page de Détail du Personnage :**

- **Bouton de Retour :** Retourne à l’accueil avec une transition fluide.
- **Détails Complets :** Affiche les informations principales :
  - Image de grande taille
  - Nom, statut, genre, espèce, origine, dernier lieu vu, nombre d’apparitions en épisodes.
- **Détails du Dernier Épisode :** Nom de l’épisode et date de diffusion.
- **Autres Personnages de l'Épisode :** Liste des personnages associés.

### **Responsiveness :**

- **Interface entièrement adaptée** aux écrans mobiles et ordinateurs.
- **Ajustements dynamiques** pour grands écrans et mobiles, garantissant une expérience optimale.

### **Thème Sombre Minimaliste :**

- **Palette de Couleurs :** Tons sombres, dégradés subtils et accents modernes.
- **Typographie :** Police claire et élégante pour une lecture facile.
- **Animations Subtiles :** Transitions douces et fluides sans encombrer l'interface.
- **Design Minimaliste :** Mise en avant du contenu essentiel pour une navigation claire.

### **Navigation Sans Rechargement :**

- **React Router** pour une navigation rapide entre les pages sans rechargement.
- **URLs dynamiques** reflètent les pages de détail de chaque personnage (ex: /character/1).

---

## **Exigences du Test et leur Réalisation**

### **1. Page d'Accueil (Index)**

#### **Ce qui est demandé :**

- Afficher le logo qui doit renvoyer à la page d'accueil lorsqu'on clique dessus.
- Afficher la liste paginée de tous les personnages.
- Ajouter des boutons de filtrage pour trier les personnages par état (Vivant, Mort).
- Permettre une recherche textuelle par nom de personnage.
- Afficher les informations minimales sur les personnages : Nom, Image, Statut (Vivant ou Mort).

#### **Ce qui a été fait :**

- Un logo personnalisé cliquable renvoie à l'accueil depuis n'importe quelle page.
- La liste des personnages est affichée sous forme de cartes paginées avec un système de pagination dynamique.
- Les filtres de statut permettent de trier les personnages par état (Vivant, Mort, Inconnu).
- Une barre de recherche en temps réel permet de filtrer les personnages par nom instantanément.
- Les cartes des personnages affichent :
  - Nom
  - Image
  - Statut (avec un point coloré pour le statut).
- Pagination personnalisable : L'utilisateur peut choisir le nombre de personnages affichés par page (12, 24, 36, 48).
- Animations avec Framer Motion : Les cartes apparaissent avec des animations fluides et des effets de survol qui améliorent l'interaction utilisateur.
- Utilisation de React.memo : Optimisation des composants pour éviter les rendus inutiles lorsque les props ne changent pas, augmentant ainsi les performances globales.

### **2. Page de Détail du Personnage**

#### **Ce qui est demandé :**

- Un bouton pour retourner à la page d'accueil.
- Afficher plus d'informations sur le personnage : image, nom, et informations supplémentaires jugées pertinentes par le développeur.

#### **Ce qui a été fait :**

- Un bouton de retour animé permet de revenir à l'accueil de manière fluide.
- La page affiche l'image du personnage en grande taille, son nom, ainsi que les détails supplémentaires tels que :
  - Statut
  - Genre
  - Espèce
  - Origine
  - Dernier lieu vu
  - Nombre d’apparitions en épisodes.
- Détails du Dernier Épisode : Affichage du nom et de la date de diffusion du dernier épisode où le personnage apparaît.
- Autres Personnages de l'Épisode : Présentation des autres personnages présents dans le même épisode et possibilité de naviguer vers leur page détaillée.
- Transitions animées : Effets de glissement et de fondu pour une navigation agréable dans la page.
- Lazy Loading et Suspense : Utilisation de React.Suspense et React.lazy pour charger les composants de manière asynchrone, améliorant les performances en retardant le chargement des éléments non critiques.

### **3. Routage et Navigation**

#### **Ce qui est demandé :**

- Utilisation de routage côté front pour naviguer sans rechargement entre la liste des personnages et les pages de détail.
- Les URLs de détail doivent permettre de rendre les informations du personnage correspondant (ex: /character/1).

#### **Ce qui a été fait :**

- Intégration de React Router pour une navigation fluide et sans rechargement complet entre les pages.
- Les URLs dynamiques sont configurées pour accéder directement aux détails de chaque personnage via leur ID.
- Transitions fluides : Ajout d’animations pour les transitions entre les pages, ce qui améliore l’expérience utilisateur.

### **4. Responsiveness**

#### **Ce qui est demandé :**

- L'application doit être entièrement responsive et s'adapter à tous les écrans sans maquettes pour la version mobile.

#### **Ce qui a été fait :**

- Design responsive avec ajustements pour les grands et petits écrans, assurant une expérience optimale et des animations adaptées sur tous les appareils.

### **5. Choix du thème**

#### **Ce qui est demandé :**

- Sélectionner et intégrer un thème parmi une liste fournie pour personnaliser l'apparence du site.

#### **Ce qui a été fait :**

- Mise en œuvre d'un thème sombre minimaliste avec des dégradés élégants et une typographie moderne pour un look épuré et agréable.
- Animations subtiles : Utilisation de Framer Motion pour ajouter des transitions douces qui n'encombrent pas l'interface.
- Accentuation du contenu essentiel : Design centré sur les éléments clés pour une navigation claire et sans distraction.

### **6. Gestion des Erreurs et Indicateurs de Chargement**

#### **Ce qui est demandé :**

- Aucune gestion des erreurs spécifiée, mais nécessaire pour assurer une expérience utilisateur robuste.

#### **Ce qui a été fait :**

- Utilisation d'un composant ErrorDisplay pour afficher les erreurs avec des animations douces, évitant d’interrompre l’expérience utilisateur.
- Un composant Loader informe l’utilisateur lors du chargement des données, rendant l’attente moins perceptible grâce à des animations légères.
- Messages d’erreur spécifiques : Des messages détaillés guident l’utilisateur en cas de problème de chargement des données.
- Affichage progressif des données : Amélioration de la fluidité en affichant les éléments dès qu’ils sont disponibles pour minimiser la perception des temps de chargement.

### **7. Optimisations Techniques**

#### **Ce qui est demandé :**

- Non spécifié dans le test, mais nécessaire pour que le projet soit performant et maintenable.

#### **Ce qui a été fait :**

- **Hooks personnalisés :** Utilisation de useCharacterDetails et useCharacters pour centraliser la logique complexe de récupération de données, simplifiant les composants et augmentant la réactivité.
- **Chargement asynchrone :** Gestion du chargement des données en arrière-plan pour éviter le blocage de l’interface.
- **Code modulaire et réutilisable :** Séparation claire des composants pour faciliter la maintenance et l'évolutivité du projet.
- **Performance accrue :** Pagination dynamique et filtrage en temps réel pour une navigation plus rapide et plus fluide.
- **Utilisation de React.memo et Lazy Loading :** Optimisation des composants pour éviter les rendus inutiles et améliorer les performances globales.

---

## **Screenshots**

### **Homepage Web**
![Homepage Mobile Screenshot](/src/assets/images/screenshots/home_page_web.png)

### **Details Page Web**
![Homepage Mobile Screenshot](/src/assets/images/screenshots/page_detail_web.png)

### **Homepage Mobile**
![Homepage Mobile Screenshot](/src/assets/images/screenshots/home_page_mobile.png)
