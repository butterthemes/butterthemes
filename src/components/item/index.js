import React, { Component } from 'react';
import Colorpalette from '../color-palette';
import style from './style.css';

// Extract colors from theme
const colors = ["var(--Bg-color)", "var(--Nav-color)", "var(--Button-hover)", "var(--Main-color)", "var(--Button-active)"]

export default (props) => (

    <div className={style.item}>
        <link rel="stylesheet" type="text/css" href={props.data.url.css}/>
        <Colorpalette theme={props.data.name} colors={colors}/>
        <div className={style.content}>
            <h3 className={style.data}>
                <a className={style.name} href={props.data.url.github}>{props.data.name}</a>
                <span className={style.version}>{props.data.version}</span>
            </h3>
            <p className={style.description}>{props.data.description}</p>
        </div>
        <div className={style.footer}>
            <a className={style.user} href="#">{props.data.author}</a>
            <div>
                <div className={style.stars}>
                    <i className="material-icons">star_rate</i>
                    <span>{props.data.stars}</span>
                </div>
                <a className={style.button} href={props.data.url.butter}>{"install"}</a>
            </div>
        </div>
    </div>
)
