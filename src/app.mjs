import fetchApiData from './modules/api.mjs';


async function renderData() {
    const apiData = await fetchApiData();
    
    const cardWrapper = document.getElementById('card-data');

    apiData.results.forEach(data => {
        console.log(data);
        const sanitizer1 = new Sanitizer();
        const div = document.createElement('div');
        div.classList.add('col-md-3');
        div.setHTML( `
        
        <div class="card">
            <img src=${data.picture.large} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">
                    <small class="h5-pretext">Hello, My Name is</small><br>
                    ${data.name.first} ${data.name.last}
                </h5>
                <div class="card-icons">
                    <ul>
                        <li><a href="#"><i class="fa-solid fa-user"></i></a></li>
                        <li><a href="#"><i class="fa-solid fa-envelope"></i></a></li>
                        <li><a href="#"><i class="fa-solid fa-calendar"></i></a></li>
                        <li><a href="#"><i class="fa-solid fa-map-location-dot"></i></a></li>
                        <li><a href="#"><i class="fa-solid fa-phone"></i></a></li>
                    </ul>
                </div>


            </div>
        </div>
    
        
        `
        
        
        
        
        ,{ sanitizer: sanitizer1 });
        cardWrapper.appendChild(div);
    });
}

renderData();


// async function fetchDataAndRender() {
//     const apiData = await fetchApiData();
//     console.log(apiData.results);

//     const cardWrapper = document.getElementById('cards-wraper');
    
//     apiData.results.forEach(data => {
//         const div = document.createElement('div');
//         div.innerHTML = `<h1>${data.name.first}</h1>`;
//         cardWrapper.appendChild(div);
//     });
// }

// fetchDataAndRender();
//console.log(apiData.results);
// console.log("hello");
// async function main() {
//     try {
//       const apiData = await fetchApiData();
//       console.log(apiData);
//       // Use the API data in your application
//     } catch (error) {
//       console.error('API request error:', error);
//     }
//   }
  
//   main();


