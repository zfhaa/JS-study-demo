function Charactor(name, attack, defence, hp, crit) {
    this.name = name;
    this.attack = attack;
    this.defence = defence;
    this.hp = hp;
    this.crit = crit;
    /**
     * 函数，打印出英雄和怪兽信息
     */
    this.print = function () {
        console.log(`${this.name}\t生命：${this.hp}\t攻击：${this.attack}\t防御：${this.defence}\t暴击率：${this.crit}%`);
    }
    /**
     * 攻击，ctor被攻击对象
     */
    this.hit = function (ctor) {
        var damage = this.attack - ctor.defence;
        //判断是否有暴击
        var rate = this.crit / 100;
        var rad =Math.random();
        var isCrit = false;//是否暴击
        if(rad<=rate){
             isCrit=true;
            //有暴击
            damage *=2;//伤害翻倍
        }
        //伤害至少为1
        if(this.attack - ctor.defence<0){
            damage=1;
        }
        ctor.hp-=damage;
        if(ctor.hp<0){
            ctor.hp=0;//血量至少为0
        }
        console.log(`【${isCrit?"暴击！":""}】【${this.name}】攻击【${ctor.name}】,造成【${damage}】点伤害，对方血量为:【${ctor.hp}】`);
        //对方是否死亡
        return ctor.hp===0;
    }
}
var hero = new Charactor("阿珂", 100, 20, 300, 50);
hero.print();
console.log("VS");
var monster = new Charactor("亚瑟", 30, 85, 600, 4);
monster.print();
hero.hit(monster);
monster.hit(hero);

while(true){
    if(hero.hit(monster)){

        break;
    }
    if(monster.hit(hero)){
        
        break;

    }
   
}

console.log("=============================================")
hero.hit(monster);
monster.hit(hero);
console.log("游戏结束");