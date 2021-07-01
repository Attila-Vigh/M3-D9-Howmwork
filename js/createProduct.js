const url = "https://striveschool-api.herokuapp.com/api/product/"
console.log( "from the other side");
const productId = new URLSearchParams( window.location.search).get("id")
is_productIdURL = productId ? url + productId : url
console.log( productId )
const method = is_productIdURL ? "PUT" : "POST"

window.onload = async ( ) => {
    console.log( productId )
    if ( productId ) {
        console.log( productId )

        const response = await fetch(is_productIdURL, 
            {
                method,
                headers: {
                    "Authorization": AUTHORIZATION_PRODUCTS,
                    "Content-Type": "application/json",
        }})
        const { 
            name,
            description,
            brand,
            imageUrl,
            price, 
        } = await response.json()
        
        document.querySelector(  "#name"         ).value = name
        document.querySelector(  "#description"  ).value = description
        document.querySelector(  "#brand"        ).value = brand
        document.querySelector(  "#img-src"      ).value = imageUrl
        document.querySelector(  "#price"        ).value = price
        
        document.querySelector(  "#submit"  ).innerText = "Update Product"
    }

}

const handleNewProduct = async (event) => {
    event.preventDefault()
    
    // const url = "https://striveschool-api.herokuapp.com/api/product/"


    const  newProduct  = {
        name        : document.querySelector(  "#name"        ).value,
        description : document.querySelector(  "#description" ).value,
        brand       : document.querySelector(  "#brand"       ).value,
        imageUrl    : document.querySelector(  "#img-src"     ).value,
        price       : document.querySelector(  "#price"       ).value,
    }

    const requestObj = {
        method: method,
        body: JSON.stringify( newProduct ),
        headers: {
            "Authorization": AUTHORIZATION_PRODUCTS,
            "Content-Type": "application/json",
        }
    }

    try{
        const response = await fetch(is_productIdURL, requestObj)
        
        if (response.ok){
            const newProduct = await response.json()
            alert(`Product successfully ${ method === "PUT" ? "updated" : "created"}`)
        } 
        else {
            if (response.status >= 400 && response.status < 500)
                throw new Error("User generated error, verify the data that it is sent from your computer!")
            else if (response.status >= 500 && response.status < 600)
                throw new Error("Server generated error, contact the admin to fix this")
        }
        console.log("You see me? then no exeption was thrown")
    } 
    catch {
        err => console.lor(err, err.message)
    }
    finally {
        console.log("I am the forever curse! You will never get rid of me!")
    }
}

