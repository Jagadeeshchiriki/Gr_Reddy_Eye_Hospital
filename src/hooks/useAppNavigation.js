// src/hooks/useAppNavigation.js

import { useNavigate } from "react-router-dom";

const useAppNavigation = () => {
  const navigate = useNavigate();

  const navigateTo = (url, options = {}) => {
    const {
      replace = true,
      state = undefined,
    } = options;

    navigate(url, {
      replace,
      state,
    });
  };

  return {
    navigateTo,
  };
};

export default useAppNavigation;