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
                name: 'angela_merkel'
            },
            {
                src: party,
                name: 'party'
            },
            {
                src: einstein,
                name: 'einstein'
            }
        ],
        answers: ['angela_merkel', 'party', 'einstein']
    },
    {
        audio: shash,
        picture: [
            {
                src: footballer,
                name: 'footballer'
            },
            {
                src: turkish_flag,
                name: 'turkish_flag'
            },
            {
                src: fans,
                name: 'fans'
            }
        ],
        answers: ['footballer', 'turkish_flag', 'fans']
    },
    {
        audio: mozart,
        picture: [
            {
                src: mozartPic,
                name: 'mozart'
            },
            {
                src: austrian_flag,
                name: 'austrian_flag'
            },
            {
                src: conductor,
                name: 'conductor'
            }
        ],
        answers: ['mozart', 'austrian_flag', 'conductor']
    },
    {
        audio: cia_agent,
        picture: [
            {
                src: CIA,
                name: 'CIA'
            },
            {
                src: russian_flag,
                name: 'russian_flag'
            },
            {
                src: secret,
                name: 'secret'
            }
        ],
        answers: ['CIA', 'russian_flag', 'secret']
    },
    {
        audio: klitchko,
        picture: [
            {
                src: klitchkoPic,
                name: 'klitchkoPic'
            },
            {
                src: boxing,
                name: 'boxing'
            },
            {
                src: ukraine_flag,
                name: 'ukraine_flag'
            }
        ],
        answers: ['klitchkoPic', 'boxing', 'ukraine_flag']
    },
    {
        audio: mister_missis_smith,
        picture: [
            {
                src: film,
                name: 'film'
            },
            {
                src: killers,
                name: 'killers'
            },
            {
                src: mr_and_missis_smith,
                name: 'mr_and_missis_smith'
            }
        ],
        answers: ['film', 'killers', 'mr_and_missis_smith']
    }
]);