
const messageDiv = document.getElementById("message");
const guessBtn = document.getElementById("guess-btn");
const resetBtn = document.getElementById("reset-btn");
const guessInput = document.getElementById("guess-input");


let gizliSayi = Math.floor(Math.random() * 50) + 1;
let hak = 5;
let deneme = 0;


guessBtn.addEventListener("click", function() {
  const tahmin = guessInput.value;
  const tahminSayi = Number(tahmin);

  
  if (isNaN(tahminSayi) || tahminSayi < 1 || tahminSayi > 50) {
    messageDiv.textContent = "⚠ Lütfen 1 ile 50 arasında geçerli bir sayı girin!";
    return;
  }

  deneme++;
  hak--;

 
  if (tahminSayi === gizliSayi) {
    messageDiv.textContent = `🎉 Tebrikler! ${deneme}. denemede bildiniz.`;
    guessBtn.disabled = true;
    resetBtn.disabled = false;
  } else if (hak === 0) {
    messageDiv.textContent = `❌ Hakkınız bitti! Doğru sayı ${gizliSayi} idi.`;
    guessBtn.disabled = true;
    resetBtn.disabled = false;
  } else if (tahminSayi < gizliSayi) {
    messageDiv.textContent = `⬆ Daha büyük bir sayı deneyin.\nKalan hak: ${hak}`;
  } else {
    messageDiv.textContent = `⬇ Daha küçük bir sayı deneyin.\nKalan hak: ${hak}`;
  }

  guessInput.value = "";
  guessInput.focus();
});


resetBtn.addEventListener("click", function() {
  gizliSayi = Math.floor(Math.random() * 50) + 1;
  hak = 5;
  deneme = 0;
  messageDiv.textContent = "";
  guessInput.value = "";
  guessBtn.disabled = false;
  resetBtn.disabled = true;
  guessInput.focus();
});
