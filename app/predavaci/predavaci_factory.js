'use strict';

angular.module('mop-predavaci')
    .factory("predavaciFac", function () {
        var gost = false;
        var gosti = [
            {
                id: 1,
                ime: "Andrej Radinger ",
                img: "img/rad_slika1.png",
                bigImg: "img/rad_slika2.png",
                bio:"Andrej Radinger je nositelj titule Microsoft Windows Phone Development Most Valuable Professional (MVP), bavi se proučavanjem, razvojem i implementacijom Microsoftove mobilne tehnologije od njenih najranijih početaka. Sudjelovao je u mnogim projektima vezanima uz mobilnost te je prošao kroz sve uloge u projektima – savjetnika, programera, voditelja obuke, voditelja projekata, vozača, skladištara... Iskustvo je stjecao radeći u nekoliko domaćih tvrtki te na temelju desetgodišnjeg iskustva, početkom 2006. pokreće vlastitu tvrtku, koja se bavi savjetovanjem, obukom i razvojem, ponajprije za mobilna rješenja, ali i šire, primjerice za pametna klijentska rješenja. Andrej je redoviti predavač na Microsoftovim konferencijama u regiji i TechEdu. Aktivni je član MS zajednice u Hrvatskoj. U slobodno vrijeme bavi se nogometom te sviranjem i pjevanjem po vatrogasnim zabavama."
                ,links: ["www.mobendo.com/","www.linkedin.com/pub/andrej-radinger/1a/189/359"],
                predavanje: {
                    type: "Predavanje",
                    naslov: "Windows Phone Development",
                    datum: "Četvrtak 22.04 — 13.00 - 14.00 h"
                }
            },
            {
                id: 2,
                ime: "NanovoGroup",
                img: "img/nano_slika1.png",
                bigImg: "img/nano_slika2.png",
                bio: "NanovoGroup je full service software development team iz Zagreba s orijentacijom na mobile gaming. Iako je team osnovan 2013. godine, u dosadašnjoj karijeri izbacio je već desetak mobilnih igara i aplikacija koje su zajedno zabilježile preko milijun downloada. Nanovo će na Mop festivalu predstavljati Igor Jurkijević, lead mobile developer te Ivan Paradinović, mobile marketing director. "
                ,links: ["nanovogroup.com","www.facebook.com/nanovogroup","twitter.com/durnkporduction"],
                predavanje: {
                    type: "Predavanje",
                    naslov: "Mobile Gaming - Od ideje do uspjeha!",
                    datum: "Četvrtak 22.04 — 16.10 — 17.00 h",
                    opis: "Na aktualnom primjeru nedavno dovršene igre Fruityply, pozabavit ćemo se najvažnijim aspektima mobile gaming developmenta: od inicijalnog trenutka inspiracije, preko ispitivanja i 'drilanja' ideje, konceptualne razrade, dizajniranja, kodiranja, mehanizama monetizacije pa sve do promotivnih aktivnosti i rekapitulacije uspješnosti. Potrudit ćemo se dočarati vam trnovit ali iznimno zabavan svijet industrije mobilnih igara."
                }
            },
            {
                id: 3,
                ime: "Andrej Lončarić",
                img: "img/andrej_slika1.png",
                bigImg: "img/andrej_slika2.png",
                bio:"Osnivač, ravnatelj i predavač na MPA Akademiji. Rođen je 09.01.1977. godine u Zagrebu. Svoju glazbenu karijeru započeo je 1987. godine upisavši muzičku školu. Sa 15 godina osniva svoj prvi metal band “Remains” gdje igra ulogu gitariste i glavnog vokala. Sa 19 godina kupuje svoju prvu studijsku opremu i kreće u smjeru audio inženjeringa. Sa 22 godine seli se u Detroit (USA) gdje nastavlja svoje obrazovanje iz audio inženjeringa i glazbene produkcije. Tri godine kasnije vrača se u Zagreb gdje otvara tonski studio i nastavlja raditi kao audio inženjer i producent u studiu kao i na “live” nastupima. Usporedno radi i kao mastering inženjer za Croatia Records. Od 2002. godine vlasnik je tonskog studija (Andrei Music) sa kojim su surađivali na stotine različitih izvođača. Samo neka od imena sa kojima je surađivao su: Prljavo Kazalište, Bare i Plaćenici, Nina Badrić, Josipa Lisac, Petar Grašo, Jura Stublić, Mate Bulić, Edo Maajka, Sinestet, Stillnes, Bojan Jambrošić, Antonija Šola, Jacques Houdek, Jantar, Corto, Pamela Ramljak(Feminem), Sandi Cenov, Saša Lozar, Severina, Ivana Banfić, Nika Antolos(Feminem), Marin Ivanović - Stoka, Mile Kekin (Hladno Pivo), Andrea Qubrick, Ivana Radovniković, Saša Antić(T.B.F.), Kuzma i Shaka Zulu, General Woo itd…. Iako je radio na raznim glazbenim stilovima, specijalnost su mu hip-hop, rock i heavy metal produkcija. U svojoj karijeri snimio je, mixao i producirao preko 6000 pjesama."
                ,links: ["www.mpa.com.hr/predavaci/"],
                predavanje: {
                    type: "Predavanje",
                    naslov: "Music Production Academy",
                    datum: "Četvrtak 22.04 — 17.10 — 17.50 h"
                }
            },
            {
                id: 4,
                ime: "Filip Dizdar",
                img: "img/dizdar_slika1.png",
                bigImg: "img/dizdar_slika2.png",
                bio: "Filip Dizdar rođen je 17.06.1989. godine u Zadru. Od rane dobi pokazuje veliki interest za video formu te upisuje Medijski Dizajn gdje dobiva priliku ozbiljnije ući u svijet multimedije i videa. Još za vrijeme srednje škole bilježi razne video projekte i nagrade za iste. Upisivanjem Grafičkog fakulteta seli se u Zagreb i počinje se ozbiljno baviti fotografijom i videom. U početku bilježi suradnje s RNB Confusionom i Index.hr-om a s vremenom se upušta u snimanje glazbenih i reklamnih video spotova. Baveći se usporedno fotografijom i videom bilježi suradnje s mnogim poznatim osobama i rad na raznim projektima, reklamama, glazbenim spotovima, korporativnim videima. Radio je naslovnice časopisa poput Klika i Kulta, jumbo plakate za razne akcije i poznate osobe i događaje, na tjednoj bazi radi fotografiju za Index.hr, radio je reklamu za Pevec te mnoge covere albuma brojnih hrvatskih zvijezda. Od glazbenih video spotova potpisuje režiju i produkciju za pozamašan broj spotova poznatih umjetnika poput: S.A.R.S.-a, Vanne, Zorana Predina, Grupe Boa, Ivane Kindl, Marka Tolje, Franke Batelić, Kaliopi, Gazdi, Pamele Ramljak, Nede Parmać, Maje Šuput, Mejaša, Đanija Stipaničeva, Teške industrije, Antonije Šole i mnogih drugih. Trenutno je jedan od najtraženijih video redatelja u Hrvatskoj dobitnik je triju MTV nagrada za spotove i svaki slobodan trenutak koristi za unaprjeđenje svog znanja i podizanja kvalitete video produkcije. Također vodi 'Video production program' na MPA Akademiji gdje sve željne znanja vodi kroz svijet video produkcije od same režije do snimanja i montaže."
                ,links: [],
                predavanje: {
                    type: "Predavanje",
                    naslov: "Music Production Academy",
                    datum: "Četvrtak 22.04 — 18.00 — 18.40 h"
                }
            },
            {
                id: 5,
                ime: "Vladimir Končar",
                img: "img/vlado_slika1.png",
                bigImg: "img/vlado_slika2.png",
                bio: "Vladimir Končar je multidisciplinarni dizajner i jedan je od osnivača studija Revolucija i tvrtke Amodo s više od deset godina iskustva u dizajnu interakcija i kreiranju digitalnih iskustava. Član je HDD-a i ULUPUH-a, a dosad je izlagao i učestvovao na velikom broju samostalnih i skupnih izložbi u zemlji i inozemstvu. Za svoj rad na području dizajna nagrađivan je nizom nagrada, a radovi su mu objavljeni u različitim renomiranim publikacijama za umjetnost i dizajn. Dok ne radi, trči."
                ,links: ["www.revolucija.hr","www.koncar.info"],
                predavanje: {
                    type: "Predavanje",
                    naslov: "Interaktivni postav Ivanina kuća bajke",
                    datum: "Četvrtak 22.04 — 20.00 — 20.45 h",
                    opis: "Ivanina kuća bajke je multimedijalni i interdisciplinarni centar za posjetitelje otvoren u prosincu 2013. godine u Ogulinu. Kako je nastao i što sve skriva jedan od 'najvažnijih projekata suvremene kulturno-turističke ponude Hrvatske' predstavit će nam Vladimir Končar, jedan od autora projekta."
                }
            },
            {
                id: 6,
                ime: "DAN D",
                img: "img/dand_slika1.png",
                bigImg: "img/dand_slika2.png",
                links: ["www.facebook.com/danDizajna","www.youtube.com/watch?v=8VQxF7YXfLI&feature=youtu.be"],
                bio: "Kroz bogat izložbeni i diskurzivni program, Dan D će se ove godine baviti rubnim područjima dizajnerskog djelovanja, iskoračivanjem iz uobičajenih okvira samog pojma dizajna, kao i isklizavanjem prema drugim disciplinama. Odabirom nove lokacije nastavlja se i oživljavanje zapuštenih prostornih resursa u Zagrebu, te nakon industrijskih kompleksa Stare klaonice i bivše Tvornice željezničkih vozila Gredelj, u ovogodišnjem petom izdanju selimo u prostore bivše vojne bolnice u Vlaškoj ulici u Zagrebu.Centralno događanje festivala i dalje je D-IZLOŽBA, namijenjena mladim autorima do 35 godina koji će u vibrantnom festivalskom okruženju predstaviti svoje radove – samoinicirane ili naručene projekte koje razvijaju, proizvode, koncepte ili prijedloge u rasponu od dizajna vizualnih komunikacija, produkt dizajna, dizajna elektronskih medija, interakcija, do modnog dizajna, ilustracije, itd. Glavna događanja festivala, uključujući i izložbu mladih dizajnera, D-market, gostujuće izložbe, izložbe fakulteta i škola iz regije, edukativni program, predavanja, okrugle stolove, odvijaju se od petka 30. svibnja do nedjelje 1. lipnja. Dio programa odvijat će se i izvan kompleksa u Vlaškoj na drugim lokacijama u gradu, s produženim trajanjem do 5. lipnja."
                ,predavanje: {
                    type: "Predavanje",
                    naslov: "Dizajn na rubu",
                    datum: "Četvrtak 22.04 — 20.45 — 21.15 h"
                }
            },
            {
                id: 7,
                ime: "Perica Šuran",
                img: "img/perica_slika1.png",
                bigImg: "img/perica_slika2.png",
                bio: "Perica Šuran  je audio inženjer, producent, predavač na SAE Institute."
                ,links: ["ljubljana.sae.edu/en-gb/home/","www.facebook.com/saeljubljana","twitter.com/SAE_Ljubljana", "www.youtube.com/user/sljubljna"],
                predavanje: {
                    type: "Predavanje",
                    naslov: "In the box",
                    datum: "Petak 23.04 — 17.00 — 17.50 h",
                    opis: "Fokus predavanja biti će postizanje što više kvalitete produkcije u kućnim uvjetima. Naglasak će biti na 'in the box' obradi zvuka, te će biti objašnjene osnove o potrebnoj opremi za snimanje i manipulaciju zvuka. Dio radionice će biti rezerviran za 'pitanja i odgovore' gdje ćete moći saznati sve što Vas zanima vezano za spomenute teme. "
                }
            },
            {
                id: 8,
                ime: "Ivan Mesek",
                img: "img/mesek_slika1.png",
                bigImg: "img/mesek_slika2.png",
                bio: "Ivan Mesek rođen je 1971. u Varaždinu gdj ezavršava Gimnaziju. 1989. upisuje Akademiju likovnih umjetnosti u Zagrebu, nastavnički odjel, a od 1996.-1999. pohađa poslijediplomski studij pri Akademiji likovnih umjetnosti u Munchenu. 1992.i 1993. polaznik je Ljetne akademije likovnih umjetnosti u Salzburgu. Ravnatelj je Galerijskog centra Varaždin u sklopu kojeg organizira Dane performansa. Multimedijalni je umjetnik koji se bavi slikarstvom, kiparstvom, performansom, video-umjetnošću."
                ,links: [],
                predavanje: {
                    type: "Predavanje",
                    naslov: "Performans i Varaždin",
                    datum: "Petak 23.04 — 18.25 — 18.45 h",
                }
            },
            {
                id: 9,
                ime: "Mireldy",
                img: "img/mireldy_slika1.png",
                bigImg: "img/mireldy_slika2.png",
                bio: "Imelda Ramović i Mirel Hadžijusufović, art direktori, dizajneri i ilustratori u području oglašavanja, umjetnosti i kulture, glazbene i modne industrije zajedno stvaraju od 2004., a od 2010. pod imenom Mireldy. U tom su razdoblju, samostalno i u nekoliko regionalnih reklamnih agencija prikupili impresivan broj projekata i nagrada  (Red Dot, New York Festivals, Cresta, Magdalena, Type Directors Club, ADCC…). Veseli ih razvijanje kreativnih koncepata, ambalaža, brandova, ali i izazovi novih područja na kojima se mogu kreativno izraziti."
                ,links: ["www.behance.net/Mireldy "],
                predavanje: {
                    type: "Predavanje",
                    naslov: "Mireldy",
                    datum: "Petak 23.04 — 18.50 — 19.10 h",
                }
            },
            {
                id: 10,
                ime: "Đukićpavlović",
                img: "img/duk_slika1.png",
                bigImg: "img/duk_slika2.png",
                bio: "Đukićpavlović su Zoran Đukić i Jan Pavlović, oba magistra Studija dizajna u Zagrebu, kao tandem djeluju od 2008. godine. Ubrzo nakon, na jednom lokalnom portalu izlazi intervju osrednje utemeljenog naslova ‘Dizajneri pretplaćeni na nagrade’ koji i dan danas muzu. Najviše vole stvarati vizualne identitete, a primarno područje djelovanja su im arhitektura i kultura. U portfoliju imaju raspon projekata od brandiranja underground elektronskih festivala do identiteta državnih institucija."
                ,links: ["www.dukicpavlovic.hr","www.facebook.com/dukicpavlovic"],
                predavanje: {
                    type: "Predavanje",
                    naslov: "Dizajniranje Illectricity Festivala",
                    datum: "Petak 23.04 — 19.20 — 19.40 h",
                    opis: "llectricity festival jedan je od vodećih hrvatskih festivala elektronske glazbe. Na predavanju ćemo predstaviti rad na ovogodišnjem vizualnom identitetu festivala, obilježen inovativnom borbom protiv malog budžeta i raznovrsnim suradnjama - sa modnim dizajnericama, fotografima, VJ-ima i tattoo artistima."
                }
            },
            {
                id: 11,
                ime: "Tin Kadoić",
                img: "img/tin_slika1.png",
                bigImg: "img/tin_slika2.png",
                bio: "Tin je magistar dizajna, kreativni direktor Brloga - digitalne agencije i predavač na Studiju za Dizajn u Zagrebu. Živi i radi sa interaktivnim medijima, balansirajući komercijalni, edukativni i osobni interes za dizajnom interakcija. U svojoj karijeri, od 2002., surađivao je brojnim lokalnim studijima i agencijima te radio za klijente poput Coca-Cola, Adris, T-Com, Autozubak, Snickers, Ericsson, Carlsberg, Nutella, GSS… Nagrađen je sa nagradama Red Dot, ID, Adobe achievement award, IdejaX, Effie, MIXX te je izlagao na Biennalu Hrvatskog dizajna, ZGRAF-u, te manjim izložbama."
                ,links: ["blackduke.com", "brlog.biz", "studijdizajna.com"],
                predavanje: {
                    type: "Predavanje",
                    naslov: "Foraging for Creativity",
                    datum: "Petak 23.04 — 19.45 — 20.05 h",
                    opis: "Koje sve sastojke za kreativnost možemo pronaći u divljini? Kako ostale profesije analiziraju i tretiraju temu kreativnosti? Koje preporuke najboljeg svjetskog kuhara mogu biti korisne i UX dizajnerima?"
                }
            },
            {
                id: 12,
                ime: "Marko Hrastovec",
                img: "img/marko_slika1.png",
                bigImg: "img/marko_slika2.png",
                bio: "Marko Hrastovec rođen je u Varaždinu, Studij dizajna upisuje 2009. godine, a status prvostupnika dizajna dobiva 2012. U dizajnu ga najviše zanima crtanje slova i dizajn pisama, pa na tom području već 3 godine usko surađuje sa Nikolom Đurekom (Typonine). Sudjelovao je i kao dio uredništva na hrvatskom prijevodu knjige Gerrita Noordzija Potez. Uz to, radi samostalno za istaknute domaće dizajnerske studije i različite klijente. Trenutno, Marko završava MA na Studiju dizajna u Zagrebu, nakon kojeg odlazi u Nizozemsku na Type design master na Kraljevskoj akademiji u Hagu."
                ,links: ["www.markohrastovec.com","www.dijakritika.tumblr.com"],
                predavanje: {
                    type: "Predavanje",
                    naslov: "(Dija)kritika u prostoru",
                    datum: "Petak 23.04 — 20.10 — 20.30 h",
                    opis:"‘Dijakritika’ je foto-dokumentarni i dizajnerski projekt u trajanju, baziran na bilježenju situacija u gradu kojima autor uočava, dokumentira i prezentira svu kreativnost pri upotrebi (hrvatskih) dijakritika zatečenih u raznolikim (zlo)upotrebama u javnom prostoru."
                }
            },
            {
                id: 14,
                ime: "VUDU",
                img: "img/vudu_slika1.png",
                bigImg: "img/vudu_slika2.png",
                bio:"Varaždinska udruga digitalne umjetnosti, skraćeno VUDU mlada je Varaždinska organizacija koja okuplja mlade autore sa područja dizajna, fotografije, videa i multimedije. Osnovani sa željom da stvorimo platformu za razvoj varaždinske multimedijalne scene, nastojimo poboljšati međusobnu suradnju i razmjenu iskustva autora, te potaknuti zajednički rad mladih umjetnika. Iako osnovani 2013. godine, već u početku sudjelujemo na Vudruga festu održanom za vrijeme Špancira te bivamo pozvani na Multimedijalni kamp u M. Središću gdje se predstavljamo svojom digitalnom Camerom obscurom. Međutim, tu ne stajemo te pokrećemo i XFO, fotografski maraton  kako bi potaknuli i mlade fotografe na suradnju i eksperimentiranje. Kao plod toga, ostvarujemo suradnju i sa festivalom MOP na kojem ćemo vam predstaviti svoj rad."
                ,links: [],
                predavanje: {
                    type: "Predavanje",
                    naslov: "XFO WORKSHOP",
                    datum: "Subota 24.04 — 11.00 — 13.30 h",
                    opis:"U iščekivanju drugog XFO Fotomaratona, Udruga VUDU vam donosi prvi - XFO Workshop! Zajedno sa multimedijalnim festivalom MOP, XFO ekipa za vas priprema jednu nesvakidašnju radionicu! Potražite svoj X faktor u fotografijama, a atmosferu će vam dodatno mistificirati čak 5 zmija te naši atraktivni modeli u zanimljivim odjevnim kombinacijama dizajnerice Valerije V-design! Imate li hrabrosti? Dođite, okružite se kraljevskim pitonima i kukuruznim zmijama i otkrijte svoj foto faktor X na XFO Workshopu!"
                }
            },
            {
                id: 15,
                ime: "Gordon Cindrić",
                img: "img/gordon_slika1.png",
                bigImg: "img/gordon_slika2.png",
                bio: "Microsoft Student Partner i VELV alumni dizajnerskog korijenja, bavi se dizajnom korisničkih iskustava i sučelja za mobilne, desktop i web aplikacije te njihovom implementacijom. U području razvoja pretežito naginje prema web tehnologijama kao što su HTML, CSS, JavaScript i razni JS framework-ovi a ponekad voli zaroniti i u vesela prostranstva XAML-a kroz Windows Phone i Windows Store aplikacije."
                ,links: ["www.gordoncindric.com/"],
                predavanje: {
                    type: "Predavanje",
                    naslov: "One Code to Rule Them All",
                    datum: "Subota 24.04 — 10.15 — 11.00 h"
                }
            },
            {
                id: 16,
                ime: "Clover Studio",
                img: "img/clover_slika1.png",
                bigImg: "img/clover_slika2.png",
                bio: "Clover Studio je kompanija koja surađuje sa klijentima sa područja Sjedinjenih Američkih Država i Japana. Specijalizirana je za mobilni development i razvoj inovativnih riješenja te poslovnih i startup proizvoda. Milan Rađenović - Student odsjeka Multimedije na Sveučilištu Sjever, radi kao lead dizajner u Clover Studio-u a specijalizirao se za iOS UX i UI dizajn i animacije grafičkog sučelja mobilnih aplikacija. Vedran Čačić - Diplomirani student telekomunikacija na studiju Elektrotehnike i računarstva u Zagrebu sa završnim diplomskim radom aplikacije za studomat na istoimenom fakultetu. iOS Developer u Clover Studio-u, zadužen za programiranje aplikacija sa tendencijom prema tranzicijama i animiranjem grafičkog sučelja aplikacija."
                ,links: ["www.clover-studio.com"],
                predavanje: {
                    type: "Predavanje",
                    naslov: "Razvoj iOS APP - MULLY",
                    datum: "Subota 24.04 — 11.00 — 11.45 h",
                    opis: "Predavanje obuhvaća razvoj golferske fantasy aplikacije za američko tržište. Koncept aplikacije je zamišljen kao fantasy natjecanje između timova sastavljenih od profesionalnih golf igrač te stvarnog natjecanja profesionalnih i poluprofesionalnih golfera na području Californie. Svrha predavanja je prezentacija razvoja aplikacije od inicijalne ideje  preko dizajna (skica, grafickog dizajna) i na kraju same realizaije kroz programiranje."
                }
            },
            {
                id: 17,
                ime: "Bold-Studio",
                img: "img/bold_slika1.png",
                bigImg: "img/bold_slika2.png",
                bio: "Bold Studio offers a comprehensive suite of post-production services from editing and colour grading to animation and complex VFX compositing. We provide our clients with pre-production consulting and on set supervision, depending on project demands. Chose quality service in a comfortable environment!"
                ,links: ["www.bold-studio.com/"],
                predavanje: {
                    type: "Predavanje",
                    naslov: "3D ANIMACIJA",
                    datum: "Subota 24.04 — 12.00 — 13.00 h"
                }
            },
            {
                id: 18,
                ime: "Booqua creative studio",
                img: "img/booqua_slika1.png",
                bigImg: "img/boouqa_slika2.png",
                bio: "Booqua creative studio je kreativni tim iz Varaždina. U timu se udružuju raznoliki talenti - od programiranja, grafičkog i web dizajna, 3D modeliranja, animacije i ilustracije do glazbene produkcije. Njihova AR (augmented reality) aplikacija za novi album Cold Snapa inovativan je pristup primjeni novih tehnologija u promociji i marketingu. "
                ,links: [],
                predavanje: {
                    type: "Predavanje",
                    naslov: "Augmented reality",
                    datum: "Subota 24.04 — 13.00 — 13.30 h"
                }
            },
            {
                id: 19,
                ime: "Sandro Dujmenović",
                img: "img/sandro_2.png",
                bigImg: "img/sandro_1.png",
                bio: "Sandro Dujmenović, zadarski dizajner s zagrebačkom adresom. Živi i radi u Bunchu."
                ,links: ["sandrosandro.com/","www.bunchdesign.com/"],
                predavanje: {
                    type: "Predavanje",
                    naslov: "Design is a job!",
                    datum: "Subota 24.04 — 18.00 — 18.20 h"
                }
            },
            {
                id: 20,
                ime: "Oleg Morović i Oleg Šuran",
                img: "img/oleg_slika1.png",
                bigImg: "img/oleg_slika2.png",
                bio: "Morović je iz Fažane i radi u tiskari. Šuran je iz Pule i radi na Sveučilištu u Splitu (UrbanIxD, DVK/UMAS). Oboje su završili ŠPUD u Puli. Šuran je magistrirao na Odsjeku za dizajn vizualnih komunikacija (UMAS). Od kraja srednje škole skupa rade na samoiniciranim projektima, i kao freelanceri. Osim forme, najviše ih zanima komunikacija – granice i igra. Uz časopis za poeziju Polet, vode  www.nakonjusmo.net, Dansko-istarsko prijateljstvo i umjetničku organizaciju Fazan. Dizajn, poezija, umjetnost (...) – sve su to tek alati. Uglavnom ga čilaju u Istri."
                ,links: ["www.nakonjusmo.net/"],
                predavanje: {
                    type: "Predavanje",
                    naslov: "Na konju smo .net",
                    datum: "Subota 24.04 — 18.25 — 18.45 h"
                }
            },
            {
                id: 21,
                ime: "Gregor Žakelj",
                img: "img/zakelj_slika1.png",
                bigImg: "img/zakelj_slika2.png",
                bio: "Gregor started out years back focused on web and motion design. But even as a young creative/art director the growing passion towards illustration, typography and graphics design drove him out of the agency world. He started his own design studio - Visual Brain Gravity and in the same time became a Young creative of the year and presented Slovenia in Cannes. He has won numerous international and domestic design awards (Volvo Design Award, SOF, Brumen, Golden European Design Award, Golden Drum). Besides occasional lectures he has also been a member of Golden Drum jurry and the Slovenian Advertising Festival jury for five times. Currently he is mostly using his multidisciplinary knowledge in creating visual identities for a verity of industries ranging from music to sports.  He discovered importance of studio side-project with his brands of longboards and emphasizing his claim that good design is for good clients."
                ,links: ["www.vbg.si","www.dimension-two.com"],
                predavanje: {
                    type: "Predavanje",
                    naslov: "Good client made me do it",
                    datum: "Subota 24.04 — 18.50 — 19.35 h",
                    opis: "Every good project needs a client who trust you and believes in your work. Without a proper client the design has no real value. Clients gives us boundaries and boundaries are the essence of creativity. Therefore creativity has a purpose and a concept that is for something or someone. I will show the importance of trust in building a brand and its interaction towards the end user. How to use multidisciplinary knowledge in building a solution that is different, adaptive and focused. How to be bold, how to win and how to fail."
                }
            },
            {
                id: 22,
                ime: "Ivica Mitrović",
                img: "img/mitrovic_slika1.png",
                bigImg: "img/mitrovic_slika2.png",
                bio: "Ivica Mitrović docent je na Odsjeku za dizajn vizualnih komunikacija Umjetničke akademije u Splitu, gdje predaje sadržaje vezane uz dizajn interakcija i dizajn u interaktivnim medijima. Doktorirao je na Sveučilištu u Splitu, te se usavršavao na nekoliko međunarodnih institucija. Kao gost predavač ili voditelj radionica pozivan je od strane uglednih ustanova u Hrvatskoj i inozemstvu. Bio je voditelj, mentor ili komentor brojnih izloženih i nagrađenih studentskih radova na domaćim i međunarodnim žiriranim izložbama dizajna. Inicirao je mnogobrojne aktivnosti vezane uz unaprjeđenje dizajnerske djelatnosti i edukacije, te sudjelovao u njima. Od 2001. godine radi na promociji te uvođenju dizajna interakcija kao nove specijalizacije na području dizajna u Hrvatskoj i regiji. Aktivnosti vezane uz promociju dizajna interakcija uključuju seriju radionica iz ovog područja, a rezultirale su međunarodnim simpozijem dizajna interakcija na Akademiji u Splitu 2009. godine. Autor je retrospektivnih izložaba radionica dizajna interakcija Interakcije 2004 – 2012 i pregleda hrvatske scene u području dizajna u novim medijima u Galeriji HDD-a u Zagrebu. Krajem 2012. godine izlazi njegova knjiga Dizajniranje novih medija, Dizajn i novi mediji – hrvatski kontekst (1995 – 2010) koja donosi pregled hrvatske scene u području dizajna u novim medijima. Trenutno sudjeluje u realizaciji europskog projekta Urban IxD – Designing Human Interactions in the Networked City u sklopu kojeg priprema izložbu City | Data | Future – Interactions in hybrid urban space."
                ,links: ["dvk.com.hr/interakcije/","www.citydatafuture.eu/","dvk.com.hr/interakcije/2012/12/10/dizajniranje-novih-medija-dizajn-i-novi-mediji-hrvatski-kontekst-1995-2010/"],
                predavanje: {
                    type: "Predavanje",
                    naslov: "City | Data | Future – Dizajn interakcija u hibridnom urbanom prostoru",
                    datum: "Subota 24.04 — 19.40 — 20.10 h",
                    opis: "Suvremeni gradovi ubrzano postaju hibridi fizičkog okoliša i digitalne sfere podataka. Hibridni grad zapravo je tehnološki proširen grad u kojem se digitalni krajolik stapa s našim stvarnim, fizičkim svijetom, te nam, neprestano rastući, nudi sve bogatija digitalna iskustva. Gradovi budućnosti će očigledno sadržavati kompleksne mreže međusobno povezanih heterogenih tehnologijskih sustava. Dizajna interakcija u urbanom okruženju se, u kontekst ovakvog tehnološki proširenog okoliša, kroz kritičku dizajnersku praksu, fokusira na ljudske aktivnosti, iskustva i ponašanja koja se događaju unutar njih. Ovakav hibridni grad neprestano će dobivati nove mogućnosti, kapacitete prikupljanja i generiranja podataka. Stoga je izazov ove dizajnerske prakse, dati smisao i značaj tim podacima, te ih učiniti transparentima i upotrebljivim građanima gradova budućnosti. Predavanje će govoriti o navedenoj temi kroz primjere iz osobne dizajnersko–edukacijske prakse na Umjetničkoj akademiji, te kroz projekte nastale u sklopu UrbanIxD platforme, koji metodologijom kritičkog dizajna i dizajna fikcija spekuliraju o mogućim budućim scenarijima, koji mi, kao građani takvih gradova, možemo očekivati."
                }
            },
            {
                id: 23,
                ime: "Vibor Cipan",
                img: "img/vibor_slika1.png",
                bigImg: "img/vibor_slika2.png",
                bio: "Vibor is currently serving as CEO of UX Passion, a full service UX design and usability firm with global reach. Vibor's professional background is in UX design, service design and usability. Along with leading UX Passion, Vibor is an active and trusted consultant and presenter on tech topics as well as a published author, having published his first book about building great UI and UX in 2010. In his free time he can be found on a bike, travelling, enjoying music and experimenting with agriculture and all things 8-bit."
                ,links: ["www.uxpassion.com/"],
                predavanje: {
                    type: "Predavanje",
                    naslov: "Vrli novi svijet interakcija",
                    datum: "Subota 24.04 — 20.15 — 20.35 h",
                    opis: " Što su uopće interakcije i u kojem ih mediju doživljavamo i imamo priliku iskusiti? U školi često učimo o fizikalnim interakcijama i interakcijama na atomskim i molekularnim razinama, u kontekstu sociologije pričamo i o međuljudskim interakcijama, ali posebnu pozornost će nam danas privuči digitalne i web interakcije. Na koji način mijenjaju naš život, kako nam ga čine boljim ili lošijim te kako sami možemo postati i svjesniji interakcija u koje stupamo te prilikom njihovih mogućih budućih dizajniranja obratiti pozornost na ključne elemente njih - ljude, korisnike. Dotaknut ćemo se pojma web, mobilnih i digitalnih interakcija te njihovog utjecaja na pojedince, društvo i kulturu u cjelini."
                }
            },
            {
                id: 24,
                ime: "Nikola Kovač",
                img: "img/kovac_slika1.png",
                bigImg: "img/kovac_slika2.png",
                bio: "Već na Akademiji likovnih umjetnosti kist je zamjenio digitalnim alatima. Nagrađivane autorske projekte izlaže na relevantnim skupnim izložbama i ponekoj samostalnoj. Kao grafički dizajner niz godina surađuje na raznovrsnim kulturnim, komercijalnim i samoinicranim projektima unutar tandema Imaginarij. Suosnivač je web studija Broj 42 u kojem trenutno djeluje."
                ,links: [],
                predavanje: {
                    type: "Predavanje",
                    naslov: "Projektor.hr",
                    datum: "Subota 24.04 — 20.15 — 20.35 h",
                    opis: "Platforma za prezentaciju i financiranje kreativnih i umjetničkih projekata koja se razvija u suradnji sa studijom 42 i Agencijom 404."
                }
            },
            {
                id: 25,
                ime: "BADco",
                img: "img/badco_slika_1.png",
                bigImg: "img/badco_slike_2.png",
                bio: "BADco. je kolaborativna izvedbena skupina koja radi u Zagrebu. Jezgru skupine čine: Ivana Ivković, Ana Kreitmeyer, Tomislav Medak, Goran Sergej Pristaš, Nikolina Pristaš, Lovro Rumiha i Zrinka Užbinec. Od svog osnutka u 2000. godini, BADco. se kroz suradnju troje koreografa/plesača, dvoje dramaturga i jednog filozofa, uz producenta skupine, sistematično bavi istraživanjem protokola izvođenja, predstavljanja i gledanja strukturirajući svoje projekte unutar različitih formalnih i percepcijskih odnosa i sklopova. Rekonfiguracija etabliranih odnosa izvedbe i publike, propitkivanje perspektivnih datosti i arhitektonike izvedbe, problematizacija komunikacijskih struktura – sve to čini BADco. međunarodno relevantnim umjetničkim fenomenom i jedinstvenim izvedbenim doživljajem."
                ,links: ["badco.hr/works/whatever-toolbox/","vimeo.com/17989853"],
                predavanje: {
                    type: "Instalacija",
                    naslov: "Whatever Dance Toolbox",
                    datum: "Subota 24.04 — 21.00 — 23.00 h",
                    opis: "Jedna od najeminentnijih hrvatskih izvedbenih skupina BADco., postavit će svoj Whatever Dance Toolbox (WDT). Riječ je o skupu softverskih alata za analizu i razvoj plesa i pokreta. Inicijalno razvijan iz tehnologija motion capturea, WDT je svojevrsno interaktivno ogledalo koje je korisno u plesnom studiju, ali i u svakodnevnom, laičkom bavljenju plesom. Softver se koristi kao poveznica između kamere koja snima pokret u stvarnom vremenu, kompjutora i projektora, a plesač tijekom probe može manipulirati sliku pokreta i time dobiti 'ogledalo' koje sugerira moguće kvalitete pokreta koje on sam svojim kretanjem još de facto nije proizveo."
                }
            },
            {
                id: 26,
                ime: "CHEW THE FAT! CROATIA",
                img: "img/fat_slika1.png",
                bigImg: "img/fat_slika2.png",
                bio: "Chew the Fat! Croatia je klupska večer prisutna na sceni od listopada 2009. te je hrvatska edicija jedne od najprestižnijih i najdugovječnijih londonskih klupskih večeri Chew the Fat! koja je ove godine proslavila svoj 15. rođendan. Tokom 4 godine postojanja CTF!Cro se nametnuo kao jedan od najkvalitetnijih i najpopularnijih klupskih projekata u Hrvatskoj što iz mjeseca u mjesec dokazuje svojim večerima u zagrebačkoj Tvornici Kulture gdje se zbog velikog interesa iz malog pogona preselio u veliki ništa manje uspješno. Chew the Fat! Croatia zagrebačkoj publici predstavlja najsvježije trendove 'Bass' glazbe uz gostovanja poznatih umjetnika sa svjetske klupske scene, a u posljednje vrijeme s naglaskom na izvođače iz regije s ciljem jačanja i afirmacije lokalne scene. O kvaliteti večeri svjedoči i sve veća medijska pažnja pa je tako i hrvatsko izdanje Rolling Stone magazina u svom drugom izdanju u članku o lokalnoj Bass sceni upravo CTF!Croatia naveo kao vodeću klupsku bass večer u regiji. Najznačajniji nastup do sada osim već standardnih festivalskih svirki na festivalima poput EXIT-a, Hideouta i sl. zabiljležen je na Terraneo festivalu 2013. godine pred oko 7000 ljudi nakon nastupa The Prodigy. "
                ,links: ["www.facebook.com/ctf.croatia","www.thefatclub.com"]

            },
            {
                id: 27,
                ime: "FILIP MOTOVUNSKI",
                img: "img/motovunski_slika1.png",
                bigImg: "img/motovunski_slika2.png",
                bio:"Filip je odavna postao nezaobilazno ime regionalne i europske scene. On je prije svega kuul tip, ali i d' n'b / jungle DJ, te producent. Član je međunarodne etikete Junglexpeditions, za koje je izdao EP 'Ta Pa Tap' sa 5 pjesama kao i ''Sort Dem Out'' EP u suradnji sa DJ Rahmanee-om . Zajedno sa Big Bud , The Green Man, Yakov i Rahmanee , Filip je dio njemačkog label-a Breaks Per Minute ( BPM Rec . ) za koji je izdao Jump Up remix pjesme Kirila Dzajkovskog 'Jungle Shadow'. Sa izdanjem EP-a 'Move from the Gate' u suradnji sa Dr. Strapazoot, Filip postaje članom JabbaTon Rec. iz Zagreba. Svirao je uzduž i poprijeko. Brojka od preko 500 nastupa je vrlo impresivna. Drobio je po Hrvatskoj, Sloveniji, Bosni i Hercegovini, Italiji, Srbiji i Njemačkoj sa šarolikom škvadrom: John B, RCola, CFSN, Banana Zvuk, Mc Yuri, MC Popay, DJ Peers, Jacky Murda, Daniel S, JinSan, Kingston Sound, MRK1, Yesh, Rea, Roots In Session, Mc Mist, Bassinvaders, Tricky D, trenje, Kenny Ken, Eskman, Lion Dub, Jacky Murda, Mungos Hi Fi, King Shango Soundsystem, Swift, Sigurnosne Breaks, Pips, DMT, Yesh, Edo Maajka, Dirty Beats crew, Kandžija, Mc Big Oz, Gypsy Jungle itd. I najjači festivali poput : Outlook, Hideout, Seasplash, Xtatic, Ferragosto Jam, Hartera i Knockout su se tresli od njegovih izvedbi."
                ,links: ["www.facebook.com/filip.motovunski","soundcloud.com/filip-motovunski"]
            },
            {
                id: 28,
                ime: "DMT",
                img: "img/dmt_slika1.png",
                bigImg: "img/dmt_slika2.png",
                bio:"DMT (David Tešić) je aktivno uključen u glazbenu scenu od 1999. godine kada u suradnji sa članovima hip-hop grupe Connect pokreće radijsku emisiju Ruff Beats Rap Show na Radio Zaprešiću. Ubrzo nakon toga počinje puštati po noćnim klubovima i festivalima diljem Hrvatske (Tvornica, Boogaloo, KvArt/Stara Klaonica, Lemon, Sirup, Gjuro II, KSET, Masters, Industrija Petreković, Pogon Jedinstvo, AKC Medika, ROJC, K Topu, Seasplash Summer Club, Outlook Festival, Hideout Festival, Terraneo, Seasplash Festival, Sirup Nation Festival, IDEŠ? Fest…), Slovenije (Gala Hala, Štuk), BiH (Kriterion) i Austrije (EKH). Sredinom 2004. godine odlazi u Los Angeles gdje je studirao televizijsku produkciju. Za vrijeme studija puštao je po mnogim noćnim klubovima i privatnim zabavama u Los Angelesu i Las Vegasu. Krajem 2009. se vraća u rodni Zagreb i počinje sudjelovati u organizaciji brojnih klubskih programa (Electric Avenue, Chew the Fat! Croatia, Black Light...). U srpnju 2010. godine sa Arianom Vuicom osniva electro-dubstep duet InUrFace, te godinu dana poslije izdaju svoj prvi EP 'Conquer Me' za kanadskog izdavača Capital Boom Records. Iako u posljednje vrijeme preferira glazbene žanrove kao što su trap, dubstep, electro, bassline i breakbeat, povremeno ga nostalgija ponese pa zavrti koju hip-hop stvar u svom setu."
                ,links: ["www.facebook.com/davidtesic","www.facebook.com/djdmt","soundcloud.com/djdmt","mixcloud.com/davidtesic"]
            },
            {
                id: 29,
                ime: "MC BIG OZ",
                img: "img/bigoz_slika1.png",
                bigImg: "img/bigoz_slika2.png",
                bio: "Mario Ozmec poznatiji kao (mc) Big Oz. Reggae i dancehall glazbom se ozbiljnije počinje baviti 2007. Nastupao je u poznatim klubovima kao što su Močvara, Tvornica, Kset, Havana Club, Masters, Sin city, Pauk, Bogaloo, Ritz u Zagreb i na festivalima Exit, Outlook, Špancirfest i Seasplash. Nastupao i surađuje sa Dj-ima, Soundsystemima i izvođačima poput: King Shango soundsystem, Kingston soundsystem, Resystem (Italy), Dubsystem (Slovenia), Bad gals forward soundsystem (Slovenia), Dj Filip Motovunski, Dj Oli Dobolli, Baba K selecta, Dj Verso, Jah billah DUB MASTER, DJ Cool Name, Ital Jam bend, Nina Davis, 2steppaz itd..."
                ,links: ["www.facebook.com/big.oz13","soundcloud.com/bigoz"]
            },
            {
                id: 30,
                ime: "Šalter",
                img: "img/salter_slika3.png",
                bigImg: "img/salter_slika1.png",
                bio:"Šalter je nastao kao rezultat kolizije dva postojeća kolektiva, Udruge Moving iz Novog Marofa i Šuškavac kolektiva iz Varaždina sa ciljem istraživanja novih, dosad (na našem području) neistraženih pravaca audio/vizualne umjetnosti s fokusom na nezavisnu scenu elektronske glazbe. Članovi kolektiva su podijeljeni u dva tabora: prvi tabor koji se fokusira na zvukove i njihovo sklapanje u skladne cjeline (Ilona aka Mae'n, Jurica aka Wuff  i Matija aka Presidente) i drugi tabor koji obogaćuje zvučne kulise sa video elementima (Franjo aka Kotam). Zajedno smo Šalter. "
                ,links: ["soundcloud.com/presidente-4/kompot_01","soundcloud.com/ahm-tirkizni-smoki/alter-promo-mix","soundcloud.com/antoine-wuff/alter-intro-mix"]
            },
            {
                id: 31,
                ime: "Mixel",
                img: "img/mixel_slika1.png",
                bigImg: "img/mixel_slika2.png",
                bio: "BIO Jedan od uzdanika zagrebačke klupske scene odavno je prešao granice hrvatskih plesnih podija i osvojio susjedstvo gostujući na značajnim eventima; uključujući i redovnu potporu regionalnim festivalima. Definirajući svoj zvuk kroz prizmu eksperimentiranja svim žanrovima elektronike, s naglaskom na cosmic-elektro, DJ Mixel zadobio je pažnju izbirljive publike koja poznaje i prati recentna izdanja elektronske glazbe. Svjesno prateći atmosferu unutar klupskog okružja, njegov energičan stil može se okategorizirati kao direktan flert i interakcija, ne samo sa žanrovima već i očekivanjima same publike. Uz težnju za konstantnim otkrivanjem novih pravaca i tehnika, vještom i smionom kombiniranju renomiranih svjetskih i domaćih izdanja, Mixel neosporno je ime od kojeg se za pultom može očekivati puno, ali u konačnici dobiti i više."
                ,links: ["soundcloud.com/theMixel www.mixcloud.com/theMixel www.facebook.com/theMixel","soundcloud.com/substanceirl/substance-mix-series-mixel-zagreb-croatia-012"]
            }
        ]
        return {
            gosti: gosti,
            gost: gost
        };
    });
