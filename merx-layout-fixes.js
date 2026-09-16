document.addEventListener('DOMContentLoaded', function () {
    // Remove any sticky header spacer clones that may cause duplication
    function removeStickySpacers() {
        var spacers = document.querySelectorAll('header .the7-e-sticky-spacer, header .sticky-spacer, .the7-e-sticky-spacer.elementor-element-817879a, .sticky-spacer.elementor-element-817879a');
        spacers.forEach(function (el) {
            el.remove();
        });
    }
    removeStickySpacers();
    window.addEventListener('load', removeStickySpacers);
    window.addEventListener('resize', removeStickySpacers);
    window.addEventListener('scroll', removeStickySpacers, { passive: true });

    document.querySelectorAll('a').forEach(function (link) {
        var label = link.querySelector('.menu-text');
        var isHomeLink = label && label.textContent.trim().toLowerCase() === 'home';
        var isLogoLink = link.classList.contains('the7-logo-wrap');

        if (isHomeLink || isLogoLink) {
            link.setAttribute('href', 'index.html');
        }
    });

    var quotePopup = document.querySelector('.elementor-23215.elementor-location-popup');
    var quoteModal;

    if (quotePopup) {
        document.querySelectorAll('.elementor-23209 .popup-trigger a').forEach(function (quoteButton) {
            quoteButton.setAttribute('href', '#');
        });

        quoteModal = document.createElement('div');
        quoteModal.className = 'merx-quote-modal';
        quoteModal.setAttribute('aria-hidden', 'true');
        quoteModal.appendChild(quotePopup);
        document.body.appendChild(quoteModal);

        var closeButton = document.createElement('button');
        closeButton.type = 'button';
        closeButton.className = 'merx-quote-modal-close';
        closeButton.setAttribute('aria-label', 'Close quote form');
        closeButton.textContent = '\u00d7';
        quotePopup.insertBefore(closeButton, quotePopup.firstChild);

        function closeQuoteModal() {
            quoteModal.classList.remove('is-open');
            quoteModal.setAttribute('aria-hidden', 'true');
            document.body.classList.remove('merx-quote-modal-open');
        }

        function openQuoteModal(button) {
            var categoryField = quotePopup.querySelector('#form-field-category');
            var categoryClass = Array.prototype.find.call(button.classList, function (className) {
                return className.indexOf('cat-') === 0;
            });

            if (categoryField) {
                categoryField.value = categoryClass
                    ? categoryClass.substring(4).replace(/-/g, ' ')
                    : 'General';
            }

            quoteModal.classList.add('is-open');
            quoteModal.setAttribute('aria-hidden', 'false');
            document.body.classList.add('merx-quote-modal-open');
        }

        document.addEventListener('click', function (event) {
            var quoteButton = event.target.closest('.elementor-23209 .popup-trigger a');

            if (quoteButton) {
                event.preventDefault();
                openQuoteModal(quoteButton.parentElement);
            } else if (event.target === quoteModal || event.target === closeButton) {
                closeQuoteModal();
            }
        });

        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape' && quoteModal.classList.contains('is-open')) {
                closeQuoteModal();
            }
        });
    }
});
