import About from "./pages/About.svelte";
import Contact from "./pages/Contact.svelte";
import Game from "./pages/Game.svelte";
import NotFound from "./pages/NotFound.svelte";

export default {
  "/": Game,
  "/about": About,
  "/contact": Contact,
  "*": NotFound
};