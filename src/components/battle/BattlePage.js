import React from 'react';
import BattleMenu from './BattleMenu';
import './battle.css'

const BattlePage = (props) => {
    return (
        
        <div className="battle-page">
            <div className="battle-menu">
                {<BattleMenu/>}
                {props.userBattleTeam.map(p => {
                return (
                    <div className="user-battle-team">
                        <img src={p.back_image}/>
                    </div>
                )
            })}
            </div>  
        </div>
    );
}

export default BattlePage;
