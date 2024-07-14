import { useNavigate } from 'react-router-dom';

const useNavigateToTop = () => {
  const navigate = useNavigate();

  const navigateToTop = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return navigateToTop;
};

export default useNavigateToTop;
// onClick={() => handleItemClick(relatedItem.id)}