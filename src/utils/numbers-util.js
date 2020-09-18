export function randomSetOfNumbers(count, maxValue) {
    if (count >= maxValue) {
        return Array.from(Array(maxValue).keys());
    }

    const set = new Set();
    while (set.size < count) {
        set.add(Math.round(Math.random() * maxValue))
    }
    return Array.from(set);
}
