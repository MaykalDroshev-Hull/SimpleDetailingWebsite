import React, { useEffect, useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Meta from '@/components/Page Components/Meta';
import styles from '../styles/Page Styles/Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { i18n } = useTranslation();
  const { t } = useTranslation('common');

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(`/api/review?locale=${i18n.language}`);
        const data = await response.json();
        // Handle the new Google Places API response format
        if (data && Array.isArray(data.reviews)) {
          setReviews(data.reviews);
        } else {
          setReviews([]);
        }
      } catch (err) {
        console.error('Error fetching reviews:', err);
        setReviews([]);
      }
    };
  
    fetchReviews();
  }, [i18n.language]);

  return (
    <>
      <Meta 
        title={t("Reviews")} 
        description="Read customer reviews and testimonials about our professional auto detailing services. See what our satisfied clients have to say about our work."
        keywords="auto detailing reviews, customer testimonials, car detailing feedback, professional detailing reviews"
      />
      
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.container}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>{t('ReviewsHeroTitle')}</h1>
              <p className={styles.heroSubtitle}>
                {t('ReviewsHeroSubtitle')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Content */}
      <section className={styles.reviewsSection}>
        <div className={styles.container}>
          <div className={styles.reviewsGrid}>
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <div key={index} className={styles.reviewCard}>
                  <div className={styles.cardContent}>
                    <h3 className={styles.name}>{review.name}</h3>
                    <div className={styles.rating}>
                      {'★'.repeat(review.rating || 5)}
                    </div>
                    {review.review && review.review.trim() !== '' && (
                      <p className={styles.text}>&ldquo;{review.review}&rdquo;</p>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className={styles.noReviews}>
                <p>{t('reviews.noReviews')}</p>
              </div>
            )}
          </div>

          <p className={styles.moreReviewsText}>{t('reviews.moreText')}</p>

          <div className={styles.reviewButtons}>
            <a
              href="https://search.google.com/local/reviews?placeid=ChIJS23rucjnq0ARzuRFbUrCorM"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={styles.googleReviewButton}>
                <img
                  src="/Images/Reviews/GoogleLogo.png"
                  alt="Google Reviews"
                  className={styles.googleReviewLogo}
                />
                {t('reviews.readMore')}
              </button>
            </a>

            <a
              href="https://search.google.com/local/writereview?placeid=ChIJS23rucjnq0ARzuRFbUrCorM"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={styles.leaveReviewButton}>
                <img
                  src="/Images/Reviews/5Stars.png"
                  alt="Leave a review"
                  className={styles.googleReviewLogo}
                />
                {t('reviews.leaveReview')}
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviews;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}