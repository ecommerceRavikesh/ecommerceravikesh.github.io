import React from "react";
export const withLogOnRender = BaseComponent => props => {
  console.log(
    `%c Rendered (${BaseComponent.name})`,
    "color:black; font-weight:bold; background-color:yellow"
  );
  return <BaseComponent {...props} />;
};
