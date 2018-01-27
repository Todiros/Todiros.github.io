import './style.sass'
import $ from 'jquery'

const validateArr = arr => {
  if (arr.length < 2)
    arr.push(arr[0])
    
  return arr
}

const getInput = () => {
  let input = $('#input').val()
  let inputArr = input.split(" ").slice(0, 2).map(Number)
  
  return validateArr(inputArr)
}

const printLCM = LCM => {
  $("#result").text(LCM)
}

const findMinFromArr = arr => {
  if (arr[0] > arr[1])
    // swapping the two elements in the array
    arr[0] = arr.splice(1, 1, arr[0])[0]
  
  return arr
}

const findLCM = (LCM, next) => {
  let isLCM = false;
  let currentLCM = 0;
    
  while (!isLCM) {
    currentLCM += LCM

    if (currentLCM % next === 0) {
      isLCM = true
      LCM = currentLCM
    }
  }
  
  return LCM
}

const smallestCommons = arr => {
  arr = findMinFromArr(arr);
  let min = arr[0]
  let max = arr[1]
  
  let LCM = min;
  
  for (let i = min; i < max; i++) {
    let current = i
    let next = current + 1
    
    LCM = findLCM(LCM, next)
  }
  
  printLCM(LCM)
  // return arr
}

$("#label").click(() => {
  let display = $('#input').css('display')
  
  if (display != 'none') {
    $("#input").hide("fast")
    $('#numbers').text(findMinFromArr(getInput()).join(' - '))
    smallestCommons(getInput())
    
  }
  else
    $("#input").show("fast")
})