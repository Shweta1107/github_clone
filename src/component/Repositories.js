import React from 'react';
import Repositiory from './Repository';
import './Repository.css';

const Repositories = ({user,repos}) =>(
    <section className="repositories">
        {
            repos.map((repo)=>(

                <Repositiory key={repo.id} repo={repo} user={user}/>
            ))
        }
    </section>
) 

export default Repositories;