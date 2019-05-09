import React from 'react';
import './Footer.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel, faComment, faSync, faHeart, faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)
library.add(faComment)
library.add(faSync)
library.add(faHeart)
library.add(faEnvelope)

export const Comment = () => (
    <div>
      <FontAwesomeIcon icon="comment" />
    </div>
  )

export const Sync = () => (
    <div>
        <FontAwesomeIcon icon="sync" /> 6
    </div>
)

export const Heart = () => (
    <div>
        <FontAwesomeIcon icon="heart" /> 4
    </div>
)

export const Envelope = () => (
    <div>
        <FontAwesomeIcon icon="envelope" /> 
    </div>
)

function Footer() {
    return(
    <footer>
        <div class="IconArea">
        <Comment />
        <Sync />
        <Heart />
        <Envelope />
        </div>


    </footer>
    )
}

export default Footer;