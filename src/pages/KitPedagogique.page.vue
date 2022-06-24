<template>
  <Layout>
    <section aria-label="kit" class="kit_peda">
      <div id="diff_kit">
        <h1>Diffriend, le kit</h1>
        <li>
          Ce kit est destiné à l'animation de groupe en milieu scolaire. Il
          permet de sensibiliser les enfants, développer leur empathie ainsi que
          leur bienveillance face au handicap.
        </li>

        <h4>Diffriend c'est quoi exactement ?</h4>
        <li>
          Diffriend c’est un kit pédagogique, centré sur le thème du handicap.
          Il se déroule en 5 étapes sur une semaine d’école :
        </li>
        <li>
          Jour 1 : Une courte intervention explicative de l’enseignant, suivi
          d’un premier jeu qui s’intitule : Qui est-ce ?
        </li>
        <li>Jour 2 : Un deuxième jeu de plateau : Script</li>
        <li>
          Jour 3 : Un troisième jeu de mise en situation, durant lequel les
          élèves seront confrontés au handicap durant une épreuve de parcours
        </li>
        <li>
          Jour 4 : Une sortie scolaire au musée accompagnée d’une chasse au
          trésor
        </li>
        <li>
          Jour 5 : Un debrief commun, avec un atelier dessin dans lequel les
          élèves pourront illustrer ce qu’ils ont retenus / préférés
        </li>
        <li>Tel est le défi que ce kit vous propose de relever !</li>
      </div>
      <img src="../assets/img/kit.png" />
    </section>
    <section aria-label="role_kit" class="kit_role">
      <h1>À quoi ça sert ?</h1>

      <li>
        Son but est de <span>poursuivre la réflexion</span> et d'ouvrir la
        discussion sur le regard que pose la société sur le handicap. Elle a
        aussi pour objectif la <span>déstigmatisation</span> de celle-ci. Grâce
        aux activités proposés, vous pourrez organiser des échanges nourris
        entre les participants (enseignant, élèves, parents) et même aller
        beaucoup plus loin dans la réflexion et l'appropriation du groupe.
      </li>
    </section>
    <section aria-label="contenu" class="contenu">
      <h1>Le contenu du kit</h1>
      <li>mini-jeux éducatifs</li>
      <li>
        Une notice explicative qui permet aux enseignants d’appréhender la
        thématique, d’utiliser le kit et de mieux sensibiliser les élèves
      </li>
      <li>Plan du musée afin de faciliter la visite</li>
      <div>
        <figure class="jeu1">
          <img src="../assets/img/jeu1.png" />
          <figcaption class="figcap1">
            <hr />
            <h5 id="title-jeu1">JEU 1 - QUI est-ce ?</h5>
            <hr />
            <p>
              L’incontournable jeu du “Qui est-ce ?” sur le thème des personnes
              en situation de handicap ayant marquées l’histoire.
            </p>
          </figcaption>
        </figure>
        <figure class="jeu2">
          <img src="../assets/img/jeu2.png" />
          <figcaption class="figcap2">
            <hr />
            <h5>Jeu 2 - Script</h5>
            <hr />
            <p>
              Un jeu de plateau composé de mini-jeux sensibilisant sur la
              surdité et la langue des signes.
            </p>
          </figcaption>
        </figure>
        <figure class="jeu3">
          <img src="../assets/img/jeu3.png" />
          <figcaption class="figcap3">
            <hr />
            <h5>Jeu 3 - Escape GAME</h5>
            <hr />
            <p>
              Un parcours rempli d’énigmes qui vise à renforcer l’entraide et la
              tolérance envers les personnes en situation de handicap.
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  </Layout>
</template>

<script>
import Layout from "@/layouts/page/Default.layout.vue";

export default {
  name: "Kit-pedagogique",
  components: {
    Layout,
  },
};
</script>

<style lang="scss">
.kit_peda {
  display: flex;
  flex-direction: row;
  #diff_kit {
    width: 40%;
    position: relative;
    left: 22.5rem;
    h1 {
      font-family: "Futura PT";
      font-style: normal;
      font-size: 30px;
      letter-spacing: 0.48px;
    }
    li {
      font-family: "Futura PT";
      font-style: normal;
      font-weight: 400;
      list-style-type: none;
    }
  }
  img {
    height: 329px;
    width: 270px;
    position: relative;
    top: 70px;
    margin-left: 400px;
  }
}
.kit_role {
  position: relative;
  top: 140px;
  height: 200px;
  text-align: center;
  display: flex;
  flex-direction: column;
  background: rgba(188, 188, 188, 0.12);
  li {
    list-style-type: none;
    width: 40%;
    position: relative;
    left: 27%;
    text-align: center;
  }
}
.contenu {
  position: relative;
  top: 190px;
  left: 2.5rem;
  h1,
  li {
    position: relative;
    left: 20.5rem;
  }
  div {
    position: relative;
    top: 20px;
    display: flex;
    flex-direction: row;

    left: 18rem;
    .jeu1,
    .jeu2,
    .jeu3 {
      height: 380px;
      width: 300px;
      border-radius: 4rem;
      img {
        border-radius: 0.5rem;
        height: 380px;
        width: 300px;
      }
      .figcap1 {
        left: 3rem;
        position: absolute;
        color: white;
        top: 14rem;
        width: 200px;
        h5 {
          margin: 0px;
          font-family: "Poppins";
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          text-transform: uppercase;
        }
        hr {
          width: 280px;
        }
        p {
          font-family: "Futura PT";
          font-style: normal;
          font-weight: 450;
          width: 280px;
          line-height: 26px;
        }
      }
      .figcap2 {
        left: 27rem;
        position: absolute;
        color: white;
        top: 14rem;
        width: 200px;
        h5 {
          margin: 0px;
          font-family: "Poppins";
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          text-transform: uppercase;
        }
        hr {
          width: 280px;
        }
        p {
          font-family: "Futura PT";
          font-style: normal;
          font-weight: 450;
          width: 280px;
          line-height: 26px;
        }
      }
      .figcap3 {
        left: 51rem;
        position: absolute;
        color: white;
        top: 14rem;
        width: 200px;
        h5 {
          margin: 0px;
          font-family: "Poppins";
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          text-transform: uppercase;
        }
        hr {
          width: 280px;
        }
        p {
          font-family: "Futura PT";
          font-style: normal;
          font-weight: 450;
          width: 280px;
          line-height: 26px;
        }
      }
    }
  }
}
</style>