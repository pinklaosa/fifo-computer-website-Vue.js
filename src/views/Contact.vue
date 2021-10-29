<template >
  <div class="contact">
    <div class="text-center" style="height: 100px; background-color: #ff5757">
      <div class="col-sm" style="color: #ff5757">.</div>
      <h2 style="color: white">
        <strong> FIFO CONTACT </strong>
      </h2>
      <br />
      <hr
        style="
          height: 1px;
          border-width: 0;
          color: #ff5757;
          background-color: #ff5757;
        "
      />
    </div>
    <br />

    <div class="container-fluid">
      <div class="contact mx-5 mt-5">
        <div class="shadow p-3 mb-5 bg-body rounded">
          <b-row>
            <b-col>
              <div class="contact-box py-5 px-4">
                <img
                  class="contact-box-logo"
                  src="../assets/img/contact/phone-call.png"
                  width="40px"
                  height="40"
                />
                <p class="py-3"><strong>Talk to Sales </strong></p>
                <p class="contact-box-title blurb px-2">
                  Interest in FIFO Computer Shop? Just pick up the phone to chat
                  with a member of our sales team.
                </p>
                <div class="contact-box-number py-3">
                  <a href="tel:+66931299024"> <p>+66 9 3129 9024</p> </a>
                </div>
              </div>
            </b-col>
            <b-col>
              <div class="contact-box-sec py-5 px-4">
                <img
                  class="contact-box-logo"
                  src="../assets/img/contact/chat.png"
                  width="40px"
                  height="40"
                />
                <p class="py-3"><strong> Contact Customer Support </strong></p>
                <div class="row">
                  <div class="col ml-1">
                    <div class="icon-facebook">
                      <a href="https://www.facebook.com/tide.or.tai">
                        <img
                          src="../assets/img/contact/facebook.png"
                          width="40px"
                          height="40px"
                        />
                      </a>
                      <a href="https://www.instagram.com/sd.tide/" class="ml-3">
                        <img
                          src="../assets/img/contact/instagram.png"
                          width="40px"
                          height="40px"
                        />
                      </a>

                      <a href="https://line.me/th/" class="ml-3">
                        <img
                          src="../assets/img/contact/line.png"
                          width="40px"
                          height="40px"
                        />
                      </a>
                    </div>
                  </div>
                </div>

                <p class="contact-box-title blurb py-4 px-4">
                  Sometimes you need a little help from your friends. Or a FIFO
                  support rep. Don’t worry… we’re here for you.
                </p>
              </div>
            </b-col>
          </b-row>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-7 mb-4">
          <!--Card-->
          <div class="card card-cascade narrower">
            <!--Card image-->
            <div
              class="view view-cascade gradient-card-header peach-gradient"
            ></div>
            <!--/Card image-->
            <!--Card content-->
            <div class="card-body card-body-cascade text-center">
              <!--Google map-->
              <div
                id="map-container-google-9"
                class="z-depth-1-half map-container-5"
                style="height: 300px"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.6566496723763!2d100.9170104147722!3d13.120924390757974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3102b67ef835f265%3A0x963c6129282e5cb!2z4Lih4Lir4Liy4Lin4Li04LiX4Lii4Liy4Lil4Lix4Lii4LmA4LiB4Lip4LiV4Lij4Lio4Liy4Liq4LiV4Lij4LmMIOC4p-C4tOC4l-C4ouC4suC5gOC4guC4leC4qOC4o-C4teC4o-C4suC4iuC4sg!5e0!3m2!1sth!2sth!4v1635253157240!5m2!1sth!2sth"
                  frameborder="0"
                  style="border: 0"
                  allowfullscreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            <!--/.Card content-->
          </div>
          <!--/.Card-->
        </div>
        <div class="address-box col-md-5 mb-4 card card-cascade">
          
            <h5 class="px-4 mt-3 py-3">
              <strong>Connect with one of our global offices</strong>
            </h5>
            <h5 class="px-4" style="font-size: 20px">FIFO OFFICE</h5>
            <p class="px-4">Kasetsart Sriracha</p>
            <br>
            <h5 class="px-4"><strong> Phone </strong></h5>
            <p class="px-4">+66 8 8888 8888</p>
            <br>
            <h5 class="px-4"><strong> Media / Discord </strong></h5>
            <a href="https://discord.gg/5YJqnX8wv5" class="px-4 mb-3">
              Visit my FiFO Discord Team</a
            >
         
        </div>
      </div>
    </div>
    <div class="mb-3 mt-5">
        <vs-progress :percent="100" color="danger" :height="2"
          >danger</vs-progress
        >
      </div>
  </div>
</template>
<script>
export default {};
</script>
<style >
</style>