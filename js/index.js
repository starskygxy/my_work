
/*	头部点亮星*/
	var start=document.getElementById('start');
	var img=start.getElementsByTagName('img')[0];

	start.onmouseover=function(){
		img.src="image/start1.JPG";
	}
	start.onmouseout=function(){
		img.src="image/start2.JPG";
	}

	/*左侧隐藏菜单*/
	var oP=document.getElementsByClassName('left_nav');
	var oD=document.getElementsByClassName('float_hiden');
	for(var i=0;i<oP.length;i++){
			oP[i].index=i;
			oD[i].index=i;
			
			var time2=null;
			var time1=null;
			var that;
		oP[i].onmouseenter=function(){
			clearInterval(time1);
			clearInterval(time2);
			if(that!=undefined){
			oD[that].style.display='none';
			oP[that].style.backgroundColor='#fafafa';	
		}
			oD[this.index].style.display='block';
			oP[this.index].style.backgroundColor='white';
			
		}
		oP[i].onmouseleave=function(){	
			that=this.index;
			var timer1=null;
			time1=setInterval(function(){
			oD[that].style.display='none';
			oP[that].style.backgroundColor='#fafafa';				
			},500);
			
			
		}

		oD[i].onmouseenter=function(){
			clearInterval(time1);
			clearInterval(time2);
			oD[this.index].style.display='block';
		
		}
		oD[i].onmouseleave=function(){
			var that=this.index;
			time2=setInterval(function(){
			oD[that].style.display='none';
			},500);
		
	}			

	}

