import React from "react";
import MeniItem from "../menu-item/menu-item.component";
import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                title:'hats',
                Imageurl:'https://i.ibb.co/cvpntL1/hats.png',
                id: 1,
                LinkUrl: '/hats'
            },
                {
                title:'jackets',
                Imageurl:'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2,
                LinkUrl: '/jackets'
            },
                {
                title:'sneakers',
                Imageurl:'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3,
                LinkUrl: '/sneakers'
            },
                {
                title:'womens',
                Imageurl:'https://i.ibb.co/GCCdy8t/womens.png',
                size: 'large',
                id: 4,
                LinkUrl: '/womens'
            },
                {
                title:'mens',
                Imageurl:'https://i.ibb.co/R70vBrQ/men.png',
                size: 'large',
                id: 5,
                LinkUrl: '/mens'
            },] 
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {
                this.state.sections.map(({id, ...otherSectionProps}) => (
                    <MeniItem key={id} {...otherSectionProps}/>
                ))
                }
            </div>
        )
    }
}

export default Directory;