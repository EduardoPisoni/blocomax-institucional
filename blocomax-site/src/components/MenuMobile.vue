<script setup lang="ts">
import { onBeforeUnmount, ref, watch } from 'vue';

defineProps<{ itens: { href: string; rotulo: string; atual: boolean }[] }>();

const aberto = ref(false);
const botao = ref<HTMLButtonElement | null>(null);

function aoPressionar(evento: KeyboardEvent) {
  if (evento.key === 'Escape') {
    aberto.value = false;
    botao.value?.focus();
  }
}

watch(aberto, (valor) => {
  if (valor) window.addEventListener('keydown', aoPressionar);
  else window.removeEventListener('keydown', aoPressionar);
});

onBeforeUnmount(() => window.removeEventListener('keydown', aoPressionar));
</script>

<template>
  <button
    ref="botao"
    type="button"
    class="alternar"
    aria-controls="menu-mobile"
    :aria-expanded="aberto"
    @click="aberto = !aberto"
  >
    {{ aberto ? 'Fechar' : 'Menu' }}
  </button>

  <nav v-show="aberto" id="menu-mobile" class="painel" aria-label="Menu principal">
    <ul>
      <li v-for="item in itens" :key="item.href">
        <a :href="item.href" :aria-current="item.atual ? 'page' : undefined" @click="aberto = false">{{ item.rotulo }}</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.alternar {
  min-width: 5rem;
  min-height: 3rem;
  padding: 0.5rem 1rem;
  border: 2px solid var(--preto);
  border-radius: var(--raio);
  background: var(--branco);
  color: var(--preto);
  font: inherit;
  font-weight: 600;
  cursor: pointer;
}

.painel {
  position: absolute;
  inset: 100% 0 auto;
  border-top: 1px solid var(--cinza-linha);
  background: var(--branco);
  box-shadow: var(--sombra-grande);
}

.painel a {
  display: block;
  padding: 1rem var(--margem);
  border-bottom: 1px solid var(--cinza-linha);
  font-weight: 600;
  text-decoration: none;
}

.painel li:last-child a {
  border-bottom: 0;
}

.painel a:focus-visible {
  outline-offset: -3px;
}
</style>
