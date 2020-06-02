<template>
    <div  id="contact" class=" contact-info">
        <h1>Contact info</h1>
        <div class="basic">
          <div>
           <h2>Phone Numbers</h2>
           <p>+265 880 122 611</p>
           <p>+265 992 424 839</p>
        </div>  
        <div>
         <h3>Location</h3>
         <p>Likuni, Lilongwe, Malawi, Africa</p>
        </div>
        </div>
        <div class="info">
        
          <form name="contact" netlify>
              <h3>Get in Touch</h3>
              <input type="text" name="name" placeholder="your name">
              <input type="email" name="email" id="" placeholder="your email">
              <textarea name="message" placeholder="Your message"></textarea>
              <input type="submit" value="Send Flare">
          </form>
        </div>
    </div>
</template>

<script>
export default {
    name:"Contactsection"
}
</script>

<style>
.contact-info h1{
    font-size: 1.5em;
    text-align: center;
    padding: 15px 0;
}

.contact-info{
    background: #080936;
    font-family: 'Rubik Regular';
}

@font-face {
    font-family: 'Rubik Regular';
    src: url('../assets/fonts/Rubik-Regular.ttf');
}

.contact-info .basic h2{
    font-size: 1.1em;
}

.contact-info .basic > div{
    text-align: center;
}

.contact-info .info form {
    display: flex;
    flex-direction: column;
    margin-top:10px;
}

.contact-info .info form h3{
    text-align: center;
    margin: 20px 0;
}

.contact-info .info input[type="text"], .contact-info .info input[type="email"]{
   border: 1px solid #fff;
   border-radius: 10px;
   width: 100%;
   height:40px;
   max-width: 400px;
   margin: 7px auto;
   font-size: 0.3;
}


.contact-info .info textarea{
   width: 70%;
   border: 1px solid #fff;
   height: 100px;
   margin: 10px auto;
   border-radius: 10px;
   max-width: 400px;
}

.contact-info .info form input[type="submit"]{
    color: #fff;
    background: rgb(4, 128, 211);
    padding: 10px 0px;
    font-weight: bold;
    margin-top: 20px;
    width: 40%;
    max-width:100px;
    border-radius: 5px;
}

.contact-info .basic div{
    margin: 20px 0;
}

@media Screen and (min-width:500px){
.contact-info .info form input[type="submit"]{

    margin: 5px auto;
}
}

@media Screen and (min-width:620px){
   .contact-info .basic{
        display: flex;
        justify-content: space-evenly;
    }

    .contact-info .info form input[type="submit"]{
        width: 20%;
        margin: 5px auto;
    }
}


@media Screen and (min-width:960px){
    .contact-info .info textarea{
          width: 40%;
          font-size: 0.8em;
    }

    .contact-info .info input[type="text"], .contact-info .info input[type="email"]{
      font-size: 0.8em;
    } 
}
</style>