class FlipCoinCommand {
    run() {
        const flipCoin = Math.floor(Math.random() * (2 - 1 + 1) + 1);
        let coinFace;
        if (flipCoin === 1) {
            coinFace = "Heads"
        } else {
            coinFace = "Tails"
        }
        return coinFace;
    }
}

export { FlipCoinCommand }