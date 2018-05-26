import '@polymer/polymer/polymer-legacy.js';
const $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');

$_documentContainer.innerHTML = `<custom-style>
    <style is="custom-style">
        html {
            --font-heading: 'Bariol', Helvetica, Arial, sans-serif;
            --font-body: 'Bariol', Helvetica, Arial, sans-serif;
            --font-special: 'Bariol', Helvetica, Arial, sans-serif;
            --font-code: Monaco, monospace;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
    </style>
</custom-style>`;

document.head.appendChild($_documentContainer.content);
