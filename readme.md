:red_circle: :green_circle: :large_blue_circle:

# Reanimated Color Picker

![npm](https://img.shields.io/npm/v/reanimated-color-picker?style=for-the-badge)
![GitHub](https://img.shields.io/github/license/alabsi91/reanimated-color-picker?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues/alabsi91/reanimated-color-picker?style=for-the-badge)
![Platform](https://img.shields.io/badge/Platform-IOS%20%7C%20Android%20%7C%20Expo%20%7C%20Web-informational?style=for-the-badge)

### - Pure JavaScript color picker for react-native.

### - Highly customizable.

### - Supports IOS, Android, Expo and Web platforms.

### - Supports right to left (RTL) layout.

### :warning: :warning: Warning :warning: :warning:

- This project is still in beta stage.
- Some properties may change.

![Example_1](https://github.com/alabsi91/reanimated-color-picker/blob/main/images/example_1.png?raw=true)
![Example_2](https://github.com/alabsi91/reanimated-color-picker/blob/main/images/example_2.png?raw=true)
![Example_3](https://github.com/alabsi91/reanimated-color-picker/blob/main/images/example_3.png?raw=true) ![Example_4](https://github.com/alabsi91/reanimated-color-picker/blob/main/images/example_4.png?raw=true)

# :small_blue_diamond: Table of contents

- :one: [Prerequisites](#small_blue_diamondprerequisites)

- :two: [Installation](#small_blue_diamondinstallation)

- :three: [Usage](#small_blue_diamondusage)

- :four: [API](#small_blue_diamondapi)

  - [ColorPicker Wrapper](#small_red_trianglecolorpicker-wrapper)
  - [Built-in Components](#small_red_trianglebuilt-in-components)
    - [`<Preview />`](#small_orange_diamondpreview-)
    - [`<PreviewText />`](#small_orange_diamondpreviewtext-)
    - [`<Panel1 />`](#small_orange_diamondpanel1-)
    - [`<Panel2 />`](#small_orange_diamondpanel2-)
    - [`<HueSlider />`](#small_orange_diamondhueslider-)
    - [`<SaturationSlider />`](#small_orange_diamondsaturationslider-)
    - [`<BrightnessSlider />`](#small_orange_diamondbrightnessslider-)
    - [`<OpacitySlider />`](#small_orange_diamondopacityslider-)
    - [`<Swatches />`](#small_orange_diamondswatches-)

- :five: [Example](#small_blue_diamondexample)

- :six: [License](#small_blue_diamondlicense)

# :small_blue_diamond:Prerequisites

- Use the links below to follow the installation instructions.

- [react-native-gesture-handler](https://docs.swmansion.com/react-native-gesture-handler/docs/installation) version `2.0.0` or higher.

- [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation) version `2.0.0` or higher.

- For `Expo` manged workflow version `44` or higher is required.

# :small_blue_diamond:Installation

> **Note**
> First we need to install [react-native-gesture-handler](https://docs.swmansion.com/react-native-gesture-handler/docs/installation)(>=2.0.0) and [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation)(>=2.0.0),

- Open a Terminal in the project root and run:

```
npm i reanimated-color-picker
```

# :small_blue_diamond:Usage

- You can add, remove, rearrange or style the color picker's built-in components.
- You can also add your components.

- Check out the working examples:
  - [Bare workflow](https://github.com/alabsi91/reanimated-color-picker/tree/main/Example)
  - [Expo managed workflow](https://github.com/alabsi91/reanimated-color-picker/tree/main/ExampleExpo)
  - [Expo snack](https://snack.expo.dev/@alabsi91/reanimated-color-picker)

```jsx
import React, { useState } from 'react';
import { Button, Modal, View } from 'react-native';

import ColorPicker, { Panel1, Swatches, Preview, OpacitySlider, HueSlider } from 'reanimated-color-picker';

export default function App() {
  const [showModal, setShowModal] = useState(false);

  const onSelectColor = ({ hex }) => {
    // do something with the selected color
    console.log(hex);
  };

  return (
    <View style={styles.container}>
      <Button title='Color Picker' onPress={() => setShowModal1(true)} />

      <Modal visible={showModal}>
        <ColorPicker value='red' onComplete={onSelectColor}>
          <Preview />
          <Panel1 />
          <HueSlider />
          <OpacitySlider />
          <Swatches />
        </ColorPicker>

        <Button title='Ok' onPress={() => setShowModal(false)} />
      </Modal>
    </View>
  );
}
```

# :small_blue_diamond:API

## :small_red_triangle:ColorPicker Wrapper

- The `ColorPicker` Wrapper is responsible for managing the built-in components.

- It has the following props:

### :small_orange_diamond:value

- The initial value of the color picker.
- Accepts `'hex'`, `'rgb'`, `'rgba'`, `'hsl'`, `'hsla'` and `named color` formats.
- `type: string`
- `default: '#418181'`

### :small_orange_diamond:slidersThickness

- A global style to change the thickness of all descendant sliders components.
- The thickness is the slider's width in case of `vertical` orientation and height in case of `horizontal` orientation.
- `type: number`
- `default: 25`

### :small_orange_diamond:thumbsSize

- A global style to change the thumb size of all descendant sliders components.
- `type: number`
- `default: 35`

### :small_orange_diamond:style

- Color picker's container style.
- If you want to change the width using the `width` property.
- `type: StyleProp<ViewStyle>`

> **Note** some style properties will be overwritten.

### :small_orange_diamond:onChange

- Called every time the color value changed.
- The passed color object has the following properties: `hex`, `rgb`, `rgba`, `hsl` and `hsla`
- `type: (color: object) => void`
- `default: null`

### :small_orange_diamond:onComplete

- Called when the user releases the slider handle or when a swatch is clicked.
- The passed color object has the following properties: `hex`, `rgb`, `rgba`, `hsl` and `hsla`
- `type: (color: object) => void`
- `default: null`

## :small_red_triangle:Built-in Components

### :small_orange_diamond:`<Preview />`

![preview](https://github.com/alabsi91/reanimated-color-picker/blob/main/images/preview.png?raw=true)

- The preview of the selected and the initial color.

| Property         |          Type          | Default | Description                                                                                   |
| :--------------- | :--------------------: | :-----: | :-------------------------------------------------------------------------------------------- |
| colorFormat      |        `string`        | `'hex'` | preview color text format: `'hex'`, `'rgb'`, `'rgba'`, `'hsl'`, `'hsla'`, `'hsv'` or `'hsva'` |
| hideInitialColor |       `boolean`        | `false` | hide the initial color preview part                                                           |
| hideText         |       `boolean`        | `false` | hide preview color texts                                                                      |
| style            | `StyleProp<ViewStyle>` |    /    | preview container style                                                                       |
| textStyle        | `StyleProp<TextStyle>` |    /    | preview text style                                                                            |

> **Note** some style properties will be overwritten.

### :small_orange_diamond:`<PreviewText />`

- A React Native `<Text>` component that displays the preview color text.

| Property    |          Type          | Default | Description                                                                                   |
| :---------- | :--------------------: | :-----: | :-------------------------------------------------------------------------------------------- |
| colorFormat |        `string`        | `'hex'` | preview color text format: `'hex'`, `'rgb'`, `'rgba'`, `'hsl'`, `'hsla'`, `'hsv'` or `'hsva'` |
| style       | `StyleProp<TextStyle>` |    /    | preview text style                                                                            |

### :small_orange_diamond:`<Panel1 />`

![panel1](https://github.com/alabsi91/reanimated-color-picker/blob/main/images/panel1.png?raw=true)

- A square-shaped slider (adobe style) used for changing the color's brightness and saturation.

> **Note** you need to add [`<HueSlider />`](#small_orange_diamondhueslider-) alongside with it.

| Property  |          Type          | Default | Description                                 |
| :-------- | :--------------------: | :-----: | :------------------------------------------ |
| thumbSize |        `number`        |  `35`   | panel's handle (thumb) size (height\*width) |
| style     | `StyleProp<ViewStyle>` |    /    | panel's container style                     |

> **Note** some style properties will be overwritten.

### :small_orange_diamond:`<Panel2 />`

![panel2](https://github.com/alabsi91/reanimated-color-picker/blob/main/images/panel2.png?raw=true)

- A square-shaped slider (windows style) used for changing the color's hue and saturation.

> **Note** you need to add [`<BrightnessSlider />`](#small_orange_diamondbrightnessslider-) alongside with it.

| Property  |          Type          | Default | Description                                 |
| :-------- | :--------------------: | :-----: | :------------------------------------------ |
| thumbSize |        `number`        |  `35`   | panel's handle (thumb) size (height\*width) |
| style     | `StyleProp<ViewStyle>` |    /    | panel's container style                     |

> **Note** some style properties will be overwritten.

### :small_orange_diamond:`<HueSlider />`

![hue](https://github.com/alabsi91/reanimated-color-picker/blob/main/images/hue.png?raw=true)

- A slider to change color's hue.

| Property  |          Type          | Default | Description                                    |
| :-------- | :--------------------: | :-----: | :--------------------------------------------- |
| thumbSize |        `number`        |  `35`   | hue slider handle (thumb) size (height\*width) |
| ringColor |        `string`        | `#fff`  | the color of the ring around the slider handle |
| reverse   |       `boolean`        | `false` | reverse slider direction                       |
| vertical  |       `boolean`        | `false` | change slider orientation                      |
| style     | `StyleProp<ViewStyle>` |    /    | hue slider container style                     |

> **Note** some style properties will be overwritten.

### :small_orange_diamond:`<SaturationSlider />`

![saturation](https://github.com/alabsi91/reanimated-color-picker/blob/main/images/saturation.png?raw=true)

- A slider to change color's saturation.

| Property  |          Type          | Default | Description                                           |
| :-------- | :--------------------: | :-----: | :---------------------------------------------------- |
| thumbSize |        `number`        |  `35`   | saturation slider handle (thumb) size (height\*width) |
| ringColor |        `string`        | `#fff`  | the color of the ring around the slider handle        |
| reverse   |       `boolean`        | `false` | reverse slider direction                              |
| vertical  |       `boolean`        | `false` | change slider orientation                             |
| style     | `StyleProp<ViewStyle>` |    /    | saturation slider container style                     |

> **Note** some style properties will be overwritten.

### :small_orange_diamond:`<BrightnessSlider />`

![brightness](https://github.com/alabsi91/reanimated-color-picker/blob/main/images/brightness.png?raw=true)

- A slider to change color brightness.

| Property  |          Type          | Default | Description                                           |
| :-------- | :--------------------: | :-----: | :---------------------------------------------------- |
| thumbSize |        `number`        |  `35`   | brightness slider handle (thumb) size (height\*width) |
| ringColor |        `string`        | `#fff`  | the color of the ring around the slider handle        |
| reverse   |       `boolean`        | `false` | reverse slider direction                              |
| vertical  |       `boolean`        | `false` | change slider orientation                             |
| style     | `StyleProp<ViewStyle>` |    /    | brightness slider container style                     |

> **Note** some style properties will be overwritten.

### :small_orange_diamond:`<OpacitySlider />`

![opacity](https://github.com/alabsi91/reanimated-color-picker/blob/main/images/opacity.png?raw=true)

- A slider to change color's opacity.

| Property  |          Type          | Default | Description                                        |
| :-------- | :--------------------: | :-----: | :------------------------------------------------- |
| thumbSize |        `number`        |  `35`   | opacity slider handle (thumb) size (height\*width) |
| ringColor |        `string`        | `#fff`  | the color of the ring around the slider handle     |
| reverse   |       `boolean`        | `false` | reverse slider direction                           |
| vertical  |       `boolean`        | `false` | change slider orientation                          |
| style     | `StyleProp<ViewStyle>` |    /    | opacity slider container style                     |

> **Note** some style properties will be overwritten.

### :small_orange_diamond:`<Swatches />`

![swatches](https://github.com/alabsi91/reanimated-color-picker/blob/main/images/swatches.png?raw=true)

- A list of colored swatches is used for quick color selection.

| Property    |          Type          |     Default     | Description              |
| :---------- | :--------------------: | :-------------: | :----------------------- |
| colors      |       `string[]`       | material colors | custom swatches colors   |
| style       | `StyleProp<ViewStyle>` |        /        | swatches container style |
| swatchStyle | `StyleProp<ViewStyle>` |        /        | swatch style             |

> **Note** some style properties will be overwritten.

# :small_blue_diamond:Example

- [Bare workflow](https://github.com/alabsi91/reanimated-color-picker/tree/main/Example)
- [Expo managed workflow](https://github.com/alabsi91/reanimated-color-picker/tree/main/ExampleExpo)
- [Expo snack](https://snack.expo.dev/@alabsi91/reanimated-color-picker)

# :small_blue_diamond:License

- Reanimated Color Picker library is licensed under [**The MIT License.**](https://github.com/alabsi91/reanimated-color-picker/blob/main/LICENSE)
