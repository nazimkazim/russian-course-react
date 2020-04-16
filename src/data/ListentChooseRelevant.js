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