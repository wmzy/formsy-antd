import Checkbox from 'antd/lib/checkbox';
import {formsyComponent, mappingChangeEvent} from '../util';

export default formsyComponent(mappingChangeEvent(Checkbox, ({target}) => target.checked), false);
