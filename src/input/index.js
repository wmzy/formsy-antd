import Input from 'antd/lib/input';
import {mappingChangeEvent, formsyComponent} from '../util';

export default formsyComponent(mappingChangeEvent(Input, ev => ev.target.value), '');
