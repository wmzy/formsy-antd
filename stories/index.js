import { addValidationRule } from 'formsy-react';

addValidationRule('required', (_, v) => !!v);
