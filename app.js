// const userInput = document.querySelector('#userInput')
// const btn = document.querySelector('.inputArea button')
// const itemBar = document.querySelector('.item-bar')


// fetch('https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza')
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data.data.recipes);
//     btn.addEventListener('click', () => {
//       const menu = data.data.recipes;
//       // Clear existing items
//       // Limit the number of items to 5
//       //const limitedMenu = menu.slice(0, 7);
//       menu.filter((recipe) => {
//         const userInputValue = userInput.value;
//         console.log(userInputValue);        
        
//         if (userInputValue === recipe.title.toLowerCase()) {
//           // Create a new div element
//           itemBar.innerHTML = '';
//           const item = document.createElement('div');
//           item.classList.add('item'); // Add class to the div
//           // Set the inner HTML
//           item.innerHTML = `
//           <div class="item-image">
//             <img src="${recipe.image_url}" alt="${recipe.title}">
//           </div>
//           <div class="inner-text">
//             <h4>${recipe.title}</h4>
//             <p>${recipe.publisher}</p>
//           </div>
//         `;
//           // Append the new element to itemBar
//           itemBar.appendChild(item);
//         }
//       });
//     });
//   });




const userInput = document.querySelector('#userInput');
const btn = document.querySelector('.inputArea button');
const itemBar = document.querySelector('.item-bar');

fetch('https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza')
  .then((res) => res.json())
  .then((data) => {
    //console.log(data.data.recipes);

    btn.addEventListener('click', () => {
      const menu = data.data.recipes;
      const userInputValue = userInput.value.trim().toLowerCase(); // Trim and convert to lowercase

      // Clear existing items
      itemBar.innerHTML = '';

      const filteredMenu = menu.filter((recipe) => recipe.title.toLowerCase().includes(userInputValue));

      if (filteredMenu.length === 0) {
        // Display no results message
        itemBar.innerHTML = '<p>No recipes found.</p>';
      } else {
        // Limit the number of items to 5
        //const limitedMenu = filteredMenu.slice(0, 10);

        filteredMenu.forEach((recipe) => {
          const item = document.createElement('div');
          item.classList.add('item');
          item.innerHTML = `
            <div class="item-image">
              <img src="${recipe.image_url}" alt="${recipe.title}">
            </div>
            <div class="inner-text">
              <h4>${recipe.title}</h4>
              <p>${recipe.publisher}</p>
            </div>
          `;
          itemBar.appendChild(item); 
          
          // fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${recipe.id}?key=8d488d17-fae0-474f-a48f-b7eab7d8c578`).then((res)=> res.json()).then((data)=> {
          //   console.log(data.data);
            
          // })
          item.addEventListener('click', ()=> {
            const displayBar = document.querySelector('.display-bar')
            console.log(displayBar);
            displayBar.innerHTML = ''
            const displayImg = document.createElement('div')
            displayImg.classList.add('display-image')
            displayImg.innerHTML = `<img src="${recipe.image_url}" alt="">`
            displayBar.appendChild(displayImg)   
            
            const displayFirstArea = document.createElement('div')
            displayFirstArea.classList.add('display-first-area')
            displayFirstArea.innerHTML = `<div class="time"><i class="fa-regular fa-clock"></i><spanclass="minutes">60<span> MINUTES</div>
            <div class="serving"><i class="fa-solid fa-people-group"></i> <span class="numberServe">4</span> SERVING</div>
            <div class="plusMinus"><i class="fa-solid fa-circle-plus"></i> <i class="fa-solid fa-circle-minus"></i></div>
            <div class="bookmarksArea"><i class="fa-regular fa-bookmark"></i></div>
            </div>`;
            displayBar.appendChild(displayFirstArea)   

            const recipeIngredients = document.createElement('div')
            recipeIngredients.classList.add('recipeIngredients')
            recipeIngredients.innerHTML = `<h3>Recipe ingredients</h3>
                    <div class="Ingredients">
                    <i class="fa-solid fa-check"></i><p>1 cup warm water</p>
                    <i class="fa-solid fa-check"></i><p>1 medium head cauliflower cut into florets</p>
                    </div>

                    <div class="Ingredients">
                    <i class="fa-solid fa-check"></i><p>1 egg</p>
                    <i class="fa-solid fa-check"></i><p>1/2 cup mozzarella shredded</p>
                    </div>

                    <div class="Ingredients">
                    <i class="fa-solid fa-check"></i><p>Salt and pepper to taste</p>
                    <i class="fa-solid fa-check"></i><p>1 cup chicken cooked and shredded</p>
                    </div>

                    <div class="Ingredients">
                    <i class="fa-solid fa-check"></i><p>1/2 cup barbecue sauce</p>
                    <i class="fa-solid fa-check"></i><p>3/4 cup mozzarella shredded</p>
                    </div>

                     <div class="Ingredients">
                    <i class="fa-solid fa-check"></i><p>Red onion to taste thinly sliced</p>
                    <i class="fa-solid fa-check"></i><p>Fresh cilantro to taste</p>
                    </div>                 
                 </div>

            </div>` 
                    
            displayBar.appendChild(recipeIngredients)                  
          })   
        });
      }      
    });
  });

