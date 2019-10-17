class formVali{
    constructor(opt){
        this.nodeList = [];
        this.$data = {};
        let defaultOpt = {
            target:this,
            rules:[]
        }
    }
    eachEle(){
        this.nodeList = document.querySelectorAll("[mvf]");
    }
    getVal(this){
        let fn = new Function("data",`return data.${path}`);
        return fn(this.$data);
    }
}