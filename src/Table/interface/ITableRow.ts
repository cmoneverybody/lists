import { ReactNode } from "react";
import {
  IMarkerProps,
  ICursorProps,
  IShadowProps,
  IBorderProps,
  IRoundAnglesProps,
  IPaddingProps
} from "./IGeneral";

export interface ITableRowProps
  extends IMarkerProps,
    ICursorProps,
    IShadowProps,
    IBorderProps,
    IRoundAnglesProps,
    IPaddingProps {
  children?: ReactNode;
}
