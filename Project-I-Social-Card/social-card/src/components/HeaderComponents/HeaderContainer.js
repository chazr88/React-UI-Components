import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail'

function HeaderContainer() {
    return (
    <header class="HeaderContainer">
        <div class="HeaderImage">
            <ImageThumbnail />
        </div>
        <div class="HeaderText">
            <HeaderTitle />
            <HeaderContent />
        </div>

    </header>
    )
}

export default HeaderContainer;