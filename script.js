// OPEN INVITATION
function openInvitation() {
  const closedDiv = document.getElementById('closed-invitation');
  const mainContent = document.getElementById('main-content');
  
  closedDiv.classList.add('opening');
  
  setTimeout(() => {
    closedDiv.style.display = 'none';
    mainContent.classList.remove('hidden');
    setTimeout(() => mainContent.classList.add('show'), 50);
  }, 1000);
  
  music.play().catch(e => console.log('Autoplay prevented'));
  setTimeout(() => music.pause(), 60000);
}

// AUTO-PLAY MUSIC
const music = document.getElementById('wedding-music');
let isMuted = false;

function toggleMusic() {
  const btns = document.querySelectorAll('.closed-music-btn, #music-toggle');
  if (isMuted) {
    music.muted = false;
    btns.forEach(btn => btn.textContent = '🔊');
    isMuted = false;
  } else {
    music.muted = true;
    btns.forEach(btn => btn.textContent = '🔇');
    isMuted = true;
  }
}

// LANGUAGE TOGGLE
const enBtn = document.getElementById("lang-en");
const taBtn = document.getElementById("lang-ta");

enBtn.onclick = () => toggleLanguage("en");
taBtn.onclick = () => toggleLanguage("ta");

function toggleLanguage(lang) {
  if (lang === "en") {
    enBtn.classList.add("active");
    taBtn.classList.remove("active");
    document.getElementById("hero-title").innerText = "Jaya Suriya & Tamilarasi";
    document.getElementById("hero-date").innerText = "21-22 February 2026";
    document.getElementById("events-title").innerText = "Wedding Events";
    document.getElementById("engagement").innerText = "Engagement: 21 Feb 2026, 7:00 PM onwards";
    document.getElementById("muhurtham").innerText = "Muhurtham: 22 Feb 2026, 4:30 AM – 6:00 AM";
    document.getElementById("reception").innerText = "Reception: 22 Feb 2026, 7:00 AM – 11:00 AM";
    document.getElementById("location-title").innerText = "Venue";
    document.getElementById("venue-name").innerText = "SVT Tirumanamandapam (SVT Mahal), Uthangarai";
    document.getElementById("venue-address").innerText = "Uthangarai, Kalluganur, Tamil Nadu – 635207";
    document.getElementById("directions-btn").innerText = "Get Directions";
    document.getElementById("rsvp-title").innerText = "Guest Information";
    document.getElementById("name").placeholder = "Full Name";
    document.getElementById("place").placeholder = "City / Place";
    document.getElementById("message").placeholder = "Message (for travel assistance or guidance)";
    document.getElementById("phone").placeholder = "Phone Number (Optional)";
    document.getElementById("rsvp-submit").innerText = "Submit";
    document.getElementById("thankyou-msg").innerText = "Thank you for your response. Groom's brother will reach you soon for guidance.";
    document.getElementById("contact-msg").innerText = "Alternatively, you may contact him directly at +91 63792 98097.";
    document.getElementById("whatsapp-btn").innerHTML = "📱 Share via WhatsApp";
    document.getElementById("calendar-btn").innerHTML = "📅 Add to Calendar";
  } else {
    enBtn.classList.remove("active");
    taBtn.classList.add("active");
    document.getElementById("hero-title").innerText = "ஜெயசூரியா & தமிழரசி";
    document.getElementById("hero-date").innerText = "21-22 பிப்ரவரி 2026";
    document.getElementById("events-title").innerText = "திருமண நிகழ்ச்சிகள்";
    document.getElementById("engagement").innerText = "நிச்சயதார்த்தம்: 21 பிப்ரவரி 2026, மாலை 7:00 மணி முதல்";
    document.getElementById("muhurtham").innerText = "முகூர்த்தம்: 22 பிப்ரவரி 2026, காலை 4:30 – 6:00";
    document.getElementById("reception").innerText = "வரவேற்பு: 22 பிப்ரவரி 2026, காலை 7:00 – 11:00";
    document.getElementById("location-title").innerText = "இடம்";
    document.getElementById("venue-name").innerText = "SVT திருமணமண்டபம் (SVT மஹால்), உத்தங்கரை";
    document.getElementById("venue-address").innerText = "உத்தங்கரை, கல்லுகனூர், தமிழ்நாடு – 635207";
    document.getElementById("directions-btn").innerText = "வழிகாட்டுதலைப் பெறுங்கள்";
    document.getElementById("rsvp-title").innerText = "விருந்தினர் விவரங்கள்";
    document.getElementById("name").placeholder = "உங்கள் பெயர்";
    document.getElementById("place").placeholder = "ஊர் / நகரம்";
    document.getElementById("message").placeholder = "செய்தி (பயண உதவி அல்லது வழிகாட்டுதலுக்கு)";
    document.getElementById("phone").placeholder = "தொலைபேசி எண் (விருப்பம்)";
    document.getElementById("rsvp-submit").innerText = "சமர்ப்பிக்கவும்";
    document.getElementById("thankyou-msg").innerText = "உங்கள் பதிலுக்கு நன்றி. மணமகனின் சகோதரர் விரைவில் உங்களை தொடர்பு கொள்வார்.";
    document.getElementById("contact-msg").innerText = "அல்லது நீங்கள் நேரடியாக +91 63792 98097 என்ற எண்ணில் தொடர்பு கொள்ளலாம்.";
    document.getElementById("whatsapp-btn").innerHTML = "📱 WhatsApp மூலம் பகிரவும்";
    document.getElementById("calendar-btn").innerHTML = "📅 நாட்காட்டியில் சேர்க்கவும்";
  }
}

// RSVP FORM
const form = document.getElementById("rsvp-form");
const thankyou = document.getElementById("thankyou");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  
  const name = document.getElementById("name").value;
  const place = document.getElementById("place").value;
  const message = document.getElementById("message").value;
  const phone = document.getElementById("phone").value;
  
  const emailBody = `
Guest Information:
-----------------
Name: ${name}
Place/City: ${place}
Phone: ${phone || 'Not provided'}
Message: ${message}
  `;
  
  const mailtoLink = `mailto:pargunanachuthan@gmail.com?subject=Wedding Guest Information - ${name}&body=${encodeURIComponent(emailBody)}`;
  window.location.href = mailtoLink;
  
  form.style.display = "none";
  thankyou.classList.remove("hidden");
});

// WHATSAPP SHARE
function shareWhatsApp() {
  const currentLang = enBtn.classList.contains('active') ? 'en' : 'ta';
  const text = currentLang === 'en' 
    ? 'You are cordially invited to the wedding celebration!\n\nEngagement: 21st Feb 2026, 7:00 PM\nMuhurtham: 22nd Feb 2026, 4:30 AM - 6:00 AM\nReception: 22nd Feb 2026, 7:00 AM - 11:00 AM\n\nVenue: SVT Tirumanamandapam, Uthangarai\n\nView invitation: ' + window.location.href
    : 'திருமண விழாவிற்கு உங்களை அன்புடன் அழைக்கிறோம்!\n\nநிச்சயதார்த்தம்: 21 பிப்ரவரி 2026, மாலை 7:00\nமுகூர்த்தம்: 22 பிப்ரவரி 2026, காலை 4:30 - 6:00\nவரவேற்பு: 22 பிப்ரவரி 2026, காலை 7:00 - 11:00\n\nஇடம்: SVT திருமணமண்டபம், உத்தங்கரை\n\nஅழைப்பிதழ்: ' + window.location.href;
  
  window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
}

// ADD TO CALENDAR
function addToCalendar() {
  const event = {
    title: 'Wedding Celebration',
    description: 'Muhurtham (Wedding Ceremony) at SVT Tirumanamandapam, Uthangarai',
    location: 'SVT Tirumanamandapam, Uthangarai, Kalluganur, Tamil Nadu - 635207',
    start: '20260222T043000',
    end: '20260222T060000'
  };
  
  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${event.start}
DTEND:${event.end}
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
END:VEVENT
END:VCALENDAR`;
  
  const blob = new Blob([icsContent], { type: 'text/calendar' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'wedding-invitation.ics';
  link.click();
}
