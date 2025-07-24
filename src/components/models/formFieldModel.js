export const FieldTypes = {
    TEXT: 'text',
    TEXTAREA: 'textarea',
    SELECT: 'select',
    RADIO: 'radio',
    CHECKBOX: 'checkbox'
};

export const defaultFieldConfig = {
    label: '',
    type: FieldTypes.TEXT,
    required: false,
    helpText: '',
    options: [],
    validations: {
        minLength: null,
        maxLength: null,
        pattern: ''
    }
};

export const availableFields = ['text', 'textarea', 'date', 'select', 'radio', 'checkbox'];

