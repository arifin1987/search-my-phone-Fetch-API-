const loadPhones =async (searchText)=>{
    const url =`https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res =await fetch(url);
    const data =await res.json();
    
    displayPhones(data.data);
}

// loadPhones();


const displayPhones = (phones)=>{
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerText ='';

    // no phone found message shown
    const noPhone= document.getElementById('no-phone');
    if(phones.length === 0){
        
        noPhone.classList.remove('d-none')
    }
    else{
        noPhone.classList.add('d-none')
    }

    // show all
    const showAll = document.getElementById('show-all');
    if(phones.length >10){
        phones = phones.slice(0,10)
        showAll.classList.remove('d-none')
    }
    else{
        showAll.classList.add('d-none')
    }

    phones.forEach(phone=>{
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('col')
        cardDiv.innerHTML = `
        <div class="col">
              <div class="card p-2">
                <img src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${phone.phone_name}</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
        
        
        `
        cardContainer.appendChild(cardDiv)

    });
    toggleSpinner(false)

}

document.getElementById('btn-search').addEventListener('click', function(){
    toggleSpinner(true)
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    loadPhones(searchText)
})

// Spinner section
const toggleSpinner = isLoading =>{
    const loader = document.getElementById('loader');
    if(isLoading){
        loader.classList.remove('d-none');
    }
    else{
        loader.classList.add('d-none');
    }
}