# react-native-textography

Glorified helper around https://github.com/hectahertz/react-native-typography.

The library simply uses [Material Design](https://github.com/hectahertz/react-native-typography#material-design) text styles on Android and [iOSUIKit](https://github.com/hectahertz/react-native-typography#iosuikit) text styles on iOS.

## Usage

```js
import { Caption, Subheading, Text, Title } from "react-native-textography";

function App() {
  return (
    <View>
      <Text em>Emphasized Text</Text>
      <Caption>Small Text</Caption>
      <Subheading>Small Title</Subheading>
      <Title>Title</Title>
      <Title large>Large Title</Title>

      <Text type={isAndroid ? "display4" : "caption2"}>Weird Text</Text>
    </View>
  );
}
```

## The `em` property

### Android

The `em` property is mostly ignored on Android unless used with the `<Text />` component, it will then use the `body2` Android text style instead of the `body1`.

```js
<Text em /> // --> body2
```

### iOS

On iOS it always adds the suffix `Emphasized` to the current chosen iOS text style:

```js
<Caption em /> // --> footnoteEmphasized
<Text em /> // --> bodyEmphasized
<Suheading em /> // --> subheadEmphasized
<Title em /> // --> title3Emphasized
```

## Weights

For convenience you can specify [weight](https://github.com/hectahertz/react-native-typography#system-weights) on all components:

```js
<Text thin />
<Caption light />
<Title regular />
<Text semibold />
<Text bold />
// ...
```

## Text style names reference

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
