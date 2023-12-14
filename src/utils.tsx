import React from 'react';
import { I18nManager, Platform, StyleSheet } from 'react-native';

import type { StyleProp, ViewStyle } from 'react-native';

export const isRtl = I18nManager.isRTL;
export const isWeb = Platform.OS === 'web';

/** - To find the index of an element in a two-dimensional array. */
export function findIndexIn2DArray<T>(array: T[][], evaluate: (target: T) => boolean): [number, number] | [null, null] {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (evaluate(array[i][j])) return [i, j];
    }
  }
  return [null, null];
}

/** - Get a specific property from a react native style object */
export function getStyle<T extends keyof ViewStyle>(style: StyleProp<ViewStyle>, property: T): ViewStyle[T] | undefined {
  const flattened = StyleSheet.flatten(style);
  return flattened[property];
}

/** - Clamp a number value between `0` and a max value */
export function clamp(v: number, max: number) {
  'worklet';
  return Math.min(Math.max(v, 0), max);
}

/** - Convert `HSV` color to an `HSLA` string representation */
export function HSVA2HSLA_string(h: number, s: number, v: number, a = 1) {
  'worklet';

  s = s / 100;
  v = v / 100;

  const l = ((2 - s) * v) / 2,
    sl = s * v,
    sln = l !== 0 && l !== 1 ? sl / (l < 0.5 ? l * 2 : 2 - l * 2) : sl;

  return `hsla(${h}, ${sln * 100}%, ${l * 100}%, ${a})`;
}

/** - Convert `HSV` color to an `RGBA` object representation */
export function HSVA2RGBA(h: number, s: number, v: number, a = 1) {
  'worklet';

  h = h / 360;
  s = s / 100;
  v = v / 100;

  const i = Math.floor(h * 6),
    f = h * 6 - i,
    p = v * (1 - s),
    q = v * (1 - f * s),
    t = v * (1 - (1 - f) * s);

  let r = 0,
    g = 0,
    b = 0;
  switch (i % 6) {
    case 0:
      r = v;
      g = t;
      b = p;
      break;
    case 1:
      r = q;
      g = v;
      b = p;
      break;
    case 2:
      r = p;
      g = v;
      b = t;
      break;
    case 3:
      r = p;
      g = q;
      b = v;
      break;
    case 4:
      r = t;
      g = p;
      b = v;
      break;
    case 5:
      r = v;
      g = p;
      b = q;
      break;
  }

  return {
    r: clamp(r * 255, 255),
    g: clamp(g * 255, 255),
    b: clamp(b * 255, 255),
    a: clamp(a, 1),
  };
}

/** - Convert `RGBA` color to an `HSVA`  object representation */
export function RGBA2HSVA(r: number, g: number, b: number, a = 1) {
  'worklet';

  r = r / 255;
  g = g / 255;
  b = b / 255;

  const max = Math.max(r, g, b),
    min = Math.min(r, g, b),
    d = max - min,
    v = max,
    s = max === 0 ? 0 : d / max;

  let h = 0;

  if (max === min) {
    h = 0;
  } else {
    if (max === r) {
      h = (g - b) / d + (g < b ? 6 : 0);
    } else if (max === g) {
      h = (b - r) / d + 2;
    } else if (max === b) {
      h = (r - g) / d + 4;
    }
    h = h / 6;
  }

  return {
    h: clamp(h * 360, 360),
    s: clamp(s * 100, 100),
    v: clamp(v * 100, 100),
    a: clamp(a, 1),
  };
}

/** - Convert an `RGB` color to its corresponding `Hex` color */
export function RGB_HEX(r: number, g: number, b: number, a = 1): string {
  'worklet';
  const red = Math.round(r).toString(16).padStart(2, '0');
  const green = Math.round(g).toString(16).padStart(2, '0');
  const blue = Math.round(b).toString(16).padStart(2, '0');
  const alpha = Math.round(clamp(a * 255, 255))
    .toString(16)
    .padStart(2, '0');

  return `#${red + green + blue + alpha}`;
}

/** - Convert an `HSV` color to its corresponding `Hex` color */
export function HSVA2HEX(h: number, s: number, v: number, a = 1) {
  'worklet';
  const { r, g, b, a: alpha } = HSVA2RGBA(h, s, v, a);
  return RGB_HEX(r, g, b, alpha);
}

/** - Returns the perceived `luminance` of a color, from `0-1` as defined by Web Content Accessibility Guidelines (Version 2.0). */
export function getLuminanceWCAG(h: number, s: number, v: number): number {
  'worklet';
  const { r, g, b } = HSVA2RGBA(h, s, v);
  const a = [r, g, b].map(val => (val / 255 <= 0.03928 ? val / 255 / 12.92 : Math.pow((val / 255 + 0.055) / 1.055, 2.4)));
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

/** - Calculates the contrast ratio between two colors, useful for ensuring accessibility and readability. */
export function contrastRatio(color1: { h: number; s: number; v: number }, color2: { h: number; s: number; v: number }): number {
  'worklet';
  const luminance1 = getLuminanceWCAG(color1.h, color1.s, color1.v);
  const luminance2 = getLuminanceWCAG(color2.h, color2.s, color2.v);
  const contrast = (Math.max(luminance1, luminance2) + 0.05) / (Math.min(luminance1, luminance2) + 0.05);
  return Math.round(contrast * 100) / 100;
}

/** - Render children only if the `render` property is `true` */
export function ConditionalRendering(props: { children: React.ReactNode; if: boolean }) {
  if (!props.if) return null;
  return <>{props.children}</>;
}

/** - Render children for native platforms only (Android, IOS) */
export function RenderNativeOnly({ children }: { children: React.ReactNode }) {
  if (isWeb) return null;
  return <>{children}</>;
}

/** - Render children for Web platform only */
export function RenderWebOnly({ children }: { children: React.ReactNode }) {
  if (!isWeb) return null;
  return <>{children}</>;
}

/**
 * Enable Android hardware texture rendering for Android Nougat(API 24) to Pie(API 28)
 * to address an issue when applying a transform on a View with a border radius > 0.
 *
 * See: https://github.com/facebook/react-native/issues/18266
 */
export const enableAndroidHardwareTextures = Platform.OS === 'android' && Platform.Version >= 24 && Platform.Version <= 28;
