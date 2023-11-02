import fetchApiData from './modules/api.mjs';

async function renderData() {
    const apiData = await fetchApiData();

    const cardWrapper = document.getElementById('card-data');



    apiData.results.forEach(data => {

        const div = document.createElement('div');
        div.classList.add('col-6', 'col-md-3');

        div.innerHTML = `
            <div class="card">
                <img src="${data.picture.large}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">
                        <small id="user_title" class="h5-pretext">Hello, My Name is</small><br>
                        <span id="user_value">${data.name.first} ${data.name.last}</span>
                    </h5>
                    <div class="card-icons">
                        <ul>
                            <li><a data-title="Hello, My Name is" data-value="${data.name.first} ${data.name.last}"><i class="fa-solid fa-user"></i></a></li>
                            <li><a data-title="My Email is" data-value="${data.email}"><i class="fa-solid fa-envelope"></i></a></li>
                            <li><a data-title="My Birthday is on" data-value="${new Date(data.dob.date).toDateString()}"><i class="fa-solid fa-calendar birthday"></i></a></li>
                            <li><a data-title="My Address is" data-value="${data.location.street.number} ${data.location.street.name}"><i class="fa-solid fa-map-location-dot address"></i></a></li>
                            <li><a data-title="My Phone is" data-value="${data.cell}"><i class="fa-solid fa-phone phone"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
        div.querySelectorAll('.card-icons a').forEach(function (anchor) {
            anchor.addEventListener('click', function (event) {
                event.preventDefault();

                // Get the data-value and data-title of the clicked <a> tag
                const value = this.getAttribute('data-value');
                const title = this.getAttribute('data-title');

                // Find the parent card and then find the span and small tag inside it to set the content
                const parentCard = this.closest('.card');
                const userValueSpan = parentCard.querySelector('span');
                const userTitleSmall = parentCard.querySelector('.h5-pretext');

                userValueSpan.textContent = value;
                userTitleSmall.textContent = title;
            });
        });

        cardWrapper.appendChild(div);

    });

}

renderData();