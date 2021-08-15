import "../components/header-main.ts";
import HomePage from "../pages/Home";
import CharacterPage from "../pages/Character";
import Error404Page from "../pages/Error404";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";

const routes: any = {
  "/": HomePage,
  "/:id": CharacterPage,
  "/contac": "Contact",
};

const router = async () => {
  // get the path
  const hash: string = getHash();
  const route: string = await resolveRoutes(hash);
  const render = routes[route] ? routes[route] : Error404Page;

  // get the main container
  const main: HTMLElement | null = document.getElementById("main");

  // create the header
  const header = document.createElement("header-main");

  // remove nodes from the main container
  // main && (main.innerHTML = "")
  while (main?.firstChild) {
    main.removeChild(main.firstChild);
  }

  // add nodes to the main container
  await main?.appendChild(header);
  render().then((result: any) => main?.appendChild(result));
};

export default router;
