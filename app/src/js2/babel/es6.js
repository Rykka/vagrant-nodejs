class BaseElem {
    constructor(name) {
        this.name = name;
        this.elem = document.querySelector(this.name)
    }
}

class MainElem extends BaseElem {

    constructor(name) {
        super(name);
    }
    show(){
        console.log(this.name)
        this.elem.style.display = 'block'
    }

}

var logger = new MainElem('.es6');
logger.show();

