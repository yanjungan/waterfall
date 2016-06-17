# waterfall
瀑布流布局
## 学到的要点：
* 1.$(window).width() 浏览器视窗的宽度
outerWidth() = padding+border+width;
width() = width
* 2.$.inArray(所找元素,数组) 该方法用于获取元素的索引
* 3.jQuery遍历的函数each $boxs.each(function(index,value){
}); index 索引值，value对应的值
* 4.eq(n),从结果集中选取第n的元素
* 5.$.inArray(value,arr)工具函数，用来判断某个值在数组中的索引
* 6.each遍历的value是DOM对象。将value DOM对象转换为jQuery对象才能使用其方法 ：$(value)
jQuery的$.inArray()方法直接可以得到一个数在数组中的索引
$(dom) 将Dom对象转换成jQuery对象
each遍历的value是DOM对象。将value DOM对象转换为jQuery对象才能使用其方法 ：$(value)
* 7. apply函数：可以改变函数或方法中this的指向。如：var minH=Math.min.apply(null,hArr); 注意Math.min()只能计算几个值得最小值,不能计算数组的最小值,但是通过apply()能劫持另外一个对象的方法，继承另外一个对象的属性

## JS原生方式和CSS3方式实现瀑布流比较：
* 1.JS原生方式：1.需要计算，列数=浏览器框口宽度/图片宽度，图片定位是根据每一列数据块的高度计算接下来图片的位置；2.图片排序是按图片计算的位置横向排列，位置是计算出来的，比较规范。
* 2.CSS3方式：1.不需要计算，浏览器自动计算，只需设置列宽，性能高，如：-webkit-column-width:202px;2.缺点：a.列宽随着浏览器窗口大小进行改变，用户体验不好；b.图片排序按照垂直顺序排列，打乱图片的显示顺序。
* #main{
	-webkit-column-width:202px;/* 定义整个页面宽 */
	-moz-column-width:202px;/* -webkit(chrome,safari)、-moz(firefox)、-o(opera)、-ms(IE)分别是针对不同浏览器引擎的 */
	-o-column-width:202px;
	-ms-column-width:202px;
	-webkit-column-rule:2px dashed #F00;
	-moz-column-rule:2px dashed #F00;
	-o-column-rule:2px dashed #F00;
	-ms-column-rule:2px dashed #F00;/* 给每一列加上灰色虚线 */
	-webkit-column-gap:5px;/* 定义列与列之间的距离 */
	-moz-column-gap:5px;
	-o-column-gap:5px;
	-ms-column-gap:5px;
}

