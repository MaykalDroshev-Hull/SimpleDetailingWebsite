import React, { useState, useMemo, useEffect } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTimes } from "@fortawesome/free-solid-svg-icons";
import Meta from '@/components/Page Components/Meta';
import styles from '../styles/Page Styles/Parfumes.module.css';

const Parfumes = () => {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const { locale } = router;
  
  // Load parfumes data
  const parfumesData = require('public/Data/parfumes.json');
  
  // Filter states
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedScent, setSelectedScent] = useState('');
  
  // Modal state
  const [selectedParfume, setSelectedParfume] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = (parfume) => {
    setSelectedParfume(parfume);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedParfume(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };
  
  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };
    
    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isModalOpen]);
  
  // Get unique categories and scents for filters
  const categories = useMemo(() => {
    const cats = parfumesData.map(p => p.category[locale] || p.category.bg);
    return [...new Set(cats)];
  }, [parfumesData, locale]);
  
  const scents = useMemo(() => {
    const allScents = parfumesData.flatMap(p => {
      const composition = p.scentComposition[locale] || p.scentComposition.bg;
      return composition.split(',').map(s => s.trim());
    });
    return [...new Set(allScents)];
  }, [parfumesData, locale]);
  
  // Filter parfumes
  const filteredParfumes = useMemo(() => {
    return parfumesData.filter(parfume => {
      const category = parfume.category[locale] || parfume.category.bg;
      const composition = parfume.scentComposition[locale] || parfume.scentComposition.bg;
      const scentList = composition.split(',').map(s => s.trim().toLowerCase());
      
      const matchesCategory = !selectedCategory || category === selectedCategory;
      const matchesScent = !selectedScent || scentList.includes(selectedScent.toLowerCase());
      
      return matchesCategory && matchesScent;
    });
  }, [parfumesData, locale, selectedCategory, selectedScent]);
  
  const resetFilters = () => {
    setSelectedCategory('');
    setSelectedScent('');
  };
  
  return (
    <>
      <Meta 
        title={t('InteriorParfumes')} 
        description="Discover our premium collection of interior parfumes for your car. Fresh, warm, floral, and woody scents to enhance your driving experience."
        keywords="car parfumes, interior scents, car fragrances, automotive parfumes, car air fresheners"
      />
      
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.container}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>{t('InteriorParfumes')}</h1>
              <p className={styles.heroSubtitle}>
                {locale === 'en' 
                  ? 'Premium scents for your perfect drive'
                  : 'Премиум аромати за вашето перфектно пътуване'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className={styles.filtersSection}>
        <div className={styles.container}>
          <div className={styles.filtersContainer}>
            {/* Category Filter */}
            <div className={styles.filterGroup}>
              <label className={styles.filterLabel}>
                {locale === 'en' ? 'Category' : 'Категория'}
              </label>
              <select
                className={styles.filterSelect}
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">
                  {locale === 'en' ? 'All Categories' : 'Всички категории'}
                </option>
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Scent Filter */}
            <div className={styles.filterGroup}>
              <label className={styles.filterLabel}>
                {locale === 'en' ? 'Scent' : 'Аромат'}
              </label>
              <select
                className={styles.filterSelect}
                value={selectedScent}
                onChange={(e) => setSelectedScent(e.target.value)}
              >
                <option value="">
                  {locale === 'en' ? 'All Scents' : 'Всички аромати'}
                </option>
                {scents.map(scent => (
                  <option key={scent} value={scent}>
                    {scent}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Reset Button */}
            {(selectedCategory || selectedScent) && (
              <button 
                className={styles.resetButton}
                onClick={resetFilters}
              >
                {locale === 'en' ? 'Reset Filters' : 'Изчисти филтри'}
              </button>
            )}
          </div>
          
          {/* Results Count */}
          <div className={styles.resultsCount}>
            {locale === 'en' 
              ? `Showing ${filteredParfumes.length} of ${parfumesData.length} parfumes`
              : `Показване на ${filteredParfumes.length} от ${parfumesData.length} парфюма`}
          </div>
        </div>
      </section>

      {/* Parfumes Grid Section */}
      <section className={styles.parfumesSection}>
        <div className={styles.container}>
          {filteredParfumes.length > 0 ? (
            <div className={styles.parfumesGrid}>
              {filteredParfumes.map(parfume => {
                const name = parfume.name[locale] || parfume.name.bg;
                const category = parfume.category[locale] || parfume.category.bg;
                const description = parfume.description[locale] || parfume.description.bg;
                const shortDescription = parfume.shortDescription?.[locale] || parfume.shortDescription?.bg || '';
                const composition = parfume.scentComposition[locale] || parfume.scentComposition.bg;
                
                // Check if parfume should have a sticker
                const hasSticker = ['Glamour', 'Soul', 'Forest', 'Carbon'].includes(name) || 
                                   ['Glamour', 'Soul', 'Forest', 'Carbon'].includes(parfume.name.bg) ||
                                   ['Glamour', 'Soul', 'Forest', 'Carbon'].includes(parfume.name.en);
                
                return (
                  <div key={parfume.id} className={styles.parfumeCard}>
                    <div className={styles.cardImageContainer}>
                      <img 
                        src={parfume.imgSource} 
                        alt={name}
                        className={styles.cardImage}
                        onError={(e) => {
                          e.target.src = '/Images/Logo.png'; // Fallback image
                        }}
                      />
                      <div className={styles.categoryBadge}>{category}</div>
                      {hasSticker && (
                        <div className={styles.featuredSticker}>
                          {locale === 'en' ? 'NEW' : 'НОВО'}
                        </div>
                      )}
                    </div>
                    <div className={styles.cardContent}>
                      <h3 className={styles.parfumeName}>{name}</h3>
                      {shortDescription && (
                        <p className={styles.shortDescription}>{shortDescription}</p>
                      )}
                      <div className={styles.scentComposition}>
                        <span className={styles.compositionLabel}>
                          {locale === 'en' ? 'Scent Composition:' : 'Състав на аромата:'}
                        </span>
                        <span className={styles.compositionValue}>{composition}</span>
                      </div>
                      <button 
                        className={styles.readMoreButton}
                        onClick={() => openModal(parfume)}
                      >
                        <FontAwesomeIcon icon={faEye} className={styles.eyeIcon} />
                        {locale === 'en' ? 'Read More' : 'Прочети Повече'}
                      </button>
                      <div className={styles.priceContainer}>
                        <span className={styles.price}>
                          {parfume.price} {locale === 'en' ? 'лева' : 'лева'}/ {(parseFloat(parfume.price) / 1.95583).toFixed(2)} EUR
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className={styles.noResults}>
              <p>{locale === 'en' 
                ? 'No parfumes found matching your filters.' 
                : 'Не са намерени парфюми, отговарящи на вашите филтри.'}</p>
            </div>
          )}
        </div>
      </section>

      {/* Note Section */}
      <section className={styles.noteSection}>
        <div className={styles.container}>
          <div className={styles.noteBox}>
            <p className={styles.noteText}>{t('ParfumesNote')}</p>
            <p className={styles.noteText}>{t('ParfumesNote2')}</p>
          </div>
        </div>
      </section>

      {/* Usage Information Section */}
      <section className={styles.usageSection}>
        <div className={styles.container}>
          <div className={styles.usageContent}>
            {/* What it's used for */}
            <div className={styles.usageBlock}>
              <h3 className={styles.usageTitle}>{t('ParfumesUsedFor')}</h3>
              <ul className={styles.usageList}>
                <li>{t('ParfumesUsedFor1')}</li>
                <li>{t('ParfumesUsedFor2')}</li>
                <li>{t('ParfumesUsedFor3')}</li>
                <li>{t('ParfumesUsedFor4')}</li>
                <li>{t('ParfumesUsedFor5')}</li>
                <li>{t('ParfumesUsedFor6')}</li>
              </ul>
            </div>

            {/* Guidance for use */}
            <div className={styles.usageBlock}>
              <h3 className={styles.usageTitle}>{t('ParfumesGuidanceTitle')}</h3>
              <p className={styles.usageText}>{t('ParfumesGuidance')}</p>
            </div>

            {/* Application areas */}
            <div className={styles.usageBlock}>
              <div className={styles.applicationArea}>
                <h4 className={styles.applicationTitle}>{t('ParfumesVehiclesTitle')}</h4>
                <p className={styles.applicationText}>{t('ParfumesVehicles')}</p>
              </div>
              <div className={styles.applicationArea}>
                <h4 className={styles.applicationTitle}>{t('ParfumesRoomsTitle')}</h4>
                <p className={styles.applicationText}>{t('ParfumesRooms')}</p>
              </div>
              <div className={styles.applicationArea}>
                <h4 className={styles.applicationTitle}>{t('ParfumesSanitaryTitle')}</h4>
                <p className={styles.applicationText}>{t('ParfumesSanitary')}</p>
              </div>
            </div>

            {/* Safety warnings */}
            <div className={styles.usageBlock}>
              <h3 className={styles.usageTitle}>{t('ParfumesSafetyTitle')}</h3>
              <ul className={styles.safetyList}>
                <li>{t('ParfumesSafety1')}</li>
                <li>{t('ParfumesSafety2')}</li>
                <li>{t('ParfumesSafety3')}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedParfume && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalCloseButton} onClick={closeModal}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <div className={styles.modalHeader}>
              <div className={styles.modalHeaderLeft}>
                <h2 className={styles.modalTitle}>
                  {selectedParfume.name[locale] || selectedParfume.name.bg}
                </h2>
                <div className={styles.modalCategory}>
                  {selectedParfume.category[locale] || selectedParfume.category.bg}
                </div>
              </div>
              <div className={styles.modalImageContainer}>
                <img 
                  src={selectedParfume.imgSource} 
                  alt={selectedParfume.name[locale] || selectedParfume.name.bg}
                  className={styles.modalImage}
                  onError={(e) => {
                    e.target.src = '/Images/Logo.png';
                  }}
                />
              </div>
            </div>
            <div className={styles.modalBody}>
              <p className={styles.modalDescription}>
                {selectedParfume.description[locale] || selectedParfume.description.bg}
              </p>
              <div className={styles.modalScentComposition}>
                <span className={styles.compositionLabel}>
                  {locale === 'en' ? 'Scent Composition:' : 'Състав на аромата:'}
                </span>
                <span className={styles.compositionValue}>
                  {selectedParfume.scentComposition[locale] || selectedParfume.scentComposition.bg}
                </span>
              </div>
              <div className={styles.modalPrice}>
                <span className={styles.price}>
                  {selectedParfume.price} {locale === 'en' ? 'лева' : 'лева'}/ {(parseFloat(selectedParfume.price) / 1.95583).toFixed(2)} EUR
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Parfumes;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

