describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');

         cy.get('#mail') .type('german@dolnikov.ru'); // Вввели верный логин
         cy.get('#pass') .type('iLoveqastudio1'); // Ввели верный пароль
         cy.get('#loginButton') .click(); // Нажал войти

         cy.get('#messageHeader') .contains('Авторизация прошла успешно'); // Проверяю, что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible'); // Текст виден вользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
    })
    it('Верный пароль и неверный логин', function () {
     cy.visit('https://login.qa.studio/'); // Зашли на сайт
     cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');

     cy.get('#mail') .type('german@dolnikov.ru'); // Вввели верный логин
     cy.get('#pass') .type('iLoveqastudio7'); // Ввели верный пароль
     cy.get('#loginButton') .click(); // Нажал войти
     
     cy.get('#messageHeader') .contains('Такого логина или пароля нет'); // Проверяю, что после авторизации вижу текст
     cy.get('#messageHeader').should('be.visible'); // Текст виден вользователю
     cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
 })
 it('Неверный пароль и верный логин', function () {
    cy.visit('https://login.qa.studio/'); // Зашли на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');

    cy.get('#mail') .type('german@dolnikov.ry'); // Вввели верный логин
    cy.get('#pass') .type('iLoveqastudio1'); // Ввели верный пароль
    cy.get('#loginButton') .click(); // Нажал войти
    
    cy.get('#messageHeader') .contains('Такого логина или пароля нет'); // Проверяю, что после авторизации вижу текст
    cy.get('#messageHeader').should('be.visible'); // Текст виден вользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
})
it('Ошибка валидации', function () {
    cy.visit('https://login.qa.studio/'); // Зашли на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');

    cy.get('#mail') .type('germandolnikov.ru'); // Вввели верный логин
    cy.get('#pass') .type('iLoveqastudio1'); // Ввели верный пароль
    cy.get('#loginButton') .click(); // Нажал войти
    
    cy.get('#messageHeader') .contains('Нужно исправить проблему валидации'); // Проверяю, что после авторизации вижу текст
    cy.get('#messageHeader').should('be.visible'); // Текст виден вользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
})
it('Привидение к строчным буквам в поле логина', function () {
    cy.visit('https://login.qa.studio/'); // Зашли на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');

    cy.get('#mail') .type('GerMan@dolnikov.ru'); // Вввели верный логин
    cy.get('#pass') .type('iLoveqastudio1'); // Ввели верный пароль
    cy.get('#loginButton') .click(); // Нажал войти

    cy.get('#messageHeader') .contains('Такого логина или пароля нет'); // Проверяю, что после авторизации вижу текст
    cy.get('#messageHeader').should('be.visible'); // Текст виден вользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
})
it('Восстановление пароля', function () {
    cy.visit('https://login.qa.studio/'); // Зашли на сайт
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');

    cy.get('#forgotEmailButton') .click(); // Нажал восстановить пароль

    cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввожу логи
    cy.get('#restoreEmailButton').click();

    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail')// Проверяю, что после авторизации вижу текст
    cy.get('#messageHeader').should('be.visible'); // Текст виден вользователю
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден для пользователя
})
})
 
 
 
 
 
 // План
 // + Найти поле логин и ввести верный логин
 // + Найти поле пароль и ввести правильный логин
 // + Найти кнопку войти и нажать на нее
 // Проверить, что авторизация прошла успешно