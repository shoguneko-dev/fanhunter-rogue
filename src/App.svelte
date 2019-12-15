<script>
  import Router from "svelte-spa-router";
  import AppHeader from "./components/AppHeader.svelte";
  import routes from "./routes.js";

  let name = "world";
</script>

<AppHeader />
<Router {routes} />
