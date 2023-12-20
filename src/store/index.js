import { makeAutoObservable } from "mobx"

class Counterstore {
    count = 0
    show = true
    isAuth = false
    
    constructor() {
        makeAutoObservable(this)
    }

    increase() {
        return this.count++
    }

    decrease() {
       return this.count--
    }

    increment(numss) {
        this.count = this.count + numss
    }

    toggle() {
        this.show = !this.show
    }
    login() {
        this.isAuth = true
    }
    logout() {
        this.isAuth = false
    }
}

const counterStore = new Counterstore();

export default counterStore