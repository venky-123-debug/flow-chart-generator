/**
 * @type {import("./types")}
 */
let EmailTemplate

/**
 * Function for generating html content
 * @param {EmailTemplate} emailTemplate
 * @param {String} parsedContent from the emailtemplate Content
 */
export const generateHTMLContent = (emailTemplate, parsedContent) => {
  let date = String(new Date()).slice(0, 24)
  let header
  let content
  let pxToPercent

  setTimeout(() => {
    try {
      let element = document.getElementById("htmlToImage")
      if (element) {
        let parentWidth = element.clientWidth
        pxToPercent = (emailTemplate.cardWidth / parentWidth) * 100
      }
    } catch (error) {
      console.error(error)
    }
  }, 100)
  if (emailTemplate.headerType != "empty") {
    header = `<div style="padding-left:12px;padding-right:12px; font-size:${emailTemplate.headerFontSize}px; font-family: ${emailTemplate.headerFont ? emailTemplate.headerFont : "Arial"};background: ${emailTemplate.headerBackground}; text-align: center;border-top-left-radius: ${emailTemplate.cardRadius}px;border-top-right-radius: ${emailTemplate.cardRadius}px; margin-top: 30px; margin-bottom: 0px; padding-top: ${emailTemplate.headerFontSize / 2}px; padding-bottom: ${emailTemplate.headerFontSize / 2}px; color: ${emailTemplate.headerTextColor}; margin-right: auto; margin-left: auto;">
    ${emailTemplate.headerType == "image" ? `<img src=${emailTemplate.headerURL} style="width:50%;margin-right: auto;margin-left: auto;padding-top:10px;padding-bottom:10px" alt="logo" />` : `${emailTemplate.headerText}`}</div>`
  } else {
    header = ""
  }

  if (parsedContent) {
    content = ` <div style="border-top-right-radius: ${emailTemplate.headerType == "empty" ? emailTemplate.cardRadius : ""}px;border-top-left-radius: ${emailTemplate.headerType == "empty" ? emailTemplate.cardRadius : ""}px;padding:${emailTemplate.cardPadding}px;color:#000000; background: ${emailTemplate.cardBackground}; overflow-wrap: break-word;${!emailTemplate.headerType ? `border-radius: ${emailTemplate.cardRadius}px;` : `border-bottom-left-radius: ${emailTemplate.cardRadius}px;border-bottom-right-radius: ${emailTemplate.cardRadius}px;`}">
      ${parsedContent}</div>`
  } else {
    content = ` <div style="padding:${emailTemplate.cardPadding}px;color:#000000; background: ${emailTemplate.cardBackground}; overflow-wrap: break-word;${!emailTemplate.headerType ? `border-radius: ${emailTemplate.cardRadius}px;` : `border-bottom-left-radius: ${emailTemplate.cardRadius}px;border-bottom-right-radius: ${emailTemplate.cardRadius}px;`}">
    <h1>Hi Test User</h1>
      <p>We are happy to send you your certificate for the event conducted on May 2023.</p>
      <p>This true digital copy can be shared publicly and be verified instantly on the Blockchain.</p>
      <p>Thank You</p>  
    </div>`
  }

  return `<!DOCTYPE html>
  <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <style>
        .cardBody{
          width: auto;
          padding: 12px;
          margin-right: auto;
          margin-left: auto;
          margin-bottom: 20px;
          margin-top: 0px;
          word-break:break-word;
         
        }
        @media (min-width: 640px) {
          .cardBody {
            width: ${emailTemplate.cardWidth}px;
            word-break:break-word;
          }
        }
      </style>
    </head>
    <body>
      <div
        id="htmlToImage"
        style="
          background: ${emailTemplate.background}; 
          font-family: Open Sans; 
          padding-top: 60px; 
          padding-bottom: 30px; 
          border-radius: 6px"
      >
        <div id="cardBody" class="cardBody">
          ${header} ${content}
  
          <div 
            style="
              background-color: white; 
              border-radius: ${emailTemplate.cardRadius}px; 
              margin-bottom: ${emailTemplate.cardPadding > 40 ? emailTemplate.cardPadding : 40}px; 
              margin-top: ${emailTemplate.cardPadding / 2 > 20 ? emailTemplate.cardPadding / 2 : 20}px; "
          >
            <div
              style="
                padding-top: 20px;
                padding-left: 50px;
                padding-right: 50px;
                padding-bottom: 20px;
                color: #4d4d4d;
                text-align: center;
                font: 13px monospace;
              "
            >
              This blockchain based document and email is generated via
              <a
                href="https://print2block.com"
                target="_blank"
                rel="noreferrer"
                style="color: orange"
              >
                DocChain.io
              </a>
              <br />
              ${date}
            </div>
          </div>
        </div>
      </div>
    </body>
  </html>
  `
}
