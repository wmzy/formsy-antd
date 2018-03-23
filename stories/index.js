import React from 'react';
import { addValidationRule } from 'formsy-react';

addValidationRule('required', (_, v) => !!v);
