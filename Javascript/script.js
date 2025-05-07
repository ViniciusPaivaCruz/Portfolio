/*Icons das Habilidades*/
function icons(){
    function html5_icon(){
        var html5 = document.querySelector('.i1')
    
        html5.addEventListener('mouseover', function(){
            html5.style.width = '200px'
            html5.style.height = '200px'
        html5.addEventListener('mouseout', function(){
            html5.style.width = '150px'
            html5.style.height = '150px'
        })
        })    
    }
    html5_icon();
    
    
    function css3_icon(){
        var css3 = document.querySelector('.i2')
        css3.addEventListener('mouseover', function(){
            css3.style.width = '200px'
            css3.style.height = '200px'
        css3.addEventListener('mouseout', function(){
            css3.style.width = '150px'
            css3.style.height = '150px'
        })    
        })
    }
    css3_icon();
    
    
    function js_icon(){
        var js = document.querySelector('.i3')
        js.addEventListener('mouseover', function(){
            js.style.width = '200px'
            js.style.height = '200px'
        js.addEventListener('mouseout', function(){
            js.style.width = '150px'
            js.style.height = '150px'
        })
        })
    }
    js_icon();
    
    
    function react_icon(){
        var react = document.querySelector('.i4')
        react.addEventListener('mouseover', function(){
            react.style.width = '200px'
            react.style.height = '200px'
        react.addEventListener('mouseout', function(){
            react.style.width = '150px'
            react.style.height = '150px'
        })    
        })
    }
    react_icon();
    
    
    function python_icon(){
        var python = document.querySelector('.i5')
        python.addEventListener('mouseover', function(){
            python.style.width = '200px'
            python.style.height = '200px'
        python.addEventListener('mouseout', function(){
            python.style.width = '150px'
            python.style.height = '150px'
        })
        })
    }
    python_icon();
    
    
    function php_icon(){
        var php = document.querySelector('.i6')
        php.addEventListener('mouseover', function(){
            php.style.width = '200px'
            php.style.height = '200px'
        php.addEventListener('mouseout', function(){
            php.style.width = '150px'
            php.style.height = '150px'
        })
        })
    }
    php_icon();
}
icons();

document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu ul");

    hamburger.addEventListener("click", function() {
        menu.classList.toggle("active");
    });
});