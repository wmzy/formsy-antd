# formsy-antd 

这个组件库是对 [ant-design](https://github.com/ant-design) form 组件的 [formsy-react](https://github.com/christianalfoni/formsy-react) 包装.

## Installation

To add formsy-antd to you package.json and install it, run:

```
$ npm install --save formsy-antd
```

You will also need to add formsy-react if not already installed:

```
$ npm install --save formsy-react
```


## Usage

### ES6 Imports

```js
import Input from 'formsy-antd/lib/input'; // 按需加载
```

OR:

```js
import { Input, FormItem, Form } from 'formsy-antd';
```

**注意**：需要引入antd样式(或使用[babel-plugin-antd](https://github.com/ant-design/babel-plugin-antd)插件)：
```js
import 'antd/dist/antd.css'
```
参考：http://ant.design/docs/react/introduce

### others
提供了一个工具方法来方便包装一些简单的组件(支持 onChange 和 value 属性)：
```js
import Slider from 'antd/lib/slider';
import {formsyComponent} from 'formsy-antd/lib/util';

const FormsySlider = formsyComponent(Slider, 0);
```

### Todos
0. 单元测试
0. 支持更多的表单控件


### Examples
See [examples dir](https://github.com/wmzy/formsy-antd/tree/master/examples).

## Known Issues


