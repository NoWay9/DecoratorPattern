function DecorateUser(user) {
  for (var i in user) {
    this[i] = user[i];
  }
}

DecorateUser.prototype.getDiscount = function () {
  var date = new Date();
  var isNight = false;
  var isWorkingDay = true;
  var discount = 0;

  if (date.getHours() >= 23 || date.getHours() < 5) isNight = true;
  if (date.getDay() == 6 || date.getDay() == 7) isWorkingDay = false;

  if (isNight) discount += this.nightDiscount;
  if (!isWorkingDay) discount += this.weekendDiscount;
  discount += this.globalDiscount;
  return discount;
};


DecorateUser.prototype.getBonus = function () {
  var curDate = (new Date()).getTime();
  var lastVisitTime = this.lastVisitDate.getTime();
  var decimal_days = 60 * 60 * 24 * 1000 * 10;
  var result;
  if (lastVisitTime <= curDate && lastVisitTime >= (curDate - decimal_days)) {
    result = curDate - lastVisitTime;

    var bonus = 240 - (result / (1000 * 60 * 60));
    if (bonus > 0) this.bonus += bonus + this.ordersCount;
  }
  return this.bonus;
};

