function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercício 1

const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

const days = document.querySelector("#days");

for (let i = 0; i < dezDaysList.length; i++){
  let dayList = dezDaysList[i]
  let day = document.createElement("li")
  day.className = 'day'
  day.innerText = dayList

  if (day.innerText.includes('24')) {
    day.classList.add('holiday')
  } else if (day.innerText.includes('25')) {
    day.classList.add('holiday')
  } else if (day.innerText.includes('31')) {
    day.classList.add('holiday')
  }

  if (day.innerText.includes('4')) {
    day.classList.add('friday')
  } else if (day.innerText.includes('11')) {
    day.classList.add('friday')
  } else if (day.innerText.includes('18')) {
    day.classList.add('friday')
  } else if (day.innerText.includes('25')) {
    day.classList.add('friday')
  }

  days.appendChild(day)
}