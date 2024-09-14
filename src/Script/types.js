/**
 * @typedef {Object} EmailTemplate - represents the email template
 * @type {Object}
 * represents the email template
 *
 * @property {string} name - name of the email template
 * @property {String} document - document template id
 * @property {string} subject - Subject for email
 * @property {string} created - ISO8601 Date of when the template was created
 * @property {string} background - Background color for area outside of the content card
 * @property {"image" | "text"|"empty"} headerType - Takes one of the following values, empty or image or text
 * @property {Number} cardRadius - Border radius for the content card in px
 * @property {Number} cardWidth - width of the content card
 * @property {Number} cardPadding - padding of the content card
 * @property {Number} cardBackground - bgColor of the content card
 * @property {string} headerText - 	Text color for the headerText
 * @property {string} headerURL - URL of the image to be shown in header
 * @property {string} headerFont - Font family for the headerText
 * @property {string} headerFontSize - Font Size for the headerText
 * @property {string} headerTextColor - Text color for the headerText
 * @property {string} headerBackground - Background color for the header
 * @property {string} content - HTML content for the email
 * @property {string} documentName - name of the document template
 * @property {string} selectedEmailTempName - name of the selected email template in which the design is imported
 * @property {Boolean} disabled - to disable the carousel next button
 */

/**
 * @typedef {Object} tabItem - contain details of the tab item
 * @type {Object}
 * contain details of the tab item
 * @property {String} id - id of the tab and also used as label
 * @property {String} iconClass - icon used along with the label
 * @property {import("svelte").ComponentType} component - component to be loaded for this tab item
 */

/**
 * Represents a document and its related information.
 * @typedef {Object} Document
 * @property {String} type - The type of the document
 */

/**
 * Represents the receiver of the document.
 * @typedef {Object} Receiver
 * @property {String} name - The name of the receiver.
 */

/**
 * Represents the issuer of the document.
 * @typedef {Object} Issuer
 * @property {String} signatory - The name of the signatory.
 */

/**
 * Represents a document with receiver, issuer, and other related information.
 * @typedef {Object} parsedJson
 * @property {Receiver} receiver - The receiver of the document.
 * @property {Document} document - The document information.
 * @property {Issuer} issuer - The issuer of the document.
 * @property {String} url - The URL associated with the document.
 * @property {String} expiry - The expiration date of the document.
 * @property {String} qr - The QR code related to the document.
 * @property {String} expireOn - The expiration information of the document.
 * @property {String} signed - The signing status of the document.
 * @property {String} date - The date associated with the document.
 * @property {String} title - The title or name of the document.
 * @property {String} documentID - The ID or identifier of the document.
 */
export default null
