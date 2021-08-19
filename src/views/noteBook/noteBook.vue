<template>
  <div id="app">
    <header>
      <h1 class="title">备忘录</h1>
      <h4 class="time">{{ now }}</h4>
    </header>
    <section>
      <textarea v-model="text" class="text" placeholder="" />
      <button class="completion" @click="textComplete">保存</button>
    </section>
    <ul class="nav">
      <li v-for="(node,index) of textNodes" :key="index">
        <div class="content">
          <p>{{ node.content }}</p>
          <p>{{ node.date }}</p>
        </div>
        <div class="btn">
          <button @click="textDelete(index)">删除</button><!--删除数据-->
          <button @click="textPut(index)">修改</button> <!--修改数据-->
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      textNodes: [
        { content: '今天完成了200个单词', date: '2021/8/18星期二' },
        { content: '今天学习了vue', date: '2020/8/18 星期一' },
        { content: '我的密码为：', date: '2020/8/18 星期日' }
      ],
      now: this.getTime(),
      text: ''
    }
  },
  methods: {
    // 计算当前时间
    getTime() {
      var now = new Date()
      var arr = ['日', '一', '二', '三', '四', '五', '六']
      var day = now.getDay()// 得到的是数字,然我们想要的是星期几
      var dayTime = arr[day]
      return now.toLocaleDateString() + '  ' + '星期' + dayTime
    },
    textComplete() {
      // 为列表添加数据
      this.textNodes.push({ content: this.text, date: this.now })
      this.text = ''
    },
    // 删除数据
    textDelete(index) {
      this.textNodes.splice(index, 1)
    },
    // 修改数据
    textPut(index) {
      this.text = this.textNodes[index].content// 先获取要修改的值
      this.textNodes.splice(index, 1)// 同时把整条记录都删去
      return this.text
    }
  }
}
</script>

<style scoped>
*{
  margin:0px;
  padding:0px;
}
#app{
  /*width:360px;*/
  width:100%;
  border:2px solid #f1f1f1;
  box-shadow:-1px -1px 3px #eee;
  margin:0px auto;
  background-color:aliceblue;
}
header{
  display:flex;
  justify-content: space-between;/**两端对齐 */
}
header .title ,.time{
  margin-top: 5px;
  color:darkseagreen;
}
header .time{
  font-size:20px;
  align-self: flex-end; /**底端对齐*/
}
section{
  position:relative;
  width:100%;
  height:300px;
  border-bottom:1px solid #ccc;
}
section .text{
  box-sizing:border-box;
  width:100%;
  height:300px;
  border:none;
  outline:none;
  color:black;
  font-size:16px;
  padding:10px 0px 0px 6px;
  background-color:lightblue;
}
textarea::-webkit-input-placeholder{
  color:#333;
  font-size:16px;
}
section .completion{
  position:absolute;
  right:8px;
  bottom:5px;
  width:40px;
  height:30px;
  background-color:cornflowerblue;
  border-radius:4px;
  border:none;
  outline:none;
}
.nav li{
  display:flex;
  list-style: none;
  width:100%;
  border-bottom:2px solid #fff;
  padding:6px 0px 6px 0px;
}
.nav li .content{
  flex-grow:1;
}
.nav .content p{
  color:#333;
  font-size:16px;
  width:80%;
  word-wrap: break-word;
}
.nav .btn{
  align-self: center;
}
.nav li .btn button{
  margin-right:10px;
  width:40px;
  height:30px;
  background-color:rgb(96, 96, 243);
  color:#fff;
  border-radius:4px;
  border:none;
  outline:none;
}
</style>
