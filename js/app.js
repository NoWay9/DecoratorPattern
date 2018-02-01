var someUser = new User();
var decoratorUser = new DecorateUser(someUser);
console.log('decorate User', decoratorUser);
console.log('discount', decoratorUser.getDiscount());
console.log('bonus', decoratorUser.getBonus());
