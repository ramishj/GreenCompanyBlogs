import React from 'react';

interface LastPost {
    text: string;
    author: string;
    date: string;
}

interface SubForumProps {
    subForum: {
        name: string;
        topics: string[];
        icon: string;
        lastPost: LastPost;
    };
}

const ForumItem: React.FC<SubForumProps> = ({ subForum }) => {
    return (
        <div className="forum-item">
            <div className="forum-left">
                <img src={subForum.icon} alt={subForum.name} className="forum-icon" />
                <div className="forum-details">
                    <h3>{subForum.name}</h3>
                    <ul>
                        {subForum.topics.map((topic, index) => (
                            <li key={index}>{topic}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="forum-right">
                <div className="forum-post-status">
                    <div className="forum-posts">OK</div>
                    <div className="forum-posts-text">Posts</div>
                </div>
                <div className="forum-last-post">
                    <div>{subForum.lastPost.text}</div>
                    <div>By {subForum.lastPost.author}</div>
                    <div>On {subForum.lastPost.date}</div>
                </div>
            </div>
        </div>
    );
}

export default ForumItem;
