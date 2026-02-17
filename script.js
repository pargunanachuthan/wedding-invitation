let currentLang = 'en';

function updateCountdown() {
    const weddingDate = new Date('2026-02-22T04:30:00').getTime();
    const now = new Date().getTime();
    const distance = weddingDate - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ta' : 'en';
    document.body.setAttribute('lang', currentLang);
    
    const langBtn = document.getElementById('langBtn');
    langBtn.textContent = currentLang === 'en' ? 'தமிழ்' : 'English';
    
    document.querySelectorAll('[data-en]').forEach(el => {
        el.textContent = el.getAttribute(`data-${currentLang}`);
    });
    
    document.querySelectorAll('[data-placeholder-en]').forEach(el => {
        el.placeholder = el.getAttribute(`data-placeholder-${currentLang}`);
    });
}

document.getElementById('guestForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const place = document.getElementById('place').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
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
    
    document.getElementById('guestForm').classList.add('hidden');
    document.getElementById('thankYouMsg').classList.remove('hidden');
    
    setTimeout(() => {
        const thankYouElements = document.querySelectorAll('#thankYouMsg [data-en]');
        thankYouElements.forEach(el => {
            el.textContent = el.getAttribute(`data-${currentLang}`);
        });
    }, 100);
});

function shareWhatsApp() {
    const text = currentLang === 'en' 
        ? 'You are cordially invited to the wedding celebration!\n\nEngagement: 21st Feb 2026, 7:00 PM\nMuhurtham: 22nd Feb 2026, 4:30 AM - 6:00 AM\nReception: 22nd Feb 2026, 7:00 AM - 11:00 AM\n\nVenue: SVT Tirumanamandapam, Uthangarai\n\nView invitation: ' + window.location.href
        : 'திருமண விழாவிற்கு உங்களை அன்புடன் அழைக்கிறோம்!\n\nநிச்சயதார்த்தம்: 21 பிப்ரவரி 2026, மாலை 7:00\nமுகூர்த்தம்: 22 பிப்ரவரி 2026, காலை 4:30 - 6:00\nவரவேற்பு: 22 பிப்ரவரி 2026, காலை 7:00 - 11:00\n\nஇடம்: SVT திருமணமண்டபம், உத்தங்கரை\n\nஅழைப்பிதழ்: ' + window.location.href;
    
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
}

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

document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.event-card, .venue, .rsvp-section').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
});
