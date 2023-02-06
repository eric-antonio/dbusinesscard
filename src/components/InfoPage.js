import React from "react";
import Foto from "../img/foto.jpg"

export default function InfoPage(){
    return(
        <di>
            <div className="profile--picture">

            </div>

            <section className="info--profile">
                <h4 className="name">Laura Smith</h4>
                <p className="job">Frontend Developer</p>
                <small className="site">laurasmith.website</small>
            </section>


            <div>
                <button className="btn--email">
                    <a href="#" class="fa fa-envelope" id="email"></a>
                    Email
                </button>
                <button className="btn--link">
                    <a href="#" class="fa fa-linkedin" id="linkedin"></a>
                    Linkedin
                </button>
            </div>
        </di>
    )
}