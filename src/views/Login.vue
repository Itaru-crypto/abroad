<template>
  <div>
    <HeaderAuth/>
    <div class="card">
      <h1>Log in</h1>
      <div class="form">
        <input placeholder="ユーザーネーム" type="text"/>
        <input placeholder="パスワード" type="password"/>
        <button>Log in</button>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderAuth from "../components/HeaderAuth";
export default {
  components: {
    HeaderAuth
  }
};
</script>

<style scoped>
.card{
  width: 350px;
  background-color: #fff;
  margin: 100px auto;
  padding: 20px;
  border-radius: 5px;
}

.card h1{
  color: black;
  text-align: center;
  padding: 20px 20px;
  font-size: 20px;
}

button{
  width: 100px;
  padding: 8px 0 10px;
  background-color: blueviolet;
  color: #fff;
  font-weight: bold;
  text-align: center;
  border-radius: 25px;
  cursor: pointer;
}

input{
  margin-top: 15px;
  padding: 8px 0 10px;
  width: 80%;
  border: 1px solid black;
  color: black;
}

.form{
  text-align: center;
}

.form button{
  margin-top: 15px;
}
</style>