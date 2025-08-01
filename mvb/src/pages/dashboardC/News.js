import React, { Component } from 'react';
import { Col, Stack, Modal, Button } from 'react-bootstrap';

class News extends Component {
  state = {
    newsData: [
      {
        headline: 'Volaris Reports Financial Results for Q2 2025',
        summary: 'The company posted a net loss of $63 million, with a 5% revenue decline compared to last year.',
        datetime: 1721606400, // July 22, 2025
        url: 'https://www.manilatimes.net/2025/07/22/tmt-newswire/globenewswire/volaris-reports-financial-resultsfor-the-second-quarter-2025/2153482'
      },
      {
        headline: 'Aura Receives Positive S&P Global Rating',
        summary: 'Aura Minerals secured a global B+ rating with a positive outlook due to strong financial performance.',
        datetime: 1721606400,
        url: 'https://www.manilatimes.net/2025/07/22/tmt-newswire/globenewswire/aura-announces-sp-global-upgrades-outlook-to-positive-b-rating-on-larger-scale-and-financial-performance/2153506'
      },
      {
        headline: 'Colorado Springs Releases 2024 Financial Report',
        summary: '60% of general revenue came from sales and use taxes, with improvements in emergency services noted.',
        datetime: 1721606400,
        url: 'https://www.koaa.com/news/local-news/report-highlights-2024-financial-health-for-the-city-of-colorado-springs'
      }
    ],
    selectedNews: null,
    showModal: false,
  };

  openModal = (newsItem) => {
    this.setState({ selectedNews: newsItem, showModal: true });
  };

  closeModal = () => {
    this.setState({ selectedNews: null, showModal: false });
  };

  render() {
    const { newsData, selectedNews, showModal } = this.state;

    return (
      <>
        <Col className="shadow p-3 m-4 bg-body-tertiary rounded" style={{ backgroundColor: 'white' }}>
          <h1>Finance Knews</h1>
          <Stack>
            {newsData.map((item, index) => (
              <div
                key={index}
                className="border-bottom mb-3"
                onClick={() => this.openModal(item)}
                style={{ cursor: 'pointer' }}
              >
                <div className="d-flex justify-content-between">
                  <h4>{item.headline}</h4>
                  <span className="fw-light fs-6">
                    {new Date(item.datetime * 1000).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-muted">{item.summary || 'No summary available'}</p>
              </div>
            ))}
          </Stack>
        </Col>

        {selectedNews && (
          <Modal show={showModal} onHide={this.closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>{selectedNews.headline}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>{selectedNews.summary || 'No additional details available.'}</p>
              <hr />
              <a href={selectedNews.url} target="_blank" rel="noreferrer">
                Read full article
              </a>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.closeModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </>
    );
  }
}

export default News;
