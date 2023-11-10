import React from "react";
import "../Facilities/facilities.css";

const Facilities = () => {
    return (
        <section id="facilities" className="d-flex justify-content-center">
        <div className="grid-container">
        <div className="grid-item">
            <h2><b>LAB LOCATION</b> </h2>
            <hr></hr>
            <p><b>Building:</b> Psychology Building</p>
            <p><b>Address:</b>
            1101 E. 10th Street, Bloomignton, IN, 47405</p>
            <p><b>Rooms: </b>240, 241, and 243</p>

        </div>
        <div className="map-item">
        <iframe 
            title="Lab Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3093.1143034255233!2d-86.52267662400462!3d39.1721221304475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886c66c7635927bd%3A0x78888eb4a1b46d01!2sIUB%20Psychological%20%26%20Brain%20Sciences!5e0!3m2!1sen!2sus!4v1699557336653!5m2!1sen!2sus" 
            width="600" 
            height="450" 
            style={{border:"0"}}
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
      </div>
        </section>
        
    );
    }
export default Facilities;