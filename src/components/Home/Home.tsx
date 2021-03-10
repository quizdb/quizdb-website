import React from 'react';
import './home.scss';

function Home() {
  return (
    <div className="home">
      <div className="content">
        <div className="row pt-10 d-flex align-items-center">
          <div className="col-12 col-md-6">
            {' '}
            <div className="card ">
              <h1>QuizDB</h1>
              <h2>A simple Quiz API</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, reprehenderit quibusdam! Porro eum quod atque, obcaecati quisquam nam
                quia esse alias magnam suscipit. Fugit pariatur corporis reiciendis expedita dignissimos facere!
              </p>
              <div className="text-right">
                <a href="#" className="btn">
                  Read more
                </a>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="card">
              <h2>Placeholder art</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
