// Проверка формы перед отправкой
        document.getElementById("login-form").addEventListener("submit", function (e) {
            let errorMessage = "";
            let username = document.getElementById("username").value;
            let password = document.getElementById("password").value;

            // Проверка наличия логина и пароля
            if (username === "" || password === "") {
                errorMessage = "Логин и пароль не могут быть пустыми.";
            }

            // Если есть ошибка, показываем ее и предотвращаем отправку формы
            if (errorMessage !== "") {
                e.preventDefault();
                document.getElementById("error-message").textContent = errorMessage;
            }
        });