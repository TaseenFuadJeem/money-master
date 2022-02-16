function calculateButton() {
    const yourIncomeInput = document.getElementById('income-input');
    const yourIncome = yourIncomeInput.value;

    const foodInput = document.getElementById('food-input');
    const food = foodInput.value;

    const rentInput = document.getElementById('rent-input');
    const rent = rentInput.value;

    const shoppingInput = document.getElementById('shopping-input');
    const shopping = shoppingInput.value;

    const availableBalanceText = document.getElementById('available-balance');
    const totalExpensesText = document.getElementById('total-expense');

    if (yourIncome > 0 && typeof (yourIncome) != "number" && food > 0 && typeof (food) != "number" && rent > 0 && typeof (rent) != "number" && shopping > 0 && typeof (shopping) != "number") {
        total = parseFloat(food) + parseFloat(rent) + parseFloat(shopping);

        totalExpensesText.innerText = total;
        availableBalanceText.innerText = yourIncome - totalExpensesText.innerText;
    }
    else {
        alert('Please Enter A Positive Number');
        yourIncomeInput.value = '';
        foodInput.value = '';
        rentInput.value = '';
        shoppingInput.value = '';
        totalExpensesText.innerText = 0;
        availableBalanceText.innerText = 0;
    }
}