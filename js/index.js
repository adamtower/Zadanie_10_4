function Telefon(marka, cena, kolor, operator) {
  this.marka = marka;
  this.cena = cena;
  this.kolor = kolor;
  this.operator = operator;

}
Telefon.prototype.printInfo = function() {
  console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", a cena u operatora " + this.operator + " to " + this.cena + ".");
}

Telefon.prototype.promo = function() {
  console.log("Najtaniej można kupić telefon " + this.marka + " u operatora " + this.operator);
}

var iPhone6S = new Telefon("Apple", 2250, "srebrny", "T-mobile");
var GalaxyS7 = new Telefon("Samsung", 3000, "czarny", "Plus");
var HtcOne = new Telefon("HTC", 2500, "złoty", "Play");

iPhone6S.printInfo();
GalaxyS7.printInfo();
HtcOne.printInfo();

iPhone6S.promo();
GalaxyS7.promo();
HtcOne.promo();