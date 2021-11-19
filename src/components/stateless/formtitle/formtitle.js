import React from 'react'
import styles from "./formtitle.module.css"
import Zoom from 'react-reveal/Zoom'

function formtitle() {
    return (
        <Zoom>
        <h1 className={`${styles.fontHeading} text-center`}>
            add vehicle
        </h1>
        </Zoom>
    )
}

export default formtitle
