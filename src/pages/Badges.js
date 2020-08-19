import React from 'react'
import Navbar from '../components/Navbar'
import './styles/Badges.css'
import logotipo from '../images/badge-header.svg'
import BadgesList from '../components/BadgeList'

class Badges extends React.Component {
    state = {
        data: [
            {
                "id": '234567890',
                "firstName": 'Daniela',
                "lastName": 'Morales',
                "email": 'dmbmora@outlook.com',
                "jobTitle": 'developer',
                "twitter": '@dani_mb',
                "avatarUrl": 'https://gravatar.com/avatar/4179233abd351b585c9eaa91b4e0eb47?s=400&d=retro&r=x',
            },
            {
                "id": '23456789067890',
                "firstName": 'Daniel',
                "lastName": 'Mora',
                "email": 'dmbmora123@outlook.com',
                "jobTitle": 'developer',
                "twitter": '@daniel_mb',
                "avatarUrl": 'https://gravatar.com/avatar/feed41497fc1beb087d48410dd39cb12?s=400&d=identicon&r=x',
            },
            {
                "id": '234567890678906789',
                "firstName": 'Dylan',
                "lastName": 'Morros',
                "email": 'dmbmora123ert@outlook.com',
                "jobTitle": 'developer expert',
                "twitter": '@dylan_mb',
                "avatarUrl": 'https://gravatar.com/avatar/feed41497fc1beb087d48410dd39cb12?s=400&d=identicon&r=x',

            },
            {
                "id": '23456789067890456789',
                "firstName": 'Dana',
                "lastName": 'Mora',
                "email": 'dmbmora123345@outlook.com',
                "jobTitle": 'developer full stack',
                "twitter": '@dana_mb',
                "avatarUrl": 'https://gravatar.com/avatar/feed41497fc1beb087d48410dd39cb12?s=400&d=identicon&r=x',

            },
        ]
    };

    render() {
        return (
            <div>
                <Navbar />
                <div className='Badges'>
                    <div className='Badges__hero'>
                        <div className='Badges__container'>
                            <img className='Badges_conf-logo' src={logotipo} alt='conf_logo'></img>
                        </div>
                    </div>
                </div>
                <div className='Badges__container'>
                    <div className='Badges__buttons'>
                        <a href='/badges/new' className='btn btn-primary'>New Badge</a>
                    </div>
                </div>
                <div className='BadgesList'>
                    <div className='Badges__container'>
                        <BadgesList badges={this.state.data}></BadgesList>
                    </div>
                </div>
            </div>
        );
    }
};

export default Badges;