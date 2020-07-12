import React from 'react';
import AuthorComponent from '../../components/author/Author';
import './About.css';
export default class AboutPage extends React.Component {
    render() {
        return (
            <div id="about-board">
                <h3>Hi we're in About</h3>
                <AuthorComponent name="Diogo" info={{ description: 'nice guy', work: 'Developer' }} />
            </div>
        );
    }
} 