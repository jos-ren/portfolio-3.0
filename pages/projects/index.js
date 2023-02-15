import React from 'react';

import { projects_data } from '../../public/data.js';
import Link from 'next/link'
import { useRouter } from 'next/router'

const Projects = ({ }) => {
    return (
        <div>
            {projects_data.map((post, index) => (
                <div key={index} style={{textDecoration: "underline", margin:"10px", color:"blue"}}>
                    <Link href={`/projects/${encodeURIComponent(post.id)}`}>
                        {post.title}
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Projects;