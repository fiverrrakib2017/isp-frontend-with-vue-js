<template>
     <div class="container">
        <div class="row py-4 mb-5  d-flex" >
            <div class="col-md-6">
                <div class="text-column">
                    <h2>Quick Pay</h2>
                    <p>Instantly make your payment using a variety of available facilities, such as bKash, Nagad, MasterCard, Visa card, and other payment methods.</p>
                </div>
            </div>
            <div class="col-md-6">
                <div class="image-column">
                     <div class="card-body mt-4">
                        <form>
                            <div class="form-group">
                                <div class="input-group">
                                    <input type="text" class="form-control" id="customerId" placeholder="Enter your Customer ID">
                                </div>
                            </div><br>
                            <button type="submit" class="btn btn-primary">Pay Now <i class="fas fa-arrow-right"></i></button>
                        </form><br>
                        <div class="card-footer">
                            <img src="../../../public/assets/images/bkash.png" alt="Payment Methods">
                            <img src="../../../public/assets/images/nagad.png" alt="Payment Methods">
                            <img src="../../../public/assets/images/master.png" alt="Payment Methods">
                        </div>
                     </div>
                </div>
            </div>
        </div>
        <hr>
    </div>

    <!--========================= Happy clients========== -->
    <div class="container mt-5">
        <div class="page-content page-container" id="page-content">
            <div class="padding">
                <div class="row">
                    
                    <div class="col-lg-6">
                        <h2>Pay Bill through bKash</h2>
                        <div class="timeline p-4 block mb-4">
                            <div class="tl-item active">
                                <div class="tl-dot b-warning"></div>
                                <div class="tl-content">
                                    <div class=""><h6>Login</h6>
                                        <p>Login to your bKash account with your account's PIN number and tap on "<span class="highlight">পে বিল</span>" option.</p></div>
                                </div>
                            </div>
                            <div class="tl-item">
                                <div class="tl-dot b-primary"></div>
                                <div class="tl-content">
                                    <div class=""> <h6>Select Dot Internet</h6>
                                         <p>In "<span class="highlight">পে বিল</span>" option you'll find "<span class="highlight">Dot Internet</span>". Simply tap on it and follow the next step.</p></div>
                                </div>
                            </div>
                            <div class="tl-item">
                                <div class="tl-dot b-danger"></div>
                                <div class="tl-content">
                                    <div class="">
                                        <h6>Select Billing Timeline</h6>
                                        <p>Now select your internet billing timeline in "<span class="highlight">বিলের সময়সীমা</span>" box & input your customer in "<span class="highlight">বিল অ্যাকাউন্ট নম্বর দিন</span>" box.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="tl-item">
                                <div class="tl-dot b-danger"></div>
                                <div class="tl-content">
                                    <div class="">
                                        <h6>Save Payment Info</h6>
                                        <p>If you want to save the payment info for quick payment, you can simply tick the checkbox "<span class="highlight">ভবিষ্যৎ বিল পেমেন্টের জন্য একাউন্টটি সেভ করে রাখুন</span>".</p>
                                    </div>
                                </div>
                            </div>
                            <div class="tl-item">
                                <div class="tl-dot b-success"></div>
                                <div class="tl-content">
                                    <div class="">
                                        <h6>Complete Payment</h6>
                                        <p>After that, tap the "<span class="highlight">পে বিল করতে এগিয়ে যান</span>" button & hold the pay button for a few seconds. You're done!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <img class="img-fluid" src="../../../public/assets/images/bkash_banner.png" alt="">
                    </div>
                
                </div>
            </div>
        </div>
    </div>
    <!--========================= Happy clients========== -->

</template>