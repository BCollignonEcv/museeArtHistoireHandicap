<template>
  <Layout>
    <form action="" method="post" class="form-splited">
      <section aria-label="Donation" class="form-splited-2">
        <h2>Mon don</h2>
        <p style="visibility: hidden">*</p>
        <div class="card">
          <Switch
            :defaultLabel="'Je donne chaque mois'"
            :switchedLabel="'Je donne une mois'"
            :reverse="true"
          />
          <div class="form-item">
            <label for="montant-field">Montant libre</label>
            <input type="number" placeholder="Montant" id="montant-field" />
          </div>
        </div>
      </section>
      <section aria-label="Contact information" class="form-splited-3">
        <h2>Mes coordonnées</h2>
        <p>* champs obligatoires</p>
        <div class="card">
          <div class="form-item">
            <label for="email-field">Email</label>
            <input
              type="email"
              placeholder="nomprenom@mail.fr"
              id="email-field"
            />
          </div>
          <div class="form-item">
            <input type="checkbox" id="company-field" />
            <label for="company-field"
              >Je suis une société ou une organisation</label
            >
          </div>
          <div class="form-item-multiple">
            <div class="form-item">
              <label for="civility-field">Civility*</label>
              <select name="civility-field" id="civility-field" required>
                <option value="Mme">Mme</option>
                <option value="Mr">Mr</option>
                <option value="U">Inconnu</option>
              </select>
            </div>
            <div class="form-item">
              <label for="firstname-field">Prénom*</label>
              <input
                type="text"
                placeholder="Marie"
                id="firstname-field"
                required
              />
            </div>
            <div class="form-item">
              <label for="lastname-field">Nom*</label>
              <input
                type="text"
                placeholder="Cassirame"
                id="lastname-field"
                required
              />
            </div>
          </div>
          <div class="form-item">
            <label for="address1-field">Entrez votre adresse</label>
            <input
              type="text"
              placeholder="38 Rue des Remises"
              id="address1-field"
            />
          </div>
          <div class="form-item">
            <label for="address2-field">Complément d'adresse</label>
            <input
              type="text"
              placeholder="Interphone 10 - Cassirame"
              id="address2-field"
            />
          </div>
          <div class="form-item-multiple">
            <div class="form-item">
              <label for="postal-code-field">Code Postal</label>
              <input type="number" placeholder="94100" id="postal-code-field" />
            </div>
            <div class="form-item">
              <label for="city-field">Ville*</label>
              <input
                type="text"
                placeholder="St-Maur-des-Fossés"
                id="city-field"
              />
            </div>
          </div>
          <div class="form-item-multiple">
            <div class="form-item">
              <label for="country-field">Pays</label>
              <select name="country-field" id="country-field" required>
                <option value="fr">France</option>
                <option value="en">England</option>
              </select>
            </div>
            <div class="form-item">
              <label for="phone-field">Téléphone*</label>
              <input type="phone" placeholder="0638385632" id="phone-field" />
            </div>
          </div>
        </div>
        <div class="form-footer">
          <button type="submit" class="btn btn-primary">
            Passer au reglement
          </button>
        </div>
      </section>
    </form>
    <BlocText>
      <template v-slot:title>
        <h3>A quoi sert un dons ?</h3>
      </template>
      <p>
        <b>Faire un don</b>, c’est soutenir un projet humain, s’investir dans
        les activités de l'association, participer à la sensibilisation de
        l'handicap.
      </p>
      <p>
        Les besoins d’accompagnement des enfants et adultes en situation de
        handicap évoluent constamment. L'observatoire des politiques du handicap
        fait appel à la générosité du public afin de contribuer au financement
        de son musée et de ses projets.Vos dons sont essentiels et contribuent à
        financer notre action.
      </p>
    </BlocText>
        <BlocText>
      <template v-slot:title>
        <h3>Fiscalité des dons</h3>
      </template>
      <p>
        En soutenant l'observatoire des politiques du handicap, reconnue
        d’utilité publique, vous bénéficiez des avantages fiscaux en vigueur
        pour les dons, les legs et les donations.
      </p>
      <p>
        Si vous êtes imposable sur le revenu, vous bénéficiez d’une réduction
        d’impôt de 66% du montant de votre don dans la limite de 20% de votre
        revenu imposable ou vous pouvez aussi déduire 75% du montant de votre
        don IFI.
      </p>
      <p>
        En soutenant l'observatoire des politiques du handicap dans le cadre du
        mécénat d’entreprise vous bénéficiez d’une réduction d'impôt sur les
        sociétés : les versements effectués par les sociétés ouvrent droit à une
        réduction de l’impôt sur le revenu ou sur les entreprises de 60% de
        votre don, à hauteur de 0,5% du chiffre d’affaires.
      </p>
      <p>Pour tout don, vous recevrez un reçu fiscal.</p>
    </BlocText>
  </Layout>
</template>

<script>
import Layout from "@/layouts/page/Default.layout.vue";
import { Switch } from "@/components/form.components";
import { BlocText } from "@/layouts/component.layouts";

export default {
  name: "Dons",
  components: {
    Layout,
    Switch,
    BlocText
  },
};
</script>

<style>
</style>