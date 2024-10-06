import { Navigate } from 'react-router-dom';

const Protected = ({ children }) => {
  const token = localStorage.getItem('token'); // Verificar si el token existe
  if (!token) {
    return <Navigate to="/login" />; // Redirigir a la página de login si no está autenticado
  }
  return children; // Renderizar los hijos si está autenticado
};

export default Protected;
