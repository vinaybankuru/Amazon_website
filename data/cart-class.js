class Cart {
    cartItem = undefined;
    localStorageKey = undefined;
    loadFromStorage(){
        this.cartItem = JSON.parse(localStorage.getItem(this.localStorageKey));

        if(!this.cartItem) {
        this.cartItem=[{productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity: 2,
            deliveryOptionId: '1'
            }, {
            productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
            quantity:1,
            deliveryOptionId: '2'
        }];   

        }
    }
    saveToStorage(){
        localStorage.setItem(this.localStorageKey, JSON.stringify(this.cartItem));
    }
    addToCart(productId){
    let matchingItem;
        this.cartItem.forEach((item) => {
            if(productId === item.productId){
            matchingItem = item;
            }
        });
        if(matchingItem){
            matchingItem.quantity += 1;
        }else{
            this.cartItem.push({
            productId : productId,
            quantity : 1,
            deliveryOptionId: '1'
        });
        }
        this.saveToStorage();
    }
    removeFromCart(productId){
        const newCart = [];

        this.cartItem.forEach((cartItem) => {
            if(cartItem.productId !== productId){
                newCart.push(cartItem);
            }
        }); 

        this.cartItem = newCart;
        this.saveToStorage();
    }
    updateDeliveryOption(productId, deliveryOptionId){
    let matchingItem;
    this.cartItem.forEach((item) => {
        if(productId === item.productId){
        matchingItem = item;
        }
        });

        matchingItem.deliveryOptionId = deliveryOptionId;

        this.saveToStorage();
    }
}


const cart = new Cart();
const bussinessCart= new Cart();
cart.localStorageKey = 'cart-oops';
bussinessCart.localStorageKey = 'cart-bussiness';

cart.loadFromStorage();
bussinessCart.loadFromStorage();