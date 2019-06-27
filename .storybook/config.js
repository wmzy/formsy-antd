import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Row, Col, Icon, Button, Modal} from 'antd';

addDecorator(withInfo({propTablesExclude: [Row, Col, Icon, Button, Modal]}));

const req = require.context('../stories', true, /\.js$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
