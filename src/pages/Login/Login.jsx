import React from 'react';
import './Login.scss';

const Login = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <button className="modal-close" onClick={onClose}>х</button>
                <h2>Вход</h2>
                <form>
                    <div>
                        <label>Email:</label>
                        <input type="email" required />
                    </div>
                    <div>
                        <label>Пароль:</label>
                        <input type="password" required />
                    </div>
                    <button type="submit">Войти</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
