<script lang="ts" setup>
import Card from '@/components/Card.vue'
</script>

<template class="template">
  <div class="container">
    <Card direction="row" gap="50px" justify-content="space-between" margin-top="50px">
      <div class="description">
        <h1>Sobre nós</h1>
        <p>
          A história de nosso Alambique começou há 60 atrás, com meu pai, Victor Wilbert, ele sempre
          produzia cachaças puras e raramente se arriscava em bebidas saborizadas. Não pensou em
          expandir o empreendimento e continuou como uma loja familiar, vendendo apenas para
          conhecidos. Porém após me casar eu consegui obter um espaço em meu terreno e comecei a
          construir o alambique com o objetivo de fazer aquilo que meu pai tanto gostava de fazer.
          Após concluir e começar a produção percebi que meu produto era bastante comercializado em
          minha região e que os compradores, que geralmente eram conhecidos, gostavam do meu
          produto. Contudo pensei em investir em meu comércio e hoje produzo vários tipos de sabores
          de cachaças e licores, sempre fermentados em barril de carvalho e agora são
          comercializados nos municípios de Pomerode, Blumenau, Gaspar, Luiz Alves entre outros.
        </p>
      </div>
      <div class="images">
        <img alt="Donos da cachaçaria" src="../../assets/images/owners.jpg" />
        <img alt="Interior da cachaçaria" src="../../assets/images/store.jpg" />
      </div>
    </Card>
  </div>
</template>

<style scoped>
.container {
  min-height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.card {
  padding: 42px;
  max-width: 50vw;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 50px;
}

h1 {
  margin-top: 12px;
  color: rgb(78, 46, 27);
  font-weight: bold;
  font-size: 32px;
}

p {
  margin-top: 32px;
  line-height: 1.5;
  text-align: justify;
  color: rgb(102, 68, 34);
}

.images {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
}

img {
  width: 450px;
  border-radius: 12px;
}
</style>
