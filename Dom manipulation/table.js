let todos = [];

function addTodos(event) {
    event.preventDefault();
    let item = document.getElementById('item').value;
    let quantity = document.getElementById('quantity').value;
    document.getElementById('item').value = '';
    document.getElementById('quantity').value = '';
    todos.push({item, quantity});
    console.log(todos);
    let output = ``;
    todos.forEach(el => {
        output += `
        <tr>
            <td>${el.item}</td>
            <td>${el.quantity}</td>
        </tr>
        `
    });

    document.getElementById('tbody').innerHTML = output;
}