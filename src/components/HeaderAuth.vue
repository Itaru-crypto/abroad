<template>
  <div>
    <div class="header flex">
      <div class="left">
        <img class="logo" src="../assets/symbol.png" alt />
      </div>
      <div class="right flex">
        <p @click="$router.push('/signup')">新規登録</p>
        <p @click="$router.push('/login')">ログイン</p>
      </div>
    </div>
    <div class="header-line">
      <p>先輩の声</p>
      <p>おすすめスポット</p>
      <p>奨学金一覧</p>
      <p>サービス内容</p>
    </div>
  </div>
</template>

<style scoped>
.right{
  align-items: center;
}
.right p{
  margin-right: 30px;
  cursor: pointer;
  color: black;
}
.logo{
  width: 100px;
  cursor: pointer;
  margin: 20px;
}
.flex{
  display: flex;
  justify-content: space-between;
}
.header{
  background-color: lightgrey;
}
.header-line{
  display: flex;
  justify-content: space-around;
  cursor: pointer;
  margin-top: 20px;
  text-decoration: underline;
}

</style>