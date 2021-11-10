import React from 'react';

const WaitingComponent = ({ status }) => {

    const styles = {
        padding: '40px',
        fontSize: '30px',
        error: {
            color: 'red'
        },
        loading: {
            color: 'black'
        },
        success: {
            color: 'green'
        }
    }

    const getStatus = () => {
        if( status === -1 ){
            return <div style={styles.error}> ERROR </div>
        }
        if( status === 0 ){
            return <div style={styles.loading}> Loading ... </div>
        }
        if( status === 1 ){
            return <div style={styles.success}> Success </div>
        }
        if( status === 10 ){
            return null
    }
    }

    return(
        <div style={styles} >
            {getStatus()}
        </div>
    )
}

export default WaitingComponent;