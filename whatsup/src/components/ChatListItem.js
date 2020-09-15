import React from 'react';
import './ChatListItem.css';

export default () => {
    return (
        <div className="chatListItem">
            <img className="chatListItem-avatar" src="https://avatarfiles.alphacoders.com/112/112980.png" alt=""/>
            <div className="chatListItem-lines">
                <div className="chatListItem-line">
                    <div className="chatListItem-name"> Genji Shimada</div>
                    <div className="chatListItem-date"> 19:00</div>
                </div>
                <div className="chatListItem-line">
                    <div className="chatListItem-lastMsg">
                        <p>Olá, eu preciso de cura!</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}