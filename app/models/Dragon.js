export default class Dragon {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.imgUrl = data.imgUrl;
    this.maxHp = data.maxHP;
    this.currentHp = data.currentHP;
  }
}
