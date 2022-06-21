<template>
    <Header/>
    <main>
        <slot></slot>
    </main>
    <Footer />
</template>

<script>
import Header from '@/components/global.components/Header.vue'
import Footer from '@/components/global.components/Footer.vue'

export default {
    name: "default",
    components: {
        Header, Footer,
    },
}
</script>

<style>
</style>