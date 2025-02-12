function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
} // Генерируем рандомное число

let students = Array.from({ length: 12 }, () => getRandomInt(1, 100)); // Создаём массив из 12 случайных чисел от 1 до 100

let min = students[0];
let max = students[0];
let sum = 0;

students.forEach((grade) => {
  if (grade < min) min = grade;
  if (grade > max) max = grade;
  sum += grade;
}); // Проходим по массиву, чтобы найти min, max и сумму всех оценок

const average = Math.round(sum / students.length); // Вычисляем средний балл

const positiveScores = students.filter((score) => score >= 60);
const negativeScores = students.filter((score) => score < 60); // Фильтруем оценки

const letterGrades = students.map((score) => {
  if (score >= 80) return "A";
  if (score >= 60) return "B";
  if (score >= 40) return "C";
  if (score >= 20) return "D";
  return "E";
}); // Преобразуем оценки в буквенные

function addResult(text) {
  const p = document.createElement("p"); // Создаём новый параграф
  p.textContent = text; // Устанавливаем текст
  document.body.appendChild(p); // Добавляем в body
} // Функция для вывода информации на страницу

addResult(`Оценки студентов: ${students.join(", ")}`);
addResult(`Минимальный балл: ${min}`);
addResult(`Максимальный балл: ${max}`);
addResult(`Средний балл: ${average}`);
addResult(`Положительных оценок: ${positiveScores.length}`);
addResult(`Отрицательных оценок: ${negativeScores.length}`);
addResult(`Буквенные оценки: ${letterGrades.join(", ")}`); // Вывод результатов на страницу
