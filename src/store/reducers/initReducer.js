
const initState = {
    authUser: { id: 1, userName: 'Nikola', email: 'nikola.dj.87@gmail.com', phoneNumber: "0600322301", userCredit: 30, userStatus: "standard", theme: 'light' },
    users: [
        { id: 1, userName: 'Nikola', email: 'nikola.dj.87@gmail.com', phoneNumber: "0600322301", userCredit: 30, userStatus: "standard", theme: 'light' },
        { id: 2, userName: 'Marko', email: 'Marko@gmail.com', phoneNumber: "0633323232", userCredit: 22, userStatus: "silver", theme: 'dark' }
    ],
    usersTasks: [
        { id: 1, taskOwnerId: 1, taskTitle: 'tasks title', taskBody: 'task body random text', taskInitTime: '03.09.2021', taskPrice: 400, proposalId: 1, },
        { id: 2, taskOwnerId: 1, taskTitle: 'task title', taskBody: 'task body random text', taskInitTime: '03.09.2021', taskPrice: 400, proposalId: 2 },
        { id: 3, taskOwnerId: 1, taskTitle: 'task title', taskBody: 'task body random text', taskInitTime: '03.09.2021', taskPrice: 400, proposalId: 3 },
    ],
    proposals: [
        { proposalId: 1, messagesId: 1, userFromId: 2 }
    ],
    messages: [
        { msgId: 1, msgFromId: 2, msgFromName: 'Marko', msgBody: "text", timestamp: 123243556, seen: false },
        { msgId: 2, msgFromId: 1, msgFromName: 'Nikola', msgBody: "text", timestamp: 123243557, seen: false },
        { msgId: 3, msgFromId: 2, msgFromName: 'Marko', msgBody: "text", timestamp: 123243558, seen: false },
        { msgId: 4, msgFromId: 1, msgFromName: 'Nikola', msgBody: "text", timestamp: 123243558, seen: false }
    ],
    usersConversations: [
        {
            chatId: 1,
            taskId: 3,
            msgSender: {
                userId: 2,
                userName: 'Marko',
                userEmail: "marko@gmail.com",
                phoneNumber: '0642225050'
            },
            priceOffer: 250,
            messages: [
                {
                    msgFromId: 2,
                    msgFormName: 'Marko',
                    msgId: 1,
                    msgSeen: false,
                    msgBody: "text",
                    msgTimestamp: '234534645234364576'
                },

            ]
        },
        {
            chatId: 2,
            taskId: 55,
            msgSender: {
                userId: 2,
                userName: 'Djordje',
                userEmail: "Djordje@gmail.com",
                phoneNumber: '0642265450'
            },
            priceOffer: 350,
            messages: [
                {
                    msgId: 1,
                    msgFromId: 2,
                    msgSeen: false,
                    msgBody: "text",
                    msgTimestamp: '234534645234364576'
                },
                {
                    msgId: 2,
                    msgFromId: 1,
                    msgSeen: false,
                    msgBody: "text",
                    msgTimestamp: '23453464536457234'
                },
                {
                    msgId: 3,
                    msgFromId: 2,
                    msgSeen: false,
                    msgBody: "text",
                    msgTimestamp: '234534645323464576'
                },
            ]
        },
    ],
    usersServices: [
        { id: 1, serviceCategory: 'Ciscenje', serviceDescription: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.', servicePrice: '400' },
        { id: 2, serviceCategory: 'Ciscenje', serviceDescription: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.', servicePrice: '400' },
        { id: 3, serviceCategory: 'Ciscenje', serviceDescription: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.', servicePrice: '400' },
        { id: 4, serviceCategory: 'Ciscenje', serviceDescription: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.', servicePrice: '400' },
    ],
    tasks: [
        { id: 1, taskTitle: 'Treba mi neko da okaci luster', taskBody: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.', taskInitTime: '03.09.2021', address: "Belgrade", taskOwner: 'Tamara', taskPrice: 300 },
        { id: 2, taskTitle: 'Treba mi neko da okaci luster', taskBody: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.', taskInitTime: '03.09.2021', address: "Belgrade", taskOwner: 'Tamara', taskPrice: 200 },
        { id: 3, taskTitle: 'Treba mi neko da okaci luster', taskBody: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.', taskInitTime: '03.09.2021', address: "Belgrade", taskOwner: 'Tamara', taskPrice: 300 },
        { id: 4, taskTitle: 'Treba mi neko da okaci luster', taskBody: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.', taskInitTime: '03.09.2021', address: "Belgrade", taskOwner: 'Tamara', taskPrice: 400 },
    ],
    loading: false,
    notification: 'Notification testing'
}
const initReducer = (state = initState, action) => {
    let newState = { ...state };
    switch (action.type) {
        case "NOTIFICATION":
            newState.notification = action.payload;
            break;

        // *************************************** 
        default:
            newState = state
    }
    return newState;
}

export default initReducer