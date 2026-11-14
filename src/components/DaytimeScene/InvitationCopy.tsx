import React, { useState } from 'react';

const GOOGLE_MAPS_LINK = 'https://share.google/JEChsBlKvg5lHRWlc';
const VENUE_NAME = 'Dosti Westwood Banquets - Ileseum Clubs';

const line = (i: number): React.CSSProperties => ({ ['--i' as string]: i } as React.CSSProperties);

export const InvitationCopy: React.FC = React.memo(() => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleVenueClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <section
      className="daytime-invitation-copy evening-invitation-copy"
      data-fx="copy"
      aria-label="Wedding celebration invitation details"
    >
      <div className="invitation-card-backdrop evening-card-backdrop">
        {/* Ornate Gold Filigree Corner Accents */}
        <div className="card-gold-corner corner-tl" aria-hidden="true" />
        <div className="card-gold-corner corner-tr" aria-hidden="true" />
        <div className="card-gold-corner corner-bl" aria-hidden="true" />
        <div className="card-gold-corner corner-br" aria-hidden="true" />

        <div className="invitation-inner-frame">
          <p className="invitation-eyebrow reveal-line" style={line(0)}>
            WEDDING INVITATION
          </p>

          <div className="invitation-flourish reveal-line" style={line(1)} aria-hidden="true">
            <span>❖</span>
            <hr />
            <span>✤</span>
            <hr />
            <span>❖</span>
          </div>

          {/* Swaroop Samanta & Parents -> Ampersand -> Pampa Manna & Parents */}
          <div className="invitation-couple-sequence">
            {/* Groom Block */}
            <div className="couple-person-block reveal-line reveal-blur" style={line(2)}>
              <h2 className="person-name name-groom">Swaroop Samanta</h2>
              <span className="relation-tag">S/o</span>
              <p className="parent-name-line">Nobin Samanta</p>
              <p className="parent-name-line">Dipali Samanta</p>
            </div>

            {/* Connecting Ampersand */}
            <div className="couple-ampersand-divider reveal-line" style={line(3)} aria-hidden="true">
              <span className="ampersand">&amp;</span>
            </div>

            {/* Bride Block */}
            <div className="couple-person-block reveal-line reveal-blur" style={line(4)}>
              <h2 className="person-name name-bride">Pampa Manna</h2>
              <span className="relation-tag">D/o</span>
              <p className="parent-name-line">Dipali Manna</p>
              <p className="parent-name-line">Samir Manna</p>
            </div>
          </div>

          <div className="invitation-separator-small reveal-line" style={line(5)} aria-hidden="true">
            <span className="sep-diamond">♦</span>
          </div>

          <div className="invitation-date-block reveal-line" style={line(6)}>
            <time className="invitation-date">22 February 2027</time>
          </div>

          {/* Shaadi and Reception Details */}
          <div className="invitation-events-grid reveal-line" style={line(7)}>
            <div className="event-item">
              <span className="event-label">SHAADI CEREMONY</span>
              <span className="event-time">5:00 PM onwards</span>
            </div>
            <div className="event-divider" aria-hidden="true">|</div>
            <div className="event-item">
              <span className="event-label">RECEPTION</span>
              <span className="event-time">9:30 PM onwards</span>
            </div>
          </div>

          {/* Venue Line */}
          <div className="invitation-venue-highlight reveal-line" style={line(8)}>
            <span className="venue-pin">📍</span>
            <span className="venue-name">{VENUE_NAME}</span>
          </div>

          {/* Interactive Directions Button */}
          <div className="invitation-action-wrap reveal-line" style={line(9)}>
            <button
              type="button"
              className="btn-venue-directions"
              onClick={handleVenueClick}
              aria-label="View Venue and Get Directions"
            >
              <span className="btn-shimmer" />
              <svg className="pin-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
              <span>VIEW VENUE / GET DIRECTIONS</span>
            </button>
          </div>
        </div>
      </div>

      {/* Venue Directions Modal */}
      {modalOpen && (
        <div className="venue-modal-overlay" onClick={closeModal} role="dialog" aria-modal="true">
          <div className="venue-modal-card" onClick={e => e.stopPropagation()}>
            <div className="card-gold-corner corner-tl" />
            <div className="card-gold-corner corner-tr" />
            <div className="card-gold-corner corner-bl" />
            <div className="card-gold-corner corner-br" />
            <button className="venue-modal-close" onClick={closeModal} aria-label="Close directions">✕</button>
            <h3 className="venue-title">Wedding Venue &amp; Directions</h3>
            <p className="venue-subtitle">Swaroop &amp; Pampa Wedding Celebration</p>
            <div className="venue-gold-divider" />
            <div className="venue-details-content">
              <p className="venue-date-time"><strong>Date:</strong> 22 February 2027</p>
              <p className="venue-date-time"><strong>Shaadi Ceremony:</strong> 5:00 PM onwards</p>
              <p className="venue-date-time"><strong>Reception:</strong> 9:30 PM onwards</p>
              <div className="venue-address-box">
                <span className="venue-pin-large">📍</span>
                <p className="venue-address">
                  <strong>{VENUE_NAME}</strong>
                </p>
              </div>
            </div>
            <div className="venue-actions">
              <a
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-open-maps"
              >
                Open in Google Maps
              </a>
              <button type="button" className="btn-close-modal" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
});
