# Git Integration & Wix CLI <img align="left" src="https://user-images.githubusercontent.com/89579857/185785022-cab37bf5-26be-4f11-85f0-1fac63c07d3b.png">

This repo is part of Git Integration & Wix CLI, a set of tools that allows you to write, test, and publish code for your Wix site locally on your computer.

Connect your site to GitHub, develop in your favorite IDE, test your code in real time, and publish your site from the command line.

## Bu repo hakkinda

Bu repo, `kuzela` reposunun (Kuzela The Bowl House) DR Grill icin uyarlanmis
kopyasidir. DR Grill sitesi Wix'te Kuzela'nin coklamasi olarak olusturuldu,
bu yuzden ayni Velo/CSS mimarisini kullaniyor; degisen sadece renkler,
metinler ve gorseller.

**Bu repoyu Wix'e baglamak icin ne yapman gerekiyor:**
1. DR Grill Wix Studio sitesinde Dev Mode / Git Integration panelinden bu
   GitHub reposuna baglan.
2. `wix.config.json` bu repoda bilerek yok birakildi: Wix baglanti sirasinda
   kendi site kimligiyle (`siteId`) bu dosyayi olusturur/senkronlar. Baglanti
   sonrasi dosya gorunmuyorsa, siteId'yi Wix Studio > Site Settings
   uzerinden alip elle ekleyebilirsin.
3. Baglandiktan sonra bu repoya push ettigin her degisiklik siteye yansir
   (bkz. asagidaki "Ana sayfa nasil calisiyor" bolumu).

## Set up this repository in your IDE
This repo is connected to a Wix site. That site tracks this repo's default branch. Any code committed and pushed to that branch from your local IDE appears on the site.

Before getting started, make sure you have the following things installed:
* [Git](https://git-scm.com/download)
* [Node](https://nodejs.org/en/download/), version 14.8 or later.
* [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) or [yarn](https://yarnpkg.com/getting-started/install)
* An SSH key [added to your GitHub account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account).

To set up your local environment and start coding locally, do the following:

1. Open your terminal and navigate to where you want to store the repo.
1. Clone the repo by running `git clone <your-repository-url>`.
1. Navigate to the repo's directory by running `cd <directory-name>`.
1. Install the repo's dependencies by running `npm install` or `yarn install`.
1. Install the Wix CLI by running `npm install -g @wix/cli` or `yarn global add @wix/cli`.
   Once you've installed the CLI globally, you can use it with any Wix site's repo.

For more information, see [Setting up Git Integration & Wix CLI](https://support.wix.com/en/article/velo-setting-up-git-integration-wix-cli-beta).

## Write Velo code in your IDE
Once your repo is set up, you can write code in it as you would in any other non-Wix project. The repo's file structure matches the [public](https://support.wix.com/en/article/velo-working-with-the-velo-sidebar#public), [backend](https://support.wix.com/en/article/velo-working-with-the-velo-sidebar#backend), and [page code](https://support.wix.com/en/article/velo-working-with-the-velo-sidebar#page-code) sections in Editor X.

Learn more about [this repo's file structure](https://support.wix.com/en/article/velo-understanding-your-sites-github-repository-beta).

## Test your code with the Local Editor
The Local Editor allows you test changes made to your site in real time. The code in your local IDE is synced with the Local Editor, so you can test your changes before committing them to your repo. You can also change the site design in the Local Editor and sync it with your IDE.

Start the Local Editor by navigating to this repo's directory in your terminal and running `wix dev`.

For more information, see [Working with the Local Editor](https://support.wix.com/en/article/velo-working-with-the-local-editor-beta).

## Preview and publish with the Wix CLI
The Wix CLI is a tool that allows you to work with your site locally from your computer's terminal. You can use it to build a preview version of your site and publish it. You can also use the CLI to install [approved npm packages](https://support.wix.com/en/article/velo-working-with-npm-packages) to your site.

Learn more about [working with the Wix CLI](https://support.wix.com/en/article/velo-working-with-the-wix-cli-beta).

## Ana sayfa (Home) nasil calisiyor

Ana sayfada tek bir eleman var: `#html1` (HtmlComponent, yani bir iframe).
Sayfadaki butun tasarim bu iframe'in icinde.

- **Iframe icerigi:** `docs/index.html`. Bu dosya GitHub Pages ile
  <https://enesatmaca00.github.io/dr-grill/> adresinden yayinlaniyor ve
  `src/pages/Home.c1dmp.js` iframe'i calisma aninda oraya yonlendiriyor.
  **Iceriği degistirmek icin `docs/index.html` duzenlenip push edilir;
  Wix editorune kod yapistirmaya gerek yok.**
  **ONEMLI: GitHub Pages bu repoda henuz acik olmayabilir** — Settings >
  Pages > Source: `main` dali / `docs` klasoru olarak ayarlanmali, yoksa
  yukaridaki adres 404 doner ve iframe bos kalir.
- **Yukseklik:** Wix Studio'da `$w` elemanlarinin `height` ozelligi yok,
  yani iframe yuksekligi Velo'dan atanamiyor. Bunun yerine iframe kendi
  icerik yuksekligini `postMessage` ile bildiriyor, sayfa kodu bunu 100
  piksele yukari yuvarlayip sayfaya `kz-h-<piksel>` sinifi ekliyor ve
  `src/styles/global.css` icindeki uretilmis kurallar yuksekligi
  uyguluyor. (Sinif adi Kuzela'dan kaldi, sadece dahili bir isim; Wix
  Editor'deki bilesenlerin custom class'i degistiginden gorunmez etkisi yok.)
- **Renkler:** Kirmizi (`--red` / `--kz-accent: #d62828`), siyah
  (`--ink` / `--kz-ink: #14100f`) ve komur grisi (`--charcoal` /
  `--kz-paper-2` civari: `#242020`). Kaynaklar: `docs/index.html` (ana
  sayfa) ve `src/styles/global.css` (site geneli: header, footer, butonlar,
  diger sayfalardaki `kz-hero`/`kz-card` bolumleri).
- **Gorseller:** `docs/assets/dr-grill-logo.webp` (logo) ve
  `docs/assets/dr-grill-storefront.webp` (vitrin fotografi) bu repodan
  GitHub Pages ile servis ediliyor; hem `docs/index.html` hem
  `global.css` bunlari kullaniyor.

### Eksik / TODO oldugu bilinen yerler

Gercek isletme bilgisi olmadan uydurulmamasi gereken alanlar placeholder
olarak birakildi, bunlari doldurmak gerekiyor:

- **Sokak adresi**: `docs/index.html` icindeki `.location-card` bolumunde
  `[Straat + huisnummer invullen]` yaziyor, `src/pages/masterPage.js`
  icindeki footer metninde de sadece "2480 Dessel" var, sokak eksik.
- **Telefon / sosyal medya**: hicbir yerde yok, istenirse eklenir.
- **Menu**: `docs/index.html` icindeki `FALLBACK_PRODUCTS` listesi tahmini
  isim/fiyat iceren bir YEDEK listedir (Kuzela'daki mantigin ayni).
  Gercek menu Wix Restaurants panelinden kurulunca (Kuzela'da oldugu gibi)
  ana sayfa otomatik olarak oradan besleniyor — bkz. asagidaki
  "Urun kartlari nereden geliyor" bolumu, mekanizma degismedi.
- **wix.config.json**: bilerek eklenmedi, Wix baglantisi kurulunca
  otomatik olusmasi bekleniyor (yukariya bakin).

## Urun kartlari nereden geliyor

Ana sayfadaki alti kart, Kuzela'daki gibi **Wix Restaurants menusunden**
gelecek sekilde kodlandi. Menude fiyat/ad/gorsel girilince ana sayfa
otomatik guncellenir; kod tarafinda ek islem gerekmez.

Zincir: `src/backend/menu-data.js` menuyu okur -> `src/backend/menu.web.js`
yukseltilmis izinle cagirir -> `src/pages/Home.c1dmp.js` sonucu iframe'e
`postMessage` ile gonderir -> `docs/index.html` kartlari yeniden cizer.
Iframe baska bir origin'de oldugu icin Wix API'lerini kendisi cagiramaz.

**Hangi urunler secilir:** bolum basina en fazla bir urun, menudeki sirayla.
Bolumde `featured` isaretli urun varsa o secilir. Gorseli veya fiyati olmayan
urunler atlanir (kart bozuk gorunmesin diye).

Menu okunamazsa `docs/index.html` icindeki YEDEK (placeholder) liste
gosterilir ve sebep tarayici konsoluna `[drgrill]` etiketiyle yazilir.

### Onemli: degisiklikler 10 dakikaya kadar gecikebilir

GitHub Pages `Cache-Control: max-age=600` gonderiyor. `docs/index.html`
degistirip push ettikten sonra sitedeki gomulu icerik **10 dakikaya kadar**
eski kalabilir; tarayicinin kendi onbellegi de ayni sureyi tutuyor. Bir
degisikligin canliya gecmedigini dusunmeden once 10 dakika bekleyip sayfayi
sert yenile (Ctrl+F5).
