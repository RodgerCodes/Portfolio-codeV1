<template>
    <div data-aos="fade-left" id="contact" class="container contact-info">
        <h1>Contact info</h1>
        <div class="info">
        <div>
           <h2>Phone Numbers</h2>
           <p>+265 880 122 611</p>
           <p>+265 992 424 839</p>
        </div>  
        <div>
          <h2>Email address</h2>
          <div class="emails">  
        <a href="mailto:rkumwanje@gmail.com">rkumwanje@gmail.com</a>
        <a href="mailto:rkumwanje@hec.ac.mw">rkumwanje@hec.ac.mw</a>
         </div>
        </div>
        <div>
         <h3>Location</h3>
         <p>Likuni, Lilongwe, Malawi, Africa</p>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Contactsection"
}
</script>

<style>
.contact-info {
    height: 100vh;
    position: relative;
}

.info {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -40%);
}

.info > div  {
  margin: 50px 0;
} 

.info > div h2 {
    font-size: 30px;
    margin: 10px 0;
}

.info .emails {
    display: flex;
    flex-direction: column;
}

.info .emails a{
    text-decoration: none;
    color: #000;
    opacity: 0.7;
    margin: 7px 0;
}

.info .emails a:hover {
    opacity: 1;
}

.contact-info h1{
    text-align: center;
    margin:20px 0;
}

</style>