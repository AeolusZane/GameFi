# A GameFi Project
Tags: `hardhat` `ethers.js` `solidity` `typescript` `react` `react-native` `web3.js`

## deploy

- `pnpm install`
- `pnpm run node` 部署私链
- `pnpm run compile` 编译合约
- `pnpm run deploy` 部署合约
- `pnpm run web` 启动web前台

- `pnpm run test:c` 合约单元测试

以下是开发过程部分

## 项目架构
结构使用monorepo，合约和前台部分分离，web和移动端分离
合约 ✅
web In Progress
mobile ToDo

## 合约部分

项目生成: `npx hardhat init`，创建typescript项目

### 创建英雄合约 ✅
规则： 
- 英雄种类3种 ✅
    Mage, Healer, Barbarian
- 英雄属性5个 ✅
    Strength, Health, Dexterity, Intellect, Magic
- 创建英雄规则 ✅
    价格：0.05 ETH
    属性生成，随机生成属性值，值在0 ~ 18，0 ~ 17...，0 ~ 13之间随机
    例如，第一次生成Health，值会在0 ~ 18之间随机，第二次生成Intellect，值会在0 ~ 17之间随机，and so on.
- 一个玩家可以创建多个英雄 ✅
    多个英雄保存在自己的账号地址里
- 英雄命名/改名 TODO
- 属性综合排名 TODO
### 合约测试 ✅
`./test`文件夹下新建Hero.ts对应Hero.sol，创建一个TestHero.sol的合约来设置随机数

`npx hardhat test`

测试内容：

- 付费不够会失败报错 "Please send more money"。 ✅
- 支付成功随机创建了英雄的五个属性，这里随机数设置一个定值。 ✅
- 支付成功创建了一个英雄。✅
- 一个玩家可以拥有多个英雄。✅
- 获取英雄类型 TODO

### 合约编译，部署
- 编译合约
`npx hardhat compile`，生成abi文件
- 部署合约【选择部署链，这里部署到本地链上】
1.本地创建链
新开一个控制台，执行`npx hardhat node`，会创建一个有10个账号地址的私链，初始会有10000ETH的金币。每次重新创建这个地址都相同，部署后，小狐狸钱包可以连接到部署的本地链上。用提供的私链地址在钱包里创建一个新的账号，。
2.部署合约
`npx hardhat run ./scripts/deploy-hero.ts --network localhost` or `npm run deploy`，可以在链控制台上看到新部署的合约。

## 前台交互部分

前台子项目
`cd web-ui`
`pnpm install`

## 功能
- 购买英雄
- 查看英雄
- 查看英雄属性排名
- 英雄改名
- 英雄属性【五边形状态】


1.web端
2.移动端 ToDo
