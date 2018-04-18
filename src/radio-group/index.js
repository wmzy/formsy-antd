import Radio from 'antd/lib/radio';
import {formsyComponent, mappingChangeEvent} from '../util';

const RadioGroup = Radio.Group;

export default formsyComponent(mappingChangeEvent(RadioGroup, ev => ev.target.value), null);
