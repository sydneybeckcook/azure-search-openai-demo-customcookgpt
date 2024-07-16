import React, { useState } from 'react';
import styles from './ToggleSwitch.module.css';

const ToggleSwitch = ({ onToggle }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
        onToggle(!isChecked ? 'gpt4' : 'gpt3.5');
    };

    return (
        <label className={styles.switch}>
            <input type="checkbox" checked={isChecked} onChange={handleToggle} />
            <span className={styles.slider}></span>
            <span className={styles.labels}>
                <span>GPT-3.5</span>
                <span>GPT-4</span>
            </span>
        </label>
    );
};

export default ToggleSwitch;
