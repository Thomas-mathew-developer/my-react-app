import React from 'react';
import { Paper, Typography, TextField, MenuItem, Button, FormGroup, FormControlLabel, Checkbox, Radio, RadioGroup } from '@mui/material';
import styles from './DynamicFormPreview.module.scss';

const DynamicFormPreview = ({ fields, onSelectField, onSubmit, onDeploy }) => {

    return (
        <form onSubmit={onSubmit}>
            <div className={`${styles.border} ${styles.rounded} ${styles.p3} ${styles.bgLight}`}>
                {fields.length === 0 && (
                    <Typography variant="body2" className={styles.textCenter + ' ' + styles.textMuted}>
                        Drag fields here to build your form.
                    </Typography>
                )}

                {fields.map((field, index) => (
                    <Paper key={field.id} className={`${styles.p3} ${styles.mb3} ${styles.bgWhite} ${styles.shadowSm} p-3 mb-3`}>
                        <div className={styles.formGroup}>
                            <Typography variant="subtitle1" className={styles.fontWeightBold}>
                                {field.label || '(No Label)'}
                            </Typography>

                            {field.type === 'text' && (
                                <TextField fullWidth variant="outlined" size="small" placeholder="Enter text" />
                            )}

                            {field.type === 'textarea' && (
                                <TextField fullWidth variant="outlined" size="small" multiline rows={3} placeholder="Enter text" />
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

                        <Button
                            variant="outlined"
                            size="small"
                            color="primary"
                            className={`{styles.mt1} mt-3`}
                            onClick={() => onSelectField(index)}
                        >
                            Configure
                        </Button>
                    </Paper>
                ))}
            </div>

            {fields.length > 0 && (
                <Button
                    type="button"
                    variant="contained"
                    color="success"
                    fullWidth
                    className={styles.mt4 + ' ' + styles.py2}
                    onClick={onDeploy}
                >
                    Submit Form
                </Button>

            )}
        </form>
    );
};

export default DynamicFormPreview;
