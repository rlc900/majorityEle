var checkStraightLine = function(coordinates) {
    const c1 = coordinates[1]
    const c2 = coordinates[0]
    const slope1 = calcSlope(c1, c2)

    for (let i = 1; i < coordinates.length; i++) {
        const c3 = coordinates[i]
        const c4 = coordinates[0]
        const slope2 = calcSlope(c3, c4)

        if(slope1 != slope2) {
            return false
        }
    }
    return true
};

function calcSlope(coord1, coord2) {
    if (coord1[0] - coord2[0] === 0) {
        return 0
    } else {
        return ((coord2[1] - coord1[1]) / (coord2[0] - coord1[0]));
    }
}
