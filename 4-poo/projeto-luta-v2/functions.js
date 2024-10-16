const defaultCharacter = {
    name: '',
    life: 1,
    maxLife: 1,
    attack: 0,
    defense: 0,
}

const createKnight = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 100,
        maxLife: 100,
        attack: 12,
        defense: 8
    }
}

const createSorcerer = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 70,
        maxLife: 70,
        attack: 18,
        defense: 5
    }
}

const createLittleMonster = () => {
    return {
        ...defaultCharacter,
        name: 'Little Monster',
        life: 100,
        maxLife: 100,
        attack: 8,
        defense: 4
    }
}

const createBigMonster = () => {
    return {
        ...defaultCharacter,
        name: 'Big Monster',
        life: 180,
        maxLife: 180,
        attack: 12,
        defense: 4
    }
}

const stage = {
    start(fighter1, fighter2, fighter1Element, fighter2Element) {
        this.fighter1 = fighter1,
            this.fighter2 = fighter2,
            this.fighter1Element = fighter1Element,
            this.fighter2Element = fighter2Element,
            this.fighter1Element.querySelector('.attackBtn').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2))
        this.fighter2Element.querySelector('.attackBtn').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1))
        this.update()
    },
    doAttack(attacking, attacked) {
        if (attacking.life <= 0) {
            log.addMessage("Você morreu, impossível atacar!")
            return
        } else if (attacked.life <= 0) {
            log.addMessage("O alvo está morto")
            return
        }

        attackFactor = Math.random() * 2
        defenseFactor = Math.random() * 2
        actualAttack = attacking.attack * attackFactor
        actualDefense = attacked.defense * defenseFactor

        if (actualAttack > actualDefense) {
            attacked.life -= actualAttack
            attacked.life = attacked.life < 0 ? 0 : attacked.life
            log.addMessage(`O ${attacking.name} causou ${actualAttack.toFixed(2)} ao ${attacked.name}!`)
        } else {
            log.addMessage(`O ${attacked.name} bloqueou o ataque de ${attacking.name}`)
        }

        this.update()
    },
    update() {
        // fighter 1 
        this.fighter1Element.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP`
        charLifePct = this.fighter1.life / this.fighter1.maxLife * 100
        this.fighter1Element.querySelector('.bar').style.width = `${charLifePct}%`
        //fighter 2
        this.fighter2Element.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} HP`
        monsterLifePct = this.fighter2.life / this.fighter2.maxLife * 100
        this.fighter2Element.querySelector('.bar').style.width = `${monsterLifePct}%`
    },
}

const log = {
    msgList: [],
    addMessage(msg) {
        let size = this.msgList.length
        if (msg == this.msgList[size - 1]) {
            return
        }

        this.msgList.push(msg)
        this.render()
    },
    render() {
        const logElement = document.querySelector('.log')
        logElement.innerHTML = ''

        for (let i in this.msgList) {
            logElement.innerHTML += `<li>${this.msgList[i]}</li>`
        }
    }
}