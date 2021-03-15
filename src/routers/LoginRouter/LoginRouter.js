import { Component } from "react";
import { connect } from "react-redux";
import { authOperations } from '../../redux/auth';
import styles from './LoginRouter.module.css';

class LoginRouter extends Component {
    state = {
        email: '',
        password: '',
    }

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    }

    handleSubmit = event => {
        event.preventDefault();

        this.props.onLogin(this.state);

        this.setState({ name: '', email: '', password: '' });
    }

render() {
    const { email, password } = this.state;

    return (
        <div className={styles.loginPage}>
            <form className={styles.formLogin}
                onSubmit={this.handleSubmit}
                autoComplete="off"  
            >
                <label className={styles.labelLogin}>
                    Email
                    <input className={styles.inputLogin}
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={this.handleChange}
                    />
                </label>

                <label className={styles.labelLogin}>
                    Password
                    <input className={styles.inputLogin}
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={this.handleChange}
                    />
                </label>

                {/* <button className={styles.btnLogin} type="submit">Login</button> */}
                {this.state.email && this.state.password > 0
                    ? <button className={styles.btnLogin} type="submit">Login</button>
                    : <button disabled className={styles.btnLogin} type="submit">Login</button>}
            </form>
        </div>
    )}
}

const mapDispatchToProps = {
    onLogin: authOperations.login,
}

export default connect(null, mapDispatchToProps) (LoginRouter);