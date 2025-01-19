const alpha = 0.2; // Like weightage of the engagement
const beta = 0.3;  // Comment weightage of the engagement
const gamma = 0.5; // Follower weightage of the engagement

/**
 * Caps a value within a given range
 * @param {number} value - The value to cap
 * @param {number} min - The minimum value
 * @param {number} max - The maximum value
 * @returns {number} - The capped value
 */
function cap(value, min, max) {
    return Math.max(min, Math.min(max, value));
}

/**
 * Calculates the engagement score
 * @param {number} startLikes - Initial likes count
 * @param {number} endLikes - Final likes count
 * @param {number} startComments - Initial comments count
 * @param {number} endComments - Final comments count
 * @param {number} startFollowers - Initial followers count
 * @param {number} endFollowers - Final followers count
 * @returns {number} - The calculated score
 */
function calculateScore(startLikes, endLikes, startComments, endComments, startFollowers, endFollowers) {
    if (startLikes === 0 || startComments === 0 || startFollowers === 0) {
        throw new Error("Start values for likes, comments, or followers cannot be zero.");
    }

    const deltaV = ((endLikes - startLikes) / startLikes) * 100;
    const deltaL = ((endComments - startComments) / startComments) * 100;
    const deltaS = ((endFollowers - startFollowers) / startFollowers) * 100;

    const cappedDeltaV = cap(deltaV, -100, 100);
    const cappedDeltaL = cap(deltaL, -100, 100);
    const cappedDeltaS = cap(deltaS, -100, 100);

    const score = (alpha * cappedDeltaV) + (beta * cappedDeltaL) + (gamma * cappedDeltaS);
    return score;
}

module.exports = calculateScore;