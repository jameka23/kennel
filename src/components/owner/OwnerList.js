import React, { Component } from 'react'


export default class OwnerList extends Component {
    render() {
        return (  
            <section className="content">
                <h3>Our Owners</h3>
                {
                    this.props.owners.map(owner => 
                        <div key={owner.id}>
                            {owner.name}, {owner.phoneNumber}
                        </div>
                    )
                }
            </section>
        )
    }
}