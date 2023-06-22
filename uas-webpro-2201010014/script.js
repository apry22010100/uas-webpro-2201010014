document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    // Kirim data login ke server atau lakukan validasi di sisi klien
    // Di sini, hanya contoh sederhana untuk menampilkan status masuk akun
  
    var status = document.getElementById('login-status');
    if (email === 'omanaprianti@gmail.com' && password === 'aprianti251003') {
      status.innerHTML = 'Berhasil masuk akun!';
      status.style.color = 'green';
    } else {
      status.innerHTML = 'Gagal masuk akun. Periksa kembali email dan password Anda.';
      status.style.color = 'red';
    }
  
    status.style.display = 'block';
  
    // Reset form fields
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
  });
  var currentQuestionIndex = 0;
var score = 0;

var questions = [
  {
    question: '1. Pulau Komodo terletak di provinsi? ',
    choices: ['A. Bali', 'B. NTT', 'C. NTB','D. Jawa Timur'],
    correctAnswerIndex:'B NTT'
  },
  {
    question: '2. Siapa Presiden Indonesia ketiga Indonesia? ',
    choices: ['A.BJ. Habibie ', 'B. Joko Widodo', 'C. Soekarno', 'D. Abdurrahman Wahid'],
    correctAnswerIndex: ' A. BJ. Habibie'
  },
  // Add more questions here
];

function startQuiz() {
  document.getElementById('start-button').style.display = 'none';
  document.getElementById('question-container').style.display = 'block';

  showQuestion();
}

function showQuestion() {
  var question = questions[currentQuestionIndex];

  document.getElementById('question-text').textContent = question.question;

  var choicesList = document.getElementById('choices-list');
  choicesList.innerHTML = '';

  for (var i = 0; i < question.choices.length; i++) {
    var choiceItem = document.createElement('li');
    choiceItem.textContent = question.choices[i];
    choiceItem.setAttribute('onclick', 'checkAnswer(' + i + ')');
    choicesList.appendChild(choiceItem);
  }
}

function checkAnswer(selectedIndex) {
  var question = questions[currentQuestionIndex];

  if (selectedIndex === question.correctAnswerIndex) {
    score++;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex === questions.length) {
    showResult();
  } else {
    showQuestion();
  }
}

document.getElementById('order-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  var name = document.getElementById('name').value;
  var food = document.getElementById('food').value;
  var quantity = document.getElementById('quantity').value;

  var summary = "Terima kasih, " + name + "!<br>";
  summary += "Anda memesan " + quantity + " porsi " + food + ".";

  document.getElementById('order-summary').innerHTML = summary;
  document.getElementById('order-summary').style.display = 'block';

  // Reset form fields
  document.getElementById('name').value = '';
  document.getElementById('food').value = '';
  document.getElementById('quantity').value = '';
});
// Menampilkan riwayat pesanan
function displayOrderHistory() {
  var history = "<h2>Riwayat Pesanan</h2>";

  if (orders.length === 0) {
    history += "<p>Belum ada pesanan.</p>";
  } else {
    history += "<ul>";
    for (var i = 0; i < orders.length; i++) {
      history += "<li>";
      history += "<strong>Nama:</strong> " + orders[i].name + "<br>";
      history += "<strong>Makanan:</strong> " + orders[i].food + "<br>";
      history += "<strong>Jumlah:</strong> " + orders[i].quantity;
      history += "</li>";
    }
    history += "</ul>";
  }

  document.getElementById('order-history').innerHTML = history;
}

// Memanggil fungsi displayOrderHistory untuk menampilkan riwayat pesanan saat halaman dimuat
displayOrderHistory();


var car = document.getElementById("car");
var obstacle = document.getElementById("obstacle");
var scoreElement = document.getElementById("score");
var gameContainer = document.getElementById("game-container");

var carLeft = 175; // Initial car position
var obstacleTop = -100; // Initial obstacle position
var score = 0; // Initial score

var speed = 3; // Obstacle speed

document.addEventListener("keydown", function(event) {
    if (event.code === "ArrowLeft") {
        moveCarLeft();
    } else if (event.code === "ArrowRight") {
        moveCarRight();
    }
});

setInterval(moveObstacle, 10);

function moveCarLeft() {
    if (carLeft > 0) {
        carLeft -= 10;
        car.style.left = carLeft + "px";
    }
}

function moveCarRight() {
    if (carLeft < gameContainer.offsetWidth - car.offsetWidth) {
        carLeft += 10;
        car.style.left = carLeft + "px";
    }
}

function moveObstacle() {
    obstacleTop += speed;
    obstacle.style.top = obstacleTop + "px";

    if (obstacleTop > gameContainer.offsetHeight) {
        score++;
        scoreElement.textContent = "Score: " + score;
        resetObstacle();
        increaseSpeed();
    }

    if (isCollision()) {
        endGame();
    }
}

function resetObstacle() {
    obstacleTop = -100;
    obstacle.style.left = Math.floor(Math.random() * (gameContainer.offsetWidth - obstacle.offsetWidth)) + "px";
}

function increaseSpeed() {
    if (score % 5 === 0) {
        speed += 1;
    }
}

function isCollision() {
    var carRect = car.getBoundingClientRect();
    var obstacleRect = obstacle.getBoundingClientRect();

    return (
        carRect.top < obstacleRect.bottom &&
        carRect.bottom > obstacleRect.top &&
        carRect.left < obstacleRect.right &&
        carRect.right > obstacleRect.left
    );
}

function endGame() {
    alert("Game over! Your final score is: " + score);
    score = 0;
    scoreElement.textContent = "Score: " + score;
    carLeft = 175;
    car.style.left = carLeft + "px";
    speed = 3;
    resetObstacle();
}

