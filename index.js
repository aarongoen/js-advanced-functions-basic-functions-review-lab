// Your code here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(visual_flair = '*') {
    function innerFunction(param = 'special') {
        return `You are ${param} ${visual_flair}`
    }
}

let encouragingPromptFunction = wrapAdjective('!!!')