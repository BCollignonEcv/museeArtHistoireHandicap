<template>
  <Layout>
    <h1>Contact</h1>
    <form action="" method="post">
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
            <input type="checkbox" id="company-field" />
            <label for="company-field"
              >Je suis une société ou une organisation</label
            >
          </div>
        </div>
        <div class="card">
          <div class="form-item">
            <label for="message-field">Message</label>
            <textarea
              type="textarea"
              placeholder="Bonjour, ..."
              id="message-field"
              cols="30"
              rows="10"
            >
            </textarea>
          </div>
        </div>
      </section>
      <div class="form-footer">
        <button type="submit" class="btn btn-primary">Envoyer</button>
      </div>
    </form>
  </Layout>
</template>

<script>
import Layout from "@/layouts/page/Default.layout.vue";

export default {
  name: "Contact",
  components: {
    Layout,
  },
};
</script>

<style>
</style>