<script>
  import { Alert } from "flowbite-svelte";
  import { APP_STATUS, appStatus } from "../store.ts";
</script>

<!-- Bloque IF-->
{#if $appStatus === APP_STATUS.INIT}
  <p>La página inicial</p>
{:else if $appStatus === APP_STATUS.LOADING}
  <p>Cargando...</p>
{:else if $appStatus === APP_STATUS.ERROR}
  <Alert color="dark">
    <span class="font-medium">Ups...</span>
    Hay un error en la aplicación
  </Alert>
{:else if $appStatus === APP_STATUS.CHAT_MODE}
  <p>Chat mode</p>
{:else}
  <Alert color="dark">
    <span class="font-medium">Acción desconocida</span>
    Este estado de la aplicación no esta reconocido
  </Alert>
{/if}
