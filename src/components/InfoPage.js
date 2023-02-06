import React from "react";
import Foto from "../img/foto.jpg"

export default function InfoPage(){
    return(
        <di>
            <div className="profile--picture">

            </div>

            <section className="info--profile">
                <h4>Laura Smith</h4>
                <p className="job">Frontend Developer</p>
                <small>laurasmith.website</small>
            </section>


            <div>
                <button className="btn--email">Email</button>
                <button className="btn--link">Linkedin</button>
            </div>
        </di>
    )
}