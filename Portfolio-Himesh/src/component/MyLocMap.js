import React from 'react'

export default function MyLocMap() {
  return (
    <div style={{ width: '100%', height: '270px' }}>
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d222.8058337764483!2d87.09606672021874!3d26.683893486957214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1724046180407!5m2!1sen!2snp" 
        frameBorder="0"
        style={{ border: 0, width: '100%', height: '100%' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
    ></iframe>
</div>
  )
}
