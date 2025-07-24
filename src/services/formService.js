const FORM_STORAGE_KEY = 'deployedForms';

export const saveForm = (form) => {
    const existingForms = getForms();
    console.log('save form')
    existingForms.push(form);
    localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(existingForms));
    console.log('Forms after save:', existingForms);
};

export const getForms = () => {
    const stored = localStorage.getItem(FORM_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
};

export const deleteForm = (formId) => {
    const forms = getForms().filter((f) => f.id !== formId);
    localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(forms));
};

export const getFormById = (id) => {
    const forms = JSON.parse(localStorage.getItem('deployedForms')) || [];
    return forms.find(f => f.id === id);
};

