
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

/*下拉框*/
	var select=document.getElementsByClassName('select')[0];
	var ul=select.getElementsByTagName('ul')[0];
	var li=select.getElementsByTagName('li');
	var li1=li[0];
	var li2=li[1];
	ul.onmouseenter=function(){

		li2.style.display='block';
		li1.style.display='block';
		var i=0
		for(i=0;i<2;i++){
			li[i].index=i;
		
			li[i].onmouseenter=function(){		
				li[this.index].style.backgroundColor='#F9F9F9';	
				a=this.index;
				li[this.index].onclick=function(){
					li1.style.display='none';
					li2.style.display='none';
					li[a].style.display='block';
					li[a].style.border='none';
					var rc=ul.removeChild(li[a]);
					li3=ul.getElementsByTagName('li')[0];
					li3.style.border='1px #A9A9A9 solid';
					li3.style.borderTop='none';
					ul.insertBefore(rc,li3);
				}			
			}
			li[i].onmouseleave=function(){			
				li[this.index].style.backgroundColor='white';				
			}			
		}
	}
	ul.onmouseleave=function(){
		li1.style.backgroundColor='white';
		li2.style.backgroundColor='white';
		ul.getElementsByTagName('li')[1].style.display = 'none';
	}
