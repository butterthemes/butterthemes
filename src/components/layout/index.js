import React, { Component } from 'react';
import Nav from '../nav';
import Footer from '../footer';
import ItemsList from '../items-list';
import style from './style.css';

export default class Layout extends Component{

    constructor (props) {
       super()
       this.state = {}
   }

    render (){
         let { props } = this

         //Dirty test...
         let item = {
             author: '@butter',
             name: 'theme-ghost',
             version: '0.0.1',
             description: 'Chunk, chunk, chunk!'
         }

         let items = [item,item,item,item,item,item]

         let app = {
             name: 'Butter-themes',
             version: '0.0.1'
         }

         let links = [
             {name: 'Themes', url:'#'},
             {name: 'About', url:'#'},
         ]

         return (
             <div className={style.page}>
               <Nav app={app} items={links}/>
               <section>
                   <h2>Butter flavors from spicy to sweet!</h2>
                   <ItemsList />
                </section>
                <Footer />
             </div>
         )
    }
}
