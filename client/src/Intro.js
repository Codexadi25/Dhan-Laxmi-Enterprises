import React from 'react-tabs';
import './Intro.css';


function Intro() {


  return (
    <div className='intro'>
      <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">About Us</button>

        <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Business</button>
        
        <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Vision</button>
      </div>

      <div class="tab-content " id="v-pills-tabContent">
        <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
        <b>Dhan Laxmi Enterprise (DLEP)</b> is a Kanpur South based company, known for successful execution of large-scale production of consumer and sanitation products. DLEP is recognized as a registered trademark in India. The company was founded in 2011 and has shown great results in producing quality products.
        </div>

        <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
        We are focused on meeting requirement of diverse consumer products with a stable supply of affordable and quality products. We produce health & sanitary chemicals sold at affordable price.
        </div>
        
        <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">
        The company aims to build a healthy, clean & green environment and wants to do more good for our planet and our society. We want to act on the social and environmental issues facing the world and want to enhance people’s lives with our products.
        </div>
      </div>
    </div>
  )
}

export default Intro