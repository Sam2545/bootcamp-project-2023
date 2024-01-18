import style from './home.module.css'

export default function Home() {
  return (
    <header>
          <h1 className={style.page_title}>Sameer Maheshwari</h1>
          <div className={style.about}>
              <div className={style.about_image_div}>
                  <img className={style.about_image} src="./images/family_photo.jpg" alt="Photo of Sameer and his family"/>
              </div>
              <div className={style.about_text}>
                  <h2 className={style.h2_about_text}>About Me</h2>
                  <p><strong>Sameer Maheshwari</strong> is a first year attending Cal Poly SLO. He attended Monta Vista High School in Cupertino, California but his parents are from India. Some of Sameer's hobbies include: tennis, cooking, coding, rock climbing, and hanging out with friends. A fun face about Sameer is that he has been to two concerts, <em>Kendrick Lamar</em> and <em>Jack Harlow</em></p>
                  <p> Sameer has almost <strong>5 years of coding</strong> experience in many different languages. This includes <em>Python</em>, Java, React, React Native, Javascript, Swift, and Lua.</p>
              </div>
          </div>
      </header>
  )
}
