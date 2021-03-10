import { Component } from "react";

class RegisterRouter extends Component {
    state = {
        name: '',
        email: '',
        password: '',
    }

     handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ name: '', email: '', password: '' });
    }

    render() {
    const { name, email, password } = this.state;

    return (
        <div>
            <h1>Registration Page</h1>
            <form
                onSubmit={this.handleSubmit}
                autoComplete="off"  
            >
                <label style={styles.label}>
                    Имя
                <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange} />
                </label>

                <label>
                    Почта
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                    />
                </label>

                <label>
                    Password
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                    />
                </label>

                <button type="submit">Зарегистрироваться</button>
            </form>
        </div>
    )}
}

export default RegisterRouter;