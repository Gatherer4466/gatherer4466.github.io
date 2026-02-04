<template>
  <div class="wrapper">
    <h1 class="message">
      Lige nu er der ikke noget for forsiden,<br />
      klik på en af de der navigations knapper på siden.
    </h1>

    <img
      class="bottom-image literally just for padding fuck you if youre seing this in inspect element btw"
      src="https://cdn.7tv.app/emote/01H2EP392G0007NQZJ108V2KRR/4x.png"
      alt="Emote"
    />
  </div>
</template>

<style>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}

.message {
  background-color: aliceblue;
}

.bottom-image {
  opacity: 0;
  width: 150px;
  bottom: 0;
}
</style>
