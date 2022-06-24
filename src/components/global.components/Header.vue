<template>
  <header class="header" role="banner">
    <div class="header_part header_left">
      <nav role="navigation">
        <button
          type="button"
          class="menu_toggle nav_item btn-icon btn-icon-vertical"
          @click="openDrawer()"
        >
          <font-awesome-icon icon="fa-solid fa-bars" size="xl" />
          <span class="btn-icon-label">menu</span>
        </button>
        <div role="dialog" aria-modal="true" aria-label="Menu">
          <transition name="fadeIn">
            <div
              v-if="isOpenDrawer"
              class="menu_drawer_mask"
              @click="closeDrawer()"
            ></div>
          </transition>
          <transition name="slideLeft">
            <div v-if="isOpenDrawer" class="menu_drawer">
              <div class="menu_drawer_action">
                <button
                  type="button"
                  class="menu_toggle btn-icon btn-icon-horizontal"
                  @click="closeDrawer()"
                >
                  <font-awesome-icon icon="fa-solid fa-xmark" size="xl" />
                  <span class="btn-icon-label">Fermer</span>
                </button>
              </div>
              <div class="menu_drawer_navigation">
                <ul>
                  <li>
                    <button
                      type="button"
                      class="menu_drawer_item menu_drawer_link"
                    >
                      <router-link to="/">Home</router-link>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      class="menu_drawer_item"
                      aria-expanded="true"
                      @click="openDrawerChild('observatoire')"
                    >
                      Observatoire
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      class="menu_drawer_item"
                      aria-expanded="true"
                      @click="openDrawerChild('musee')"
                    >
                      Le musée
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      class="menu_drawer_item menu_drawer_link"
                      @click="closeDrawerChild()"
                    >
                      <router-link to="/kit-pedagogique"
                        >Kit Pédagogique</router-link
                      >
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      class="menu_drawer_item menu_drawer_link"
                      @click="closeDrawerChild()"
                    >
                      <router-link to="/presses">Blog/Presse</router-link>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      class="menu_drawer_item menu_drawer_link"
                      @click="closeDrawerChild()"
                    >
                      <router-link to="/contact">Contact</router-link>
                    </button>
                  </li>
                  <li>
                    <button
                      class="menu_drawer_item menu_drawer_link"
                      @click="closeDrawerChild()"
                    >
                      <router-link to="/dons">Dons</router-link>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      class="menu_drawer_item menu_drawer_link"
                      @click="closeDrawerChild()"
                    >
                      <router-link to="/adhesion">Adhésion</router-link>
                    </button>
                  </li>
                </ul>
                <div class="menu_drawer_footer">
                  <a
                    href="http://www.facebook.com/observatoirehandicapmonde"
                    target="_blank"
                  >
                    <button type="button" class="btn-icon-circle">
                      <font-awesome-icon
                        icon="fa-brands fa-facebook-f"
                        size="xl"
                      />
                    </button>
                  </a>
                  <a href="http://" target="_blank">
                    <button type="button" class="btn-icon-circle">
                      <font-awesome-icon
                        icon="fa-brands fa-instagram"
                        size="xl"
                      />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </transition>
          <transition name="slideLeft">
            <div
              v-if="isOpenDrawerChild === 'observatoire'"
              class="menu_drawer_child"
            >
              <ul>
                <li>
                  <RouterLink
                    to="/observatoire/association"
                    class="menu_drawer_child_item menu_drawer_link"
                    tabindex="-1"
                    >Association
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    to="/observatoire/comite-scientifique"
                    class="menu_drawer_child_item menu_drawer_link"
                  >
                    Comité Scientifique
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    to="/observatoire/publications"
                    class="menu_drawer_child_item menu_drawer_link"
                  >
                    Publications
                  </RouterLink>
                </li>
              </ul>
            </div>
          </transition>
          <transition name="slideLeft">
            <div v-if="isOpenDrawerChild === 'musee'" class="menu_drawer_child">
              <ul>
                <li>
                  <RouterLink
                    to="/musee/rouen"
                    class="menu_drawer_child_item menu_drawer_link"
                    >Musée physique
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    to="/musee/virtuel"
                    class="menu_drawer_child_item menu_drawer_link"
                    >Musée virtuel
                  </RouterLink>
                </li>
              </ul>
            </div>
          </transition>
        </div>
      </nav>
      <button
        type="button"
        class="nav_item btn-icon btn-icon-horizontal btn-icon-light"
        tabindex="-1"
      >
        <select class="select-light" name="country-field" id="country-field">
          <option value="fr">FR</option>
          <option value="en">EN</option>
        </select>
      </button>
    </div>
    <div class="header_part header_middle">
      <RouterLink to="/" class="nav_item">
        <h1 class="header_home">
          <img
            src="/logo-light.svg"
            alt="Logo Observatoire du handicap"
            class="logo"
          />
        </h1>
      </RouterLink>
    </div>
    <div class="header_part header_right">
      <RouterLink to="/dons" class="nav_item">
        <button type="button" class="btn btn-primary" tabindex="-1">Dons</button>
      </RouterLink>
      <RouterLink to="/adhesion" class="nav_item">
        <button type="button" class="btn btn-primary" tabindex="-1">Adhésion</button>
      </RouterLink>
    </div>
  </header>
  <!-- <transition appear name="slideLeft">
    
  </transition> -->
</template>

<script>
export default {
  data() {
    return {
      isOpenDrawer: false,
      isOpenDrawerChild: false,
    };
  },
  methods: {
    openDrawer() {
      this.isOpenDrawer = true;
    },
    openDrawerChild(category) {
      this.isOpenDrawerChild = category;
    },
    closeDrawer() {
      this.isOpenDrawerChild = null;
      this.isOpenDrawer = false;
    },
    closeDrawerChild() {
      this.isOpenDrawerChild = null;
    },
  },
};
</script>

<style lang="scss">
$header-height: 5rem;
$drawer-size: 30vw;
$drawer-child-size: 20vw;

header.header {
  height: $header-height;
  width: 100%;
  position: sticky;
  top: 0px;
  z-index: 100;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background-color: $white-color;

  .header_part {
    display: flex;

    .nav_item {
      margin: 0 1rem;
    }

    .logo {
      height: $header-height - $header-height * 0.3;
      width: 100%;
    }

    &.header_left {
      justify-content: start;

      .nav_item:first-of-type {
        margin-left: 0;
      }
    }

    &.header_middle {
      justify-content: center;
    }

    &.header_right {
      justify-content: end;

      .nav_item:last-of-type {
        margin-right: 0;
      }
    }
  }

  h1 {
    @include regular-font;
  }

  .menu_drawer_container {
  }

  .menu_toggle {
  }

  .menu_drawer_mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 198;
    cursor: pointer;
  }

  .menu_drawer {
    position: fixed;
    top: 0;
    left: 0;
    width: $drawer-size;
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem;
    z-index: 200;
    background-color: $white-color;

    .menu_drawer_action {
      padding-bottom: 1rem;
      border-bottom: 1px solid $border-color;
    }

    .menu_drawer_navigation {
      padding: 1rem 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
    }
  }

  .menu_drawer_child {
    position: fixed;
    top: 0;
    left: $drawer-size;
    height: 100vh;
    width: $drawer-child-size;
    padding: 3.5rem 2rem;
    z-index: 199;
    background-color: rgb(209, 209, 209);
  }

  .menu_drawer_item {
    text-transform: uppercase;
    @include regular-font;
    font-weight: bold;
    margin: 0.5rem 0;
    border-color: $secondary-color;
    transition: all 0.5s ease-out;

    &:hover {
      padding-left: 1rem;
      border-left: 2rem solid $secondary-color;
    }
  }

  .menu_drawer_child_item {
    display: inline-block;
    width: 100%;
    @include small-font;
    padding: 2rem 0;
    border-color: $secondary-color;
    transition: all 0.5s ease-out;
    border-top: 1px solid $border-color;

    &:hover {
      padding-left: 0.2rem;
    }
  }

  .menu_drawer_footer {
    display: flex;
    gap: 1rem;
  }
}

.slideLeft-enter-active,
.slideLeft-leave-active {
  transition: all 0.5s ease;
}

.slideLeft-enter-from,
.slideLeft-leave-to {
  margin-left: -($drawer-size + $drawer-child-size);
}

.fadeIn-enter-active,
.fadeIn-leave-active {
  transition: opacity 1s ease;
}

.fadeIn-enter-from,
.fadeIn-leave-to {
  opacity: 0;
}
</style>