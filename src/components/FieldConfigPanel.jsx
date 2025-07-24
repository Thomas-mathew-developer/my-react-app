import React, { useState, useEffect } from 'react';
import { TextField, FormControlLabel, Checkbox, Button, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

const FieldConfigPanel = ({ field, onUpdate }) => {
  const [localField, setLocalField] = useState({ ...field });

  useEffect(() => {
    setLocalField({ ...field });
  }, [field]);

  const handleChange = (key, value) => {
    setLocalField({ ...localField, [key]: value });
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...localField.options];
    newOptions[index] = value;
    setLocalField({ ...localField, options: newOptions });
  };

  const addOption = () => {
    const newOptions = [...(localField.options || []), ''];
    setLocalField({ ...localField, options: newOptions });
  };

  const removeOption = (index) => {
    const newOptions = [...localField.options];
    newOptions.splice(index, 1);
    setLocalField({ ...localField, options: newOptions });
  };

  const applyChanges = () => {
    onUpdate(localField);
  };

  return (
    <div>
      <h4>Field Configuration</h4>

      <TextField
        label="Label"
        value={localField.label || ''}
        onChange={(e) => handleChange('label', e.target.value)}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Help Text"
        value={localField.helpText || ''}
        onChange={(e) => handleChange('helpText', e.target.value)}
        fullWidth
        margin="normal"
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={Boolean(localField.required)}
            onChange={(e) => handleChange('required', e.target.checked)}
          />
        }
        label="Required"
      />

      {/* Conditionally render Options for select, radio, checkbox */}
      {(localField.type === 'select' || localField.type === 'radio' || localField.type === 'checkbox') && (
        <div style={{ marginTop: '16px' }}>
          <Typography variant="subtitle1" gutterBottom>Options</Typography>
          {localField.options && localField.options.map((option, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
              <TextField
                value={option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                placeholder={`Option ${index + 1}`}
                size="small"
                style={{ flex: 1 }}
              />
              <IconButton color="error" onClick={() => removeOption(index)}>
                <DeleteIcon />
              </IconButton>
            </div>
          ))}
          <Button
            startIcon={<AddIcon />}
            onClick={addOption}
            variant="outlined"
            size="small"
            style={{ marginTop: '8px' }}
          >
            Add Option
          </Button>
        </div>
      )}

      <Button
        variant="contained"
        color="success"
        fullWidth
        onClick={applyChanges}
        style={{ marginTop: '16px' }}
      >
        Apply
      </Button>
    </div>
  );
};

export default FieldConfigPanel;
