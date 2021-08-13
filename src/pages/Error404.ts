import "../components/error-404";

const Error404Page = () => {
  const pageContent = document.createElement("div");
  const error404 = document.createElement("error-404");
  pageContent.appendChild(error404);
  return pageContent;
};

export default Error404Page;
