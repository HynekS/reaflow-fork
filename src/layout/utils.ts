import calculateSize from 'calculate-size';
import { NodeData } from '../types';
import ellipsize from 'ellipsize';

const MAX_CHAR_COUNT = 35;
const MIN_NODE_WIDTH = 50;
const MIN_NODE_HEIGHT = 50;
const NODE_PADDING = 30;
const ICON_PADDING = 10;

export function measureText(text: string) {
  let result = { height: 0, width: 0 };

  if (text) {
    result = calculateSize(text, {
      font: 'Arial, sans-serif',
      fontSize: '14px'
    });
  }

  return result;
}

export function parsePadding(padding: NodeData['nodePadding']) {
  let top = NODE_PADDING;
  let right = NODE_PADDING;
  let bottom = NODE_PADDING;
  let left = NODE_PADDING;

  if (Array.isArray(padding)) {
    if (padding.length === 2) {
      top = padding[0];
      bottom = padding[0];
      left = padding[1];
      right = padding[1];
    } else if (padding.length === 4) {
      top = padding[0];
      right = padding[1];
      bottom = padding[2];
      left = padding[3];
    }
  } else if (padding !== undefined) {
    top = padding;
    right = padding;
    bottom = padding;
    left = padding;
  }

  return {
    top,
    right,
    bottom,
    left
  };
}

export function formatText(node: NodeData) {
  const maxCharCount = node.maxCharCount || MAX_CHAR_COUNT;
  const text = node.text ? ellipsize(node.text, maxCharCount) : node.text;

  const labelDim = measureText(text);
  const nodePadding = parsePadding(node.nodePadding);

  let width = node.width;
  let minWidth = node.minWidth || MIN_NODE_WIDTH
  let iconPadding = node.iconPadding || ICON_PADDING
  if (width === undefined) {
    if (text && node.icon) {
      width = labelDim.width + node.icon.width + nodePadding.left + nodePadding.right + iconPadding;
    } else {
      if (text) {
        width = labelDim.width + nodePadding.left + nodePadding.right;
      } else if (node.icon) {
        width = node.icon.width + nodePadding.left + nodePadding.right;
      }

      width = Math.max(width, minWidth);
    }
  }

  let height = node.height;
  let minHeight = node.minHeight || MIN_NODE_HEIGHT
  if (height === undefined) {
    if (text && node.icon) {
      height = labelDim.height + node.icon.height;
    } else if (text) {
      height = labelDim.height + nodePadding.top + nodePadding.bottom;
    } else if (node.icon) {
      height = node.icon.height + nodePadding.top + nodePadding.bottom;
    }

    height = Math.max(height, minHeight);
  }

  return {
    text,
    originalText: node.text,
    width,
    height,
    nodePadding,
    labelHeight: labelDim.height,
    labelWidth: labelDim.width
  };
}
