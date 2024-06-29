import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './SubForumList.css';
import userAvatar from '../../assets/icons8-male-user-ios-17-filled-96.png';

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
        // More sub-forums...
    ],
    // Add other forums and their sub-forums here
};

const SubForumList: React.FC = () => {
    const [searchParams] = useSearchParams();
    const forum = searchParams.get('forum');
    const subForums = forum ? subForumsData[forum.toLowerCase()] : [];
    const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({});

    const toggleExpand = (name: string) => {
        setExpandedItems(prev => ({ ...prev, [name]: !prev[name] }));
    };

    return (
        <div className="sub-forum-list-page">
            {forum && (
                <>
                    <div className="header">
                        <h1><span className="forum-label">FORUM</span> {forum.toUpperCase()}</h1>
                        <p>Welcome to the world of Thinking</p>
                        <button className="share-button">SHARE THIS FORUM</button>
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

