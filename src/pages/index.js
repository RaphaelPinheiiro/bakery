import styles from "../styles/index.module.css";

import { cormorant, lora } from "../components/fonts";

import Explorer from "../components/explorer";
import Social from "../components/social";

const Home = () => {
  return (
    <>
      <header id="home" className={styles.header}>
        <section>
          <aside></aside>
          <article>
            <h2 className={cormorant.className}>
              Made
              <br /> with love
            </h2>
            <p>
              Vestibulum maximus lacus et orci posuere tristique. Sed vel
              ullamcorper felis, eget cursus ante. Vestibulum dictum mollis
              blandit. Orci varius natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus. Pellentesque tortor metus,
              pellentesque eu tempor nec, auctor a tellus. Donec sollicitudin
              rutrum nibh, eget condimentum augue vulputate quis. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. Pellentesque habitant morbi tristique senectus et
              netus et malesuada fames ac turpis egestas. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Mauris eget feugiat enim,
              blandit porta mi. Morbi sed urna viverra, facilisis neque ac,
              sagittis tortor. Donec fringilla erat nisl, ut ullamcorper ex
              lobortis eget. Nullam imperdiet eu dui eget eleifend. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. Pellentesque habitant morbi tristique senectus et
              netus et malesuada fames ac turpis egestas.
            </p>
            <div>
              <Explorer />
            </div>
          </article>
        </section>
        <figure>
          <img
            src="/icons/material-symbols-light--arrow-drop-down-rounded.svg"
            alt="dropDown"
          />
        </figure>
      </header>
      <main className={styles.main}>
        <section id="baker" className={styles.AboutBaker}>
          <header className={lora.className}>
            <article>
              <h2 className={cormorant.className}>About our baker</h2>
              <div className={styles.perfil}>
                <figure>
                  <img src="/img/young-happy-bearded-man-wearing-glasses-baker copiar.jpg" />
                </figure>
                <div>
                  <h3 className={cormorant.className}>Daniel Stangni</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <p className={styles.columnsAbout}>
                Phasellus ante orci, tincidunt ac libero sed, varius dapibus
                lectus. Integer auctor augue sollicitudin lectus tristique, non
                scelerisque dolor luctus. Quisque tristique, mi vitae dignissim
                eleifend, lorem magna posuere libero, eu porttitor diam arcu sit
                amet elit. Fusce pretium, ex vitae fermentum hendrerit, velit
                velit venenatis turpis, vitae porta dolor tellus congue nunc.
                Vivamus nec augue vestibulum, tincidunt urna non, dignissim
                massa. Praesent facilisis lectus lacus. Fusce pulvinar urna quis
                sem eleifend, eget vestibulum mauris tempor. Nulla ac erat in
                nibh tristique ultricies. Donec quis ligula sed nisl convallis
                posuere ac sit amet risus. Sed quam ante, volutpat vel nulla
                quis, facilisis efficitur dui. Mauris vehicula ante ac felis
                vehicula, ut dignissim nunc blandit. Praesent pulvinar, nunc sit
                amet blandit elementum, ligula nisi vulputate dolor, ut blandit
                ipsum risus sed turpis.
              </p>
            </article>
            <aside className={styles.headerAside}></aside>
          </header>
          <footer>
            <aside className={styles.footerAside}></aside>
            <article>
              <h2 className={cormorant.className}>
                We create delicius memories
              </h2>
            </article>
          </footer>
        </section>
        <section id="gallery" className={styles.gallery}>
          <header className={lora.className}>
            <article>
              <h2 className={cormorant.className}>Explore some options</h2>
              <p className={styles.columnsGallery}>
                hasellus ante orci, tincidunt ac libero sed, varius dapibus
                lectus. Integer auctor augue sollicitudin lectus tristique, non
                scelerisque dolor luctus. Quisque tristique, mi vitae dignissim
                eleifend, lorem magna posuere libero, eu porttitor diam arcu sit
                amet elit. Fusce pretium, ex vitae fermentum hendrerit, velit
                velit venenatis turpis, vitae porta dolor tellus congue nunc.
                Vivamus nec augue vestibulum, tincidunt urna non, dignissim
                massa. Praesent facilisis lectus lacus. Fusce pulvinar urna quis
                sem eleifend, eget vestibulum mauris tempor. Nulla ac erat in
                nibh tristique ultricies. Donec quis ligula sed nisl convallis
                posuere ac sit amet risus. Sed quam ante, volutpat vel nulla
                quis, facilisis efficitur dui. Mauris vehicula ante ac felis
                vehicula, ut dignissim nunc blandit. Praesent pulvinar, nunc sit
                amet blandit elementum, ligula nisi vulputate dolor, ut blandit
                ipsum risus sed turpis.
              </p>
            </article>
          </header>
          <footer>
            <section>
              <aside className={styles.asideOne}></aside>
              <aside className={styles.asideTwo}></aside>
              <aside className={styles.asideThree}></aside>
              <aside className={styles.asideFour}></aside>
              <aside className={styles.asideFive}></aside>
            </section>
            <section>
              <aside className={styles.asideSix}></aside>
              <aside className={styles.asideSeven}></aside>
              <aside className={styles.asideEight}></aside>
              <aside className={styles.asideNine}></aside>
              <aside className={styles.asideTen}></aside>
            </section>
          </footer>
        </section>
        <section id="coffeebreak" className={styles.coffeebreak}>
          <header>
            <h2 className={cormorant.className}>Coffeebreak</h2>
            <p className={lora.className}>
              Aliquam ornare, neque ac faucibus mollis, arcu odio bibendum elit,
              non faucibus est massa eget libero.
            </p>
          </header>
          <footer className={lora.className}>
            <section>
              <menu>
                <dl>
                  <dt>Tortilla</dt>
                  <dd>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit..................................$4,00
                  </dd>
                  <dt>Focaccia</dt>
                  <dd>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit..................................$4,00
                  </dd>
                  <dt>Anpan</dt>
                  <dd>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit..................................$4,00
                  </dd>
                  <dt>Bagel</dt>
                  <dd>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit..................................$4,00
                  </dd>
                </dl>
              </menu>
              <menu>
                <dl>
                  <dt>Tortilla</dt>
                  <dd>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit..................................$4,00
                  </dd>
                  <dt>Focaccia</dt>
                  <dd>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit..................................$4,00
                  </dd>
                  <dt>Anpan</dt>
                  <dd>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit..................................$4,00
                  </dd>
                  <dt>Bagel</dt>
                  <dd>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit..................................$4,00
                  </dd>
                </dl>
              </menu>
            </section>
            <div>
              <Explorer />
            </div>
          </footer>
        </section>
      </main>
      <footer id="contact" className={styles.footer}>
        <header>
          <h2 className={cormorant.className}>Artisan bakery</h2>
        </header>
        <section className={lora.className}>
          <form>
            <legend>Contact us</legend>
            <label htmlFor="fname">First name</label>
            <input type="text" id="fname" name="fname" />
            <label htmlFor="lname">Last name</label>
            <input type="text" id="lname" name="lname" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="phone">Enter your phone number</label>
            <input type="tel" id="phone" name="phone" />
            <label htmlFor="message">Message</label>
            <input type="text" id="message" name="message" />
            <input type="submit" value="Submit" />
          </form>
          <aside>
            <article>
              <p>54 Pearl St, New York, NY 10004, Estados Unidos</p>
              <p>artisanbakery@contact.com</p>
              <p>(xx) x xxxxx-xxxxxx</p>
            </article>
            <Social />
          </aside>
        </section>
        <div className={styles.shapeOne}></div>
        <div className={styles.shapeTwo}></div>
      </footer>
    </>
  );
};

export default Home;
