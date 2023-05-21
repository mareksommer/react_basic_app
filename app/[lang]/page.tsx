import formStyles from "../../styles/form";
import buttonStyles from "../../styles/buttons";

export default function Login() {
  return (
    <main className={styles.mainWrapper}>
      <div className={styles.formWrapper}>
        <form className={styles.formElement}>
          <div className={styles.inputWrapper}>
            <label className={formStyles.label} htmlFor="username">
              Username
            </label>
            <input
              className={formStyles.input}
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className={styles.inputWrapper}>
            <label className={formStyles.label} htmlFor="password">
              Password
            </label>
            <input
              className={`${formStyles.input} ${formStyles.inputError}`}
              id="password"
              type="password"
              placeholder="******************"
            />
            <p className={formStyles.errorMessage}>Please choose a password.</p>
          </div>
          <div className={styles.buttonsWrapper}>
            <button className={buttonStyles.primary} type="button">
              Sign In
            </button>
            <a className={buttonStyles.primaryLink} href="#">
              Forgot Password?
            </a>
          </div>
        </form>
        <p className={styles.copyRight}>&copy;2023 Marek Sommer</p>
      </div>
    </main>
  );
}

const styles = {
  mainWrapper: `flex min-h-screen flex-col items-center justify-between p-24`,
  formWrapper: `w-full max-w-xs`,
  formElement: `bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4`,
  inputWrapper: `mb-6`,
  buttonsWrapper: `flex items-center justify-between`,
  copyRight: `text-center text-gray-500 text-xs`,
};
