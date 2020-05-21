<template>
  <div>
    <Homesection/>
    <Aboutsection />
    <Projectsection/>
    <Contactsection/>
    <Footer/>
  </div>
</template>

<script>
import Homesection from '../components/home_section';
import Aboutsection from '../components/About_Section';
import Projectsection from '../components/Projects_section';
import Contactsection from '../components/Contact_section';
import Footer from '../components/layouts/Footer';
export default {
  name: 'Home',
  components: {
     Homesection,
     Aboutsection,
     Projectsection,
     Contactsection,
     Footer
  }
}
</script>
