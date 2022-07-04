const adviceId = document.getElementById('advice-id');
const advice = document.getElementById('advice');
const adviceBtn = document.getElementById('get-advice-btn');
const apiError = document.querySelector('.api-error');

async function getAdvice() {
  try {
    const adviceJson = await fetch('https://api.adviceslip.com/advice');
    const data = await adviceJson.json();
    const id = data.slip.id;
    const adviceText = data.slip.advice;
    adviceId.textContent = id;
    advice.textContent = `"${adviceText}"`;
  } catch (e) {
    setInitialAdvice();
    apiError.style.opacity = '1';
    setTimeout(() => {
      apiError.style.opacity = '0';
    }, 2000);
  }
}

function setInitialAdvice() {
  adviceId.textContent = '117';
  advice.textContent = `"It is easy to sit up and take notice, what's difficult is getting up and taking action"`;
}

adviceBtn.addEventListener('click', () => {
  getAdvice();
});

setInitialAdvice();
