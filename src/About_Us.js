import React from "react";

function About_Us(props) {
  let { left, right } = props;

  let Sam =
    "https://lh4.googleusercontent.com/-eDpJh_8UEjUWdwgyvK2ypUZ5qZ2YoIUCCLIB4lCmp69Ew3miDCKiDk4Jb6xGTSF6BLybt9qPMn_m6A2IZTa3tauBsh_1e-jxc5D9Y_IrB6-lnyeemS4cO0LBeRIwMHbft1V8GU7WY1OUdOv7TLTqWw";
  let Dante =
    "https://lh5.googleusercontent.com/EHpLPyf24vDqiLdsiedny0_LQFzU3z_Z-JcBbxeq00yxzgAopuVZ1_Hrk6-a-WHBzFhE9qBF4IPPstjEurPuufRTVgOkbHdI67lh5Scx1UOvUl3fvSImWlpBBxjeXUwHzXCta1YLZFxWfnph0-ejjtU";

  return (
    <>
      <div
        style={{
          alignItems: "center",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div className="about_office">
          <div className="ao_container">
            <img src={Dante} alt="" />
          </div>
          <div className="ao_container ao_text">
            <h2>DANTE GURGIGNO, DC </h2>
            <span style={{ width: "90%", maxWidth: "none" }}>
              <p>
                Dr. Dante Gurgigno actively takes time to listen to his patients
                and treat them in accordance with their unique needs because he
                believes in fostering a healthy and positive lifestyle. Since
                earning his degree from Life University in June of 2000, he has
                made a significant contribution to the healthcare industry. He
                has traveled the nation throughout the years while continuing
                his studies to be up to date on new techniques and methods.
                During that time, he was introduced to the integrated medical
                approach that still guides his practice today. He is aware of
                how crucial it is for professionals with different philosophies
                of treatment to collaborate and co-manage patients for the best
                possible outcome. 
                <br />
                <br />
                Dr. Dante was born and raised in New York, where he also holds a
                board certification and is licensed to practice. Dr. Dante is
                entirely committed to his career in chiropractic and wellness,
                and he eagerly awaits the chance to help you on your road to
                health and wellness. 
                <br /> 
                <br />
                He currently resides in Marietta, Georgia, together with his
                wife and kids. When he’s not working or publicly speaking to his
                community, you can find him enjoying time with his family.
              </p>
            </span>
          </div>
        </div>
        <span style={{background:'rgba(0,0,0,.4)', width:'100%', height:'2px', maxWidth:'1100px'}}></span>
        <div className="about_office about_office_reverse">
        <div className="ao_container ao_text">
            <h2>Sam Kashani, DC </h2>
            <span style={{ width: "90%", maxWidth: "none" }}>
              <p>
              After earning his bachelor's degree in Biology from the University of North Carolina at  Greensboro in Greensboro, North Carolina, Dr. Sam Kashani went on to complete his  Doctor of Chiropractic from Life University in Marietta, Georgia in 2001. Dedicated to  educating and serving his community, Dr. Sam is committed to helping each of his pa tients discover their full potential with the knowledge he has gained over the years.  <br /><br />
Now co-owners of Pro Healthcare with Dr. Dante Gurgigno, they are dedicated to help ing individuals with their healthcare needs. <br /><br />
Dr. Sam, his wife and two children currently lives in the Woodstock, Georgia. Dr. Sam  is very active in his community and surrounding areas. <br /><br />
His favorite quote is from B.J. Palmer: “The power that made the body will heal the  body." 
              </p>
            </span>
          </div>
          <div className="ao_container">
            <img src={Sam} alt="" />
          </div>
          
        </div>
        {/* <hr /> */}
      </div>
    </>
  );
}

export default About_Us;
