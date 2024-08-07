const userInput = document.querySelector('#userInput')
const btn = document.querySelector('.inputArea button')
const sideImage = document.querySelector('.item-image')
const itemBar = document.querySelector('.item-bar')
console.log(itemBar);


fetch('https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza')
  .then((res) => res.json())
  .then((data) => {
    console.log(data.data.recipes);
    btn.addEventListener('click', () => {
      const userInputValue = userInput.value;
      const menu = data.data.recipes;
      // Clear existing items
      itemBar.innerHTML = '';
      // Limit the number of items to 5
      const limitedMenu = menu.slice(0, 7);
      limitedMenu.forEach((recipe) => {
        console.log(recipe);
        // Create a new div element
        const item = document.createElement('div');
        item.classList.add('item'); // Add class to the div
        // Set the inner HTML
        item.innerHTML = `
          <div class="item-image">
            <img src="${recipe.image_url}" alt="${recipe.title}">
          </div>
          <div class="inner-text">
            <h4>${recipe.title}</h4>
            <p>${recipe.publisher}</p>
          </div>
        `;
        // Append the new element to itemBar
        itemBar.appendChild(item);
      });
    });
  });

