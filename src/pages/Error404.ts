import "../components/error-404";

const Error404Page = async () => {
  const pageContent = document.createElement("div");
  pageContent.innerHTML = "<error-404></error-404>";
  return pageContent;
};

export default Error404Page;
