import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Form Builder
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/form-builder">Builder</Button>
        <Button color="inherit" component={Link} to="/form-list">Forms</Button>
        <Button color="inherit" component={Link} to="/submissions">Submissions</Button>
        <Button color="inherit" component={Link} to="/submit-forms">Submit</Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
