document.addEventListener('DOMContentLoaded', function() {
    // Управление количеством товаров
    const quantityBtns = document.querySelectorAll('.quantity-btn');
    
    quantityBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const span = this.parentElement.querySelector('span');
            let quantity = parseInt(span.textContent);
            
            if (this.textContent === '+' && quantity < 10) {
                quantity++;
            } else if (this.textContent === '-' && quantity > 1) {
                quantity--;
            }
            
            span.textContent = quantity;
            updateCartTotal();
        });
    });
    
    // Удаление товаров из корзины
    const removeBtns = document.querySelectorAll('.remove-btn');
    
    removeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.cart-item').remove();
            updateCartTotal();
        });
    });
    
    // Обновление общей суммы
    function updateCartTotal() {
        let total = 0;
        const items = document.querySelectorAll('.cart-item');
        
        items.forEach(item => {
            const priceText = item.querySelector('.item-price').textContent;
            const price = parseFloat(priceText.replace(/[^\d.]/g, ''));
            const quantity = parseInt(item.querySelector('.item-quantity span').textContent);
            
            total += price * quantity;
        });
        
        document.querySelector('.summary-row.total span:last-child').textContent = 
            total.toLocaleString('ru-RU') + ' ₽';
        document.querySelector('.summary-row:first-child span:first-child').textContent = 
            Товары ($(items.length));
    }
    
    // Инициализация общей суммы при загрузке
    updateCartTotal();
});
