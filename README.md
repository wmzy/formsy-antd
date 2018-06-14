# formsy-antd 

This library is a wrapper for [ant-design](https://github.com/ant-design/ant-design) form components to allow them to be used with 
 [formsy-react](https://github.com/formsy-react/formsy-react).

## Installation

To add formsy-antd to you package.json and install it, run:

```
$ npm i formsy-antd
```

You will also need to add formsy-react if not already installed:

```
$ npm i formsy-react
```


## Usage

```js
import {Form, FormItem, Input} from 'formsy-antd';
function MyForm() {
  return (
    <Form onSubmit={action('submit')}>
      <FormItem required={true} label="Username">
        <Input
          name="name"
          value="wmzy"
          validations="minLength:4"
          validationError="minLength:4"
        />
      </FormItem>
      <button type="submit">submit</button>
    </Form>
  );
}
```
And import stylesheets manually:

```js
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
```
### Use modularized formsy-antd

#### Use [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) (Recommended)

```js
// .babelrc or babel-loader option
{
  "plugins": [
    ["import", { "libraryName": "formsy-antd", "style": "css" }] // `style: true` for less
  ]
}
```
This allows you to import components from antd without having to manually import the corresponding stylesheet. The antd-babel-plugin will automatically import stylesheets.

```js
// import js and css modularly, parsed by babel-plugin-import
import { DatePicker } from 'formsy-antd';
```
#### Manually import

```js
import DatePicker from 'formsy-antd/lib/date-picker';  // for js
import 'antd/lib/date-picker/style/css';        // for css
// import 'antd/lib/date-picker/style';         // that will import less
```
See also: http://ant.design/docs/react/introduce

### Wrap Customized Form Controls

There are some functions help you to wrap customized form controls.

```js
import Input from 'antd/lib/input';
import {mappingChangeEvent, formsyComponent} from 'formsy-antd/lib/util';

export default formsyComponent(mappingChangeEvent(Input, ev => ev.target.value), '');
```

### Examples
See [storybook](https://wmzy.github.io/formsy-antd/).
