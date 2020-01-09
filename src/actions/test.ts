export const incrementBy = (amount: number = 1) => ({
    type: 'INCREMENT',
    payload: {
        amount
    }
});
