import ReactDOM from "react-dom";

export type CreateContainerType = {
  container: Element;
  render: (component: JSX.Element) => void;
};

export const createContainer = (): CreateContainerType => {
  const container = document.createElement("div");

  return {
    render: (component: JSX.Element) => ReactDOM.render(component, container),
    container,
  };
};
