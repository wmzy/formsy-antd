import Input from 'antd/lib/input';
import {formsyComponent, mappingChangeEvent} from '../util';

const TextArea = Input.TextArea;

export default formsyComponent(mappingChangeEvent(TextArea, ev => ev.target.value), '');
