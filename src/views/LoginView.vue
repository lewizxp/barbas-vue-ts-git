<template>
    <section class="form-access">
        <form action="">
            <div class="form-group">
                <label for="email">E-mail</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    v-model="email"
                    placeholder="email@host.com.br"
                    autofocus
                />
            </div>

            <div class="form-group">
                <label for="password">Senha</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    v-model="senha"
                    placeholder="senha"
                />
            </div>

            <div class="form-group-inline">
                <input type="checkbox" name="remember" id="rem" />
                <label for="rem">Lembre-me</label>
            </div>

            <div class="form-group">
                <button @click="sendLoginEmail">Entrar</button>
            </div>

            <button class="btn btn-primary btn-lg " >Botão Grande</button>
              
         
            <div>
                <p>
                    Novo aqui?
                    <RouterLink to="/person-add">cadastre-se</RouterLink>
                </p>
                <p>
                    <router-link to="/person-recovery"
                        >esqueceu a senha?</router-link
                    >
                </p>
            </div>
            
        </form>
    </section>
</template>

<script setup lang="ts">
import { authService } from "@/core/service/auth.service";
import { ref } from "vue";

const email = ref("");
const senha = ref("");

function sendLoginEmail() {
    authService.loginEmail(email.value, senha.value);
}
</script>

<style scoped>
@import "@/assets/css/login.css";
</style>