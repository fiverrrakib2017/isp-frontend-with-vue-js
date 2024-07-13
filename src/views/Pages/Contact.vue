<template>
     <div class="container mt-5" id="contact">
        <div class="row">
            <!-- Contact Information -->
            <div class="col-md-6 bg-primary text-white p-4">
                <h4>Contact Information</h4>
                <p>If you would like to find out more about how we can help you, please give us a call or drop us an email.</p>
                <p><i class="fa fa-phone"></i> +8801757967432, +8801757967432</p>
                <p><i class="fa fa-envelope"></i> info@srgouripur.com</p>
                <p><i class="fa fa-map-marker"></i> Gouripur,Daudkandi,Cumilla</p>
                <p>Billing enquiries: <a href="mailto:accounts@srgouripur.com">accounts@srgouripur.com</a></p>
                <p>Technical enquiries: <a href="mailto:noc@srgouripur.com">noc@srgouripur.com</a></p>
                <p>New connection enquiries: <a href="mailto:sales@srgouripur.com">sales@srgouripur.com</a></p>
                <p>Management: <a href="mailto:admin@srgouripur.com">admin@srgouripur.com</a></p>
                <a href="#" class="btn btn-light btn-sm"><i class="fa fa-facebook"></i> Page</a>
                <a href="#" class="btn btn-light btn-sm"><i class="fa fa-facebook"></i> Group</a>
            </div>
            <!-- Contact Form -->
            <div class="col-md-6 p-4">
                <h4>Send us a message</h4>
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="firstName">First name</label>
                            <input type="text" class="form-control" id="firstName" required>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="lastName">Last name</label>
                            <input type="text" class="form-control" id="lastName" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="email">Email</label>
                            <input type="email" class="form-control" id="email" required>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="phone">Phone <small>(Optional)</small></label>
                            <input type="tel" class="form-control" id="phone">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="subject">Subject</label>
                        <input type="text" class="form-control" id="subject" required>
                    </div>
                    <div class="form-group">
                        <label for="message">Message <small>(Max. 500 characters)</small></label>
                        <textarea class="form-control" id="message" rows="4" maxlength="500" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>

</template>