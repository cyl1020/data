//封装字典类
function Dictionay() {
  //字典的属性
  this.items = {}

  //字典的方法
  //has方法
  Dictionay.prototype.has = function (key) {
    return this.items.hasOwnProperty(key)
  }

  //set方法
  Dictionay.prototype.set = function (key, value) {
    this.items[key] = value
  }

  //remove方法
  Dictionay.prototype.remove = function (key) {
    //1.判断字典中是否有该key
    if (!this.has(key)) return false

    //2.删除对应的数据
    delete this.items[key]
    return true
  }

  //get方法
  Dictionay.prototype.get = function (key) {
    //1.判断字典中是否有该key
    if (!this.has(key)) return undefined

    //2.获取对应的数据
    return this.items[key]
  }

  //clear方法
  Dictionay.prototype.clear = function () {
    this.items = {}
  }

  //size方法
  Dictionay.prototype.size = function () {
    return Object.keys(this.items).length
  }

  //keys方法
  Dictionay.prototype.keys = function () {
    return Object.keys(this.items)
  }

  //values方法
  Dictionay.prototype.values = function () {
    return Object.values(this.items)
  }
}