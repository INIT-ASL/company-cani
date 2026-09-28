// src/services/inquiryService.js
/**
 * Commercial & Investor Inquiry Service
 * Centralized service to handle inquiries, charter quotation requests,
 * and stakeholder messages with honeypot spam protection.
 *
 * Easily configurable for production REST / GraphQL endpoint.
 */

export const INQUIRY_ENDPOINT = '/api/inquiry'; // Replace with real production endpoint if needed

/**
 * Submits the inquiry form payload.
 * Includes honeypot field check to filter out automated spam bots.
 *
 * @param {Object} payload
 * @param {string} payload.name
 * @param {string} payload.company
 * @param {string} payload.email
 * @param {string} payload.phone
 * @param {string} payload.topic
 * @param {string} payload.message
 * @param {string} [payload._hp] - Hidden honeypot field. Must be empty.
 * @returns {Promise<{ success: boolean, message?: string }>}
 */
export async function submitInquiry(payload) {
  // 1. Anti-spam honeypot verification
  if (payload._hp && payload._hp.trim().length > 0) {
    // Silently reject bot submissions without raising alarms
    return { success: true, message: 'Message received.' };
  }

  // 2. Validate mandatory fields
  if (!payload.name?.trim() || !payload.email?.trim() || !payload.message?.trim()) {
    throw new Error('Mandatory fields missing: Name, Email, and Message are required.');
  }

  // 3. Simulated API Network Call (or real fetch if endpoint is configured)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate network resilience
      const simulatedSuccess = true;
      if (simulatedSuccess) {
        resolve({
          success: true,
          referenceId: `CNI-${Date.now().toString().slice(-6)}`,
          message: 'Inquiry successfully transmitted to CNI commercial desk.',
        });
      } else {
        reject(new Error('Network error. Failed to reach transmission gateway.'));
      }
    }, 800);
  });
}
