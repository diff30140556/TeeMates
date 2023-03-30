const resultListEl = document.querySelector('.result-list')

const search = async (event) => {
    event.preventDefault();
    let results = [];
    const course_name = document.querySelector('.course .select-wrapper input').value;
    const date = datepickerEl.value;

    if (course_name !== 'Select the course' && date) {

        const res = await fetch('/api/teetimes', {
            method: 'POST',
            body: JSON.stringify({ course_name, date }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (res.ok) {
            results = await res.json()
            let list = ``;
            results.map((result) => {
                const resultDate = new Date(result.date);
                const formattedDate = resultDate.toLocaleDateString();
                list += `
                <li class="result-card col s12 m6">
                    <div class="card glass-blur">
                        <div class="card-content">
                            <span class="card-title">Course: ${result.course_name}</span>
                            <p>Tee Date: ${formattedDate}</p>
                            <p>Tee Time: ${result.time}</p>
                        <div class="custom-text">
                            <p>Handicap: ${result.handicap}</p>
                            <p>Posted By: ${result.user_id}</p>
                    </div>
                </div>
                <div class="card-action text-center">
                    <a href="" class="attend-btn" data-teetimeid="${result.id}">Attend Tee Time</a>
                </div>
            </div>
            </li>`
            })
            resultListEl.innerHTML = list;
        } else {
            return;
        }
    }
}

const attendTeeTime = async (event) => {
    event.preventDefault();

    if (event.target.className === 'attend-btn') {
        const teetimeId = event.target.dataset.teetimeid;

        const res = await fetch('/api/teetimes/attend', {
            method: 'POST',
            body: JSON.stringify({ teetimeId }),
            headers: { 'Content-Type': 'application/json' },
        })
    }
}

document
    .querySelector('.search-form')
    .addEventListener('submit', search);

document
    .querySelector('.result-list')
    .addEventListener('click', attendTeeTime);