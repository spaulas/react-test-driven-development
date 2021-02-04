import React from "react";
import { Props } from "./types.d";
import "./DataLine.scss";

function DataLine<T>({ field, content }: Props<T>): JSX.Element {
  return (
    <div id="data-line" className="data-line">
      <h5 className="data-line--field">{field}: </h5>
      <span className="data-line--content">{content}</span>
    </div>
  );
}

export default DataLine;
