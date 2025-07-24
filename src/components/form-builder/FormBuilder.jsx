import React, { useState } from 'react';
import FieldList from '../FieldList';
import FieldConfigPanel from '../FieldConfigPanel';
import DynamicFormPreview from '../form-preview/DynamicFormPreview';
import { defaultFieldConfig } from '../models/formFieldModel';
import styles from './FormBuilder.module.scss';  // ✅ Correct import
import { saveForm } from '../../services/formService';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';

const FormBuilder = () => {
    const [fields, setFields] = useState([]);
    const [selectedFieldIndex, setSelectedFieldIndex] = useState(null);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [formName, setFormName] = useState('');


    const addField = (type) => {
        const newField = {
            ...defaultFieldConfig,
            id: Date.now().toString(),
            type
        };
        setFields([...fields, newField]);
    };

    const updateField = (updatedField) => {
        const updatedFields = [...fields];
        updatedFields[selectedFieldIndex] = updatedField;
        setFields(updatedFields);
        setDialogOpen(false);
    };


    const deployForm = () => {
        if (!formName.trim()) {
            alert('Form name is required!');
            return;
        }

        const newForm = {
            id: Date.now().toString(),
            name: formName,
            fields: fields
        };

        saveForm(newForm);
        alert('Form deployed successfully!');
        setFields([]);
        setFormName('');
    };

    const openConfigPanel = (index) => {
        setSelectedFieldIndex(index);
        setDialogOpen(true);
    };



    return (
        <div className={`${styles.container} mt-4`}>
            <h2 className={`${styles.title} text-center font-weight-bold mb-5`}>
                Dynamic Form Builder
            </h2>
            <div className="row">
                <div className="col-12 col-md-4 mb-4">
                    <div className={`${styles.formElementsCard} card shadow-sm h-100`}>
                        <div className={`${styles.cardHeader} card-header`}>
                            <h5 className="mb-0">Form Elements</h5>
                        </div>
                        <FieldList onAddField={addField} />
                    </div>
                </div>
                <div className="col-12 col-md-8">
                    <div className={`${styles.card} shadow-sm`}>
                        <div className={`${styles.cardHeader} bg-success text-white text-center p-2`}>
                            <h5 className="mb-0">Form Preview</h5>
                        </div>
                        <div className={styles.cardBody}>
                            <div className="form-group mb-4">
                                <label className="font-weight-bold" htmlFor="formName">Form Name</label>
                                <input id="formName" type="text" className="form-control" name="formName"
                                    placeholder="Enter form name" onChange={(e) => setFormName(e.target.value)} />
                            </div>
                            <DynamicFormPreview
                                fields={fields} onSelectField={openConfigPanel}
                                onDeploy={deployForm}
                            />
                        </div>
                    </div>

                </div>
                {/* MUI Dialog for Field Config */}
                <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} fullWidth maxWidth="sm">
                    <DialogTitle>Configure Field</DialogTitle>
                    <DialogContent>
                        {selectedFieldIndex !== null && (
                            <FieldConfigPanel
                                field={fields[selectedFieldIndex]}
                                onUpdate={updateField}
                            />
                        )}
                    </DialogContent>
                </Dialog>
                {/* <div className="col-md-3">
                    {selectedFieldIndex !== null && (
                        <FieldConfigPanel
                            field={fields[selectedFieldIndex]}
                            onUpdate={updateField}
                        />
                    )}
                </div> */}
            </div>
        </div>
    );
};

export default FormBuilder;
