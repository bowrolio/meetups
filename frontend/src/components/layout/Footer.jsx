import classes from './Footer.module.css';

function Footer() {
  return (
    <footer className={classes.footer}>
      <a href='/logout'>Logout</a>
    </footer>
  );
}

export default Footer;
