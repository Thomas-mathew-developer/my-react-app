import React from 'react';
import { FieldTypes } from './models/formFieldModel';
import { Button } from '@mui/material';

const FieldList = ({ onAddField }) => {
    return (
        <div>
            {Object.values(FieldTypes).map((type) => (
                <div className="list-group border-0 p-3 bg-light"
                    key={type}
                    variant="contained"
                    color="primary"
                    onClick={() => onAddField(type)}
                >
                    <div className="list-group-item list-group-item-action mb-2 text-center">
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FieldList;
