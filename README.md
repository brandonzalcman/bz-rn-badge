# bz-rn-badge

Simple react native badge component

## Installation

```sh
npm install bz-rn-badge
```

## Usage
Reference example app

```js
import Badge from 'bz-rn-badge';

<Badge
    text="Label"
    bgColor="#007AFF"
    textColor="white"
    height={30}
    icon="accessibility"
/>

```
## Props
| Prop name | Type   | Description                            | Default value |
|-----------|--------|----------------------------------------|---------------|
| text      | string | Label text                             |               |
| bgColor   | string | Background color of the badge          | '#007AFF'     |
| textColor | string | Text color of the badge                | 'white'       |
| width     | number | Optional to set the width of the badge |               |
| height    | number | Optional to se the height of the badge | 30            |
| icon      | string | Set IonIcon name                       |               |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
