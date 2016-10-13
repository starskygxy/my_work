		/*正则表达式校验输入框*/
		var oSubmit=document.getElementById('submit');
		oSubmit.onclick=function(){
			return checkName()&&checkPwd();
			
		};
			function checkName(){
			var name=document.getElementById('userName');
			var re=/^\w{6,16}$/i;
			
			if(name.value.length==0){
				alert('用户名不能为空');
				return false;
			}else if(re.test(name.value)){
				return true;
			}else{
				alert('用户名为6~16位');
				name.focus();
				return false;
			}
		}

	function checkPwd(){
			var pwd=document.getElementById('userPwd');
			var re=/^\w{6,}$/i;

			if(pwd.value.length==0){
				alert('密码不能为空');
				return false;
			}else if(re.test(pwd.value)){
				return true;
			}else{
				alert('密码不能小于六位');
				pwd.select();
				return false;
			}
		}
	function checkFrom(){
		return checkName()&&checkPwd();
	}

/*	cookie
*/	function setCookie(name,value,idate){
			var oDay=new Date();
	  		oDay.setDate(oDay.getDate()+idate);
	  		document.cookie=name+"="+value+";expires="+oDay;
	  	
	  		//alert(document.cookie);
	}
	
	function getCookie(name){
		var arr=document.cookie.split('; ');
		var i=0;
		for(i=0;i<arr.length;i++){

			var arr2=arr[i].split('=');
			if(arr2[0]==name){
				return arr2[1];
			}
		}
			return null;
	}

	function removeCookie(name){
		setCookie(name,'1',-2);
	}

	
	var oUser=document.getElementsByName('userName')[0];
	oForm.onsubmit=function(){
		setCookie('user',oUser.value,7);
	}
	oUser.value=getCookie('user');

