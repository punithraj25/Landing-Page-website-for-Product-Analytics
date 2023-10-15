document.getElementById('btnProduct').onclick = function() {
    calcCost();
};

//Tracking "Calculate and order" button click event
document.getElementById("btnProduct").addEventListener("click", function() {
  gtag('event', 'click', {
    'event_category': 'Button Click',
    'event_label': 'Calculate and Order',
  });
});


//Tracking the email link click event
document.querySelector(".total_email").addEventListener("click", function() {
  gtag('event', 'click', {
    'event_category': 'Email Link Click',
    'event_label': 'rajpunith469@gmail.com',
  });
});

//Tracking navigation bar clicks
document.querySelectorAll(".nav-list a").forEach(function(link) {
  link.addEventListener("click", function(event) {
    gtag('event', 'click', {
      'event_category': 'Navigation Click',
      'event_label': event.target.textContent,
    });
  });
});

//Tracking Google Map clicks
<iframe class="contact-map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15592.395478896431!2d76.6512659!3d12.3091283!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7172664902a9%3A0x62700bfb2266869a!2sNabha%20Gold!5e0!3m2!1sen!2sin!4v1696874462505!5m2!1sen!2sin&ll=12.3091283,76.6512659" width="600" height="370" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" onclick="trackGoogleMapClick()"></iframe>

<script>
  function trackGoogleMapClick() {
    gtag('event', 'click', {
      'event_category': 'Google Map Click',
      'event_label': 'Contact Page',
    });
  }
</script>


function calcCost () {
    let sP = document.getElementById('selectProduct').value;
    let qP = document.getElementById('quantityProduct').value;
    let total = sP * qP * 5350;
    document.getElementById('priceProduct').innerHTML = total;
    document.getElementById('infoProduct').style.display = 'block';

    if (sP == 0 || qP == 0) {
        document.getElementById('infoProduct').style.display = 'none';
        alert('Please, enter details');
        return;
    }

}
