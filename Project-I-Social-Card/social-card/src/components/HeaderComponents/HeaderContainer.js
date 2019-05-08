import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail'

function HeaderContainer() {
    return (
    <header class="HeaderContainer">
        <ImageThumbnail />
        <HeaderTitle />
        <HeaderContent />
    </header>
    )
}

export default HeaderContainer;