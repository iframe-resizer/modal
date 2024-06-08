import mm from 'micromodal'
import { str } from 'crc-32'

const crc = data => str(data).toString(16)

const styleName = crc(Math.random())
const overlayName = crc(Math.random())
const containerName = crc(Math.random())

const css = `
  .${styleName} {
    display: none;
  }

  .${styleName}.is-open {
    display: block;
  }

  .${overlayName} {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,0.65);
  }

  .${containerName} {
    box-sizing: border-box;
    overflow-y: auto;
    max-width: 500px;
    max-height: 100vh;
    padding: 30px;
    background-color: #fff;
    border-radius: 4px;
  }

  .${styleName}[aria-hidden="false"] .${overlayName} {
    animation: microModalFadeIn .2s cubic-bezier(0.0, 0.0, 0.2, 1);
  }

  .${styleName}[aria-hidden="false"] .${containerName} {
    animation: microModalSlideIn .2s cubic-bezier(0, 0, .2, 1);
  }

  .${styleName} .${containerName},
  .${styleName} .${overlayName} {
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
  <div class="${styleName}" id="modal-1" aria-hidden="true">
    <div class="${overlayName}" tabindex="-1" data-micromodal-close>
      <div class="${containerName}" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">
        <button aria-label="Close modal" data-micromodal-close>X</button>
        <p>hi there, I'm some modal content!</p>
      </div>
    </div>
  </div>
`

document.body.insertAdjacentHTML('afterbegin', html)

const style = document.createElement('style')
style.textContent = css
document.head.appendChild(style)

mm.open()

