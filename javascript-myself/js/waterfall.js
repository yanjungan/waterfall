window.onload=function(){
	waterfall('main','box');
	//仿照数据库传来的JSON数据
	var dataInt={'data':[{"src":'23.jpg'},{"src":'24.jpg'},{"src":'25.jpg'},{"src":'26.jpg'},{"src":'27.jpg'}]}
	window.onscroll=function(){
		if (checkScrollSlide) {//如果为true,就进行图片加载
			var oParent=document.getElementById('main');
			//将数据块渲染到页面的尾部
			for(var i=0;i<dataInt.data.length;i++){
				var oBox=document.createElement('div');
				oBox.className='box';
				oParent.appendChild(oBox);
				var oPic=document.createElement('div');
				oPic.className='pic';
				oBox.appendChild(oPic);
				var oImg=document.createElement('img');
				oImg.src="images/"+dataInt.data[i].src;
				oPic.appendChild(oImg);
			}
			waterfall('main','box');
		}
	}
}

function waterfall(parent,box){
	//将main下所有class为box的元素取出来
	var oParent=document.getElementById(parent);
	var oBoxs=getByClass(oParent,box);
	//计算整个页面显示的列数(页面的宽/box的宽)
	var oBoxw=oBoxs[0].offsetWidth;//取其中一个box计算它的宽度
	var cols=Math.floor(document.documentElement.clientWidth/oBoxw);/*Math.floor()取整,document.documentElement.clientWidth计算页面的宽*/
	//设置main的宽
	oParent.style.cssText='width:'+oBoxw*cols+'px;margin:0 auto';//可以直接在js中设置样式
	var hArr=[];//存放每一列高度的数组
	for(var i=0;i<oBoxs.length;i++){
		if (i<cols) {//小于列数的时候。第一列
			hArr.push(oBoxs[i].offsetHeight);//计算每一个盒子的高度
		}else{//到了第二行
			var minH=Math.min.apply(null,hArr);//注意Math.min()只能计算几个值得最小值,不能计算数组的最小值,但是通过apply()能劫持另外一个对象的方法，继承另外一个对象的属性
			//要将第二行的第一张图片加载第一行中最矮的图片下边
			var index=getMinhIndex(hArr,minH);
			oBoxs[i].style.position='absolute';
			oBoxs[i].style.top=minH+'px';
			oBoxs[i].style.left=oBoxw*index+'px';//将第二行的第一张图片放在最矮的图片下面了。
			hArr[index]+=oBoxs[i].offsetHeight;//每次把下面的图片加上去之后，要改变高度，不然，下面所有的图片都加在第一行最矮的图片下面了，发生了盒子重叠。
		}
	}

}

//根据class获取元素
function getByClass(parent,clsName){
	var boxArr = new Array();
	var oElements=parent.getElementsByTagName('*');//获取父元素下的所有子标签,是一个数组
	for(var i=0;i<oElements.length;i++){
		if(oElements[i].className==clsName){//将所有的className与要找的类名进行匹配
			boxArr.push(oElements[i]);
		}
	}	
	return boxArr;
}

//查找第一行中最矮的图片的下标，索引
function getMinhIndex(arr,val){
	for(var i in arr){
		if (arr[i]==val) {
			return i;
		}	
	}
}
//检测是否具备了滚条加载数据块的条件
function checkScrollSlide(){
	var oParent=document.getElementById('main');
	var oBoxs=getByClass(oParent,'box');
	//规定当最后一张图片的一半进入浏览器窗口时，就进行加载接下来的图片
	var lastBoxH=oBoxs[oBoxs.length-1].offsetTop+Math.floor(oBoxs[oBoxs.length-1].offsetHeight/2);//oBoxs.length-1表示最后一个盒子
	//页面滚走的距离
	var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;//标准模式和混杂模式
	//浏览器的高度
	var height=document.body.clientHeight||document.documentElement.clientHeight;

	return (lastBoxH<scrollTop+height)?true:false;//如果为true,就进行图片加载
}