// Отримуємо необхідні елементи DOM
const messageList = document.getElementById('messageList');
const messageForm = document.getElementById('messageForm');

// Додаємо обробник події для форми
messageForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Отримуємо значення ім'я і повідомлення з форми
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    // Отримуємо поточний час і дату
    const dateTime = new Date();
    const formattedDateTime = `${dateTime.toLocaleString()}`;

    // Створюємо новий елемент списку повідомлень з ім'ям, датою та текстом
    const newMessage = document.createElement('li');
    newMessage.className = 'message';
    newMessage.innerHTML = `
        <div class="message-header">
            <span>${name}</span>
            <span>${formattedDateTime}</span>
        </div>
        <div class="message-text">${message}</div>`;

    // Додаємо нове повідомлення до списку
    messageList.appendChild(newMessage);

    // Очищаємо форму
    document.getElementById('name').value = '';
    document.getElementById('message').value = '';
});