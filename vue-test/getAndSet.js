var book = {}
var name = ''
Object.defineProperty(book,'name',{
    set:function (value){
        name = value
        console.log('你取了一个书名叫做'+ value)
    },
    get:function(){
        return `<<${name}>>`
    }
})
book.name = 'vue权威指南'
console.log(book.name)