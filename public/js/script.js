// initialize Typewriter 
const app = document.querySelector('.loginTitle');

const typewriter = new Typewriter(app, {
    loop: false,
    delay: 150,
    cursor: '..'
});
typewriter
    .typeString('Tee Mates')
    .pauseFor(1000)
    .start();


// initialize responsive nav bar
document.addEventListener('DOMContentLoaded', function () {
    const sidenavEl = document.querySelectorAll('.sidenav');
    const instances = M.Sidenav.init(sidenavEl, {});
});

// initialize selection menu
document.addEventListener('DOMContentLoaded', function () {
    var selectEl = document.querySelectorAll('select');
    var instances = M.FormSelect.init(selectEl, {});
});
// initialize date picker
const datepickerEl = document.querySelector('.datepicker');
document.addEventListener('DOMContentLoaded', function () {
    var instances = M.Datepicker.init(datepickerEl, {});
});

// userdash searching function
const search = async (event) => {
    event.preventDefault();
    console.log('ss')

    const res = await fetch('/userdash', {
        method: 'POST'
    });
    if (res.ok){
        console.log('okay')
    }else{
        console.log('not okay')
    }
}

const btn = document.querySelector('.search-form');
btn.addEventListener('submit', search);


// root page log in button
// const loginFormEl = document.querySelector('.loginForm');
// loginFormEl.addEventListener('submit', login)

// const login = async (e) => {
//     e.preventDefault();



// }