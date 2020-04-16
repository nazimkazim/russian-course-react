// Robert fisk
import RoberFisk from '../images/ListenChooseRelevant/Lesson1.2/audio/RobertFisk.wav';
import RFIndependent from '../images/ListenChooseRelevant/Lesson1.2/images/independent.jpg';
import BritishFlag from '../images/ListenChooseRelevant/Lesson1.2/images/british_flag.jpg';
import Journalist from '../images/ListenChooseRelevant/Lesson1.2/images/journalist.jpg';

// Barack Obama
import BarackObama from '../images/ListenChooseRelevant/Lesson1.2/audio/BarackObama.wav'
import AmericanFlag from '../images/ListenChooseRelevant/Lesson1.2/images/americanflag.jpg'
import AfroAmerican from '../images/ListenChooseRelevant/Lesson1.2/images/AfroAmerican.jpg'
import Obama from '../images/ListenChooseRelevant/Lesson1.2/images/obama.jpg'

// Chauffeur
import Chauffeur from '../images/ListenChooseRelevant/Lesson1.2/audio/ChauffeurNY.wav'
import chauffeur from '../images/ListenChooseRelevant/Lesson1.2/images/chauffeur.jpg'
import yellowtaxi from '../images/ListenChooseRelevant/Lesson1.2/images/yellowtaxi.jpg'
import statueofliberty from '../images/ListenChooseRelevant/Lesson1.2/images/statueofliberty.jpg'


export const ListenChooseRelevantSet1 = [
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
    }
];