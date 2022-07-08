import {ComponentType, useEffect} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import {useSelector} from 'react-redux';

// Types
import {RootStore} from "../store/configureStore";

const withAuth = (Component: ComponentType) => (props: any) => {
  const {pathname} = useLocation();
  const navigate = useNavigate();

  const {accessToken: isAuth} = useSelector((state: RootStore) => state.auth);


  useEffect(() => {
    if (!isAuth) {
      navigate('/auth');
    }
    if (isAuth && pathname === '/auth') {
      navigate('/');
    }
  }, [isAuth]);


  return (
    <Component {...props} />
  );
};

export default withAuth;