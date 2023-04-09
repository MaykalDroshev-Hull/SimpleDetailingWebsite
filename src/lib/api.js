export const sendContactForm = async (data) =>
  fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/JSON'
    },
  }).then(res => {
    if (!res.ok) throw new Error('Failed to send message')
    return res.json()
  })

export const sendLongContactForm = async (data) =>
  fetch('/api/longContact', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/JSON'
    },
  }).then(res => {
    if (!res.ok) throw new Error('Failed to send message')
    return res.json()
  })

export const sendReviewForm = async (data) =>
  fetch('/api/review', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    if (!res.ok) throw new Error('Failed to submit review')
    return res.json()
  })

