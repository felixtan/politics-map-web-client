import partyColors from '../fixtures/partyColors'
import partyCodeToName from '../fixtures/partyCodeToName'

export function getPartyColor(party) {
  const partyCode = partyNameToCode(party)
  return partyCode === undefined ? '#000000' : partyColors[partyCode]
}

export function partyNameToCode(party) {
  return _.findKey(partyCodeToName, (name, code) => {
    return name === party
  })
}

export function ordinalizeDistrict(districtNum) {
  // console.log(districtNum)
  if (districtNum !== null && districtNum !== undefined) {
    if (!isNaN(districtNum)) {
      return `${districtNum}${getNumberSuffix(districtNum)}`
    } else {
      return districtNum
    }
  }
}

export function getNumberSuffix(districtNum) {
  const n = typeof districtNum === 'string' ? districtNum : districtNum.toString()
  const lastDigit = n[n.length-1]
  const lastTwoDigits = n.length >= 2 ? n.substring(n.length-2, n.length) : undefined

  if (n.length >= 2 && (lastTwoDigits == 11 || lastTwoDigits == 12)) {
    return 'th'
  } else {
    switch(lastDigit) {
      case '1':
        return 'st'
        break
      case '2':
        return 'nd'
        break
      case '3':
        return 'rd'
        break
      default:
        return 'th'
    }
  }
}
