# ngx-canvas-drawer

Contents
========
- [Getting started](#getting-started)
- [Usage](#usage)
- [API](#api)
- [Interfaces](#interfaces)
- [License](#license)

## Getting started
### Step 1: Install `ngx-canvas-drawer`:

```bash
npm install ng2-canvas-drawer --save
```

### Step 2: Import NgxCanvasDrawerModule:
```js
import { NgxCanvasDrawerModule } from 'ngx-canvas-drawer';

@NgModule({
  ...
  imports: [..., NgxCanvasDrawerModule],
  ...
})
export class SomeModule {}
```

## Usage
Define options in your consuming component:
```html
<ngx-canvas-drawer
    [elements]="[]"
    [shape]="rectangle"
    [width]="1024"
    [height]="724"
  >
  </ngx-canvas-drawer>
```

## API
### Inputs
| Input  | Type | Default | Required | Description |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| elements | ILayoutElement | undefined | yes | List where all drawn elements are stored |
| width | number | 600 | no | width of canvas |
| height | number | 600 | no | height of canvas |
| shape | 'rectangle' \| 'elips' | 'rectangle' | no | current drawing shape |
| backgroundImage | string | '' | no | canvas background image |
| backgroundColor | string | '#f2f2f2' | no | canvas background color |
| fitCanvasToImage | boolean | true | no | makes canvas the same size as provided background image |

### Outputs
| Output  | Description |
| ------------- | ------------- |
| (onAddElement)  | Fires when new element has been drawn on canvas |
| (onFocusElement)  | Fires when element has been clicked |
| (onBlurElement)  | Fires when selected element looses focus |
| (onMouseEnterElement)  | Fires when mouse enteres element |
| (onMouseLeaveElement)  | Fires when mouse leaves element |
| (onResizeEnd)  | Fires when element's resizing is over |
| (onDragEnd)  | Fires when element's draging is over |


## Interfaces
```ts
  interface ILayoutElement {
      x: number;
      y: number;
      width: number;
      height: number;
      shape: 'rectangle' | 'elips';
      color?: string // default is '#ffffff';
    }
```

## License

The MIT License (see the [LICENSE](https://github.com/valor-software/ng2-charts/blob/master/LICENSE) file for the full
text)
