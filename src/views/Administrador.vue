<template>
    <div>
        <header class="masthead" style="background-image: url('/assets/img/chevrolet-blazer.jpg');">
        <div class="overlay"></div>
        <div class="container">
            <div class="row">
                <div class="col-md-10 col-lg-8 mx-auto">
                    <div class="post-heading">
                        <h1><strong>{{ texto_1 }}</strong></h1>
                    </div>
                </div>
            </div>
        </div>
        </header>
    </div>
</template>

<script>
export default {
    name: 'component-administrador',
    // props: {},
    data: function(){
        return {
            texto_1: 'Bienvenido a la pagina de administracion'
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