
function User() {
  this.lastVisitDate = new Date(2018, 0, 30, 16, 39, 18);
  this.globalDiscount = Math.floor(Math.random() * 11);
  this.nightDiscount = Math.floor(Math.random() * 15);
  this.weekendDiscount = Math.floor(Math.random() * 25);
  this.ordersCount = Math.floor(Math.random() * 101);
  this.ordersTotalPrice = Math.floor(Math.random() * 1001);
  this.bonus = 0;
}
