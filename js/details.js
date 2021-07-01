const url = "https://striveschool-api.herokuapp.com/api/product/"
const productId = new URLSearchParams(window.location.search).get("id")
// document.body.style.background = "red"
window.onload = async () => {
    try
    {
        const response = await fetch(url + productId, 
            { 
                method: "GET", 
                headers: { 
                    'Content-Type': 'application/json', 
                    'authorization': AUTHORIZATION_PRODUCTS
        }})
        if (response.ok)
        {
            const { _id, name, description, brand, imageUrl, price, userId, createdAt, updatedAt, } = await response.json()
            // console.log(eventData);
            console.log(document.querySelector("#deatails-card"));
            document.querySelector("#deatails-card").innerHTML = 
                `
                    <h2 class="mt-5 mb-3">Product Id: ${ _id } </h2>
                    <div class="card" style="max-width: 38rem;">
                        <img src=${ imageUrl } class="" alt="">
                        <div class="card-body">

                            <h5 class="card-title">          ${ name        }</h5>
                            <p class="card-text">Brand:      ${ brand       }</p>
                            <p class="card-text">            ${ description }</p>
                            <p class="card-text">Added by    ${ userId      }</p>
                            <p class="card-text">Created on: ${ createdAt   }</p>
                            <p class="card-text">Updated on: ${ updatedAt   }</p>
                            <p class="card-text">Price: £    ${ price       }</p>

                            <button type="button" class="btn btn-success mt-3" onclick="handleEdit()">Edit Product</button>
                        </div>
                    </div>
                `


                    // <h1 class=" font-weight-bolder mt-4">${ name }</h1>
                    // <p class="text-monospace mb-4">${ new Date(time).toLocaleString() }</p>
                    // <h6 class="bg-light pl-2 py-3">Server Details</h6>
                    // <ul class="list-group list-group-flush">
                    //     <li class="list-group-item pl-2"><strong>id:</strong> ${ _id }</li>
                    //     <li class="list-group-item pl-2"><strong>createdAt:</strong>  ${ createdAt }</li>
                    //     <li class="list-group-item pl-2"><strong>updatedAt:</strong>  ${ updatedAt }</li>
                    // </ul>
        }
    }
    catch (err)
    {
        console.log(err)
    }

    console.log("i'm the last thing")
}
console.log( window.location.host)
const handleEdit = () => window.location.assign( `http://${ window.location.host }/createProduct.html?id=` + productId)