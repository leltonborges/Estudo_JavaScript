<template>
    <div id="app">
        <h1>Problema de Mont Hall</h1>
        <!-- <Door number="1" :hasGift="false"/> -->
        <div class="form">
            <div v-if="!started">
                <label for="portsAmount">Quantas portas?</label>
                <input type="text" id="portsAmount" size="3" v-model.number="portsAmount">
            </div>
            <div v-if="!started">
                <label for="selectedDoor">Qual porta é premiada?</label>
                <input type="text" id="selectedDoor" v-model.number="selectedDoor" size="3">
            </div>

            <button v-if="!started" @click="started= true">Iniciar</button>
            <button v-if="started" @click="started = false">Reiniciar</button>
        </div>
        <div class="doors" v-if="started">
            <div v-for="i in portsAmount" :key="i">
                <Door :hasGift="i === selectedDoor" :number="i" />
            </div>
        </div>
    </div>
</template>

<script>
import Door from './components/Door'

export default {
    name: 'App',
    components: { Door },
    data: function(){
        return {
            started: false,
            portsAmount: 3,
            selectedDoor : null
        }
    },
    
}
</script>

<style>
*{
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}

body{
    color: #fff;
    /* background: linear-gradient(to right, rgb(0, 0, 0), rgb(231, 76, 60)); */
    background: linear-gradient(to right, rgb(55, 59, 68), rgb(66, 134, 244));
}

#app{
    display: flex;
    flex-direction: column;
    align-items: center;
}

#app h1{
    /* border: 1px solid #0009; */
    box-shadow: 2px 2px 40px 8px #000000;;
    background-color: #0005;
    padding: 20px;
    margin-bottom: 60px;
}

.form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
}

.form, .form input, .form button {
    margin-bottom: 10px;
    font-size: 2rem;
}

.doors {
    align-self: stretch;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
</style>