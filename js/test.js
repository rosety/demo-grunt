/**
 * Created by RoseTong on 15/11/10.
 */

var msg='hello world!';

var Person={
    name:"Tony",
    age:"18",
    description: function(){
        var rs=this.name+"的年龄是"+this.age;
        return rs;
    }
}
var p=Person;
console.log(p.description())