import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import FormBuilder from './components/form-builder/FormBuilder';
import FormList from './pages/FormList';
import FormPreviewPage from './pages/FormPreviewPage';
import Submissions from './pages/Submissions';
import SubmitForms from './pages/SubmitForms';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/form-builder" element={<FormBuilder />} />
          <Route path="/form-list" element={<FormList />} />
          <Route path="/submissions" element={<Submissions />} />
          <Route path="/submit-form" element={<SubmitForms />} />
          <Route path="/form-preview/:id" element={<FormPreviewPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
