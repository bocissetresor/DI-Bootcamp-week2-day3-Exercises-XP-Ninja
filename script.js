// Exercises XP Ninja

// Exercise 1 : Checking The BMI

// 1. Créez deux objets, chaque objet doit contenir les détails d'une personne. Voici les détails:
// 2. Chaque objet doit également avoir une clé dont la valeur est une fonction (c'est-à-dire une méthode), qui calcule l'indice de masse corporelle (IMC) de chaque personne
const perso_1 = {
    fullName: 'Cisse yaya',
    mass: 58,
    height: 1.73,
    bmi: function() {
        return this.mass / Math.pow(this.height, 2)
    }
}

const perso_2 = {
    fullName: 'Toure Yanan',
    mass: 65,
    height: 1.90,
    bmi: function() {
        return this.mass / Math.pow(this.height, 2)
    }
}

// 3. En dehors des objets, créez une fonction JS qui compare l'IBM des deux objets.
function compareBMI(p1, p2) {
    return p1.bmi() > p2.bmi() ? p1 : p2
}
// 4. Affichez le nom de la personne qui a le plus grand IBM.
console.log(`${compareBMI(perso_1, perso_2).fullName} a plus de IBM`)


// Exercise 2 : Grade Average

// 1. Créez une fonction appelée findAvg(gradesList)qui prend un argument appelé gradesList.
// 2. Votre fonction doit calculer et console.log la moyenne.
// 3. If the average is above 65 let the user know they passed
// 4.If the average is below 65 let the user know they failed and must repeat the course.
// Bonus Essayez de diviser les parties 1, 2 et 3, 4 de cet exercice en deux fonctions distinctes. Astuce Une fonction doit appeler l'autre.

function findAvg(gradesList) {
    let total = 0
    for (const grade of gradesList)
        total += grade
    return total / gradesList.length
}

function checkAvg(avg) {
    if(avg > 65)
        console.log(`Succes :=) ||Votre moyenne est ${avg}`)
    else
        console.log(`Votre moyenne est ${avg} Echec :=(`)
}
const grades = [75, 90, 30, 60, 89, 80]
const avg = findAvg(grades)
checkAvg(avg)