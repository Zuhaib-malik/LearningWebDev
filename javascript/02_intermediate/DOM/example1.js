 
    // Select elements
    const title = document.getElementById('main-title');
    const listContainer = document.getElementById('list-container');

    // Button elements
    const changeTextBtn = document.getElementById('change-text-btn');
    const addItemBtn = document.getElementById('add-item-btn');
    const removeItemBtn = document.getElementById('remove-item-btn');

    // Change title text
    changeTextBtn.addEventListener('click', () => {
      title.textContent = 'The Title Has Changed!';
      title.style.color = 'darkblue';
    });

    // Add new item
    addItemBtn.addEventListener('click', () => {
      const newItem = document.createElement('div');
      newItem.className = 'item';
      newItem.textContent = 'New Item ' + (listContainer.children.length + 1);
      listContainer.appendChild(newItem);
    });

    // Remove last item
    removeItemBtn.addEventListener('click', () => {
      if (listContainer.lastElementChild) {
        listContainer.removeChild(listContainer.lastElementChild);
      } else {
        alert('No more items to remove!');
      }
    });
  