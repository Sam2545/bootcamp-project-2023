import React from 'react';
import style from './blogPreview.module.css';
import type { Blog } from '@/app/blogData';
import Link from 'next/link';

export default function BlogPreview(props:Blog) {

  var date = props.date.toString()
  var date_array = date.split(" ")
  var new_date = date_array[1] + "-" + date_array[2] + "-" + date_array[3]
  
  return (
		// replace everything between the <div> & </div> tags
		// with your code from earlier milestones <p className={style.blog_date}>{props.date}</p>
    <header>
        <div className={style.post_preview}>
            <h3>{props.title}</h3>
            <div>
                <p>{props.description}</p>
                <p className={style.blog_date}>Date published: {new_date}</p>
                <Link href={`blog/${props.slug}`}><u>Read More</u></Link>
            </div>
        </div>
    </header>
  );
}