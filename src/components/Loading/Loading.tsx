import React, { PropsWithChildren } from "react";
import { Props } from "./types.d";

function Loading({ loading, children }: PropsWithChildren<Props>): JSX.Element {
  return (
    <div id="loading-wrapper" className={`loading-wrapper ${loading ? "loading" : ""}`}>
      {children}
    </div>
  );
}

export default Loading;
