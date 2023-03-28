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
document.addEventListener('DOMContentLoaded', function () {
    var datepickerEl = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(datepickerEl, {});
});

// userdash searching function
const search = async (event) => {
    // let jsondata;
    event.preventDefault();
    console.log('ss')

    const res = await fetch('/api/userdash/result', {
        method: 'POST'
    });
    if (res.ok){
        // jsondata = await res.json(); 
    }else{
        console.log('not okay')
    }

    // console.log(jsondata)

}

const btn = document.querySelector('.search-form');
btn.addEventListener('submit', search);


// root page log in button
// const loginFormEl = document.querySelector('.loginForm');
// loginFormEl.addEventListener('submit', login)

// const login = async (e) => {
//     e.preventDefault();



// }