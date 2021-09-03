import React, {useRef} from 'react'
import "./work.css";
import varsityEats from '../../assets/varsityeatsuct.co.za_(Nexus 5X).png';
import workout from '../../assets/tinder-clone-75b11.web.app_signin(Nexus 5X) (1).png';
import tikTok from '../../assets/tik-tok-f6910.web.app_(Nexus 5X).png';
import NewsTicker, { Directions } from 'react-advanced-news-ticker';

const works = [
    {
        name: 'Varsity Eats',
        image: varsityEats,
        url: 'https://varsityeatsuct.co.za/'
    },
    {
        name: 'Workout Plan',
        image: workout,
        url: 'https://tinder-clone-75b11.web.app/'
    },
    {
        name: 'TikTok Clone',
        image: tikTok,
        url: 'https://tik-tok-f6910.web.app/'
    }
];

const skills = [
    'JavaScript',
    'Python',
    'Java',
    'Project Management',
    'Project Design',
    'Electronics',
    'Leadership',
    'Communication',
    'etc...'
];

const Work = () => {
    const tickerRef = useRef(null);
    return (
        <div className="work_container">
            <div className="projects">
                <h1>Some Of My Work</h1>
                <p>These are a few examples of my work on Web Development</p>
                <div className="project_list">
                    <ul>
                        {
                            works.map((work, index) => (
                                <li key={index}>
                                    <h3>{work.name}</h3>
                                    <img src={work.image} alt={work.name}/>
                                    <p><a href={work.url} target="__blank">Check {work.name}</a></p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className="skills">
                <h1>Some of the skills I have</h1>
                <NewsTicker 
                    direction={Directions.UP}
                    ref={tickerRef}
                    speed={800}
                    rowHeight={15}
                    maxRow={1}
                >
                    {
                        skills.map((skill, index) => (
                            <div className="skill" key={index}>
                                <p>{skill}</p>
                            </div>
                        ))
                    }
                </NewsTicker>
            </div>
        </div>
    )
}

export default Work;
