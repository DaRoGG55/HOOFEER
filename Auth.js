document.addEventListener('DOMContentLoaded', function() {
    // Переключение между вкладками входа и регистрации
    const tabBtns = document.querySelectorAll('.tab-btn');
    const authForms = document.querySelectorAll('.auth-form');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Удаляем активный класс у всех кнопок и форм
            tabBtns.forEach(b => b.classList.remove('active'));
            authForms.forEach(f => f.classList.remove('active'));
            
            // Добавляем активный класс текущей кнопке и форме
            this.classList.add('active');
            document.getElementById($(tabId)-form).classList.add('active');
        });
    });
    
    // Обработка формы входа
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            
            // Здесь должна быть логика авторизации
            console.log('Вход:', { email, password });
            
            // После успешной авторизации перенаправляем в личный кабинет
            window.location.href = 'account.html';
        });
    }
    
    // Обработка формы регистрации
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('reg-name').value;
            const email = document.getElementById('reg-email').value;
            const password = document.getElementById('reg-password').value;
            const confirm = document.getElementById('reg-confirm').value;
            
            if (password !== confirm) {
                alert('Пароли не совпадают!');
                return;
            }
            
            // Здесь должна быть логика регистрации
            console.log('Регистрация:', { name, email, password });
            
            // После успешной регистрации перенаправляем в личный кабинет
            window.location.href = 'account.html';
        });
    }
});