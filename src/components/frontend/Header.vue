<template>
     <!--========================= Header Start========== -->
	 <div class="row">
        <div class="container">
            <header class="header" id="header">
                <div class="" id="container">
                    <div class="logo">
						 <img src="../../../public/assets/images/logo.png" alt=""/>
                    </div>
                    <input type="checkbox" id="menu-toggle">
                    <label for="menu-toggle" class="menu-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                    <nav class="nav">
                        <ul>
                            <li>
								<RouterLink  to="/">Home</RouterLink>
							</li>
							
                            <li>
								<RouterLink  to="/about">About</RouterLink>
							</li>
                            <li>
								<RouterLink to="/offer">Offer</RouterLink>
							</li>
                            <li>
								<RouterLink  to="/price">Pricing</RouterLink>
							</li>
                            <li>
								<RouterLink  to="/coverage">Coverage</RouterLink>
							</li>
                            <li>
								<RouterLink  to="/pay">Pay Bill</RouterLink>
							</li>
                            <li>
								<RouterLink to="/contact">Contact</RouterLink>
							</li>
                        </ul>
                    </nav>
                    <div class="nav-buttons">
                        <button class="quick-pay btn btn-primary">Quick Pay</button>
                        <button class="selfcare">Selfcare</button>
                    </div>
                </div>
            </header>
        </div>
    </div>
     <!--=========================Header End========== -->
</template>

<script setup>

import { onMounted } from 'vue';

// onMounted(() => {
//   // Get the header
//   const header = document.getElementById("header");

//   // Get the offset position of the header
//   const sticky = header.offsetTop;

//   // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
//   window.onscroll = function() {
//     if (window.pageYOffset > sticky) {
//       header.classList.add("fixed");
//     } else {
//       header.classList.remove("fixed");
//     }
//   };
// });
</script>
<style>
   /* header {
  background-color: #fff;
  width: 100%;
  top: 0;
  z-index: 1000;
  transition: top 0.3s;
} */

/* header.fixed {
  position: fixed;
  top: 0;
} */
</style>