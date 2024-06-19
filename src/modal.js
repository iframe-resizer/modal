/**
 * This file is only loaded if no license key is provided.
 *
 * Doing it this way rather than importing the script directly
 * to avoid bundling as it will never be needed in production.
 *
 * This reduces the iframe-resizer bundle size by 16%.
 *
 * I've thought long and hard about doing it this way and I
 * welcome feedback on this approach.
 * 
 * David J. Bradshaw - info@iframe-resizer.com
 *
 */

const css = `
  dialog#iframeResizer::backdrop {
    background-color:#999;
    opacity: 0.5;
  }
`

const html = `
    <dialog id="iframeResizer" style="color:#555;border: 2px solid #999;border-radius:7px;margin:16px auto;background-color:#FEF6D5;justify-content: center;align-items: center;font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Roboto, sans-serif;">
      <div style="max-width:500px;padding:16px 20px;" role="dialog" aria-modal="true" aria-labelledby="iframe-resizer-modal-title">
        <button aria-label="Close modal" style="position: absolute;top: 0;right: 0;padding: 0.5rem 1rem;font-size: 1.5rem;background-color: transparent;border: none;cursor: pointer;outline-color:#FEF6D5">&times;</button>  
        <h2 id="iframe-resizer-modal-title" style="text-align: center;margin-top:0;">Iframe-Resizer</h2>  
        <h3 style="color: #c00">Missing License Key</h3>
        <p>
          The <b>iframe-resizer</b> library is available with both Commercial and Open-Source licenses.
        </p>
        <h3>Commercial License</h3>
        <p>
          For commercial use, iframe-resizer requires a low cost one time license fee. (<a style="float: none;margin:0 0 1rem;padding: 0" target="iframeResizer" href="https://iframe-resizer.com/pricing">https://iframe-resizer.com/pricing</a>)
        </p>
        <h3>Open Source License</h3>
        <p>
          If you are using this library in a non-commercial open source project then you can use it for free under the terms of the GPL V3 License.
        </p><p>  
          To confirm you accept these terms and remove this message, please set the license key in iframe-resizer options to <b>GPLv3</b>.
        </p>
        <p>
          For more information please see: <br><a style="float: none;margin:0 0 1rem;padding: 0" target="iframeResizer" href="https://iframe-resizer.com">https://iframe-resizer.com</a>
        </p>
        <p style="text-align:center;margin:1.2rem 0 0"><button aria-label="Close modal">OK</button></p>
      </div>
    </dialog>
`

const setMH = (mh) => (document.body.style.minHeight = mh)
const { minHeight } = document.body.style
setMH('34rem')

const style = document.createElement('style')
style.textContent = css
document.head.append(style)
document.body.insertAdjacentHTML('afterbegin', html)

const dialog = document.querySelector('dialog#iframeResizer')
const closeButton = dialog.querySelectorAll('button')

closeButton.forEach((el) =>
  el.addEventListener('click', () => {
    setMH(minHeight)
    dialog.close()
  }),
)

dialog.showModal()
