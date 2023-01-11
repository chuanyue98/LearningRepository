现在，让我们用 ethers 编写第一个程序 HelloVitalik：查询 V 神的 ETH 余额，并输出在 console 中。整个程序只需要 6 行，非常简单！
```javascript
import { ethers } from "ethers";
const provider = ethers.getDefaultProvider();
const main = async () => {
    const balance = await provider.getBalance(`vitalik.eth`);
    console.log(`ETH Balance of vitalik: ${ethers.utils.formatEther(balance)} ETH`);
}
main()
```