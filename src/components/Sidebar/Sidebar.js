import { Avatar, IconButton } from '@material-ui/core';
import { RateReviewOutlined, Search } from '@material-ui/icons'
import React from 'react';
import SidebarChar from '../SidebarChat/SidebarChar';
import "./Sidebar.css";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src="" className="sidebar__avatar"/>
                <div className="sidebar__input">
                   <Search />
                   <input type="search" placeholder="Search"/>
                </div>
                <IconButton varian="outlined" className="sidebar__inputButton">
                    <RateReviewOutlined />
                </IconButton>
            </div>
            <div className="sidebar__chats">
                <SidebarChar />
            </div>
        </div>
    )
}

export default Sidebar
