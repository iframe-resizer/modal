import mm from 'micromodal'

const random = () => Math.floor(Math.random() * 1000).toString(16)
const key = () => random() + random()

const styleName = `s${key()}`
const overlayName = `o${key()}`
const containerName = `c${key()}`

const css = `
  html #iframe-resizer-modal.${styleName} {
    display: none;
  }

  html #iframe-resizer-modal.${styleName}.is-open {
    display: block !important;
  }

  html #iframe-resizer-modal .${overlayName} {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    background: rgba(0,0,0,0.65) !important;
    font-family: sans-serif;
  }

  html #iframe-resizer-modal .${containerName} {
    box-sizing: border-box;
    overflow-y: auto;
    max-width: 500px;
    max-height: 100vh;
    padding: 30px;
    background-color: #fff;
    border-radius: 4px;
  }

  html #iframe-resizer-modal.${styleName}[aria-hidden="false"] .${overlayName} {
    animation: microModalFadeIn .2s cubic-bezier(0.0, 0.0, 0.2, 1);
  }

  html #iframe-resizer-modal.${styleName}[aria-hidden="false"] .${containerName} {
    animation: microModalSlideIn .2s cubic-bezier(0, 0, .2, 1);
  }

  html #iframe-resizer-modal.${styleName} .${containerName},
  html #iframe-resizer-modal.${styleName} .${overlayName} {
    will-change: transform;
  }


  @keyframes microModalFadeIn {
      from { opacity: 0; }
        to { opacity: 1; }
  }

  @keyframes microModalSlideIn {
    from { transform: translateY(15%); }
      to { transform: translateY(0); }
  }
`

const html = `
  <div class="${styleName}" id="iframe-resizer-modal" aria-hidden="true" data-custom-open="iframe-resizer-modal">
    <div class="${overlayName}" tabindex="-1" data-micromodal-close>
      <div class="${containerName}" role="dialog" aria-modal="true" aria-labelledby="iframe-resizer-modal-title">
        <h2 id="iframe-resizer-modal-title" style="text-align: center; margin-top:0;color:#c00">Missing License Key</h2>  
        <p>
          The <b>iframe-resizer</b> library is available with both Commercial and Open-Source licenses.
        </p>
        <h3>Commercial License</h3>
        <p>
          For commercial use, iframe-resizer requires a low cost one time license fee. For more information visit: <br><a style="float: none;margin:0 0 1rem; padding: 0" target="iframeResizer" href="https://iframe-resizer.com/pricing">https://iframe-resizer.com/pricing</a>
        </p>
        <h3>Open Source License</h3>
        <p>
          If you are using this library in a non-commercial open source project then you can use it for free under the terms of the GPL V3 License. To confirm you accept these terms, please set the license key in iframe-resizer options to GPLv3.
        </p>
        <p>
          For more information please see: <br><a style="float: none;margin:0 0 1rem; padding: 0" target="iframeResizer" href="https://iframe-resizer.com/gpl">https://iframe-resizer.com/gpl</a>
        </p>
        <button aria-label="Close modal" data-micromodal-close>OK</button>
      </div>
    </div>
  </div>
`

document.body.insertAdjacentHTML('afterbegin', html)

const style = document.createElement('style')
style.textContent = css
document.head.appendChild(style)

mm.init()
mm.show('iframe-resizer-modal')

