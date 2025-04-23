document.addEventListener('DOMContentLoaded', function () {
  let searchInput = document.getElementById('search-input');
  let personList = document.getElementById('person-list');

  let people = [
    {
      name: 'Burger',
      type: 'Vegeterian',
      ingredients: 'Burger bun, Beef patty, Lettuce, Tomato slice, Cheese slice',
      photo: './img/burgercombo.jpg',
    },

    {
      name: 'Barbecue Chicken',
      type: 'Non-Vegetarian',
      ingredients: 'Chicken, BBQ sauce, Garlic, Olive oil, Lemon juice',
      photo: './img/barbecue.jpg',
    },
    {
      name: 'Pulao',
      type: 'Vegetarian',
      ingredients: 'Rice, Basmati, Onion, Cinnamon, Cardamom',
      photo: './img/pulao.jpg',
    },
    {
      name: 'Kheer',
      type: 'Vegetarian',
      ingredients: 'Rice, Milk, Sugar, Cardamom, Saffron',
      photo: './img/kheer.jpg',
    },
    {
      name: 'Paneer',
      type: 'Vegetarian',
      ingredients: 'Paneer, Onions, Tomatoes, GG, Spices, Oil, Salt',
      photo: './img/paneer.jpg',
    },
    {
      name: 'Kulcha',
      type: 'Vegetarian',
      ingredients: 'Flour, Yeast, Yogurt, Baking powder, Sugar',
      photo: './img/kulche.jpeg',
    },
    {
      name: 'Chicken Biryani',
      type: 'Non-Vegetarian',
      ingredients: 'Rice, Chicken/ GG, Spices, Curd, Mint, Oil',
      photo: './img/biryani.jpg',
    },
    {
      name: 'Tandoori Chicken',
      type: 'Non-Veg',
      ingredients: 'Chicken, Yogurt, Ginger, Garlic, Lemon juice, Salt, Oil',
      photo: './img/tandoori_chicken.jpg',
    },
    {
      name: 'Milkshake',
      type: 'Vegetarian',
      ingredients: 'Milk, Ice cream, Sugar, Vanilla extract, Fruit (optional)',
      photo: './img/milkshake.jpg',
    },
    {
      name: 'Momos',
      type: 'Vegetarian',
      ingredients: 'Flour, Water, Cabbage, Carrot, Onion, Garlic, Ginger, oil',
      photo: './img/momo.jpg',
    },
    // Add details for the remaining people
    // ...
  ];

  function generatePersonCard(person) {
    let card = document.createElement('div');
    card.className = 'person-card';

    let photo = document.createElement('div');
    photo.className = 'person-photo';
    let img = document.createElement('img');
    img.src = person.photo;
    photo.appendChild(img);

    let name = document.createElement('div');
    name.className = 'person-name';
    name.textContent = person.name;

    let type = document.createElement('div');
    type.className = 'person-info';
    type.textContent = 'Type: ' + person.type;

    let ingredients = document.createElement('div');
    ingredients.className = 'person-info';
    ingredients.textContent = 'Ingredients: ' + person.ingredients;

    card.appendChild(photo);
    card.appendChild(name);
    card.appendChild(type);
    card.appendChild(ingredients);

    return card;
  }

  function renderPersonList(people) {
    personList.innerHTML = '';

    for (let i = 0; i < people.length; i++) {
      let card = generatePersonCard(people[i]);
      personList.appendChild(card);
    }
  }

  renderPersonList(people);

  searchInput.addEventListener('keyup', function () {
    let searchTerm = searchInput.value.toLowerCase();
    let filteredPeople = people.filter(function (person) {
      return person.name.toLowerCase().includes(searchTerm);
    });
    renderPersonList(filteredPeople);
  });
});
