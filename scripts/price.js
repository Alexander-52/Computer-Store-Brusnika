// Обработчик изменений в форме
        document.getElementById("purchase-form").addEventListener("input", function () {
            const quantity = parseInt(document.getElementById("quantity").value);
            const delivery = document.getElementById("delivery").value;

            let price = 100000; // Базовая цена

            // Изменение цены в зависимости от количества
            price = price * quantity;

            // Добавление стоимости доставки
            if (delivery === "express") {
                price += 1500; // Стоимость экспресс-доставки
            } else if (delivery === "pickup") {
                // Самовывоз не влияет на цену
                price = price;
            }

            // Обновление итоговой цены
            document.getElementById("total-price").textContent = price.toLocaleString() + "₽";
        });