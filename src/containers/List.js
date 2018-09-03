import React from 'react'

export default class List extends React.Component {
    render() {
        return (
            <ul class="list-group">
                {
                    this.props.list.map((o, index) => {
                        let cls = "list-group-item list-group-item-" + o.class;
                        return (<li class={cls}>
                            <span  dangerouslySetInnerHTML={{ __html: o.preText }}></span>
                            {o.text}
                         </li>)
                    })
                }

            </ul>
        )
    }
}