import {ADD_HELPCONT} from "../actionTypes";

const helpContents = {
    title: 'RECOMMENDED ARTICLES',
    hContents: [
        {tit: 'Extenuating circumstances policy and the coronavirus(COVID-19)',
         cont: 'Updated 15 July 2020',
         id: 1
        },
        {tit: 'How do I create an account?',
            cont: `If you don't have an Airbnb account yet, go to airbnb.com and click Sign Up.`,
            id: 2
        },
        {tit: 'How do I reset or change my password?',
            cont: `If you don't forgotten your password, or you're having trouble logging in to your Airbnb account, go to...`,
            id: 3
        },
        {tit: 'What should I do if someone asks me to pay outside of the Airbnb website?',
            cont: `If you've been paid for your reservation outside of Airbnb(e.g. a bank transfer), you may have paid for a ...`,
            id: 4
        },
        {tit: 'What is the Airbnb cancellation policy for stays?',
            cont: `On Airbnbm, hosts set the cancellation policies that guests can book with. The terms vary depending on...`,
            id: 5
        },
    ],
    reservation: [
        {tit: 'Extenuating circumstances policy and the coronavirus(COVID-19)', id: 1},
        {tit: 'How do I submit a reservation request?', id: 2},
        {tit: 'What happens if my reservation request is declined or expires?', id: 3},
        {tit: 'Should I book if I have not heard back from the host?', id: 4},
        {tit: 'How do I check the status of my reservation as a guest?', id: 5},
    ],
    contacting: [
        {tit: 'Extenuating circumstances policy and the coronavirus(COVID-19)', id: 1},
        {tit: 'Can I visit a place to stay before I book?', id: 2},
        {tit: 'How do I read and send messages?', id: 3},
        {tit: 'What if a host asks me to sign a contract?', id: 4},
        {tit: 'How do I book a place on Airbnb?', id: 5},
    ],
    Prices: [
        {tit: 'Extenuating circumstances policy and the coronavirus(COVID-19)', id: 1},
        {tit: 'How is the price determined for my reservation?', id: 2},
        {tit: 'Can I pay with any currency?', id: 3},
        {tit: 'How do I pay for my long-term reservation?', id: 4},
        {tit: 'When am I charged for a reservation?', id: 5},
    ]
}

export const helpContReducer = (state = helpContents, action ) => {
    switch (action.type) {
        case ADD_HELPCONT:
            return {
                ...state
            }
        default:
            return state;
    }
}