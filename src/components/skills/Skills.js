import React from 'react';
import st from './Skills.module.css'
import stContainer from './../../common/styles/Container.module.css'
import Skill from './skill/Skill';

const Skills = () => {
    return (
        <div className={st.skillsBlock}>
            <div className={st.skillsContainer + ' ' + stContainer.container}>
                <h2 className={st.title}>Skills</h2>
                <div className={st.skills}>
                    <Skill title={'React JS'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus viverra mi a tincidunt. Duis ex leo, accumsan ut diam.'}/>
                    <Skill title={'Redux'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus viverra mi a tincidunt. Duis ex leo, accumsan ut diam.'}/>
                    <Skill title={'HTML'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus viverra mi a tincidunt. Duis ex leo, accumsan ut diam.'}/>
{/*
                    <Skill title={'CSS'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus viverra mi a tincidunt. Duis ex leo, accumsan ut diam.'}/>
                    <Skill title={'Material UI'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus viverra mi a tincidunt. Duis ex leo, accumsan ut diam.'}/>
                    <Skill title={'Git'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean maximus viverra mi a tincidunt. Duis ex leo, accumsan ut diam.'}/>
*/}
                </div>
            </div>
        </div>
    );
};

export default Skills;