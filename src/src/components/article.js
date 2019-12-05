import React from 'react';


class Article extends React.Component {
    render() {
        return (
            
            <div class="card">
                <div class="card-content">
                    <p class="title">
                    “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
                    </p>
                    <p class="subtitle">
                    Jeff Atwood
                    </p>
                </div>
            </div>
        )
    }
}

export default Article