const app = document.querySelector('.loginTitle');
//   cursor.style.width = '24px';
//   cursor.style.height = '24px';

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


const search = async (event) => {
    event.preventDefault();
    console.log('ss')

    const res = await fetch('/api/userdash/result', {
        method: 'GET'
    });

    if (res.ok){
        console.log('okay')
    }else{
        console.log('not okay')
    }

}
const test = async()=>{
    console.log('yes')
}

const btn = document.querySelector('.search-form');
btn.addEventListener('submit', search);

const btnss = document.querySelector('.searching-section');
btnss.addEventListener('click', test);