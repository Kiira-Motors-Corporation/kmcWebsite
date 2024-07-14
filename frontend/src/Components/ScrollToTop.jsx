import { useNavigate } from 'react-router-dom';

const ScrollToTop = () => {
  const navigate = useNavigate();

  const navigateToTop = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return navigateToTop;
};

export default ScrollToTop;
// onClick={() => handleItemClick(relatedItem.id)}