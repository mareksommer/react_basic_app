import formStyles from "../styles/form";
import buttonStyles from "../styles/buttons";

export default function Home() {
  const mainWrapperStyles = `flex min-h-screen flex-col items-center justify-between p-24`;
  const formWrapperStyles = `bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4`;
  const copyRightStyles = `text-center text-gray-500 text-xs`;

  return (
    <main className={mainWrapperStyles}>
      <div className="w-full max-w-xs">
        <form className={formWrapperStyles}>
          <div className="mb-4">
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
          <div className="mb-6">
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
          <div className="flex items-center justify-between">
            <button className={buttonStyles.primary} type="button">
              Sign In
            </button>
            <a className={buttonStyles.primaryLink} href="#">
              Forgot Password?
            </a>
          </div>
        </form>
        <p className={copyRightStyles}>&copy;2023 Marek Sommerą</p>
      </div>
    </main>
  );
}
