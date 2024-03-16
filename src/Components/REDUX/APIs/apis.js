const PRODUCT_API = {
     fake: "https://fakestoreapi.com/products",
     dummy: "https://dummyjson.com/products",
     placeholder: "https://jsonplaceholder.typicode.com/posts"
}

export const url = (api) => {
  switch(api){
    case "fake":
       return PRODUCT_API.fake
    case "dummy":
       return PRODUCT_API.dummy
    default:
       return PRODUCT_API.placeholder
  }
}