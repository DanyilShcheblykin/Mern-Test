import React from 'react';

const LinkCard = ({link}) => {
    console.log('linkClicks' , link)
    return (
        <div>
            <h2>Ссылка</h2>
            <p>Ваша ссылка : <a href={link.to} target="_blank" rel='noopener noreferrer' >{link.to}</a></p>
            <p>Откуда : <a target="_blank" rel='noopener noreferrer' href={link.from}>{link.from}</a></p>
            <p>количсетво кликов : <strong>{link.clicks}</strong></p>
            <p>Дата создания {new Date(link.date).toLocaleDateString()}</p>
        </div>
    );
};

export default LinkCard;