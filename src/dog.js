class Dog{
    constructor(name){
        this.name = name;
    }
    bark(){
        return 'wah wah My name is '+this.name;
    }
}

module.exports = Dog;