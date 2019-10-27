
使用 window.alert() 写入警告框
使用 document.write() 写入 HTML 输出
使用 innerHTML 写入 HTML 元素
使用 console.log() 写入浏览器控制台
所有 JavaScript 标识符对大小写敏感。


<!------------------>
<script>
			function a(){
				document.getElementById('a').innerHTML="123"
			}
		</script>



<p id="a" style="font-size:41px">改变这个的大小</p>
			
			<button onclick="a()">1</button>


在<head></head>定义js 通过fuction 定义 在body赋值

<!------------------>

	
	
	
	
双斜杠 // 或 /* 与 */ 之间的代码被视为注释。

注释会被忽略，不会被执行：

var x = 7;   // 会执行

// var x = 8;   不会执行


<!------------------>
数组的转化
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.write(fruits.toString())  //将数组以字符的形式

添加或删除
fruits.pop() // 将最后一个删除（定义ID就是提取出来）

fruits.push('xxx') //添加xxx到数列（定义ID就是添加并查看数列长度）

fruits.shift() //删除第一个

fruits.unshift('xxx') //添加xxx到第一个

fruits.splice(0,1) //删除特定位置（第一参数是从哪个开始删除，第二参数是删除多少个）

fruits.concat(abc) //fruits跟abc数组合并（也可以数组跟值合并【'1','2'】）

分隔符

document.write(fruits.joins(‘-’)) //用-将数组分开

					
<!------------------>	
