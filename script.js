const audio = document.getElementById("tet-music");
const audioIcon = document.getElementById("audio-icon");

// Mảng các câu chúc Tết
const messages = [
  "️Chúc Mừng Năm Mới!",
  "An Khang Thịnh Vượng!",
  "Vạn Sự Như Ý!",
  "Phát Tài Phát Lộc!",
  "Chúc Tết Bình An!",
  "Đón Xuân An Lành!",
];

// Hàm tạo hiệu ứng từng từ cho câu chúc
function displayWords(message) {
  const messageElement = document.getElementById("random-message");
  messageElement.innerHTML = ""; // Xóa nội dung cũ

  // Chia câu thành các từ và tạo thẻ span cho mỗi từ
  const words = message.split(" ");
  words.forEach((word, index) => {
    const span = document.createElement("span");
    span.textContent = word;
    span.classList.add("word");
    span.style.animationDelay = `${index * 1}s`; // Để mỗi từ xuất hiện lần lượt
    messageElement.appendChild(span);
  });
}

// Hàm random câu chúc và thay đổi nội dung thẻ h1
function randomMessage() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  const message = messages[randomIndex];

  // Tạo hiệu ứng fade out và biến dạng trước khi thay đổi câu chúc
  const messageElement = document.getElementById("random-message");
  messageElement.style.animation = "fadeOut 1s forwards, distort 1s forwards";

  // Sau khi hiệu ứng kết thúc, thay đổi câu chúc
  setTimeout(() => {
    displayWords(message); // Hiển thị các từ của câu chúc mới
    messageElement.style.animation = "fadeIn 1s forwards"; // Hiệu ứng mờ dần vào
  }, 1000); // Sau 1s, câu chúc mới sẽ xuất hiện
}

// Gọi hàm randomMessage sau mỗi 6 giây để thay đổi câu chúc
setInterval(randomMessage, 6000);

// Đảm bảo câu chúc ban đầu xuất hiện ngay lập tức
randomMessage();

// Hàm bật/tắt nhạc
function toggleAudio() {
  if (audio.paused) {
    audio.play();
    audioIcon.classList.remove("fa-volume-mute");
    audioIcon.classList.add("fa-volume-up");
  } else {
    audio.pause();
    audioIcon.classList.remove("fa-volume-up");
    audioIcon.classList.add("fa-volume-mute");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Phát nhạc Tết
  const music = document.getElementById("tet-music");

  const container = document.querySelector(".icon-container");
  const emojis = [
    "🎆",
    "🧧",
    "💰",
    "🏮",
    "🐍",
    "🌸",
    "🌸",
    "✨",
    "🏵️",
    "🏵️",
    "🎋",
    "🎁",
    "🍉",
    "🍉",
    "🍉",
    "🎋",
  ]; // Danh sách emoji
  const colors = ["red", "gold"]; // Màu sắc

  // Tạo emoji ngẫu nhiên trên màn hình
  for (let i = 0; i < 25; i++) {
    const icon = document.createElement("span");
    icon.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    icon.classList.add("icon"); // Thêm lớp cho icon để áp dụng CSS
    icon.style.color = colors[Math.floor(Math.random() * colors.length)];
    icon.style.top = `${Math.random() * 100}%`;
    icon.style.left = `${Math.random() * 100}%`;
    icon.style.fontSize = `${Math.random()}rem`; // Kích thước ngẫu nhiên
    container.appendChild(icon);
  }
});

function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
}

function deleteCookie() {
  // Thiết lập thời gian hết hạn của cookie về thời gian trong quá khứ (ngày 1 tháng 1 năm 1970)
  setCookie(hasPlayed, "", -1);
}

function getCookie(name) {
  const cookies = document.cookie.split("; ");
  console.log(cookies);
  for (let cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) return value;
  }
  return null;
}

function openLuckyMoney() {
  // Tạo số tiền ngẫu nhiên
  const moneyAmounts = [10, 10, 20, 20, 20, 20, 20, 20, 50];
  const randomAmount =
    moneyAmounts[Math.floor(Math.random() * moneyAmounts.length)];

  // Hiển thị số tiền
  document.getElementById(
    "money-amount"
  ).textContent = `Huy lì xì ${randomAmount}k nè! Ăn tết vui vẻ nhe🥰`;
  document.getElementById("money-amount").style.display = "block";

  // Lưu trạng thái đã chơi vào cookie
  //setCookie("hasPlayed", true, 7); // Cookie hết hạn sau 7 ngày
}

function startGame() {
  // Hiển thị câu hỏi đầu tiên
  audio.play();
  audioIcon.classList.remove("fa-volume-mute");
  audioIcon.classList.add("fa-volume-up");
  // Kiểm tra trạng thái trong cookie
  if (getCookie("hasPlayed")) {
    alert("Bạn chỉ được chơi 1 lần thôi! Chúc bạn năm mới may mắn!");
    return;
  }
  // Start the quiz
  showQuestion();
}

const questions = [
  {
    question: "Tại sao anh Pakistan lại gọi cho ny bằng số điện thoại?",
    options: ["Lo cho bạn mình", "Lo cho ny", "Rảnh gọi chơi", "Sợ mất ny"],
    correctAnswer: "Sợ mất ny",
  },
  {
    question: "'Đã ai làm gì đâu, đã chạm vào đâu' thể hiện điều gì?",
    options: ["Sự ngạc nhiên", "Sự phòng thủ", "Sự châm biếm", "Sự thất vọng"],
    correctAnswer: "Sự phòng thủ",
  },

  {
    question: "Cụm từ 'Vượt mức pickleball' để diễn tả điều gì?",
    options: [
      "Vượt quá giới hạn",
      "Thành công lớn",
      "Thất bại nặng nề",
      "Một môn thể thao mới",
    ],
    correctAnswer: "Vượt quá giới hạn",
  },
  {
    question: "Cụm từ 'Khó chệu vô cùng' thể hiện cảm xúc nào?",
    options: ["Khó chịu", "Vui vẻ", "Ngạc nhiên", "Buồn bã"],
    correctAnswer: "Khó chịu",
  },
  {
    question: "Như 1 vì tinh tú ... lấp lánh trên bầu trời rộng lớn",
    options: ["Jack", "Trịnh Trần Phương Tuấn", "MeoMeo", "J97"],
    correctAnswer: "Jack",
  },
];

// Hàm để trộn ngẫu nhiên các phần tử trong mảng
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]; // Hoán đổi
  }
}

// Tạo mảng câu hỏi ngẫu nhiên (chỉ lấy 3 câu)
function getRandomQuestions() {
  shuffleArray(questions); // Trộn ngẫu nhiên mảng questions
  return questions.slice(0, 3); // Lấy 3 câu hỏi đầu tiên
}

// Lấy mảng câu hỏi ngẫu nhiên
const randomQuestions = getRandomQuestions();

// Khởi tạo biến câu hỏi hiện tại và điểm số
let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");

// Hiển thị câu hỏi và các lựa chọn
function showQuestion() {
  const currentQuestion = randomQuestions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  // Xóa các câu trả lời trước đó
  answersElement.innerHTML = "";

  // Hiển thị các lựa chọn
  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("answer");
    button.addEventListener("click", () => checkAnswer(option));
    answersElement.appendChild(button);
  });
}

// Kiểm tra câu trả lời
function checkAnswer(selectedAnswer) {
  const currentQuestion = randomQuestions[currentQuestionIndex];

  if (selectedAnswer === currentQuestion.correctAnswer) {
    score++;
    currentQuestionIndex++;
    alert("Giỏi lém nha!🥳");
  } else {
    alert("Không sao! Thử lại đi🤗");
    currentQuestionIndex = 0;
    score = 0;
  }

  // Kiểm tra xem còn câu hỏi nào không
  if (currentQuestionIndex < randomQuestions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

// Display the final result
function showResult() {
  questionElement.classList.add("hidden");
  answersElement.classList.add("hidden");

  // resultElement.textContent = `Quiz completed! Your score is ${score}/${questions.length}.`;
  // resultElement.classList.remove("hidden");
  openLuckyMoney();
}
