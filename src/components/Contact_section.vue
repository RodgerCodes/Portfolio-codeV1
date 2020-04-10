<template>
    <div id="contact" class="container contact-info">
        <h1>Contact info</h1>
        <div class="info">
        <div>
           <h3>Phone Numbers</h3>
           <p>+265 880 122 611</p>
           <p>+265 992 424 839</p>
        </div>
        <div>
          <h3>Email address</h3>
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
    height: 90vh;
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

.info > div h3 {
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