import React from 'react';

import Link from '../Components/Link';

const Menu = () => {

    const links = [
        {
            id: 1,
            path: '/',
            content: 'home'
        },
        {
            id: 2,
            path: '/users',
            content: 'users'
        },
        {
            id: 3,
            path: '/userSearch',
            content: 'userSearch'
        },
    ]

    const styles = {
        marginBottom: '20px'
    }

    const linkElements = links.map( item => 
        <Link 
            key={item.id}
            path={item.path}
            content={item.content}
        />)

    return(
        <div style={styles}>
            {linkElements}
        </div>
    )
}

export default Menu;