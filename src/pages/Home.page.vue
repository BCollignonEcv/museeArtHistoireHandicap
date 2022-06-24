<template>
  <Layout :full="true">
    <section id="section_1">
      <iframe
        src="https://www.youtube.com/watch?v=E2WBNLp6z1I&t=4s"
        name="iFrame Name"
        scrolling="No"
        height="500px"
        width="100%"
        style="border: none"
      >
      </iframe>
      <div>
        <h1>
          {{ $t("HOME.page-title-1") }} <br />
          {{ $t("HOME.page-title-2") }}
        </h1>
        <h5>{{ $t("HOME.page-subtitle-1") }}</h5>
      </div>
    </section>
    <section id="section_2">
      <h1>
        {{ $t("HOME.section-1-title-1") }} <br />
        {{ $t("HOME.section-1-title-2") }}
      </h1>
      <span class="vertical"></span>
      <div>
        <p>{{ $t("HOME.section-1-content") }}</p>
        <button>{{ $t("HOME.section-1-action") }}</button>
      </div>
    </section>
    <section id="section_3">
      <h1>{{ $t("HOME.section-2-title-1") }}</h1>
      <p>{{ $t("HOME.section-2-content") }}</p>
      <img src="../assets/img.svg" alt="def_handicap" />
    </section>
    <section id="section_4">
      <div id="billet">
        <img src="../assets/billet.svg" alt="billet_svg" />
        <h5>{{ $t("HOME.section-3-button-1-label") }}</h5>
        <img id="icon" src="../assets/arrow-right.svg" alt="icon_arrow_right" />
      </div>
      <div id="musee">
        <img src="../assets/musee.svg" alt="musee_virtuel" />
        <h5>{{ $t("HOME.section-3-button-2-label") }}</h5>
        <img id="icon" src="../assets/arrow-right.svg" alt="icon_arrow_right" />
      </div>
      <div class="dons">
        <h1>{{ $t("HOME.section-4-title-1") }}<br />{{ $t("HOME.section-4-title-2") }}</h1>
        <span class="vertical"></span>

        <div>
          <p>{{ $t("HOME.dons_adh_paragh") }}</p>
          <div>
            <button>{{ $t("HOME.btn_don") }}</button>
            <button>{{ $t("HOME.btn_Adh") }}</button>
          </div>
        </div>
      </div>
    </section>
    <section id="instagram">
      <div class="div_insta">
        <div>
          <h1>{{ $t("HOME.insta") }}</h1>
          <p>{{ $t("HOME.insta_text") }}</p>
        </div>
        <button><img src="../assets/add.svg" /></button>
      </div>
      <div id="post_insta">
        <canvas></canvas>
        <canvas></canvas>
        <canvas></canvas>
      </div>
    </section>
    <section id="contact">
      <h1>{{ $t("HOME.res_contact") }}</h1>
      <p>{{ $t("HOME.contact_text") }}</p>
      <button>{{ $t("inscrip") }}</button>
      <img src="../assets/mail.svg" />
    </section>
  </Layout>
</template>

<script>
import Layout from '@/layouts/page/Default.layout.vue'

import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default {
  name: "Home",
  components: {
    Layout,
  },
};
</script>

<style lang="scss">
#section_1 {
  div {
    left: 2.5rem;
    top: -30.65rem;
    position: relative;
    h1 {
      font-size: 1.75rem;
    }
    h5 {
      font-size: 0.875rem;
      line-height: 0rem;
    }
  }
}

#section_2 {
  display: flex;
  position: relative;
  flex-direction: row;
  top: -5.625rem;
  h1 {
    position: relative;
    left: 2.5rem;
    margin-right: 1.25rem;
  }
  .vertical {
    top: -0.45rem;
    position: relative;
    margin: 1.8125rem;
    height: 9.2rem;
    display: inline-block;
    border-left: 0.25rem solid black;
  }
  p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 1.6875rem;
    width: 60%;
  }
  button {
    border-radius: 3.125rem;
    background: transparent;
    position: relative;
    border: none;
    background: #a7d5ee;
    height: 1.875rem;
    width: 6.5625rem;
  }
}

#section_3 {
  background: rgba(188, 188, 188, 0.12);
  height: 18.75rem;
  width: 100%;
}
#section_3 {
  h1 {
    top: 3.43rem;
    position: relative;
    left: 2.5rem;
  }
  p {
    position: relative;
    left: 2.5rem;
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
  #billet {
    width: 16.93rem;
    height: 17.62rem;
    background: white;
    position: relative;
    top: 3.75rem;
    left: 28.125rem;
    filter: drop-shadow(0px 3px 40px rgba(0, 0, 0, 0.07));
    img {
      position: relative;
      left: 1.25rem;
      top: 8.75rem;
      height: 3.56rem;
      width: 3.875rem;
    }

    h5 {
      position: relative;
      left: 1.25rem;
      top: 8.125rem;
    }
    #icon {
      position: relative;
      left: 9.375rem;
      top: 5.9375rem;
      height: 0.9375rem;
      width: 1.25rem;
    }
  }
  #musee {
    width: 16.93rem;
    height: 17.625rem;
    background: white;
    position: relative;
    top: -11.25rem;
    left: 46.875rem;
    filter: drop-shadow(0px 3px 40px rgba(0, 0, 0, 0.07));
    h5 {
      position: relative;
      left: 1.25rem;
      top: 8.125rem;
    }
    #icon {
      position: relative;
      left: 12.1875rem;
      top: 5.9rem;
      height: 0.9375rem;
      width: 1.25rem;
    }
    img {
      position: relative;
      left: 1.25rem;
      top: 8.65rem;
      height: 3.56rem;
      width: 3.875rem;
    }
  }
  .dons {
    position: relative;
    top: -4.25rem;
    left: 2.5rem;

    display: flex;
    position: relative;
    flex-direction: row;
    top: -5.625rem;
    h1 {
      position: relative;

      margin-right: 1.5rem;
    }
    .vertical {
      top: -0.4375rem;
      position: relative;
      margin: 1.8125rem;
      height: 9.2rem;
      display: inline-block;
      border-left: 0.25rem solid black;
    }
    p {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 1.125rem;
      line-height: 1.6875rem;
      width: 60%;
    }
    button {
      border-radius: 3.125rem;
      background: transparent;
      position: relative;
      border: none;
      margin-right: 1rem;
      background: #a7d5ee;
      height: 1.875rem;
      width: 6.5625rem;
    }
  }
  button:nth-child(2) {
    background: transparent;
    border: 3px solid #a7d5ee;
  }
}
#instagram {
  .div_insta {
    display: flex;
    flex-direction: column;
    background: rgba(188, 188, 188, 0.12);
    width: 100%;
    height: 15.625rem;
    h1 {
      position: relative;
      left: 2.5rem;
      padding-top: 2.5rem;
    }
    p {
      position: relative;
      left: 2.5rem;
    }
    button {
      align-self: flex-end;
      border-radius: 52.5px;
      background: #a7d5ee;
      border: none;
      width: 2rem;
      height: 2rem;
      right: 1rem;
      position: relative;
      top: -5.8rem;
      img {
        height: 10px;
        width: 10px;
      }
    }
  }
  #post_insta {
    display: flex;
    flex-direction: row;
    gap: 50px;
    position: relative;
    left: 400px;
    canvas {
      position: relative;
      top: -70px;
      border-radius: 5px;
      background: #eaeaea;
      width: 206px;
      height: 203.5px;
      // left: 252px;
      // top: 3147px;
    }
  }
}
#contact {
  background: #bcbcbc1f;
  width: 100%;
  height: 15.625rem;
  h1 {
    position: relative;
    left: 2.5rem;
    padding-top: 2.5rem;
  }
  p {
    position: relative;
    left: 2.5rem;
  }
  button {
    border-radius: 50px;
    background: #a7d5ee;
    border: none;
    height: 30px;
    left: 2.5rem;
    top: -350px;
    position: relative;
  }
  img {
    position: relative;
    right: -70rem;
    top: -100px;
  }
}
</style>