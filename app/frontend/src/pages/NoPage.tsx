// export function Component(): JSX.Element {
//     return <h1>404</h1>;
// }

// Component.displayName = "NoPage";

import React, { useState } from "react";
import { Link } from "react-router-dom";

export function Component(): JSX.Element {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>404</h1>
            <p style={styles.message}>Sorry, the page you are looking for does not exist.</p>
            <Link 
                to="/" 
                style={{ 
                    ...styles.link, 
                    ...(isHovered && styles.linkHover) 
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                Go back to the homepage
            </Link>
        </div>
    );
}

Component.displayName = "NoPage";

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f8f8f8',
        color: '#333',
    },
    heading: {
        fontSize: '4rem',
        marginBottom: '1rem',
    },
    message: {
        fontSize: '1.5rem',
        marginBottom: '2rem',
    },
    link: {
        fontSize: '1.2rem',
        color: '#0078d4',
        textDecoration: 'none',
        border: '1px solid #0078d4',
        padding: '0.5rem 1rem',
        borderRadius: '5px',
        transition: 'background-color 0.3s, color 0.3s',
    },
    linkHover: {
        backgroundColor: '#0078d4',
        color: '#fff',
    },
};

export default Component;