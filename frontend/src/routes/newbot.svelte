<script>
  import { stores } from "@sapper/app";
  const { session } = stores();

  import "smelte/src/tailwind.css";

  import TextField from "smelte/src/components/TextField";
  import Switch from "smelte/src/components/Switch";
  import Button from "smelte/src/components/Button";
</script>

<style type="text/scss">
  .foolrow {
    width: 400px;
  }

  .row {
    display: flex;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between;
  }
  .leftitem {
    border: 0px solid;
    text-align: left;
  }
  .rightitem {
    border: 0px solid;
    text-align: right;
  }
  .headblock {
    display: flex;
    max-width: 400px;
    margin: auto;
    justify-content: space-around;
    margin-top: 7px;
    color: rgb(36, 36, 36);
  }
  main {
    text-align: center;
    padding: 0px;
  }
</style>

<svelte:head>
  <title>new bot</title>
</svelte:head>
<main>
  <div class="headblock">
    <p class="text-xl text-gray-900 dark:text-gray-300">Создание нового бота</p>

  </div>
  <div class="row">
    <div class="leftitem">
      <div class="foolrow">
        <TextField label="Комментарий" outlined />
      </div>
    </div>
  </div>

  <div class="row">

    <div class="rightitem">
      <TextField outlined size="10" />
    </div>
  </div>
  <br />
  <Button href="/">Создать</Button>
  <br />
  <br />
</main>
