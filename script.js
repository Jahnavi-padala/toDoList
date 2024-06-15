function addTodo() {
    const input = document.getElementById('todo-input');
    const todoText = input.value.trim();
    if (todoText !== '') {
        const li = document.createElement('li');
        li.textContent = todoText;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove';
        removeButton.onclick = function() {
            this.parentNode.remove();
        };
        
        li.appendChild(removeButton);
        document.getElementById('todo-list').appendChild(li);
        input.value = '';
    }
}
