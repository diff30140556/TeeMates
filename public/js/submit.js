// const datepickerEl = document.querySelectorAll('.datepicker');
// const timepickerEl = document.querySelectorAll('.timepicker');

// document.addEventListener('DOMContentLoaded', function () {
//   M.Timepicker.init(timepickerEl, {
//     twelveHour: false,
//     format: 'HH:mm:ss',
//   });
// });

// document.addEventListener('DOMContentLoaded', function () {
//   M.Datepicker.init(datepickerEl, {
//     format: 'yyyy-mm-dd',
//     autoClose: true,
//     showClearBtn: true,
//   });
// });


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

    if (res.ok) {
      console.log('okay');
    } else {
      console.log('request not submitted');
    }

  } else {
    console.log('no')
    return;
  }

  document.location.replace('/submit');

};

const submitButton = document.querySelector('.submit');
submitButton.addEventListener('submit', submitTeetime);
