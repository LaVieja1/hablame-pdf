<script>
  import { Input, Label, Spinner } from "flowbite-svelte";
  import { appStatusInfo } from "../store.ts";
  const { url, pages, id } = $appStatusInfo;

  let loading = false;

  const numOfImagesToShow = Math.min(pages, 4);
  const images = Array.from({ length: numOfImagesToShow }, (_, i) => {
    const page = i + 1;
    return url
      .replace("/upload/", `/upload/w_400,h_540,c_fill,pg_${page}/`)
      .replace(".pdf", ".jpg");
  });

  const handleSubmit = () => {};
</script>

<div class="grid grid-cols-4 gap-2">
  {#each images as image}
    <img
      class="rounded w-full h-auto aspect-[400/540]"
      src={image}
      alt="PDF Page"
    />
  {/each}
</div>

<form class="mt-8" on:submit={handleSubmit}>
  <Label for="question-input" class="block mb-2 text-slate-200"
    >Pregúntale al bot</Label
  >
  <Input id="question-input" required placeholder="¿De qué trata este PDF?"
  ></Input>
</form>
