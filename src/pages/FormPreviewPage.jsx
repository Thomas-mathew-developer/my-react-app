import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFormById } from '../services/formService';
import styles from './page-styles.module.scss';
import { Paper, Typography, TextField, MenuItem, Button, FormGroup, FormControlLabel, Checkbox, Radio, RadioGroup } from '@mui/material';

const FormPreviewPage = () => {
    const { id } = useParams();
    const [form, setForm] = useState(null);

    useEffect(() => {
        const fetchedForm = getFormById(id);
        setForm(fetchedForm);
    }, [id]);

    console.log(id)
    console.log(form)

    if (!form) return <Typography>Loading form...</Typography>;

    return (
        <div className="container mt-4">
            <Typography variant="h4" gutterBottom>{form.name}</Typography>

            <div className={`${styles.border} ${styles.rounded} ${styles.p3} ${styles.bgLight}`}>
                {form.fields.map(field => (
                    <Paper key={field.id} className={`${styles.p3} ${styles.mb3} ${styles.bgWhite} ${styles.shadowSm} p-3 mb-3`}>
                        <div className={styles.formGroup}>
                            <Typography variant="subtitle1" className={styles.fontWeightBold}>
                                {field.label || '(No Label)'}
                            </Typography>

                            {field.type === 'text' && (
                                <TextField fullWidth variant="outlined" size="small" placeholder="Enter text" disabled />
                            )}

                            {field.type === 'textarea' && (
                                <TextField fullWidth variant="outlined" size="small" multiline rows={3} placeholder="Enter text" disabled />
                            )}

                            {field.type === 'date' && (
                                <TextField fullWidth type="date" variant="outlined" size="small" />
                            )}

                            {field.type === 'select' && (
                                <TextField select fullWidth variant="outlined" size="small">
                                    {field.options.map((opt, i) => (
                                        <MenuItem key={i} value={opt || ''}>
                                            {opt}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            )}

                            {field.type === 'radio' && (
                                <RadioGroup>
                                    {field.options.map((opt, i) => (
                                        <FormControlLabel
                                            key={i}
                                            value={opt}
                                            control={<Radio />}
                                            label={opt}
                                        />
                                    ))}
                                </RadioGroup>
                            )}

                            {field.type === 'checkbox' && (
                                <FormGroup>
                                    {field.options.map((opt, i) => (
                                        <FormControlLabel
                                            key={i}
                                            control={<Checkbox />}
                                            label={opt}
                                        />
                                    ))}
                                </FormGroup>
                            )}

                            {field.helpText && (
                                <Typography variant="caption" className={styles.textMuted + ' ' + styles.mt1}>
                                    {field.helpText}
                                </Typography>
                            )}
                        </div>
                    </Paper>
                ))}
            </div>




            {/* {form.fields.map(field => (
                <Paper key={field.id} className="p-3 mb-3">
                    <Typography variant="subtitle1"><strong>Label:</strong> {field.label}</Typography>
                    <Typography variant="body2"><strong>Type:</strong> {field.type}</Typography>
                    {field.helpText && <Typography variant="body2"><strong>Help:</strong> {field.helpText}</Typography>}
                    {field.options.length > 0 && (
                        <Typography variant="body2"><strong>Options:</strong> {field.options.join(', ')}</Typography>
                    )}
                </Paper>
            ))} */}
        </div>
    );
};

export default FormPreviewPage;
