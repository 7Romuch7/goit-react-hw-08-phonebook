import styles from './UserMenu.module.css';
export default function UserMenu() {
  /* const dispatch = useDispatch();
  const email = useSelector(authSelectors.getUsername); */

  return (
    <div style={styles.container}>
      <span style={styles.email}>Добро пожаловать, {/* {email} */}</span>
      <button type="button" /* onClick={() => dispatch(authOperations.logOut())} */>
        Выйти
      </button>
    </div>
  );
}