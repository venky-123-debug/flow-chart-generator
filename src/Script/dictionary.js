import { push } from "svelte-spa-router"

const errorDictionary = {
  BULK_UPLOAD_ALREADY_HAS_ENTRIES: "The bulk template already contains document entries. Please upload a different set of documents.",
  ERROR_P2B_NOTIFIED: "Oops, an uncaught error occurred. If you encounter this, please let us know.",
  NO_EMAIL: "Please provide an email address.",
  NO_PASS: "Please enter a password.",
  NO_USER: "The user you are looking for does not exist.",
  NO_FILENAME: "Please ensure that you have provided the filename parameter in the request body.",
  NO_ID: "Please make sure to include the document ID when sending the request.",
  NO_FILE: "Please make sure to upload the file.",
  DOCUMENT_DOES_NOT_EXIST: "Please restart the publishing process as the document ID does not exist.",
  DOCUMENT_ALREADY_PUBLISHED: "Sorry, but the document you're trying to access has already been published.",
  DOCUMENT_HAS_FILE: "You've already submitted a file to be linked with this document ID.",
  FILE_LINKED_DIFFERENT_DOCUMENT: "It seems you've already submitted this file for a different document ID.",
  METADATA_LENGTH_EXCEEDED: "Oops, the length of the metadata value has gone over the maximum character limit.",
  OPTIONS_LENGTH_EXCEEDED: "Oops, the length of the options value has gone over the maximum character limit.",
  DOCUMENT_HAS_DATA: "You've already submitted data to be linked with this document ID.",
  INVALID_METADATA_JSON_STRUCTURE: "The structure of the metadata provided is not valid.",
  INVALID_JSON_STRUCTURE: "The structure of the json provided is not valid.",
  INVALID_OPTIONS_JSON_STRUCTURE: "The structure of the options provided is not valid.",
  NO_SIGNATURE: "Please include the signature in the request body to proceed.",
  DOCUMENT_HAS_NO_DATA: "Sorry, but information for the document hasn't been provided.",
  DOCUMENT_HAS_NO_FILE: "Sorry, but the document hasn't been provided.",
  SIGNATURE_VERIFICATION_FAILED: "Uh-oh, the signature you provided doesn't match the data and file that were sent earlier.",
  FAILED_TO_QUEUE_DOCUMENT: "API can't line up the document for publishing, try sending the request again.If this keeps happening, feel free to get in touch with us.",
  CANT_REMOVE_PUBLISHED: "Unfortunately, we can't remove the document since it's already published.",
  CANT_REMOVE_QUEUED: "We can't remove the document right now because it's currently in the queue. If you'd like to proceed with removal, please wait for the document to be published and then revoke it.",
  ALREADY_REVOKED: "The document has already been revoked.",
  DOCUMENT_NOT_PUBLISHED: "In order to revoke the document, you need to first publish it.",
  NO_TOKEN: "Your session has expired.",
  REQUEST_FAILED_AT_3RD_PARTY: "The request encountered an issue with a third-party service.",
  INVALID_EXCEL_FILE: "The Excel file you uploaded is not valid. Please upload a different file.",
  INVALID_HEADER_FOUND_IN_SPREADSHEET: "The header row in the Excel file you uploaded is not valid.",
  MULTIPLE_SHEET_NOT_ALLOWED: "You can only upload Excel files with a single sheet. Multiple sheet Excel files are not allowed.",
  NOT_A_VALID_DATE_OBJECT: "An invalid date was found in the Excel file.",
  INVALID_TOKEN: "Your session has expired. Please log in again.",
  BULK_UPLOAD_DOES_NOT_EXIST: "The bulk template you were expecting could not be found.",
  NETWORK_ERROR: "It seems you're offline or experiencing network disconnection.",
  INVALID_PASSWORD: "Sorry, the password you entered is incorrect. Please try again.",
  BULK_UPLOAD_HAS_NO_ENTRIES: "The template doesn't contain any documents. Please upload some documents to proceed.",
  LINKED_FILE_TEMPLATE_NOT_FOUND: "We couldn't find the file template associated with the document template.",
  EMAIL_FAILED_TO_SEND: "The email failed to send because the recipient provided an invalid email address.",
  "2FA_VERIFICATION_FAILED": "The verification code you entered is incorrect. Please enter the correct verification code.",
  TEMPLATE_DOES_NOT_EXIST: "The template you're looking for doesn't exist, possibly because it has been deleted.",
  FILE_TEMPLATE_DOES_NOT_EXIST: "The file template you're looking for doesn't exist, possibly because it has been deleted.",
  DOCUMENT_TEMPLATE_DOES_NOT_EXIST: "The document template you're looking for doesn't exist, possibly because it has been deleted.",
  "3DR_PARTY_API_FAILED": "The API failed because of issues with third-party services.",
  NO_DOCUMENT_ID: "The document ID was not found for the respective document. It's possible that the document has already been released.",
  URL_MISSING_IN_CONTENT: "The email content is missing a URL. Please ensure that you include a URL in the email content, as it's mandatory.",
  INVALID_EMAIL_ADDRESS: "The email address you provided is not valid. Please enter a valid email address.",
  INVALID_EMAIL_DOMAIN: "The email domain you provided is not valid. Please enter a valid email domain.",
  CANNOT_SEND_EMAILS_AS_THERE_IS_NO_ASSOCIATED_TEMPLATE: "You cannot send emails because there is no email template associated with the selected document template.",
  CANNOT_GENERATE_FILES_AS_THERE_IS_NO_ASSOCIATED_TEMPLATE: "You cannot generate files because there is no file template associated with the selected document template.",
  BACKEND_API_FAILED: "The backend API has encountered an issue. If this happens, please inform us so that we can assist you.",
  BOTH_EMAIL_IDS_AND_EMAIL_DOMAIN_NOT_ALLOWED: "The provided email IDs and email domain are not valid, or for some other reasons, they are not allowed.",
  INVALID_NDA_URL: "The NDA URL you provided is not valid. Please provide a valid URL.",
  INVALID_NOTICE_URL: "The notice URL you provided is not valid. Please provide a valid notice URL.",
  OTP_DOES_NOT_MATCH: "The OTP you provided does not match. Please enter a valid OTP.",
  LAYER_ATTRIBUTE_MISSING: "A layer attribute is missing. Please select or enter the required layer attribute.",
  LAYER_TYPE_MISSING: "A layer type is missing. Please select the layer type.",
  EXPIREON_CANNOT_BE_OLDER: "The expiration date cannot be set in the past. Please select a future date.",
  EXPIRY_CANNOT_BE_IN_PAST: "The expiration date cannot be set in the past. Please select a future date.",
  INVALID_DATE: "The date you provided is invalid. Please enter a valid date.",
  INVALID_EXPIREON: "The expiry date you provided is invalid. Please select a valid expiry date.",
  INVALID_LAYER_ATTRIBUTE: "The selected layer attribute is invalid. Please choose or enter a valid layer attribute.",
  FONT_FAMILY_NAME_MISSING: "The font family name is missing in the font link you provided. Please include the font family name.",
  DURATION_MISSING: "The 'from' and/or 'to' query parameters are missing in the request. Please check if these parameters exist and add them if they are not included.",
  INVALID_DURATION: "The 'from' and/or 'to' query parameter(s) do not follow the ISO 8601 standard. Please ensure that these parameters are in the correct format.",
  MISSING_FONT_DATA: "The font-related data is missing.",
  FONT_DOES_NOT_EXIST: "The font you are looking for does not exist.",
  ECDSA_SIGNATURE_GENERATION_FAILED: "Oops, the signature generation failed. This could be due to an invalid fileHash, dataHash, or issues on the server side.",
  DOCUMENT_TEMPLATE_NOT_PROVIDED: "The document template has not been provided, and it's mandatory to proceed to the next step.",
  INVALID_FONT_LINK: "The font link you provided is invalid. Please provide a valid font link.",
  TITLE_DOES_NOT_MATCH_FORMAT: "The title does not match the required format.",
  NAME_DOES_NOT_MATCH_FORMAT: "The name does not match the required format.",
  INVALID_FILENAME: "The provided filename is invalid. Please provide a valid filename.",
  PASSWORD_CANNOT_BE_SAME: "The old password and new password cannot be the same. Please enter a new password that is different from the old one.",
  SEND_EITHER_FILE_OR_LINK: "Please send either a file or a link.",
  IPFS_ERROR: "There was an issue with IPFS.",
  IPFSERROR: "There was an issue with IPFS.",
  METADATA_MISSING: "The request is missing metadata in the body. Please provide the required metadata.",
  FABRIC_ERROR: "There is an issue connecting to the blockchain.",
  USER_NOT_IN_REDIS: "We cannot locate the user.",
  CANNOT_CHECK_ID_IN_REDIS: "We are unable to verify the issuer ID.",
  PUBKEY_VERIFICATION_BUSY: "The public key verification process is currently busy.",
  BULK_ID_RESERVATION_FAILED: "There was an issue while trying to reserve a bulk ID.",
  TEST_STOP: "The server is currently down for testing purposes.",
  PROXY_PASS_VERIFICATION_FAILED: "The proxy password verification has failed.",
  FETCH_ISSUER_FAILED: "Fetching issuer details has failed.",
  METADATA_INVALID_TYPE: "The type of metadata you provided is invalid.",
  NO_DOC: "No document was found.",
  NO_AUTHENTICATION: "Authentication is required.",
  METHOD_NOT_PERMITTED: "This method is not allowed.",
  ERROR_STRIPPING_LAYER_DATA: "There was an error while stripping layer data.",
  LAYERS_NOT_JSON_STRING: "The layers are not in a valid JSON string format.",
}

export const modifyErrorCodes = (errorCode) => {
  if (typeof errorCode == "string") {
    let error = errorCode.replace("P2BCODE::", "")

    if (error == "INVALID_TOKEN" || error == "NO_TOKEN") {
      push("/")
      return errorDictionary[error]
    }
    if (errorDictionary[error]) {
      return errorDictionary[error]
    } else {
      return errorCode
    }
  } else {
    console.log(errorCode)
    return errorCode.message
    // return errorCode.response.data
  }
}
