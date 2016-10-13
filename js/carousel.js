window.onload=function(){

			var oDiv = document.getElementById('container');
			var oPre =oDiv.getElementsByClassName('pre')[0];
		   // var oPre = getByClass(oDiv, 'pre')[0];
		    var oNext = oDiv.getElementsByClassName('next')[0];
		    var oUlBig = getByClass(oDiv, 'content1')[0];
		    var aBigLi = oUlBig.getElementsByTagName('li');
		    var oDivSmall = getByClass(oDiv, 'pointer')[0]
		    var aLiSmall = oDivSmall.getElementsByTagName('li');
		    var now = 0;
		    function tab() {
		        for (var i = 0; i < aLiSmall.length; i++) {
		            aLiSmall[i].className = '';
		        }
		        aLiSmall[now].className = 'thistitle'
		        startMove(oUlBig, 'left', -(now * aBigLi[0].offsetWidth))
    		}


		    for (var i = 0; i < aLiSmall.length; i++) {
		        aLiSmall[i].index = i;
		        aLiSmall[i].onclick = function() {
		            now = this.index;
		            tab();
		        }
		    }

		    oPre.onclick = function() {
		        now--
		        if (now == -1) {
		            now = aBigLi.length-1;
		        }
		        tab();
		    }
		    oNext.onclick = function() {
		        now++
		        if (now == aBigLi.length) {
		            now = 0;
		        }
		        tab();
		    }
		    var timer = setInterval(oNext.onclick, 3000)
		    oDiv.onmouseover = function() {
		        clearInterval(timer)
		    }
		    oDiv.onmouseout = function() {
		        timer = setInterval(oNext.onclick, 3000)
		    }
		}
		function getStyle(obj, name) {
		    if (obj.currentStyle) {
		        return obj.currentStyle[name]
		    } else {
		        return getComputedStyle(obj, false)[name]
		    }
		}

		function getByClass(oParent, nClass) {
		    var eLe = oParent.getElementsByTagName('*');
		    var aRrent = [];
		    for (var i = 0; i < eLe.length; i++) {
		        if (eLe[i].className == nClass) {
		            aRrent.push(eLe[i]);
		        }
		    }
		    return aRrent;
		}
		function startMove(obj, att, add) {
		    clearInterval(obj.timer)
		    obj.timer = setInterval(function() {
		        var cutt = 0;
		       
		            cutt = Math.round(parseInt(getStyle(obj, att)));

		        
		        var speed = (add - cutt) / 8;

		        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		      
		            
		                obj.style[att] = cutt + speed + 'px';
		 
		       

		    }, 30)
		}