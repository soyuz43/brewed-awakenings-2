// Employees.js
import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `
            <li id="employee--${employee.id}" class="employee">
                ${employee.name}
            </li>
        `
    }

    html += "</ul>"

    return html
}

document.addEventListener("DOMContentLoaded", () => {
    const employeesList = document.querySelector(".details__employees ul")

    employeesList.addEventListener("click", (event) => {
        if (event.target.classList.contains("employee")) {
            const employeeId = event.target.id.split("--")[1]
            const employeeOrders = orders.filter((order) => order.employeeId == employeeId)
            const productsSold = employeeOrders.length
            alert(`${event.target.textContent} has sold ${productsSold} products`)
        }
    })
})