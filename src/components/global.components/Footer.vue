<template>
  <footer>
     <img
            src="../../assets/logo.svg"
            alt="Logo Observatoire du handicap"
            class="logo"
          />
    <li class="vertical"></li>
    <li>L'observatoire</li>
    <li>Le musée</li>
    <li>Kit pédagogique</li>
    <li>Blog / Presse</li>
    <li id="last">Contact</li>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  footer{
    background: black;
    width: 100%;
    display: flex;
    color:white;
    justify-content: space-between;
    flex-direction: row;
    
    img{
      margin-left:20px;
       height: 4rem;
       position:relative;
       top:55px;

    }
    .vertical{
    top: -0.4375rem;
    position: relative;
    margin:1.8125rem;
    height:8rem;
    display: inline-block;
    border-left: 0.1rem solid white;
    }
    li{
      list-style-type: none;
      font-family: sans-serif;
      margin:0;
      padding:0;
      position: relative;
      top:80px;
     #last{
      margin-right:50px;
     }
    }
  }
</style>