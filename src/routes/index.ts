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
  // create containers
  const header: HTMLElement | null = document.getElementById("header");
  const content: HTMLElement | null =
    null || document.getElementById("content");
  const headerMain = document.createElement("header-main");

  const hash: string = getHash();
  const route: string = await resolveRoutes(hash);
  const render = routes[route] ? routes[route] : Error404Page;

  // render containers and header
  header && (header.innerHTML = "");
  await header?.appendChild(headerMain);
  content && (content.innerHTML = "");
  // await content?.appendChild(render());
  render().then((result: any) => content?.appendChild(result));
};

export default router;
