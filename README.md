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
