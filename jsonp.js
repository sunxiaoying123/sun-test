
    function addScriptTag(src) {
        var script = document.createElement('script')
        script.setAttribute('type','text/javascipt')
        script.src = src
        document.body.appendChild(script)
    }

    window.onload = function(){
        //调用远程服务器
        addScriptTag('htttp://loacalhost:2001/myService/sdds?callback=person')
    }

    //回调函数person
    function person(data){
        alert(data.name + 'is a'+ data.sex)
    }



