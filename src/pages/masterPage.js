import wixSeoFrontend from 'wix-seo-frontend';

// Mobil tarayicinin adres cubugu rengi (Android Chrome). Wix Studio'da bunun
// icin bir ayar yok (klasik Wix Editor'de vardi), o yuzden meta etiketini
// koddan ekliyoruz. Arama motorlarinin da gormesi icin onReady icinde.
const THEME_COLOR = '#d62828';

$w.onReady(function () {
    wixSeoFrontend.addMetaTags([{ name: 'theme-color', content: THEME_COLOR }])
        .catch((error) => {
            console.warn('[drgrill] tarayici rengi eklenemedi:', (error && error.message) || error);
        });

    try {
        $w('#text3').text = 'DR GRILL';
    } catch (error) {
        // Header text is optional on alternate breakpoints.
    }

    try {
        // TODO: gercek sokak adresi belli olunca "· [Sokak + no]" kismini ekle.
        $w('#text2').text = 'DR GRILL · Kebab · Grill · Pizza · Pasta · 2480 Dessel · © 2026 DR Grill';
    } catch (error) {
        // Footer text is optional on alternate breakpoints.
    }
});
