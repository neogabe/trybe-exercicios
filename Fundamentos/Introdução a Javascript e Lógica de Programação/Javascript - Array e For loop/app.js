let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let media = 0;

// Média aritmética é o valor total dos números dentro do array (278) divido pela quantidade de números dentro do array (10)

for (let i = 0; i < numbers.length; i++) {
  media += numbers[i] / numbers.length

}

console.log(media);