class Resident {
    name = "";
    address = "";
    rent = 0;
    isAvailable = true;
    constructor(name, address, rent, isAvailable) {
        this.name = name;
        this.address = address;
        this.rent = rent;
        this.isAvailable = isAvailable;
    }
    
    getName() {
        return this.name;
    }

    getAddress() {
        return this.address;
    }

    getRent() {
        return this.rent;
    }

    setRent() {
        this.rent = rent;
    }

    getIsAvailable() {

    }
}


class House extends Resident {
    houseNumber = "";
    houseArea = "";
    constructor(name, address, rent, isAvailable, houseNumber, houseArea) {
        this.name = name;
        this.address = address;
        this.rent = rent;
        this.isAvailable = isAvailable;
        this.houseNumber = houseNumber;
        this.houseArea = houseArea;
    }
    getName() {
        return this.name;
    }

    getAddress() {
        return this.address;
    }

    getRent() {
        return this.rent;
    }

    setRent() {
        this.rent = rent;
    }

    getIsAvailable() {
        
    }
}
    
