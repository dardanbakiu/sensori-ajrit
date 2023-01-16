export const getQualityColor = (currentQuality) => {
  if(currentQuality >= 0 && currentQuality <= 50) {
    return '#a8e05f'
  }

  if(currentQuality >= 51 && currentQuality <= 100) {
    return '#f9d26a'
  }

  if(currentQuality >= 101 && currentQuality <= 150) {
    return '#a8e05f'
  }

  if(currentQuality >= 151 && currentQuality <= 200) {
    return '#c09ff8'
  }

  if(currentQuality >= 201 && currentQuality <= 300) {
    return '#c6538c'
  }

  if(currentQuality > 300) {
    return '#c6538c'
  }
}