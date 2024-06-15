(function () {
'use strict';

const css = `
html body dialog::backdrop {
background-color:#999;
opacity: 0.5;
}
`;

const html = `
<dialog data-iframe-size style="border-radius:14px;margin:16px auto;background-color:#FEF6D5;justify-content: center;align-items: center;font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Roboto, sans-serif;">
<div style="max-width:500px;padding:16px 20px;" role="dialog" aria-modal="true" aria-labelledby="iframe-resizer-modal-title">
<h2 id="iframe-resizer-modal-title" style="text-align: center; margin-top:0;color:#c00">Missing License Key</h2>
<p>
The <b>iframe-resizer</b> library is available with both Commercial and Open-Source licenses.
</p>
<h3>Commercial License</h3>
<p>
For commercial use, iframe-resizer requires a low cost one time license fee. (<a style="float: none;margin:0 0 1rem; padding: 0" target="iframeResizer" href="https://iframe-resizer.com/pricing">https://iframe-resizer.com/pricing</a>)
</p>
<h3>Open Source License</h3>
<p>
If you are using this library in a non-commercial open source project then you can use it for free under the terms of the GPL V3 License.
</p><p>
To confirm you accept these terms, please set the license key in iframe-resizer options to <b>GPLv3</b>.
</p>
<p>
For more information please see: <br><a style="float: none;margin:0 0 1rem; padding: 0" target="iframeResizer" href="https://iframe-resizer.com">https://iframe-resizer.com</a>
</p>
<button aria-label="Close modal">OK</button>
</div>
</dialog>
`;

const setMH = (mh) => (document.body.style.minHeight = mh);

const style = document.createElement('style');
style.textContent = css;
document.head.appendChild(style);

const { minHeight } = document.body.style;
setMH('33rem');

document.body.insertAdjacentHTML('afterbegin', html);

const dialog = document.querySelector('dialog');
const closeButton = document.querySelector('dialog button');
closeButton.addEventListener('click', () => {
dialog.close();
setMH(minHeight);
});

dialog.showModal();

})();
