<template>
  <footer>
     <!-- <img
            src="../../assets/logo.svg"
            alt="Logo Observatoire du handicap"
            class="logo"
          />
    <span class="vertical"></span>
    <span>L'observatoire</span>
    <span>Le musée</span>
    <span>Kit pédagogique</span>
    <span>Blog / Presse</span>
    <span id="last">Contact</span> -->
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
    span{
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