import { JSXElementConstructor, ReactElement, ReactNode } from "react";

export interface BlockInterface {
  type: string;
  data: {
    text:
      | string
      | number
      | boolean
      | ReactElement<any, string | JSXElementConstructor<any>>
      | Iterable<ReactNode>
      | null
      | undefined;
  };
}
