import React from 'react';
import './DiscussionForumMain.css';
import ForumItem from './ForumItem';

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

interface MainForum {
    name: string;
    subForums: SubForum[];
}

interface HotTopic {
    text: string;
    category: string;
    author: string;
    date: string;
}

const mainForums: MainForum[] = [
    {
        name: 'Science',
        subForums: [
            {
                name: 'Physics',
                topics: ['Classical Physics', 'Modern Physics', 'Relativity', 'Quantum Theory', 'Astronomy & Cosmology', 'Unified Field Theory'],
                icon: 'https://shorturl.at/RieBN',
                lastPost: {
                    text: 'Is there anything faster than light?',
                    author: 'Junaid Al Hindi',
                    date: 'Friday, 24-05-24, 4:13 PM'
                }
            },
            // Add other sub-forum objects here
        ]
    },
    {
        name: 'Technology',
        subForums: [
            {
                name: 'Computing',
                topics: ['Artificial Intelligence', 'Machine Learning', 'Quantum Computing', 'Cybersecurity'],
                icon: 'https://shorturl.at/RieBN',
                lastPost: {
                    text: 'Latest trends in AI?',
                    author: 'Alice Doe',
                    date: 'Monday, 25-05-24, 2:00 PM'
                }
            },
            // Add other sub-forum objects here
        ]
    },
    // Add other main forum objects here
];

const hotTopics: HotTopic[] = [
    {
        text: 'How we as Ummah can uplift ourselves in Global Politics?',
        category: 'Psychology and Sociology',
        author: 'Mohammed Abdul Wahid',
        date: 'Monday, 24-05-24, 4:13 PM'
    },
    // Add more hot topics here
];

const DiscussionForumMain: React.FC = () => {
    return (
        <div className="discussion-forum">
            <h2>Discussion Forums</h2>
            <div className="forums-box">
                <div className="forums">
                    <div className="forum-list">
                        {mainForums.map((mainForum, index) => (
                            <div key={index} className="main-forum">
                                <h3>{mainForum.name}</h3>
                                <div className="sub-forum-list">
                                    {mainForum.subForums.map((subForum, subIndex) => (
                                        <ForumItem
                                            key={subIndex}
                                            subForum={subForum}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="hot-topics">
                    <h2>Hot Topics</h2>
                    <div className="hot-topics-list">
                        {hotTopics.map((topic, index) => (
                            <div key={index} className="hot-topic">
                                <div className="hot-topic-text">{topic.text}</div>
                                <div className="hot-topic-category">{topic.category}</div>
                                <div className="hot-topic-author">By {topic.author}</div>
                                <div className="hot-topic-date">On {topic.date}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DiscussionForumMain;
