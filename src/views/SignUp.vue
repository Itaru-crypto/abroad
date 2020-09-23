<template>
  <div>
    <HeaderAuth/>
    <div class="card">
      <p>新規登録</p>
      <div class="form">
        <input placeholder="ユーザーネーム" type="text" :parentText="name" v-model="name"/>
        <input placeholder="パスワード" type="text" v-model="password"/>
        <input placeholder="メールアドレス" type="email" v-model="email"/>
        <input placeholder="留学先" type="text" v-model="country"/>
      </div>
      <div class="share">
        <h1>体験談</h1>
        <textarea placeholder="上限は1000字です" v-model="comments"></textarea>
        <div>
          <button @click="register">登録</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderAuth from "../components/HeaderAuth.vue";
export default {
  data(){
    return {
      name: "",
      password: "",
      email: "",
      country: "",
      comments: "",
    };
  },
  components:{
    HeaderAuth
  }
}
</script>

<style scoped>
.card{
  width: 350px;
  margin: 100px auto;
  padding: 20px;
  background-color: #fff;
  text-align: center;
}
.card p{
  color: black;
  font-weight: bold;
  font-size: 20px;
  padding: 5px 0 15px;
}
input{
  width: 80%;
  margin-bottom: 15px;
  padding: 10px;
  color: black;
  border: 1px solid black;
  border-radius: 5px;
}
textarea{
  margin-top: 15px;
  width: 80%;
  padding: 10px 0 250px;
  color: black;
  border: 1px solid black;
  border-radius: 5px;
}
.share h1{
  color: black;
}
button{
  color: black;
  background-color: rgb(200,0,40);
  padding: 5px 15px;
  margin: 8px 0 10px;
  font-weight: bold;
  border: 1px solid black;
  border-radius: 15px;
}
</style>