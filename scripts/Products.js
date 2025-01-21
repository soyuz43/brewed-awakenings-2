// Products.js
import { getProducts } from "./database.js"

const products = getProducts()

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `
            <li id="product--${product.id}" class="product">
                ${product.name}
            </li>
        `
    }

    html += "</ul>"

    return html
}

document.addEventListener("DOMContentLoaded", () => {
    const productsList = document.querySelector(".details__products ul")

    productsList.addEventListener("click", (event) => {
        if (event.target.classList.contains("product")) {
            const productId = event.target.id.split("--")[1]
            const product = products.find((product) => product.id == productId)
            alert(`The price of ${product.name} is $${product.price.toFixed(2)}`)
        }
    })
})