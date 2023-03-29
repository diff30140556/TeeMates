const search = async (event) => {
  event.preventDefault();
  console.log('ss');

    const res = await fetch('/api/teetimes', {
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