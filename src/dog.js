//const Animal= require('./animal.js');

//const obj=new Animal('cat');
/**
* @constructor
* @param {string} name - name of the doc
*/
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

// I added this in the dev1 branch
