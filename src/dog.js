//const Animal= require('./animal.js');

//const obj=new Animal('cat');

class Dog {
    constructor(name) {
        this.name = name;
    }
    bark() {
        //console.log(obj.getName());
        return 'wah wah!!!!!! My name is ' + this.name;
    }
}

// export default Dog;
module.exports = Dog;