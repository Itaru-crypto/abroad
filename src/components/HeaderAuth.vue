<template>
  <div class="header flex">
    <div class="left">
      <img class="logo" src="../assets/logo5.png" alt />
    </div>
    <div class="right flex">
      <p @click="$router.push('/signup')">新規登録</p>
      <p @click="$router.push('/login')">ログイン</p>
    </div>
  </div>
</template>

<style scoped>
.right{
  align-items: center;
}
.right p{
  margin-right: 20px;
  cursor: pointer;
}
.logo{
  width: 150px;
  cursor: pointer;
}
.flex{
  display: flex;
  justify-content: space-between;
}
.header{
  margin: 20px;
}
</style>