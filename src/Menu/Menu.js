import React, {Component} from 'react'
import './Menu.css'
import Edit from './Edit/Edit'

class Menu extends Component {
    state = {
        menuItems: [
            // todo Поместить в список только гамбургеры
            {name: 'Гамбургер'},
            {name: 'Чизбургер'},
            {name: 'МакЧикен'},
            {name: 'ЧикенРол'}
        ]
    };

    makeList() {
        const menuItems = this.state.menuItems;

        const item = menuItems.map((menuItem) =>
            <li className='menuItem'>
                <p className='menuItemP'>{menuItem.name}</p>
            </li>
        )

        return item
    }

    render() {
        return (
            <div className='menuContainer'>
                <ul className='Menu'>
                    {this.makeList()}
                </ul>
            </div>
        );
    }
}

export default Menu