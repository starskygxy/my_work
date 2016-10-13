
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
			oP[i].timer=null;
		oP[i].onmouseover=function(){
			oD[this.index].style.display='block';
			oP[this.index].style.backgroundColor='white';
			
		}
		oP[i].onmouseout=function(){	
			var that=this.index;

			oD[that].style.display='none';
			oP[that].style.backgroundColor='#fafafa'
			
		}

		oD[i].onmouseover=function(){
			oD[this.index].style.display='block';
		
		}
		oD[i].onmouseout=function(){

			oD[this.index].style.display='none';
	}			

	}

