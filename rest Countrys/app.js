fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => callApi(data))

function callApi(countryData) {
    countryData.forEach(country => {
        const showDom = document.getElementById('showing-the-CoutryList')
        const newDiv = document.createElement('div');
        newDiv.className = 'newDivClassName'

        const showName = `
                <div>${country.name}</div>
            `
        newDiv.innerHTML = showName;
        showDom.appendChild(newDiv);
        // console.log(country.name);
    });
}

const box = document.getElementById('inputBox');
const btnSub = document.getElementById('btnSubmit').addEventListener('click', function () {
    toggleSpinner()
    fetch('https://restcountries.eu/rest/v2/name/' + box.value + '?fullText=true')
        .then(res => res.json())
        .then(data => {
            // .catch()
            const showdetails = document.getElementById('showdetails');
            const details = `
            <div class="card-body">
            <h5 class="card-title">Name: ${data[0].name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Lang: ${data[0].languages[0].name}</h6>
            <p class="card-text">Alpha3 Conde:${data[0].alpha3Code}</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
            </div>
            
            `
            showdetails.innerHTML = details;
            toggleSpinner();
        })

        .catch(err => {
            errMsg('something went wrong, please try again latter');
        })
})
const errMsg = err => {
    const displayError = document.getElementById('errorMSG');
    displayError.innerText = err;
}

const toggleSpinner = () => {
    const spinner = document.getElementById('loading-spinner');
    const showing = document.getElementById('showdetails');
    const displayErrors = document.getElementById('errorMSG');

    // if (show) {
    //     spinner.classList.remove('d-none')
    // } 
    // else {
    //     spinner.classList.add('d-none');
    // }
    spinner.classList.toggle('d-none')
    showing.classList.toggle('d-none')
    displayErrors.classList.toggle('d-none')

}