// Orders.js
import { getProducts, getEmployees, getOrders } from "./database.js"

const products = getProducts()
const employees = getEmployees()
const orders = getOrders()

const findProduct = (order, allProducts) => {
    return allProducts.find(product => product.id === order.productId)
}

const findEmployee = (order, allEmployees) => {
    return allEmployees.find(employee => employee.id === order.employeeId)
}

export const Orders = () => {
    let html = "<ul>"

    for (const order of orders) {
        const employee = findEmployee(order, employees)
        const product = findProduct(order, products)

        if (employee && product) {
            html += `<li>${product.name} was sold by ${employee.name} on ${new Date(order.timestamp).toLocaleDateString()}</li>`
        } else {
            html += `<li>Unknown product or employee</li>`
        }
    }

    html += "</ul>"

    return html
}