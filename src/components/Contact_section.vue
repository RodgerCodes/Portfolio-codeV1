<template>
    <div  id="contact" class="container contact-info">
        <h1>Contact info</h1>
        <div class="info">
        <div>
           <h2>Phone Numbers</h2>
           <p>+265 880 122 611</p>
           <p>+265 992 424 839</p>
        </div>  
        <div>
         <h3>Location</h3>
         <p>Likuni, Lilongwe, Malawi, Africa</p>
        </div>
          <form name="contact" netlify>
              <h3>Get in Touch</h3>
              <label for="">Name</label>
              <input type="text" name="name" placeholder="your name">
              <label for="">Email</label>
              <input type="email" name="email" id="" placeholder="your email">
              <label for="">Message</label>
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
    margin: 20px 0;
}

.contact-info .info h2{
    font-size: 1.1em;
}

.contact-info .info > div{
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
   border: 1px solid #000;
   border-radius: 10px;
   width: 100%;
   height:40px;
   max-width: 400px;
   margin: 2px auto;
   font-size: 0.3;
}

.contact-info .info label{
    color: rgb(31, 31, 31);
    margin-top: 6px;
    font-weight: bold;
}

.contact-info .info textarea{
   width: 100%;
   border: 1px solid #000;
   height: 100px;
   border-radius: 10px;
}
.contact-info .info form input[type="submit"]{
    color: #fff;
    background: rgb(4, 128, 211);
    padding: 10px 0px;
    font-weight: bold;
    margin-top: 20px;
    width: 40%;
    border-radius: 5px;
}

.contact-info .info div{
    margin: 20px 0;
}
</style>