// Форма для реєстрації

// Реалізовуємо форму для реєстрації.

// Поля:

// Ім'я, Прізвище (Текстові поля)
// Дата народження (Текстове поле)
// Стать (radio)
// Місто (select)
// Адреса (textarea)
// Мови, якими володіє (checkbox)
// ….
// Кнопка “Зберегти”

// За натисканням на кнопку замість форми повинна виводитися “таблиця” з даними, які ввів користувач.

let btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    let userName = document.getElementById('name').value;

    let userSurname = document.getElementById('surname').value;

    let userBirthday = document.getElementById('birthday').value;

    let genders = document.querySelectorAll('input[type="radio"]');
    let userGender;

    genders.forEach(function (gender) {
        if (gender.checked) {
            let id = gender.id;
            let label = document.querySelector(`label[for="${id}"]`);
            userGender = label.textContent;
        }
    })

    let townSelect = document.getElementById('town');
    let userTown = townSelect.options[townSelect.selectedIndex].textContent;

    let userAddress = document.getElementById('address').value;

    let languages = document.querySelectorAll('input[type="checkbox"]');

    let userlanguages = [];

    languages.forEach(function (language) {
        if (language.checked) {
            let id = language.id;
            let label = document.querySelector(`label[for="${id}"]`);
            userlanguages.push(label.textContent);
        }
    })

    if ((userName.trim() === '') || (userSurname.trim() === '') || (userBirthday.trim() === '') || (userAddress.trim() === '')) {
        alert('Заповніть обовязкові поля');
        return false;
    }

    let aboutUser = document.getElementById('aboutUser');
    aboutUser.innerHTML = `Ваше ім'я: ${userName}.<br>
             Ваше прізвище: ${userSurname}.<br> 
             Дата Народження: ${userBirthday}.<br>
             Стать: ${userGender}. <br>
             Місто: ${userTown}. <br>
             Адреса: ${userAddress}. <br>
             Мови, якими володієте: ${userlanguages.join(', ')}`;
})
