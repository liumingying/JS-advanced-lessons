  //数组原型方法（迭代-非破坏性-归约方法）

  //内置对象的拓展
  Array.prototype.filterspace=function(){
    var arr1 = this;
    var result = arr1.map(function(value){
        return value.trim();
    });
    return result;
}