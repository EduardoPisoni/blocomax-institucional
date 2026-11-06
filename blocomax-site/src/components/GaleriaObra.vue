<script setup lang="ts">
import { computed, ref } from 'vue';
import type { Foto } from '../data/site';

const props = defineProps<{ nome: string; fotos: Foto[] }>();

const dialogo = ref<HTMLDialogElement | null>(null);
const indice = ref(0);
const atual = computed(() => props.fotos[indice.value]);

/** A primeira foto da lista é a capa do card. */
const capa = computed(() => props.fotos[0]);

function abrir() {
  indice.value = 0;
  dialogo.value?.showModal();
}

function mover(passo: number) {
  const total = props.fotos.length;
  indice.value = (indice.value + passo + total) % total;
}

function aoPressionar(evento: KeyboardEvent) {
  if (evento.key === 'ArrowRight') mover(1);
  if (evento.key === 'ArrowLeft') mover(-1);
}

/** O clique no fundo escuro chega com o próprio <dialog> como alvo. */
function aoClicar(evento: MouseEvent) {
  if (evento.target === dialogo.value) dialogo.value?.close();
}
</script>

<template>
  <button type="button" class="capa" @click="abrir">
    <img v-if="capa.src" :src="capa.src" :alt="capa.alt ?? capa.legenda" loading="lazy" />
    <span v-else class="espaco-foto"><span>{{ capa.legenda }}</span></span>
    <span class="contagem">Ver {{ fotos.length }} fotos<span class="so-leitor"> de {{ nome }}</span></span>
  </button>

  <dialog
    ref="dialogo"
    class="visor"
    :aria-label="`Fotos de ${nome}`"
    @keydown="aoPressionar"
    @click="aoClicar"
  >
    <div class="conteudo">
      <div class="linha">
        <p aria-live="polite">{{ indice + 1 }} de {{ fotos.length }}: {{ atual.legenda }}</p>
        <button type="button" class="controle" @click="dialogo?.close()">Fechar</button>
      </div>

      <div class="imagem">
        <img v-if="atual.src" :src="atual.src" :alt="atual.alt ?? atual.legenda" />
        <div v-else class="espaco-foto"><span>{{ atual.legenda }}</span></div>
      </div>

      <div class="linha">
        <button type="button" class="controle" @click="mover(-1)">Anterior</button>
        <button type="button" class="controle" @click="mover(1)">Próxima</button>
      </div>
    </div>
  </dialog>
</template>

<style scoped>
.capa {
  position: relative;
  display: block;
  overflow: hidden;
  width: 100%;
  aspect-ratio: 4 / 3;
  padding: 0;
  border: 0;
  border-radius: var(--raio-grande) var(--raio-grande) 0 0;
  background: none;
  color: var(--preto);
  font: inherit;
  cursor: pointer;
}

/* Os cantos vêm da capa, que recorta o conteúdo */
.capa .espaco-foto {
  border-radius: 0;
}

.capa:focus-visible {
  outline-offset: -3px;
}

.capa img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: scale 0.4s ease-out;
}

.contagem {
  position: absolute;
  right: 0.75rem;
  bottom: 0.75rem;
  padding: 0.375rem 0.75rem;
  border-radius: var(--raio);
  background: var(--preto);
  color: var(--branco);
  font-size: 0.875rem;
  font-weight: 600;
  transition: background-color var(--transicao), color var(--transicao);
}

/* Texto preto: branco sobre --laranja fica em 2,4:1 */
.capa:focus-visible .contagem {
  background: var(--laranja);
  color: var(--preto);
}

@media (hover: hover) {
  .capa:hover .contagem {
    background: var(--laranja);
    color: var(--preto);
  }
}

@media (hover: hover) and (prefers-reduced-motion: no-preference) {
  .capa:hover img {
    scale: 1.05;
  }
}

.visor {
  width: min(100vw - 2rem, 56rem);
  max-height: calc(100dvh - 2rem);
  padding: 0;
  border: 0;
  border-radius: var(--raio-grande);
  background: var(--branco);
  color: var(--preto);
}

.visor::backdrop {
  background: rgb(0 0 0 / 0.8);
}

.conteudo {
  display: grid;
  gap: 0.75rem;
  padding: 1rem;
}

.linha {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.linha p {
  font-weight: 600;
}

.imagem {
  width: 100%;
  height: min(60dvh, 34rem);
}

.imagem img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.controle {
  flex: none;
  min-height: 3rem;
  padding: 0.5rem 1rem;
  border: 2px solid var(--preto);
  border-radius: var(--raio);
  background: var(--branco);
  color: var(--preto);
  font: inherit;
  font-weight: 600;
  cursor: pointer;
  transition: background-color var(--transicao);
}

.controle:hover {
  background: var(--fundo-claro);
}
</style>
