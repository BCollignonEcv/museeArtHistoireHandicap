<template>
    <Layout>
        https://vuejs.org/guide/best-practices/accessibility.html#content-structure
        <form action="" method="post">
            <section aria-label="Donnation" class="">
                <h2>Mon dons</h2>
                <div></div>
                <button role="switch" aria-checked="true" id="donnationType" class="switch">
                    <span>Je donne une fois</span>
                    <span>Je donne chaque mois</span>
                </button>
                <label for="donnationType" class="switch">Type</label>
                <div class="form-item">
                    <label for="montant-field">Montant libre</label>
                    <input type="number" placeholder="Montant" id="montant-field" />
                </div>
            </section>
            <section aria-label="Contact information">
                <h2>Mes coordonnées</h2>
                <div class="form-item">
                    <label for="email-field">Email</label>
                    <input type="email" placeholder="nomprenom@mail.fr" id="email-field" />
                </div>
                <div class="form-item">
                    <input type="checkbox" id="company-field" />
                    <label for="company-field">Je suis une société ou une organisation</label>
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
                        <input type="text" placeholder="Marie" id="firstname-field" required />
                    </div>
                    <div class="form-item">
                        <label for="lastname-field">Nom*</label>
                        <input type="text" placeholder="Cassirame" id="lastname-field" required />
                    </div>
                </div>
                <div class="form-item">
                    <label for="address1-field">Entrez votre adresse</label>
                    <input type="text" placeholder="38 Rue des Remises" id="address1-field" />
                </div>
                <div class="form-item">
                    <label for="address2-field">Complément d'adresse</label>
                    <input type="text" placeholder="Interphone 10 - Cassirame" id="address2-field" />
                </div>
                <div class="form-item-multiple">
                    <div class="form-item">
                        <label for="postal-code-field">Code Postal</label>
                        <input type="number" placeholder="94100" id="postal-code-field" />
                    </div>
                    <div class="form-item">
                        <label for="city-field">Ville*</label>
                        <input type="text" placeholder="St-Maur-des-Fossés" id="city-field" />
                    </div>
                </div>
                <div class="form-item-multiple">
                    <div class="form-item">
                        <label for="country-field">Pays</label>
                        <input type="number" placeholder="France" id="country-field" />
                    </div>
                    <div class="form-item">
                        <label for="city-field">Ville*</label>
                        <input type="text" placeholder="Ville" id="city-field" />
                    </div>
                </div>
            </section>
        </form>
    </Layout>
</template>

<script>
import Layout from '@/layouts/Default.layout.vue'

export default {
    name: "Dons",
    components: {
        Layout
    },
}
</script>

<style>
</style>