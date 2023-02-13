import { ElkNodeLayoutOptions } from './layout';

export enum CanvasPosition {
  CENTER = 'center',
  TOP = 'top',
  LEFT = 'left',
  RIGHT = 'right',
  BOTTOM = 'bottom'
}

export interface NodeData<T = any> {
  /**
   * Unique ID for the node.
   */
  id: string;

  /**
   * Whether the node is disabled or not.
   */
  disabled?: boolean;

  /**
   * Text label for the node.
   */
  text?: any;

  /**
   * Maximum length of the text label before ellipsis.
   * Defaults to 35.
   */
  maxCharCount?: number;

  /**
   * Optional height attribute. If not passed,
   * defaults to minHeight.
   */
  height?: number;

  /**
   * Optional minimal height attribute. Defaults to 50.
   */
  minHeight?: number;

  /**
   * Optional width attribute. If not passed,
   * defaults to minWidth.
   */
  width?: number;
  
  /**
   * Optional minimal width attribute. Defaults to 50.
   */
  minWidth?: number;

  /**
   * Parent node id for nesting.
   */
  parent?: string;

  /**
   * List of ports.
   */
  ports?: PortData[];

  /**
   * Icon for the node.
   */
  icon?: IconData;

  /**
   * Optional padding for the node. Defaults to 30.
   */
  nodePadding?: number | [number, number] | [number, number, number, number];

  /**
   * Optional padding for icons. Defaults to 10.
   */
  iconPadding?: number;

  /**
   * Data for the node.
   */
  data?: T;

  /**
   * CSS classname for the node.
   */
  className?: string;

  /**
   * ELK layout options.
   */
  layoutOptions?: ElkNodeLayoutOptions;

  /**
   * Whether the node can be clicked.
   */
  selectionDisabled?: boolean;
}

export interface LayoutNodeData extends NodeData {
  x: number;
  y: number;
  children?: LayoutNodeData[];
}

export interface IconData {
  /**
   * URL for the icon.
   */
  url: string;

  /**
   * Height of the icon.
   */
  height: number;

  /**
   * Width of the icon.
   */
  width: number;
}

export interface EdgeData<T = any> {
  /**
   * Unique ID of the edge.
   */
  id: string;

  /**
   * Whether the edge is disabled or not.
   */
  disabled?: boolean;

  /**
   * Text label for the edge.
   */
  text?: any;

  /**
   * ID of the from node.
   */
  from?: string;

  /**
   * ID of the to node.
   */
  to?: string;

  /**
   * Optional ID of the from port.
   */
  fromPort?: string;

  /**
   * Optional ID of the to port.
   */
  toPort?: string;

  /**
   * Data about the edge.
   */
  data?: T;

  /**
   * CSS class name for the edge ("path" element).
   */
  className?: string;

  /**
   * CSS class name for the edge (main "g" element).
   */
  containerClassName?: string;

  /**
   * Optional arrow head type.
   */
  arrowHeadType?: any;

  /**
   * Parent of the edge for nesting.
   */
  parent?: string;

  /**
   * Whether the edge can be clicked.
   */
  selectionDisabled?: boolean;
}

export type PortSide = 'NORTH' | 'SOUTH' | 'EAST' | 'WEST';

export interface PortData {
  /**
   * Unique ID of the port.
   */
  id: string;

  /**
   * Port is disabled.
   */
  disabled?: boolean;

  /**
   * Height of the port.
   */
  height: number;

  /**
   * Width of the port.
   */
  width: number;

  /**
   * Whether the port is visually hidden or not.
   */
  hidden?: boolean;

  /**
   * Classname for the port.
   */
  className?: string;

  /**
   * Alignment of the port.
   */
  alignment?: 'CENTER';

  /**
   * Side the port is located.
   */
  side: PortSide;
}
