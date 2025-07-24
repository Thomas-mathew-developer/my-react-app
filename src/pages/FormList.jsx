import React, { useEffect, useState } from 'react';
import { getForms, deleteForm } from '../services/formService';
import { Button, Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const FormList = () => {
    const [forms, setForms] = useState([]);

    useEffect(() => {
        setForms(getForms());
    }, []);

    const handleDelete = (id) => {
        deleteForm(id);
        setForms(getForms());
    };

    return (
        <div className="container mt-4">
            <h2>Available Forms</h2>

            {forms.length === 0 ? (
                <Typography variant="body2">No forms deployed yet.</Typography>
            ) : (
                forms.map((form) => (
                    <Card key={form.id} className="mb-3">
                        <CardContent>
                            <Typography variant="h6">{form.name}</Typography>
                            <Button variant="outlined" component={Link} color="primary" to={`/form-preview/${form.id}`}>Preview</Button>
                            <Button variant="outlined" color="error" onClick={() => handleDelete(form.id)} className="ml-2">
                                Delete
                            </Button>
                        </CardContent>
                    </Card>
                ))
            )}
        </div>
    );
};

export default FormList;
