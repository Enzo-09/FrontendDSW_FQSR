// Ejemplo de cómo usar la navegación por roles
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const useRoleBasedNavigation = () => {
  const { isAuthenticated, getHomeRouteByRole } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      const homeRoute = getHomeRouteByRole();
      navigate(homeRoute);
    }
  }, [isAuthenticated, navigate, getHomeRouteByRole]);
};

// Componente de ejemplo que redirige automáticamente
export const AutoRedirect = () => {
  useRoleBasedNavigation();
  return null; // No renderiza nada, solo maneja la redirección
};

export default AutoRedirect;
