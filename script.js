




let mealsData = [];


async function loadMeals() {
    try {
        const response = await fetch('meals.json'); 
        const data = await response.json();
        mealsData = data.meals;
        displayMeals(mealsData);
    } catch (error) {
        console.error("Ошибка загрузки данных:", error);
    }
}


function displayMeals(meals) {
    const container = document.getElementById('meals-container');
    container.innerHTML = '';

    meals.forEach(meal => {
        const mealCard = document.createElement('div');
        mealCard.classList.add('meal-card');
        mealCard.innerHTML = `
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <h3>${meal.strMeal}</h3>
            <p><strong>Категория:</strong> ${meal.strCategory}</p>
            <p><strong>Кухня:</strong> ${meal.strArea}</p>
            <p><strong>Время:</strong> ⏳${meal.strTime}</p>
            <p><strong>Калории:</strong>🔥 ${meal.strCalories}</p>
          
        `;
        container.appendChild(mealCard);
    });
}


function filterMeals(category) {
    if (category === 'Все') {
        displayMeals(mealsData);
    } else {
        const filteredMeals = mealsData.filter(meal => meal.strCategory === category);
        displayMeals(filteredMeals);
    }
}


window.onload = loadMeals;

