class Storage {
    #items;
    constructor(items) {
        this.#items = items
    }
    getItems() {
        return this.#items
    }
        

    addItem(newItem) {
        this.#items.push(newItem)
    }
    
    removeItem(itemToRemove) {
        if (this.#items.includes(itemToRemove)) {
            let toRemowe = this.#items.indexOf(itemToRemove)
            this.#items.splice(toRemowe, 1)
        }
        
    }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); 

storage.addItem("Droid");
console.log(storage.getItems()); 

storage.removeItem("Prolonger");
console.log(storage.getItems()); 

storage.removeItem("Scaner");
console.log(storage.getItems()); 