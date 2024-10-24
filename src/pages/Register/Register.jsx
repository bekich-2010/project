import React from 'react';
import './Register.scss';

const Register = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <button className="modal-close" onClick={onClose}>х</button>
                <h2>Регистрация</h2>
                <form>
                    <div>
                        <label>Имя:</label>
                        <input type="text" required />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" required />
                    </div>
                    <div>
                        <label>Пароль:</label>
                        <input type="password" required />
                    </div>
                    <button type="submit">Зарегистрироваться</button>
                </form>
            </div>
        </div>
    );
};

export default Register;

