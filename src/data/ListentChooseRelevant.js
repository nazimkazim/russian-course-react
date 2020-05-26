//Lesson 1.2

// Robert fisk
import RoberFisk from '../images/ListenChooseRelevant/Lesson1.2/audio/RobertFisk.wav';
import RFIndependent from '../images/ListenChooseRelevant/Lesson1.2/images/independent.jpg';
import BritishFlag from '../images/ListenChooseRelevant/Lesson1.2/images/british_flag.jpg';
import Journalist from '../images/ListenChooseRelevant/Lesson1.2/images/journalist.jpg';

// Barack Obama
import BarackObama from '../images/ListenChooseRelevant/Lesson1.2/audio/BarackObama.wav';
import AmericanFlag from '../images/ListenChooseRelevant/Lesson1.2/images/americanflag.jpg';
import AfroAmerican from '../images/ListenChooseRelevant/Lesson1.2/images/afroamerican.jpg';
import Obama from '../images/ListenChooseRelevant/Lesson1.2/images/obama.jpg';

// Chauffeur
import Chauffeur from '../images/ListenChooseRelevant/Lesson1.2/audio/ChauffeurNY.wav';
import chauffeur from '../images/ListenChooseRelevant/Lesson1.2/images/chauffeur.jpg';
import yellowtaxi from '../images/ListenChooseRelevant/Lesson1.2/images/yellowtaxi.jpg';
import statueofliberty from '../images/ListenChooseRelevant/Lesson1.2/images/statueofliberty.jpg';

// Maya Plesetskaya
import Plesetskaya from '../images/ListenChooseRelevant/Lesson1.2/audio/Plesetskaya.wav';
import balletdancer from '../images/ListenChooseRelevant/Lesson1.2/images/balletdancer.jpg';
import germanyflag from '../images/ListenChooseRelevant/Lesson1.2/images/germanyflag.jpg';
import theatrebolshoi from '../images/ListenChooseRelevant/Lesson1.2/images/theatrebolshoi.jpg';

// Elon Musk
import ElonMusk from '../images/ListenChooseRelevant/Lesson1.2/audio/ElonMusk.wav';
import elonmusk from '../images/ListenChooseRelevant/Lesson1.2/images/elonmusk.jpg';
import spacex from '../images/ListenChooseRelevant/Lesson1.2/images/spacex.jpg';
import tesla from '../images/ListenChooseRelevant/Lesson1.2/images/tesla.jpg';

//Lesson 1.3
// Merkel
import AngelaMerkel from '../images/ListenChooseRelevant/Lesson1.3/Audio/merkel.wav';
import angela_merkel from '../images/ListenChooseRelevant/Lesson1.3/Images/angela_merkel.jpg';
import party from '../images/ListenChooseRelevant/Lesson1.3/Images/party.jpg';
import einstein from '../images/ListenChooseRelevant/Lesson1.3/Images/einstein.jpg';

// Khasan Shah
import shash from '../images/ListenChooseRelevant/Lesson1.3/Audio/shash.wav';
import footballer from '../images/ListenChooseRelevant/Lesson1.3/Images/footballer.jpg';
import turkish_flag from '../images/ListenChooseRelevant/Lesson1.3/Images/turkish_flag.jpg';
import fans from '../images/ListenChooseRelevant/Lesson1.3/Images/fans.jpg';

// Mozart
import mozart from '../images/ListenChooseRelevant/Lesson1.3/Audio/mozart.wav';
import mozartPic from '../images/ListenChooseRelevant/Lesson1.3/Images/mozart.jpg';
import austrian_flag from '../images/ListenChooseRelevant/Lesson1.3/Images/austrian_flag.jpg';
import conductor from '../images/ListenChooseRelevant/Lesson1.3/Images/conductor.jpg';

// cia_agent
import cia_agent from '../images/ListenChooseRelevant/Lesson1.3/Audio/cia_agent.wav';
import CIA from '../images/ListenChooseRelevant/Lesson1.3/Images/CIA.jpg';
import russian_flag from '../images/ListenChooseRelevant/Lesson1.3/Images/russian_flag.jpg';
import secret from '../images/ListenChooseRelevant/Lesson1.3/Images/secret.jpg';

// klitchko
import klitchko from '../images/ListenChooseRelevant/Lesson1.3/Audio/klitchko.wav';
import boxing from '../images/ListenChooseRelevant/Lesson1.3/Images/boxing.jpg';
import ukraine_flag from '../images/ListenChooseRelevant/Lesson1.3/Images/ukraine_flag.jpg';
import klitchkoPic from '../images/ListenChooseRelevant/Lesson1.3/Images/klitchko.jpg';

// mr & ms smith
import mister_missis_smith from '../images/ListenChooseRelevant/Lesson1.3/Audio/mister_missis_smith.wav';
import film from '../images/ListenChooseRelevant/Lesson1.3/Images/film.jpg';
import killers from '../images/ListenChooseRelevant/Lesson1.3/Images/killers.jpg';
import mr_and_missis_smith from '../images/ListenChooseRelevant/Lesson1.3/Images/mr_and_missis_smith.jpg';

var _ = require('lodash');


export const ListenChooseRelevantSet1 = _.shuffle([
    {
        audio: RoberFisk,
        picture: [
            {
                src: RFIndependent,
                name: 'independent_newspaper'
            },
            {
                src: BritishFlag,
                name: 'british_flag'
            },
            {
                src: Journalist,
                name: 'journalist'
            }
        ],
        answers: ['independent_newspaper', 'british_flag', 'journalist']
    },
    {
        audio: BarackObama,
        picture: [
            {
                src: AmericanFlag,
                name: 'american_flag'
            },
            {
                src: AfroAmerican,
                name: 'afro_american'
            },
            {
                src: Obama,
                name: 'obama'
            }
        ],
        answers: ['american_flag', 'afro_american', 'obama']
    },
    {
        audio: Chauffeur,
        picture: [
            {
                src: chauffeur,
                name: 'chauffeur'
            },
            {
                src: yellowtaxi,
                name: 'yellow_taxi'
            },
            {
                src: statueofliberty,
                name: 'statueofliberty'
            }
        ],
        answers: ['chauffeur', 'yellow_taxi', 'statueofliberty']
    },
    {
        audio: Plesetskaya,
        picture: [
            {
                src: balletdancer,
                name: 'balletdancer'
            },
            {
                src: germanyflag,
                name: 'germanyflag'
            },
            {
                src: theatrebolshoi,
                name: 'theatrebolshoi'
            }
        ],
        answers: ['balletdancer', 'germanyflag', 'theatrebolshoi']
    },
    {
        audio: ElonMusk,
        picture: [
            {
                src: elonmusk,
                name: 'elonmusk'
            },
            {
                src: spacex,
                name: 'spacex'
            },
            {
                src: tesla,
                name: 'tesla'
            }
        ],
        answers: ['elonmusk', 'spacex', 'tesla']
    }
]);


export const ListenChooseRelevantSet2 = _.shuffle([
    {
        audio: AngelaMerkel,
        picture: [
            {
                src: angela_merkel,
                name: 'angela_merkel',
                attr:'<a href="https://www.flickr.com/photos/primeministergr/4416242651/in/photolist-a5GPcM-XSmbdQ-a5KFsL-25fR1zS-2hUSth9-7Jfp5F-a5KFzS-a5GNZt-a5GQk6-2gjf8ZK-2hUUVVZ-a5GQ4e-7JfonX-7JjiZU-oFN9fb-FYaNQG-25fR1oE-7Jfpar-7JjjwG-BQTgBu-25fR1D9-7Jfoup-7JjjWG-2hUW6t5-BG36fR-BeU2rW-ACAJcB-25fR1Rd-ByGUVt-7JjjrA-Bwqi5W-L7DN5U-L7DNem-7JjjC5-7JjjmW-KBfkSr-HbQTF9-aHtXtT-KB3vDq-HtZy6n-TNm6y1-26txeGm-KB3vtf-ppRfwt-2iqbNiP-2iqbNfc-2iq9efv-ACA8rA-KB3vwm-AMgVZm" target="_blank">"Συνάντηση με την Γερμανίδα Καγκελάριο, Angela Merkel"</a> by <a href="https://www.flickr.com/photos/primeministergr/" target="_blank">Αλέξης Τσίπρας Πρωθυπουργός της Ελλάδας</a>, <a>russian language</a>, <a href="https://www.flickr.com/" target="_blank">flickr</a> is licensed under <a href="http://creativecommons.org/licenses/by/4.0" target="_blank">CC BY 4.0</a>'
            },
            {
                src: party,
                name: 'party',
                attr:'<a href="https://www.flickr.com/photos/european_parliament/48180207532/in/photolist-2gpwa8j-uEkpLu-RjUgoc-B6RkJL-2ev6WYh-JWN4jN-mT7Wso-nQigjL-mT8an1-y5zK2-avC8V1-FMjtMU-mHBjd2-zgrgvr-bj9UZ4-HTmTVY-W6fqRX-26KjzCs-LetyU-MX4Bcm-5W4KrA-sbt4VS-LetUG-LetH9-LeJba-2iGUmt2-2iGUmsk-2iGRBp2-2gpvMaW-LetSL-uobZDu-5HpChW-PGvQcz-rVhXnz-EfHHep-LeJ4F-FYqeK2-GkUr5x-SeqZCG-26LKXAj-HTmU2E-kHDvn-2iGVUrj-2iGRBpY-2gpw9sw-7j2uVj-2gpvMyX-5Hkipi-2gpw9zA-PwPRL4" target="_blank">"European Parliament"</a> by <a href="https://www.flickr.com/photos/european_parliament/" target="_blank">European Parliament</a>, <a>russian language</a>, <a href="https://www.flickr.com/" target="_blank">flickr</a> is licensed under <a href="http://creativecommons.org/licenses/by/4.0" target="_blank">CC BY 4.0</a>'
            },
            {
                src: einstein,
                name: 'einstein',
                attr:'<a href="https://www.flickr.com/photos/124561666@N02/14381506326/in/photolist-nUQYMC-4kxiL3-2hHZ1zH-qkuEZ2-5GCvnm-4bLwZr-56i9TW-2gF7X1n-6zsdSE-vFz6Ug-LeK5B9-2gmBF3x-2hUdxT9-2hWfdrF-5JbH7D-AJxUBg-9hQcmE-5ugaCp-5P8jkF-fFojfM-4Ba4C9-dURxpp-auyHwX-nv4qLG-an78CN-egS9e7-buombo-5JfL2h-ec94wX-dURjze-Wkt6U-2YLSE-4yWbj4-6Cp6yw-5WvYj6-56i9Pw-56dXFi-56dXGz-7BSFGD-Ya1z36-8MymeD-dq8tq-d5b4Jj-7rwCKQ-32aLpi-pnj81Q-2YKfT-BSdN-56i9v3-dFLjU9" target="_blank">"einstein"</a> by <a href="https://www.flickr.com/photos/124561666@N02/" target="_blank">TNS Sofres</a>, <a>russian language</a>, <a href="https://www.flickr.com/" target="_blank">flickr</a> is licensed under <a href="http://creativecommons.org/licenses/by/4.0" target="_blank">CC BY 4.0</a>'
            }
        ],
        answers: ['angela_merkel', 'party', 'einstein']
    },
    {
        audio: shash,
        picture: [
            {
                src: footballer,
                name: 'footballer',
                attr:'<a href="https://www.flickr.com/photos/gowestphoto/3921716313/in/photolist-6YxPCv-8yyuYz-6YBLpd-5AgtRJ-fHFvFj-8yyvLi-gPCdUi-8yyvuz-crbS3W-g9FLu1-fHFCeE-8esNCe-6YAZT2-6YEVNo-8yyux2-yxVuqR-yfFRRK-5rusyU-6YAVez-GWapGH-yxWjjB-yfzRWh-GQb6LH-A8ZAz9-zepAba-AcfkLZ-4GABBK-6YF2mm-2Xig7i-xAaSBf-AcfoXt-8yBxz1-gPDqsV-8yyviD-pDF429-fCswh8-8yyxtB-pncmfg-2hmC8QU-6YxLDr-a4hj5c-8yBzaJ-8xnYS6-fHpiKD-8yyxJn-pDqP3z-8x85Bc-oJeehp-8yBA2N-dh8EHq" target="_blank">"World Cup Qualifiers"</a> by <a href="https://www.flickr.com/photos/gowestphoto/" target="_blank">Tsutomu Takasu</a>, <a>russian language</a>, <a href="https://www.flickr.com/" target="_blank">flickr</a> is licensed under <a href="http://creativecommons.org/licenses/by/4.0" target="_blank">CC BY 4.0</a>'
            },
            {
                src: turkish_flag,
                name: 'turkish_flag',
                attr:'<a href="https://www.flickr.com/photos/allenthepostman/1091886634/in/photolist-2EucRC-iVzKt-fnaGyZ-HsxxNA-864hER-3Vrdwc-89jJyn-dT6dXY-867qPo-864fYr-N3UtH-2hKrtsh-2hRY9Bz-hs6fDv-2hXqLCo-2hXqLR4-2hXrNB7-2hKrvKd-2hS2EKd-2hXrNzi-2kthtj-2hKnHL6-2hKrwCq-2hKqnGk-3Bv7V-s518dh-vrPxBr-2hqdMu5-coU2z-2hrHEYA-2hS2ENz-2hD9wi7-zRJQGn-2hqfRnp-2aTTEEX-867rEE-8xypd2-Do6Zn-ydiwB-864gLt-74PGkM-5496kG-864e6B-8z3mwk-E3dMB-8QWLwf-6SQ7FH-eRYJj2-cjQATy-fnR3PZ" target="_blank">"Flag"</a> by <a href="https://www.flickr.com/photos/allenthepostman/" target="_blank">allen watkin</a>, <a>russian language</a>, <a href="https://www.flickr.com/" target="_blank">flickr</a> is licensed under <a href="http://creativecommons.org/licenses/by/4.0" target="_blank">CC BY 4.0</a>'
            },
            {
                src: fans,
                name: 'fans',
                attr:'<a href="https://www.flickr.com/photos/cyprienhauser/49124195566/in/photolist-2hQWkT5-fvZa6-hmRC8-26rcKDm-dWoBRJ-HQisEs-asMRGF-asMRGt-bKBFwr-gNvwM-DKpKeu-6T4WjZ-Mid6Bu-bpi7Y2-GhThKm-z7LCUA-KEw9nH-ds2GgN-9cBBqx-gNvw9-8vyH8E-8adpgc-gNvtw-HQduQi-9KYaDd-byDqFe-dYoGZZ-TBNARp-JLryeX-25EopFu-bBV1SC-bBV1bs-27jSGew-6SqYwu-cqkBzo-d8hx4G-5BaxwB-o6C6tZ-dYxqoV-217PGbE-8p8kEB-dTfqfN-4hGTVn-dYoGx4-HQduKP-p5udDH-5TuLBa-c5vfd7-g6Qm6-5tM9S3" target="_blank">"Russia, Moscow - Red like the FC Spartak fans - September 2018"</a> by <a href="https://www.flickr.com/photos/cyprienhauser/" target="_blank">Cyprien Hauser</a>, <a>russian language</a>, <a href="https://www.flickr.com/" target="_blank">flickr</a> is licensed under <a href="http://creativecommons.org/licenses/by/4.0" target="_blank">CC BY 4.0</a>'
            }
        ],
        answers: ['footballer', 'turkish_flag', 'fans']
    },
    {
        audio: mozart,
        picture: [
            {
                src: mozartPic,
                name: 'mozart',
                attr:'<a href="https://www.flickr.com/photos/130720149@N05/17833489092/in/photolist-taThZS-7rMPVg-4XRuPS-7ttGZ3-7tpeat-7XDVFL-7tpEKR-7rRCQ7-7rRACA-6FFsyw-8iRGJD-7ttAbW-duvUkB-8NHwUw-7ttEKW-7s1ha9-7ttyT1-rcBum-7tpKMF-rcC15-7ttxYm-6FFxrb-7rZiKk-7s4mhw-7s1cUb-rcC8J-7rZroF-6FFoUb-7rXmU6-rcE4h-7rZDJK-7ttG2Y-7s17Fd-7rXvRV-6sE43H-7tpCjT-6FBpKt-7rZQA5-rcDRe-7tpAtn-7rZ6Ft-7s4aBL-7rZcDr-4yffj8-7rRNXf-psxX9g-7rZD12-rVf18-8Bc54R-7rXu1R" target="_blank">"Mozart Wolfgang Amadeus Various Artists Dance Plant Records Inc."</a> by <a href="https://www.flickr.com/photos/130720149@N05/" target="_blank">iClassical Com</a>, <a>russian language</a>, <a href="https://www.flickr.com/" target="_blank">flickr</a> is licensed under <a href="http://creativecommons.org/licenses/by/4.0" target="_blank">CC BY 4.0</a>'
            },
            {
                src: austrian_flag,
                name: 'austrian_flag',
                attr:'<a href="https://www.flickr.com/photos/jamescridland/7813572370/in/photolist-cUsAR1-t8bXUi-6EJ58p-9xn5DA-9HTGm-3t616-XPryAJ-puHtMm-4zrod4-2514H2w-cRQ3ay-cRQ3BG-cRQ33Y-cRQ3vq-Naatsx-4X8TCb-7fxkYL-2aSR11x-Xpeiny-SdbVBd-WGpaeD-ceYFNQ-QQBYwt-FP7fsT-Q8AFUd-2hWrJM-94dQKx-pMgTZ8-2hKrtz6-2hKrtsh-2hRY9Bz-2hXqLCo-RjveGX-SDP37u-PFfiK-5YHyC-Cv5sq6-CZb2kG-q513Tm-CsYZYi-T5V3mS-CsYKig-CsYXhg-CRVzys-CsYPik-D3G7ja-RR1nrK-T3jR5i-RXhBX1-RR1ahV" target="_blank">"Austrian flag"</a> by <a href="https://www.flickr.com/photos/jamescridland/" target="_blank">James Cridland</a>, <a>russian language</a>, <a href="https://www.flickr.com/" target="_blank">flickr</a> is licensed under <a href="http://creativecommons.org/licenses/by/4.0" target="_blank">CC BY 4.0</a>'
            },
            {
                src: conductor,
                name: 'conductor',
                attr:'<a href="https://www.flickr.com/photos/rob_swystun/8098008837/in/photolist-dkApU2-4FRtTt-67QMC9-Y3a4oC-KcT4m-bXKdMb-hpTtW-cVFCHY-Kb2miY-aaV7Ve-QWs1xj-8akMVc-HMKLpZ-853TDW-bs1ie-7SU3fT-pw2enJ-9NnVFc-cJSJT9-abkTJ-YBQ6Tn-9wFoRP-82HnNN-BaYyJ3-2hvX9Eg-KPQFBD-mUj6J-A2uiYG-5BvZ9Q-aXNBRk-n4ZLz-du6mAy-af1ST-MuT1J5-NGKRGf-A5ECM-eb12e-eiypsm-8FXWuT-27VNrnc-e1KqwJ-4FaQwJ-Xv8LVo-852iuH-e1DMc6-e1DMav-b33r1v-mUja5-KPQEUg-mUjdg" target="_blank">"Conductor"</a> by <a href="https://www.flickr.com/photos/rob_swystun/" target="_blank">Rob Swystun</a>, <a>russian language</a>, <a href="https://www.flickr.com/" target="_blank">flickr</a> is licensed under <a href="http://creativecommons.org/licenses/by/4.0" target="_blank">CC BY 4.0</a>'
            }
        ],
        answers: ['mozart', 'austrian_flag', 'conductor']
    },
    {
        audio: cia_agent,
        picture: [
            {
                src: CIA,
                name: 'CIA',
                attr:'<a href="https://www.flickr.com/photos/121483302@N02/13912590316/in/photolist-ncpEoQ-6X28mA-6WX7fg-8z3Fss-AhbSe5-YoJmTp-yPCH4S-6WX51P-6X25KN-23duXyn-24zEApR-XahKrX-6WX7rT-TpRyhQ-6WX5ZK-6X27B9-3Ym8Sz-P8xLof-9jZXY5-9mvGim-AGpTki-vNewsY-5DX4jt-2iwRipY-7EySjp-2iwNGh9-748vsW-2ixmEeq-anUgst-7EzyhT-7Ezskx-9jNAcY-7EzsPn-ofY8Vu-7BgDCD-Pek9PS-9naAED-9ndCGy-58mYtz-9HitbN-2iTCivp-CY8Psf-dY6z7A-2hGzd16-L9BxYR-LYjBYR-Qp3Bed-9Ltft6-8z7ndU-8Bgebn" target="_blank">"CIA Logo"</a> by <a href="https://www.flickr.com/photos/rob_swystun/" target="_blank">Global Panorama</a>, <a>russian language</a>, <a href="https://www.flickr.com/photos/121483302@N02/" target="_blank">flickr</a> is licensed under <a href="http://creativecommons.org/licenses/by/4.0" target="_blank">CC BY 4.0</a>'
            },
            {
                src: russian_flag,
                name: 'russian_flag',
                attr:'<a href="https://www.flickr.com/photos/142872259@N05/31076075278/in/photolist-Pm61vm-4PHbuq-489qBZ-eCfXmU-eF3mY9-oomaVT-eKMit2-23uCPgD-ghZ2Kh-eKMiqH-eF3mZ3-23LSP5m-eHoLPv-UwbBfr-26vt6dd-KzHWqM-28b1t9U-29c6t9h-KJFdpH-26vvmK1-4YfSkR-4YfShi-2hXQXyp-5rUho1-5rPVYz-2abTkQe-xidoh-6eR3hz-SALEej-27NXb9V-2asPbNc-23C9SSK-6kp4rw-xuiVF-QLn5D2-2h6Egr5-25cB7ck-5SS6g4-ssKBF-2j24fgm-n79k9-8GtNWR-MaG4Q-GUP3p-7yuQFL-8ET6e1-GPp44-tLRgh-8GZzEj-3eJbY5" target="_blank">"Russia"</a> by <a href="https://www.flickr.com/photos/142872259@N05/" target="_blank">Balkan Photos</a>, <a>russian language</a>, <a href="https://www.flickr.com/photos/121483302@N02/" target="_blank">flickr</a> is licensed under <a href="http://creativecommons.org/licenses/by/4.0" target="_blank">CC BY 4.0</a>'
            },
            {
                src: secret,
                name: 'secret',
                attr:'<a href="https://www.flickr.com/photos/restricteddata/6322992392/in/photolist-aCJZmd-pwTrte-mPP5t-6wia7k-6witHx-6wipyX-6wns6y-3dhjnY-3dhgju-6Ctgpt-s1uqwC-d9CoP1-77PSK3-3dhiiC-3dcbqp-6wnrsU-jtMau9-Q9fYiJ-3dguTy-UguWYD-2hPeFXw-2hPNw1r-yMCjz6-27PFpNR-Q2bZ2Q-2hPuiSX-BL7tQq-HsULVU-2gA2W6w-8UcSNJ-MzvZYc-S8bAuh-dsygcf-27bzjst-5N5HWT-2ivu4Mr-byeHcQ-GBMnRH-NNQCSp-29V5NjF-2iVcpFt-6fHuN7-J5BWXB-XhZoU8-rLdcxw-2i5vXLR-9ft7ci-s3J8t4-r6Mq57-23VKC1h" target="_blank">"Blurred "SECRET" stamp"</a> by <a href="https://www.flickr.com/photos/restricteddata/" target="_blank">Alex Wellerstein</a>, <a>russian language</a>, <a href="https://www.flickr.com/photos/121483302@N02/" target="_blank">flickr</a> is licensed under <a href="http://creativecommons.org/licenses/by/4.0" target="_blank">CC BY 4.0</a>'
            }
        ],
        answers: ['CIA', 'russian_flag', 'secret']
    },
    {
        audio: klitchko,
        picture: [
            {
                src: klitchkoPic,
                name: 'klitchkoPic',
                attr:'<a href="https://www.flickr.com/photos/usembassykyiv/11418353343/in/photolist-ip13D6-ioZooQ-ioZoJG-ip14KV-ioZqvW-w3Gxkg-ioZq3b-2aqjr1C-ioZnDA-297tgRM-ioZj8B-2auxxs4-ioZnTS-ip12ae-2auxyS8-ZwhwY6-ZwhAYk-Zwhw76-Yv3VYt-YrCjw3-Z8sD2A-Z8sB8A-Z8sDDN-Yv3WiB-Zs1v3J-YrCpHL-Yv3WKP-Zwhz5R-YrCotS-Zwhtm6-Z8sCob-ioZkca-2auxzfT-ioZpTq-ioZhwF-wZ9ziG-w3GynB-wJRhBN-w3xYMs-w3xZSJ-ZttSmG-ZwhvDx-ZwhxXv-ZwhvgD-ZwhBHg-ZwhBbp-Zwhzs4-Z8sCPS-YrCo7u-YrCqKf" target="_blank">"Senator McCain in Kyiv, Dec. 14, 2013"</a> by <a href="https://www.flickr.com/photos/usembassykyiv/" target="_blank">U.S. Embassy Kyiv Ukraine</a>, <a>russian language</a>, <a href="https://www.flickr.com/photos/121483302@N02/" target="_blank">flickr</a> is licensed under <a href="http://creativecommons.org/licenses/by/4.0" target="_blank">CC BY 4.0</a>'
            },
            {
                src: boxing,
                name: 'boxing',
                attr:'<a href="https://www.flickr.com/photos/worldseriesboxing/16548874761/in/photolist-rdniUV-bxvsYi-bjDFEE-bjDFUo-CVn6wP-q8YGLP-xb3XRc-bjDFQE-bxyyYH-6yuGgi-4vn4oz-bjDFzj-x6yh32-y18Gib-bxyyVv-y3rzZF-y47KFx-LmbLTk-bxyDHT-bxyyPP-y17YTN-bxyyR6-pVxCQN-LemZDD-xbAYJg-q8YHhi-q8Nu4k-4vn44g-7GUX6R-xbB64F-wTyeYa-xKWGqp-xKQuJu-y3s7nz-x6yUot-xKPS1S-x6yndx-xKVXcv-xKQWyf-y2yupS-xKQPzq-xKWbun-x6yyoi-xahiHJ-LbW3aU-xbBjLR-wTrE1S-webzUt-we2Jzy-xb4gpP" target="_blank">"12/02/2015 Week 5 Group A Russian Boxing Team vs British Lionhearts"</a> by <a href="https://www.flickr.com/photos/worldseriesboxing/" target="_blank">WorldSeriesBoxing</a>, <a>russian language</a>, <a href="https://www.flickr.com/photos/121483302@N02/" target="_blank">flickr</a> is licensed under <a href="http://creativecommons.org/licenses/by/4.0" target="_blank">CC BY 4.0</a>'
            },
            {
                src: ukraine_flag,
                name: 'ukraine_flag',
                attr:'<a href="https://www.flickr.com/photos/juanedc/19615777793/in/photolist-vTnZkp-69mdXv-phD2sr-6vaaDY-H1KtyD-GXNsb1-5nbLzf-nV5naf-LchFTu-2aki2zm-cdh7AA-9oVqYK-auFLnp-koYu8n-9oYEEj-KpE2ab-CgEawu-L4d8yy-KxDSw1-LkauoS-6gmeCK-ihdvx-KxDZqw-LnJ2ap-LkaiRQ-9nhoyA-25rpyJ6-Lkapws-i8uxQz-q8NiA7-21i7W3g-kfhaYU-ebGuH8-a6E8Ld-P1ZH76-2h7ip3x-em3WPb-26gZHv7-p1NBMi-ZwbbS-KxDTfL-9ZemuJ-hSxZ1P-28gTvdC-EvFkNQ-dNEzht-25rpyrH-25nKnwm-25rpPFF-Kfe5uj" target="_blank">"Україна"</a> by <a href="https://www.flickr.com/photos/juanedc/" target="_blank">Juanedc.com</a>, <a>russian language</a>, <a href="https://www.flickr.com/photos/121483302@N02/" target="_blank">flickr</a> is licensed under <a href="http://creativecommons.org/licenses/by/4.0" target="_blank">CC BY 4.0</a>'
            }
        ],
        answers: ['klitchkoPic', 'boxing', 'ukraine_flag']
    },
    {
        audio: mister_missis_smith,
        picture: [
            {
                src: film,
                name: 'film',
                attr:'<a href="https://www.flickr.com/photos/mattx27/4894941033/in/photolist-8sxRr4-bQBYje-bBHhsb-cYSki-bBH179-bQBDSP-bBH1uA-bQBEfM-buAmaq-bQBFSn-bQBCP4-bQBCr4-bHv5sF-bBGX7A-bQBFvB-buAjUL-bBGXrQ-bBHimm-bQBZda-8bF1iW-bQBRgx-9gMhKr-bQBUxe-bQBSPr-28sS91A-bBHfz5-bQBXJc-bBHc2N-9d98Lv-2gCpkuw-bQBZMp-bBHfX5-bQBYWM-bQC17k-bBHgj7-98wcbr-bQBRxx-bBHbkA-bBHcCC-bBHb13-bBHaE1-7ET8X2-bQBVmB-bBHd1C-5eXdLt-JXtXAS-XXhEZ4-qQR4FS-c1sfJ3-3daT7w" target="_blank">"film effect"</a> by <a href="https://www.flickr.com/photos/mattx27/" target="_blank">Matt</a>, <a>russian language</a>, <a href="https://www.flickr.com/photos/121483302@N02/" target="_blank">flickr</a> is licensed under <a href="http://creativecommons.org/licenses/by/4.0" target="_blank">CC BY 4.0</a>'
            },
            {
                src: killers,
                name: 'killers',
                attr:'<a href="https://www.flickr.com/photos/7184189@N04/3745251335/in/photolist-6GXoJT-7C2V2d-7tFqxL-65aWS1-7iwxtp-9fo1Ma-FM3x3n-P7zn5d-3u5BVr-68x2zt-8SraX-dmFeeb-77hrbx-4tvxq5-6jgtDe-77hqZH-yanfH-6rLjsZ-fv1nx1-5Zg2CF-pnT9K-7SjVRX-5oNz38-hNVE6T-6o8YMx-4SaEV-2iAmtY-bym4Ni-53DhnF-2MPo8U-jqrf4-bLxXj-3KzkKe-dsdUT4-f8W1H-27eucM-EQ7pq-77mn91-64iRKh-PtsdU-nSXWN-FM3xy2-2i9F5tS-3KDGZ7-53Hptd-iPAwwv-8RV2Lj-4nFTw-53Dg6t-6dgoaA" target="_blank">"Achtung Killer"</a> by <a href="https://www.flickr.com/photos/7184189@N04/" target="_blank">knuton</a>, <a>russian language</a>, <a href="https://www.flickr.com/photos/121483302@N02/" target="_blank">flickr</a> is licensed under <a href="http://creativecommons.org/licenses/by/4.0" target="_blank">CC BY 4.0</a>'
            },
            {
                src: mr_and_missis_smith,
                name: 'mr_and_missis_smith',
                attr:'<a href="https://www.flickr.com/photos/manfrys/2134600247/in/photolist-4fCohx-4CxacQ-nEkL9X-bCKUYj-e6vGoo-e6vGou-e6gCtE-2gRhgfF-8hkiJZ-e82Q1v-e6gD6b-e6gCu9-e6gCuL-e6gCvb-e6gCvu-e6gCw1-e6gD6u-e6gD71-2gQuRLx-auWwBn-6tham9-3arc9Z-bj3UY8-e4aD6D-e4aGmD-e4gn6h-e4aMrB-24JiKMP-3BbMQd-CmtYw-ecixPG-eccMZx-eccTfR-nD45AB-nXk4ND-dhsGPg-4bk4kP-jzKn6-nYawGm-8H6qZj-8H3sWv-8H6ECh-nDhZYo-nDhCEa-nVE9Fs-nVu6jr-nVFTpJ-nVFTwN-nDhZV7-2j2B72n" target="_blank">"Brad Pitt &amp; Angelina Jolie"</a> by <a href="https://www.flickr.com/photos/manfrys/" target="_blank">Antonio Manfredonio</a>, <a>russian language</a>, <a href="https://www.flickr.com/photos/121483302@N02/" target="_blank">flickr</a> is licensed under <a href="http://creativecommons.org/licenses/by/4.0" target="_blank">CC BY 4.0</a>'
            }
        ],
        answers: ['film', 'killers', 'mr_and_missis_smith']
    }
]);