# Générateur de Paires d'ADN

Ce projet implémente une fonction JavaScript permettant de générer les paires de bases de l'ADN. 
Chaque base est associée à sa complémentaire selon les règles suivantes :

- A <-> T 
- C <-> G

---


## Fonctionnalité

La fonction `pairElement(str)` prend une chaîne de caractères représentant une séquence d'ADN et retourne un tableau de paires.

```js

function pairElement(str)

```


---


## Exemples 

```js

console.log(pairElement("ATCG"))
// [["A", "T"], ["T", "A"], ["C", "G"], ["G", "C"]]
console.log(pairElement("ATCGA"));
// [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
console.log(pairElement("TTGAG"));
// [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
console.log(pairElement("CTCTA"));
// [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]

```

## Structure du projet

```bash

.
├── pairElement.js   # Code source principal
└── README.md        # Documentation du projet

```

## Installation et utilisation

1. **Cloner le dépôt GitHub :**
   ```bash
   git clone https://github.com/idriss-enone/generateur-paire-adn.git
   cd generateur-paire-adn 

2. **Exécuter le script :**

  ```bash
  node script.js


## Notes

- Le projet contient deux implémentations :
  - Une version avec `if/else` pour la pédagogie.
  - Une version optimisée avec un objet `pairs`.

## Compétences développées
  
- Création et utilisation de fonctions
- Manipulation de chaînes : découpage de chaînes (split)
- Manipulation des tableaux
- Utilisation des boucles (`for...of`)
- Utilisation des conditions (`if...else`)
- Création de tableaux imbriqués.


---

## Technologies utilisées

| Technologie | Description |
|--------------|-------------|
| **JavaScript (ES6+)** | Langage utilisé pour le script |
| **Node.js** | Environnement d’exécution |
| **VS Code** | Éditeur de code utilisé |

---


## Auteur

Projet réalisé par **Idriss Enone** dans le cadre d’un apprentissage en JavaScript.

---