import React from 'react';

const MainOrganism = ({children}) => {
    return (
        <main style={styles.main}>
            {children}
        </main>
    )
}

const styles = {
    main: {
        padding: '20px',
        margin: '0 auto',
        maxWidth: '1200px',
        minHeight: '65vh',
    }
}

export default MainOrganism;