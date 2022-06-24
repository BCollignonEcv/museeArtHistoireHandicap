<template>
    <Layout :full="true">
        <ImageSection :imgPath="'/musee_thematique_archeologie.png'">
            <template v-slot:heading>
                <h3>Archélogie</h3>
                <h5>Une politique au service de tous</h5>
                <button class="btn btn-primary">Visiter virtuellement la salle</button>
            </template>
        </ImageSection>
        <ImageSection :imgPath="'/musee_thematique_histoire_politique.png'">
            <template v-slot:heading>
                <h3>Archélogie</h3>
                <h5>Une politique au service de tous</h5>
                <button class="btn btn-primary">Visiter virtuellement la salle</button>
            </template>
        </ImageSection>
        <ImageSection :imgPath="'/musee_thematique_cinema.png'">
            <template v-slot:heading>
                <h3>Archélogie</h3>
                <h5>Une politique au service de tous</h5>
                <button class="btn btn-primary">Visiter virtuellement la salle</button>
            </template>
        </ImageSection>
        <ImageSection :imgPath="'/musee_thematique_femmes.png'">
            <template v-slot:heading>
                <h3>Archélogie</h3>
                <h5>Une politique au service de tous</h5>
                <button class="btn btn-primary">Visiter virtuellement la salle</button>
            </template>
        </ImageSection>
        <ImageSection :imgPath="'/musee_thematique_artistes.png'">
            <template v-slot:heading>
                <h3>Archélogie</h3>
                <h5>Une politique au service de tous</h5>
                <button class="btn btn-primary">Visiter virtuellement la salle</button>
            </template>
        </ImageSection>
    </Layout>
</template>

<script>
import Layout from '@/layouts/page/Default.layout.vue'
import { ImageSection } from "@/components/custom.components";

export default {
    name: "Home",
    components: {
        Layout,
        ImageSection
    },
}
</script>

<style>
</style>