const datepickerEl = document.querySelectorAll('.datepicker');
const timepickerEl = document.querySelectorAll('.timepicker');

document.addEventListener('DOMContentLoaded', function () {
  M.Timepicker.init(timepickerEl, {
    twelveHour: false,
    format: 'HH:mm:ss',
  });
});

document.addEventListener('DOMContentLoaded', function () {
  M.Datepicker.init(datepickerEl, {
    format: 'yyyy-mm-dd',
    autoClose: true,
    showClearBtn: true,
  });
});

const submitTeetime = async (event) => {
  event.preventDefault();

  const course_name = document.querySelector('.course');
  const handicap = document.querySelector('.handicap');
  const date = datepickerEl[0].value;
  const time = timepickerEl[0].value;
  console.log(course_name, handicap, date, time);
  console.log('time submitted');

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
};

const submitButton = document.querySelector('.submit');
submitButton.addEventListener('submit', submitTeetime);
