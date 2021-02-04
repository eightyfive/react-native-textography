# react-native-textography

Glorified helper around [`react-native-typography`](https://github.com/hectahertz/react-native-typography).

The library simply uses [Material Design](https://github.com/hectahertz/react-native-typography#material-design) text styles on Android and [iOSUIKit](https://github.com/hectahertz/react-native-typography#iosuikit) text styles on iOS.

## Usage

```js
import { Caption, Subheading, Text, Title } from "react-native-textography";

function App() {
  return (
    <>
      <Text>Body Text</Text>

      <Text em>Emphasized Text</Text>

      <Caption>Small Text</Caption>

      <Subheading>Small Title</Subheading>

      <Title>Title</Title>

      <Title large>Large Title</Title>

      <Text type={isAndroid ? "display4" : "caption2"}>Weird Text</Text>
    </>
  );
}
```

## Text styles reference

| Component            | Android    | iOS                  |
| -------------------- | ---------- | -------------------- |
| `<Caption />`        | caption    | footnote             |
| `<Caption em />`     | caption    | footnoteEmphasized   |
| `<Text />`           | body1      | body                 |
| `<Text em />`        | body2      | bodyEmphasized       |
| `<Subheading />`     | subheading | subhead              |
| `<Subheading em />`  | subheading | subheadEmphasized    |
| `<Title />`          | title      | title3               |
| `<Title em />`       | title      | title3Emphasized     |
| `<Title large />`    | display1   | largeTitleEmphasized |
| `<Title large em />` | display1   | largeTitleEmphasized |

> **Note**: The `em` property is mostly ignored on Android.

## The `white` property

The `white` property adds the "White" suffix to the current text style name:

```js
// Android
<Text white /> // --> body1White
<Title large white /> // --> display1White

// iOS
<Text white /> // --> bodyWhite
<Title large white /> // --> largeTitleEmphasizedWhite
// ...
```

## Weights

For convenience you can specify the [font weight](https://github.com/hectahertz/react-native-typography#system-weights) on all components:

```js
<Text thin />
<Caption light />
<Title regular />
<Text semibold />
<Subheading bold />
// ...
```
