import classes from './Layout.module.css';
import Navbar from './Navbar'


const Layout = ({children}) => {
  return (
    <div>
      <Navbar />
      <main className={classes.main}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
