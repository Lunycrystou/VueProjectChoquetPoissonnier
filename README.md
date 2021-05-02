# Project : Dungeons and Dragons Wiki
## Introduction
Projet de Vue.js de L3 SDN réalisé par POISSONNIER Zacharie et CHOQUET Inès. Notre but était de présenter un mini wikipédia reprenant les bases de la licence la plus connue de RPG sur table, par exemple les différentes classes, les différents sortilèges... 

## Détails explicatifs
Nous avons utilisé le store pour donner deux valeurs pouvant servir à des statistiques : tout d'abord, le nombre de visites sur le site, qui se compte au nombre de lancements de la page d'accueil. En plus de cela, nous avons songé que donner le nombre de recherches serait une bonne idée. Ce compteur s'incrémente à chaque fois qu'un utilisateur clique sur un sort ou une espèce pour en voir le détail (par exemple si sur cette page http://localhost:3000/spells l'utilisateur clique sur le lien "Acid Arrow").  
Nous avons utilisé des cookies pour garder ces valeurs en mémoire, ceux-ci expirent au bout de 7 jours.  
  
Nous n'avons malheureusement pas eu le temps de coder toutes les pages mais celles des sortilèges et espèces au moins sont fonctionnelles, et un menu permet de passer de l'une à l'autre (et également de retourner sur l'accueil).  
Chaque page du site correspond à un component particulier. Les pages permettant de voir la liste des sortilèges ou espèces ont un nom de forme (choseachercher)Search.vue et la page qui affiche les détails d'un sortilège/d'une espèce particulière ont un nom de forme result(choseachercher)Search.vue.  
  
A terme, le menu du site se trouvera dans un fichier à part qu'il faudra inclure (avec un include) sur chaque page même si pour l'instant, il est sur chaque page.  
Rajouter une page au site ne posera pas beaucoup de tracas, il suffira de la rajouter dans le fichier router/routeur.ts sous la forme suivante :  
Pour la page de recherche :  
    ````{
        path: '/nouvellechose',
        component: nouvellechoseSearch,
    },```  
Et pour la page qui affiche le détail de ce que l'utilisateur a recherché :
    {
        path: '/nouvellechose/:name',
        component: resultnouvellechoseSearch,
    }  
Ensuite, dans le menu, il faudra juste rajouter :  
    <li class="nav-item">
        <router-link to="/nouvellechose" class="nav-link">Nouvelle chose</router-link>
    </li>