//I used fetch to fetch the json data from ./data folder
fetch('./weird-deals/data/products.json')
    .then(function(response){
        return response.json();

    }).then(function(obj){

      //The code loops through the products array collecting valuable information on each product
        for(let i=0; i<obj.products.length; i+=1){
            console.log(obj.products[i].name);

            //each time through the array, the results are mapped in this HTML mockup
            document.querySelector(".main-content").innerHTML += ` 
            

          <div class="card">
          <img src="${obj.products[i].image}">
          <h1>${obj.products[i].name}</h1>
          <h3>Description</h3>
          <p>${obj.products[i].description}</p>
          <h3>Features</h3>

          <p>${obj.products[i].features}</p>
          <a class="btn" href="${obj.products[i].buy}" target="_blank">Buy product</a>
        </div>



          `

        }



    }).catch(function(error){
        console.error("Something went wrong retrieving the data");
        console.error(error)

    })



