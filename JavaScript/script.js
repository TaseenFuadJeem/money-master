
// -----------event handler of calculate button------------

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

    if (yourIncome >= 0 && typeof (yourIncome) != "number" && food >= 0 && typeof (food) != "number" && rent >= 0 && typeof (rent) != "number" && shopping >= 0 && typeof (shopping) != "number") {
        total = parseFloat(food) + parseFloat(rent) + parseFloat(shopping);

        totalExpensesText.innerText = total;
        availableBalanceText.innerText = yourIncome - totalExpensesText.innerText;

        foodInput.value = '';
        rentInput.value = '';
        shoppingInput.value = '';

        document.getElementById('error-massage').style.display = 'none';
    }
    else {
        document.getElementById('error-massage').style.display = 'block';
        yourIncomeInput.value = '';
        foodInput.value = '';
        rentInput.value = '';
        shoppingInput.value = '';
        totalExpensesText.innerText = 0;
        availableBalanceText.innerText = 0;
    }
};

// -----------event handler of save button------------


function saveButton() {
    const yourIncomeInput = document.getElementById('income-input');
    const yourIncome = yourIncomeInput.value;

    const availableBalanceText = document.getElementById('available-balance');
    const availableBalance = availableBalanceText.innerText;
    const remainingBalanceText = document.getElementById('remaining-balance');

    const saveInput = document.getElementById('save-input');
    const save = saveInput.value;
    const savingsText = document.getElementById('savings');

    if (save >= 0 && typeof (save) != "number") {
        savingsText.innerText = (parseFloat(save) / 100) * parseFloat(yourIncome);
        remainingBalanceText.innerText = parseFloat(availableBalance) - parseFloat(savingsText.innerText);

        saveInput.value = '';
        document.getElementById('error-massage-savings').style.display = 'none';
    }
    else {
        document.getElementById('error-massage-savings').style.display = 'block';
        saveInput.value = '';
    };
};