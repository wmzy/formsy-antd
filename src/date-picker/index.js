import DatePicker from 'antd/lib/date-picker';
import {formsyComponent} from '../util';


const {MonthPicker, RangePicker, WeekPicker} = DatePicker;
const FormsyDatePicker = formsyComponent(DatePicker);
FormsyDatePicker.MonthPicker = formsyComponent(MonthPicker);
FormsyDatePicker.RangePicker = formsyComponent(RangePicker);
FormsyDatePicker.WeekPicker = formsyComponent(WeekPicker);

export default FormsyDatePicker;
