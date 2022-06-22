<template>
    <Layout>
           <section id="section_1">
              <iframe src="https://www.youtube.com/watch?v=E2WBNLp6z1I&t=4s" name="iFrame Name"
                                    scrolling="No" height="500px" width="100%" style="border: none;">
              </iframe>
              <div>
                <h1>L’observatoire des <br/> politiques du handicap</h1>
                <h5>Une politique au service de tous</h5>
              </div>
          </section>
          <section id="section_2">

            <h1>À propos de <br/> l’observatoire</h1>
             <span class="vertical"></span>
            <div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ligula et ante pharetra efficitur eu tristique lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas feugiat dapibus nibh vitae hendrerit. Phasellus ac sapien eget nulla fermentum venenatis luctus eget turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc et libero et lacus vestibulum dignissim. Aliquam et sodales risus. Proin tincidunt id erat sed sagittis.</p>
             <button>En savoir plus</button>
            </div>
          
          </section>
          <section id="section_3">
            <h1>Qu’est-ce que le handicap ?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <img  src="../assets/img.svg" alt="def_handicap"/>
          </section>
          <section id="section_4">
            <div id="billet">
                <img src="../assets/billet.svg" alt="billet_svg"/>
                <h5>Réservez votre billet </h5>
             
           <img id="icon" src="../assets/arrow-right.svg" alt="icon_arrow_right"/>
            </div>
            <div id="musee">
                 <h5>Découvrez le musée virtuel </h5>
                 <img id="icon" src="../assets/arrow-right.svg" alt="icon_arrow_right"/>
            </div>
          </section>
    </Layout>
</template>

<script>
import Layout from '@/layouts/Default.layout.vue'

export default {
    name: "Home",
    components: {
        Layout
    },
}
</script>

<style lang="scss">
#section_1{
div{
    left: 2.5rem;
    top:-30.65rem;
    position: relative;
     h1{
    font-size: 1.75rem;
    }
     h5 {
    font-size: 0.875rem;
    line-height: 0rem;
   }
}
}

#section_2{
    display: flex;
    position: relative;
    flex-direction: row;
    top:-5.625rem;
    h1{
     position: relative;
     left:2.5rem;
     margin-right:1.25rem;  
    }
    .vertical{
    top: -0.4375rem;
    position: relative;
    margin:1.8125rem;
    height:11.2rem;
    display: inline-block;
    border-left: 0.25rem solid black;
    }
     p {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 1.125rem;
      line-height:1.6875rem;
      width:60%;
      }
    button{
    border-radius: 3.125rem;
    background: transparent;
    position: relative;
    border: none;
    background: #A7D5EE;
    height: 1.875rem;
    width:6.5625rem;
}
}

#section_3 {
    background: rgba(188, 188, 188, 0.12);
    height: 18.75rem;
    width: 100%;
}
#section_3{
    h1{
    top: 3.43rem;
    position: relative;
    left: 2.5rem;
    }
    p{
     position: relative;
     left:2.5rem;
     width: 40%;
     top: 5.625rem;
    }
    img {
    width: 15.125rem;
    height: 15.43rem;
    position: relative;
    top: -3.125rem;
    right: -78.125rem;
}
}

#section_4 {
    #billet{
    width: 16.93rem;
    height: 17.62rem;
    background: white;
    position: relative;
    top:3.75rem;
    left: 28.125rem;
    filter: drop-shadow(0px 3px 40px rgba(0, 0, 0, 0.07));
 img{
     position: relative;
     left: 1.25rem;
     top: 8.75rem;
     height:3.56rem ;
     width:3.875rem ;
    }

 h5{
     position: relative;
     left: 1.25rem;
     top: 8.125rem;
    }
 #icon{
        position: relative;
        left: 9.375rem;
        top: 5.9375rem;
        height: 0.9375rem;
        width: 1.25rem;
    }
}
 #musee{
         width: 16.93rem;
         height: 17.625rem;
         background: white;
         position: relative;
         top:-11.25rem;
         left:46.875rem;
         filter: drop-shadow(0px 3px 40px rgba(0, 0, 0, 0.07));
          h5{
             position: relative;
             left: 1.25rem;
             top: 13.125rem;
            }
            #icon{
                    position: relative;
                    left: 12.1875rem;
                    top: 10.9375rem;
                    height: 0.9375rem;
                    widows: 1.25rem;
                 }

        }
}


</style>