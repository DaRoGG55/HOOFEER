const addToCartButtons = document.querySelectorAll('.add-to-cart');
if (addToCartButtons.length > 0) { // Проверяем, есть ли кнопки
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productId = productCard.dataset.id || Math.random().toString(36).substr(2, 9);
            const productName = productCard.querySelector('h3').textContent;
            const productPrice = parseFloat(productCard.querySelector('.price').textContent.replace(/[^\d.]/g, ''));
            const productImage = productCard.querySelector('img').src;
            
            addToCart({
                id: productId,
                name: productName,
                price: productPrice,
                image: productImage,
                quantity: 1
            });
            
            updateCartCounter();
            showAddedToCartMessage(productName);
        });
    });
}

// Функция добавления в корзину
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Проверяем, есть ли уже такой товар в корзине
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push(product);
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Функция обновления счетчика корзины
function updateCartCounter() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    const cartCounter = document.querySelector('.cart-counter');
    if (cartCounter) {
        cartCounter.textContent = totalItems;
        cartCounter.style.display = totalItems > 0 ? 'inline-block' : 'none';
    }
}

// Функция показа сообщения о добавлении
function showAddedToCartMessage(productName) {
    const message = document.createElement('div');
    message.className = 'cart-message';
    message.textContent = `${productName} добавлен в корзину`; // Исправлено на правильный синтаксис шаблонной строки
    document.body.appendChild(message);
    setTimeout(() => {
        message.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        message.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(message);
        }, 300);
    }, 3000);
}
