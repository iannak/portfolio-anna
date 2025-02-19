<script lang="ts">
  import profile from './assets/profile-3.jpg'
  import logo from './assets/logo-1.png'
  import dark from './assets/widget-notification/dark.png'
  import shoppingCart from './assets/shopping-cart/foto.png'
  import tratoTech from './assets/trato-tech/item.png'
  import chatbotInterativo from './assets/chatbot-interativo.png'

  let urlYoutube1 = 'https://www.youtube.com/embed/mfTJR2Adeec'
  let urlYoutube2 = 'https://www.youtube.com/embed/oa1rNSDIssg'
</script>

<main>
  <nav>
    <div class="logo">
        <img src={logo} alt="AnnaFranz Logo">
        <a href="/">
            AnnaFranz
        </a>
    </div>
    <div class="nav-links">
        <a class="selected" href="index.html">Home</a>
        <a href="works.html">Works</a>
        <span class="nav-link" aria-disabled="true">Single Work</span>
        <a href="blog.html">Blog</a>
        <a href="about.html">About</a>
    </div> 
</nav>

<div class="main">
    <div class="info">
        <h1>Hello, I'm Anna Franz, <br>Web Developer and Mobile</h1>
        <p>I am a professional passionate about development, dedicated to achieving professional results and developing solid relationships. My professional journey is guided by a commitment to excellence and innovation.</p>
        <button>
            <a href="assets/Currículo-Anna.pdf" target="_blank" style="color: #fff;">
                <i class='bx bxs-download'></i>
                Download Resume
            </a>
        </button>
    </div>
    <img src={profile} alt="Anna Franz">
</div>

<div class="recent">
    <div class="header">
        <h4>Canal Youtube</h4>
        <a href="https://www.youtube.com/@annakarolinafranz5946/featured" target="_blank">View all</a>
    </div>
    <div class="posts-youtube">
      <div class="post-item">
          <iframe 
              width="560" 
              height="315" 
              src={urlYoutube1} 
              title="Vídeo do YouTube 1"
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen
          ></iframe>
      </div>
      <div class="post-item">
          <iframe 
              width="560" 
              height="315" 
              src={urlYoutube2} 
              title="Vídeo do YouTube 2"
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen
          ></iframe>
      </div>
  </div>
  
</div>


<div class="separator">
    <h4>Featured Works</h4>
</div>

<div class="featured">
    <div class="item">
        <img src={dark} alt="Widget Notification project screenshot">
        <div class="details">
            <h3>Widget Notification</h3>
            <div class="item-info">
                <div class="year-badge">2023</div>
                <h4>Next | Typescript | TailwindCss</h4>
            </div>
            <p>Notifications check and delete</p>
            
            <a href="https://github.com/iannak/widget-notification" target="_blank">View Project</a>

        </div>
    </div>
    <div class="item">
        <img src={shoppingCart} alt="Shopping Cart project screenshot">
        <div class="details">
            <h3>Shopping Cart</h3>
            <div class="item-info">
                <div class="year-badge">2023</div>
                <h4>ReactJS</h4>
            </div>
            <p>Being able to select the item, delete, view purchase details and cart.</p>
            
            <a href="https://shopping-cart-mu-amber.vercel.app/" target="_blank">View Project</a>

    </div>
    </div>
    <div class="item">
        <img src={tratoTech} alt="Trato Tech project screenshot">
        <div class="details">
            <h3>Trato Tech</h3>
            <div class="item-info">
                <div class="year-badge">2024</div>
                <h4>ReactJS</h4>
            </div>
            <p>Development together with Alura course.</p>

            <a href="https://github.com/iannak/tratotech" target="_blank">View Project</a>

        </div>
    </div>
   <div class="item">
        <img class={chatbotInterativo} src="assets/chatbot-interativo.png" alt="Chatbot Interativo project screenshot">
     <div class="details">
            <h3>Chatbot Interativo</h3>
            <div class="item-info">
                <div class="year-badge">2025</div>
                <h4>Python | GroqCloud | Docker</h4>
            </div>
            <p>Chatbot developed with AI integration, being able to interact and ask anything</p>

              <a href="https://github.com/iannak/chatbot_interativo" target="_blank">View Project</a>

        </div>
       
    </div>
 
</div>

<footer>
    <div class="socials">
        <a href="https://x.com/FranzKarols" aria-label="Twitter" target="_blank">
            <i class='bx bxl-twitter'></i>
        </a>

        <a href="https://github.com/iannak" aria-label="GitHub" target="_blank">
            <i class='bx bxl-github'></i>
        </a>

        <a href="https://www.linkedin.com/in/anna-karolina-f-b72242218/" aria-label="LinkedIn" target="_blank">
            <i class='bx bxl-linkedin-square'></i>
        </a>
    </div>
    <p>Copyright ©2024, All rights reserved.</p>
</footer>
</main>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Heebo", sans-serif;
}

a {
  text-decoration: none;
  color: #000;
}

img {
  object-fit: cover;
  object-position: top;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

nav {
  padding: 20px 148px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
}

nav .logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

nav .logo img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

nav .logo a {
  font-size: 15px;
  color: #3e3e3e;
  font-weight: bold;
}

nav .nav-links {
  display: flex;
  gap: 16px;
}

nav .nav-links a {
  transition: color 0.3s ease;
}

nav .nav-links a:hover,
nav .nav-links a.selected {
  color: #303f9f;
}

.main {
  padding: 0 148px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  height: calc(100vh - 80px);
}

.main .info h1 {
  font-size: 44px;
  margin-bottom: 40px;
}

.main .info p {
  font-size: 16px;
  margin-bottom: 45px;
  width: 100%;
}

.main .info button {
  padding: 10px 30px;
  background: #303f9f;
  border: none;
  color: #fff;
  font-size: 16px;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.main .info button:hover {
  background: #1a237e;
}

.main img {
  width: 400px;
  height: 400px;
  border-radius: 140px;
}

.recent {
  padding: 60px 148px;
  background-color: #dbedf2;
}

.recent .header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
}

.recent .header h4,
.separator h4 {
  font-size: 20px;
  font-weight: 400;
}

.recent .header a {
  color: #303f9f;
}

.recent .posts {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.recent .posts-youtube {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.separator {
  padding: 40px 148px 0;
}

.separator h4 {
  margin-bottom: 30px;
}

.featured {
  padding: 40px 193px 20px;
}

.featured .item {
  display: flex;
  gap: 30px;
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 2px solid #e0e0e0;
}

.featured .item img {
  width: 100%;
  height: 13rem;
  border-radius: 6px;
}

.featured .item .details h3 {
  font-size: 30px;
  margin-bottom: 16px;
}

.details a {
  display: flex;
  justify-content: flex-start;
  margin-top: 3rem;
  color: #303f9f;
  font-weight: bold;
}

.featured .item .details .item-info {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}

.featured .item .details .item-info .year-badge {
  background-color: #303f9f;
  padding: 2px 14px;
  color: #fff;
  border-radius: 16px;
  font-size: 14px;
  font-weight: bold;
}

.featured .item .details .item-info h4 {
  color: #8695a4;
  font-size: 18px;
}

.featured .item .details p {
  width: 700px;
  text-align: justify;
}

footer {
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

footer .socials {
  display: flex;
  align-items: center;
  gap: 28px;
  margin-bottom: 20px;
}

footer .socials i {
  font-size: 40px;
  cursor: pointer;
  transition: color 0.3s ease;
}

footer .socials i:hover {
  color: #303f9f;
}

footer p {
  font-size: 14px;
}

.page-title {
  padding: 80px 193px 20px;
  display: flex;
  justify-content: flex-start;
  width: 100%;
}

.content {
  padding: 30px 148px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media screen and (max-width: 1400px) {
  nav {
    padding: 20px 60px;
  }

  .main {
    padding: 0 60px;
  }

  .recent {
    padding: 60px;
  }

  .featured,
  .separator {
    padding: 40px 60px 0;
  }

  .page-title {
    padding: 80px 60px 20px;
  }
}

@media screen and (max-width: 1200px) {
  nav {
    padding: 20px 40px;
  }

  .main {
    padding: 0 40px;
  }

  .main img {
    width: 340px;
    height: 340px;
  }

  .recent {
    padding: 40px;
  }

  .featured,
  .separator {
    padding: 40px 40px 0;
  }

  .featured .item .details p {
    width: 100%;
  }

  .page-title {
    padding: 80px 40px 20px;
  }
}

@media screen and (max-width: 992px) {
  nav {
    padding: 20px;
  }

  .main {
    padding: 0 20px;
  }

  .main img {
    width: 300px;
    height: 300px;
  }

  .main .info h1 {
    font-size: 34px;
  }

  .main .info p {
    font-size: 15px;
  }

  .main .info button {
    font-size: 15px;
    padding: 8px 22px;
  }

  .recent {
    padding: 40px 20px;
  }

  .featured,
  .separator {
    padding: 40px 20px 0;
  }

  .featured .item {
    flex-direction: column;
    padding: 0 20px 30px;
  }

  .featured .item img {
    width: 100%;
    height: auto;
  }

  .featured .item .details h3 {
    font-size: 24px;
    margin-bottom: 12px;
  }

  .featured .item .details .item-info .year-badge {
    font-size: 12px;
  }

  .featured .item .details .item-info h4 {
    font-size: 15px;
  }

  .featured .item .details p {
    font-size: 14px;
  }

  .content {
    padding: 30px 20px 60px;
  }
}

@media screen and (max-width: 768px) {
  nav {
    justify-content: center;
  }

  nav .logo {
    display: none;
  }

  .main {
    flex-direction: column;
    justify-content: space-around;
    margin: 40px 0;
    height: auto;
  }

  .main .info h1 {
    font-size: 30px;
    margin-bottom: 16px;
  }

  .main .info p {
    margin-bottom: 16px;
  }

  .main .info button {
    padding: 6px 20px;
    font-size: 13px;
  }

  .main img {
    margin-top: 20px;
    width: 100%;
    height: auto;
    border-radius: 50px;
  }
}
</style>
