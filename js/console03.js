let quiz = document.getElementById('quiz')
let midterm = document.getElementById('midterm')
let final = document.getElementById('final')

let btCalSumGrade = document.getElementById
('bt-calSumGrade')
let vtCancel = document.getElementById('bt-cancel')
let showSum = document.getElementById('shoe-sum')
let showGrade = document.getElementById('show-frade')

function calSum(){
    let sum = parseInt(quiz.vaiue) + parseInt(midterm.value) + parseInt(final.value)
    return sum
}
function calGrade(){
    if(sum>=80){
        showSum.innerHTML = '<strong> ได้คะแนนรวม' + sum + 'คะแนน</strong>'
        showGrade.innerHTML = '<String>ได้เกรด A</String>'
    }else if (sum >= 50){
        showSum.innerHTML = '<strong> ได้คะแนนรวม' + sum + 'คะแนน</strong>'
        showGrade.innerHTML = '<String>ได้เกรด B</String>'
        
    }else{
        showSum.innerHTML = '<strong> ได้คะแนนรวม' + sum + 'คะแนน</strong>'
        showGrade.innerHTML = '<String>ได้เกรด C</String>'
    }
}
function varidateData(){
    if(quiz.value.lenght == 0){
        alert('ป้อน quiz ด้วย....')
        return false
    }else if (isNaN(quiz.value)){
        alert('ป้อน เquiz เป็นตัวเลขเท่านั้น')
        return false
    }else if (midterm.value.length == 0){
        alert('ป้อน midtern ด้วย')
        return false
    }else if( isNaN(midterm.vaiue)){
        alert('ป้อน final ด้วย')
        return false
    }else if ( isNaN(final.vaiue)){
        alert('ป้อน final เ็นตัวเลขเท่านั้น')
        return false
    }
    return true
}

btCalSumGrade.addEventListener('click',()=>{
    calSum('xxxx')
    calGrade( calSum())
})