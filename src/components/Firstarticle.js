import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import BlogArticleTemplate from './BlogArticleTemplate'

export default function Firstarticle({ allArticles }) {
    const { title, author } = useParams()
    return (
        <div>
        
        <h2>yoooo</h2>
        </div>
    )
}
