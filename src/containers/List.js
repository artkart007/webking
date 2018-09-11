import React from 'react'
import './List.css'

export default class List extends React.Component {
    render() {
        return (
            <ul className="list-group">
                {
                    this.props.list.map((o, index) => {
                        let cls = "liStyle list-group-item list-group-item-" + o.class;
                        return (<li className={cls}>
                            <span  dangerouslySetInnerHTML={{ __html: o.preText }}></span>
                            {o.text}
                         </li>)
                    })
                }

            </ul>
        )
    }
}