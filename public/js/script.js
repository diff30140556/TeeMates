// initialize Typewriter 
const app = document.querySelector('.loginTitle');

const typewriter = new Typewriter(app, {
  loop: false,
  delay: 150,
  cursor: '..',
});
typewriter.typeString('Tee Mates').pauseFor(1000).start();

// initialize responsive nav bar
document.addEventListener('DOMContentLoaded', function () {
  const sidenavEl = document.querySelectorAll('.sidenav');
  const instances = M.Sidenav.init(sidenavEl, {});
});

// initialize selection menu
const selectEl = document.querySelectorAll('select');
document.addEventListener('DOMContentLoaded', function () {
  const instances = M.FormSelect.init(selectEl, {});
});

// initialize date picker
const datepickerEl = document.querySelector('.datepicker');
document.addEventListener('DOMContentLoaded', function () {
  M.Datepicker.init(datepickerEl, {
    format: 'yyyy-mm-dd',
    autoClose: true,
    showClearBtn: true,
  });
});

// initialize time picker
const timepickerEl = document.querySelector('.timepicker');
document.addEventListener('DOMContentLoaded', function () {
  M.Timepicker.init(timepickerEl, {
    twelveHour: false,
    format: 'HH:mm:ss',
  });
});