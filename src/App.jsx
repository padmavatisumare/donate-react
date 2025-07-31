import './App.css';

function App() {
  return (
    <>
      <div className="mainContainer">
        <div className="navContainer">
          <div className="logoContainer">
            <img src="/images/Slider 3.png" className="imgStyle" />
          </div>
          <div className="menuContainer">
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#donate">Donation</a></li>
              <li><a href="#faq">FAQs</a></li>
            </ul>
          </div>
        </div>

        <div className="contentContainer">
          <div className="quoteContainer">
            <div className="tagLineContainer">
              <h1 className="tagLineContainer--invcomma">
                <img src="/images/Vector.png" />
                <img src="/images/Vector.png" />
              </h1>
              <p className="tagLineContainer--desc">
                Giving is not just about making a<br />
                donation. It is about making a difference.
              </p>
            </div>

            <div className="btnAndNameMain">
              <div className="btn-container">
                <button className="button" onClick={() => window.location.href = '#donate'}>
                  Donate Now
                </button>
              </div>
              <div className="poetName">
                <p><i>- Kathy Calvin</i></p>
              </div>
            </div>
          </div>

          <div className="pictureContainer">
            <img src="/images/hero.png" className="pictureStyle" alt="" />
          </div>
        </div>
      </div>

      {/* ✅ ABOUT SECTION */}
      <section id="about">
        <div className="secondmaincontainer">
          <div id="about" className="fullaboutcontainer">
            <div className="aboutheadcontainer">
              <div className="headstyle">
                <h1>About Our Platform</h1>
              </div>
            </div>
            <div className="aboutcontentcontainer">
              <div className="contentstyle">
                <h5>
                  There are children in need of people who can donate clothes and money.
                  These children are living in poverty, their parents cannot afford to buy them
                  new clothes or pay for their school supplies and many do not have parents too.
                  By donating clothes and money you can help these children get the supplies they
                  need to succeed in school and have a better future.
                </h5>
              </div>
            </div>
          </div>

          <div className="imagecontainer">
            <div className="imagebox">
              <div className="firstlinestyle">
                <h1>You are someone who can bring smile on their faces.</h1>
              </div>
              <br />
              <hr style={{ width: "20%", textAlign: "center", marginLeft: "40%" }} />
              <br />
              <div className="secondlinestyle">
                Your small action of goodness can make someone's life better through<br />
                this platform you can donate money and clothes for the children in<br />
                slums and shelter homes.
              </div>
            </div>
          </div>

          <div className="aboutlastcontainer">
            <div className="firstinnercontainer">
              <div className="innerstyle">
                <h1>Donations are used to help children in following ways:</h1>
              </div>
            </div>
            <div className="secondinnercontainer">
              <ul className="sidestyle">
                <div className="circle">
                  <img className="ellipse" src="/images/Ellipse 1.png" alt="/" />
                  <li style={{ lineHeight: "95%", color: "#07360f" }}>
                    To provide them basic necessities like <strong>food, clothes</strong> and <strong>shelter.</strong>
                  </li>
                </div>

                <div className="circle">
                  <img className="ellipse" src="/images/Ellipse 1.png" alt="/" />
                  <li style={{ lineHeight: "95%", color: "#07360f" }}>
                    To help them to get access to <strong>education</strong> and <strong>health care.</strong>
                  </li>
                </div>

                <div className="circle">
                  <img className="ellipse" src="/images/Ellipse 1.png" alt="/" />
                  <li style={{ lineHeight: "95%", color: "#07360f" }}>
                    To provide them with <strong>livelihood opportunities</strong> so that they can earn a dignified living.
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ DONATE SECTION */}
      <div className="donate-container" id="donate">
        <div className="text-container">
          <div className="img-container">
            <img src="/images/Star.svg" />
          </div>
          <h1>Donate Here</h1>
          <div className="brief">
            <div>You can help us by donating money or clothes</div>
            <div>or else with your support and good wishes.</div>
            <br />
            <div style={{ textAlign: "center", color: "blue" }}>
              <h2><a href="login.php">login and registration for donation</a></h2>
            </div>
          </div>
        </div>
        <img className="arrowstyle1" src="/images/Arrow 1.svg" />
        <div className="content">
          <div className="left-content">
            <div>
              <h4>
                <i>
                  *We assure that your information is safe. We use latest Security Measures to protect your data and keep your transactions secure.
                </i>
              </h4>
            </div>
          </div>
        </div>
        <img className="arrowstyle2" src="/images/Arrow 2.svg" />
      </div>

      {/* ✅ FAQ SECTION */}
      <div className="faq" id="faq">
        <div className="FAQ">
          <h1>Frequently asked questions</h1>
        </div>

        <div className="question">
          <hr />
          <div className="question-2">
            <h2>Can you volunteer in this program</h2>
            <button id="button" className="btn-1">+</button>
          </div>

          <div id="paragraph" className="paragraph">
            <p>
              Thankyou for your intrest in volunteering with our organisation. At this time we do not have any
              volunteering oppurtunities available. please check back at a later date.
            </p>
          </div>
          <hr />

          <div className=" question-2 ">
            <h2>How do i create an account</h2>
            <button id="btn-2" className="btn-2">+</button>
          </div>
          <div id="paragraph-2" className="paragraph">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quae recusandae quidem fugit earum eum nam ea ex natus.
            </p>
          </div>
          <hr />

          <div className="question-2">
            <h2>How do i create an account</h2>
            <button id="btn-3" className="btn-2">+</button>
          </div>

          <div id="paragraph-3" className="paragraph">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis facere temporibus adipisci iste deserunt ut consequatur.
            </p>
          </div>
          <hr />
        </div>
      </div>

      {/* ✅ CONTACT SECTION */}
      <div className="contactcontainer">
        <div className="greenbox">
          <div className="container1">
            <b>Contact Us</b>
          </div>
          <div className="container2">
            <div className="subcontainer1">
              <b>Contact Numbers</b>
              <hr className="hrs" />
              <ul className="numberstyle">
                <li>+91 9359160678 </li>
                <li>+91 8552851976 </li>
                <li>+91 9325208145 </li>
              </ul>
            </div>
            <div className="subcontainer2">
              <b>Email us</b>
              <hr className="hrs2" />
              <div className="emailstyle">random@gmail.com</div>
            </div>
            <div className="subcontainer3">
              <b>Social Media</b>
              <hr className="hrs3" />
              <ul className="socialstyle">
                <li>Instagram</li>
                <li>Facebook</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ FOOTER */}
      <footer>
        <div className="container-fluid1">
          <div className="logocontainer">
            <img src="/images/Logo.png" className="imgStyle" />
          </div>
          <div className="footer-buttons">
            <a href="#about" className="about">About</a>
            <a href="#donate">Donation</a>
            <a href="#faq">FAQs</a>
          </div>
        </div>
        <div className="container-fluid2">
          <p>&copy;Donaate 2022</p>
        </div>
      </footer>

      {/* ✅ Scroll to Top Button */}
      <a href="#" id="btn-back-to-top" style={{ display: "none" }}><span></span></a>
    </>
  );
}

export default App;
