import { useEffect, useState } from 'react'
import { RepositoryItem } from "./RepositoryItem"

import '../styles/repositories.scss'

const repository = {
    name: 'Unform',
    description: 'Forms in React',
    link: 'https://github.com/unform/unform'
}

// url da rocketseat https://api.github.com/orgs/rocketseat/repos

export function RepositoryList () {
    const [repositories, setRespositories] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(response => response.json())
            .then(data => setRespositories(data))
    }, [])

    return (
        <section className="repository-list">
            <h1>Lista de repositórios da Rocketseat</h1>

            <ul>
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
                <RepositoryItem repository={repository} />
            </ul>
        </section>
    )
}