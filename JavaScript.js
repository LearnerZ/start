
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
