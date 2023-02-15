import React from 'react';

import { projects_data } from '../../public/data.js';
import Link from 'next/link'
import { useRouter } from 'next/router'

const Projects = ({ }) => {
    return (
        <div>
            {projects_data.map((post, index) => (
                <li key={index}>
                    <Link href={`/projects/${encodeURIComponent(post.id)}`}>
                        {post.slug}
                    </Link>
                </li>
            ))}
        </div>
    );
}

export default Projects;