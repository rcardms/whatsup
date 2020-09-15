import React, { useState } from 'react';
import './App.css';
import ChatListItem from './components/ChatListItem.js'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

export default () => {
  const [chatlist, setChatList]= useState([{}, {}, {}, {},{}, {}, {}, {},{}, {}, {}, {}, {}, {}, {}]);

  return (
    <div className ="app-window">
      <div className = "sidebar">

        <header>
          <img  className = "header-avatar" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/238379a7-70d3-44a2-8c29-00ef6f608e1e/dd3qckc-f87318a0-4f3d-4029-b21c-24436b5c7ec8.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMjM4Mzc5YTctNzBkMy00NGEyLThjMjktMDBlZjZmNjA4ZTFlXC9kZDNxY2tjLWY4NzMxOGEwLTRmM2QtNDAyOS1iMjFjLTI0NDM2YjVjN2VjOC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.l72Bxw-OMJFggNQybfNsLUw3jgSppBTQD2R2avdF6gc" alt="" />
          <div className = "header-buttons">
            <div className = "header-btn">
                <DonutLargeIcon style ={{color: '#919191'}} />
            </div>
            <div className = "header-btn">
                <ChatIcon style ={{color: '#919191'}} />
            </div>
            <div className = "header-btn">
                <MoreVertIcon style ={{color: '#919191'}} />
            </div>
          </div>
        </header>

        <div className = "search">
          <div className ="search-input">
            <SearchIcon fontSize ="small" style ={{color: '#919191'}} />
            <input type="search" placeholder="Procurar ou começar uma nova conversa"/>
          </div>
        </div>

        <div className = "chatlist">
          {chatlist.map((item, key)=>(
            <ChatListItem 
              key={key}
            />
          ))}
        </div>

      </div>
      <div className = "contentarea">
        ...
      </div>
    </div>
  );
}