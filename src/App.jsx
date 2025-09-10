import { useState } from "react";

const questions = [
  {
    image: "https://www.askona.ru/upload/iblock/aa5/ecogel-pink.jpg",
    question: "Какой эффект обеспечивает подушка Ecogel Contour Pink?",
    options: ["Поддержка поясницы", "Эффект охлаждения и микромассажа", "Усиленная поддержка плеч"],
    answer: 1,
    explanation: "Подушка с гелевыми капсулами даёт охлаждающий эффект и лёгкий массаж."
  },
  {
    image: "https://www.askona.ru/upload/iblock/b6d/immuno-20.jpg",
    question: "Что главное в подушке Immuno Technology 2.0?",
    options: ["Усиленная поддержка шеи", "Аромат лаванды", "Эффект памяти формы"],
    answer: 0,
    explanation: "Эта модель создана для усиленной поддержки шейного отдела."
  },
  {
    image: "https://www.askona.ru/upload/iblock/77c/alpha-20.jpg",
    question: "Какой наполнитель используется в подушке Alpha Technology 2.0?",
    options: ["Микропружины", "Memory-foam с охлаждающим эффектом", "Овечья шерсть"],
    answer: 1,
    explanation: "Подушка выполнена из Memory-foam с охлаждающим эффектом и имеет 4 уровня высоты."
  },
  {
    image: "https://www.askona.ru/upload/iblock/9c0/vanila-ice.jpg",
    question: "Какая подушка получила название Vanila Ice и за что её ценят?",
    options: ["За мягкость и ароматизацию", "За охлаждающий эффект и комфорт летом", "За использование микропружин"],
    answer: 1,
    explanation: "Vanila Ice — подушка с охлаждающим эффектом, комфортна в жаркое время."
  },
  {
    image: "https://www.askona.ru/upload/iblock/a7c/spine-up.jpg",
    question: "Для чего предназначена подушка Spine-Up?",
    options: ["Для профилактики проблем с поясницей", "Для поддержки правильного положения позвоночника", "Для детей до 5 лет"],
    answer: 1,
    explanation: "Spine-Up помогает поддерживать правильное положение позвоночника во сне."
  },
  {
    image: "https://www.askona.ru/upload/iblock/2ab/element.jpg",
    question: "Какова особенность анатомической подушки Element?",
    options: ["Имеет два уровня высоты и подходит для сна на боку и спине", "Снабжена ароматом лаванды", "Содержит микропружины"],
    answer: 0,
    explanation: "Element анатомически корректна и универсальна — подходит для сна на боку и спине."
  },
  {
    image: "https://www.askona.ru/upload/iblock/6dc/star.jpg",
    question: "Какая подушка называется Star и чем она примечательна?",
    options: ["Эффект антистресса", "Микроперфорация для вентиляции", "Наличие микропружин"],
    answer: 1,
    explanation: "Star имеет микроперфорацию, что обеспечивает вентиляцию и комфорт во сне."
  },
  {
    image: "https://www.askona.ru/upload/iblock/b19/protect-basic.jpg",
    question: "Какое преимущество у подушки Protect-A-Bed Basic?",
    options: ["Простая защита от влаги и пыли", "Эффект памяти формы", "Охлаждающий эффект"],
    answer: 0,
    explanation: "Protect-A-Bed Basic обеспечивает базовую защиту от влаги и пыли."
  },
  {
    image: "https://www.askona.ru/upload/iblock/88c/eco-bamboo.jpg",
    question: "В чём преимущество подушки Eco Bamboo?",
    options: ["Использует волокна бамбука, гипоаллергенна и дышит", "Содержит микропружины", "Создаёт охлаждающий эффект"],
    answer: 0,
    explanation: "Eco Bamboo выполнена из бамбукового волокна, что делает её экологичной и гипоаллергенной."
  },
  {
    image: "https://www.askona.ru/upload/iblock/117/latex-classic.jpg",
    question: "Какой материал используется в подушке Latex Classic?",
    options: ["Латекс", "Овечья шерсть", "Гречневая лузга"],
    answer: 0,
    explanation: "Latex Classic выполнена из натурального латекса, что обеспечивает упругость и долговечность."
  }
];

export default function App() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (index) => {
    setSelected(index);
    setShowAnswer(true);
    if (index === questions[current].answer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setSelected(null);
    setShowAnswer(false);
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
      <div className="w-full max-w-md p-4 bg-white rounded-2xl shadow-lg">
        <img src={questions[current].image} alt="question" className="w-full h-48 object-contain rounded" />
        <h2 className="text-lg font-semibold text-center my-4">{questions[current].question}</h2>
        <div className="space-y-2">
          {questions[current].options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(idx)}
              disabled={showAnswer}
              className={`w-full px-4 py-2 text-left rounded-lg border ${
                showAnswer && idx === questions[current].answer
                  ? "bg-green-100 border-green-400"
                  : selected === idx && idx !== questions[current].answer
                  ? "bg-red-100 border-red-400"
                  : "border-gray-300"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
        {showAnswer && <p className="mt-4 text-sm text-gray-600">{questions[current].explanation}</p>}
        {showAnswer && current < questions.length - 1 && (
          <button onClick={nextQuestion} className="w-full mt-4 py-2 bg-blue-500 text-white rounded-lg">
            Следующий вопрос
          </button>
        )}
        {showAnswer && current === questions.length - 1 && (
          <div className="mt-4 text-center">
            <p className="text-lg font-bold">Тест завершён!</p>
            <p>Ваш результат: {score} из {questions.length}</p>
          </div>
        )}
      </div>
    </div>
  );
}
