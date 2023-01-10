在 solidity 中，import 关键字用于导入其他合约中的接口。这样做的目的是为了能够在当前合约中调用其他合约的函数，并通过函数的返回值来获取其他合约的信息。例如，可以使用 import 导入一个公共合约的接口，然后在当前合约中调用该合约的某个函数来获取公共信息。

import 并不能导入其他合约中的私有变量、全局符号或内部变量。





import 可以导入文件中的合约、纯函数、结构体类型等全局符号。例如，你可以使用 import 导入一个文件中定义的合约，或者导入文件中的纯函数，或者导入文件中的结构体类型。

例如，如果你想导入文件 "./Yeye.sol" 中定义的合约 "Yeye"，可以使用以下写法：

```solidity
import "./Yeye.sol";
contract MyContract {
  Yeye yeye;
  // ...
}
```

如果你想导入文件 "./Yeye.sol" 中定义的纯函数 "foo"，可以使用以下写法：

```solidity
import "./Yeye.sol";
function myFunction() public view {
  uint result = foo();
  // ...
}
```

如果你想导入文件 "./Yeye.sol" 中定义的结构体类型 "Bar"，可以使用以下写法：

```solidity
import "./Yeye.sol";
Bar bar;
// ...
```







.setX (x, value=50) 和 .setX {value: 50}(x) 在语法上是不同的。

.setX (x, value=50) 使用的是函数调用语法，其中 value=50 是函数参数的默认值。

.setX {value: 50}(x) 使用的是结构体语法，其中 value: 50 是结构体中的一个字段，后面的 (x) 是调用函数。

所以，.setX (x, value=50) 和 .setX {value: 50}(x) 是有区别的。





delegatecall 是一个 Solidity 内置函数，它允许一个合约调用另一个合约的函数，其中调用的合约称为代理合约，被调用的合约称为逻辑合约。





1. try-catch 可以捕获什么异常？

revert()	require()	assert()

2. 异常返回值类型为 bytes 的是：

revert()	require()	assert()

3. try-catch 捕获到异常后是否会使 try-catch 所在的方法调用失败？

不会

4. try 代码块内的 revert 是否会被 catch 本身捕获？

不会





Contract x = new Contract {value: _value}(params)，表达式中 value 代表什么？

当前合约发送给新创建合约的 ETH







1. Solidity 中 import 的作用是：

导入其他合约中的全局符号

2. import 导入文件的来源可以是：

源文件网址	npm 的目录	本地文件

3. 以下 import 写法错误的是：

~~import from"./Yeye.sol";~~

import {Yeye} from "./Yeye.sol";

import {Yeye as Wowo} from "./Yeye.sol";

import * as Wowo from "./Yeye.sol";

4. import 导入文件中的全局符号可以单独指定其中的：

合约	纯函数	结构体类型

5. 被导入文件中的全局符号想要被其他合约单独导入，应该怎么编写？

与合约并列在文件结构中