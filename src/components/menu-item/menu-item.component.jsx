import React from "react";
import { useNavigate } from "react-router-dom";
import './menu-item.styles.scss';

const MenuItem = ({ title, Imageurl, size, LinkUrl}) => {
    const navigate = useNavigate();

    return (
        <div className={`${size} menu-item`}
    onClick={() => navigate(LinkUrl)}
    >
        <div 
            className="background-image" 
            style={{
            backgroundImage: `url(${Imageurl})`
            }}
        />
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
    );
};

export default MenuItem;