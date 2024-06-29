import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './SubForumList.css';
import userAvatar from '../assets/icons8-male-user-ios-17-filled-96.png';

// Then in your component:
<img src={userAvatar} alt="User Avatar" />
interface LastPost {
    text: string;
    author: string;
    date: string;
}

interface SubForum {
    name: string;
    topics: string[];
    icon: string;
    lastPost: LastPost;
}
function getSubForumsData(forum: string): SubForum[] {
    if (!forum) {
        return []; // Return an empty array if the forum is not found or if it's empty
    }
    
    return subForumsData[forum.toLowerCase()];
}

const subForumsData: { [key: string]: SubForum[] } = {
    physics: [
        {
            name: 'Classical Physics',
            topics: ['Mechanics', 'Thermodynamics'],
            icon: 'https://shorturl.at/RieBN',
            lastPost: {
                text: 'Is there anything faster than light?',
                author: 'Junaid Al Hindi',
                date: 'Friday, 24-05-24, 4:13 PM',
            },
        },
        {
            name: 'Modern Physics',
            topics: ['Quantum Mechanics', 'Relativity'],
            icon: 'https://shorturl.at/RieBN',
            lastPost: {
                text: 'Quantum entanglement explained?',
                author: 'Jane Doe',
                date: 'Monday, 25-05-24, 10:00 AM',
            },
        },
        {
            name: 'Relativity',
            topics: ['Special Relativity', 'General Relativity'],
            icon: 'https://shorturl.at/RieBN',
            lastPost: {
                text: 'Theory of relativity',
                author: 'Albert Einstein',
                date: 'Tuesday, 26-05-24, 11:00 AM',
            },
        },
        {
            name: 'Quantum Physics',
            topics: ['Quantum Field Theory', 'Quantum Computing'],
            icon: 'https://shorturl.at/RieBN',
            lastPost: {
                text: 'Quantum computing breakthroughs',
                author: 'Jane Doe',
                date: 'Wednesday, 27-05-24, 9:00 AM',
            },
        },
        {
            name: 'Astronomy and Cosmology',
            topics: ['Stars', 'Galaxies', 'Cosmology'],
            icon: 'https://shorturl.at/RieBN',
            lastPost: {
                text: 'Life cycle of stars',
                author: 'John Smith',
                date: 'Thursday, 28-05-24, 2:00 PM',
            },
        },
        {
            name: 'Unified Field Theory',
            topics: ['String Theory', 'M-Theory'],
            icon: 'https://shorturl.at/RieBN',
            lastPost: {
                text: 'String theory explained',
                author: 'Brian Greene',
                date: 'Friday, 29-05-24, 1:00 PM',
            },
        },
        {
            name: 'Nuclear Physics',
            topics: ['Fission', 'Fusion'],
            icon: 'https://shorturl.at/RieBN',
            lastPost: {
                text: 'Fusion energy prospects',
                author: 'Marie Curie',
                date: 'Saturday, 30-05-24, 4:00 PM',
            },
        },
    ],
    // Add other forums and their sub-forums here
};

const SubForumList: React.FC = () => {
    const [searchParams] = useSearchParams();
    const forum = searchParams.get('forum');
    const subForums = subForumsData[forum!.toLowerCase()] || [];
    const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({});

    const toggleExpand = (name: string) => {
        setExpandedItems(prev => ({ ...prev, [name]: !prev[name] }));
    };

    return (
        <div className="sub-forum-list-page">
            {forum && (
                <>
                    <div className="header">
                        <h1><span className="forum-label">FORUM</span>{forum.toUpperCase()}</h1>
                        <p>Welcome to the world of Thinking</p>
                        <button>SHARE THIS FORUM</button>
                    </div>
                    <h2>Sub Forums</h2>
                    <div className="sub-forum-list">
                        {subForums.length > 0 ? (
                            subForums.map((subForum) => (
                                <div key={subForum.name} className="sub-forum-item">
                                    <div className="sub-forum-icon">
                                        <img src={subForum.icon} alt={`${subForum.name} icon`} />
                                    </div>
                                    <div className="sub-forum-content">
                                        <h3>{subForum.name}</h3>
                                        <p className={expandedItems[subForum.name] ? 'expanded' : ''}>
                                            {subForum.topics.join(', ')}
                                        </p>
                                        {!expandedItems[subForum.name] && (
                                            <button onClick={() => toggleExpand(subForum.name)} className="more-button">More</button>
                                        )}
                                    </div>
                                    <div className="sub-forum-stats">
                                        <p className="ok-posts">OK</p>
                                        <p>Posts</p>
                                    </div>
                                    <div className="sub-forum-last-post">
                                        <img src={userAvatar} alt="User Avatar" />
                                        <div>
                                            <p>{subForum.lastPost.text}</p>
                                            <p>By {subForum.lastPost.author}</p>
                                            <p>{subForum.lastPost.date}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No sub-forums available for this forum.</p>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default SubForumList;