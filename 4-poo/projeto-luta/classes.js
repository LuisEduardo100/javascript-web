class Character {
    _life = 1;
    maxLife = 1;
    attack = 0;
    defense = 0;

    constructor(name) {
        this.name = name;
    }

    get life() {
        return this._life;
    }

    set life(newLife) {
        return this._life = newLife < 0 ? 0 : newLife
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
    constructor(fighter1, fighter2, elementF1, elementF2, log) {
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
        this.elementF1 = elementF1;
        this.elementF2 = elementF2;
        this.log = log;
    }

    start() {
        this.update()

        this.elementF1.querySelector('.attackBtn').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2))
        this.elementF2.querySelector('.attackBtn').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1))
    }

    update() {
        // Fighter 1 
        this.elementF1.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life} HP`
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100
        this.elementF1.querySelector('.lifebar .bar').style.width = `${f1Pct}%`

        // Fighter 2 
        this.elementF2.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life} HP`
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100
        this.elementF2.querySelector('.lifebar .bar').style.width = `${f2Pct}%`
    }

    doAttack(attacking, attacked) {
        if (attacked.life <= 0) {
            this.log.addMessage(`O alvo está morto`)
            return
        } else if (attacking.life <= 0) {
            this.log.addMessage(`Você morreu, logo não pode atacar.`)
            return
        }

        let attackFactor = Math.random() * 2
        let defenseFactor = Math.random() * 2

        let actualAttack = attacking.attack * attackFactor
        let actualDefense = attacked.defense * defenseFactor

        if (actualAttack > actualDefense) {
            attacked.life -= actualAttack
            this.log.addMessage(`${attacking.name} causou ${actualAttack} ao ${attacked.name}!`)
        } else {
            this.log.addMessage(`${attacked.name} defendeu o ataque!`)
        }

        this.update()
    }
}

class Log {
    constructor(elementUl) {
        this.elementUl = elementUl
        this.list = []
    }

    addMessage(msg) {
        let size = this.list.length
        
        if (msg == this.list[size - 1]){
            return
        }

        this.list.push(msg)
        this.render()
    }

    render() {
        this.elementUl.innerHTML = ''

        for (let i in this.list) {
            this.elementUl.innerHTML += `<li>${this.list[i]}</li>`
        }
    }
}


