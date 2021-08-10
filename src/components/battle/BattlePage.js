import React from 'react';
import BattleMenu from './BattleMenu';
import './battle.css'

const BattlePage = () => {
    return (
        <div className="battle-page">
            <div className="battle-menu">
                {<BattleMenu/>}
            </div>  
        </div>
    );
}

export default BattlePage;
