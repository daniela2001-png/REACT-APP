import React from 'react';
import './styles/BadgeList.css';

class BadgeListItem extends React.Component {
    render() {
        return (
            <div className="BadgeListItem">
                <img
                    className="BadgeListItem__avatar"
                    src={this.props.badge.avatarUrl}
                    alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
                />

                <div>
                    <strong>
                        {this.props.badge.firstName} {this.props.badge.lastName}
                    </strong>
                    <br />@{this.props.badge.twitter}
                    <br />
                    {this.props.badge.jobTitle}
                </div>
            </div>
        );
    }
}

class BadgeList extends React.Component {
    render() {
        return (
            <div className="BadgeList">
                <ul className="list-unstyled">
                    {this.props.badges.map(badge => {
                        return (
                            <li key={badge.id}>
                                <p>{badge.firstName} {badge.lastName}</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}


export default BadgeList;