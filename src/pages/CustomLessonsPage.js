import React from 'react';
import { Link } from 'react-router-dom';
import { jonsLessonsTemplate } from '../data/JonLessonTemplate';




function CustomLessonsPage() {
  return (
    <div className="container customLessonContainer">
      <div className="columns is-multiline">
        { jonsLessonsTemplate.map(lesson => (
          <div className="column is-one-quarter"><Link to={ `/individual-lessons/${lesson.link}` }>
            <div className="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src={ lesson.image } alt="Placeholder image" />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">{ lesson.title }</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          </div>
        )) }
      </div>
    </div>
  );
}

export default CustomLessonsPage;
