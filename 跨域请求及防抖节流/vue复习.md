1. `vue-cli`版本问题

   ```
   vue-cli  2.x 版本  依赖于 webpack 3.X
   	2.x 创建的项目最大的特点就是 有build，config目录，里面是一些webpack的配置文件
   vue-cli  3.x 版本  依赖于 webpack 4.X
   	3.x版本 创建的项目 看不见webpack的配置文件； 如果需要配置，必须自己手写vue.config.js文件，再去配置； 3.x里面很多配置都给我们创建好了
   	
   	最新的vue-cli 脚手架是4.x， 有很多问题，和我们之前vue 3.x创建的项目有一些不一样，暂时不用
   	
   	
   上面是脚手架的版本，我们的vue版本还是 2.6.10 还没有更新到3.x； 据说最新的vue3.x采用的ts编写
   ```

2. 创建项目的流程  

   ```
   1. 用3.x创建项目
   		// npm install @vue/cli -g 
       npm uninstall @vue/cli -g
   		npm install @vue/cli@3.5.3 -g
   		vue --version   能够打印3.x的版本号，证明安装成功
   		vue create hello   表示创建一个hello名字的文件夹或者项目
   		cd hello
   		npm run serve
   		
   2. 用2.x创建项目
   		npm install -g @vue/cli-init
   		vue init webpack my-project  表示用2.x的模板创建一个项目
   		cd my-project
   		npm run dev
   
   package.json文件里面一般的指令
   dev， serve 表示开启一个 开发服务器
   npm run build 表示打包vue项目， 后面就可以发布上线
   
   一些属性名， 一些函数名的简写 ，源头在es6的文档里面
   http://es6.ruanyifeng.com/
   ```

3. 看一些`vue`脚手架项目的各个文件

   ```
   home.vue  是页面级别的组件
   HelloWorld 是一个视图级别的组件； 是Home里面的子组件
   ```

4. `vue`里面组件向父组件传值

   ```
   1. 父向子传值，  利用v-bind属性， 给子组件传值；利用子组件内部props定义的属性来接收父组件传递进来的值
   2. 子向父传值
   		2.1  在子组件的事件里面， 写上 this.$emit('第一个参数就是我们自定义的事件名称', '第二个参数就是我们要传递出去的值')
   		2.2  在附件中 使用@ 符号绑定我们创建的自定义事件名称; 将父组件里面的一个函数，作为事件处理函数绑定上去
   		2.3 子组件传递处理的值，就是父组件里面的方法的形参里面
   		
   
   
   面试问你们， 涉及到父子传值的时候，有哪些奇怪的问题，或者说难点重点？
   单选数据流
   1. 在vue里面， 父子的props传值都是单向下行传值， 就是只能父组件传递子组件里面，只能是父组件更改，可以传递到子组件； 但是子组件不能修改props值，不能往上传； 
   2. 如果一定要改变父组件传递尽量的值，怎么办？  定义一个本地data属性，并把 props上面值给它初始化，修改data上面值是允许的
   
   官网解释
   https://cn.vuejs.org/v2/guide/components-props.html#%E5%8D%95%E5%90%91%E6%95%B0%E6%8D%AE%E6%B5%81
   ```

5. 组件之间的通信

   1. 父子组件 传值

   2. `vuex`大型项目使用

   3. 事件总线（`eventbus---有个库 vue-bus比较好用`）

      ```
      工作里面推荐使用别人写好的一个js库，  vue-bus
      	1.1  npm install vue-bus --save
      	1.2  在main.js里面引入一个库 import VueBus from 'vue-bus'
      				Vue.use(VueBus)
      	1.3 现在我们任意组件之间传值，都可以使用一种 发布监听的模式； 一个组件触发一个事件； 另外一个组件监听事件就是完成数据的传递； 不分我们组件之间的关系，无论父子，兄弟，跨级的 都可以穿
      	
      原理
      	在需要接受值得地方 监听一个自定义事件；  在需要发送值得地方； 触发一个事件
      	
      	监听   this.$bus.on('事件名称', '第二个参数就是回调函数， 函数的形参就是其他组件传递进来的数据')
      	触发   this.$bus.emit('事件名称', '要传递出去的 值')
      	
      
      一个vscode的插件   vue vscode snippets
      常见的几个指令
      vbase
      vdata
      vmethods
      
      vue里面只要涉及到了多个函数， 也有和react一样的this指向问题
      ```

6. 懒加载

   1. 路由的懒加载
      1. 我们在使用`npm run build` 打包发布程序的时候，这个包会非常大，会导致我们的首页加载时间过长，就是白屏的时间长；所以我们应该采用一些技术，将除了首页之外的页面，开始不要加载出来； 路由懒加载就是说， 当我们访问到某个路由之后，再把路由相关的组件，插件加载进来，减少了首页初次渲染的体积和时间
   2. 图片的懒加载

7. `git`的基本流程

   ```
   git 是一个多个协作项目的工具； 团队成员写完代码之后就会使用git 提交到公司的代码仓库里面去
   
   1. 去了公司， 领导给我们一个地址， 我们要将项目clone下来
   		git clone https://xxxxx.git
   		下载之后， 需要 使用  npm i 安装一些依赖之后才能跑项目
   2. 在后面开发的过程当中，如果需要多个完成一个项目，我们我们的工作流是这样的
   	2.1 每天早晨去的时候  git pull  拉去团队里面别人写的代码
   	2.2 当天工作的时候  git add xxx;   git commit -m '提交的注释'
   	2.3 后面的话就是重复2.2的步骤，一般是写完一段代码就add commit 一下
   	2.4 晚上或者中午之前 提交自己的代码到代码仓库里面去  git push origin master  提交自己的代码
   	
   	其他的一些指令
   	git status 查看当前工作区的基本信息，有没有文件改动过
   ```

   