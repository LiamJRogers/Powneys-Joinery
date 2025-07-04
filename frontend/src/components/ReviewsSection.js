import React from "react";

function ReviewsSection({ reviews }) {
  return (
    <section id="reviews" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold text-charcoal mb-4">What Our Customers Say</h2>
          <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
            Don't just take our word for it - see what our satisfied customers across Merseyside have to say
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="animate-on-scroll bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-gold">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-charcoal/80 mb-4 italic">"{review.text}"</p>
              <div className="font-semibold text-charcoal">
                {review.name}
                <span className="text-charcoal/60 font-normal"> - {review.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReviewsSection;