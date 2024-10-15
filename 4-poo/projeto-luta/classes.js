class Character {
    _life = 1; 
    maxLife = this._life;
    attack = 0;
    defense = 0;

    constructor(name) {
        this.name = name;
    }

    get life() {
        return this._life;
    }

    set life(newLife) {
        if (newLife < 0) {
            this._life = 0
        } else if (newLife > 0 && newLife <= this.maxLife) {
            this._life = newLife
        } else {
            return this._life = this.maxLife
        }
    }
}

class Knight extends Character {
    constructor(name) {
        super(name);
        this.attack = 10;
        this.defense = 8;
        this.life = 100;
        this.maxLife = this.life;
    }
}


class Sorcerer extends Character {
    constructor(name) {
        super(name);
        this.attack = 15;
        this.defense = 4;
        this.life = 80;
        this.maxLife = this.life;
    }
}

class LittleMonster extends Character {
    constructor() {
        super('Little Monster');
        this.attack = 4;
        this.defense = 4; 
        this.life = 40;
        this.maxLife = this.life;
    }
}

class BigMonster extends Character {
    constructor() {
        super('Big Monster');
        this.attack = 10;
        this.defense = 10; 
        this.life = 120;
        this.maxLife = this.life;
    }
}

class Stage {
    constructor(fighter1, fighter2, elementF1, elementF2) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.elementF1 = elementF1;
        this.elementF2 = elementF2;
    }
    
    start() {
        this.update()

        this.elementF1.querySelector('.attackBtn').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2))
        this.elementF2.querySelector('.attackBtn').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1))
    }

    update() {
        // Fighter 1 
        this.elementF1.querySelector('.name').innerHTML = this.fighter1.name
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100
        this.elementF1.querySelector('.lifebar .bar').style.width = `${f1Pct}%`
        
        // Fighter 2 
        this.elementF2.querySelector('.name').innerHTML = this.fighter2.name
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100
        this.elementF2.querySelector('.lifebar .bar').style.width = `${f2Pct}%`
    }

    doAttack(attacking, attacked) {
        console.log(`O ${attacking.name} está atacando o ${attacked.name}`)

        this.update()
    }
}