import larryPage from '../images/MTWTP/lesson1.1/larry_page.jpg';
import jeffBezos from '../images/MTWTP/lesson1.1/jeff_bezos.jpg';
import elonMusk from '../images/MTWTP/lesson1.1/elon_musk.jpg';
import jackMa from '../images/MTWTP/lesson1.1/jack_ma.PNG';
import billGates from '../images/MTWTP/lesson1.1/gates.PNG';
import timCook from '../images/MTWTP/lesson1.1/tim_cook.jpg';
let _ = require("lodash");


export const set1 = _.shuffle([
    {
        picture: larryPage,
        engName: 'Larry Page',
        rusName: 'Ларри Пейдж',
        companyEng: 'Google',
        companyRus: 'Гугл',
        attr:'<a href="https://www.flickr.com/photos/stickergiant/14372423960/in/photolist-nU3qV7-4PoqVF-Curwec-2if631L-2if3DqG-6pnKBf-5oDQZg-4Q6mGV-SxGdRg-ejv2rp-QNyoq2-2gRk7w8-SxFS6t-Eqm5t8-VfHro-7Cq4Gv-2ibCm5U-7HiuKG-U1pdqR-SxGcTz-Js5n6Z-6cG3UQ-229Xy7R-2if72Y5-6piTQK-6qSK7C-2iuXxyL-PXtMVv-QkBs6M-QCBiUK-SxFUSk-SabYr3-ejv2k6-rirwdd-3KT3bJ-24fw6Jg-5csnx1-QZogQV-JDhvsr-rzPgon-RgeinU-23g2Nh1-2in2emK-jbMHe4-rxHe7u-rPB1Ze-6DXEzw-SbP3CM-SabKVm-4tci8s" target="_blank">"Larry Page Quote"</a> by <a href="https://www.flickr.com/photos/stickergiant/" target="_blank">StickerGiant Custom Stickers &amp; Labels</a>, <a>russian language</a>, <a href="https://www.flickr.com/" target="_blank">flickr</a> is licensed under <a href="http://creativecommons.org/licenses/by/4.0" target="_blank">CC BY 4.0</a>'
    },
    {
        picture: jeffBezos,
        engName: 'Jeff Bezos',
        rusName: 'Джеф Безос',
        companyEng: 'Amazon',
        companyRus: 'Амазон',
        attr:'<a href="https://www.flickr.com/photos/stickergiant/14536026436/in/photolist-o9uWes-2cWTw2M-4z569c-jR1PuL-XPF5pg-2hiNf2Q-fsEHuf-2hfmfPj-CXEft-FvTFit-ZMXaKN-zYD1-5ZvnV-FACdQ3-zYDY-zYCX-zYEH-zYE6-2h5S6Dk-ESL2c-zY6v-CXEmp-exQZ9-uC8AkW-dxmx63-LDRN1m-KKWXit-3URNf-fpmuXa-LxhjZq-ZKXGrJ-GMFBt8-KtvA99-F1Su3u-GQCg6N-5Zvnq-asTaWb-8pMWSA-29tz2QS-GQCha1-mGZ3B3-AGhV-2cRo1iF-o1CL23-W8i9DR-ESAT3-dn3m5o-GKmN7o-GKmDws-fXzseQ/" target="_blank">"Jeff Bezo Quote"</a> by <a href="https://www.flickr.com/photos/stickergiant/" target="_blank">StickerGiant Custom Stickers &amp; Labels</a>, <a>russian language</a>, <a href="https://www.flickr.com/" target="_blank">flickr</a> is licensed under <a href="http://creativecommons.org/licenses/by/4.0" target="_blank">CC BY 4.0</a>'
    },
    {
        picture: elonMusk,
        engName: 'Elon Musk',
        rusName: 'Илон Маск',
        companyEng: 'Tesla',
        companyRus: 'Тесла',
        attr:'<a href="https://www.flickr.com/photos/oninnovation/4335002020/in/photolist-7B5259-7B19KB-7B4Vb9-7B1erv-7B1aM4-7B1dQe-7B1bPZ-7B4XAN-7B4ThN-7B4TWo-7B1aaX-7B1aHX-7B4X4C-7B4RXW-7B1dTM-7B16c8-7B18Ui-7B4Z9U-7B4Ufs-7B4ZRf-7B4SEU-7B4Wbb-7B184D-7B4Xr3-7B4Wey-7B18fD-2gK5JZz-2hd35Lt-6jjGvF-2gcGGxW-FVdP4C-D1CLd5-jGnefs-jGj5F8-jGjV5v-jGk6E8-jGj92X-jGncyw-jGmqQ1-jGn24U-jGn47w-jGmv41-5uzuFL-YqFGaA-2ishXie-cuYoEC-Gqz2Qc-hjbTxg-qwK7Rm-dGPSLj" target="_blank">"OnInnovation Interview: Elon Musk"</a> by <a href="https://www.flickr.com/photos/oninnovation/" target="_blank">OnInnovation</a>, <a>russian language</a>, <a href="https://www.flickr.com/" target="_blank">flickr</a> is licensed under <a href="http://creativecommons.org/licenses/by/4.0" target="_blank">CC BY 4.0</a>'
    },
    {
        picture: jackMa,
        engName: 'Jack Ma',
        rusName: 'Джек Ма',
        companyEng: 'Ali Baba',
        companyRus: 'Али Баба',
        attr:'<a href="https://www.flickr.com/photos/world_trade_organization/44144657905/in/photolist-2afUUPt-59tJPF-UcHtEk-Yb9KnJ-pvoSK6-eEDY3Y-8FmvKw-qMoTZ3-syTsT7-nN9Y2w-TXQzk5-eXYjNB-4jQxnL-p5VmaL-2axQZyU-2bzcdxd-95RBTH-2bzcd1w-r4YTAk-Yb7o5C-gfXxnw-2aMk6WX-pjFi7Y-pkeShu-phF25d-59tJsM-59tJUP-59xXVu-59tJDD-dAApPT-59xY1f-pE5mFG-nHa6uU-T2yAKr-pLzota-Yc7EL7-XfgnQx-pLvnuX-q3LzBi-q3VrmB-q42sHH-p7cf1r-XSGRJj-pLy3CG-4H2KhX-q1Qx91-q52UsS-p7H9rw-jAYaZq-pLF9my" target="_blank">"WTO Public Forum 2018: Trade 2030"</a> by <a href="https://www.flickr.com/photos/world_trade_organization/" target="_blank">World Trade Organization</a>, <a>russian language</a>, <a href="https://www.flickr.com/" target="_blank">flickr</a> is licensed under <a href="http://creativecommons.org/licenses/by/4.0" target="_blank">CC BY 4.0</a>'
    },
    {
        picture: billGates,
        engName: 'Bill Gates',
        rusName: 'Билл Гейтс',
        companyEng: 'Microsoft',
        companyRus: 'Майкрософт',
        attr:'<a href="https://www.flickr.com/photos/oninnovation/4996836818/in/photolist-8By6uW-8BuYYD-4oZXwu-4p113o-4tyL8o-4oZYK5-4oVYbk-4oZZyu-4oVVjT-5v1ZK6-4oVWDD-39fwS-hxDP8K-8By6DA-2j5eZmB-8By6zs-23KZcTt-8BuZ3v-FBZTf7-7kFK9e-eh74Tx-8By6t3-oLxiGB-4X1SHe-9dN4dg-9dN4hF-q3rn4k-WuiiEZ-dXmDZg-p6Pu7h-8BuYVD-pLdCy7-4oVKn2-p6PuSW-pLbzEr-p6ScWp-pLdDqY-4oZYhY-p6PwcQ-pLby4v-4ZYWRL-p6Pv61-4H9c99-pLbzvZ-4oVN18-4oZTSQ-6tscX-4oVNEF-4oVP4R-6tscW" target="_blank">"Bill Gates - OnInnovation.com Interview"</a> by <a href="https://www.flickr.com/photos/oninnovation/" target="_blank">OnInnovation</a>, <a>russian language</a>, <a href="https://www.flickr.com/" target="_blank">flickr</a> is licensed under <a href="http://creativecommons.org/licenses/by/4.0" target="_blank">CC BY 4.0</a>'
    },
    {
        picture: timCook,
        engName: 'Tim Cook',
        rusName: 'Тим Кук',
        companyEng: 'Apple',
        companyRus: 'Аппл',
        attr:'<a href="https://www.flickr.com/photos/home_of_chaos/18075628855/in/photolist-txhjHn-Ajf3uA-2hNNoBb-2hNQgxk-2hNNfYW-2hNMERx-2hNRPYr-sAgoeS-2hNNew7-2hNQgyC-2hNNez3-2hNRh8C-Cp1bGJ-2hNRPYM-RmVT3X-agvazs-bWmqBT-acN9q-cE6ord-5YwqEq-xCgY8-ar7zB8-4EUR1B-DZ9NLC-Tvqamy-ZZev1T-Jg4Kym-TDNAMg-Loy7Y3-Yf4Y8q-26CoxGA-XRJBTX-bC9GZZ-yZVxzc-26tjxx9-C6zsPT-C8dr96-RpHwT2-sZ89W-oWDd2k-pdSr6B-E298uo-6ZNGSN-G7NAyp-amUfxi-PgMhuK-fjGZUu-fjsQw8-sZ6V6-5MBAs6" target="_blank">"Tim Cook, painted portrait _DDC2306"</a> by <a href="https://www.flickr.com/photos/home_of_chaos/" target="_blank">thierry ehrmann</a>, <a>russian language</a>, <a href="https://www.flickr.com/" target="_blank">flickr</a> is licensed under <a href="http://creativecommons.org/licenses/by/4.0" target="_blank">CC BY 4.0</a>'
    }
]);