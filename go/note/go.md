# Golang的语言特点

1. Go语言保证了既能到达静态编译语言的安全和性能，又达到了动态语言开发维护的高效率  ,  使用一个表达式来形容Go语言：Go=C+Python,  说明Go语言既有C静态语言程序的运行速度，又能达到Python动态语言的快速开发。
2. 引入***包***的概念，用于组织程序结构，Go语言的一个文件都要归属于一个包，而不能单独存在。
3. 垃圾回收机制，内存自动回收，不需开发人员管理
4. **天然并发** (重要特点)  

# GO程序开发的注意事项

1.   Go源文件以 "go"  为扩展名。 
2. Go应用程序的执行入口是main()函数。
3.    Go语言严格区分大小写。
4.    Go方法由一条条语句构成，每个语句后不需要分号(Go语言会在每行后自动加分号)，这也体显出他的*简洁性*  
5. Go编译器是一行行进行编译的，因此我们一行就写一条语句，不能把多条语句写在同一个，否则报错
6. go语言定义的变量或者import的包如果没有使用到，代码不能编译通过。
7. 大括号都是成对出现的，缺一不可。

## [Golang 官方编程指南](https://golang.org)

## [Golang官方标准库API文档](https://golang.org/pkg)

## [Golang 中文网 在线标准库文档](https://studygolang.com/pkgdoc)

# 第一个Golang程序

```go
package main
import "fmt"

func main(){
    fmt.Println("Hello,World")
}
```

# 1.变量

不论是使用哪种高级程序语言编写程序,变量都是其程序的基本组成单位

## 1.1 Golang变量使用的三种方式

1. 指定变量类型，声明后若不赋值，使用默认值

   ```go
   package main
   import "fmt"
   
   func main(){
   	var i int
       fmt.Print(i) //0
   }
   ```

2. 根据值自行判定变量类型(类型推导)

   ```go
   var num  = 10.11
   fmt.Printf("%T", num)
   //%T 查看变量类型
   ```

3. 省略var, 注意 :=左侧的变量不应该是已经声明过的，否则会导致编译错误

   ```go
   name :="tom"
   ```

多变量声明

```go
n1,name,n3 :=100,"tom",888
```

如何一次性声明全局变量

```go
var(
    n3 = 300
    n4 = 900
    name =  "tom"
)
```

变量在同一个作用域内不能重名

```go
var i int  = 10 x
i := 40 x
```

## 1.2程序中+号的使用

1. 当左右两边都是数值型时，则做加法运算
2. 当左右两边都是字符串，则做字符串拼接  

## 1.3基本数据类型和string的转换

1. fmt.Sprintf("%参数",  表达式)

   ```go
   func main(){
       var num1 int = 99
       var num2 float64 = 23.456
       var b bool = true
       var ch byte = 'h'
       var str string
       
       str = fmt.Sprintf("%d",num1)
       fmt.Printf("type %T str=%q\n",str,str)
       
        str = fmt.Sprintf("%f",num2)
       fmt.Printf("type %T str=%q\n",str,str)
       
        str = fmt.Sprintf("%t",b)
       fmt.Printf("type %T str=%q\n",str,str)
       
        str = fmt.Sprintf("%c",ch)
       fmt.Printf("type %T str=%q\n",str,str)
   }
   ```

2. 使用strconv  包的函数

   ```go
   var num1 int = 99
   var num2 float64 = 23.456
   var b bool = true
   
   str = strconv.FormatInt(int64(num1),10)
   fmt.Printf("type %T str=%q\n",str,str)
   
   // 'f':格式 10:表示小数位保留10位 64表示这个小数是float64
   str = strconv.FormatFloat(num2,'f',10,64)
   fmt.Printf("type %T str=%q\n",str,str)
   
   str = strconv.FormatBool(b)
   fmt.Printf("type %T str=%q\n",str,str)
   ```

## 1.4 指针

1. 获取变量的地址，用&

   ```go
   func main(){
       var i int = 10
       fmt.Println("i的地址："+&i)
   }
   ```

2. 指针变量存的是一个地址，这个地址指向的空间存的才是值

   ```go
   func main(){
       var i int = 10
       var ptr *int  = &i
       //ptr是一个指针变量
       //ptr的类型是*int
       //ptr本身的值是&i
       fmt.Printf("ptr=%v\n",ptr)
   }
   ```

3. 获取指针类型所指向的值，使用：*

   ```go
   func main(){
       var i int = 10
       var ptr *int  = &i
       fmt.Printf("ptr=%v\n",ptr)
       fmt.Printf("ptr的地址=%v",&ptr)
       fmt.Printf("ptr指向的值=%v\n",*ptr)
   }
   ```

**go语言明确不支持三元运算符**

# 2 函数，包

## 1. 函数
函数的基本语法

   ```go
   fun 函数名 (形参列表) (返回值列表) {
       执行语句...
       return 返回值列表
   }
   //返回值可以没有
   ```

## 2.包 
1. go的每一个文件都是属于一个包的，也就是说go是以包的形式来管理文件和项目目录结构的

2. 包的三大作用

   1.   区分相同名字的函数、变量等标识符  
   2.   当程序文件很多时,可以很好的管理项目  
   3.   控制函数、变量等访问范围，即作用域  

3. 包的相关说明

   1. 打包基本语法

      package包名

   2. 引入包的基本语法

      improt "包的路径"

4. 包使用的注意事项

   1.  在给一个文件打包时，该包对应一个文件夹，比如utils 文件夹对应的包名就是utils,文件的包名通常和文件所在的文件夹名一致，一般为小写字母

      utils

      ```go
      package utils
      import "fmt"
      //为了让其他包的文件使用Cal函数，需要将c大写，类似于其他语言中的public
      func Cal(n1 float64,n2 float64,operator byte) float64{
          var res float64
          switch operator{
          	case '+' :
              	res = n1+n2
              case '-' :
              	res = n1-n2
              case '*' :
              	res = n1*n2
              case '/' :
              	res = n1/n2
          	default :
              	fmt.Println("操作符号错误..")
          }
          return res
      }
      ```

      main

      ```go
      package main
      import (
          "fmt"
          "code/utils"
      )
      
      func main() {
          var n1 float64 = 1.2
          var n2 float64 = 1.3
          var operator byte = '-'
          result := utils.Cal(n1,n2,operator)
          fmt.Println(result)
      }
      ```

      

   2.    当一个文件要使用其它包函数或变量时，需要先引入对应的包  

   3. 在import 包时，路径从 $GOPATH 的 src 下开始，不用带src, 编译器会自动从src下开始引入

   4. 为了让其它包的文件，可以访问到本包的函数，则该函数名的首字母需要大写，类似其它语言的public,这样才能跨包访问。

   5. 在访问其它包函数，变量时，其语法是 包名.函数名， 比如这里的 main.go文件中

   6.    如果包名较长，Go支持给包取别名， 注意细节：取别名后，原来的包名就不能使用了  

   7. 如果你要编译成一个可执行程序文件，就需要将这个包声明为 main, 即 packagemain.这个就是一个语法规范，如果你是写一个库 ，包名可以自定义  



## 
