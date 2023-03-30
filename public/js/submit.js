const submitTeetime = async (event) => {
  event.preventDefault();

  const course_name = document.querySelector('.course .select-wrapper input').value;
  const handicap = document.querySelector('.handicap .select-wrapper input').value;
  const date = datepickerEl.value;
  const time = timepickerEl.value;

  if (course_name !== 'Select the course' && handicap !== 'Select handicap ' && date && time) {
    const res = await fetch('/api/submit', {
      method: 'POST',
      body: JSON.stringify({ course_name, handicap, date, time }),
      headers: { 'Content-Type': 'application/json' },
    });
    document.location.replace('/submit');
  } else {
    return;
  }
};

const submitButton = document.querySelector('.submit');
submitButton.addEventListener('submit', submitTeetime);