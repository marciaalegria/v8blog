<template>
    <div>
        <!-- CONTENIDO PARA LA VISTA DE 'SOBRE MÍ' -->
<header class="masthead" style="background-image:url('assets/img/about-bg.jpg');">
    <div class="overlay"></div>
    <div class="container">
        <div class="row">
            <div class="col-md-10 col-lg-8 mx-auto">
                <div class="site-heading">
                    <h1>Sobre mí</h1>
                </div>
            </div>
        </div>
    </div>
</header>
<div class="container">
    <div class="row">
        <div class="col-md-10 col-lg-8 mx-auto">
            <p>{{ texto_1}}</p>
            <p>{{ texto_2}}</p>
        </div>
    </div>
</div>
<hr>
<Footer/> 
    </div>
</template>

<script>
import Footer from '../components/Footer'
export default {
    name: 'component-sobremi',
    components: {
        Footer
    },
    
    // props: {},
    data: function(){
        return {
            texto_1: 'Este es un blog dedicado al mundo automotor, en el cual te mostraré las últimas novedades de automóviles, los lanzamientos más recientes y te enseñaremos algunos tips para cuidar tu vehículo.',
            texto_2: 'Este es un medio independiente. Si te gusta nuestro contenido, ayúdanos en Patreon o haciendo una donación a través de PayPal. Te lo agradeceré mucho.'
        }
    },
    // computed: {},
    methods: {
        // -- Metodos
    },
    // components: {},
}
</script>

<style scoped>
    
</style>